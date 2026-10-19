// === Module 5374: GestureHandlerRootView ===

// Module 5374 (GestureHandlerRootView)
import _modDef5277 from "module_5277" /* 5277 */;
import _modDef5375 from "module_5375" /* 5375 */;
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
  obj.children = jsx(_modDef5375, { style: container });
  return <tmp3 value>{null}</tmp3>;
};