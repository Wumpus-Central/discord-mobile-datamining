// _runtime/05265_useHeaderHeight.js
import noop from "noop";


export default function useHeaderHeight() {
  const context = React.useContext(require("05264___react_navigation__elements_contexts.js"));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find the header height. Are you inside a screen in a navigator with a header?");
    throw error;
  } else {
    return context;
  }
};