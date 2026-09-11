// === Module 6912: ? ===

// Module 6912
import _mod19 from "module_19" /* 19 */;
import _mod6703 from "module_6703" /* 6703 */;

_mod19.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let obj = _mod6703;
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