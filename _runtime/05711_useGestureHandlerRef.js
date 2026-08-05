// _runtime/05711_useGestureHandlerRef.js
import noop from "noop";
import { noop } from "05657_noop.js";


export default function useGestureHandlerRef() {
  const context = React.useContext(noop);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find a ref for gesture handler. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};