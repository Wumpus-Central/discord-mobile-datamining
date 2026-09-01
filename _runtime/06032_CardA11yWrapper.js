// _runtime/06032_CardA11yWrapper.js
import closure_0 from "metro/00032__slicedToArray.js";
import importAllResult from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

({ Platform, StyleSheet: obj1, View: c3 } = get_ActivityIndicator);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  ({ focused, animated } = arg0);
  let callback;
  ({ active, isNextScreenTransparent, detachCurrentScreen, children } = arg0);
  [tmp2, c0] = callback(importAllResult.useState(false), 2);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({ setInert: c0 }), []);
  let tmp4 = !animated;
  if (!animated) {
    tmp4 = false === isNextScreenTransparent;
  }
  if (tmp4) {
    tmp4 = false !== detachCurrentScreen;
  }
  if (tmp4) {
    tmp4 = !focused;
  }
  let obj = { "aria-hidden": !focused, pointerEvents: null, style: null, collapsable: false, children: null };
  if (!animated) {
    tmp2 = !focused;
  }
  let str = "box-none";
  if (tmp2) {
    str = "none";
  }
  obj[1] = str;
  const items = [absoluteFill.absoluteFill, ];
  obj = { overflow: str2, display: null, visibility: null };
  let str3 = "flex";
  if (tmp4) {
    str3 = "none";
  }
  obj[1] = str3;
  let str4 = "visible";
  if (tmp4) {
    str4 = "hidden";
  }
  obj[2] = str4;
  items[1] = obj;
  obj[2] = items;
  obj[4] = children;
  return <closure_3 overflow={str2} display={null} visibility={null} />;
});
forwardRefResult.displayName = "CardA11yWrapper";

export const CardA11yWrapper = forwardRefResult;