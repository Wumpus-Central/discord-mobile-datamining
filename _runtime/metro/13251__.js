// === Module 13251: ? ===

// Module 13251
import _mod13196 from "module_13196" /* 13196 */;
import _mod13234 from "module_13234" /* 13234 */;
import _mod13237 from "module_13237" /* 13237 */;

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
    obj.dsn = _mod13237.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod13196.dropUndefinedKeys(contexts);
  }
  items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13234.createEnvelope(obj, items1);
}