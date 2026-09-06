// === Module 6643: ? ===

// Module 6643
import normalizeSnapPoint from "normalizeSnapPoint" /* 6644 */;
import noop from "module_19" /* 19 */;

({ useCallback: c2, useRef: c3 } = noop);

export const useScrollable = () => {
  const tmp = closure_3(null);
  _require = tmp;
  dependencyMap = closure_3(null);
  let obj = require("cancelAnimation");
  const sharedValue = obj.useSharedValue(require("GESTURE_SOURCE").SCROLLABLE_TYPE.UNDETERMINED);
  const sharedValue1 = require("cancelAnimation").useSharedValue(0);
  const obj2 = require("cancelAnimation");
  const sharedValue2 = require("cancelAnimation").useSharedValue(require("GESTURE_SOURCE").SCROLLABLE_STATE.UNDETERMINED);
  const obj3 = require("cancelAnimation");
  const sharedValue3 = require("cancelAnimation").useSharedValue(false);
  const obj4 = require("cancelAnimation");
  obj = {
    scrollableRef: tmp,
    animatedScrollableType: sharedValue,
    animatedScrollableContentOffsetY: sharedValue1,
    animatedScrollableOverrideState: sharedValue2,
    isScrollableRefreshable: sharedValue3,
    setScrollableRef: closure_2((id) => {
      const current = ref.current;
      id = undefined;
      if (current != null) {
        id = current.id;
      }
      if (id == null) {
        id = null;
      }
      if (id !== id.id) {
        if (ref.current) {
          closure_1.current = ref.current;
        }
        ref.current = id;
      }
    }, []),
    removeScrollableRef: closure_2((current) => {
      try {
        const findNodeHandleResult = normalizeSnapPoint.findNodeHandle(current.current);
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