// _runtime/metro/06135__.js
import normalizeSnapPoint from "../06136_normalizeSnapPoint.js";
import react from "../00019_react.js";

const require = globalThis.__r;
let _require, dependencyMap;

let c2;
let c3;
({ useCallback: c2, useRef: c3 } = react);

export const useScrollable = () => {
  let ref;
  let ref2;
  const tmp = closure_3(null);
  _require = tmp;
  dependencyMap = closure_3(null);
  let obj = require("01643__.js");
  const sharedValue = obj.useSharedValue(require("GESTURE_SOURCE").SCROLLABLE_TYPE.UNDETERMINED);
  const obj2 = require("01643__.js");
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = require("01643__.js");
  const sharedValue2 = obj3.useSharedValue(require("GESTURE_SOURCE").SCROLLABLE_STATE.UNDETERMINED);
  const obj4 = require("01643__.js");
  const sharedValue3 = obj4.useSharedValue(false);
  const tmp6 = closure_2((id) => {
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
        ref2.current = ref.current;
      }
      ref.current = id;
    }
  }, []);
  const obj5 = {
    scrollableRef: tmp,
    animatedScrollableType: sharedValue,
    animatedScrollableContentOffsetY: sharedValue1,
    animatedScrollableOverrideState: sharedValue2,
    isScrollableRefreshable: sharedValue3,
    setScrollableRef: tmp6,
    removeScrollableRef: closure_2((current) => {
      try {
        const obj = normalizeSnapPoint;
        const findNodeHandleResult = obj.findNodeHandle(current.current);
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
      } catch (err) {}
    }, []),
  };
  return obj5;
};
