// === Module 16820: YouBarBackground ===

// Module 16820 (YouBarBackground)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken from "useToken" /* 4818 */;
import spring from "spring" /* 5378 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import _modDef6242 from "module_6242" /* 6242 */;
import useQuestDockAnimatedBorderRadiusDefault from "useQuestDockAnimatedBorderRadius" /* 15438 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = tmp4(4850);
require = fn;
const View = fn(17).View;
const YouBarConstants = fn(15350);
const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj = { youRowFloating: { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS, borderTopLeftRadius: YOU_BAR_HEIGHT / 2, borderBottomLeftRadius: YOU_BAR_HEIGHT / 2 } };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouBarMaskedBackground(avatarSize) {
  const cResult = c.c(27);
  ({ barWidth, backgroundColor } = avatarSize);
  const tmp3 = closure_8();
  const diff = avatarSize.avatarSize - 4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { position: "absolute" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== barWidth) {
    const size = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor: "transparent" };
    cResult[1] = barWidth;
    cResult[2] = size;
    let tmp6 = size;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { style: null };
    const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: YOU_BAR_HEIGHT / 2 - 1, backgroundColor: "black" };
    obj3.style = rect;
    const tmp12 = timestampProducer(View, obj3);
    cResult[3] = tmp12;
    let tmp8 = tmp12;
  } else {
    tmp8 = cResult[3];
  }
  const diff1 = diff - 1;
  if (cResult[4] !== diff1) {
    const obj4 = { style: null };
    const rect1 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, left: diff1, right: 0, bottom: 0, backgroundColor: "black" };
    obj4.style = rect1;
    const tmp18 = timestampProducer(View, obj4);
    cResult[4] = diff1;
    cResult[5] = tmp18;
    let tmp14 = tmp18;
  } else {
    tmp14 = cResult[5];
  }
  const diff2 = diff - 8;
  if (cResult[6] !== diff2) {
    const size1 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, width: 8, left: diff2, height: YOU_BAR_HEIGHT / 2 };
    cResult[6] = diff2;
    cResult[7] = size1;
    let tmp20 = size1;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = _modDef683("#000000");
    const items = [_modDef683("#000000").alpha(0).hex(), "#000000"];
    const point = { x: 0, y: 0 };
    const point1 = { x: 1, y: 0 };
    const items1 = [0, 1];
    cResult[8] = point1;
    cResult[9] = items1;
    cResult[10] = items;
    cResult[11] = point;
    let tmp25 = point;
    let tmp24 = items;
    let tmp23 = items1;
    let tmp22 = point1;
    const alphaResult = _modDef683("#000000").alpha(0);
  } else {
    tmp22 = cResult[8];
    tmp23 = cResult[9];
    tmp24 = cResult[10];
    tmp25 = cResult[11];
  }
  if (cResult[12] !== tmp20) {
    const obj5 = { style: tmp20, colors: tmp24, start: tmp25, end: tmp22, locations: tmp23, pointerEvents: "none" };
    const tmp30 = timestampProducer(LinearGradientDefault, obj5);
    cResult[12] = tmp20;
    cResult[13] = tmp30;
    let tmp27 = tmp30;
  } else {
    tmp27 = cResult[13];
  }
  if (cResult[14] === tmp27) {
    if (cResult[15] === tmp6) {
      if (cResult[16] === tmp14) {
        let tmp31 = cResult[17];
      }
      if (cResult[18] === backgroundColor) {
        if (cResult[19] === barWidth) {
          let tmp33 = cResult[20];
        }
        if (cResult[21] === tmp3.youRowFloating) {
          if (cResult[22] === tmp33) {
            let tmp35 = cResult[23];
          }
          if (cResult[24] === tmp31) {
            if (cResult[25] === tmp35) {
              let tmp39 = cResult[26];
            }
            return tmp39;
          }
          const obj6 = { style: first, maskElement: tmp31, children: tmp35 };
          const tmp42 = timestampProducer(_modDef6242, obj6);
          cResult[24] = tmp31;
          cResult[25] = tmp35;
          cResult[26] = tmp42;
          tmp39 = tmp42;
        }
        const obj7 = { style: null };
        const items2 = [tmp3.youRowFloating, tmp33];
        obj7.style = items2;
        const tmp38 = timestampProducer(View, obj7);
        cResult[21] = tmp3.youRowFloating;
        cResult[22] = tmp33;
        cResult[23] = tmp38;
        tmp35 = tmp38;
      }
      const size2 = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor };
      cResult[18] = backgroundColor;
      cResult[19] = barWidth;
      cResult[20] = size2;
      tmp33 = size2;
    }
  }
  const obj8 = { style: tmp6, children: null };
  const items3 = [tmp8, tmp14, tmp27];
  obj8.children = items3;
  const tmp32 = React5(View, obj8);
  cResult[14] = tmp27;
  cResult[15] = tmp6;
  cResult[16] = tmp14;
  cResult[17] = tmp32;
  tmp31 = tmp32;
}) : (function YouBarMaskedBackground(barWidth) {
  barWidth = barWidth.barWidth;
  ({ avatarSize, backgroundColor } = barWidth);
  const diff = avatarSize - 4;
  const obj = { style: { position: "absolute" }, maskElement: null, children: null };
  const obj2 = { style: null, children: null };
  const size = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor: "transparent" };
  obj2.style = size;
  const obj3 = { style: null };
  const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: YOU_BAR_HEIGHT / 2 - 1, backgroundColor: "black" };
  obj3.style = rect;
  const tmp = closure_8();
  const items = [timestampProducer(View, obj3), timestampProducer(View, { style: { position: "absolute", top: YOU_BAR_HEIGHT / 2, left: diff - 1, right: 0, bottom: 0, backgroundColor: "black" } }), ];
  const obj5 = { style: null, colors: null, start: null, end: null, locations: null, pointerEvents: "none" };
  const size1 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, width: 8, left: diff - 8, height: YOU_BAR_HEIGHT / 2 };
  obj5.style = size1;
  const obj4 = { style: { position: "absolute", top: YOU_BAR_HEIGHT / 2, left: diff - 1, right: 0, bottom: 0, backgroundColor: "black" } };
  const tmp3 = _modDef6242;
  const tmp4 = LinearGradientDefault;
  const obj9 = _modDef683("#000000");
  const items1 = [_modDef683("#000000").alpha(0).hex(), "#000000"];
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
});
const __initData = { code: "function YouBarBackgroundTsx1(){const{withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius}=this.__closure;return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}" };
const __initData2 = { code: "function YouBarBackgroundTsx2(){const{withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius}=this.__closure;return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}" };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function YouBarAnimatedBackground(arg0) {
  const cResult = require("c").c(9);
  ({ barWidth, backgroundColor } = arg0);
  const tmp3 = closure_8();
  let obj = require("c");
  const token = require("useToken").useToken(nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp6 = useQuestDockAnimatedBorderRadiusDefault(token);
  _require = tmp6;
  const tmp8 = useQuestDockAnimatedBorderRadiusDefault(YOU_BAR_HEIGHT / 2, token);
  importDefault = tmp8;
  let obj2 = require("useToken");
  const fn = function t() {
    const obj = { borderTopRightRadius: spring.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG), borderTopLeftRadius: null, borderBottomLeftRadius: null };
    obj.borderTopLeftRadius = spring.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG);
    obj.borderBottomLeftRadius = spring.withSpring(closure_1.get(), YOU_BAR_SPRING_CONFIG);
    return obj;
  };
  let obj3 = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, questDockAnimatedBorderRadius: tmp6, YOU_BAR_SPRING_CONFIG, questDockAnimatedBottomLeftRadius: tmp8 };
  fn.__workletHash = 14606701040012;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { position: "absolute" };
    cResult[0] = obj5;
    let first = obj5;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === backgroundColor) {
    if (cResult[2] === barWidth) {
      let tmp11 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { borderTopRightRadius: 0, borderTopLeftRadius: 0 };
      cResult[4] = obj6;
      let tmp12 = obj6;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] === animatedStyle) {
      if (cResult[6] === tmp3.youRowFloating) {
        if (cResult[7] === tmp11) {
          let tmp13 = cResult[8];
        }
        return tmp13;
      }
    }
    const obj7 = { style: null };
    const items = [first, tmp3.youRowFloating, tmp11, tmp12, animatedStyle];
    obj7.style = items;
    const tmp15 = closure_6(ReanimatedRexportDefault.View, obj7);
    cResult[5] = animatedStyle;
    cResult[6] = tmp3.youRowFloating;
    cResult[7] = tmp11;
    cResult[8] = tmp15;
    tmp13 = tmp15;
  }
  const size = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor };
  cResult[1] = backgroundColor;
  cResult[2] = barWidth;
  cResult[3] = size;
  tmp11 = size;
  const obj4 = { withSpring: require("spring").withSpring, questDockAnimatedBorderRadius: tmp6, YOU_BAR_SPRING_CONFIG, questDockAnimatedBottomLeftRadius: tmp8 };
}) : (function YouBarAnimatedBackground(arg0) {
  _require = undefined;
  ({ barWidth, backgroundColor } = arg0);
  const tmp = closure_8();
  const token = require("useToken").useToken(nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp3 = useQuestDockAnimatedBorderRadiusDefault(token);
  _require = tmp3;
  const tmp4 = useQuestDockAnimatedBorderRadiusDefault(YOU_BAR_HEIGHT / 2, token);
  importDefault = tmp4;
  let obj = require("useToken");
  const fn = function n() {
    const obj = { borderTopRightRadius: spring.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG), borderTopLeftRadius: null, borderBottomLeftRadius: null };
    obj.borderTopLeftRadius = spring.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG);
    obj.borderBottomLeftRadius = spring.withSpring(closure_1.get(), YOU_BAR_SPRING_CONFIG);
    return obj;
  };
  let obj2 = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, questDockAnimatedBorderRadius: tmp3, YOU_BAR_SPRING_CONFIG, questDockAnimatedBottomLeftRadius: tmp4 };
  fn.__workletHash = 341213335439;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj4 = { style: null };
  const items = [{ position: "absolute" }, tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }, { borderTopRightRadius: 0, borderTopLeftRadius: 0 }, animatedStyle];
  obj4.style = items;
  return closure_6(ReanimatedRexportDefault.View, obj4);
});
ReactCompilerGating = fn(558);
let obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS, borderTopLeftRadius: YOU_BAR_HEIGHT / 2, borderBottomLeftRadius: YOU_BAR_HEIGHT / 2 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouBarBackground(arg0) {
  const cResult = c.c(7);
  ({ barWidth, avatarSize, hasNameplate, isLargeAvatar } = arg0);
  let token = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  if (hasNameplate) {
    token = obj3.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
  }
  if (isLargeAvatar) {
    if (cResult[0] === avatarSize) {
      if (cResult[1] === token) {
      }
    }
    const obj4 = { barWidth, backgroundColor: token, avatarSize };
    const tmp10 = timestampProducer(closure_9, obj4);
    cResult[0] = avatarSize;
    cResult[1] = token;
    cResult[2] = barWidth;
    cResult[3] = tmp10;
  } else {
    if (cResult[4] === token) {
      if (cResult[5] === barWidth) {
        let tmp3 = cResult[6];
      }
      return tmp3;
    }
    const obj5 = { barWidth, backgroundColor: token };
    const tmp6 = timestampProducer(closure_12, obj5);
    cResult[4] = token;
    cResult[5] = barWidth;
    cResult[6] = tmp6;
    tmp3 = tmp6;
  }
  obj3 = useToken;
}) : (function YouBarBackground(barWidth) {
  barWidth = barWidth.barWidth;
  ({ hasNameplate, isLargeAvatar, avatarSize } = barWidth);
  let token = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  if (hasNameplate) {
    token = obj2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
  }
  if (isLargeAvatar) {
    const obj3 = { barWidth, backgroundColor: token, avatarSize };
    let tmp2Result = timestampProducer(closure_9, obj3);
  } else {
    const obj4 = { barWidth, backgroundColor: token };
    tmp2Result = timestampProducer(closure_12, obj4);
  }
  return tmp2Result;
}));