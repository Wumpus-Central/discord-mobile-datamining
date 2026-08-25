// === Module 14023: DiscordGestureHandlerRootView ===

// Module 14023 (DiscordGestureHandlerRootView)
import noopAll from "noop" /* 19 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5533 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 14024 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ StyleSheet, TurboModuleRegistry } = get_ActivityIndicator);
const enforcing = TurboModuleRegistry.getEnforcing("RNGestureHandlerModule");
const styles = StyleSheet.create({ flex: { flex: 1 } });
const result = require("set").fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }) };
  return jsx(__INTERNAL_VIEW_CONFIGDefault, { style: styles.flex, children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }) });
};