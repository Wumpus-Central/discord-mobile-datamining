// _runtime/metro/05586__.js
import _mod5587 from "05587__.js";
import noop from "00019__.js";

const require = globalThis.__r;

({ useCallback: c2, useRef: c3 } = noop);

export () => {
  const tmp = closure_3(null);
  _require = tmp;
  dependencyMap = closure_3(null);
  const sharedValue = require("01655__.js").useSharedValue(require("value2").SCROLLABLE_TYPE.UNDETERMINED);
  let obj = require("01655__.js");
  const sharedValue1 = require("01655__.js").useSharedValue(0);
  const obj2 = require("01655__.js");
  const sharedValue2 = require("01655__.js").useSharedValue(require("value2").SCROLLABLE_STATE.UNDETERMINED);
  const obj3 = require("01655__.js");
  const sharedValue3 = require("01655__.js").useSharedValue(false);
  const obj4 = require("01655__.js");
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
        closure_1.current = ref.current;
      }
      ref.current = id;
    }
  }, []);
  return {
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
        const findNodeHandleResult = _mod5587.findNodeHandle(current.current);
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
}