// _runtime/metro/00196__.js

export const isNativeFunction = function isNativeFunction(fn) {
  let tmp = typeof fn === "function";
  if (typeof fn === "function") {
    tmp = fn.toString().indexOf("[native code]") > -1;
    const str1 = fn.toString();
  }
  return tmp;
};
export const hasNativeConstructor = function hasNativeConstructor(arg0, GeneratorFunction) {
  const str = Object.getPrototypeOf(arg0).constructor;
  let tmp = str.name === GeneratorFunction;
  if (tmp) {
    let tmp2 = typeof str === "function";
    if (typeof str === "function") {
      tmp2 = str.toString().indexOf("[native code]") > -1;
      const str1 = str.toString();
    }
    tmp = tmp2;
  }
  return tmp;
};
