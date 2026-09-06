// _runtime/metro/12858__.js
import _mod12803 from "12803__.js";
import _mod12841 from "12841__.js";
import _mod12844 from "12844__.js";

require = arg1;
const dependencyMap = arg6;

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, arg1, sdk, arg3, arg4) {
  let obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    obj = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = arg4;
  }
  if (tmp) {
    obj.dsn = _mod12844.dsnToString(arg4);
  }
  if (arg1) {
    obj.trace = _mod12803.dropUndefinedKeys(arg1);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12841.createEnvelope(obj, items1);
};
