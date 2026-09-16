// discord_app/modules/oauth2/native/OAuth2AuthorizeModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
const createStyles = fn(4638);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER },
  contentContainer: { flex: 1 },
  titleContainer: { padding: 16, flexDirection: "row", gap: 16 },
  titleContainerBorder: null,
  title: null,
};
const rect = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: 1,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.titleContainerBorder = rect;
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.title = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  marginEnd: 40,
};
let closure_8 = createStyles.createStyles(obj2);
const __initData = {
  code: "function OAuth2AuthorizeModalTsx1(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeModal.tsx");

export default function OAuth2AuthorizeModal(arg0) {
  const tmp = closure_8();
  const tmp4 = sharedValue(9378)(arg0);
  _require = tmp4;
  sharedValue = require("ReanimatedRexport").useSharedValue(0);
  let obj = require("ReanimatedRexport");
  const fn = function b() {
    let opacity = sharedValue.get();
    if (opacity == null) {
      opacity = 1;
    }
    return { opacity };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 5916964482569;
  fn.__initData = __initData;
  const items = [sharedValue];
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: null, children: null };
  const items1 = [tmp.titleContainer];
  const obj2 = require("ReanimatedRexport");
  items1[1] = { paddingTop: sharedValue(1612)().top + 16 };
  obj4.style = items1;
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 16) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num, closure_7));
  }, items);
  if (null != tmp4.backStep) {
    const intl2 = tmp5(1115).intl;
    let stringResult = intl2.string(tmp5(1115).t["13/7kX"]);
  } else {
    const intl = tmp5(1115).intl;
    stringResult = intl.string(tmp5(1115).t.cpT0Cq);
  }
  const obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: stringResult,
    onPress() {
      goBackOrCancel = goBackOrCancel.goBackOrCancel;
      let goBackOrCancelResult;
      if (goBackOrCancel != null) {
        goBackOrCancelResult = goBackOrCancel();
      }
      return goBackOrCancelResult;
    },
    children: null,
  };
  if (null != tmp4.backStep) {
    const obj7 = { color: tmp2(576).colors.INTERACTIVE_TEXT_DEFAULT };
    let tmp11Result = closure_5(tmp5(9722).ArrowSmallLeftIcon, obj7);
  } else {
    const obj8 = { color: tmp2(576).colors.INTERACTIVE_TEXT_DEFAULT };
    tmp11Result = closure_5(tmp5(5766).XSmallIcon, obj8);
  }
  obj6.children = tmp11Result;
  const items2 = [closure_5(require("Pressables").PressableOpacity, obj6), ,];
  const obj9 = { style: tmp.title, children: null };
  const obj10 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
  const intl3 = tmp5(1115).intl;
  obj10.children = intl3.string(require("util").t["y+/PE9"]);
  obj9.children = closure_5(require("Text/Text").Text, obj10);
  items2[1] = closure_5(View, obj9);
  const obj11 = { style: null };
  const items3 = [tmp.titleContainerBorder, animatedStyle];
  obj11.style = items3;
  items2[2] = closure_5(sharedValue(4374).View, obj11);
  obj4.children = items2;
  const items4 = [closure_6(View, obj4)];
  const obj12 = { bottom: true, style: tmp.contentContainer, children: null };
  const obj13 = {};
  const obj5 = { paddingTop: sharedValue(1612)().top + 16 };
  const merged = Object.assign(tmp4);
  obj13.onScroll = callback;
  obj13.centerContent = true;
  obj12.children = closure_5(sharedValue(9724), obj13);
  items4[1] = closure_5(require("common/SafeAreaView").SafeAreaPaddingView, obj12);
  obj3.children = items4;
  return closure_6(View, obj3);
}
