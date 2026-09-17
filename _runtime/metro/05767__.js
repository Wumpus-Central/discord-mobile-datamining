// _runtime/metro/05767__.js
import _mod5740 from "05740__.js";
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
  const safeAreaInsets = modal(headerStatusBarHeight[4]).useSafeAreaInsets();
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
  const obj = modal(headerStatusBarHeight[4]);
  const frameSize = modal(headerStatusBarHeight[7]).useFrameSize((layout) =>
    _mod5740.getDefaultHeaderHeight(layout, modal, headerStatusBarHeight),
  );
  const ref = noop.useRef(null);
  const tmpResult = modal(headerStatusBarHeight[7]);
  [tmp10, noop] = ref(noop.useState(frameSize), 2);
  const items = [route.name];
  const layoutEffect = noop.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.measure((arg0, arg1, arg2, arg3) => {
        closure_1_3(arg3);
      });
    }
  }, items);
  const obj3 = { "aria-hidden": !aria_hidden.focused, style: null, collapsable: false, children: null };
  const items1 = [container.container, style];
  obj3.style = items1;
  let tmp15Result = null;
  if (tmp6) {
    const obj4 = { route, navigation, children: null };
    const items2 = [container.header];
    let tmp17 = null;
    if (headerTransparent) {
      const items3 = [container.absolute];
      const obj5 = { minHeight: tmp10 };
      items3[1] = obj5;
      tmp17 = items3;
    }
    const obj6 = { style: null, children: null };
    items2[1] = tmp17;
    obj6.style = items2;
    const obj7 = {
      ref,
      pointerEvents: "box-none",
      onLayout(nativeEvent) {
        noop(nativeEvent.nativeEvent.layout.height);
      },
      children: aria_hidden.header,
    };
    obj6.children = closure_5(closure_4, obj7);
    obj4.children = closure_5(closure_4, obj6);
    tmp15Result = closure_5(tmp(tmp2[10]).NavigationProvider, obj4);
  }
  const items4 = [tmp15Result];
  const obj8 = { style: container.content, children: null };
  let tmp20 = context;
  if (!context) {
    tmp20 = false !== tmp6;
  }
  const obj9 = { value: tmp20, children: null };
  if (!tmp6) {
    if (num == null) {
      num = 0;
    }
  }
  obj9.children = closure_5(modal(headerStatusBarHeight[6]).HeaderHeightContext.Provider, { value: tmp10, children });
  obj8.children = closure_5(modal(headerStatusBarHeight[5]).HeaderShownContext.Provider, obj9);
  items4[1] = closure_5(closure_4, obj8);
  obj3.children = items4;
  return closure_6(modal(headerStatusBarHeight[9]).Background, obj3);
};
