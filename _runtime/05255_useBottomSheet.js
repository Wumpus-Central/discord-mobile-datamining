// _runtime/05255_useBottomSheet.js
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(require(5256) /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};