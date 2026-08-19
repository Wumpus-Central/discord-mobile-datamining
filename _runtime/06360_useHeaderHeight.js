// === Module 6360: useHeaderHeight ===

// Module 6360 (useHeaderHeight)
import HeaderHeightContext from "HeaderHeightContext" /* 6359 */;
import noop from "noop" /* 19 */;

require = arg1;

export const useHeaderHeight = function useHeaderHeight() {
  const context = React.useContext(HeaderHeightContext.HeaderHeightContext);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};