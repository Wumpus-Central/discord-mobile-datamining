// === Module 760: ? ===

// Module 760
import _mod713 from "module_713" /* 713 */;
import _mod740 from "module_740" /* 740 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createLogContainerEnvelopeItem = function createLogContainerEnvelopeItem(items) {
  const obj = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items = [obj, ];
  items[1] = { items };
  return items;
};
export const createLogEnvelope = function createLogEnvelope(items, _metadata, tunnel, dsn) {
  let sdk;
  if (_metadata != null) {
    sdk = _metadata.sdk;
  }
  const obj = {};
  if (sdk) {
    const obj2 = { name: _metadata.sdk.name, version: _metadata.sdk.version };
    obj.sdk = obj2;
  }
  const tmp2 = tunnel && dsn;
  if (tmp2) {
    const obj3 = _mod713;
    obj.dsn = obj3.dsnToString(dsn);
  }
  const obj5 = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items = [obj5, ];
  items[1] = { items };
  const items1 = [items];
  const obj4 = _mod740;
  return obj4.createEnvelope(obj, items1);
};