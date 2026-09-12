// === Module 6942: ? ===

// Module 6942
import _mod19 from "module_19" /* 19 */;
import _mod6733 from "module_6733" /* 6733 */;

_mod19.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let obj = _mod6733;
  const bottomSheetInternal = obj.useBottomSheetInternal();
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  obj = { setContentSize: null };
  const items = [enableDynamicSizing, animatedContentHeight];
  obj.setContentSize = useCallback((arg0) => {
    if (enableDynamicSizing) {
      const result = animatedContentHeight.set(arg0);
    }
  }, items);
  return obj;
};