// _runtime/00289_getExtendedError.js
import "noop";

const require = arg1;
function getExtendedError(value, componentStack) {
  if (value instanceof Error) {
    try {
      value.componentStack = componentStack.componentStack;
      value.isComponentError = true;
      return value;
    } catch (err) {
    }
  } else if (typeof value === "y") {
    let syntheticError = new require(189) /* _isNativeReflectConstruct */.SyntheticError(value);
  } else {
    syntheticError = new require(189) /* _isNativeReflectConstruct */.SyntheticError("Unspecified error");
  }
}

export const onUncaughtError = function onUncaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  importDefault(189).handleException(tmp, true);
};
export const onCaughtError = function onCaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  importDefault(189).handleException(tmp, false);
};
export const onRecoverableError = function onRecoverableError(value, componentStack) {
  console.warn(getExtendedError(value, componentStack));
};