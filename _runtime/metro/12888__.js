// === Module 12888: ? ===

// Module 12888
import _mod12833 from "module_12833" /* 12833 */;
import _mod12871 from "module_12871" /* 12871 */;
import _mod12874 from "module_12874" /* 12874 */;

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
    obj.dsn = _mod12874.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12833.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12871.createEnvelope(obj, items1);
};