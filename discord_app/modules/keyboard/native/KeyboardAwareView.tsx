import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { jsx } from "jsxProd";

let c4;
let c5;
const require = arg1;
let c3 = importAllResult;
({ View: c4, StyleSheet: c5 } = get_ActivityIndicator);
const memoResult = importAllResult.memo(function KeyboardAwareView(style) {
  let children;
  let pointerEvents;
  style = style.style;
  let flag = style.animated;
  ({ children, pointerEvents } = style);
  if (flag === undefined) {
    flag = true;
  }
  let num = style.keyboardHeightOffset;
  if (num === undefined) {
    num = 0;
  }
  let ref;
  let first;
  let closure_5;
  let subscribeToKeyboardUIStore;
  let obj = ref;
  let systemKeyboardHeight = style(flag[5]).getSystemKeyboardHeight();
  if (0 === systemKeyboardHeight) {
    let tmpResult = tmp(tmp2[6]);
    let keyboardType = tmpResult.getKeyboardType();
    let num2 = 0;
    if (keyboardType !== tmp(tmp2[7]).KeyboardTypes.SYSTEM) {
      tmpResult = tmp(tmp2[8]);
      num2 = tmpResult.getCustomKeyboardHeight();
    }
    systemKeyboardHeight = num2;
  }
  ref = ref.useRef(Math.max(0, systemKeyboardHeight + num));
  const tmp6 = num(obj.useState(ref.current), 2);
  first = tmp6[0];
  closure_5 = tmp6[1];
  const items = [num];
  const effect = obj.useEffect(() => ref(() => {
    let systemKeyboardHeight = outer1_0(outer1_1[5]).getSystemKeyboardHeight();
    if (0 === systemKeyboardHeight) {
      let tmp2Result = tmp2(tmp3[6]);
      const keyboardType = tmp2Result.getKeyboardType();
      let num = 0;
      if (keyboardType !== tmp2(tmp3[7]).KeyboardTypes.SYSTEM) {
        tmp2Result = tmp2(tmp3[8]);
        num = tmp2Result.getCustomKeyboardHeight();
      }
      systemKeyboardHeight = num;
    }
    const bound = Math.max(0, systemKeyboardHeight + _slicedToArray);
    if (ref.current !== bound) {
      ref.current = bound;
      callback(bound);
    }
  }), items);
  subscribeToKeyboardUIStore = obj.useRef(false);
  const items1 = [flag, first];
  const effect1 = obj.useEffect(() => {
    if (ref.current) {
      const keyboardDuration = style(flag[9]).getKeyboardDuration();
      let tmp5 = flag;
      if (flag) {
        tmp5 = keyboardDuration > 0;
      }
      if (tmp5) {
        const result = tmp2(tmp3[10]).DeprecatedLayoutAnimationKeyboard(keyboardDuration);
        const tmp2Result = tmp2(tmp3[10]);
      }
      const obj = style(flag[9]);
      tmp2 = style;
      tmp3 = flag;
    } else {
      tmp.current = true;
    }
  }, items1);
  const items2 = [first, style];
  obj = {
    style: obj.useMemo(() => {
      if (null == style) {
        let obj = { marginBottom: null };
        obj[0] = first;
        return obj;
      } else {
        const flattenResult = closure_5.flatten(tmp);
        if (typeof flattenResult.marginBottom === "number") {
          obj = {};
          const merged = Object.assign(flattenResult);
          obj.marginBottom = flattenResult.marginBottom + first;
        } else {
          obj = {};
          const merged1 = Object.assign(flattenResult);
          obj.marginBottom = first;
        }
        return obj;
      }
    }, items2),
    pointerEvents,
    children
  };
  return <first style={obj.useMemo(() => {
    if (null == style) {
      let obj = { marginBottom: null };
      obj[0] = first;
      return obj;
    } else {
      const flattenResult = closure_5.flatten(tmp);
      if (typeof flattenResult.marginBottom === "number") {
        obj = {};
        const merged = Object.assign(flattenResult);
        obj.marginBottom = flattenResult.marginBottom + first;
      } else {
        obj = {};
        const merged1 = Object.assign(flattenResult);
        obj.marginBottom = first;
      }
      return obj;
    }
  }, items2)} pointerEvents={pointerEvents}>{children}</first>;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/keyboard/native/KeyboardAwareView.tsx");

export default memoResult;