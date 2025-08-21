// inngest/helloWorld.ts
import { inngest } from "./client";

export default inngest.createFunction(
  { id: "hello-world" },
  { event: "demo/event.sent" },
  async ({ event }) => {
    return { message: `Hello ${event.data.message}!` };
  }
);
