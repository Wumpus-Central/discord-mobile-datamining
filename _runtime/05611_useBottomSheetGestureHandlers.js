// _runtime/05611_useBottomSheetGestureHandlers.js
import { useContext } from "noop";
import { createContext } from "05450_createContext.js";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(createContext.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};