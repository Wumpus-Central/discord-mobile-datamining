// === Module 1594: usePreventRemoveContext ===

// Module 1594 (usePreventRemoveContext)
import PreventRemoveContext from "PreventRemoveContext" /* 1569 */;
import closure_2 from "noop" /* 19 */;

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