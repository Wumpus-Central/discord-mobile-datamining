// _runtime/06977_useScrollableSetter.js
import noop from "00019_noop.js";

({ useCallback: obj1, useEffect: c3 } = noop);

export const useScrollableSetter = (scrollableRef, closure_0, scrollableContentOffsetY, arg3, focusHook) => {
  const _require = scrollableRef;
  dependencyMap = closure_0;
  const callback = scrollableContentOffsetY;
  closure_3 = arg3;
  let tmp = focusHook;
  if (focusHook === undefined) {
    tmp = closure_3;
  }
  const bottomSheetInternal = require("06960_useBottomSheetInternal.js").useBottomSheetInternal();
  const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const isContentHeightFixed = bottomSheetInternal.isContentHeightFixed;
  const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
  const setScrollableRef = bottomSheetInternal.setScrollableRef;
  const removeScrollableRef = bottomSheetInternal.removeScrollableRef;
  const items = [scrollableRef, closure_0, arg3, animatedScrollableType, animatedScrollableContentOffsetY, scrollableContentOffsetY, isScrollableRefreshable, isContentHeightFixed, setScrollableRef, removeScrollableRef];
  tmp(callback(() => {
    animatedScrollableContentOffsetY.value = scrollableContentOffsetY.value;
    animatedScrollableType.value = table;
    isScrollableRefreshable.value = closure_3;
    isContentHeightFixed.value = false;
    let obj = scrollableRef(table[2]);
    const findNodeHandleResult = obj.findNodeHandle(scrollableRef.current);
    if (findNodeHandleResult) {
      obj = { id: null, node: null };
      obj[0] = findNodeHandleResult;
      obj[1] = scrollableRef;
      setScrollableRef(obj);
    } else {
      const _console = console;
      console.warn("Couldn't find the scrollable node handle id!");
    }
    return () => {
      callback(closure_0);
    };
  }, items));
};