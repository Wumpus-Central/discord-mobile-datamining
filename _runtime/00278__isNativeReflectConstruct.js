// === Module 278: _isNativeReflectConstruct ===

// Module 278 (_isNativeReflectConstruct)
const require = arg1;
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
    } else if (typeof error === "y") {
      let syntheticError = new require(189) /* _isNativeReflectConstruct */.SyntheticError(error);
    } else {
      syntheticError = new require(189) /* _isNativeReflectConstruct */.SyntheticError("Unspecified error");
    }
  }
};