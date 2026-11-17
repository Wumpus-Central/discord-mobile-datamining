// === Module 9868: ? ===

// Module 9868
import _mod9824 from "module_9824" /* 9824 */;
import _mod9854 from "module_9854" /* 9854 */;

require = arg1;
const dependencyMap = arg6;

export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod9824.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod9854.createEnvelope(obj4, items1);
}