// _runtime/05694_ResourceSavingScene.js
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let StyleSheet;
let c0;
({ Platform, StyleSheet, View: c0 } = get_ActivityIndicator);
const styles = StyleSheet.create({ container: { flex: 1, overflow: "hidden" }, attached: { flex: 1 }, detached: { flex: 1, top: 30000 } });

export default function ResourceSavingScene(visible) {
  let children;
  let style;
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