// === Module 12374: ? ===

// Module 12374
import _mod12319 from "module_12319" /* 12319 */;
import _mod12357 from "module_12357" /* 12357 */;
import _mod12360 from "module_12360" /* 12360 */;

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
    obj.dsn = _mod12360.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12319.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12357.createEnvelope(obj, items1);
};