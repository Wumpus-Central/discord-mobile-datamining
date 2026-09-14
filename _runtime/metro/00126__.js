// _runtime/metro/00126__.js
let closure_0 = Symbol("isPlatformObject");
let closure_1 = Symbol("clonePlatformObject");

export const setPlatformObject = function setPlatformObject(importDefaultResultResult, clone) {
  if (typeof importDefaultResultResult === "function") {
    importDefaultResultResult.prototype[closure_0] = true;
    if (clone) {
      importDefaultResultResult.prototype[closure_1] = clone.clone;
    }
  } else {
    importDefaultResultResult[closure_0] = true;
    if (clone) {
      importDefaultResultResult[closure_1] = clone.clone;
    }
  }
};
export const isPlatformObject = function isPlatformObject(source) {
  return closure_0 in source;
};
export const getPlatformObjectClone = function getPlatformObjectClone(source) {
  return source[closure_1];
};
