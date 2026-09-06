// === Module 12900: captureAggregateMetrics ===

// Module 12900 (captureAggregateMetrics)
import _mod12797 from "module_12797" /* 12797 */;
import _mod12841 from "module_12841" /* 12841 */;
import _mod12844 from "module_12844" /* 12844 */;
import _mod12898 from "module_12898" /* 12898 */;

require = arg1;
const dependencyMap = arg6;
function createMetricEnvelope(arg0, url, sdk, arg3) {
  let obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    obj = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = url;
  }
  if (tmp) {
    obj.dsn = _mod12844.dsnToString(url);
  }
  const date = new Date();
  const result = _mod12898.serializeMetricBuckets(arg0);
  obj = { type: "statsd", length: result.length };
  const items = [obj, result];
  const items1 = [items];
  return _mod12841.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12797.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };