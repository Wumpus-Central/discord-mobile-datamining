// === Module 6072: ResourceSavingView ===

// Module 6072 (ResourceSavingView)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let Platform;
let StyleSheet;
let _window;
({ Platform, StyleSheet, View: _window } = react_native);
const jsx = Fragment.jsx;
const container = StyleSheet.create({ container: { flex: 1, overflow: "hidden" }, attached: { flex: 1 }, detached: { flex: 1, top: 30000 } });

export const ResourceSavingView = function ResourceSavingView(visible) {
  let children;
  let style;
  visible = visible.visible;
  ({ children, style } = visible);
  const merged = Object.assign(visible, Object.assign({ visible: 0, children: 0, style: 0 }));
  const items = [container.container, style];
  let str = "none";
  let str2 = "none";
  if (visible) {
    str2 = "auto";
  }
  if (visible) {
    str = "auto";
  }
  return <React style={items} pointerEvents={str2}>{null}</React>;
};