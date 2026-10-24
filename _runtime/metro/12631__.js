// _runtime/metro/12631__.js
import _mod12587 from "12587__.js";
import _mod12617 from "12617__.js";

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }];
  if (!arg2) {
    result = _mod12587.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod12617.createEnvelope(obj4, items1);
};
