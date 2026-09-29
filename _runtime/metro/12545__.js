// === Module 12545: ? ===

// Module 12545
import _mod12490 from "module_12490" /* 12490 */;
import _mod12528 from "module_12528" /* 12528 */;
import _mod12531 from "module_12531" /* 12531 */;

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
    obj.dsn = _mod12531.dsnToString(url);
  }
  if (contexts) {
    obj.trace = _mod12490.dropUndefinedKeys(contexts);
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return _mod12528.createEnvelope(obj, items1);
};