// === Module 5640: useScrollable ===

// Module 5640 (useScrollable)
import noop from "noop" /* 19 */;

({ useCallback: obj1, useRef: c3 } = noop);

export const useScrollable = () => {
  const tmp = callback2(null);
  const _require = tmp;
  dependencyMap = callback2(null);
  let obj = _require(1653);
  const sharedValue = obj.useSharedValue(_require(5625).SCROLLABLE_TYPE.UNDETERMINED);
  const sharedValue1 = _require(1653).useSharedValue(0);
  const obj2 = _require(1653);
  const sharedValue2 = _require(1653).useSharedValue(_require(5625).SCROLLABLE_STATE.UNDETERMINED);
  const obj3 = _require(1653);
  const sharedValue3 = _require(1653).useSharedValue(false);
  const obj4 = _require(1653);
  obj = {
    scrollableRef: tmp,
    animatedScrollableType: sharedValue,
    animatedScrollableContentOffsetY: sharedValue1,
    animatedScrollableOverrideState: sharedValue2,
    isScrollableRefreshable: sharedValue3,
    setScrollableRef: callback((id) => {
      const current = ref.current;
      id = undefined;
      if (current != null) {
        id = current.id;
      }
      if (id == null) {
        id = null;
      }
      if (id !== id.id) {
        if (tmp.current) {
          closure_1.current = tmp.current;
        }
        tmp.current = id;
      }
    }, []),
    removeScrollableRef: callback((current) => {
      try {
        const findNodeHandleResult = ref(ref2[3]).findNodeHandle(current.current);
        current = ref.current;
        let id;
        if (current != null) {
          id = current.id;
        }
        if (id == null) {
          id = null;
        }
        if (findNodeHandleResult === id) {
          ref.current = ref2.current;
        }
      } catch (err) {
        return tmp;
      }
    }, [])
  };
  return obj;
};