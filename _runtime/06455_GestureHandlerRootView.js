// === Module 6455: GestureHandlerRootView ===

// Module 6455 (GestureHandlerRootView)
import _modDef6358 from "module_6358" /* 6358 */;
import _modDef6456 from "module_6456" /* 6456 */;
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
  obj.children = jsx(_modDef6456, { style: container });
  return <tmp3 value>{null}</tmp3>;
};