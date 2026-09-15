// === Module 12993: ? ===

// Module 12993
import _mod12938 from "module_12938" /* 12938 */;
import _mod12976 from "module_12976" /* 12976 */;
import _mod12979 from "module_12979" /* 12979 */;

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
    obj.dsn = _mod12979.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12938.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12976.createEnvelope(obj, items1);
};