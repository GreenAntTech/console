import type { ServerContext } from "../../common/server/lib/jsphere.d.ts";
import { renderDocument$ } from "../shared/element.min.js";
import "../shared/dependencies.js";

export async function onGET (ctx:ServerContext) : Promise<Response> {
    try {
        // const file = ctx.request.url.pathname.split('/')[1] || 'home';
        const file = 'console';
        const document = await renderDocument$({ file: `@console/client/components/pages/${file}/${file}.html` }, ctx) as string;
        return ctx.response.html('<!doctype html>' + document);
    }
    catch (e) {
        console.error(e);
        return ctx.response.send('', { status: 404, statusText: 'FileNotFound' });
    }
}
