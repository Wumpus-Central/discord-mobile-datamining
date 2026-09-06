// === Module 16383: YouBarBackground ===

// Module 16383 (YouBarBackground)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import useToken from "useToken" /* 4262 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import _modDef5664 from "module_5664" /* 5664 */;
import useQuestDockAnimatedBorderRadiusDefault from "useQuestDockAnimatedBorderRadius" /* 15184 */;
import noop from "module_19" /* 19 */;

require = fn;
function YouBarMaskedBackground(barWidth) {
  barWidth = barWidth.barWidth;
  ({ avatarSize, backgroundColor } = barWidth);
  const diff = avatarSize - 4;
  let obj = { style: { position: "absolute" }, maskElement: null, children: null };
  obj = { style: null, children: null };
  const size = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor: "transparent" };
  obj.style = size;
  obj = { style: null };
  const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: YOU_BAR_HEIGHT / 2 - 1, backgroundColor: "black" };
  obj.style = rect;
  const tmp = closure_8();
  const items = [timestampProducer(View, obj), timestampProducer(View, { style: { position: "absolute", top: YOU_BAR_HEIGHT / 2, left: diff - 1, right: 0, bottom: 0, backgroundColor: "black" } }), ];
  const obj2 = { style: null, colors: null, start: null, end: null, locations: null, pointerEvents: "none" };
  const size1 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, width: 8, left: diff - 8, height: YOU_BAR_HEIGHT / 2 };
  obj2.style = size1;
  const obj1 = { style: { position: "absolute", top: YOU_BAR_HEIGHT / 2, left: diff - 1, right: 0, bottom: 0, backgroundColor: "black" } };
  const tmp3 = _modDef5664;
  const tmp4 = LinearGradientDefault;
  const obj9 = _modDef672("#000000");
  const items1 = [_modDef672("#000000").alpha(0).hex(), "#000000"];
  obj2.colors = items1;
  obj2.start = { x: 0, y: 0 };
  obj2.end = { x: 1, y: 0 };
  obj2.locations = [0, 1];
  items[2] = timestampProducer(tmp4, obj2);
  obj.children = items;
  obj.maskElement = React5(View, obj);
  const obj3 = { style: null };
  const items2 = [tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }];
  obj3.style = items2;
  obj.children = timestampProducer(View, obj3);
  return timestampProducer(tmp3, obj);
}
function YouBarAnimatedBackground(arg0) {
  _require = undefined;
  ({ barWidth, backgroundColor } = arg0);
  let obj = require("useToken");
  const token = obj.useToken(nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp3 = useQuestDockAnimatedBorderRadiusDefault(token);
  _require = tmp3;
  const tmp4 = useQuestDockAnimatedBorderRadiusDefault(token, YOU_BAR_HEIGHT / 2);
  importDefault = tmp4;
  const tmp = closure_8();
  const fn = function u() {
    const obj = { borderTopRightRadius: spring.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG), borderTopLeftRadius: null, borderBottomLeftRadius: null };
    obj.borderTopLeftRadius = spring.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG);
    obj.borderBottomLeftRadius = spring.withSpring(closure_1.get(), YOU_BAR_SPRING_CONFIG);
    return obj;
  };
  obj = { withSpring: require("spring").withSpring, questDockAnimatedBorderRadius: tmp3, YOU_BAR_SPRING_CONFIG, questDockAnimatedBottomLeftRadius: tmp4 };
  fn.__closure = obj;
  fn.__workletHash = 14606701040012;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  obj = { style: null };
  const items = [{ position: "absolute" }, tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }, { borderTopRightRadius: 0, borderTopLeftRadius: 0 }, animatedStyle];
  obj.style = items;
  return closure_6(ReanimatedRexportDefault.View, obj);
}
const View = fn(17).View;
const YouBarConstants = fn(15098);
const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let obj = { youRowFloating: null };
obj = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS, borderTopLeftRadius: YOU_BAR_HEIGHT / 2, borderBottomLeftRadius: YOU_BAR_HEIGHT / 2 };
obj.youRowFloating = obj;
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function YouBarBackgroundTsx1(){const{withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius}=this.__closure;return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx");

export default noop.memo(function YouBarBackground(barWidth) {
  barWidth = barWidth.barWidth;
  ({ hasNameplate, isLargeAvatar, avatarSize } = barWidth);
  let obj = useToken;
  let token = obj.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  if (hasNameplate) {
    token = obj2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
  }
  if (isLargeAvatar) {
    obj = { barWidth, backgroundColor: token, avatarSize };
    let tmp2Result = tmp2(YouBarMaskedBackground, obj);
  } else {
    obj = { barWidth, backgroundColor: token };
    tmp2Result = tmp2(YouBarAnimatedBackground, obj);
  }
  return tmp2Result;
});