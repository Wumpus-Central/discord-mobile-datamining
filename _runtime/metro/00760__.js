// === Module 760: ? ===

// Module 760
import _mod713 from "module_713" /* 713 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 740 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createLogContainerEnvelopeItem = function createLogContainerEnvelopeItem(items) {
  items = [, ];
  items[0] = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
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
  let tmp2 = tunnel;
  if (tunnel) {
    tmp2 = dsn;
  }
  if (tmp2) {
    obj.dsn = _mod713.dsnToString(dsn);
  }
  items = [, ];
  items[0] = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items[1] = { items };
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};