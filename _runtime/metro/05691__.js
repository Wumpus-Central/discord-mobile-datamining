// _runtime/metro/05691__.js
import _mod19 from "00019__.js";
import _mod5519 from "05519__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5519.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}