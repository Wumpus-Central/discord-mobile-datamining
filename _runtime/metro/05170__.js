// === Module 5170: ? ===

// Module 5170
import _mod5162 from "module_5162" /* 5162 */;
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
  const bottomSheetInternal = require("module_5153").useBottomSheetInternal();
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
    const findNodeHandleResult = _mod5162.findNodeHandle(scrollableRef.current);
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