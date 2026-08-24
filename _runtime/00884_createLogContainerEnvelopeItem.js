// === Module 884: createLogContainerEnvelopeItem ===

// Module 884 (createLogContainerEnvelopeItem)
import dsnFromString from "dsnFromString" /* 837 */;
import forEachEnvelopeItem from "forEachEnvelopeItem" /* 864 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createLogContainerEnvelopeItem = function createLogContainerEnvelopeItem(item_count) {
  const items = [{ type: "log", item_count: item_count.length, content_type: "application/vnd.sentry.items.log+json" }, { items: item_count }];
  return items;
};
arg5.createLogEnvelope = function createLogEnvelope(items, _metadata, tunnel, dsn) {
  let sdk;
  if (_metadata != null) {
    sdk = _metadata.sdk;
  }
  let obj = {};
  if (sdk) {
    obj = { name: null, version: null };
    obj[0] = _metadata.sdk.name;
    obj[1] = _metadata.sdk.version;
    obj.sdk = obj;
  }
  let tmp2 = tunnel;
  if (tunnel) {
    tmp2 = dsn;
  }
  if (tmp2) {
    obj.dsn = dsnFromString.dsnToString(dsn);
    const obj3 = dsnFromString;
  }
  obj = { type: "log", item_count: items.length, content_type: "application/vnd.sentry.items.log+json" };
  items = [obj, { items }];
  const items1 = [items];
  return forEachEnvelopeItem.createEnvelope(obj, items1);
};