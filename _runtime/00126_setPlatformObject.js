let closure_0 = Symbol("isPlatformObject");
let closure_1 = Symbol("clonePlatformObject");
arg5.setPlatformObject = function setPlatformObject(importDefaultResultResult, setPlatformObject) {
  if (typeof importDefaultResultResult === "function") {
    importDefaultResultResult.prototype[closure_0] = true;
    if (setPlatformObject) {
      importDefaultResultResult.prototype[closure_1] = setPlatformObject.clone;
    }
  } else {
    importDefaultResultResult[closure_0] = true;
    if (setPlatformObject) {
      importDefaultResultResult[closure_1] = setPlatformObject.clone;
    }
  }
};
arg5.isPlatformObject = function isPlatformObject(style) {
  return closure_0 in style;
};
arg5.getPlatformObjectClone = function getPlatformObjectClone(style) {
  return style[closure_1];
};