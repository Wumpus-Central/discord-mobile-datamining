// === Module 5612: ? ===

// Module 5612
import _mod19 from "module_19" /* 19 */;
import _mod5403 from "module_5403" /* 5403 */;

_mod19.useCallback;

export function useBottomSheetContentSizeSetter() {
  const bottomSheetInternal = _mod5403.useBottomSheetInternal();
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