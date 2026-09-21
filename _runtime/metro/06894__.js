// _runtime/metro/06894__.js
import normalizeSnapPoint from "../06886_normalizeSnapPoint.js";
import noop from "00019__.js";

const require = globalThis.__r;

({ useCallback: c2, useEffect: c3 } = noop);

export const useScrollableSetter = (scrollableRef, value, scrollableContentOffsetY, value2) => {
  _require = scrollableRef;
  dependencyMap = value;
  let tmp = focusHook;
  if (focusHook === undefined) {
    tmp = value2;
  }
  const bottomSheetInternal = require("06877__.js").useBottomSheetInternal();
  const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const isContentHeightFixed = bottomSheetInternal.isContentHeightFixed;
  const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
  const setScrollableRef = bottomSheetInternal.setScrollableRef;
  const removeScrollableRef = bottomSheetInternal.removeScrollableRef;
  const items = [
    scrollableRef,
    value,
    value2,
    animatedScrollableType,
    animatedScrollableContentOffsetY,
    scrollableContentOffsetY,
    isScrollableRefreshable,
    isContentHeightFixed,
    setScrollableRef,
    removeScrollableRef,
  ];
  tmp(
    scrollableContentOffsetY(() => {
      animatedScrollableContentOffsetY.value = scrollableContentOffsetY.value;
      animatedScrollableType.value = value;
      isScrollableRefreshable.value = value2;
      isContentHeightFixed.value = false;
      const findNodeHandleResult = normalizeSnapPoint.findNodeHandle(scrollableRef.current);
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
    }, items),
  );
};
