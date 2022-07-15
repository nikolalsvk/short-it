/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
  SHORT_URLS: KVNamespace;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    _ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);

    const { pathname } = url;

    const redirectURL = await env.SHORT_URLS.get(pathname);

    if (!redirectURL) {
      return new Response(
        `There is no defined URL for the path: '${pathname}', sorry :(`
      );
    }

    return Response.redirect(redirectURL, 301);
  },
};
