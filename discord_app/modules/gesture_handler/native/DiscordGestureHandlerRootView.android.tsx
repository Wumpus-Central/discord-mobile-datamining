// === Module 14555: DiscordGestureHandlerRootView ===

// Module 14555 (DiscordGestureHandlerRootView)
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import DiscordGestureHandlerRootViewNativeComponentDefault from "DiscordGestureHandlerRootViewNativeComponent" /* 14556 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, TurboModuleRegistry } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const enforcing = TurboModuleRegistry.getEnforcing("RNGestureHandlerModule");
const styles = StyleSheet.create({ flex: { flex: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }) };
  return jsx(DiscordGestureHandlerRootViewNativeComponentDefault, { style: styles.flex, children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }) });
};