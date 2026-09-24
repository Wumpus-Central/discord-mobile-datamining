// === Module 7101: GestureHandlerRootView ===

// Module 7101 (GestureHandlerRootView)
import _modDef7004 from "module_7004" /* 7004 */;
import _modDef7102 from "module_7102" /* 7102 */;
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
  obj.children = jsx(_modDef7102, { style: container });
  return <tmp3 value>{null}</tmp3>;
};