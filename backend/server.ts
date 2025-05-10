import { serve } from '@hono/node-server';
import app from './hono';
import dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT || '3000');
serve({ fetch: app.fetch, port });
console.log(`✅ Server is running on port ${port}`);
