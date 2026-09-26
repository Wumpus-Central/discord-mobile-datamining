// === Module 6259: ? ===

// Module 6259
import _mod19 from "module_19" /* 19 */;
import _mod6050 from "module_6050" /* 6050 */;

_mod19.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  const bottomSheetInternal = _mod6050.useBottomSheetInternal();
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