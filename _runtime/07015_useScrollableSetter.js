// _runtime/07015_useScrollableSetter.js
import noop from "00019_noop.js";

({ useCallback: obj1, useEffect: c3 } = noop);

export const useScrollableSetter = (arg0, arg1, arg2, arg3) => {
  const _require = arg0;
  dependencyMap = arg1;
  const callback = arg2;
  closure_3 = arg3;
  let tmp = arg4;
  if (arg4 === undefined) {
    tmp = closure_3;
  }
  let animatedScrollableType;
  let animatedScrollableContentOffsetY;
  let isContentHeightFixed;
  let isScrollableRefreshable;
  let setScrollableRef;
  let removeScrollableRef;
  const bottomSheetInternal = require("06998_useBottomSheetInternal.js").useBottomSheetInternal();
  animatedScrollableType = bottomSheetInternal.animatedScrollableType;
  animatedScrollableContentOffsetY = bottomSheetInternal.animatedScrollableContentOffsetY;
  isContentHeightFixed = bottomSheetInternal.isContentHeightFixed;
  isScrollableRefreshable = bottomSheetInternal.isScrollableRefreshable;
  setScrollableRef = bottomSheetInternal.setScrollableRef;
  removeScrollableRef = bottomSheetInternal.removeScrollableRef;
  const items = [arg0, arg1, arg3, animatedScrollableType, animatedScrollableContentOffsetY, arg2, isScrollableRefreshable, isContentHeightFixed, setScrollableRef, removeScrollableRef];
  tmp(callback(() => {
    animatedScrollableContentOffsetY.value = value.value;
    animatedScrollableType.value = table;
    isScrollableRefreshable.value = closure_3;
    isContentHeightFixed.value = false;
    let obj = ref(table[2]);
    const findNodeHandleResult = obj.findNodeHandle(ref.current);
    if (findNodeHandleResult) {
      obj = { id: null, node: null };
      obj[0] = findNodeHandleResult;
      obj[1] = ref;
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