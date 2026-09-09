// === Module 6855: ? ===

// Module 6855
import _mod19 from "module_19" /* 19 */;
import _mod6646 from "module_6646" /* 6646 */;

_mod19.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let obj = _mod6646;
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