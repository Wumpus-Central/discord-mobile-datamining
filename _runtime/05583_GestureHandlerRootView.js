// _runtime/05583_GestureHandlerRootView.js
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { noop } from "05486_noop.js";
import { __INTERNAL_VIEW_CONFIG } from "metro/05584___INTERNAL_VIEW_CONFIG.js";

const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  const merged = Object.assign(style, Object.create(null));
  const tmp3 = noop;
  if (container == null) {
    container = container.container;
  }
  let obj = { value: true, children: null };
  obj = { style: container };
  const merged1 = Object.assign(merged);
  obj.moduleId = globalThis._RNGH_MODULE_ID;
  obj[1] = jsx(__INTERNAL_VIEW_CONFIG, { style: container });
  return <tmp3 style={container} />;
};