// discord_app/modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import LinearGradientDefault from "../../../../../_runtime/05587_LinearGradient.js";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import _modDef7038 from "../../../../../_runtime/metro/07038__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function YouBarMaskedBackground(barWidth) {
  barWidth = barWidth.barWidth;
  ({ avatarSize, backgroundColor } = barWidth);
  const diff = avatarSize - 4;
  const obj = { style: { position: "absolute" }, maskElement: null, children: null };
  const obj2 = { style: null, children: null };
  const size = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor: "transparent" };
  obj2.style = size;
  const obj3 = { style: null };
  const rect = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: YOU_BAR_HEIGHT / 2 - 1,
    backgroundColor: "black",
  };
  obj3.style = rect;
  const tmp = closure_8();
  const items = [
    timestampProducer(View, obj3),
    timestampProducer(View, {
      style: {
        position: "absolute",
        top: YOU_BAR_HEIGHT / 2,
        left: diff - 1,
        right: 0,
        bottom: 0,
        backgroundColor: "black",
      },
    }),
  ];
  const obj5 = { style: null, colors: null, start: null, end: null, locations: null, pointerEvents: "none" };
  const size1 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, width: 8, left: diff - 8, height: YOU_BAR_HEIGHT / 2 };
  obj5.style = size1;
  const obj4 = {
    style: {
      position: "absolute",
      top: YOU_BAR_HEIGHT / 2,
      left: diff - 1,
      right: 0,
      bottom: 0,
      backgroundColor: "black",
    },
  };
  const tmp3 = _modDef7038;
  const tmp4 = LinearGradientDefault;
  const obj9 = _modDef671("#000000");
  const items1 = [_modDef671("#000000").alpha(0).hex(), "#000000"];
  obj5.colors = items1;
  obj5.start = { x: 0, y: 0 };
  obj5.end = { x: 1, y: 0 };
  obj5.locations = [0, 1];
  items[2] = timestampProducer(tmp4, obj5);
  obj2.children = items;
  obj.maskElement = React5(View, obj2);
  const obj6 = { style: null };
  const items2 = [tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }];
  obj6.style = items2;
  obj.children = timestampProducer(View, obj6);
  return timestampProducer(tmp3, obj);
}
function YouBarAnimatedBackground(condensedReason) {
  condensedReason = condensedReason.condensedReason;
  let token;
  ({ barWidth, backgroundColor } = condensedReason);
  const tmp = closure_8();
  token = condensedReason(5596).useToken(token(575).modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp3 = token(17143)(token);
  dependencyMap = tmp3;
  const tmp4 = token(17143)(YOU_BAR_HEIGHT / 2, token);
  View = tmp4;
  let obj = condensedReason(5596);
  class R {
    constructor() {
      if ("quest-bar" === condensedReason) {
        obj1 = { borderTopRightRadius: null, borderTopLeftRadius: null, borderBottomLeftRadius: null };
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj3 = closure_0(closure_2[12]);
        tmp4 = closure_2;
        tmp5 = YOU_BAR_SPRING_CONFIG;
        obj1.borderTopRightRadius = obj3.withSpring(closure_2.get(), YOU_BAR_SPRING_CONFIG);
        obj4 = closure_0(closure_2[12]);
        obj1.borderTopLeftRadius = obj4.withSpring(closure_2.get(), YOU_BAR_SPRING_CONFIG);
        obj5 = closure_0(closure_2[12]);
        tmp6 = closure_3;
        obj1.borderBottomLeftRadius = obj5.withSpring(closure_3.get(), YOU_BAR_SPRING_CONFIG);
        obj = obj1;
      } else {
        obj = {
          borderTopRightRadius: null,
          borderTopLeftRadius: null,
          borderBottomLeftRadius: null,
          borderBottomRightRadius: null,
        };
        tmp = closure_1;
        obj.borderTopRightRadius = closure_1;
        obj.borderTopLeftRadius = closure_1;
        obj.borderBottomLeftRadius = closure_1;
        obj.borderBottomRightRadius = closure_1;
      }
      return obj;
    }
  }
  let obj2 = condensedReason(5095);
  R.__closure = {
    condensedReason,
    withSpring: condensedReason(5637).withSpring,
    questDockAnimatedBorderRadius: tmp3,
    YOU_BAR_SPRING_CONFIG,
    questDockAnimatedBottomLeftRadius: tmp4,
    borderRadius: token,
  };
  R.__workletHash = 2962516190764;
  R.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(R);
  let obj4 = { style: null };
  const items = [
    { position: "absolute" },
    tmp.youRowFloating,
    { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor },
    { borderTopRightRadius: 0, borderTopLeftRadius: 0 },
    animatedStyle,
  ];
  obj4.style = items;
  return closure_6(token(5095).View, obj4);
}
let View = fn(17).View;
const YouBarConstants = fn(17062);
const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj = {
  youRowFloating: {
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
    borderTopLeftRadius: YOU_BAR_HEIGHT / 2,
    borderBottomLeftRadius: YOU_BAR_HEIGHT / 2,
  },
};
let closure_8 = createStyles.createStyles(obj);
const __initData = {
  code: "function YouBarBackgroundTsx1(){const{condensedReason,withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius,borderRadius}=this.__closure;if(condensedReason==='quest-bar'){return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}return{borderTopRightRadius:borderRadius,borderTopLeftRadius:borderRadius,borderBottomLeftRadius:borderRadius,borderBottomRightRadius:borderRadius};}",
};
let obj3 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_MUTED,
  borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
  borderTopLeftRadius: YOU_BAR_HEIGHT / 2,
  borderBottomLeftRadius: YOU_BAR_HEIGHT / 2,
};
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx");

export default noop.memo(function YouBarBackground(arg0) {
  ({ barWidth, condensedReason } = arg0);
  ({ hasNameplate, avatarSize } = arg0);
  const token = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  let token1 = token;
  if (hasNameplate) {
    token1 = obj2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
  }
  if (null == condensedReason) {
    const obj3 = { barWidth, backgroundColor: token1, avatarSize };
    let tmp5 = timestampProducer(YouBarMaskedBackground, obj3);
  } else {
    const obj4 = { barWidth, backgroundColor: token1, condensedReason };
    tmp5 = timestampProducer(YouBarAnimatedBackground, obj4);
  }
  return tmp5;
});
