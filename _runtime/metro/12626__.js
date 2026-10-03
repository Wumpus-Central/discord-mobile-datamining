// === Module 12626: ? ===

// Module 12626
import _mod12571 from "module_12571" /* 12571 */;
import _mod12609 from "module_12609" /* 12609 */;
import _mod12612 from "module_12612" /* 12612 */;

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
    obj.dsn = _mod12612.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12571.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12609.createEnvelope(obj, items1);
};