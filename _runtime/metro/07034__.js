// _runtime/metro/07034__.js
import GestureHandlerRefContext from "../07007_GestureHandlerRefContext.js";
import noop from "00019__.js";

require = arg1;

export const useGestureHandlerRef = function useGestureHandlerRef() {
  const context = noop.useContext(GestureHandlerRefContext.GestureHandlerRefContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
