// === Module 12855: createClientReportEnvelope ===

// Module 12855 (createClientReportEnvelope)
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 12811 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 12841 */;

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