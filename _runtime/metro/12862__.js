// _runtime/metro/12862__.js
import _mod12807 from "12807__.js";
import _mod12845 from "12845__.js";
import _mod12848 from "12848__.js";

require = arg1;
const dependencyMap = arg6;

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, contexts, sdk, arg3, url) {
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
    tmp = url;
  }
  if (tmp) {
    obj.dsn = _mod12848.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12807.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12845.createEnvelope(obj, items1);
};
