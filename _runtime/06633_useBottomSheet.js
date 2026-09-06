// === Module 6633: useBottomSheet ===

// Module 6633 (useBottomSheet)
import noop from "noop" /* 19 */;
import context from "context" /* 6634 */;

const useContext = noop.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};