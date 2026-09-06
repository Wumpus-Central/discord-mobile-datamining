// _runtime/metro/06652__.js
import normalizeSnapPoint from "../06644_normalizeSnapPoint.js";
import noop from "00019__.js";

({ useCallback: c2, useEffect: c3 } = noop);

export const useScrollableSetter = (arg0, value, arg2, value3) => {
  _require = arg0;
  dependencyMap = value;
  value2 = arg2;
  let tmp = arg4;
  if (arg4 === undefined) {
    tmp = value3;
  }
  const bottomSheetInternal = require("06635__.js").useBottomSheetInternal();
  const animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  const animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  const isContentHeightFixed = bottomSheetInternal.isContentHeightFixed;
  const isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
  const setScrollableRef = bottomSheetInternal.setScrollableRef;
  const removeScrollableRef = bottomSheetInternal.removeScrollableRef;
  const items = [
    arg0,
    value,
    value3,
    animatedScrollableType,
    animatedScrollableContentOffsetY,
    arg2,
    isScrollableRefreshable,
    isContentHeightFixed,
    setScrollableRef,
    removeScrollableRef,
  ];
  tmp(
    value2(() => {
      animatedScrollableContentOffsetY.value = value2.value;
      animatedScrollableType.value = value;
      isScrollableRefreshable.value = value3;
      isContentHeightFixed.value = false;
      let obj = normalizeSnapPoint;
      const findNodeHandleResult = obj.findNodeHandle(ref.current);
      if (findNodeHandleResult) {
        obj = { id: findNodeHandleResult, node: ref };
        setScrollableRef(obj);
      } else {
        const _console = console;
        console.warn("Couldn't find the scrollable node handle id!");
      }
      return () => {
        removeScrollableRef(ref);
      };
    }, items),
  );
};
