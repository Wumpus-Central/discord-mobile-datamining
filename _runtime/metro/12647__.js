// _runtime/metro/12647__.js
import _mod12603 from "12603__.js";
import _mod12633 from "12633__.js";

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }];
  if (!arg2) {
    result = _mod12603.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod12633.createEnvelope(obj4, items1);
};
