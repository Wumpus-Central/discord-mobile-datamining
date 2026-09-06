// _runtime/07024_CardA11yWrapper.js
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

get_ActivityIndicator = fn(17);
({ Platform, StyleSheet: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const forwardRefResult = noop.forwardRef((arg0, ref) => {
  ({ focused, animated } = arg0);
  c0 = undefined;
  ({ active, isNextScreenTransparent, detachCurrentScreen, children } = arg0);
  [tmp2, c0] = _slicedToArray(noop.useState(false), 2);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({ setInert }), []);
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
  obj.pointerEvents = str;
  const items = [absoluteFill.absoluteFill];
  obj = { overflow: str2, display: null, visibility: null };
  let str3 = "flex";
  if (tmp4) {
    str3 = "none";
  }
  obj.display = str3;
  let str4 = "visible";
  if (tmp4) {
    str4 = "hidden";
  }
  obj.visibility = str4;
  items[1] = obj;
  obj.style = items;
  obj.children = children;
  return <React3 overflow={str2} display={null} visibility={null} />;
});
forwardRefResult.displayName = "CardA11yWrapper";

export const CardA11yWrapper = forwardRefResult;
