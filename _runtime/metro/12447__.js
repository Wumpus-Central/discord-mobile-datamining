// === Module 12447: ? ===

// Module 12447
import _mod12392 from "module_12392" /* 12392 */;
import _mod12430 from "module_12430" /* 12430 */;
import _mod12433 from "module_12433" /* 12433 */;

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
    obj.dsn = _mod12433.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12392.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12430.createEnvelope(obj, items1);
};