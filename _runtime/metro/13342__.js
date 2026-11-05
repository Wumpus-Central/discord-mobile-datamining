// === Module 13342: ? ===

// Module 13342
import _mod13287 from "module_13287" /* 13287 */;
import _mod13325 from "module_13325" /* 13325 */;
import _mod13328 from "module_13328" /* 13328 */;

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
    obj.dsn = _mod13328.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod13287.dropUndefinedKeys(contexts);
  }
  items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13325.createEnvelope(obj, items1);
}