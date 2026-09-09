// === Module 12885: ? ===

// Module 12885
import _mod12841 from "module_12841" /* 12841 */;
import _mod12871 from "module_12871" /* 12871 */;

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    let obj = _mod12841;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    obj = { dsn };
  } else {
    obj = {};
  }
  const items1 = [items];
  return _mod12871.createEnvelope(obj, items1);
};