// _runtime/01873_disabled.js
import noopDefault from "00019_noop.js";
import { useMemo } from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
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
  let keyboardState;
  let obj = disabled(num[3]);
  keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  const items = [disabled];
  const items1 = [keyboardState, num, theme];
  obj = { accessibilityHint, accessibilityLabel, accessibilityRole: "button", accessibilityState: theme(() => ({ disabled }), items), background: theme(() => keyboardState.Ripple(theme[keyboardState].ripple, true, num), items1), style, testID, onPress, children: <closure_4 style={style}>{children}</closure_4> };
  return <keyboardState accessibilityHint={accessibilityHint} accessibilityLabel={accessibilityLabel} accessibilityRole="button" accessibilityState={theme(() => ({ disabled }), items)} background={theme(() => keyboardState.Ripple(theme[keyboardState].ripple, true, num), items1)} style={style} testID={testID} onPress={onPress}><closure_4 style={style}>{children}</closure_4></keyboardState>;
};