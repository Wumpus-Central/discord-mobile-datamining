// _runtime/07478_createMetricEnvelope.js
import { consoleSandbox } from "07375_consoleSandbox.js";
import { forEachEnvelopeItem } from "07419_forEachEnvelopeItem.js";
import { dsnFromString } from "07422_dsnFromString.js";
import { items } from "07476_items.js";
const require = arg1;
const dependencyMap = arg6;
function createMetricEnvelope(arg0, arg1, sdk) {
  let obj = { sent_at: null };
  obj[0] = new Date().toISOString();
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    obj = { name: null, version: null };
    obj[0] = sdk.sdk.name;
    obj[1] = sdk.sdk.version;
    obj.sdk = obj;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = arg1;
  }
  if (tmp) {
    obj.dsn = dsnFromString /* dsnFromString */.dsnToString(arg1);
    const obj4 = dsnFromString /* dsnFromString */;
  }
  const date = new Date();
  const result = items /* items */.serializeMetricBuckets(arg0);
  obj = { type: "statsd", length: result.length };
  const items = [obj, result];
  const obj5 = items /* items */;
  const items1 = [items];
  return forEachEnvelopeItem /* forEachEnvelopeItem */.createEnvelope(obj, items1);
}
arg5.captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = consoleSandbox /* consoleSandbox */.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
arg5.createMetricEnvelope = createMetricEnvelope;