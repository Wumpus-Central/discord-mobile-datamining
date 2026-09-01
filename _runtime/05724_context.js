// _runtime/05724_context.js
import noopDefault from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import noop from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

({ useCallback: c0, useEffect: closure_1, useMemo: obj1, useRef: c3 } = noop);
({ Keyboard: c4, StyleSheet, View: c5 } = get_ActivityIndicator);
const jsx = jsxProd.jsx;
let c7 = 0;
let closure_8 = [];
let c9 = false;
const context = noopDefault.createContext(null);
const styles = StyleSheet.create({ logicalResponder: { display: "contents" } });

export default function _default(children) {
  const keyboardShouldPersistTaps = children.keyboardShouldPersistTaps;
  let callback;
  const tmp = callback3(false);
  callback = tmp;
  let items = [tmp, keyboardShouldPersistTaps];
  callback(() => {
    const sum = closure_7 + 1;
    closure_7 = sum;
    if (1 >= sum) {
      let addListener;
      if (closure_4 != null) {
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
          closure_9 = tmp2;
        }
        closure_9 = tmp5;
        const items = [
          obj.addListener("keyboardDidShow", setVisible),
          obj.addListener("keyboardWillShow", setVisible),
          obj.addListener("keyboardDidHide", () => {
            c9 = false;
          }),
        ];
      }
    }
    return () => {
      (function unsubscribeFromKeyboardVisibility() {
        const diff = closure_7 - 1;
        closure_7 = diff;
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
  let tmp2 = callback2(() => ({ isRNGHResponderEvent: closure_1, keyboardShouldPersistTaps }), items);
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
        current = ref.current;
      }
      ref.current = false;
      return current;
    }, items1),
    pointerEvents: "box-none",
    style: logicalResponder.logicalResponder,
    children: children.children,
  };
  obj[1] = (
    <closure_5
      collapsable={false}
      onStartShouldSetResponderCapture={keyboardShouldPersistTaps(() => {
        closure_1.current = false;
        return false;
      }, [])}
      onStartShouldSetResponder={keyboardShouldPersistTaps(() => {
        let current = "handled" === keyboardShouldPersistTaps;
        if (current) {
          current = ref.current;
        }
        ref.current = false;
        return current;
      }, items1)}
      pointerEvents="box-none"
      style={logicalResponder.logicalResponder}
    >
      {arg0.children}
    </closure_5>
  );
  return (
    <context
      collapsable={false}
      onStartShouldSetResponderCapture={keyboardShouldPersistTaps(() => {
        closure_1.current = false;
        return false;
      }, [])}
      onStartShouldSetResponder={keyboardShouldPersistTaps(() => {
        let current = "handled" === keyboardShouldPersistTaps;
        if (current) {
          current = ref.current;
        }
        ref.current = false;
        return current;
      }, items1)}
      pointerEvents="box-none"
      style={logicalResponder.logicalResponder}
    >
      {arg0.children}
    </context>
  );
}
export const JSResponderContext = context;
export const updateResponderEventValue = function updateResponderEventValue(closure_1, current) {
  let isRNGHResponderEvent;
  if (closure_1 != null) {
    isRNGHResponderEvent = closure_1.isRNGHResponderEvent;
  }
  if (isRNGHResponderEvent) {
    isRNGHResponderEvent.current = current;
  }
};
export const isKeyboardDismissingTap = function isKeyboardDismissingTap(closure_18) {
  if (null == closure_18) {
    return false;
  } else {
    const keyboardShouldPersistTaps = closure_18.keyboardShouldPersistTaps;
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
