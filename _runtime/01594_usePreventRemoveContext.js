// _runtime/01594_usePreventRemoveContext.js
import PreventRemoveContext from "01569_PreventRemoveContext.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const usePreventRemoveContext = function usePreventRemoveContext() {
  const context = React.useContext(PreventRemoveContext.PreventRemoveContext);
  if (null == context) {
    const _Error = Error;
    error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};
