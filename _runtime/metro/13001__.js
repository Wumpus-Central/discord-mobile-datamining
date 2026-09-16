// === Module 13001: ? ===

// Module 13001
import _mod12946 from "module_12946" /* 12946 */;
import _mod12984 from "module_12984" /* 12984 */;
import _mod12987 from "module_12987" /* 12987 */;

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
    obj.dsn = _mod12987.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12946.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12984.createEnvelope(obj, items1);
};