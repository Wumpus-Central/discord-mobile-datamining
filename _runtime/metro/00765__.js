// _runtime/metro/00765__.js
import browserPerformanceTimeOrigin from "../00714_browserPerformanceTimeOrigin.js";
import _mod740 from "00740__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let obj3;
  let result = arg2;
  const items = [{ type: "client_report" }];
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
