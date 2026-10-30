// === Module 750: ? ===

// Module 750
import _mod701 from "module_701" /* 701 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 728 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function createMetricContainerEnvelopeItem(items) {
  items = [, ];
  items[0] = { type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
  items[1] = { items };
  return items;
}
export function createMetricEnvelope(items, sdk, tunnel, dsn) {
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  const obj = {};
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  let tmp2 = tunnel;
  if (tunnel) {
    tmp2 = dsn;
  }
  if (tmp2) {
    obj.dsn = _mod701.dsnToString(dsn);
  }
  items = [, ];
  items[0] = { type: "trace_metric", item_count: items.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
  items[1] = { items };
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
}