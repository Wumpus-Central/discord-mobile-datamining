// === Module 12365: ? ===

// Module 12365
import _mod12310 from "module_12310" /* 12310 */;
import _mod12348 from "module_12348" /* 12348 */;
import _mod12351 from "module_12351" /* 12351 */;

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
    obj.dsn = _mod12351.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12310.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12348.createEnvelope(obj, items1);
};