// _runtime/05797_useBottomSheetGestureHandlers.js
import noop from "00019_noop.js";
import createContext from "05636_createContext.js";

const useContext = noop.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(createContext.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};