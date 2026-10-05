// _runtime/metro/01862__.js
import react2 from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";
import react_native from "../00017_react-native.js";

let Platform;
let TouchableOpacity;
let c3;
let closure_4;
const useMemo = react2.useMemo;
({ Platform, TouchableNativeFeedback: c3, TouchableOpacity, View: closure_4 } = react_native);
const jsx = Fragment.jsx;

export default function _default(disabled) {
  let accessibilityHint;
  let accessibilityLabel;
  let children;
  let onPress;
  let style;
  let testID;
  let theme;
  disabled = disabled.disabled;
  let num = disabled.rippleRadius;
  ({ children, onPress, accessibilityLabel, accessibilityHint, testID } = disabled);
  if (num === undefined) {
    num = 18;
  }
  ({ style, theme } = disabled);
  const obj = disabled(num[3]);
  const keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  const items = [disabled];
  const items1 = [keyboardState, num, theme];
  const tmp2 = theme(() => ({ disabled }), items);
  return (
    <keyboardState
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityState={tmp2}
      background={theme(() => _false.Ripple(theme[keyboardState].ripple, true, num), items1)}
      style={style}
      testID={testID}
      onPress={onPress}
    >
      <closure_4 style={style}>{children}</closure_4>
    </keyboardState>
  );
}
