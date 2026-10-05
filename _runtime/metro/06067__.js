// _runtime/metro/06067__.js
import react_native from "../06040_react-native.js";
import _slicedToArray from "00032__slicedToArray.js";
import react from "../00019_react.js";
import react_native2 from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ StyleSheet, View: closure_4 } = react_native2);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const container = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  header: { zIndex: 1 },
  absolute: { position: "absolute", top: 0, start: 0, end: 0 },
});

export const Screen = function Screen(modal) {
  let Provider;
  let Provider2;
  let children;
  let headerStatusBarHeight;
  let headerTransparent;
  let items1;
  let items4;
  let obj6;
  let obj7;
  let obj9;
  let route;
  let style;
  let tmp10;
  let obj = modal(headerStatusBarHeight[4]);
  const safeAreaInsets = obj.useSafeAreaInsets();
  const context = react.useContext(modal(headerStatusBarHeight[5]).HeaderShownContext);
  let num = react.useContext(modal(headerStatusBarHeight[6]).HeaderHeightContext);
  modal = modal.modal;
  let tmp5 = undefined !== modal;
  const focused = modal.focused;
  if (tmp5) {
    tmp5 = modal;
  }
  modal = tmp5;
  const headerShown = modal.headerShown;
  let tmp6 = undefined === headerShown;
  const header = modal.header;
  if (!tmp6) {
    tmp6 = headerShown;
  }
  ({ headerStatusBarHeight, headerTransparent } = modal);
  if (undefined === headerStatusBarHeight) {
    let num2 = 0;
    if (!context) {
      num2 = safeAreaInsets.top;
    }
    headerStatusBarHeight = num2;
  }
  ({ route, navigation, children, style } = modal);
  const tmpResult = modal(headerStatusBarHeight[7]);
  const frameSize = tmpResult.useFrameSize((layout) => {
    const obj = react_native;
    return obj.getDefaultHeaderHeight(layout, modal, headerStatusBarHeight);
  });
  const ref = react.useRef(null);
  const tmp9 = ref(react.useState(frameSize), 2);
  [tmp10, react] = tmp9;
  const items = [route.name];
  const layoutEffect = react.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, arg3) => {
        closure_1_3(arg3);
      });
    }
  }, items);
  const obj3 = { "aria-hidden": !focused, style: items1, collapsable: false, children: items4 };
  items1 = [container.container, style];
  let tmp15Result = null;
  const Background = tmp(tmp2[9]).Background;
  if (tmp6) {
    const items2 = [container.header];
    let tmp17 = null;
    const obj4 = { route, navigation, children: closure_5(closure_4, obj6) };
    const NavigationProvider = tmp(tmp2[10]).NavigationProvider;
    if (headerTransparent) {
      const items3 = [container.absolute];
      const obj5 = { minHeight: tmp10 };
      items3[1] = obj5;
      tmp17 = items3;
    }
    items2[1] = tmp17;
    obj6 = { style: items2, children: closure_5(closure_4, obj7) };
    obj7 = {
      ref,
      pointerEvents: "box-none",
      onLayout(nativeEvent) {
        react(nativeEvent.nativeEvent.layout.height);
      },
      children: header,
    };
    tmp15Result = closure_5(NavigationProvider, obj4);
  }
  items4 = [tmp15Result];
  let tmp20 = context;
  const obj8 = { style: container.content, children: closure_5(Provider, obj9) };
  Provider = tmp(tmp2[5]).HeaderShownContext.Provider;
  if (!context) {
    tmp20 = false !== tmp6;
  }
  obj9 = { value: tmp20, children: closure_5(Provider2, { value: tmp10, children }) };
  Provider2 = tmp(tmp2[6]).HeaderHeightContext.Provider;
  if (!tmp6) {
    if (num == null) {
      num = 0;
    }
  }
  items4[1] = closure_5(closure_4, obj8);
  return closure_6(Background, obj3);
};
