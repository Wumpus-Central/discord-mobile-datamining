// === Module 936: ? ===

// Module 936
import _mod681 from "module_681" /* 681 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function createUserFeedbackEnvelope(event_id, tunnel) {
  ({ metadata, dsn } = tunnel);
  const obj = { event_id: event_id.event_id, sent_at: new Date().toISOString() };
  let sdk;
  if (metadata != null) {
    sdk = metadata.sdk;
  }
  if (sdk) {
    const obj2 = { sdk: null };
    const obj3 = { name: metadata.sdk.name, version: metadata.sdk.version };
    obj2.sdk = obj3;
    sdk = obj2;
  }
  const merged = Object.assign(sdk);
  let tmp3 = tunnel.tunnel && dsn;
  if (tmp3) {
    const obj4 = { dsn: _mod681.dsnToString(dsn) };
    tmp3 = obj4;
  }
  const merged1 = Object.assign(tmp3);
  const items = [{ type: "user_report" }, event_id];
  const date = new Date();
  const items1 = [items];
  return _mod681.createEnvelope(obj, items1);
}