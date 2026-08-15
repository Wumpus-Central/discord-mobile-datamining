// _runtime/06958_useBottomSheet.js
import { useContext } from "noop";
import { context } from "06959_context.js";


export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};