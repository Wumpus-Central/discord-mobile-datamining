// _runtime/metro/00678__.js

export const createSyntheticError = function createSyntheticError() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const error = new Error();
  error.framesToPop = num + 3;
  return error;
};
export const getFramesToPop = function getFramesToPop(syntheticException) {
  let num = 0;
  if (undefined !== syntheticException.framesToPop) {
    num = syntheticException.framesToPop;
  }
  return num;
};
export const isErrorLike = function isErrorLike(cause) {
  let tmp = null !== cause && typeof cause === "object";
  if (tmp) {
    tmp = "stack" in cause;
  }
  if (tmp) {
    tmp = typeof cause.stack === "string";
  }
  return tmp;
};
