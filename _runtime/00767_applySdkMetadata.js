// === Module 767: applySdkMetadata ===

// Module 767 (applySdkMetadata)
import SDK_VERSION from "SDK_VERSION" /* 690 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function applySdkMetadata(_metadata, browser, arg2) {
  let arr = arg2;
  if (arg2 === undefined) {
    items = [browser];
    arr = items;
  }
  let str = SENTRY_SDK_SOURCE;
  if (SENTRY_SDK_SOURCE === undefined) {
    str = "npm";
  }
  const tmp = _metadata._metadata || {};
  if (!tmp.sdk) {
    const obj = { name: null, packages: null, version: null };
    const _HermesInternal = HermesInternal;
    obj.name = "sentry.javascript." + browser;
    obj.packages = arr.map((item) => ({ name: "" + str + ":@sentry/" + item, version: SDK_VERSION.SDK_VERSION }));
    obj.version = str(690).SDK_VERSION;
    tmp.sdk = obj;
  }
  _metadata._metadata = tmp;
}