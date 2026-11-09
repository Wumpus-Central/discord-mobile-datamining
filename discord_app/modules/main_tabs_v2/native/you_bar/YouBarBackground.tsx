// discord_app/modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import LinearGradientDefault from "../../../../../_runtime/05715_LinearGradient.js";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import _modDef7104 from "../../../../../_runtime/metro/07104__.js";
import useQuestDockAnimatedBorderRadiusDefault from "../../../quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

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
  items = [
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
  const tmp3 = _modDef7104;
  const tmp4 = LinearGradientDefault;
  const obj9 = _modDef671("#000000");
  const items1 = [_modDef671("#000000").alpha(0).hex(), "#000000"];
  obj5.colors = items1;
  obj5.start = { x: 0, y: 0 };
  obj5.end = { x: 1, y: 0 };
  obj5.locations = [0, 1];
  items[2] = timestampProducer(tmp4, obj5);
  obj2.children = items;
  obj.maskElement = metroImportDefault(View, obj2);
  const obj6 = { style: null };
  const items2 = [tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }];
  obj6.style = items2;
  obj.children = timestampProducer(View, obj6);
  return timestampProducer(tmp3, obj);
}
function YouBarAnimatedBackground(arg0) {
  ({ barWidth, backgroundColor, condensedReason } = arg0);
  const tmp = closure_8();
  const token = useToken.useToken(nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp5 = useQuestDockAnimatedBorderRadiusDefault(token);
  const tmp7 = useQuestDockAnimatedBorderRadiusDefault(YOU_BAR_HEIGHT / 2, token);
  items = [closure_10, condensedReason, spring_spring.withSpring, tmp5, YOU_BAR_SPRING_CONFIG, tmp7, token];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items;
  class YouBarBackgroundTsx1 {
    constructor() {
      if ("quest-bar" === closure_0) {
        obj1 = { borderTopRightRadius: null, borderTopLeftRadius: null, borderBottomLeftRadius: null };
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_3;
        obj1.borderTopRightRadius = closure_1(closure_2.get(), closure_3);
        obj1.borderTopLeftRadius = closure_1(closure_2.get(), closure_3);
        tmp5 = closure_4;
        obj1.borderBottomLeftRadius = closure_1(closure_4.get(), closure_3);
        obj = obj1;
      } else {
        obj = {
          borderTopRightRadius: null,
          borderTopLeftRadius: null,
          borderBottomLeftRadius: null,
          borderBottomRightRadius: null,
        };
        tmp = closure_5;
        obj.borderTopRightRadius = closure_5;
        obj.borderTopLeftRadius = closure_5;
        obj.borderBottomLeftRadius = closure_5;
        obj.borderBottomRightRadius = closure_5;
      }
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  YouBarBackgroundTsx1.__closure = items1;
  YouBarBackgroundTsx1.__workletHash = 17537455487253;
  YouBarBackgroundTsx1.__initData = tmp8;
  const animatedStyle = _mod1652.useAnimatedStyle(YouBarBackgroundTsx1);
  const obj3 = { style: null };
  const items2 = [
    { position: "absolute" },
    tmp.youRowFloating,
    { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor },
    { borderTopRightRadius: 0, borderTopLeftRadius: 0 },
    animatedStyle,
  ];
  obj3.style = items2;
  return timestampProducer(_modDef1652.View, obj3);
}
const View = fn(17).View;
const YouBarConstants = fn(17396);
const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5140);
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
let closure_10 = {
  code: "(function YouBarBackgroundTsx1(){let[condensedReason,withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius,borderRadius]=this.__closure;if(condensedReason==='quest-bar'){return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}return{borderTopRightRadius:borderRadius,borderTopLeftRadius:borderRadius,borderBottomLeftRadius:borderRadius,borderBottomRightRadius:borderRadius};})",
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
