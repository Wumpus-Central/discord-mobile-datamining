// === Module 278: _isNativeReflectConstruct ===

// Module 278 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct" /* 189 */;
import _isNativeReflectConstructDefault from "_isNativeReflectConstruct" /* 189 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
arg5.default = {
  showErrorDialog(error) {
    error = error.error;
    if (error instanceof Error) {
      try {
        error.componentStack = error.componentStack;
        error.isComponentError = true;
        _isNativeReflectConstructDefault.handleException(error, false);
        return false;
      } catch (err) {
      }
    } else if (typeof error === "string") {
      let syntheticError = new _isNativeReflectConstruct.SyntheticError(error);
    } else {
      syntheticError = new _isNativeReflectConstruct.SyntheticError("Unspecified error");
    }
  }
};