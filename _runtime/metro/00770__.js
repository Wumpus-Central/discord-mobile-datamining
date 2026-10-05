// === Module 770: ? ===

// Module 770
import _mod713 from "module_713" /* 713 */;
import _mod740 from "module_740" /* 740 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, trace, sdk, arg3, _dsn) {
  let date;
  const obj = { sent_at: date.toISOString() };
  sdk = undefined;
  date = new Date();
  if (sdk != null) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  const tmp2 = arg3 && _dsn;
  if (tmp2) {
    const obj4 = _mod713;
    obj.dsn = obj4.dsnToString(_dsn);
  }
  const tmp5 = trace;
  if (tmp5) {
    obj.trace = trace;
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj5 = _mod740;
  return obj5.createEnvelope(obj, items1);
};