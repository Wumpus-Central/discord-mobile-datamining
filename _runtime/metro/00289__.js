// _runtime/metro/00289__.js
import _mod189 from "00189__.js";
import noop from "00019__.js";

const _modDef189 = _mod189;

require = arg1;
function getExtendedError(value, componentStack) {
  if (value instanceof Error) {
    try {
      value.componentStack = componentStack.componentStack;
      value.isComponentError = true;
      return value;
    } catch (err) {}
  } else if (typeof value === "string") {
    let syntheticError = new _mod189.SyntheticError(value);
  } else {
    syntheticError = new _mod189.SyntheticError("Unspecified error");
  }
}

export const onUncaughtError = function onUncaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  _modDef189.handleException(tmp, true);
};
export const onCaughtError = function onCaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  _modDef189.handleException(tmp, false);
};
export const onRecoverableError = function onRecoverableError(value, componentStack) {
  console.warn(getExtendedError(value, componentStack));
};
