// === Module 573: Dispatcher ===

// Module 573 (Dispatcher)
import initialize from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import LoggingUtils from "LoggingUtils" /* 567 */;
import Constants from "Constants" /* 574 */;
import addSentryBreadcrumbDefault from "addSentryBreadcrumb" /* 674 */;
import size from "module_2" /* 2 */;

const obj = { Early: 0, [0]: "Early", Database: 1, [1]: "Database", Default: 2, [2]: "Default" };
const Storage = Storage2.Storage;
let flag = Storage.get(Constants.STORAGE_KEY_LOG_DISPATCHES);
if (flag == null) {
  flag = false;
}
const actionLogger = new LoggingUtils.ActionLogger({ persist: flag });
const dispatcher = new initialize.Dispatcher(obj.Default, actionLogger, { addBreadcrumb: addSentryBreadcrumbDefault });
const result = size.fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = obj;