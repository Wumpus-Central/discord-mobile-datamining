// _runtime/metro/13111__.js
import _mod13056 from "13056__.js";
import _mod13094 from "13094__.js";
import _mod13097 from "13097__.js";

require = arg1;
const dependencyMap = arg6;

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, contexts, sdk, arg3, url) {
  const obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    const obj2 = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj2;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = url;
  }
  if (tmp) {
    obj.dsn = _mod13097.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod13056.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13094.createEnvelope(obj, items1);
};
