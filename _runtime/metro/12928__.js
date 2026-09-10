// === Module 12928: ? ===

// Module 12928
import _mod12873 from "module_12873" /* 12873 */;
import _mod12911 from "module_12911" /* 12911 */;
import _mod12914 from "module_12914" /* 12914 */;

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
    obj.dsn = _mod12914.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12873.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12911.createEnvelope(obj, items1);
};