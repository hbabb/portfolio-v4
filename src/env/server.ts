import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(config({ path: ".env.local" }));

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },
  onInvalidAccess: (variable: string) => {
    throw new Error(`❌ Invalid Environment Variable: ${variable}`);
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
});
