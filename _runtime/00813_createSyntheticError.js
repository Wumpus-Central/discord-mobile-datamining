// _runtime/00813_createSyntheticError.js
arg5.createSyntheticError = function createSyntheticError() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  error = new Error();
  error.framesToPop = num + 3;
  return error;
};
arg5.getFramesToPop = function getFramesToPop(closure_3) {
  let num = 0;
  if (undefined !== closure_3.framesToPop) {
    num = closure_3.framesToPop;
  }
  return num;
};
arg5.isErrorLike = function isErrorLike(cause) {
  let tmp = null !== cause && typeof cause === "object";
  if (tmp) {
    tmp = "stack" in cause;
  }
  if (tmp) {
    tmp = typeof cause.stack === "string";
  }
  return tmp;
};
