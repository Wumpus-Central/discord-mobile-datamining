// _runtime/00159__isNativeFunction.js

export default function _isNativeFunction(fn) {
  try {
    const _Function = Function;
    const callResult = toString.call(fn);
    return -1 !== callResult.indexOf("[native code]");
  } catch (err) {
    return typeof fn === "function";
  }
}
