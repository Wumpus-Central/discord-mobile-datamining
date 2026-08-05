// _runtime/05254_Screen.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let StyleSheet;
let c5;
let closure_6;
let error;
const require = arg1;
({ StyleSheet, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const styles = StyleSheet.create({ container: { flex: 1, flexDirection: "column-reverse" }, content: { flex: 1 }, absolute: { position: "absolute", top: 0, left: 0, right: 0 } });

export default function Screen(headerShown) {
  let children;
  let _slicedToArray;
  let focused;
  let headerStatusBarHeight;
  let headerTransparent;
  let modal;
  let navigation;
  let route;
  let style;
  let tmp8;
  let obj = _require(headerStatusBarHeight[4]);
  _require = obj.useSafeAreaFrame();
  let obj1 = _require(headerStatusBarHeight[4]);
  let obj2 = React;
  const safeAreaInsets = obj1.useSafeAreaInsets();
  const context = React.useContext(importDefault(headerStatusBarHeight[5]));
  let num = React.useContext(importDefault(headerStatusBarHeight[6]));
  ({ focused, modal } = headerShown);
  importDefault = undefined !== modal && modal;
  headerShown = headerShown.headerShown;
  let tmp6 = undefined === headerShown;
  if (!tmp6) {
    tmp6 = headerShown;
  }
  ({ headerStatusBarHeight, headerTransparent } = headerShown);
  if (undefined === headerStatusBarHeight) {
    let num2 = 0;
    if (!context) {
      num2 = safeAreaInsets.top;
    }
    headerStatusBarHeight = num2;
  }
  ({ navigation, route, children, style } = headerShown);
  [tmp8, _slicedToArray] = callback(obj2.useState(() => callback(headerStatusBarHeight[7])(closure_0, callback, headerStatusBarHeight)), 2);
  obj = { accessibilityElementsHidden: !focused, importantForAccessibility: null, style: null, children: null };
  let str = "no-hide-descendants";
  const tmp7 = callback(obj2.useState(() => callback(headerStatusBarHeight[7])(closure_0, callback, headerStatusBarHeight)), 2);
  const tmp9 = closure_7;
  if (focused) {
    str = "auto";
  }
  obj[1] = str;
  const items = [closure_8.container, style];
  obj[2] = items;
  obj = { style: closure_8.content, children: null };
  let tmp14 = context;
  if (!context) {
    tmp14 = false !== tmp6;
  }
  obj1 = { value: tmp14, children: null };
  if (!tmp6) {
    if (num == null) {
      num = 0;
    }
    tmp8 = num;
  }
  obj1[1] = closure_6(importDefault(headerStatusBarHeight[6]).Provider, { value: tmp8, children });
  obj[1] = closure_6(importDefault(headerStatusBarHeight[5]).Provider, obj1);
  const items1 = [closure_6(closure_5, obj), ];
  let tmp12Result = null;
  if (tmp6) {
    obj2 = { value: null, children: null };
    obj2[0] = navigation;
    const obj3 = { value: null, children: null };
    obj3[0] = route;
    const obj4 = { onLayout: null, style: null, children: null };
    obj4[0] = function onLayout(nativeEvent) {
      callback2(nativeEvent.nativeEvent.layout.height);
    };
    let absolute = null;
    if (headerTransparent) {
      absolute = closure_8.absolute;
    }
    obj4[1] = absolute;
    obj4[2] = headerShown.header;
    obj3[1] = tmp12(tmp13, obj4);
    obj2[1] = tmp12(tmp(tmp2[9]).NavigationRouteContext.Provider, obj3);
    tmp12Result = tmp12(tmp(tmp2[9]).NavigationContext.Provider, obj2);
  }
  items1[1] = tmp12Result;
  obj[3] = items1;
  return tmp9(importDefault(headerStatusBarHeight[8]), obj);
};