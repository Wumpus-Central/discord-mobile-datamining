// _runtime/metro/01595__.js
import PreventRemoveContext from "../01570_PreventRemoveContext.js";
import noop from "00019__.js";

require = arg1;

export function usePreventRemoveContext() {
  const context = noop.useContext(PreventRemoveContext.PreventRemoveContext);
  if (null == context) {
    const _Error = Error;
    const error = new Error("Couldn't find the prevent remove context. Is your component inside NavigationContent?");
    throw error;
  } else {
    return context;
  }
}
