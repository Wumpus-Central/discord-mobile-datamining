// === Module 5630: useBottomSheet ===

// Module 5630 (useBottomSheet)
import noop from "noop" /* 19 */;
import context from "context" /* 5631 */;

const useContext = noop.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};