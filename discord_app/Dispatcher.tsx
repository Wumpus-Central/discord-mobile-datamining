// === Module 572: Dispatcher ===

// Module 572 (Dispatcher)
import initialize from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import LoggingUtils from "LoggingUtils" /* 567 */;
import Constants from "Constants" /* 573 */;
import addSentryBreadcrumbDefault from "addSentryBreadcrumb" /* 673 */;
import size from "module_2" /* 2 */;

const Storage = Storage2.Storage;
let flag = Storage.get(Constants.STORAGE_KEY_LOG_DISPATCHES);
if (flag == null) {
  flag = false;
}
const actionLogger = new LoggingUtils.ActionLogger({ persist: flag });
const dispatcher = new initialize.Dispatcher(actionLogger, { addBreadcrumb: addSentryBreadcrumbDefault });
const result = size.fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = initialize.DispatchBand;