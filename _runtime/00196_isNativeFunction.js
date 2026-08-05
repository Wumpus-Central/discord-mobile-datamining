// _runtime/00196_isNativeFunction.js
arg5.isNativeFunction = function isNativeFunction(fn) {
  let tmp = typeof fn === "function";
  if (typeof fn === "function") {
    let str = fn.toString();
    str = "[native code]";
    tmp = str.indexOf("[native code]") > -1;
  }
  return tmp;
};
arg5.hasNativeConstructor = function hasNativeConstructor(arg0, GeneratorFunction) {
  let str = Object.getPrototypeOf(arg0).constructor;
  let tmp = str.name === GeneratorFunction;
  if (tmp) {
    let tmp2 = typeof str === "function";
    if (typeof str === "function") {
      str = str.toString();
      tmp2 = str.indexOf("[native code]") > -1;
    }
    tmp = tmp2;
  }
  return tmp;
};