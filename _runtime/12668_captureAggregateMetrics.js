// === Module 12668: captureAggregateMetrics ===

// Module 12668 (captureAggregateMetrics)
import _mod12565 from "module_12565" /* 12565 */;
import _mod12609 from "module_12609" /* 12609 */;
import _mod12612 from "module_12612" /* 12612 */;
import _mod12666 from "module_12666" /* 12666 */;

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
    obj.dsn = _mod12612.dsnToString(url);
  }
  const date = new Date();
  const result = _mod12666.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12609.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12565.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };