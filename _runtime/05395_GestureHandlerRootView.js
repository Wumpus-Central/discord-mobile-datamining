// === Module 5395: GestureHandlerRootView ===

// Module 5395 (GestureHandlerRootView)
import _modDef5298 from "module_5298" /* 5298 */;
import _modDef5396 from "module_5396" /* 5396 */;
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
  obj.children = jsx(_modDef5396, { style: container });
  return <tmp3 value>{null}</tmp3>;
};