// === Module 1871: height ===

// Module 1871 (height)
import noop from "module_19" /* 19 */;

const require = fn;
const useMemo = fn(19).useMemo;
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const styles = StyleSheet.create({ absolute: { position: "absolute" }, stretch: { top: 0, bottom: 0, left: 0, right: 0 } });

export default function _default(visible) {
  let children = visible.visible;
  let obj = height(width[3]);
  let size = obj.useWindowDimensions();
  height = size.height;
  width = size.width;
  let items = [height, width];
  const items1 = [
    useMemo(() => {
      const size = { height, width };
      return size;
    }, items)
  ];
  obj = { visible: children, children: null };
  obj = {
    collapsable: false,
    style: useMemo(() => {
      const items = [closure_1_5.absolute, undefined, closure_1_5.stretch];
      return items;
    }, items1),
    children: null
  };
  if (children) {
    children = visible.children;
  }
  obj.children = children;
  obj.children = <closure_3 collapsable={false} style={useMemo(() => {
    const items = [closure_1_5.absolute, undefined, closure_1_5.stretch];
    return items;
  }, items1)}>{null}</closure_3>;
  return jsx(height(width[4]).RCTOverKeyboardView, {
    collapsable: false,
    style: useMemo(() => {
      const items = [closure_1_5.absolute, undefined, closure_1_5.stretch];
      return items;
    }, items1),
    children: null
  });
};