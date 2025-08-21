import express from 'express';
import { serve } from 'inngest/express';
import { functions, inngest } from './inngest';

const app = express();

app.use(express.json({ limit: '5mb' }));

app.use('/api/inngest', serve({ client: inngest, functions }));

// Fly sets PORT. Default to 8080 for local.
const port = Number(process.env.PORT) || 8080;

app.get('/healthz', (_req, res) => res.status(200).send('ok'));

app.listen(port, () => {
  console.log(`Server listening on :${port}`);
});
