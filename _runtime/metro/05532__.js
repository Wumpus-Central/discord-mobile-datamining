// === Module 5532: ? ===

// Module 5532
import _mod5524 from "module_5524" /* 5524 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useCallback: c2, useEffect: c3 } = noop);

export (scrollableRef, value, scrollableContentOffsetY, value2) => {
  _require = scrollableRef;
  dependencyMap = value;
  let tmp = focusHook;
  if (focusHook === undefined) {
    tmp = value2;
  }
  const bottomSheetInternal = require("module_5515").useBottomSheetInternal();
  const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const isContentHeightFixed = bottomSheetInternal.isContentHeightFixed;
  const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
  const setScrollableRef = bottomSheetInternal.setScrollableRef;
  const removeScrollableRef = bottomSheetInternal.removeScrollableRef;
  items = [scrollableRef, value, value2, animatedScrollableType, animatedScrollableContentOffsetY, scrollableContentOffsetY, isScrollableRefreshable, isContentHeightFixed, setScrollableRef, removeScrollableRef];
  tmp(scrollableContentOffsetY(() => {
    animatedScrollableContentOffsetY.value = scrollableContentOffsetY.value;
    animatedScrollableType.value = value;
    isScrollableRefreshable.value = value2;
    isContentHeightFixed.value = false;
    const findNodeHandleResult = _mod5524.findNodeHandle(scrollableRef.current);
    if (findNodeHandleResult) {
      const obj2 = { id: findNodeHandleResult, node: scrollableRef };
      setScrollableRef(obj2);
    } else {
      const _console = console;
      console.warn("Couldn't find the scrollable node handle id!");
    }
    return () => {
      removeScrollableRef(scrollableRef);
    };
  }, items));
}