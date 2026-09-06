// _runtime/metro/01856__.js
import noop from "00019__.js";

const require = fn;
const useMemo = fn(19).useMemo;
get_ActivityIndicator = fn(17);
({ Animated: c3, StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = { width: 13, height: 2, borderRadius: 1 };
const size1 = { marginHorizontal: 5, width: 30, height: 30, justifyContent: "center", alignItems: "center" };
let obj = { arrowUpContainer: size1, arrowDownContainer: null, arrow: null, arrowLeftLine: null, arrowRightLine: null };
obj = {};
const merged = Object.assign(size1);
let items = [{ rotate: "180deg" }];
obj.transform = items;
obj.arrowDownContainer = obj;
obj.arrow = { width: 20, height: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj1 = {};
const merged1 = Object.assign(size);
let items1 = [{ rotate: "-45deg" }];
obj1.transform = items1;
obj1.left = -0.5;
obj.arrowLeftLine = obj1;
const obj2 = {};
const merged2 = Object.assign(size);
let items2 = [{ rotate: "45deg" }];
obj2.transform = items2;
obj2.left = -5.5;
obj.arrowRightLine = obj2;
const styles = StyleSheet.create(obj);

export default function _default(disabled) {
  disabled = disabled.disabled;
  const theme = disabled.theme;
  let obj = disabled(theme[3]);
  const keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  let items = [disabled, theme, keyboardState];
  const tmp2 = keyboardState(
    () => ({ backgroundColor: disabled ? theme[keyboardState].disabled : theme[keyboardState].primary }),
    items,
  );
  RN = tmp2;
  const items1 = [tmp2];
  const items2 = [tmp2];
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
  obj = { style: arrowUpContainer, children: null };
  obj = { style: tmp7.arrow, children: null };
  const items3 = [
    closure_5(RN.View, { style: tmp3 }),
    closure_5(RN.View, {
      style: keyboardState(() => {
        const items = [closure_7.arrowRightLine, closure_3];
        return items;
      }, items2),
    }),
  ];
  obj.children = items3;
  obj.children = closure_6(closure_4, obj);
  return closure_5(closure_4, obj);
}
