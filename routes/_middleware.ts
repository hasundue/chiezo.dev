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

  // Allow CORS for images and nostr.json
  if (
    url.pathname === "/.well-known/nostr.json" ||
    url.pathname.startsWith("/images/")
  ) {
    resp.headers.set("Access-Control-Allow-Origin", "*");
  }

  return resp;
}
