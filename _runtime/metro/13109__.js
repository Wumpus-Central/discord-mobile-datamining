// === Module 13109: ? ===

// Module 13109
import _mod13054 from "module_13054" /* 13054 */;
import _mod13092 from "module_13092" /* 13092 */;
import _mod13095 from "module_13095" /* 13095 */;

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
    obj.dsn = _mod13095.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod13054.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13092.createEnvelope(obj, items1);
};