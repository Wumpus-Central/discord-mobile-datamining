// _runtime/05982_ResourceSavingView.js
import noop from "metro/00019__.js";

get_ActivityIndicator = fn(17);
({ Platform, StyleSheet, View: closure_0 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const container = StyleSheet.create({
  container: { flex: 1, overflow: "hidden" },
  attached: { flex: 1 },
  detached: { flex: 1, top: 30000 },
});

export const ResourceSavingView = function ResourceSavingView(visible) {
  visible = visible.visible;
  ({ children, style } = visible);
  const merged = Object.assign(visible, Object.assign({ visible: 0, children: 0, style: 0 }));
  const obj = { style: null, pointerEvents: null, children: null };
  const items = [container.container, style];
  obj.style = items;
  let str = "none";
  let str2 = "none";
  if (visible) {
    str2 = "auto";
  }
  obj.pointerEvents = str2;
  if (visible) {
    str = "auto";
  }
  obj.children = (
    <React
      collapsable={false}
      removeClippedSubviews
      pointerEvents={str}
      style={visible ? container.attached : container.detached}
    >
      {children}
    </React>
  );
  return (
    <React style={null} pointerEvents={null}>
      {null}
    </React>
  );
};
