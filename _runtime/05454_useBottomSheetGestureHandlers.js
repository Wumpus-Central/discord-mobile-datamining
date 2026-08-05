import { createContext } from "05352_createContext.js";
// _runtime/05454_useBottomSheetGestureHandlers.js
import { useContext } from "noop";


export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(createContext /* createContext */.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};