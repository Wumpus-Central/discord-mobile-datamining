// _runtime/05513_ResourceSavingView.js
import noopAll from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

noopAll;
({ Platform, StyleSheet, View: c0 } = get_ActivityIndicator);
const styles = StyleSheet.create({ container: { flex: 1, overflow: "hidden" }, attached: { flex: 1 }, detached: { flex: 1, top: 30000 } });

export const ResourceSavingView = function ResourceSavingView(visible) {
  visible = visible.visible;
  ({ children, style } = visible);
  const merged = Object.assign(visible, Object.create(null));
  let obj = { style: items, pointerEvents: null, children: null };
  items = [container.container, style];
  let str = "none";
  let str2 = "none";
  if (visible) {
    str2 = "auto";
  }
  obj[1] = str2;
  if (visible) {
    str = "auto";
  }
  obj = { collapsable: false, removeClippedSubviews: true, pointerEvents: str, style: visible ? tmp4.attached : tmp4.detached, children };
  obj[2] = <closure_0 collapsable={false} removeClippedSubviews pointerEvents={str} style={visible ? tmp4.attached : tmp4.detached}>{children}</closure_0>;
  return <closure_0 collapsable={false} removeClippedSubviews pointerEvents={str} style={visible ? tmp4.attached : tmp4.detached}>{children}</closure_0>;
};