// === Module 13197: ? ===

// Module 13197
import _mod13142 from "module_13142" /* 13142 */;
import _mod13180 from "module_13180" /* 13180 */;
import _mod13183 from "module_13183" /* 13183 */;

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
    obj.dsn = _mod13183.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod13142.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13180.createEnvelope(obj, items1);
};