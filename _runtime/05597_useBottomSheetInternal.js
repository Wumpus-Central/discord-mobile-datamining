// === Module 5597: useBottomSheetInternal ===

// Module 5597 (useBottomSheetInternal)
import noop from "noop" /* 19 */;
import context from "context" /* 5598 */;

const useContext = noop.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(context.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};