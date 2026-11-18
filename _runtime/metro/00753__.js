// _runtime/metro/00753__.js
import dateTimestampInSeconds from "../00702_dateTimestampInSeconds.js";
import forEachEnvelopeItem from "../00728_forEachEnvelopeItem.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function createClientReportEnvelope(_clearOutcomesResult, tunnel, arg2) {
  let result = arg2;
  items = [{ type: "client_report" }];
  if (!arg2) {
    result = dateTimestampInSeconds.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events: _clearOutcomesResult };
  if (tunnel) {
    const obj3 = { dsn: tunnel };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj4, items1);
}
