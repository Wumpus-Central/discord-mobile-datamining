// _runtime/06872_GestureHandlerRootView.js
import _modDef6775 from "metro/06775__.js";
import _modDef6873 from "metro/06873__.js";
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
  const obj = { value: true, children: null };
  const obj2 = { style: container };
  const merged1 = Object.assign(merged);
  obj2.moduleId = globalThis._RNGH_MODULE_ID;
  obj.children = jsx(_modDef6873, { style: container });
  return <tmp3 value>{null}</tmp3>;
}
