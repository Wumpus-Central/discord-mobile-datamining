import { context } from "05347_context.js";
// _runtime/05346_useBottomSheet.js
import { useContext } from "noop";


export const useBottomSheet = () => {
  const tmp = useContext(context /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};