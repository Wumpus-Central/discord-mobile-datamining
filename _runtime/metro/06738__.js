// _runtime/metro/06738__.js
import _mod19 from "00019__.js";
import _mod6739 from "06739__.js";

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6739.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
