// _runtime/metro/09789__.js
import _mod9745 from "09745__.js";
import _mod9775 from "09775__.js";

require = arg1;
const dependencyMap = arg6;

export function createClientReportEnvelope(discarded_events, dsn, arg2) {
  let result = arg2;
  items = [{ type: "client_report" }];
  if (!arg2) {
    result = _mod9745.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (dsn) {
    const obj3 = { dsn };
    let obj4 = obj3;
  } else {
    obj4 = {};
  }
  const items1 = [items];
  return _mod9775.createEnvelope(obj4, items1);
}
