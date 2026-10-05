// _runtime/metro/12626__.js
import _mod12571 from "12571__.js";
import _mod12609 from "12609__.js";
import _mod12612 from "12612__.js";

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, contexts, sdk, arg3, _dsn) {
  let date;
  const obj = { sent_at: date.toISOString() };
  date = new Date();
  const tmp = sdk && sdk.sdk;
  if (tmp) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  const tmp2 = arg3 && _dsn;
  if (tmp2) {
    const obj4 = _mod12612;
    obj.dsn = obj4.dsnToString(_dsn);
  }
  const tmp5 = contexts;
  if (tmp5) {
    const obj5 = _mod12571;
    obj.trace = obj5.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const items1 = [items];
  const obj6 = _mod12609;
  return obj6.createEnvelope(obj, items1);
};
