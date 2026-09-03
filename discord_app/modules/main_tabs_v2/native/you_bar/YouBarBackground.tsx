// discord_app/modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx
import nDefault from "../../../../../_runtime/00686_n.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import _modDef4217 from "../../../reanimated/ReanimatedRexport.tsx";
import LinearGradientDefault from "../../../../../_runtime/04941_LinearGradient.js";
import _isNativeReflectConstructDefault from "../../../../../_runtime/05544__isNativeReflectConstruct.js";
import useQuestDockAnimatedBorderRadiusDefault from "../../../quests/native/QuestDock/useQuestDockAnimatedBorderRadius.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import CONNECTION_BANNER_HEIGHT from "YouBarConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { map } from "../../../../design/tokens/native/useToken.tsx";

require = arg1;
function YouBarMaskedBackground(barWidth) {
  barWidth = barWidth.barWidth;
  ({ avatarSize, backgroundColor } = barWidth);
  const diff = avatarSize - 4;
  let obj = { style: { position: "absolute" }, maskElement: null, children: null };
  obj = { style: obj, children: null };
  obj = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor: "transparent" };
  obj1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: YOU_BAR_HEIGHT / 2 - 1, backgroundColor: "black" };
  const tmp = callback3();
  const items = [
    callback(View, { style: obj1 }),
    callback(View, {
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
  const obj3 = { style: obj4, colors: null, start: null, end: null, locations: null, pointerEvents: "none" };
  const obj2 = {
    position: "absolute",
    top: YOU_BAR_HEIGHT / 2,
    left: diff - 1,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
  };
  obj4 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, width: 8, left: diff - 8, height: YOU_BAR_HEIGHT / 2 };
  const tmp3 = _isNativeReflectConstructDefault;
  const tmp4 = LinearGradientDefault;
  const obj8 = nDefault("#000000");
  const items1 = [nDefault("#000000").alpha(0).hex(), "#000000"];
  obj3[1] = items1;
  obj3[2] = { x: 0, y: 0 };
  obj3[3] = { x: 1, y: 0 };
  obj3[4] = [0, 1];
  items[2] = callback(tmp4, obj3);
  obj[1] = items;
  obj[1] = callback2(View, obj);
  const items2 = [tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }];
  obj[2] = callback(View, { style: items2 });
  return callback(tmp3, obj);
}
function YouBarAnimatedBackground(arg0) {
  let _require;
  importDefault = undefined;
  ({ barWidth, backgroundColor } = arg0);
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp3 = useQuestDockAnimatedBorderRadiusDefault(token);
  _require = tmp3;
  const tmp4 = useQuestDockAnimatedBorderRadiusDefault(token, YOU_BAR_HEIGHT / 2);
  importDefault = tmp4;
  const tmp = callback3();
  const fn = function u() {
    const obj = {
      borderTopRightRadius: store(closure_1_2[12]).withSpring(store.get(), closure_1_5),
      borderTopLeftRadius: null,
      borderBottomLeftRadius: null,
    };
    const obj2 = store(closure_1_2[12]);
    obj[1] = store(closure_1_2[12]).withSpring(store.get(), closure_1_5);
    const obj3 = store(closure_1_2[12]);
    obj[2] = store(closure_1_2[12]).withSpring(closure_1.get(), closure_1_5);
    return obj;
  };
  obj = {
    withSpring: require("../../../../design/animation/reanimated/spring/spring.tsx").withSpring,
    questDockAnimatedBorderRadius: tmp3,
    YOU_BAR_SPRING_CONFIG,
    questDockAnimatedBottomLeftRadius: tmp4,
  };
  fn.__closure = obj;
  fn.__workletHash = 14606701040012;
  fn.__initData = closure_10;
  const animatedStyle = require("../../../reanimated/ReanimatedRexport.tsx").useAnimatedStyle(fn);
  const style = [
    { position: "absolute" },
    tmp.youRowFloating,
    { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor },
    { borderTopRightRadius: 0, borderTopLeftRadius: 0 },
    animatedStyle,
  ];
  return callback(_modDef4217.View, { style });
}
const YOU_BAR_HEIGHT = CONNECTION_BANNER_HEIGHT.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = CONNECTION_BANNER_HEIGHT.YOU_BAR_SPRING_CONFIG;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { youRowFloating: null };
obj = {
  borderWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_MUTED,
  borderRadius: ThemesDefault.modules.mobile.YOU_BAR_BORDER_RADIUS,
  borderTopLeftRadius: YOU_BAR_HEIGHT / 2,
  borderBottomLeftRadius: YOU_BAR_HEIGHT / 2,
};
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
let closure_10 = {
  code: "function YouBarBackgroundTsx1(){const{withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius}=this.__closure;return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}",
};
const memoResult = importAllResult.memo(function YouBarBackground(barWidth) {
  barWidth = barWidth.barWidth;
  ({ hasNameplate, isLargeAvatar, avatarSize } = barWidth);
  let obj = map;
  let token = obj.useToken(ThemesDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  if (hasNameplate) {
    token = obj2.useToken(ThemesDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
  }
  if (isLargeAvatar) {
    obj = { barWidth: null, backgroundColor: null, avatarSize: null };
    obj[0] = barWidth;
    obj[1] = token;
    obj[2] = avatarSize;
    let tmp2Result = tmp2(YouBarMaskedBackground, obj);
  } else {
    obj = { barWidth: null, backgroundColor: null };
    obj[0] = barWidth;
    obj[1] = token;
    tmp2Result = tmp2(YouBarAnimatedBackground, obj);
  }
  return tmp2Result;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx");

export default memoResult;
