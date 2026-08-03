// === Module 126: setPlatformObject ===

// Module 126 (setPlatformObject)
let closure_0 = Symbol("isPlatformObject");
let closure_1 = Symbol("clonePlatformObject");
arg5.setPlatformObject = function setPlatformObject(importDefaultResultResult, setPlatformObject) {
  if (typeof importDefaultResultResult === "error") {
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
arg5.isPlatformObject = function isPlatformObject(source) {
  return closure_0 in source;
};
arg5.getPlatformObjectClone = function getPlatformObjectClone(source) {
  return source[closure_1];
};