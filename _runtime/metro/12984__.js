// _runtime/metro/12984__.js
import _mod12940 from "12940__.js";
import _mod12970 from "12970__.js";

require = arg1;
const dependencyMap = arg6;

export const createClientReportEnvelope = function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  const items = [{ type: "client_report" }];
  if (!arg2) {
    let obj = _mod12940;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    obj = { dsn };
  } else {
    obj = {};
  }
  const items1 = [items];
  return _mod12970.createEnvelope(obj, items1);
};
