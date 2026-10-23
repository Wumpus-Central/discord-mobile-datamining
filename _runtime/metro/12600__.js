// === Module 12600: ? ===

// Module 12600
import _mod12545 from "module_12545" /* 12545 */;
import _mod12583 from "module_12583" /* 12583 */;
import _mod12586 from "module_12586" /* 12586 */;

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
    obj.dsn = _mod12586.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12545.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12583.createEnvelope(obj, items1);
};