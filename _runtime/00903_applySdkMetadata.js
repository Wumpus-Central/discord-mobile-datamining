// === Module 903: applySdkMetadata ===

// Module 903 (applySdkMetadata)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.applySdkMetadata = function applySdkMetadata(_metadata) {
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
    obj[0] = "sentry.javascript." + arg1;
    obj[1] = arr.map((item, index) => ({ name: "" + str + ":@sentry/" + item, version: str(dependencyMap[0]).SDK_VERSION }));
    obj[2] = str(826).SDK_VERSION;
    tmp.sdk = obj;
  }
  _metadata._metadata = tmp;
};