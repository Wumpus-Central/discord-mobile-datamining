// === Module 6841: ? ===

// Module 6841
import _mod19 from "module_19" /* 19 */;
import _mod6632 from "module_6632" /* 6632 */;

_mod19.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  let obj = _mod6632;
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