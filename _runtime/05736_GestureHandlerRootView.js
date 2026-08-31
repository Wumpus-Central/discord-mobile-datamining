// === Module 5736: GestureHandlerRootView ===

// Module 5736 (GestureHandlerRootView)
import noopAll from "noop" /* 19 */;
import noopDefault from "noop" /* 5639 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 5737 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  const merged = Object.assign(style, Object.create(null));
  const tmp3 = noopDefault;
  if (container == null) {
    container = container.container;
  }
  let obj = { value: true, children: null };
  obj = { style: container };
  const merged1 = Object.assign(merged);
  obj.moduleId = globalThis._RNGH_MODULE_ID;
  obj[1] = jsx(__INTERNAL_VIEW_CONFIGDefault, { style: container });
  return <tmp3 style={container} />;
};