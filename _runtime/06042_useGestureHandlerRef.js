// _runtime/06042_useGestureHandlerRef.js
import GestureHandlerRefContext from "06015_GestureHandlerRefContext.js";
import closure_2 from "00019_noop.js";

require = arg1;

export const useGestureHandlerRef = function useGestureHandlerRef() {
  const context = React.useContext(GestureHandlerRefContext.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
