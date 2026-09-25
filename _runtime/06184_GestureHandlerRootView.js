// === Module 6184: GestureHandlerRootView ===

// Module 6184 (GestureHandlerRootView)
import _modDef6087 from "module_6087" /* 6087 */;
import _modDef6185 from "module_6185" /* 6185 */;
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
  const obj = { value: true, children: null };
  const obj2 = { style: container };
  const merged1 = Object.assign(merged);
  obj2.moduleId = globalThis._RNGH_MODULE_ID;
  obj.children = jsx(_modDef6185, { style: container });
  return <tmp3 value>{null}</tmp3>;
};