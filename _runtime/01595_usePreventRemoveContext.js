// _runtime/01595_usePreventRemoveContext.js
import noop from "noop";
import { PreventRemoveContext } from "01570_PreventRemoveContext.js";

const require = arg1;

export const usePreventRemoveContext = function usePreventRemoveContext() {
  const context = React.useContext(PreventRemoveContext.PreventRemoveContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};