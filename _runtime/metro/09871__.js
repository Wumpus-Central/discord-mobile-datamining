// === Module 9871: ? ===

// Module 9871
import _mod9816 from "module_9816" /* 9816 */;
import _mod9854 from "module_9854" /* 9854 */;
import _mod9857 from "module_9857" /* 9857 */;

require = arg1;
const dependencyMap = arg6;

export function createCheckInEnvelope(arg0, contexts, sdk, arg3, url) {
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
    obj.dsn = _mod9857.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod9816.dropUndefinedKeys(contexts);
  }
  items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod9854.createEnvelope(obj, items1);
}