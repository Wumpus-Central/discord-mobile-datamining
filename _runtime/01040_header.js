// === Module 1040: header ===

// Module 1040 (header)
import _mod681 from "module_681" /* 681 */;

require = arg1;
const dependencyMap = arg6;

export const header = 0;
export const items = 1;
export function createUserFeedbackEnvelope(event_id, tunnel) {
  ({ metadata, dsn } = tunnel);
  const obj = { event_id: event_id.event_id, sent_at: new Date().toISOString() };
  let sdk;
  if (null != metadata) {
    sdk = metadata.sdk;
  }
  if (sdk) {
    const obj2 = { sdk: null };
    const obj3 = { name: metadata.sdk.name, version: metadata.sdk.version };
    obj2.sdk = obj3;
    sdk = obj2;
  }
  tunnel = tunnel.tunnel;
  const merged = Object.assign(obj, sdk);
  if (tunnel) {
    tunnel = dsn;
  }
  if (tunnel) {
    const obj4 = { dsn: _mod681.dsnToString(dsn) };
    tunnel = obj4;
  }
  const items = [{ type: "user_report" }, event_id];
  const merged1 = Object.assign(merged, tunnel);
  const date = new Date();
  const items1 = [items];
  return _mod681.createEnvelope(merged1, items1);
}