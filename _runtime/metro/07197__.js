// _runtime/metro/07197__.js
import GestureHandlerRefContext from "../07170_GestureHandlerRefContext.js";
import noop from "00019__.js";

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
