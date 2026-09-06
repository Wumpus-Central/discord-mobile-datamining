// === Module 126: ? ===

// Module 126
let closure_0 = Symbol("isPlatformObject");
let closure_1 = Symbol("clonePlatformObject");

export const setPlatformObject = function setPlatformObject(importDefaultResultResult, module_126) {
  if (typeof importDefaultResultResult === "function") {
    importDefaultResultResult.prototype[closure_0] = true;
    if (module_126) {
      importDefaultResultResult.prototype[closure_1] = module_126.clone;
    }
  } else {
    importDefaultResultResult[closure_0] = true;
    if (module_126) {
      importDefaultResultResult[closure_1] = module_126.clone;
    }
  }
};
export const isPlatformObject = function isPlatformObject(source) {
  return closure_0 in source;
};
export const getPlatformObjectClone = function getPlatformObjectClone(source) {
  return source[closure_1];
};