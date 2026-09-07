// _runtime/12904_captureAggregateMetrics.js
import _mod12801 from "metro/12801__.js";
import _mod12845 from "metro/12845__.js";
import _mod12848 from "metro/12848__.js";
import _mod12902 from "metro/12902__.js";

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
    obj.dsn = _mod12848.dsnToString(url);
  }
  const date = new Date();
  const result = _mod12902.serializeMetricBuckets(arg0);
  obj = { type: "statsd", length: result.length };
  const items = [obj, result];
  const items1 = [items];
  return _mod12845.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12801.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
