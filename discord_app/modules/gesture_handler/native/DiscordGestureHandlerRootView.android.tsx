// discord_app/modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx
import LegacyBaseButton from "../../../../_runtime/06655_LegacyBaseButton.js";
import DiscordGestureHandlerRootViewNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/DiscordGestureHandlerRootViewNativeComponent.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  return jsx(DiscordGestureHandlerRootViewNativeComponentDefault, {
    style: styles.flex,
    children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }),
  });
}
