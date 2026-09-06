// === Module 6727: ? ===

// Module 6727
import jsxProd from "jsxProd" /* 21 */;
import noop from "module_19" /* 19 */;
import get_ActivityIndicator from "module_17" /* 17 */;

({ useCallback: closure_0, useEffect: closure_1, useMemo: c2, useRef: c3 } = noop);
({ Keyboard: closure_4, StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let c7 = 0;
let closure_8 = [];
let c9 = false;
const context = noop.createContext(null);
const logicalResponder = StyleSheet.create({ logicalResponder: { display: "contents" } });

export default function _default(children) {
  const keyboardShouldPersistTaps = children.keyboardShouldPersistTaps;
  const tmp = closure_3(false);
  const isRNGHResponderEvent = tmp;
  let items = [tmp, keyboardShouldPersistTaps];
  isRNGHResponderEvent(() => {
    sum = sum + 1;
    if (1 >= sum) {
      let addListener;
      if (closure_1_4 != null) {
        addListener = obj.addListener;
      }
      if (null != addListener) {
        const metrics = obj.metrics;
        let height;
        if (metrics != null) {
          const metricsResult = metrics();
          if (metricsResult != null) {
            height = metricsResult.height;
          }
        }
        let tmp5 = null != height;
        if (tmp5) {
          tmp5 = height > 0;
        }
        function setVisible(endCoordinates) {
          endCoordinates = endCoordinates.endCoordinates;
          let height;
          if (endCoordinates != null) {
            height = endCoordinates.height;
          }
          let tmp2 = null != height;
          if (tmp2) {
            tmp2 = height > 0;
          }
          c9 = tmp2;
        }
        closure_9 = tmp5;
        items = [
          obj.addListener("keyboardDidShow", setVisible),
          obj.addListener("keyboardWillShow", setVisible),
          obj.addListener("keyboardDidHide", () => {
                c9 = false;
              })
        ];
      }
    }
    return () => {
      (function unsubscribeFromKeyboardVisibility() {
        diff = diff - 1;
        if (0 >= diff) {
          for (const item10008 of closure_8) {
            let removeResult = item10008.remove();
            continue;
          }
          closure_8 = [];
          c9 = false;
        }
      })();
    };
  }, []);
  const items1 = [keyboardShouldPersistTaps];
  let tmp2 = closure_2(() => ({ isRNGHResponderEvent, keyboardShouldPersistTaps }), items);
  let obj = { value: tmp2, children: null };
  obj = {
    collapsable: false,
    onStartShouldSetResponderCapture: keyboardShouldPersistTaps(() => {
      closure_1.current = false;
      return false;
    }, []),
    onStartShouldSetResponder: keyboardShouldPersistTaps(() => {
      let current = "handled" === keyboardShouldPersistTaps;
      if (current) {
        current = isRNGHResponderEvent.current;
      }
      isRNGHResponderEvent.current = false;
      return current;
    }, items1),
    pointerEvents: "box-none",
    style: logicalResponder.logicalResponder,
    children: children.children
  };
  obj.children = <closure_5 collapsable={false} onStartShouldSetResponderCapture={keyboardShouldPersistTaps(() => {
    closure_1.current = false;
    return false;
  }, [])} onStartShouldSetResponder={keyboardShouldPersistTaps(() => {
    let current = "handled" === keyboardShouldPersistTaps;
    if (current) {
      current = isRNGHResponderEvent.current;
    }
    isRNGHResponderEvent.current = false;
    return current;
  }, items1)} pointerEvents="box-none" style={logicalResponder.logicalResponder}>{arg0.children}</closure_5>;
  return <context collapsable={false} onStartShouldSetResponderCapture={keyboardShouldPersistTaps(() => {
    closure_1.current = false;
    return false;
  }, [])} onStartShouldSetResponder={keyboardShouldPersistTaps(() => {
    let current = "handled" === keyboardShouldPersistTaps;
    if (current) {
      current = isRNGHResponderEvent.current;
    }
    isRNGHResponderEvent.current = false;
    return current;
  }, items1)} pointerEvents="box-none" style={logicalResponder.logicalResponder}>{arg0.children}</context>;
};
export const JSResponderContext = context;
export const updateResponderEventValue = function updateResponderEventValue(isRNGHResponderEvent, current) {
  isRNGHResponderEvent = undefined;
  if (isRNGHResponderEvent != null) {
    isRNGHResponderEvent = isRNGHResponderEvent.isRNGHResponderEvent;
  }
  if (isRNGHResponderEvent) {
    isRNGHResponderEvent.current = current;
  }
};
export const isKeyboardDismissingTap = function isKeyboardDismissingTap(keyboardShouldPersistTaps) {
  if (null == keyboardShouldPersistTaps) {
    return false;
  } else {
    keyboardShouldPersistTaps = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
    let tmp = !keyboardShouldPersistTaps;
    if (keyboardShouldPersistTaps) {
      tmp = "never" === keyboardShouldPersistTaps;
    }
    if (tmp) {
      tmp = c9;
    }
    return tmp;
  }
};