// === Module 12103: ? ===

// Module 12103
import _mod12048 from "module_12048" /* 12048 */;
import _mod12086 from "module_12086" /* 12086 */;
import _mod12089 from "module_12089" /* 12089 */;

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
    obj.dsn = _mod12089.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12048.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12086.createEnvelope(obj, items1);
};