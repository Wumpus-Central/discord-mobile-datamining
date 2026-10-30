// === Module 13065: ? ===

// Module 13065
import _mod13010 from "module_13010" /* 13010 */;
import _mod13048 from "module_13048" /* 13048 */;
import _mod13051 from "module_13051" /* 13051 */;

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
    obj.dsn = _mod13051.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod13010.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod13048.createEnvelope(obj, items1);
}