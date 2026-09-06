// === Module 9578: OAuth2AuthorizeModal ===

// Module 9578 (OAuth2AuthorizeModal)
import nativeDefault from "native" /* 576 */;
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
fn(4560);
let createStyles = { container: null, contentContainer: null, titleContainer: null, titleContainerBorder: null, title: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles.container = createStyles;
createStyles.contentContainer = { flex: 1 };
createStyles.titleContainer = { padding: 16, flexDirection: "row", gap: 16 };
const rect = { position: "absolute", left: 0, right: 0, bottom: 0, height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.titleContainerBorder = rect;
createStyles.title = { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginEnd: 40 };
let closure_8 = createStyles.createStyles(createStyles);
const __initData = { code: "function OAuth2AuthorizeModalTsx1(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeModal.tsx");

export default function OAuth2AuthorizeModal(arg0) {
  const tmp = closure_8();
  const tmp4 = sharedValue(9235)(arg0);
  _require = tmp4;
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(0);
  let obj1 = require("ReanimatedRexport");
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
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: tmp.container, children: null };
  obj = { style: null, children: null };
  const items1 = [tmp.titleContainer, ];
  obj1 = { paddingTop: sharedValue(1611)().top + 16 };
  items1[1] = obj1;
  obj.style = items1;
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 16) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num, closure_7));
  }, items);
  if (null != tmp4.backStep) {
    const intl2 = tmp5(1114).intl;
    let stringResult = intl2.string(tmp5(1114).t["13/7kX"]);
  } else {
    const intl = tmp5(1114).intl;
    stringResult = intl.string(tmp5(1114).t.cpT0Cq);
  }
  const obj2 = {
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
    children: null
  };
  if (null != tmp4.backStep) {
    const obj3 = { color: tmp2(576).colors.INTERACTIVE_TEXT_DEFAULT };
    let tmp11Result = tmp11(tmp5(9579).ArrowSmallLeftIcon, obj3);
  } else {
    const obj4 = { color: tmp2(576).colors.INTERACTIVE_TEXT_DEFAULT };
    tmp11Result = tmp11(tmp5(5680).XSmallIcon, obj4);
  }
  obj2.children = tmp11Result;
  const items2 = [closure_5(require("Pressables").PressableOpacity, obj2), , ];
  const obj5 = { style: tmp.title, children: null };
  const obj6 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
  const intl3 = tmp5(1114).intl;
  obj6.children = intl3.string(require("util").t["y+/PE9"]);
  obj5.children = closure_5(require("Text/Text").Text, obj6);
  items2[1] = closure_5(View, obj5);
  const obj7 = { style: null };
  const items3 = [tmp.titleContainerBorder, animatedStyle];
  obj7.style = items3;
  items2[2] = closure_5(sharedValue(4296).View, obj7);
  obj.children = items2;
  const items4 = [closure_6(View, obj), ];
  const obj8 = { bottom: true, style: tmp.contentContainer, children: null };
  const obj9 = {};
  const merged = Object.assign(tmp4);
  obj9.onScroll = callback;
  obj9.centerContent = true;
  obj8.children = closure_5(sharedValue(9581), obj9);
  items4[1] = closure_5(require("common/SafeAreaView").SafeAreaPaddingView, obj8);
  obj.children = items4;
  return closure_6(View, obj);
};