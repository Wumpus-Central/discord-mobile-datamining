// === Module 6673: GestureHandlerRootView ===

// Module 6673 (GestureHandlerRootView)
import _modDef6576 from "module_6576" /* 6576 */;
import _modDef6674 from "module_6674" /* 6674 */;
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
  obj.children = jsx(_modDef6674, { style: container });
  return <tmp3 value>{null}</tmp3>;
};