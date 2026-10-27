// === Module 12650: ? ===

// Module 12650
import _mod12595 from "module_12595" /* 12595 */;
import _mod12633 from "module_12633" /* 12633 */;
import _mod12636 from "module_12636" /* 12636 */;

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
    obj.dsn = _mod12636.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12595.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12633.createEnvelope(obj, items1);
};