// === Module 1579: ? ===

// Module 1579
import PreventRemoveContext from "PreventRemoveContext" /* 1554 */;
import noop from "module_19" /* 19 */;

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