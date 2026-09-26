// === Module 1858: ? ===

// Module 1858
import noop from "module_19" /* 19 */;

const require = fn;
const useMemo = fn(19).useMemo;
get_ActivityIndicator = fn(17);
({ Animated: c3, StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = { width: 13, height: 2, borderRadius: 1 };
const size1 = { marginHorizontal: 5, width: 30, height: 30, justifyContent: "center", alignItems: "center" };
let obj = { arrowUpContainer: size1, arrowDownContainer: null, arrow: null, arrowLeftLine: null, arrowRightLine: null };
let obj2 = {};
const merged = Object.assign(size1);
let items = [{ rotate: "180deg" }];
obj2.transform = items;
obj.arrowDownContainer = obj2;
obj.arrow = { width: 20, height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj3 = {};
const merged1 = Object.assign(size);
let items1 = [{ rotate: "-45deg" }];
obj3.transform = items1;
obj3.left = -0.5;
obj.arrowLeftLine = obj3;
const obj4 = {};
const merged2 = Object.assign(size);
let items2 = [{ rotate: "45deg" }];
obj4.transform = items2;
obj4.left = -5.5;
obj.arrowRightLine = obj4;
const styles = StyleSheet.create(obj);

export default function _default(disabled) {
  disabled = disabled.disabled;
  const theme = disabled.theme;
  const keyboardState = disabled(theme[3]).useKeyboardState((appearance) => appearance.appearance);
  let items = [disabled, theme, keyboardState];
  const tmp2 = keyboardState(() => ({ backgroundColor: disabled ? theme[keyboardState].disabled : theme[keyboardState].primary }), items);
  RN = tmp2;
  const items1 = [tmp2];
  const items2 = [tmp2];
  const obj = disabled(theme[3]);
  const tmp3 = keyboardState(() => {
    const items = [closure_7.arrowLeftLine, closure_3];
    return items;
  }, items1);
  if ("next" === disabled.type) {
    let arrowUpContainer = closure_7.arrowDownContainer;
    let tmp7 = closure_7;
  } else {
    tmp7 = closure_7;
    arrowUpContainer = closure_7.arrowUpContainer;
  }
  const obj2 = { style: arrowUpContainer, children: null };
  const obj3 = { style: tmp7.arrow, children: null };
  const items3 = [
    closure_5(RN.View, { style: tmp3 }),
    closure_5(RN.View, {
      style: keyboardState(() => {
        const items = [closure_7.arrowRightLine, closure_3];
        return items;
      }, items2)
    })
  ];
  obj3.children = items3;
  obj2.children = closure_6(closure_4, obj3);
  return closure_5(closure_4, obj2);
};