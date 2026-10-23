// _runtime/12623_captureAggregateMetrics.js
import _mod12520 from "metro/12520__.js";
import _mod12564 from "metro/12564__.js";
import _mod12567 from "metro/12567__.js";
import _mod12621 from "metro/12621__.js";

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
    obj.dsn = _mod12567.dsnToString(url);
  }
  const date = new Date();
  const result = _mod12621.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12564.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12520.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
