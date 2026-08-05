import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
// _runtime/01178_createUserFeedbackEnvelope.js
const require = arg1;
const dependencyMap = arg6;
arg5.header = 0;
arg5.items = 1;
arg5.createUserFeedbackEnvelope = function createUserFeedbackEnvelope(event_id, tunnel) {
  let dsn;
  let metadata;
  ({ metadata, dsn } = tunnel);
  let obj = { event_id: event_id.event_id, sent_at: null };
  obj[1] = new Date().toISOString();
  let sdk;
  if (null != metadata) {
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
  tunnel = tunnel.tunnel;
  const merged = Object.assign(obj, sdk);
  if (tunnel) {
    tunnel = dsn;
  }
  if (tunnel) {
    const obj1 = { dsn: null };
    obj1[0] = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.dsnToString(dsn);
    tunnel = obj1;
    const obj6 = registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */;
  }
  const items = [{ type: "user_report" }, event_id];
  const merged1 = Object.assign(merged, tunnel);
  const date = new Date();
  const items1 = [items];
  return registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.createEnvelope(merged1, items1);
};