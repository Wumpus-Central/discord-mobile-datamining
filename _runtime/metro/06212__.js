// _runtime/metro/06212__.js
import Fragment from "../react/00021_Fragment.js";
import react_mod from "../00019_react.js";
import react_native from "../00017_react-native.js";

let closure_9, diff, sum;

let StyleSheet;
let _window;
let c2;
let c3;
let closure_4;
let hasOwnProperty;
let map;
let react = react_mod;
({ useCallback: _window, useEffect: map, useMemo: c2, useRef: c3 } = react);
react = react_mod;
({ Keyboard: closure_4, StyleSheet, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let c7 = 0;
let closure_8 = [];
let c9 = false;
const context = react.createContext(null);
const logicalResponder = StyleSheet.create({ logicalResponder: { display: "contents" } });

export default function _default(keyboardShouldPersistTaps) {
  keyboardShouldPersistTaps = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
  const children = keyboardShouldPersistTaps.children;
  const tmp = closure_3(false);
  const isRNGHResponderEvent = tmp;
  let items = [tmp, keyboardShouldPersistTaps];
  let tmp2 = closure_2(() => ({ isRNGHResponderEvent, keyboardShouldPersistTaps }), items);
  isRNGHResponderEvent(() => {
    sum = sum + 1;
    if (1 >= sum) {
      let addListener;
      if (closure_1_4 != null) {
        addListener = closure_1_4.addListener;
      }
      if (null != addListener) {
        const metrics = closure_1_4.metrics;
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
          c9 = null != height && height > 0;
          const tmp2 = null != height && height > 0;
        }
        closure_9 = tmp5;
        items = [
          closure_1_4.addListener("keyboardDidShow", setVisible),
          closure_1_4.addListener("keyboardWillShow", setVisible),
          closure_1_4.addListener("keyboardDidHide", () => {
            c9 = false;
          }),
        ];
      }
    }
    return () => {
      function unsubscribeFromKeyboardVisibility() {
        diff = diff - 1;
        if (0 >= diff) {
          for (const item10008 of closure_8) {
            let removeResult = item10008.remove();
            continue;
          }
          closure_8 = [];
          c9 = false;
        }
      }
      unsubscribeFromKeyboardVisibility();
    };
  }, []);
  const items1 = [keyboardShouldPersistTaps];
  const tmp4 = keyboardShouldPersistTaps(() => {
    isRNGHResponderEvent.current = false;
    return false;
  }, []);
  ({
    collapsable: false,
    onStartShouldSetResponderCapture: tmp4,
    onStartShouldSetResponder: keyboardShouldPersistTaps(() => {
      const current = "handled" === keyboardShouldPersistTaps && isRNGHResponderEvent.current;
      isRNGHResponderEvent.current = false;
      return current;
    }, items1),
    pointerEvents: "box-none",
    style: logicalResponder.logicalResponder,
    children,
  });
  return <context value={tmp2}>{null}</context>;
}
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
