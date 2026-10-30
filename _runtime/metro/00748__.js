// === Module 748: ? ===

// Module 748
import _mod701 from "module_701" /* 701 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 728 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function createLogContainerEnvelopeItem(items) {
  items = [, ];
  items[0] = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items[1] = { items };
  return items;
}
export function createLogEnvelope(items, _metadata, tunnel, dsn) {
  let sdk;
  if (_metadata != null) {
    sdk = _metadata.sdk;
  }
  const obj = {};
  if (sdk) {
    const obj2 = { name: _metadata.sdk.name, version: _metadata.sdk.version };
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
  items[0] = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items[1] = { items };
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
}