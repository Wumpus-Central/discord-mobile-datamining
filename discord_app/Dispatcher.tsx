// === Module 584: Dispatcher ===

// Module 584 (Dispatcher)
import get_initialized from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import LoggingUtils from "LoggingUtils" /* 579 */;
import Constants from "Constants" /* 585 */;
import addSentryBreadcrumbDefault from "addSentryBreadcrumb" /* 685 */;
import size from "module_2" /* 2 */;

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