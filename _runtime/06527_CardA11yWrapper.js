// === Module 6527: CardA11yWrapper ===

// Module 6527 (CardA11yWrapper)
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let Platform;
let c2;
let c3;
({ Platform, StyleSheet: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((arg0, arg1) => {
  let active;
  let animated;
  let c0;
  let children;
  let detachCurrentScreen;
  let focused;
  let isNextScreenTransparent;
  let str3;
  let str4;
  let tmp2;
  ({ focused, animated } = arg0);
  c0 = undefined;
  ({ active, isNextScreenTransparent, detachCurrentScreen, children } = arg0);
  [tmp2, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({ setInert }), []);
  if (!animated) {
    tmp2 = !focused;
  }
  let str = "box-none";
  if (tmp2) {
    str = "none";
  }
  const items = [absoluteFill.absoluteFill, ];
  const obj2 = { overflow: "hidden", display: str3, visibility: str4 };
  str3 = "flex";
  if (!animated && false === isNextScreenTransparent && false !== detachCurrentScreen && !focused) {
    str3 = "none";
  }
  str4 = "visible";
  if (!animated && false === isNextScreenTransparent && false !== detachCurrentScreen && !focused) {
    str4 = "hidden";
  }
  items[1] = obj2;
  return <_false aria-hidden={!focused} pointerEvents={str} style={items} collapsable={false}>{children}</_false>;
});
forwardRefResult.displayName = "CardA11yWrapper";

export const CardA11yWrapper = forwardRefResult;