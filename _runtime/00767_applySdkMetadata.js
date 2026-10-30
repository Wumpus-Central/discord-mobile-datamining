// _runtime/00767_applySdkMetadata.js
import SDK_VERSION from "00690_SDK_VERSION.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function applySdkMetadata(_metadata, arg1) {
  let arr = arg2;
  if (arg2 === undefined) {
    const items = [arg1];
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
    obj.packages = arr.map((item) => ({ name: "" + str + ":@sentry/" + item, version: SDK_VERSION.SDK_VERSION }));
    obj.version = str(690).SDK_VERSION;
    tmp.sdk = obj;
  }
  _metadata._metadata = tmp;
}
