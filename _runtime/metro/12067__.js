// === Module 12067: ? ===

// Module 12067
import _mod12012 from "module_12012" /* 12012 */;
import _mod12050 from "module_12050" /* 12050 */;
import _mod12053 from "module_12053" /* 12053 */;

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
    obj.dsn = _mod12053.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12012.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12050.createEnvelope(obj, items1);
};