// === Module 12634: ? ===

// Module 12634
import _mod12579 from "module_12579" /* 12579 */;
import _mod12617 from "module_12617" /* 12617 */;
import _mod12620 from "module_12620" /* 12620 */;

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
    obj.dsn = _mod12620.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12579.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12617.createEnvelope(obj, items1);
};