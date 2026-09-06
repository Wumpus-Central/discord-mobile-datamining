// === Module 751: ? ===

// Module 751
import _mod702 from "module_702" /* 702 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 729 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createMetricContainerEnvelopeItem = function createMetricContainerEnvelopeItem(items) {
  items = [, ];
  items[0] = { type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
  items[1] = { items };
  return items;
};
export const createMetricEnvelope = function createMetricEnvelope(items, sdk, tunnel, dsn) {
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  let obj = {};
  if (sdk) {
    obj = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj;
  }
  let tmp2 = tunnel;
  if (tunnel) {
    tmp2 = dsn;
  }
  if (tmp2) {
    obj.dsn = _mod702.dsnToString(dsn);
  }
  obj = { type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
  items = [obj, ];
  items[1] = { items };
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};