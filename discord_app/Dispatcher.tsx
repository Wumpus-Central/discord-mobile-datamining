import { Storage } from "Storage";

let obj = { Early: 0, [0]: "Early", Database: 1, [1]: "Database", Default: 2, [2]: "Default" };
let flag = Storage.get(require("STORAGE_KEY_LOG_DISPATCHES").STORAGE_KEY_LOG_DISPATCHES);
if (flag == null) {
  flag = false;
}
obj = { persist: flag };
const actionLogger = new require("logger").ActionLogger(obj);
obj = { addBreadcrumb: null };
obj[0] = require("addSentryBreadcrumb");
const dispatcher = new require("initialize").Dispatcher(obj.Default, actionLogger, obj);
const result = require("Storage").fileFinishedImporting("Dispatcher.tsx");

export default dispatcher;
export const DispatchBand = obj;