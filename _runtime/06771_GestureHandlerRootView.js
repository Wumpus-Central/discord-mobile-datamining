// _runtime/06771_GestureHandlerRootView.js
import _modDef6674 from "metro/06674__.js";
import _modDef6772 from "metro/06772__.js";
import noop from "metro/00019__.js";

const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let container = StyleSheet.create({ container: { flex: 1 } });

export default function GestureHandlerRootView(style) {
  container = style.style;
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  if (container == null) {
    container = container.container;
  }
  let obj = { value: true, children: null };
  obj = { style: container };
  const merged1 = Object.assign(merged);
  obj.moduleId = globalThis._RNGH_MODULE_ID;
  obj.children = jsx(_modDef6772, { style: container });
  return <tmp3 style={container} />;
}
