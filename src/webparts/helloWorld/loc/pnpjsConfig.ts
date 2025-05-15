import { WebPartContext } from "@microsoft/sp-webpart-base";
import { spfi, SPFI, SPFx } from "@pnp/sp";
import { LogLevel, PnPLogging } from "@pnp/logging";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/batching";
import "@pnp/sp/site-users/web";
import "@pnp/sp/profiles";
import "@pnp/sp/items/get-all";
import "@pnp/sp/folders";
import "@pnp/sp/files/folder";
import "@pnp/sp/fields";

let sp: SPFI;
export const getSP = (context?: WebPartContext): SPFI => {
  if (context !== null && (sp === undefined || sp === null)) {
    sp = spfi().using(SPFx(context)).using(PnPLogging(LogLevel.Warning));
  }
  return sp;
};
