// === Module 1825: disabled ===

// Module 1825 (disabled)
import "noop";
import { useMemo } from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let TouchableOpacity;
let c3;
let c4;
const require = arg1;
({ Platform, TouchableNativeFeedback: c3, TouchableOpacity, View: c4 } = get_ActivityIndicator);

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
  let keyboardState;
  let obj = disabled(num[3]);
  keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  const items = [disabled];
  const items1 = [keyboardState, num, theme];
  obj = { accessibilityHint, accessibilityLabel, accessibilityRole: "button", accessibilityState: theme(() => ({ disabled }), items), background: theme(() => keyboardState.Ripple(theme[keyboardState].ripple, true, num), items1), style, testID, onPress, children: <closure_4 style={style}>{children}</closure_4> };
  return <keyboardState accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} accessibilityRole="button" accessibilityState={theme(() => ({ disabled }), items)} background={theme(() => keyboardState.Ripple(theme[keyboardState].ripple, true, num), items1)} style={style} testID={testID} onPress={onPress}><closure_4 style={style}>{children}</closure_4></keyboardState>;
};