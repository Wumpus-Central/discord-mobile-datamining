// === Module 950: ? ===

// Module 950
import _mod693 from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createUserFeedbackEnvelope = function createUserFeedbackEnvelope(event_id, tunnel) {
  let date;
  let dsn;
  let metadata;
  let obj3;
  let obj6;
  ({ metadata, dsn } = tunnel);
  tunnel = tunnel.tunnel;
  const obj = { event_id: event_id.event_id, sent_at: date.toISOString() };
  let sdk;
  date = new Date();
  if (metadata != null) {
    sdk = metadata.sdk;
  }
  if (sdk) {
    const obj2 = { sdk: obj3 };
    sdk = obj2;
    obj3 = { name: metadata.sdk.name, version: metadata.sdk.version };
  }
  const merged = Object.assign(sdk);
  let tmp3 = tunnel && dsn;
  if (tmp3) {
    const obj4 = { dsn: obj6.dsnToString(dsn) };
    tmp3 = obj4;
    obj6 = _mod693;
  }
  const merged1 = Object.assign(tmp3);
  const items = [{ type: "user_report" }, event_id];
  const items1 = [items];
  const obj7 = _mod693;
  return obj7.createEnvelope(obj, items1);
};