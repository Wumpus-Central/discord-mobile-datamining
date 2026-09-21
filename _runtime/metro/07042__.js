// _runtime/metro/07042__.js
import _mod19 from "00019__.js";
import _mod6881 from "06881__.js";

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6881.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
