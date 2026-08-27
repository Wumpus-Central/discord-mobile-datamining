// discord_app/modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import LegacyBaseButton from "../../../../_runtime/05604_LegacyBaseButton.js";
import __INTERNAL_VIEW_CONFIGDefault from "../../../../discord_common/js/packages/rtn-codegen/js/DiscordGestureHandlerRootViewNativeComponent.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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