// === Module 278: ? ===

// Module 278
import _mod189 from "module_189" /* 189 */;

const _modDef189 = _mod189;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  showErrorDialog(error) {
    error = error.error;
    if (error instanceof Error) {
      try {
        error.componentStack = error.componentStack;
        error.isComponentError = true;
        _modDef189.handleException(error, false);
        return false;
      } catch (err) {
      }
    } else if (typeof error === "string") {
      let syntheticError = new _mod189.SyntheticError(error);
    } else {
      syntheticError = new _mod189.SyntheticError("Unspecified error");
    }
  }
};