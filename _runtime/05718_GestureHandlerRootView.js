// _runtime/05718_GestureHandlerRootView.js
import _modDef5610 from "metro/05610__.js";
import _mod5672 from "metro/05672__.js";
import _modDef5719 from "metro/05719__.js";
import noop from "metro/00019__.js";

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
}
