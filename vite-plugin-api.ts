import type { Plugin } from 'vite';
import { loadEnv } from 'vite';

export function apiPlugin(): Plugin {
  return {
    name: 'api-plugin',
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '');
      
      server.middlewares.use('/api/contact', async (req, res, next) => {
        // Handle CORS preflight
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.statusCode = 200;
          res.end();
          return;
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        // Set CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');

        try {
          const webhookUrl = env.VITE_SLACK_WEBHOOK_URL;
          
          if (!webhookUrl) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Webhook URL not configured' }));
            return;
          }

          let body = '';
          req.on('data', (chunk) => {
            body += chunk.toString();
          });

          req.on('end', async () => {
            try {
              const slackMessage = JSON.parse(body);

              const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(slackMessage),
              });

              if (response.ok) {
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true }));
              } else {
                const errorText = await response.text();
                res.statusCode = response.status;
                res.end(JSON.stringify({ error: 'Slack API error', details: errorText }));
              }
            } catch (error) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Failed to process request', details: error instanceof Error ? error.message : 'Unknown error' }));
            }
          });
        } catch (error) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'Server error', details: error instanceof Error ? error.message : 'Unknown error' }));
        }
      });
    },
  };
}

