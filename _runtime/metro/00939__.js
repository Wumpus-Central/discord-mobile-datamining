// _runtime/metro/00939__.js
import _mod682 from "00682__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const createUserFeedbackEnvelope = function createUserFeedbackEnvelope(event_id, tunnel) {
  ({ metadata, dsn } = tunnel);
  let obj = { event_id: event_id.event_id, sent_at: new Date().toISOString() };
  let sdk;
  if (metadata != null) {
    sdk = metadata.sdk;
  }
  if (sdk) {
    obj = { sdk: null };
    obj = { name: metadata.sdk.name, version: metadata.sdk.version };
    obj.sdk = obj;
    sdk = obj;
  }
  const merged = Object.assign(sdk);
  let tmp3 = tunnel.tunnel && dsn;
  if (tmp3) {
    const obj1 = { dsn: _mod682.dsnToString(dsn) };
    tmp3 = obj1;
  }
  const merged1 = Object.assign(tmp3);
  const items = [{ type: "user_report" }, event_id];
  const date = new Date();
  const items1 = [items];
  return _mod682.createEnvelope(obj, items1);
};
