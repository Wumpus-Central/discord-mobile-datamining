// === Module 9791: ? ===

// Module 9791
import _mod9736 from "module_9736" /* 9736 */;
import _mod9774 from "module_9774" /* 9774 */;
import _mod9777 from "module_9777" /* 9777 */;

require = arg1;
const dependencyMap = arg6;

export function createCheckInEnvelope(arg0, contexts, sdk, arg3, url) {
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
    obj.dsn = _mod9777.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod9736.dropUndefinedKeys(contexts);
  }
  items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod9774.createEnvelope(obj, items1);
}