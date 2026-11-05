// _runtime/metro/05586__.js
import _mod19 from "00019__.js";
import _mod5414 from "05414__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5414.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}