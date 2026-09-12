// === Module 12987: ? ===

// Module 12987
import _mod12932 from "module_12932" /* 12932 */;
import _mod12970 from "module_12970" /* 12970 */;
import _mod12973 from "module_12973" /* 12973 */;

require = arg1;
const dependencyMap = arg6;

export const createCheckInEnvelope = function createCheckInEnvelope(arg0, contexts, sdk, arg3, url) {
  let obj = { sent_at: new Date().toISOString() };
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    obj = { name: sdk.sdk.name, version: sdk.sdk.version };
    obj.sdk = obj;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = url;
  }
  if (tmp) {
    obj.dsn = _mod12973.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12932.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12970.createEnvelope(obj, items1);
};