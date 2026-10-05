// discord_app/Dispatcher.tsx
import get_initialized from "../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../discord_common/js/packages/storage/Storage.tsx";
import LoggingUtils from "../discord_common/js/packages/flux/LoggingUtils.tsx";
import Constants from "modules/devtools/Constants.tsx";
import addSentryBreadcrumbDefault from "modules/sentry/addSentryBreadcrumb.native.tsx";
import size from "../_runtime/metro/00002__.js";

const STORAGE_KEY_LOG_DISPATCHES = Constants.STORAGE_KEY_LOG_DISPATCHES;
const ActionLogger = LoggingUtils.ActionLogger;
const Storage = Storage2.Storage;
let flag = Storage.get(STORAGE_KEY_LOG_DISPATCHES);
if (flag == null) {
  flag = false;
}
const obj = { persist: flag };
const actionLogger = new ActionLogger(obj);
const obj2 = { addBreadcrumb: addSentryBreadcrumbDefault };
const Dispatcher = get_initialized.Dispatcher;
const dispatcher = new Dispatcher(actionLogger, obj2);
const result = size.fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = get_initialized.DispatchBand;
