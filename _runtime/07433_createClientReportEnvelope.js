// _runtime/07433_createClientReportEnvelope.js
const require = arg1;
const dependencyMap = arg6;
arg5.createClientReportEnvelope = function createClientReportEnvelope(discarded_events) {
  let result = arg2;
  const items = [{ type: "client_report" }, ];
  if (!arg2) {
    let obj = require("07389_dateTimestampInSeconds.js") /* dateTimestampInSeconds */;
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
  return require("07419_forEachEnvelopeItem.js") /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};