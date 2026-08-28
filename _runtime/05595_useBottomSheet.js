// === Module 5595: useBottomSheet ===

// Module 5595 (useBottomSheet)
import noop from "noop" /* 19 */;
import context from "context" /* 5596 */;

const useContext = noop.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(context.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};