// === Module 765: ? ===

// Module 765
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 714 */;
import _mod740 from "module_740" /* 740 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    const obj = browserPerformanceTimeOrigin;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  const createEnvelope = _mod740.createEnvelope;
  _mod740;
  if (dsn) {
    obj3 = { dsn };
    const obj2 = { dsn };
  } else {
    obj3 = {};
  }
  const items1 = [items];
  return createEnvelope(obj3, items1);
};