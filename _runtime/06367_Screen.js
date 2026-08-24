// _runtime/06367_Screen.js
import closure_2 from "metro/00032__slicedToArray.js";
import closure_3 from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

const require = arg1;
({ StyleSheet, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const styles = StyleSheet.create({ container: { flex: 1 }, content: { flex: 1 }, header: { zIndex: 1 }, absolute: { position: "absolute", top: 0, start: 0, end: 0 } });

export const Screen = function Screen(aria_hidden) {
  let obj = modal(headerStatusBarHeight[4]);
  obj1 = React;
  const safeAreaInsets = obj.useSafeAreaInsets();
  const context = React.useContext(modal(headerStatusBarHeight[5]).HeaderShownContext);
  let num = React.useContext(modal(headerStatusBarHeight[6]).HeaderHeightContext);
  modal = aria_hidden.modal;
  let tmp5 = undefined !== modal;
  if (tmp5) {
    tmp5 = modal;
  }
  modal = tmp5;
  const headerShown = aria_hidden.headerShown;
  let tmp6 = undefined === headerShown;
  if (!tmp6) {
    tmp6 = headerShown;
  }
  ({ headerStatusBarHeight, headerTransparent } = aria_hidden);
  if (undefined === headerStatusBarHeight) {
    let num2 = 0;
    if (!context) {
      num2 = safeAreaInsets.top;
    }
    headerStatusBarHeight = num2;
  }
  ({ route, navigation, children, style } = aria_hidden);
  const frameSize = modal(headerStatusBarHeight[7]).useFrameSize((layout) => modal(headerStatusBarHeight[8]).getDefaultHeaderHeight(layout, modal, headerStatusBarHeight));
  const ref = obj1.useRef(null);
  const tmpResult = modal(headerStatusBarHeight[7]);
  [tmp10, closure_3] = ref(obj1.useState(frameSize), 2);
  const items = [route.name];
  const layoutEffect = obj1.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, arg3) => {
        callback(arg3);
      });
    }
  }, items);
  obj = { "aria-hidden": !aria_hidden.focused, style: items1, collapsable: false, children: null };
  items1 = [container.container, style];
  let tmp15Result = null;
  if (tmp6) {
    obj = { route: null, navigation: null, children: null };
    obj[0] = route;
    obj[1] = navigation;
    const items2 = [tmp13.header, ];
    let tmp17 = null;
    if (headerTransparent) {
      const items3 = [tmp13.absolute, ];
      obj1 = { minHeight: null };
      obj1[0] = tmp10;
      items3[1] = obj1;
      tmp17 = items3;
    }
    const obj2 = { style: null, children: null };
    items2[1] = tmp17;
    obj2[0] = items2;
    const obj3 = { ref: null, pointerEvents: "box-none", onLayout: null, children: null };
    obj3[0] = ref;
    obj3[2] = function onLayout(nativeEvent) {
      callback(nativeEvent.nativeEvent.layout.height);
    };
    obj3[3] = aria_hidden.header;
    obj2[1] = closure_5(closure_4, obj3);
    obj[2] = closure_5(closure_4, obj2);
    tmp15Result = tmp15(tmp(tmp2[10]).NavigationProvider, obj);
  }
  const items4 = [tmp15Result, ];
  const obj4 = { style: container.content, children: null };
  let tmp20 = context;
  if (!context) {
    tmp20 = false !== tmp6;
  }
  const obj5 = { value: tmp20, children: null };
  if (!tmp6) {
    if (num == null) {
      num = 0;
    }
  }
  obj5[1] = closure_5(modal(headerStatusBarHeight[6]).HeaderHeightContext.Provider, { value: tmp10, children });
  obj4[1] = closure_5(modal(headerStatusBarHeight[5]).HeaderShownContext.Provider, obj5);
  items4[1] = closure_5(closure_4, obj4);
  obj[3] = items4;
  return closure_6(modal(headerStatusBarHeight[9]).Background, obj);
};