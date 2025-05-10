import { Hono } from 'hono';
import { trpcServer } from '@hono/trpc-server';
import { appRouter } from './trpc/router';
import { createContext } from './trpc/create-context';
import { logger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';
import { basicAuth } from './middleware/auth';

const app = new Hono();

app.use('*', logger);
app.use('*', errorHandler);
app.use('/api/*', basicAuth);

app.use(
  '/api/trpc',
  trpcServer({
    router: appRouter,
    createContext,
  })
);

export default app;
