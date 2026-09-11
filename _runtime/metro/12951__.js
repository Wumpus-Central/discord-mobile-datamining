// === Module 12951: ? ===

// Module 12951
import _mod12896 from "module_12896" /* 12896 */;
import _mod12934 from "module_12934" /* 12934 */;
import _mod12937 from "module_12937" /* 12937 */;

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
    obj.dsn = _mod12937.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12896.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12934.createEnvelope(obj, items1);
};