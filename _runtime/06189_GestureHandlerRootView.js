// === Module 6189: GestureHandlerRootView ===

// Module 6189 (GestureHandlerRootView)
import _modDef6092 from "module_6092" /* 6092 */;
import _modDef6190 from "module_6190" /* 6190 */;
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
  obj.children = jsx(_modDef6190, { style: container });
  return <tmp3 value>{null}</tmp3>;
};