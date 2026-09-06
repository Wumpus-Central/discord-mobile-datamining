// === Module 6652: ? ===

// Module 6652
import normalizeSnapPoint from "normalizeSnapPoint" /* 6644 */;
import noop from "module_19" /* 19 */;

({ useCallback: c2, useEffect: c3 } = noop);

export const useScrollableSetter = (scrollableRef, value, scrollableContentOffsetY, value2) => {
  _require = scrollableRef;
  dependencyMap = value;
  let tmp = focusHook;
  if (focusHook === undefined) {
    tmp = value2;
  }
  const bottomSheetInternal = require("module_6635").useBottomSheetInternal();
  const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const isContentHeightFixed = bottomSheetInternal.isContentHeightFixed;
  const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
  const setScrollableRef = bottomSheetInternal.setScrollableRef;
  const removeScrollableRef = bottomSheetInternal.removeScrollableRef;
  const items = [scrollableRef, value, value2, animatedScrollableType, animatedScrollableContentOffsetY, scrollableContentOffsetY, isScrollableRefreshable, isContentHeightFixed, setScrollableRef, removeScrollableRef];
  tmp(scrollableContentOffsetY(() => {
    animatedScrollableContentOffsetY.value = scrollableContentOffsetY.value;
    animatedScrollableType.value = value;
    isScrollableRefreshable.value = value2;
    isContentHeightFixed.value = false;
    let obj = normalizeSnapPoint;
    const findNodeHandleResult = obj.findNodeHandle(scrollableRef.current);
    if (findNodeHandleResult) {
      obj = { id: findNodeHandleResult, node: scrollableRef };
      setScrollableRef(obj);
    } else {
      const _console = console;
      console.warn("Couldn't find the scrollable node handle id!");
    }
    return () => {
      removeScrollableRef(scrollableRef);
    };
  }, items));
};