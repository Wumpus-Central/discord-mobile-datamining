// === Module 7834: createClientReportEnvelope ===

// Module 7834 (createClientReportEnvelope)
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 7790 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 7820 */;

require = arg1;
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