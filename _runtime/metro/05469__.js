// === Module 5469: ? ===

// Module 5469
import _mod19 from "module_19" /* 19 */;
import _mod5249 from "module_5249" /* 5249 */;

_mod19.useCallback;

export function useBottomSheetContentSizeSetter() {
  const bottomSheetInternal = _mod5249.useBottomSheetInternal();
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