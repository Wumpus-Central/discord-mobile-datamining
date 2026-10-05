// _runtime/metro/00278__.js
import SyntheticError from "../00189_SyntheticError.js";

const SyntheticErrorDefault = SyntheticError;

export default {
  showErrorDialog(error) {
    error = error.error;
    let tmp = error;
    const componentStack = error.componentStack;
    if (!(error instanceof Error)) {
      let syntheticError;
      if (typeof error === "string") {
        const self = this;
        const self2 = this;
        syntheticError = new SyntheticError.SyntheticError(error);
      } else {
        const self3 = this;
        const self4 = this;
        syntheticError = new SyntheticError.SyntheticError("Unspecified error");
      }
      tmp = syntheticError;
    }
    try {
      tmp.componentStack = componentStack;
      tmp.isComponentError = true;
    } catch (err) {}
    const obj = SyntheticErrorDefault;
    obj.handleException(tmp, false);
    return false;
  },
};
