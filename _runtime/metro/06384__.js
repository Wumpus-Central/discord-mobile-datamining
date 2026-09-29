// _runtime/metro/06384__.js
import _mod19 from "00019__.js";
import _mod6223 from "06223__.js";

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6223.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
