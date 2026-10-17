// === Module 12430: ? ===

// Module 12430
import _mod12375 from "module_12375" /* 12375 */;
import _mod12413 from "module_12413" /* 12413 */;
import _mod12416 from "module_12416" /* 12416 */;

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
    obj.dsn = _mod12416.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12375.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12413.createEnvelope(obj, items1);
};