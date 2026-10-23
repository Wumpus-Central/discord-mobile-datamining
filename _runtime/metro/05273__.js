// _runtime/metro/05273__.js
import _mod19 from "00019__.js";
import _mod5274 from "05274__.js";

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod5274.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};
