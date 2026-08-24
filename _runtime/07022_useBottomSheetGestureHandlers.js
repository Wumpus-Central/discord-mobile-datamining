// === Module 7022: useBottomSheetGestureHandlers ===

// Module 7022 (useBottomSheetGestureHandlers)
import noop from "noop" /* 19 */;
import createContext from "createContext" /* 7002 */;

const useContext = noop.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(createContext.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};