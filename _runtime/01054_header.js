// === Module 1054: header ===

// Module 1054 (header)
import _mod693 from "module_693" /* 693 */;


export const header = 0;
export const items = 1;
export const createUserFeedbackEnvelope = function createUserFeedbackEnvelope(event_id, tunnel) {
  let date;
  let dsn;
  let metadata;
  let obj3;
  let obj6;
  ({ metadata, dsn } = tunnel);
  tunnel = tunnel.tunnel;
  const _Object = Object;
  const _Object2 = Object;
  const assign2 = Object.assign;
  const obj = { event_id: event_id.event_id, sent_at: date.toISOString() };
  let sdk;
  date = new Date();
  if (null != metadata) {
    sdk = metadata.sdk;
  }
  if (sdk) {
    const obj2 = { sdk: obj3 };
    sdk = obj2;
    obj3 = { name: metadata.sdk.name, version: metadata.sdk.version };
  }
  let tmp3 = tunnel;
  const assign2Result = assign2(obj, sdk);
  if (tmp3) {
    tmp3 = dsn;
  }
  if (tmp3) {
    const obj4 = { dsn: obj6.dsnToString(dsn) };
    tmp3 = obj4;
    obj6 = _mod693;
  }
  const items = [{ type: "user_report" }, event_id];
  const items1 = [items];
  const obj5 = assign(assign2Result, tmp3);
  const obj7 = _mod693;
  return obj7.createEnvelope(obj5, items1);
};