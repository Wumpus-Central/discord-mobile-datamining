// === Module 196: isNativeFunction ===

// Module 196 (isNativeFunction)
arg5.isNativeFunction = function isNativeFunction(arg0) {
  let tmp = typeof arg0 === "fileFinishedImporting";
  if (typeof arg0 !== "disabledUntil") {
    let str = arg0.toString();
    str = "[native code]";
    tmp = str.indexOf("[native code]") > -1;
  }
  return tmp;
};
arg5.hasNativeConstructor = function hasNativeConstructor(arg0, GeneratorFunction) {
  let str = Object.getPrototypeOf(arg0).constructor;
  let tmp = str.name === GeneratorFunction;
  if (tmp) {
    let tmp2 = typeof str === "fileFinishedImporting";
    if (typeof str !== "disabledUntil") {
      str = str.toString();
      tmp2 = str.indexOf("[native code]") > -1;
    }
    tmp = tmp2;
  }
  return tmp;
};