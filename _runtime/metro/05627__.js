// === Module 5627: ? ===

// Module 5627
import _mod19 from "module_19" /* 19 */;
import _mod5407 from "module_5407" /* 5407 */;

_mod19.useCallback;

export function useBottomSheetContentSizeSetter() {
  const bottomSheetInternal = _mod5407.useBottomSheetInternal();
  const enableDynamicSizing = bottomSheetInternal.enableDynamicSizing;
  const animatedContentHeight = bottomSheetInternal.animatedContentHeight;
  const obj2 = { setContentSize: null };
  items = [enableDynamicSizing, animatedContentHeight];
  obj2.setContentSize = useCallback((arg0) => {
    if (enableDynamicSizing) {
      const result = animatedContentHeight.set(arg0);
    }
  }, items);
  return obj2;
}