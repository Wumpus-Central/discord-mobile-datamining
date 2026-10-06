// _runtime/06072_ResourceSavingView.js
import Fragment from "react/00021_Fragment.js";
import react from "00019_react.js";
import react_native from "00017_react-native.js";

let Platform;
let StyleSheet;
let _window;
({ Platform, StyleSheet, View: _window } = react_native);
const jsx = Fragment.jsx;
const container = StyleSheet.create({
  container: { flex: 1, overflow: "hidden" },
  attached: { flex: 1 },
  detached: { flex: 1, top: 30000 },
});

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
  return (
    <React style={items} pointerEvents={str2}>
      {null}
    </React>
  );
};
