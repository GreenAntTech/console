import type { ServerContext } from "../../common/server/lib/jsphere.d.ts";
import { renderDocument$ } from "../shared/element.min1.js";
import "../shared/dependencies.js";

export async function onGET (ctx:ServerContext) : Promise<Response> {
    try {
        const document = await renderDocument$({ file: `console/client/components/pages/console/console.html` }, ctx) as string;
        return ctx.response.html('<!doctype html>' + document);
    }
    catch (e) {
        console.error(e);
        return ctx.response.html(e.message);
    }
}
