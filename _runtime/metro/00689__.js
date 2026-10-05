// === Module 689: ? ===

// Module 689

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
  return null !== cause && typeof cause === "object" && "stack" in cause && typeof cause.stack === "string";
};