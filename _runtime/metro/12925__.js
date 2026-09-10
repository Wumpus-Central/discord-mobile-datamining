// === Module 12925: ? ===

// Module 12925
import _mod12881 from "module_12881" /* 12881 */;
import _mod12911 from "module_12911" /* 12911 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    let obj = _mod12881;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    obj = { dsn };
  } else {
    obj = {};
  }
  const items1 = [items];
  return _mod12911.createEnvelope(obj, items1);
};