// === Module 6385: GestureHandlerRootView ===

// Module 6385 (GestureHandlerRootView)
import _modDef6288 from "module_6288" /* 6288 */;
import _modDef6386 from "module_6386" /* 6386 */;
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
  obj.children = jsx(_modDef6386, { style: container });
  return <tmp3 value>{null}</tmp3>;
};