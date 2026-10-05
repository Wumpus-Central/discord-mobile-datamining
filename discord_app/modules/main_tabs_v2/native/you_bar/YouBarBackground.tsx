// === Module 16325: YouBarBackground ===

// Module 16325 (YouBarBackground)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import useToken2 from "useToken" /* 4580 */;
import spring from "spring" /* 5597 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import _modDef6052 from "module_6052" /* 6052 */;
import useQuestDockAnimatedBorderRadiusDefault from "useQuestDockAnimatedBorderRadius" /* 14986 */;
import react from "react" /* 19 */;
import YouBarConstants from "YouBarConstants" /* 14899 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp4;
const ReanimatedRexportDefault = tmp4(4612);
const View = react_native.View;
const YOU_BAR_HEIGHT = YouBarConstants.YOU_BAR_HEIGHT;
const YOU_BAR_SPRING_CONFIG = YouBarConstants.YOU_BAR_SPRING_CONFIG;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { youRowFloating: obj2 };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS, borderTopLeftRadius: YOU_BAR_HEIGHT / 2, borderBottomLeftRadius: YOU_BAR_HEIGHT / 2 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((avatarSize) => {
  let backgroundColor;
  let barWidth;
  let first;
  let items2;
  let items3;
  let rect;
  let rect1;
  let tmp14;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp27;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(27);
  ({ barWidth, backgroundColor } = avatarSize);
  avatarSize = avatarSize.avatarSize;
  const tmp3 = closure_8();
  const diff = avatarSize - 4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { position: "absolute" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== barWidth) {
    size = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor: "transparent" };
    cResult[1] = barWidth;
    cResult[2] = size;
    tmp6 = size;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { style: rect };
    rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: YOU_BAR_HEIGHT / 2 - 1, backgroundColor: "black" };
    const tmp12 = metroRequire(View, obj3);
    cResult[3] = tmp12;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[3];
  }
  const diff1 = diff - 1;
  if (cResult[4] !== diff1) {
    const obj4 = { style: rect1 };
    rect1 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, left: diff1, right: 0, bottom: 0, backgroundColor: "black" };
    const tmp18 = metroRequire(View, obj4);
    cResult[4] = diff1;
    cResult[5] = tmp18;
    tmp14 = tmp18;
  } else {
    tmp14 = cResult[5];
  }
  const diff2 = diff - 8;
  if (cResult[6] !== diff2) {
    const size1 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, width: 8, left: diff2, height: YOU_BAR_HEIGHT / 2 };
    cResult[6] = diff2;
    cResult[7] = size1;
    tmp20 = size1;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [, ];
    const obj9 = _modDef683("#000000");
    const alphaResult = obj9.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = "#000000";
    const point = { x: 0, y: 0 };
    const point1 = { x: 1, y: 0 };
    const items1 = [0, 1];
    cResult[8] = point1;
    cResult[9] = items1;
    cResult[10] = items;
    cResult[11] = point;
    tmp25 = point;
    tmp24 = items;
    tmp23 = items1;
    tmp22 = point1;
  } else {
    tmp22 = cResult[8];
    tmp23 = cResult[9];
    tmp24 = cResult[10];
    tmp25 = cResult[11];
  }
  if (cResult[12] !== tmp20) {
    const obj5 = { style: tmp20, colors: tmp24, start: tmp25, end: tmp22, locations: tmp23, pointerEvents: "none" };
    const tmp30 = metroRequire(LinearGradientDefault, obj5);
    cResult[12] = tmp20;
    cResult[13] = tmp30;
    tmp27 = tmp30;
  } else {
    tmp27 = cResult[13];
  }
  if (cResult[14] === tmp27) {
    if (cResult[15] === tmp6) {
      let tmp31;
      if (cResult[16] === tmp14) {
        tmp31 = cResult[17];
      }
      if (cResult[18] === backgroundColor) {
        let tmp33;
        if (cResult[19] === barWidth) {
          tmp33 = cResult[20];
        }
        if (cResult[21] === tmp3.youRowFloating) {
          let tmp35;
          if (cResult[22] === tmp33) {
            tmp35 = cResult[23];
          }
          if (cResult[24] === tmp31) {
            let tmp39;
            if (cResult[25] === tmp35) {
              tmp39 = cResult[26];
            }
            return tmp39;
          }
          const obj6 = { style: first, maskElement: tmp31, children: tmp35 };
          const tmp42 = metroRequire(_modDef6052, obj6);
          cResult[24] = tmp31;
          cResult[25] = tmp35;
          cResult[26] = tmp42;
          tmp39 = tmp42;
        }
        const obj7 = { style: items2 };
        items2 = [tmp3.youRowFloating, tmp33];
        const tmp38 = metroRequire(View, obj7);
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
  const obj8 = { style: tmp6, children: items3 };
  items3 = [tmp8, tmp14, tmp27];
  const tmp32 = metroImportDefault(View, obj8);
  cResult[14] = tmp27;
  cResult[15] = tmp6;
  cResult[16] = tmp14;
  cResult[17] = tmp32;
  tmp31 = tmp32;
}) : ((barWidth) => {
  let avatarSize;
  let backgroundColor;
  let items;
  let items1;
  let items2;
  let obj2;
  let obj6;
  let rect;
  let size1;
  barWidth = barWidth.barWidth;
  ({ avatarSize, backgroundColor } = barWidth);
  const diff = avatarSize - 4;
  const obj = { style: { position: "absolute" }, maskElement: metroImportDefault(View, obj2), children: metroRequire(View, obj6) };
  obj2 = { style: size, children: items };
  size = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor: "transparent" };
  const obj3 = { style: rect };
  rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: YOU_BAR_HEIGHT / 2 - 1, backgroundColor: "black" };
  items = [, , ];
  const tmp = closure_8();
  const tmp3 = _modDef6052;
  items[0] = metroRequire(View, obj3);
  const obj4 = { style: { position: "absolute", top: YOU_BAR_HEIGHT / 2, left: diff - 1, right: 0, bottom: 0, backgroundColor: "black" } };
  items[1] = metroRequire(View, obj4);
  const obj5 = { style: size1, colors: items1, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 1], pointerEvents: "none" };
  size1 = { position: "absolute", top: YOU_BAR_HEIGHT / 2, width: 8, left: diff - 8, height: YOU_BAR_HEIGHT / 2 };
  const tmp4 = LinearGradientDefault;
  items1 = [, ];
  const obj9 = _modDef683("#000000");
  const alphaResult = obj9.alpha(0);
  items1[0] = alphaResult.hex();
  items1[1] = "#000000";
  items[2] = metroRequire(tmp4, obj5);
  obj6 = { style: items2 };
  items2 = [tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }];
  return metroRequire(tmp3, obj);
});
const __initData = { code: "function YouBarBackgroundTsx1(){const{withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius}=this.__closure;return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}" };
const __initData2 = { code: "function YouBarBackgroundTsx2(){const{withSpring,questDockAnimatedBorderRadius,YOU_BAR_SPRING_CONFIG,questDockAnimatedBottomLeftRadius}=this.__closure;return{borderTopRightRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderTopLeftRadius:withSpring(questDockAnimatedBorderRadius.get(),YOU_BAR_SPRING_CONFIG),borderBottomLeftRadius:withSpring(questDockAnimatedBottomLeftRadius.get(),YOU_BAR_SPRING_CONFIG)};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let backgroundColor;
  let barWidth;
  let closure_0;
  let closure_1;
  let first;
  let items;
  let obj = require("react");
  const cResult = obj.c(9);
  ({ barWidth, backgroundColor } = arg0);
  const tmp3 = closure_8();
  let obj2 = require("useToken");
  const token = obj2.useToken(nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp6 = useQuestDockAnimatedBorderRadiusDefault(token);
  _require = tmp6;
  const tmp8 = useQuestDockAnimatedBorderRadiusDefault(YOU_BAR_HEIGHT / 2, token);
  importDefault = tmp8;
  let obj3 = require("ReanimatedRexport");
  const fn = function t() {
    let obj2;
    let obj3;
    let obj4;
    const obj = { borderTopRightRadius: obj2.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG), borderTopLeftRadius: obj3.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG), borderBottomLeftRadius: obj4.withSpring(closure_1.get(), YOU_BAR_SPRING_CONFIG) };
    obj2 = spring;
    obj3 = spring;
    obj4 = spring;
    return obj;
  };
  let obj4 = { withSpring: require("spring").withSpring, questDockAnimatedBorderRadius: tmp6, YOU_BAR_SPRING_CONFIG, questDockAnimatedBottomLeftRadius: tmp8 };
  fn.__closure = obj4;
  fn.__workletHash = 14606701040012;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { position: "absolute" };
    cResult[0] = obj5;
    first = obj5;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === backgroundColor) {
    let tmp11;
    let tmp12;
    if (cResult[2] === barWidth) {
      tmp11 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { borderTopRightRadius: 0, borderTopLeftRadius: 0 };
      cResult[4] = obj6;
      tmp12 = obj6;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] === animatedStyle) {
      if (cResult[6] === tmp3.youRowFloating) {
        let tmp13;
        if (cResult[7] === tmp11) {
          tmp13 = cResult[8];
        }
        return tmp13;
      }
    }
    const obj7 = { style: items };
    items = [first, tmp3.youRowFloating, tmp11, tmp12, animatedStyle];
    const tmp15 = closure_6(ReanimatedRexportDefault.View, obj7);
    cResult[5] = animatedStyle;
    cResult[6] = tmp3.youRowFloating;
    cResult[7] = tmp11;
    cResult[8] = tmp15;
    tmp13 = tmp15;
  }
  size = { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor };
  cResult[1] = backgroundColor;
  cResult[2] = barWidth;
  cResult[3] = size;
  tmp11 = size;
}) : ((arg0) => {
  let backgroundColor;
  let barWidth;
  let closure_0;
  let closure_1;
  let items;
  _require = undefined;
  ({ barWidth, backgroundColor } = arg0);
  const tmp = closure_8();
  let obj = require("useToken");
  const token = obj.useToken(nativeDefault.modules.mobile.YOU_BAR_BORDER_RADIUS);
  const tmp3 = useQuestDockAnimatedBorderRadiusDefault(token);
  _require = tmp3;
  const tmp4 = useQuestDockAnimatedBorderRadiusDefault(YOU_BAR_HEIGHT / 2, token);
  importDefault = tmp4;
  let obj2 = require("ReanimatedRexport");
  const fn = function n() {
    let obj2;
    let obj3;
    let obj4;
    const obj = { borderTopRightRadius: obj2.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG), borderTopLeftRadius: obj3.withSpring(closure_0.get(), YOU_BAR_SPRING_CONFIG), borderBottomLeftRadius: obj4.withSpring(closure_1.get(), YOU_BAR_SPRING_CONFIG) };
    obj2 = spring;
    obj3 = spring;
    obj4 = spring;
    return obj;
  };
  let obj3 = { withSpring: require("spring").withSpring, questDockAnimatedBorderRadius: tmp3, YOU_BAR_SPRING_CONFIG, questDockAnimatedBottomLeftRadius: tmp4 };
  fn.__closure = obj3;
  fn.__workletHash = 341213335439;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = { style: items };
  items = [{ position: "absolute" }, tmp.youRowFloating, { width: barWidth, height: YOU_BAR_HEIGHT, backgroundColor }, { borderTopRightRadius: 0, borderTopLeftRadius: 0 }, animatedStyle];
  return closure_6(ReanimatedRexportDefault.View, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let avatarSize;
  let barWidth;
  let hasNameplate;
  let isLargeAvatar;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(7);
  ({ barWidth, avatarSize, hasNameplate, isLargeAvatar } = arg0);
  const obj2 = useToken2;
  let token = obj2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const useToken = useToken2.useToken;
  useToken2;
  if (hasNameplate) {
    token = useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
  }
  if (isLargeAvatar) {
    if (cResult[0] === avatarSize) {
      if (cResult[1] === token) {
        let tmp8;
        if (cResult[2] === barWidth) {
          tmp8 = cResult[3];
        }
        tmp4 = tmp8;
      }
    }
    const obj3 = { barWidth, backgroundColor: token, avatarSize };
    const tmp11 = metroRequire(closure_9, obj3);
    cResult[0] = avatarSize;
    cResult[1] = token;
    cResult[2] = barWidth;
    cResult[3] = tmp11;
    tmp8 = tmp11;
  } else {
    if (cResult[4] === token) {
      if (cResult[5] === barWidth) {
        tmp4 = cResult[6];
      }
    }
    const obj4 = { barWidth, backgroundColor: token };
    const tmp7 = metroRequire(closure_12, obj4);
    cResult[4] = token;
    cResult[5] = barWidth;
    cResult[6] = tmp7;
    tmp4 = tmp7;
  }
  return tmp4;
}) : ((barWidth) => {
  let avatarSize;
  let hasNameplate;
  let isLargeAvatar;
  let tmp3Result;
  barWidth = barWidth.barWidth;
  ({ hasNameplate, isLargeAvatar, avatarSize } = barWidth);
  const obj = useToken2;
  let token = obj.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  const useToken = useToken2.useToken;
  useToken2;
  if (hasNameplate) {
    token = useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_NAMEPLATE);
  }
  if (isLargeAvatar) {
    const obj2 = { barWidth, backgroundColor: token, avatarSize };
    tmp3Result = metroRequire(closure_9, obj2);
  } else {
    const obj3 = { barWidth, backgroundColor: token };
    tmp3Result = metroRequire(closure_12, obj3);
  }
  return tmp3Result;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarBackground.tsx");

export default memoResult;