import type { ServerContext } from "../../common/server/lib/jsphere.d.ts";

export function onRequest(ctx: ServerContext) {
    console.log('middleware auth request', ctx.request.url.pathname);
}

export function onResponse(_ctx: ServerContext, response: Response) {
    console.log('middleware auth response', response.status);
}