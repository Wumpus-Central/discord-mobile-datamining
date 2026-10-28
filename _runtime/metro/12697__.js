// === Module 12697: ? ===

// Module 12697
import _mod12642 from "module_12642" /* 12642 */;
import _mod12680 from "module_12680" /* 12680 */;
import _mod12683 from "module_12683" /* 12683 */;

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
    obj.dsn = _mod12683.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12642.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12680.createEnvelope(obj, items1);
};