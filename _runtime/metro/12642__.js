// === Module 12642: ? ===

// Module 12642
import _mod12587 from "module_12587" /* 12587 */;
import _mod12625 from "module_12625" /* 12625 */;
import _mod12628 from "module_12628" /* 12628 */;

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
    obj.dsn = _mod12628.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12587.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12625.createEnvelope(obj, items1);
};