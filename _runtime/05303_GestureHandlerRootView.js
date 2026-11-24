// === Module 5303: GestureHandlerRootView ===

// Module 5303 (GestureHandlerRootView)
import _modDef5195 from "module_5195" /* 5195 */;
import _mod5257 from "module_5257" /* 5257 */;
import _modDef5304 from "module_5304" /* 5304 */;
import noop from "module_19" /* 19 */;

require = fn;
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
  obj2.moduleId = _mod5257.getModuleId();
  obj.children = <tmp5 style={container} />;
  return <tmp4 value>{null}</tmp4>;
};