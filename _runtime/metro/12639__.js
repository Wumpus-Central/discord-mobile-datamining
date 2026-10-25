// === Module 12639: ? ===

// Module 12639
import _mod12584 from "module_12584" /* 12584 */;
import _mod12622 from "module_12622" /* 12622 */;
import _mod12625 from "module_12625" /* 12625 */;

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
    obj.dsn = _mod12625.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12584.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12622.createEnvelope(obj, items1);
};