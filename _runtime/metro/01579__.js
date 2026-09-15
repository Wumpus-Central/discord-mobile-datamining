// _runtime/metro/01579__.js
import PreventRemoveContext from "../01554_PreventRemoveContext.js";
import noop from "00019__.js";

require = arg1;

export const usePreventRemoveContext = function usePreventRemoveContext() {
  const context = noop.useContext(PreventRemoveContext.PreventRemoveContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
};
