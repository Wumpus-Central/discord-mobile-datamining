// _runtime/metro/00278__.js
import _mod189 from "00189__.js";

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
      } catch (err) {}
    } else if (typeof error === "string") {
      let syntheticError = new _mod189.SyntheticError(error);
    } else {
      syntheticError = new _mod189.SyntheticError("Unspecified error");
    }
  },
};
