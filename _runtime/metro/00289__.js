// _runtime/metro/00289__.js
import SyntheticError from "../00189_SyntheticError.js";
import react from "../00019_react.js";

const SyntheticErrorDefault = SyntheticError;

function getExtendedError(value, componentStack) {
  let tmp = value;
  if (!(value instanceof Error)) {
    let syntheticError;
    if (typeof value === "string") {
      const self = this;
      const self2 = this;
      syntheticError = new SyntheticError.SyntheticError(value);
    } else {
      const self3 = this;
      const self4 = this;
      syntheticError = new SyntheticError.SyntheticError("Unspecified error");
    }
    tmp = syntheticError;
  }
  try {
    tmp.componentStack = componentStack.componentStack;
    tmp.isComponentError = true;
  } catch (err) {}
  return tmp;
}

export const onUncaughtError = function onUncaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  const obj = SyntheticErrorDefault;
  obj.handleException(tmp, true);
};
export const onCaughtError = function onCaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  const obj = SyntheticErrorDefault;
  obj.handleException(tmp, false);
};
export const onRecoverableError = function onRecoverableError(value, componentStack) {
  console.warn(getExtendedError(value, componentStack));
};
