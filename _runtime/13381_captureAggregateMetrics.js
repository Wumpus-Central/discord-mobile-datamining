// === Module 13381: captureAggregateMetrics ===

// Module 13381 (captureAggregateMetrics)
import _mod13278 from "module_13278" /* 13278 */;
import _mod13322 from "module_13322" /* 13322 */;
import _mod13325 from "module_13325" /* 13325 */;
import _mod13379 from "module_13379" /* 13379 */;

require = arg1;
const dependencyMap = arg6;
function createMetricEnvelope(arg0, url, sdk, arg3) {
  const obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = url;
  }
  if (tmp) {
    obj.dsn = _mod13325.dsnToString(url);
  }
  const date = new Date();
  const result = _mod13379.serializeMetricBuckets(arg0);
  items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod13322.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13278.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };