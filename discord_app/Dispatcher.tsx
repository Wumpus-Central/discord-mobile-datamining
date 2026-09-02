// === Module 706: dispatcher ===

// Module 706 (dispatcher)
import set from "set" /* 2 */;
import initialize from "initialize" /* 586 */;
import Storage2 from "Storage" /* 592 */;
import logger from "logger" /* 648 */;
import STORAGE_KEY_LOG_DISPATCHES from "STORAGE_KEY_LOG_DISPATCHES" /* 707 */;
import addSentryBreadcrumbDefault from "addSentryBreadcrumb" /* 806 */;

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