// discord_app/modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { LegacyBaseButton } from "../../../../_runtime/06377_LegacyBaseButton.js";
import { __INTERNAL_VIEW_CONFIG } from "../../../../discord_common/js/packages/rtn-codegen/js/DiscordGestureHandlerRootViewNativeComponent.tsx";

let StyleSheet;
let TurboModuleRegistry;
const require = arg1;
({ StyleSheet, TurboModuleRegistry } = get_ActivityIndicator);
const enforcing = TurboModuleRegistry.getEnforcing("RNGestureHandlerModule");
const styles = StyleSheet.create({ flex: { flex: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: null };
  obj[1] = jsx(LegacyBaseButton.GestureHandlerRootView, { style, children });
  return jsx(__INTERNAL_VIEW_CONFIG, { style: styles.flex, children: null });
};