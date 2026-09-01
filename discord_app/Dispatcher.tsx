// discord_app/Dispatcher.tsx
import set from "../_runtime/00002_set.js";
import initialize from "../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../discord_common/js/packages/storage/Storage.tsx";
import logger from "../discord_common/js/packages/flux/LoggingUtils.tsx";
import STORAGE_KEY_LOG_DISPATCHES from "modules/devtools/Constants.tsx";
import addSentryBreadcrumbDefault from "modules/sentry/addSentryBreadcrumb.native.tsx";

let obj = { Early: 0, [0]: "Early", Database: 1, [1]: "Database", Default: 2, [2]: "Default" };
const Storage = Storage2.Storage;
let flag = Storage.get(STORAGE_KEY_LOG_DISPATCHES.STORAGE_KEY_LOG_DISPATCHES);
if (flag == null) {
  flag = false;
}
obj = { persist: flag };
const actionLogger = new logger.ActionLogger(obj);
obj = { addBreadcrumb: addSentryBreadcrumbDefault };
const dispatcher = new initialize.Dispatcher(obj.Default, actionLogger, obj);
const result = set.fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = obj;
