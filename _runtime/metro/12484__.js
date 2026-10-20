// === Module 12484: ? ===

// Module 12484
import _mod12429 from "module_12429" /* 12429 */;
import _mod12467 from "module_12467" /* 12467 */;
import _mod12470 from "module_12470" /* 12470 */;

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
    obj.dsn = _mod12470.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12429.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12467.createEnvelope(obj, items1);
};