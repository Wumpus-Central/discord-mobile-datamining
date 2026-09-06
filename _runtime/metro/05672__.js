// _runtime/metro/05672__.js
import HeaderHeightContext from "../05671_HeaderHeightContext.js";
import noop from "00019__.js";

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
