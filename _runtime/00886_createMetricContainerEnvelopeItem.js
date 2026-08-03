const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createMetricContainerEnvelopeItem = function createMetricContainerEnvelopeItem(item_count) {
  const items = [{ type: "trace_metric", item_count: item_count.length, content_type: "application/vnd.sentry.items.trace-metric+json" }, { items: item_count }];
  return items;
};
arg5.createMetricEnvelope = function createMetricEnvelope(item_count, sdk) {
  sdk = undefined;
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  let obj = {};
  if (sdk) {
    obj = { name: null, version: null };
    obj[0] = sdk.sdk.name;
    obj[1] = sdk.sdk.version;
    obj.sdk = obj;
  }
  let tmp2 = arg2;
  if (arg2) {
    tmp2 = arg3;
  }
  if (tmp2) {
    obj.dsn = require(837) /* dsnFromString */.dsnToString(arg3);
    const obj3 = require(837) /* dsnFromString */;
  }
  obj = { type: "trace_metric", item_count: item_count.length, content_type: "application/vnd.sentry.items.trace-metric+json" };
  const items = [obj, { items: item_count }];
  const items1 = [items];
  return require(864) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};