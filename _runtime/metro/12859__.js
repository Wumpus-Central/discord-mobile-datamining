// === Module 12859: ? ===

// Module 12859
import _mod12815 from "module_12815" /* 12815 */;
import _mod12845 from "module_12845" /* 12845 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    let obj = _mod12815;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    obj = { dsn };
  } else {
    obj = {};
  }
  const items1 = [items];
  return _mod12845.createEnvelope(obj, items1);
};