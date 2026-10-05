// _runtime/12668_captureAggregateMetrics.js
import _mod12565 from "metro/12565__.js";
import _mod12609 from "metro/12609__.js";
import _mod12612 from "metro/12612__.js";
import _mod12666 from "metro/12666__.js";

function createMetricEnvelope(arg0, _dsn, sdk, arg3) {
  let date;
  const obj = { sent_at: date.toISOString() };
  date = new Date();
  const tmp = sdk && sdk.sdk;
  if (tmp) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  const tmp2 = arg3 && _dsn;
  if (tmp2) {
    const obj4 = _mod12612;
    obj.dsn = obj4.dsnToString(_dsn);
  }
  const obj5 = _mod12666;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [,];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12609;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12565.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };
