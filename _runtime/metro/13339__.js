// === Module 13339: ? ===

// Module 13339
import _mod13295 from "module_13295" /* 13295 */;
import _mod13325 from "module_13325" /* 13325 */;

require = arg1;
const dependencyMap = arg6;

export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod13295.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod13325.createEnvelope(obj4, items1);
}