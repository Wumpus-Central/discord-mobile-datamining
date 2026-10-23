// _runtime/metro/05440__.js
import _mod19 from "00019__.js";
import _mod5279 from "05279__.js";

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod5279.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
