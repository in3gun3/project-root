import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { HonoContext } from 'hono';

export const createContext = async (c: HonoContext) => ({});
export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
