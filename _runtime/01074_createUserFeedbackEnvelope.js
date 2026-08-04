// _runtime/01074_createUserFeedbackEnvelope.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.createUserFeedbackEnvelope = function createUserFeedbackEnvelope(event_id, tunnel) {
  let dsn;
  let metadata;
  ({ metadata, dsn } = tunnel);
  let obj = { event_id: event_id.event_id, sent_at: null };
  obj[1] = new Date().toISOString();
  let sdk;
  if (metadata != null) {
    sdk = metadata.sdk;
  }
  if (sdk) {
    obj = { sdk: null };
    obj = { name: null, version: null };
    obj[0] = metadata.sdk.name;
    obj[1] = metadata.sdk.version;
    obj[0] = obj;
    sdk = obj;
  }
  const merged = Object.assign(sdk);
  let tmp3 = tunnel.tunnel && dsn;
  if (tmp3) {
    const obj1 = { dsn: null };
    obj1[0] = require(817) /* registerSpanErrorInstrumentation */.dsnToString(dsn);
    tmp3 = obj1;
    const obj6 = require(817) /* registerSpanErrorInstrumentation */;
  }
  const merged1 = Object.assign(tmp3);
  const items = [{ type: "user_report" }, event_id];
  const date = new Date();
  const items1 = [items];
  return require(817) /* registerSpanErrorInstrumentation */.createEnvelope(obj, items1);
};