// discord_app/modules/oauth2/native/OAuth2AuthorizeModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
createCacheKey = {
  container: null,
  contentContainer: null,
  titleContainer: null,
  titleContainerBorder: null,
  title: null,
};
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { padding: 16, flexDirection: "row", gap: 16 };
createCacheKey[3] = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: 1,
  backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
};
let obj1 = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: 1,
  backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
};
createCacheKey[4] = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER,
  marginEnd: 40,
};
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_9 = {
  code: "function OAuth2AuthorizeModalTsx1(){const{borderOpacity}=this.__closure;var _borderOpacity$get;return{opacity:(_borderOpacity$get=borderOpacity.get())!==null&&_borderOpacity$get!==void 0?_borderOpacity$get:1};}",
};
let obj2 = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER,
  marginEnd: 40,
};
let result = require("set").fileFinishedImporting("modules/oauth2/native/OAuth2AuthorizeModal.tsx");

export default function OAuth2AuthorizeModal(arg0) {
  const tmp = callback();
  const tmp4 = sharedValue(9235)(arg0);
  const _require = tmp4;
  let obj = ReanimatedRexport;
  sharedValue = obj.useSharedValue(0);
  obj1 = ReanimatedRexport;
  const fn = function b() {
    let opacity = sharedValue.get();
    if (opacity == null) {
      opacity = 1;
    }
    return { opacity };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 5916964482569;
  fn.__initData = closure_9;
  const items = [sharedValue];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: tmp.container, children: null };
  obj = { style: items1, children: null };
  items1 = [tmp.titleContainer];
  obj1 = { paddingTop: sharedValue(1611)().top + 16 };
  items1[1] = obj1;
  callback = React.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 16) {
      num = 1;
    }
    const result = sharedValue.set(lib(closure_1_2[8]).withSpring(num, closure_1_7));
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
      const goBackOrCancel = lib.goBackOrCancel;
      let goBackOrCancelResult;
      if (goBackOrCancel != null) {
        goBackOrCancelResult = goBackOrCancel();
      }
      return goBackOrCancelResult;
    },
    children: null,
  };
  if (null != tmp4.backStep) {
    const obj3 = { color: null };
    obj3[0] = tmp2(576).colors.INTERACTIVE_TEXT_DEFAULT;
    let tmp11Result = tmp11(tmp5(9579).ArrowSmallLeftIcon, obj3);
  } else {
    const obj4 = { color: null };
    obj4[0] = tmp2(576).colors.INTERACTIVE_TEXT_DEFAULT;
    tmp11Result = tmp11(tmp5(5680).XSmallIcon, obj4);
  }
  obj2[3] = tmp11Result;
  const items2 = [
    closure_5(require("../../../design/void/Pressables/native/Pressables.tsx").PressableOpacity, obj2),
    ,
  ];
  const obj5 = { style: tmp.title, children: null };
  const obj6 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
  const intl3 = tmp5(1114).intl;
  obj6[2] = intl3.string(require("../../../intl/index.native.tsx").t["y+/PE9"]);
  obj5[1] = closure_5(require("../../../design/components/Text/native/Text.tsx").Text, obj6);
  items2[1] = closure_5(View, obj5);
  const items3 = [tmp.titleContainerBorder, animatedStyle];
  items2[2] = closure_5(sharedValue(4296).View, { style: items3 });
  obj[1] = items2;
  const items4 = [closure_6(View, obj)];
  const obj7 = { bottom: true, style: tmp.contentContainer, children: null };
  const obj8 = {};
  const merged = Object.assign(tmp4);
  obj8.onScroll = callback;
  obj8.centerContent = true;
  obj7[2] = closure_5(sharedValue(9581), obj8);
  items4[1] = closure_5(require("../../../components_native/common/SafeAreaView.tsx").SafeAreaPaddingView, obj7);
  obj[1] = items4;
  return closure_6(View, obj);
}
