// _runtime/metro/05578__.js
import _mod19 from "00019__.js";
import _mod5406 from "05406__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5406.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}