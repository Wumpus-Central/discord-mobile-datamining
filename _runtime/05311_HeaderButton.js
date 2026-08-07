// _runtime/05311_HeaderButton.js
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { Animated } from "05294_Animated.js";

let Platform;
let StyleSheet;
const require = arg1;
({ StyleSheet, Platform } = get_ActivityIndicator);
const forwardRefResult = require("noop").forwardRef(function HeaderButtonInternal(disabled, ref) {
  let accessibilityLabel;
  let children;
  let href;
  let onPress;
  let pressColor;
  let pressOpacity;
  let style;
  let testID;
  disabled = disabled.disabled;
  ({ onPress, pressColor, pressOpacity, accessibilityLabel, testID, style, href, children } = disabled);
  obj = { ref, disabled, href, "aria-label": accessibilityLabel, testID, onPress, pressColor, pressOpacity, android_ripple: obj, style: null, hitSlop: null, children: null };
  const items = [closure_4.container, , ];
  if (disabled) {
    disabled = closure_4.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  obj[9] = items;
  obj[10] = { top: 16, right: 16, bottom: 16, left: 16 };
  obj[11] = children;
  return jsx(Animated.PlatformPressable, { ref, disabled, href, "aria-label": accessibilityLabel, testID, onPress, pressColor, pressOpacity, android_ripple: obj, style: null, hitSlop: null, children: null });
});
forwardRefResult.displayName = "HeaderButton";
let obj = { borderless: true, foreground: Platform.Version >= 23, radius: 20 };
const styles = StyleSheet.create({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 8, borderRadius: 10, borderCurve: "continuous" }, disabled: { opacity: 0.5 } });

export const HeaderButton = forwardRefResult;