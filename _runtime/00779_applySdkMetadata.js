// _runtime/00779_applySdkMetadata.js
import SDK_VERSION from "00702_SDK_VERSION.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const applySdkMetadata = function applySdkMetadata(_metadata, arg1) {
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
    let obj = {
      name: "sentry.javascript." + arg1,
      packages: arr.map((item) => {
        const obj = { name: "" + str + ":@sentry/" + item, version: SDK_VERSION.SDK_VERSION };
        return obj;
      }),
      version: str(702).SDK_VERSION,
    };
    const _HermesInternal = HermesInternal;
    tmp.sdk = obj;
  }
  _metadata._metadata = tmp;
};
