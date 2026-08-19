// === Module 13920: DiscordGestureHandlerRootView ===

// Module 13920 (DiscordGestureHandlerRootView)
import noopAll from "noop" /* 19 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6377 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 13921 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
({ StyleSheet, TurboModuleRegistry } = get_ActivityIndicator);
const enforcing = TurboModuleRegistry.getEnforcing("RNGestureHandlerModule");
const styles = StyleSheet.create({ flex: { flex: 1 } });
const result = require("obj132").fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }) };
  return jsx(__INTERNAL_VIEW_CONFIGDefault, { style: styles.flex, children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }) });
};