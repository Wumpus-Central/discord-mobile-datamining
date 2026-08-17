// _runtime/01889_height.js
import noopDefault from "noop" /* 19 */;
import { useMemo } from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopDefault;
({ Platform, StyleSheet, View: c3 } = get_ActivityIndicator);
const styles = StyleSheet.create({ absolute: { position: "absolute" }, stretch: { top: 0, bottom: 0, left: 0, right: 0 } });

export default function _default(visible) {
  let children = visible.visible;
  let obj = height(width[3]);
  const size = obj.useWindowDimensions();
  height = size.height;
  width = size.width;
  let items = [height, width];
  const items1 = [useMemo(() => ({ height, width }), items)];
  obj = { visible: children, children: null };
  obj = {
    collapsable: false,
    style: useMemo(() => {
      const items = [closure_5.absolute, undefined, closure_5.stretch];
      return items;
    }, items1),
    children: null
  };
  if (children) {
    children = visible.children;
  }
  obj[2] = children;
  obj[1] = <closure_3 collapsable={false} style={useMemo(() => {
    const items = [closure_5.absolute, undefined, closure_5.stretch];
    return items;
  }, items1)}>{null}</closure_3>;
  return jsx(height(width[4]).RCTOverKeyboardView, {
    collapsable: false,
    style: useMemo(() => {
      const items = [closure_5.absolute, undefined, closure_5.stretch];
      return items;
    }, items1),
    children: null
  });
};