// === Module 13350: ? ===

// Module 13350
import _mod13306 from "module_13306" /* 13306 */;
import _mod13336 from "module_13336" /* 13336 */;

require = arg1;
const dependencyMap = arg6;

export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod13306.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod13336.createEnvelope(obj4, items1);
}