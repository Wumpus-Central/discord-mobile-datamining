// === Module 573: dispatcher ===

// Module 573 (dispatcher)
import set from "set" /* 2 */;
import initialize from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import logger from "logger" /* 567 */;
import STORAGE_KEY_LOG_DISPATCHES from "STORAGE_KEY_LOG_DISPATCHES" /* 574 */;
import addSentryBreadcrumbDefault from "addSentryBreadcrumb" /* 674 */;

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