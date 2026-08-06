// _runtime/01854_items.js
import "noop";
import { useMemo } from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let StyleSheet;
let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ Animated: c3, StyleSheet, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { width: 13, height: 2, borderRadius: 1 };
obj = { marginHorizontal: 5, width: 30, height: 30, justifyContent: "center", alignItems: "center" };
obj = { arrowUpContainer: obj, arrowDownContainer: null, arrow: null, arrowLeftLine: null, arrowRightLine: null };
const obj1 = {};
const merged = Object.assign(obj);
let items = [{ rotate: "180deg" }];
obj1.transform = items;
obj[1] = obj1;
obj[2] = { width: 20, height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj2 = {};
const merged1 = Object.assign(obj);
let items1 = [{ rotate: "-45deg" }];
obj2.transform = items1;
obj2.left = -0.5;
obj[3] = obj2;
const obj3 = {};
const merged2 = Object.assign(obj);
let items2 = [{ rotate: "45deg" }];
obj3.transform = items2;
obj3.left = -5.5;
obj[4] = obj3;
const styles = StyleSheet.create(obj);

export default function _default(disabled) {
  disabled = disabled.disabled;
  const theme = disabled.theme;
  let keyboardState;
  let RN;
  let obj = disabled(theme[3]);
  keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  let items = [disabled, theme, keyboardState];
  const tmp2 = keyboardState(() => ({ backgroundColor: disabled ? theme[keyboardState].disabled : theme[keyboardState].primary }), items);
  RN = tmp2;
  const items1 = [tmp2];
  const items2 = [tmp2];
  const tmp3 = keyboardState(() => {
    const items = [outer1_7.arrowLeftLine, c3];
    return items;
  }, items1);
  if ("next" === disabled.type) {
    let arrowUpContainer = closure_7.arrowDownContainer;
    let tmp7 = closure_7;
  } else {
    tmp7 = closure_7;
    arrowUpContainer = closure_7.arrowUpContainer;
  }
  obj = { style: arrowUpContainer, children: null };
  obj = { style: tmp7.arrow, children: null };
  const items3 = [
    closure_5(RN.View, { style: tmp3 }),
    closure_5(RN.View, {
      style: keyboardState(() => {
        const items = [outer1_7.arrowRightLine, c3];
        return items;
      }, items2)
    })
  ];
  obj[1] = items3;
  obj[1] = callback(closure_4, obj);
  return closure_5(closure_4, obj);
};