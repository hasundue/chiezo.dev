import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  const resp = await ctx.next();
  const url = new URL(req.url);

  // Allow CORS for nostr.json
  if (url.pathname === "/.well-known/nostr.json") {
    resp.headers.set("Access-Control-Allow-Origin", "*");
  }

  return resp;
}
