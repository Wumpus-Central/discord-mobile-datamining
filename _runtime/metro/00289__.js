// === Module 289: ? ===

// Module 289
import _mod189 from "module_189" /* 189 */;
import noop from "module_19" /* 19 */;

const _modDef189 = _mod189;

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
    let syntheticError = new _mod189.SyntheticError(value);
  } else {
    syntheticError = new _mod189.SyntheticError("Unspecified error");
  }
}

export function onUncaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  _modDef189.handleException(tmp, true);
}
export function onCaughtError(value, componentStack) {
  const tmp = getExtendedError(value, componentStack);
  _modDef189.handleException(tmp, false);
}
export function onRecoverableError(value, componentStack) {
  console.warn(getExtendedError(value, componentStack));
}