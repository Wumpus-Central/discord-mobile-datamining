// _runtime/00289_getExtendedError.js
import noopAll from "00019_noop.js";
import _isNativeReflectConstruct from "00189__isNativeReflectConstruct.js";
import _isNativeReflectConstructDefault from "00189__isNativeReflectConstruct.js";

require = arg1;
function getExtendedError(value, componentStack) {
  if (value instanceof Error) {
    try {
      value.componentStack = componentStack.componentStack;
      value.isComponentError = true;
      return value;
    } catch (err) {
    }
  } else if (typeof value === "string") {
    let syntheticError = new _isNativeReflectConstruct.SyntheticError(value);
  } else {
    syntheticError = new _isNativeReflectConstruct.SyntheticError("Unspecified error");
  }
}
noopAll;

export const onUncaughtError = function onUncaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  _isNativeReflectConstructDefault.handleException(tmp, true);
};
export const onCaughtError = function onCaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  _isNativeReflectConstructDefault.handleException(tmp, false);
};
export const onRecoverableError = function onRecoverableError(value, componentStack) {
  console.warn(getExtendedError(value, componentStack));
};