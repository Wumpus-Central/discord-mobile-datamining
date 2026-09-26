// _runtime/01857_disabled.js
import noop from "metro/00019__.js";

const require = fn;
const useMemo = fn(19).useMemo;
get_ActivityIndicator = fn(17);
({ Platform, TouchableNativeFeedback: c3, TouchableOpacity, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;

export default function _default(disabled) {
  disabled = disabled.disabled;
  let num = disabled.rippleRadius;
  ({ children, onPress, accessibilityLabel, accessibilityHint, testID } = disabled);
  if (num === undefined) {
    num = 18;
  }
  ({ style, theme } = disabled);
  const keyboardState = disabled(num[3]).useKeyboardState((appearance) => appearance.appearance);
  const items = [disabled];
  const items1 = [keyboardState, num, theme];
  const obj = disabled(num[3]);
  const tmp2 = theme(() => ({ disabled }), items);
  return (
    <keyboardState
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityState={theme(() => ({ disabled }), items)}
      background={theme(() => React3.Ripple(theme[keyboardState].ripple, true, num), items1)}
      style={style}
      testID={testID}
      onPress={onPress}
    >
      <closure_4 style={style}>{children}</closure_4>
    </keyboardState>
  );
}
