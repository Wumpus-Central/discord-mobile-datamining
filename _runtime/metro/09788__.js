// === Module 9788: ? ===

// Module 9788
import _mod9744 from "module_9744" /* 9744 */;
import _mod9774 from "module_9774" /* 9774 */;

require = arg1;
const dependencyMap = arg6;

export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod9744.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod9774.createEnvelope(obj4, items1);
}