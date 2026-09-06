// === Module 12858: ? ===

// Module 12858
import _mod12803 from "module_12803" /* 12803 */;
import _mod12841 from "module_12841" /* 12841 */;
import _mod12844 from "module_12844" /* 12844 */;

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
    obj.dsn = _mod12844.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12803.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12841.createEnvelope(obj, items1);
};