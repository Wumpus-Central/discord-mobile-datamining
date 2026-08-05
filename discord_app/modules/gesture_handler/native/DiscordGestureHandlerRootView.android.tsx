// discord_app/modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const styles = StyleSheet.create({ flex: { flex: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default function DiscordGestureHandlerRootView(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: null };
  obj[1] = jsx(require("../../../../_runtime/05368_Directions.js") /* Directions */.GestureHandlerRootView, { style, children });
  return jsx(require("../../../../discord_common/js/packages/rtn-codegen/js/DiscordGestureHandlerRootViewNativeComponent.tsx"), { style: styles.flex, children: null });
};