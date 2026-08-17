// _runtime/00278__isNativeReflectConstruct.js
import _isNativeReflectConstruct from "00189__isNativeReflectConstruct.js";

require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  showErrorDialog(error) {
    error = error.error;
    if (error instanceof Error) {
      try {
        error.componentStack = error.componentStack;
        error.isComponentError = true;
        module(189).handleException(error, false);
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