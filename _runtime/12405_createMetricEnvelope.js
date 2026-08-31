// === Module 12405: createMetricEnvelope ===

// Module 12405 (createMetricEnvelope)
import consoleSandbox from "consoleSandbox" /* 12302 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 12346 */;
import dsnFromString from "dsnFromString" /* 12349 */;
import items2 from "items" /* 12403 */;

require = arg1;
const dependencyMap = arg6;
function createMetricEnvelope(arg0, arg1, sdk) {
  let obj = { sent_at: new Date().toISOString() };
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
    obj.dsn = dsnFromString.dsnToString(arg1);
    const obj4 = dsnFromString;
  }
  const date = new Date();
  const result = items2.serializeMetricBuckets(arg0);
  obj = { type: "statsd", length: result.length };
  const items = [obj, result];
  const obj5 = items2;
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
}
arg5.captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = consoleSandbox.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
arg5.createMetricEnvelope = createMetricEnvelope;