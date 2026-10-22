// === Module 5399: GestureHandlerRootView ===

// Module 5399 (GestureHandlerRootView)
import _modDef5302 from "module_5302" /* 5302 */;
import _modDef5400 from "module_5400" /* 5400 */;
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
  obj.children = jsx(_modDef5400, { style: container });
  return <tmp3 value>{null}</tmp3>;
};