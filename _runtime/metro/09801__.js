// === Module 9801: ? ===

// Module 9801
import _mod9733 from "module_9733" /* 9733 */;

require = arg1;
const dependencyMap = arg6;

export function applySdkMetadata(_metadata, arg1) {
  let arr = arg2;
  if (arg2 === undefined) {
    items = [arg1];
    arr = items;
  }
  let str = arg3;
  if (arg3 === undefined) {
    str = "npm";
  }
  const tmp = _metadata._metadata || {};
  if (!tmp.sdk) {
    const obj = { name: null, packages: null, version: null };
    const _HermesInternal = HermesInternal;
    obj.name = "sentry.javascript." + arg1;
    obj.packages = arr.map((item) => ({ name: "" + str + ":@sentry/" + item, version: _mod9733.SDK_VERSION }));
    obj.version = str(9733).SDK_VERSION;
    tmp.sdk = obj;
  }
  _metadata._metadata = tmp;
}