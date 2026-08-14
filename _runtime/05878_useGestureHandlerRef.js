// _runtime/05878_useGestureHandlerRef.js
import noop from "noop";
import { GestureHandlerRefContext } from "05851_GestureHandlerRefContext.js";

const require = arg1;

export const useGestureHandlerRef = function useGestureHandlerRef() {
  const context = React.useContext(GestureHandlerRefContext.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};