// _runtime/metro/05679__.js
import _mod5652 from "05652__.js";
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const container = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  header: { zIndex: 1 },
  absolute: { position: "absolute", top: 0, start: 0, end: 0 },
});

export const Screen = function Screen(aria_hidden) {
  let obj = modal(headerStatusBarHeight[4]);
  let obj1 = noop;
  const safeAreaInsets = obj.useSafeAreaInsets();
  const context = noop.useContext(modal(headerStatusBarHeight[5]).HeaderShownContext);
  let num = noop.useContext(modal(headerStatusBarHeight[6]).HeaderHeightContext);
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
  const frameSize = modal(headerStatusBarHeight[7]).useFrameSize((layout) =>
    _mod5652.getDefaultHeaderHeight(layout, modal, headerStatusBarHeight),
  );
  const ref = obj1.useRef(null);
  const tmpResult = modal(headerStatusBarHeight[7]);
  [tmp10, noop] = ref(obj1.useState(frameSize), 2);
  const items = [route.name];
  const layoutEffect = obj1.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, arg3) => {
        closure_1_3(arg3);
      });
    }
  }, items);
  obj = { "aria-hidden": !aria_hidden.focused, style: null, collapsable: false, children: null };
  const items1 = [container.container, style];
  obj.style = items1;
  let tmp15Result = null;
  if (tmp6) {
    obj = { route, navigation, children: null };
    const items2 = [tmp13.header];
    let tmp17 = null;
    if (headerTransparent) {
      const items3 = [tmp13.absolute];
      obj1 = { minHeight: tmp10 };
      items3[1] = obj1;
      tmp17 = items3;
    }
    const obj2 = { style: null, children: null };
    items2[1] = tmp17;
    obj2.style = items2;
    const obj3 = {
      ref,
      pointerEvents: "box-none",
      onLayout(nativeEvent) {
        noop(nativeEvent.nativeEvent.layout.height);
      },
      children: aria_hidden.header,
    };
    obj2.children = closure_5(closure_4, obj3);
    obj.children = closure_5(closure_4, obj2);
    tmp15Result = tmp15(tmp(tmp2[10]).NavigationProvider, obj);
  }
  const items4 = [tmp15Result];
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
  obj5.children = closure_5(modal(headerStatusBarHeight[6]).HeaderHeightContext.Provider, { value: tmp10, children });
  obj4.children = closure_5(modal(headerStatusBarHeight[5]).HeaderShownContext.Provider, obj5);
  items4[1] = closure_5(closure_4, obj4);
  obj.children = items4;
  return closure_6(modal(headerStatusBarHeight[9]).Background, obj);
};
