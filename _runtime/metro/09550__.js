// === Module 9550: ? ===

// Module 9550
function emptyFunction() {

}
function emptyFunctionWithReset() {

}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

export default () => {
  let obj;
  function shim(arg0, arg1, arg2, arg3, arg4, arg5) {
    if (arg5 !== shim(dependencyMap[0])) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      error.name = "Invariant Violation";
      throw error;
    }
  }
  function getShim() {
    return shim;
  }
  shim.isRequired = shim;
  obj = { array: shim, bigint: shim, bool: shim, func: shim, number: shim, object: shim, string: shim, symbol: shim, any: shim, arrayOf: getShim, element: shim, elementType: shim, instanceOf: getShim, node: shim, objectOf: getShim, oneOf: getShim, oneOfType: getShim, shape: getShim, exact: getShim, checkPropTypes: emptyFunctionWithReset, resetWarningCache: emptyFunction, PropTypes: obj };
  return obj;
};