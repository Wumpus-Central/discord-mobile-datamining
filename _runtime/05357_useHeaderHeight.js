// _runtime/05357_useHeaderHeight.js
import noop from "noop";
import { HeaderHeightContext } from "05356_HeaderHeightContext.js";

const require = arg1;

export const useHeaderHeight = function useHeaderHeight() {
  const context = React.useContext(HeaderHeightContext.HeaderHeightContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};