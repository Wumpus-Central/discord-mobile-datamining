// === Module 12416: captureAggregateMetrics ===

// Module 12416 (captureAggregateMetrics)
import _mod12313 from "module_12313" /* 12313 */;
import _mod12357 from "module_12357" /* 12357 */;
import _mod12360 from "module_12360" /* 12360 */;
import _mod12414 from "module_12414" /* 12414 */;

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
    obj.dsn = _mod12360.dsnToString(url);
  }
  const date = new Date();
  const result = _mod12414.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12357.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12313.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };