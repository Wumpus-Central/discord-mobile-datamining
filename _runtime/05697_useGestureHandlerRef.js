// === Module 5697: useGestureHandlerRef ===

// Module 5697 (useGestureHandlerRef)
import noop from "noop";


export default function useGestureHandlerRef() {
  const context = React.useContext(importDefault(5643));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};