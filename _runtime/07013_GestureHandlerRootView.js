// === Module 7013: GestureHandlerRootView ===

// Module 7013 (GestureHandlerRootView)
import _modDef6916 from "module_6916" /* 6916 */;
import _modDef7014 from "module_7014" /* 7014 */;
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
  obj.children = jsx(_modDef7014, { style: container });
  return <tmp3 value>{null}</tmp3>;
};