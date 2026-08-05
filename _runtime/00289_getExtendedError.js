// _runtime/00289_getExtendedError.js
import "noop";
import { _isNativeReflectConstruct } from "00189__isNativeReflectConstruct.js";

const require = arg1;
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

export const onUncaughtError = function onUncaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  _isNativeReflectConstruct.handleException(tmp, true);
};
export const onCaughtError = function onCaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  _isNativeReflectConstruct.handleException(tmp, false);
};
export const onRecoverableError = function onRecoverableError(value, componentStack) {
  console.warn(getExtendedError(value, componentStack));
};