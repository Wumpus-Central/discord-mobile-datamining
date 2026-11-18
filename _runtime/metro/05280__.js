// _runtime/metro/05280__.js
import _mod19 from "00019__.js";
import _mod5060 from "05060__.js";

_mod19.useCallback;

export function useBottomSheetContentSizeSetter() {
  const bottomSheetInternal = _mod5060.useBottomSheetInternal();
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
