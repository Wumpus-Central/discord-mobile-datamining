// === Module 1873: disabled ===

// Module 1873 (disabled)
import noopDefault from "noop" /* 19 */;
import { useMemo } from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopDefault;
({ Platform, TouchableNativeFeedback: c3, TouchableOpacity, View: c4 } = get_ActivityIndicator);

export default function _default(disabled) {
  disabled = disabled.disabled;
  let num = disabled.rippleRadius;
  ({ children, onPress, accessibilityLabel, accessibilityHint, testID } = disabled);
  if (num === undefined) {
    num = 18;
  }
  ({ style, theme } = disabled);
  let obj = disabled(num[3]);
  const keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  const items = [disabled];
  const items1 = [keyboardState, num, theme];
  obj = { accessibilityHint, accessibilityLabel, accessibilityRole: "button", accessibilityState: theme(() => ({ disabled }), items), background: theme(() => keyboardState.Ripple(theme[keyboardState].ripple, true, num), items1), style, testID, onPress, children: <closure_4 style={style}>{children}</closure_4> };
  return <keyboardState accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} accessibilityRole="button" accessibilityState={theme(() => ({ disabled }), items)} background={theme(() => keyboardState.Ripple(theme[keyboardState].ripple, true, num), items1)} style={style} testID={testID} onPress={onPress}><closure_4 style={style}>{children}</closure_4></keyboardState>;
};