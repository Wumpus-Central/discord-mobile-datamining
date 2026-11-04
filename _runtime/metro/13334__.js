// === Module 13334: ? ===

// Module 13334
import _mod13279 from "module_13279" /* 13279 */;
import _mod13317 from "module_13317" /* 13317 */;
import _mod13320 from "module_13320" /* 13320 */;

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
    obj.dsn = _mod13320.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod13279.dropUndefinedKeys(contexts);
  }
  items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13317.createEnvelope(obj, items1);
}