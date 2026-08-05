// _runtime/05346_useBottomSheet.js
import { useContext } from "noop";
import { context } from "05347_context.js";


export const useBottomSheet = () => {
  const tmp = useContext(context /* context */.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};