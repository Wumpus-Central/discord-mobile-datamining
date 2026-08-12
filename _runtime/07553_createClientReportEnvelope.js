// _runtime/07553_createClientReportEnvelope.js
import { dateTimestampInSeconds } from "07509_dateTimestampInSeconds.js";
import { forEachEnvelopeItem } from "07539_forEachEnvelopeItem.js";
const require = arg1;
const dependencyMap = arg6;
arg5.createClientReportEnvelope = function createClientReportEnvelope(discarded_events) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    let obj = dateTimestampInSeconds;
    result = obj.dateTimestampInSeconds();
  }
  items[1] = { timestamp: result, discarded_events };
  if (arg1) {
    obj = { dsn: null };
    obj[0] = arg1;
  } else {
    obj = {};
  }
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};