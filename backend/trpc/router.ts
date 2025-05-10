import { createTRPCRouter } from './create-context';
import { salesRouter } from './routes/sales/router';

export const appRouter = createTRPCRouter({
  sales: salesRouter,
});

export type AppRouter = typeof appRouter;
