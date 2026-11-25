// _runtime/metro/05469__.js
import _mod19 from "00019__.js";
import _mod5249 from "05249__.js";

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
