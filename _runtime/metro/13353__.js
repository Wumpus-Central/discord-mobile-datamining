// === Module 13353: ? ===

// Module 13353
import _mod13298 from "module_13298" /* 13298 */;
import _mod13336 from "module_13336" /* 13336 */;
import _mod13339 from "module_13339" /* 13339 */;

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
    obj.dsn = _mod13339.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod13298.dropUndefinedKeys(contexts);
  }
  items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13336.createEnvelope(obj, items1);
}