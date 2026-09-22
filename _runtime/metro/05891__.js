// === Module 5891: ? ===

// Module 5891
import HeaderHeightContext from "HeaderHeightContext" /* 5890 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useHeaderHeight = function useHeaderHeight() {
  const context = noop.useContext(HeaderHeightContext.HeaderHeightContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};