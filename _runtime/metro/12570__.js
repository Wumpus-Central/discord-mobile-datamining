// === Module 12570: ? ===

// Module 12570
import _mod12515 from "module_12515" /* 12515 */;
import _mod12553 from "module_12553" /* 12553 */;
import _mod12556 from "module_12556" /* 12556 */;

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
    obj.dsn = _mod12556.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12515.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12553.createEnvelope(obj, items1);
};