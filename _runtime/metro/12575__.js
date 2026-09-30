// === Module 12575: ? ===

// Module 12575
import _mod12520 from "module_12520" /* 12520 */;
import _mod12558 from "module_12558" /* 12558 */;
import _mod12561 from "module_12561" /* 12561 */;

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
    obj.dsn = _mod12561.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12520.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12558.createEnvelope(obj, items1);
};