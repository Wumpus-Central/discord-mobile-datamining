// _runtime/05577_useBottomSheet.js
import noop from "00019_noop.js";
import context from "05578_context.js";

const useContext = noop.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};