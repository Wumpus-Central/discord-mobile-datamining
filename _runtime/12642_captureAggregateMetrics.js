// _runtime/12642_captureAggregateMetrics.js
import _mod12539 from "metro/12539__.js";
import _mod12583 from "metro/12583__.js";
import _mod12586 from "metro/12586__.js";
import _mod12640 from "metro/12640__.js";

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
    obj.dsn = _mod12586.dsnToString(url);
  }
  const date = new Date();
  const result = _mod12640.serializeMetricBuckets(arg0);
  const items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod12583.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12539.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
