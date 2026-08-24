// _runtime/06391_useHeaderHeight.js
import HeaderHeightContext from "06390_HeaderHeightContext.js";
import closure_2 from "00019_noop.js";

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