// === Module 13062: ? ===

// Module 13062
import _mod13018 from "module_13018" /* 13018 */;
import _mod13048 from "module_13048" /* 13048 */;

require = arg1;
const dependencyMap = arg6;

export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    result = _mod13018.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod13048.createEnvelope(obj4, items1);
}