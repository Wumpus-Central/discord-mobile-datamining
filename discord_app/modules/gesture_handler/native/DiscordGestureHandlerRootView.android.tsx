// discord_app/modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { Directions } from "../../../../_runtime/05407_Directions.js";
import { __INTERNAL_VIEW_CONFIG } from "../../../../discord_common/js/packages/rtn-codegen/js/DiscordGestureHandlerRootViewNativeComponent.tsx";

const require = arg1;
const styles = StyleSheet.create({ flex: { flex: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: null };
  obj[1] = jsx(Directions.GestureHandlerRootView, { style, children });
  return jsx(__INTERNAL_VIEW_CONFIG, { style: styles.flex, children: null });
};