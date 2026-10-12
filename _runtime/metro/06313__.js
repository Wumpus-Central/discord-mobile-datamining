// _runtime/metro/06313__.js
import _mod19 from "00019__.js";
import _mod6314 from "06314__.js";

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6314.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
