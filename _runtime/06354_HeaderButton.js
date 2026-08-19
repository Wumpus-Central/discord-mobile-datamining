// === Module 6354: HeaderButton ===

// Module 6354 (HeaderButton)
import noopAll from "noop" /* 19 */;
import Animated from "Animated" /* 6337 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
({ StyleSheet, Platform } = get_ActivityIndicator);
const forwardRefResult = noopAll.forwardRef(function HeaderButtonInternal(disabled, ref) {
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
const styles = StyleSheet.create({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 8, borderRadius: 10, borderCurve: "continuous" }, disabled: { opacity: 0.5 } });

export const HeaderButton = forwardRefResult;