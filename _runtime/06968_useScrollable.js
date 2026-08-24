// _runtime/06968_useScrollable.js
import noop from "00019_noop.js";
import { cancelAnimation } from "01654_cancelAnimation.js";
import { GESTURE_SOURCE } from "06953_GESTURE_SOURCE.js";

({ useCallback: obj1, useRef: c3 } = noop);

export const useScrollable = () => {
  const tmp = callback2(null);
  const _require = tmp;
  dependencyMap = callback2(null);
  let obj = _cancelAnimation;
  const sharedValue = obj.useSharedValue(_GESTURE_SOURCE.SCROLLABLE_TYPE.UNDETERMINED);
  const sharedValue1 = _cancelAnimation.useSharedValue(0);
  const obj2 = _cancelAnimation;
  const sharedValue2 = _cancelAnimation.useSharedValue(_GESTURE_SOURCE.SCROLLABLE_STATE.UNDETERMINED);
  const obj3 = _cancelAnimation;
  const sharedValue3 = _cancelAnimation.useSharedValue(false);
  const obj4 = _cancelAnimation;
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