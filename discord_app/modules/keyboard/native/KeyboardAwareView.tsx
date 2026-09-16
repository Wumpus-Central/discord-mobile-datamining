// === Module 5664: KeyboardAwareView ===

// Module 5664 (KeyboardAwareView)
import useKeyboardDuration from "useKeyboardDuration" /* 5666 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5667 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1480 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/KeyboardAwareView.tsx");

export default noop.memo(function KeyboardAwareView(style) {
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
  let marginBottom;
  closure_5 = undefined;
  let ref;
  let systemKeyboardHeight = style(flag[5]).getSystemKeyboardHeight();
  if (0 === systemKeyboardHeight) {
    let keyboardType = tmp(tmp2[6]).getKeyboardType();
    let num2 = 0;
    if (keyboardType !== tmp(tmp2[7]).KeyboardTypes.SYSTEM) {
      num2 = tmp(tmp2[8]).getCustomKeyboardHeight();
      const tmpResult2 = tmp(tmp2[8]);
    }
    systemKeyboardHeight = num2;
    const tmpResult = tmp(tmp2[6]);
  }
  ref = ref.useRef(Math.max(0, systemKeyboardHeight + num));
  const tmp6 = num(ref.useState(ref.current), 2);
  marginBottom = tmp6[0];
  closure_5 = tmp6[1];
  const items = [num];
  const effect = obj.useEffect(() => subscribeToKeyboardUIStore(() => {
    let systemKeyboardHeight = style(flag[5]).getSystemKeyboardHeight();
    if (0 === systemKeyboardHeight) {
      const keyboardType = style(flag[6]).getKeyboardType();
      num = 0;
      if (keyboardType !== style(flag[7]).KeyboardTypes.SYSTEM) {
        num = style(flag[8]).getCustomKeyboardHeight();
        const tmp2Result2 = style(flag[8]);
      }
      systemKeyboardHeight = num;
      const tmp2Result = style(flag[6]);
    }
    const bound = Math.max(0, systemKeyboardHeight + closure_1_2);
    if (ref.current !== bound) {
      ref.current = bound;
      closure_1_5(bound);
    }
    const obj = style(flag[5]);
  }), items);
  ref = obj.useRef(false);
  const items1 = [flag, marginBottom];
  const effect1 = obj.useEffect(() => {
    if (ref.current) {
      const keyboardDuration = useKeyboardDuration.getKeyboardDuration();
      let tmp5 = flag;
      if (flag) {
        tmp5 = keyboardDuration > 0;
      }
      if (tmp5) {
        const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimationKeyboard(keyboardDuration);
        const tmp2Result = DeprecatedLayoutAnimation;
      }
    } else {
      tmp.current = true;
    }
  }, items1);
  const items2 = [marginBottom, style];
  let obj2 = style(flag[5]);
  return <marginBottom style={ref.useMemo(() => {
    if (null == style) {
      const obj2 = { marginBottom };
      return obj2;
    } else {
      const flattenResult = hasOwnProperty.flatten(tmp);
      if (typeof flattenResult.marginBottom === "number") {
        const obj = {};
        const merged = Object.assign(flattenResult);
        obj.marginBottom = flattenResult.marginBottom + marginBottom;
        let obj3 = obj;
      } else {
        obj3 = {};
        const merged1 = Object.assign(flattenResult);
        obj3.marginBottom = marginBottom;
      }
      return obj3;
    }
  }, items2)} pointerEvents={pointerEvents}>{children}</marginBottom>;
});