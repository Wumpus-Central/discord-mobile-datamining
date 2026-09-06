// === Module 751: ? ===

// Module 751
import _mod702 from "module_702" /* 702 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 729 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createMetricContainerEnvelopeItem = function createMetricContainerEnvelopeItem(items) {
  items = [{ type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" }, { items }];
  return items;
};
export const createMetricEnvelope = function createMetricEnvelope(items, sdk, arg2, arg3) {
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  let obj = {};
  if (sdk) {
    obj = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj;
  }
  let tmp2 = arg2;
  if (arg2) {
    tmp2 = arg3;
  }
  if (tmp2) {
    obj.dsn = _mod702.dsnToString(arg3);
  }
  obj = { type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
  items = [obj, { items }];
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};