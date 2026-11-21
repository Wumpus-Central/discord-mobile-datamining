// === Module 5161: ? ===

// Module 5161
import _mod5162 from "module_5162" /* 5162 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useCallback: c2, useRef: c3 } = noop);

export () => {
  const tmp = closure_3(null);
  _require = tmp;
  dependencyMap = closure_3(null);
  const sharedValue = require("module_1653").useSharedValue(require("value2").SCROLLABLE_TYPE.UNDETERMINED);
  let obj = require("module_1653");
  const sharedValue1 = require("module_1653").useSharedValue(0);
  const obj2 = require("module_1653");
  const sharedValue2 = require("module_1653").useSharedValue(require("value2").SCROLLABLE_STATE.UNDETERMINED);
  const obj3 = require("module_1653");
  const sharedValue3 = require("module_1653").useSharedValue(false);
  const obj4 = require("module_1653");
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
        const findNodeHandleResult = _mod5162.findNodeHandle(current.current);
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