import { noop } from "05672_noop.js";
// _runtime/05726_useGestureHandlerRef.js
import noop from "noop";


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