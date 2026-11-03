// === Module 5542: GestureHandlerRootView ===

// Module 5542 (GestureHandlerRootView)
import _modDef5445 from "module_5445" /* 5445 */;
import _modDef5543 from "module_5543" /* 5543 */;
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
  obj.children = jsx(_modDef5543, { style: container });
  return <tmp3 value>{null}</tmp3>;
};