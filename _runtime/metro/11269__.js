// === Module 11269: ? ===

// Module 11269
import _mod11214 from "module_11214" /* 11214 */;
import _mod11252 from "module_11252" /* 11252 */;
import _mod11255 from "module_11255" /* 11255 */;

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
    obj.dsn = _mod11255.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod11214.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod11252.createEnvelope(obj, items1);
};