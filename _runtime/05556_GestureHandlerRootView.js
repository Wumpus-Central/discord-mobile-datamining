// === Module 5556: GestureHandlerRootView ===

// Module 5556 (GestureHandlerRootView)
import _modDef5448 from "module_5448" /* 5448 */;
import _mod5510 from "module_5510" /* 5510 */;
import _modDef5557 from "module_5557" /* 5557 */;
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
  obj2.moduleId = _mod5510.getModuleId();
  obj.children = <tmp5 style={container} />;
  return <tmp4 value>{null}</tmp4>;
};