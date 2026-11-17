// _runtime/09913_captureAggregateMetrics.js
import _mod9810 from "metro/09810__.js";
import _mod9854 from "metro/09854__.js";
import _mod9857 from "metro/09857__.js";
import _mod9911 from "metro/09911__.js";

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
    obj.dsn = _mod9857.dsnToString(url);
  }
  const date = new Date();
  const result = _mod9911.serializeMetricBuckets(arg0);
  items = [{ type: "statsd", length: result.length }, result];
  const obj3 = { type: "statsd", length: result.length };
  const items1 = [items];
  return _mod9854.createEnvelope(obj, items1);
}

export function captureAggregateMetrics(_client, arr) {
  const logger = _mod9810.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
}
export { createMetricEnvelope };
