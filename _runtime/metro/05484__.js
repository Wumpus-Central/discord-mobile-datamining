// === Module 5484: ? ===

// Module 5484
import _mod19 from "module_19" /* 19 */;
import _mod5275 from "module_5275" /* 5275 */;

_mod19.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  const bottomSheetInternal = _mod5275.useBottomSheetInternal();
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const obj2 = { setContentSize: null };
  const items = [enableDynamicSizing, animatedContentHeight];
  obj2.setContentSize = useCallback((arg0) => {
    if (enableDynamicSizing) {
      const result = animatedContentHeight.set(arg0);
    }
  }, items);
  return obj2;
};