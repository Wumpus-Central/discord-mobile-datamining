// === Module 5666: HeaderButton ===

// Module 5666 (HeaderButton)
import _mod5649 from "module_5649" /* 5649 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, Platform } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const forwardRefResult = noop.forwardRef(function HeaderButtonInternal(disabled, ref) {
  disabled = disabled.disabled;
  ({ onPress, pressColor, pressOpacity, accessibilityLabel, testID, style, href, children } = disabled);
  android_ripple = { ref, disabled, href, "aria-label": accessibilityLabel, testID, onPress, pressColor, pressOpacity, android_ripple, style: null, hitSlop: null, children: null };
  const items = [closure_4.container, , ];
  if (disabled) {
    disabled = closure_4.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  android_ripple.style = items;
  android_ripple.hitSlop = { top: 16, right: 16, bottom: 16, left: 16 };
  android_ripple.children = children;
  return jsx(_mod5649.PlatformPressable, { ref, disabled, href, "aria-label": accessibilityLabel, testID, onPress, pressColor, pressOpacity, android_ripple, style: null, hitSlop: null, children: null });
});
forwardRefResult.displayName = "HeaderButton";
let android_ripple = { borderless: true, foreground: Platform.Version >= 23, radius: 20 };
const styles = StyleSheet.create({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 8, borderRadius: 10, borderCurve: "continuous" }, disabled: { opacity: 0.5 } });

export const HeaderButton = forwardRefResult;