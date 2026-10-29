// === Module 7189: ? ===

// Module 7189
import GestureHandlerRefContext from "GestureHandlerRefContext" /* 7162 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function useGestureHandlerRef() {
  const context = noop.useContext(GestureHandlerRefContext.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
}