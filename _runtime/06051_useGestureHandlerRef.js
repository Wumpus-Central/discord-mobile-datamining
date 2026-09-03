// === Module 6051: useGestureHandlerRef ===

// Module 6051 (useGestureHandlerRef)
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 6024 */;
import closure_2 from "noop" /* 19 */;

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