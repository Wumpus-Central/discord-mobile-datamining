// _runtime/01043_header.js
import _mod682 from "metro/00682__.js";

require = arg1;
const dependencyMap = arg6;

export const header = 0;
export const items = 1;
export const createUserFeedbackEnvelope = function createUserFeedbackEnvelope(event_id, tunnel) {
  ({ metadata, dsn } = tunnel);
  let obj = { event_id: event_id.event_id, sent_at: new Date().toISOString() };
  let sdk;
  if (null != metadata) {
    sdk = metadata.sdk;
  }
  if (sdk) {
    obj = { sdk: null };
    obj = { name: metadata.sdk.name, version: metadata.sdk.version };
    obj.sdk = obj;
    sdk = obj;
  }
  tunnel = tunnel.tunnel;
  const merged = Object.assign(obj, sdk);
  if (tunnel) {
    tunnel = dsn;
  }
  if (tunnel) {
    const obj1 = { dsn: _mod682.dsnToString(dsn) };
    tunnel = obj1;
  }
  const items = [{ type: "user_report" }, event_id];
  const merged1 = Object.assign(merged, tunnel);
  const date = new Date();
  const items1 = [items];
  return _mod682.createEnvelope(merged1, items1);
};
