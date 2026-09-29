// === Module 6355: GestureHandlerRootView ===

// Module 6355 (GestureHandlerRootView)
import _modDef6258 from "module_6258" /* 6258 */;
import _modDef6356 from "module_6356" /* 6356 */;
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
  obj.children = jsx(_modDef6356, { style: container });
  return <tmp3 value>{null}</tmp3>;
};