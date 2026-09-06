// _runtime/04390_emptyFunction.js
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

export default () => {
  function shim(arg0, arg1, arg2, arg3, arg4, arg5) {
    if (arg5 !== shim(table[0])) {
      const _Error = Error;
      error = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      error.name = "Invariant Violation";
      throw error;
    }
  }
  function getShim() {
    return shim;
  }
  shim.isRequired = shim;
  const obj = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction,
  };
  obj.PropTypes = obj;
  return obj;
};
