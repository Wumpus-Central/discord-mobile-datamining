// === Module 11054: ? ===

// Module 11054
import _mod10999 from "module_10999" /* 10999 */;
import _mod11037 from "module_11037" /* 11037 */;
import _mod11040 from "module_11040" /* 11040 */;

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
    obj.dsn = _mod11040.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod10999.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod11037.createEnvelope(obj, items1);
};