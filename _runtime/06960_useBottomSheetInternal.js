// === Module 6960: useBottomSheetInternal ===

// Module 6960 (useBottomSheetInternal)
import noop from "noop" /* 19 */;
import context from "context" /* 6961 */;

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