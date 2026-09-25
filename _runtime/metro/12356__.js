// === Module 12356: ? ===

// Module 12356
import _mod12301 from "module_12301" /* 12301 */;
import _mod12339 from "module_12339" /* 12339 */;
import _mod12342 from "module_12342" /* 12342 */;

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
    obj.dsn = _mod12342.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12301.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12339.createEnvelope(obj, items1);
};