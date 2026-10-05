// _runtime/metro/00196__.js

export const isNativeFunction = function isNativeFunction(fn) {
  let tmp = typeof fn === "function";
  if (typeof fn === "function") {
    const str1 = fn.toString();
    tmp = str1.indexOf("[native code]") > -1;
  }
  return tmp;
};
export const hasNativeConstructor = function hasNativeConstructor(arg0, GeneratorFunction) {
  const str = Object.getPrototypeOf(arg0).constructor;
  let tmp = str.name === GeneratorFunction;
  if (tmp) {
    let tmp2 = typeof str === "function";
    if (typeof str === "function") {
      const str1 = str.toString();
      tmp2 = str1.indexOf("[native code]") > -1;
    }
    tmp = tmp2;
  }
  return tmp;
};
