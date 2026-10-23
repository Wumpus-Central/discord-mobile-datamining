// _runtime/metro/05481__.js
import _mod19 from "00019__.js";
import _mod5272 from "05272__.js";

_mod19.useCallback;

export const useBottomSheetContentSizeSetter = function useBottomSheetContentSizeSetter() {
  const bottomSheetInternal = _mod5272.useBottomSheetInternal();
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
