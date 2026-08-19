// _runtime/06493_GestureHandlerRootView.js
import noopAll from "00019_noop.js";
import noopDefault from "06396_noop.js";
import __INTERNAL_VIEW_CONFIGDefault from "metro/06494___INTERNAL_VIEW_CONFIG.js";
import { StyleSheet } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

noopAll;
const styles = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  let container = style.style;
  const merged = Object.assign(style, Object.create(null));
  if (container == null) {
    container = container.container;
  }
  const obj = { style: container };
  const merged1 = Object.assign(merged);
  obj.moduleId = globalThis._RNGH_MODULE_ID;
  obj[1] = jsx(__INTERNAL_VIEW_CONFIGDefault, { style: container });
  return <tmp3 style={container} />;
};