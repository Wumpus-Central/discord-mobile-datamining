// === Module 12683: captureAggregateMetrics ===

// Module 12683 (captureAggregateMetrics)
import _mod12580 from "module_12580" /* 12580 */;
import _mod12624 from "module_12624" /* 12624 */;
import _mod12627 from "module_12627" /* 12627 */;
import _mod12681 from "module_12681" /* 12681 */;

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
    const obj4 = _mod12627;
    obj.dsn = obj4.dsnToString(_dsn);
  }
  const obj5 = _mod12681;
  const result = obj5.serializeMetricBuckets(arg0);
  const items = [, ];
  const obj3 = { type: "statsd", length: result.length };
  items[0] = obj3;
  items[1] = result;
  const items1 = [items];
  const obj7 = _mod12624;
  return obj7.createEnvelope(obj, items1);
}

export const captureAggregateMetrics = function captureAggregateMetrics(_client, arr) {
  const logger = _mod12580.logger;
  logger.log("Flushing aggregated metrics, number of metrics: " + arr.length);
  const dsn = _client.getDsn();
  const sdkMetadata = _client.getSdkMetadata();
  _client.sendEnvelope(createMetricEnvelope(arr, dsn, sdkMetadata, _client.getOptions().tunnel));
};
export { createMetricEnvelope };