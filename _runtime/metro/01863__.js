// === Module 1863: ? ===

// Module 1863
import react2 from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

let RN;

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
let items;
let items1;
let items2;
let metroRequire;
let obj2;
let obj3;
let obj4;
const useMemo = react2.useMemo;
({ Animated: c3, StyleSheet, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const size = { width: 13, height: 2, borderRadius: 1 };
const size1 = { marginHorizontal: 5, width: 30, height: 30, justifyContent: "center", alignItems: "center" };
let obj = { arrowUpContainer: size1, arrowDownContainer: obj2, arrow: { width: 20, height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, arrowLeftLine: obj3, arrowRightLine: obj4 };
obj2 = { transform: items };
const create = StyleSheet.create;
const merged = Object.assign(size1);
items = [{ rotate: "180deg" }];
obj3 = { transform: items1, left: -0.5 };
const merged1 = Object.assign(size);
items1 = [{ rotate: "-45deg" }];
obj4 = { transform: items2, left: -5.5 };
const merged2 = Object.assign(size);
items2 = [{ rotate: "45deg" }];
let closure_7 = create(obj);

export default function _default(disabled) {
  let arrowUpContainer;
  let closure_3;
  let items3;
  let obj3;
  let tmp7;
  disabled = disabled.disabled;
  const theme = disabled.theme;
  const type = disabled.type;
  const obj = disabled(theme[3]);
  const keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  let items = [disabled, theme, keyboardState];
  const tmp2 = keyboardState(() => ({ backgroundColor: disabled ? theme[keyboardState].disabled : theme[keyboardState].primary }), items);
  RN = tmp2;
  const items1 = [tmp2];
  const items2 = [tmp2];
  const tmp3 = keyboardState(() => {
    const items = [closure_7.arrowLeftLine, closure_3];
    return items;
  }, items1);
  const tmp4 = keyboardState(() => {
    const items = [closure_7.arrowRightLine, closure_3];
    return items;
  }, items2);
  if ("next" === type) {
    arrowUpContainer = closure_7.arrowDownContainer;
    tmp7 = closure_7;
  } else {
    tmp7 = closure_7;
    arrowUpContainer = closure_7.arrowUpContainer;
  }
  const obj2 = { style: arrowUpContainer, children: closure_6(closure_4, obj3) };
  obj3 = { style: tmp7.arrow, children: items3 };
  items3 = [closure_5(RN.View, { style: tmp3 }), closure_5(RN.View, { style: tmp4 })];
  return closure_5(closure_4, obj2);
};