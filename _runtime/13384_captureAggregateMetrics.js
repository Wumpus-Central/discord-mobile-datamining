// === Module 13384: captureAggregateMetrics ===

// Module 13384 (captureAggregateMetrics)
import _mod13281 from "module_13281" /* 13281 */;
import _mod13325 from "module_13325" /* 13325 */;
import _mod13328 from "module_13328" /* 13328 */;
import _mod13382 from "module_13382" /* 13382 */;

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
    obj.dsn = _mod13328.dsnToString(url);
  }
  const date = new Date();
  const result = _mod13382.serializeMetricBuckets(arg0);
  items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod13325.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod13281.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };