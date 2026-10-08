// === Module 14639: DiscordGestureHandlerRootView ===

// Module 14639 (DiscordGestureHandlerRootView)
import c from "c" /* 576 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6326 */;
import DiscordGestureHandlerRootViewNativeComponentDefault from "DiscordGestureHandlerRootViewNativeComponent" /* 14640 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, TurboModuleRegistry } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const enforcing = TurboModuleRegistry.getEnforcing("RNGestureHandlerModule");
const styles = StyleSheet.create({ flex: { flex: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/gesture_handler/native/DiscordGestureHandlerRootView.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DiscordGestureHandlerRootView(arg0) {
  const cResult = c.c(3);
  ({ children, style } = arg0);
  if (cResult[0] === children) {
    if (cResult[1] === style) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { style: styles.flex, children: null };
  obj2.children = jsx(LegacyBaseButton.GestureHandlerRootView, { style, children });
  const tmp6 = jsx(DiscordGestureHandlerRootViewNativeComponentDefault, { style: styles.flex, children: null });
  cResult[0] = children;
  cResult[1] = style;
  cResult[2] = tmp6;
  tmp4 = tmp6;
}) : (function DiscordGestureHandlerRootView(arg0) {
  ({ children, style } = arg0);
  const obj = { style: styles.flex, children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }) };
  return jsx(DiscordGestureHandlerRootViewNativeComponentDefault, { style: styles.flex, children: jsx(LegacyBaseButton.GestureHandlerRootView, { style, children }) });
});