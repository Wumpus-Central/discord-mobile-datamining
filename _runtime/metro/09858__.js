// === Module 9858: ? ===

// Module 9858
import _mod9803 from "module_9803" /* 9803 */;
import _mod9841 from "module_9841" /* 9841 */;
import _mod9844 from "module_9844" /* 9844 */;

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
    obj.dsn = _mod9844.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod9803.dropUndefinedKeys(contexts);
  }
  items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod9841.createEnvelope(obj, items1);
}