// _runtime/metro/00762__.js
import _mod713 from "00713__.js";
import _mod740 from "00740__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createMetricContainerEnvelopeItem = function createMetricContainerEnvelopeItem(items) {
  const obj = {
    type: "trace_metric",
    item_count: items.length,
    content_type: "application/vnd.sentry.items.trace-metric+json",
  };
  items = [obj];
  items[1] = { items };
  return items;
};
export const createMetricEnvelope = function createMetricEnvelope(items, sdk, tunnel, dsn) {
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  const obj = {};
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  const tmp2 = tunnel && dsn;
  if (tmp2) {
    const obj3 = _mod713;
    obj.dsn = obj3.dsnToString(dsn);
  }
  const obj5 = {
    type: "trace_metric",
    item_count: items.length,
    content_type: "application/vnd.sentry.items.trace-metric+json",
  };
  items = [obj5];
  items[1] = { items };
  const items1 = [items];
  const obj4 = _mod740;
  return obj4.createEnvelope(obj, items1);
};
