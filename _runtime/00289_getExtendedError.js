// _runtime/00289_getExtendedError.js
import noopAll from "noop" /* 19 */;
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 189 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 189 */;

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