// === Module 709: dispatcher ===

// Module 709 (dispatcher)
import obj132 from "obj132" /* 2 */;
import initialize from "initialize" /* 589 */;
import Storage2 from "Storage" /* 595 */;
import logger from "logger" /* 651 */;
import STORAGE_KEY_LOG_DISPATCHES from "STORAGE_KEY_LOG_DISPATCHES" /* 710 */;
import addSentryBreadcrumbDefault from "addSentryBreadcrumb" /* 809 */;

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
const result = obj132.fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = obj;