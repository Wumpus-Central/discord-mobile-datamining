// === Module 13248: ? ===

// Module 13248
import _mod13204 from "module_13204" /* 13204 */;
import _mod13234 from "module_13234" /* 13234 */;

require = arg1;
const dependencyMap = arg6;

export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod13204.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod13234.createEnvelope(obj4, items1);
}