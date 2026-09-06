// discord_app/Dispatcher.tsx
import initialize from "../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../discord_common/js/packages/storage/Storage.tsx";
import LoggingUtils from "../discord_common/js/packages/flux/LoggingUtils.tsx";
import Constants from "modules/devtools/Constants.tsx";
import addSentryBreadcrumbDefault from "modules/sentry/addSentryBreadcrumb.native.tsx";
import size from "../_runtime/metro/00002__.js";

let obj = { Early: 0, [0]: "Early", Database: 1, [1]: "Database", Default: 2, [2]: "Default" };
const Storage = Storage2.Storage;
let flag = Storage.get(Constants.STORAGE_KEY_LOG_DISPATCHES);
if (flag == null) {
  flag = false;
}
obj = { persist: flag };
const actionLogger = new LoggingUtils.ActionLogger(obj);
obj = { addBreadcrumb: addSentryBreadcrumbDefault };
const dispatcher = new initialize.Dispatcher(obj.Default, actionLogger, obj);
const result = size.fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = obj;
