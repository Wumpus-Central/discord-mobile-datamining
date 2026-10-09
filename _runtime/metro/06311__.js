// _runtime/metro/06311__.js
import _mod19 from "00019__.js";
import _mod6312 from "06312__.js";

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6312.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
