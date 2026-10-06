// === Module 6061: HeaderButton ===

// Module 6061 (HeaderButton)
import Fragment from "Fragment" /* 21 */;
import PlatformPressable2 from "PlatformPressable" /* 6044 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let Platform;
let StyleSheet;
({ StyleSheet, Platform } = react_native);
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef(function HeaderButtonInternal(disabled, ref) {
  let accessibilityLabel;
  let children;
  let href;
  let items;
  let onPress;
  let pressColor;
  let pressOpacity;
  let style;
  let testID;
  disabled = disabled.disabled;
  ({ onPress, pressColor, pressOpacity, accessibilityLabel, testID, style, href, children } = disabled);
  android_ripple = { ref, disabled, href, "aria-label": accessibilityLabel, testID, onPress, pressColor, pressOpacity, android_ripple, style: items, hitSlop: { top: 16, right: 16, bottom: 16, left: 16 }, children };
  items = [closure_4.container, , ];
  const PlatformPressable = PlatformPressable2.PlatformPressable;
  if (disabled) {
    disabled = closure_4.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  return <PlatformPressable ref={ref} disabled={disabled} href={href} aria-label={accessibilityLabel} testID={testID} onPress={onPress} pressColor={pressColor} pressOpacity={pressOpacity} android_ripple={android_ripple} style={items} hitSlop={{ top: 16, right: 16, bottom: 16, left: 16 }}>{children}</PlatformPressable>;
});
forwardRefResult.displayName = "HeaderButton";
let android_ripple = { borderless: true, foreground: Platform.Version >= 23, radius: 20 };
const styles = StyleSheet.create({ container: { flexDirection: "row", alignItems: "center", paddingHorizontal: 8, borderRadius: 10, borderCurve: "continuous" }, disabled: { opacity: 0.5 } });

export const HeaderButton = forwardRefResult;