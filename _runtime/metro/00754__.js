// _runtime/metro/00754__.js
import dateTimestampInSeconds from "../00703_dateTimestampInSeconds.js";
import forEachEnvelopeItem from "../00729_forEachEnvelopeItem.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }];
  if (!arg2) {
    let obj = dateTimestampInSeconds;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    obj = { dsn };
  } else {
    obj = {};
  }
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};
