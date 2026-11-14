// discord_app/modules/keyboard/native/KeyboardAwareView.tsx
import useKeyboardAnimatedValueDefault from "useKeyboardAnimatedValue.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore.tsx";

const require = globalThis.__r;

const _modDef1655 = tmp8(1655);
const require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let closure_8 = {
  code: "(function KeyboardAwareViewTsx1(){let[styleMarginBottom,animatedKeyboardHeight]=this.__closure;return{marginBottom:styleMarginBottom+animatedKeyboardHeight.get()};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/KeyboardAwareView.tsx");

export default noop.memo(function KeyboardAwareView(keyboardHeightOffset) {
  ({ style, animated } = keyboardHeightOffset);
  ({ children, pointerEvents } = keyboardHeightOffset);
  if (animated === undefined) {
    animated = true;
  }
  let num = keyboardHeightOffset.keyboardHeightOffset;
  if (num === undefined) {
    num = 0;
  }
  _require = num;
  let systemKeyboardHeight = require("useSystemKeyboardHeight").getSystemKeyboardHeight();
  if (0 === systemKeyboardHeight) {
    let keyboardType = tmp(5503).getKeyboardType();
    let num2 = 0;
    if (keyboardType !== tmp(1628).KeyboardTypes.SYSTEM) {
      num2 = tmp(5914).getCustomKeyboardHeight();
      const tmpResult3 = tmp(5914);
    }
    systemKeyboardHeight = num2;
    const tmpResult = tmp(5503);
  }
  const ref = noop.useRef(Math.max(0, systemKeyboardHeight + num));
  importDefault = ref;
  const tmp6 = _slicedToArray(noop.useState(ref.current), 2);
  dependencyMap = tmp6[1];
  items = [num];
  const effect = noop.useEffect(
    () =>
      subscribeToKeyboardUIStore(function keyboardHeightUpdater() {
        let systemKeyboardHeight = c0(2023).getSystemKeyboardHeight();
        if (0 === systemKeyboardHeight) {
          const keyboardType = c0(5503).getKeyboardType();
          let num = 0;
          if (keyboardType !== c0(1628).KeyboardTypes.SYSTEM) {
            num = c0(5914).getCustomKeyboardHeight();
            const tmp2Result2 = c0(5914);
          }
          systemKeyboardHeight = num;
          const tmp2Result = c0(5503);
        }
        const bound = Math.max(0, systemKeyboardHeight + closure_1_0);
        if (ref.current !== bound) {
          ref.current = bound;
          dependencyMap(bound);
        }
        const obj = c0(2023);
      }),
    items,
  );
  const obj2 = require("useSystemKeyboardHeight");
  const flattenResult = StyleSheet.flatten(style);
  let marginBottom;
  if (flattenResult != null) {
    marginBottom = flattenResult.marginBottom;
  }
  let num3 = 0;
  if (typeof marginBottom === "number") {
    num3 = marginBottom;
  }
  const tmp9 = useKeyboardAnimatedValueDefault(tmp6[0], animated);
  const items1 = [closure_8, num3, tmp9];
  _require = undefined;
  importDefault = undefined;
  [tmp12, tmp13, tmp14] = items1;
  class KeyboardAwareViewTsx1 {
    constructor() {
      obj = { marginBottom: closure_0 + closure_1.get() };
      return obj;
    }
  }
  const items2 = [tmp13, tmp14];
  KeyboardAwareViewTsx1.__closure = items2;
  KeyboardAwareViewTsx1.__workletHash = 11313678442315;
  KeyboardAwareViewTsx1.__initData = tmp12;
  const animatedStyle = require("../../../../_runtime/metro/01655__.js").useAnimatedStyle(KeyboardAwareViewTsx1);
  const obj3 = { style: null, pointerEvents, children };
  const items3 = [style, animatedStyle];
  obj3.style = items3;
  return jsx(_modDef1655.View, { style: null, pointerEvents, children });
});
