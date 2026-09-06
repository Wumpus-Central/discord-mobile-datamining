// _runtime/metro/06841__.js
import _mod19 from "00019__.js";
import _mod6632 from "06632__.js";

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
