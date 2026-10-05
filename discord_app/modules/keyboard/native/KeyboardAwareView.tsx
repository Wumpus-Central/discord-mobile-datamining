// discord_app/modules/keyboard/native/KeyboardAwareView.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import useKeyboardDuration from "useKeyboardDuration.tsx";
import DeprecatedLayoutAnimation from "../../animations/native/DeprecatedLayoutAnimation.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const memoResult = react.memo(function KeyboardAwareView(style) {
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
  let marginBottom;
  let closure_5;
  let ref;
  let obj = ref;
  const tmp = style;
  const useRef = ref.useRef;
  let _Math = Math;
  const obj2 = style(flag[5]);
  let systemKeyboardHeight = obj2.getSystemKeyboardHeight();
  if (0 === systemKeyboardHeight) {
    const tmpResult = tmp(flag[6]);
    let keyboardType = tmpResult.getKeyboardType();
    let num2 = 0;
    if (keyboardType !== tmp(flag[7]).KeyboardTypes.SYSTEM) {
      const tmpResult2 = tmp(flag[8]);
      num2 = tmpResult2.getCustomKeyboardHeight();
    }
    systemKeyboardHeight = num2;
  }
  ref = useRef(max(0, systemKeyboardHeight + num));
  const tmp6 = num(obj.useState(ref.current), 2);
  marginBottom = tmp6[0];
  closure_5 = tmp6[1];
  const items = [num];
  const effect = obj.useEffect(
    () =>
      subscribeToKeyboardUIStore(() => {
        const _Math = Math;
        const obj = style(flag[5]);
        let systemKeyboardHeight = obj.getSystemKeyboardHeight();
        if (0 === systemKeyboardHeight) {
          const tmp2Result = style(flag[6]);
          const keyboardType = tmp2Result.getKeyboardType();
          num = 0;
          if (keyboardType !== style(flag[7]).KeyboardTypes.SYSTEM) {
            const tmp2Result2 = style(flag[8]);
            num = tmp2Result2.getCustomKeyboardHeight();
          }
          systemKeyboardHeight = num;
        }
        const maxResult = max(0, systemKeyboardHeight + closure_1_2);
        if (ref.current !== maxResult) {
          ref.current = maxResult;
          closure_1_5(maxResult);
        }
      }),
    items,
  );
  ref = obj.useRef(false);
  const items1 = [flag, marginBottom];
  const effect1 = obj.useEffect(() => {
    if (ref.current) {
      const obj = useKeyboardDuration;
      const keyboardDuration = obj.getKeyboardDuration();
      const tmp5 = flag && keyboardDuration > 0;
      if (tmp5) {
        const tmp2Result = DeprecatedLayoutAnimation;
        const result = tmp2Result.DeprecatedLayoutAnimationKeyboard(keyboardDuration);
      }
    } else {
      tmp.current = true;
    }
  }, items1);
  const items2 = [marginBottom, style];
  return (
    <marginBottom
      style={obj.useMemo(() => {
        if (null == style) {
          return { marginBottom };
        } else {
          let obj3;
          const flattenResult = hasOwnProperty.flatten(tmp);
          if (typeof flattenResult.marginBottom === "number") {
            const obj = { marginBottom: flattenResult.marginBottom + marginBottom };
            const merged = Object.assign(flattenResult);
            obj3 = obj;
          } else {
            obj3 = { marginBottom };
            const merged1 = Object.assign(flattenResult);
          }
          return obj3;
        }
      }, items2)}
      pointerEvents={pointerEvents}
    >
      {children}
    </marginBottom>
  );
});
let result = size.fileFinishedImporting("modules/keyboard/native/KeyboardAwareView.tsx");

export default memoResult;
