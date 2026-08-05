// _runtime/05367_GestureHandlerRootView.js
import "noop";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { initialize } from "05354_initialize.js";
import { noop } from "05368_noop.js";
import { __INTERNAL_VIEW_CONFIG } from "metro/05369___INTERNAL_VIEW_CONFIG.js";

const require = arg1;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  const merged = Object.assign(style, Object.create(null));
  let obj = initialize;
  const result = obj.maybeInitializeFabric();
  if (container == null) {
    container = container.container;
  }
  obj = { value: true, children: null };
  obj = { style: container };
  const merged1 = Object.assign(merged);
  obj[1] = jsx(__INTERNAL_VIEW_CONFIG, { style: container });
  return jsx(noop.Provider, { style: container });
};