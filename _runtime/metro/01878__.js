// _runtime/metro/01878__.js
import react2 from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";
import react_native from "../00017_react-native.js";

let size;

let Platform;
let StyleSheet;
let c3;
const useMemo = react2.useMemo;
({ Platform, StyleSheet, View: c3 } = react_native);
const jsx = Fragment.jsx;
const styles = StyleSheet.create({
  absolute: { position: "absolute" },
  stretch: { top: 0, bottom: 0, left: 0, right: 0 },
});

export default function _default(visible) {
  let height;
  let width;
  visible = visible.visible;
  const children = visible.children;
  const obj = height(width[3]);
  size = obj.useWindowDimensions();
  height = size.height;
  width = size.width;
  let items = [height, width];
  const items1 = [
    useMemo(() => {
      size = { height, width };
      return size;
    }, items),
  ];
  ({
    collapsable: false,
    style: useMemo(() => {
      const items = [closure_1_5.absolute, undefined, closure_1_5.stretch];
      return items;
    }, items1),
    children: visible,
  });
  const RCTOverKeyboardView = height(width[4]).RCTOverKeyboardView;
  if (visible) {
    visible = children;
  }
  return <RCTOverKeyboardView visible={visible}>{null}</RCTOverKeyboardView>;
}
