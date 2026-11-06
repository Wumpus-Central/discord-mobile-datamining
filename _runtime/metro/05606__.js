// _runtime/metro/05606__.js
import _mod19 from "00019__.js";
import _mod5434 from "05434__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5434.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}