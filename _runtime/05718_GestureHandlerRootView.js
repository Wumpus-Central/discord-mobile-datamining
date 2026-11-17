// === Module 5718: GestureHandlerRootView ===

// Module 5718 (GestureHandlerRootView)
import _modDef5610 from "module_5610" /* 5610 */;
import _mod5672 from "module_5672" /* 5672 */;
import _modDef5719 from "module_5719" /* 5719 */;
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
  obj2.moduleId = _mod5672.getModuleId();
  obj.children = <tmp5 style={container} />;
  return <tmp4 value>{null}</tmp4>;
};