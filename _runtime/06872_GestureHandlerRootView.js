// === Module 6872: GestureHandlerRootView ===

// Module 6872 (GestureHandlerRootView)
import _modDef6775 from "module_6775" /* 6775 */;
import _modDef6873 from "module_6873" /* 6873 */;
import noop from "module_19" /* 19 */;

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let container = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  container = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  if (container == null) {
    container = container.container;
  }
  let obj = { value: true, children: null };
  obj = { style: container };
  const merged1 = Object.assign(merged);
  obj.moduleId = globalThis._RNGH_MODULE_ID;
  obj.children = jsx(_modDef6873, { style: container });
  return <tmp3 style={container} />;
};