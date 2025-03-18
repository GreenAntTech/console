import type { ServerContext } from "../../common/server/lib/jsphere.d.ts";

export function onRequest(ctx: ServerContext) {
    console.log('middleware auth request1', ctx.request.url.pathname);
    ctx.request.url.pathname = ctx.request.url.pathname = '/hello'
}

export function onResponse(_ctx: ServerContext, response: Response) {
    console.log('middleware auth response', response.statusText);
    if (response.status == 404) {
        return new Response('FileNotFound - Nice HTML', { status: 404 });   
    }
}