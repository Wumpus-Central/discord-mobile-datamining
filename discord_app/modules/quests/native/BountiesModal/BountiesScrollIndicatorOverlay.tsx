// === Module 17232: BountiesScrollIndicatorOverlay ===

// Module 17232 (BountiesScrollIndicatorOverlay)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5725 */;
import BountiesScrollIndicatorAnimationDefault from "BountiesScrollIndicatorAnimation" /* 17233 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0.7)", "rgba(0,0,0,1)"];
let closure_9 = 5000 + fn(5383).timingSlowDuration;
const createStyles = fn(5143);
let closure_10 = createStyles.createStyles(() => {
  const obj = { scrollIndicator: null, scrollIndicatorContent: null, scrollIndicatorText: null };
  const rect = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.scrollIndicator = rect;
  const rect1 = { position: "absolute", bottom: 124, left: 0, right: 0, alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
  obj.scrollIndicatorContent = rect1;
  obj.scrollIndicatorText = { textAlign: "center" };
  return obj;
});
let closure_11 = { code: "(function BountiesScrollIndicatorOverlayTsx1(){let[scheduleOnRN,animationCallbackJSThread]=this.__closure;scheduleOnRN(animationCallbackJSThread);})" };
let closure_12 = { code: "(function BountiesScrollIndicatorOverlayTsx2(){let[withTiming,visible,enabled,timingSlow,timingStandard,_worklet_14195002390100_init_data,scheduleOnRN,animationCallbackJSThread]=this.__closure;return{opacity:withTiming(visible?1:0,enabled?timingSlow:timingStandard,'respect-motion-settings',function BountiesScrollIndicatorOverlayTsx1Factory([_worklet_14195002390100_init_data,scheduleOnRN,animationCallbackJSThread]){const BountiesScrollIndicatorOverlayTsx1=function(){scheduleOnRN(animationCallbackJSThread);};BountiesScrollIndicatorOverlayTsx1.__closure=[scheduleOnRN,animationCallbackJSThread];BountiesScrollIndicatorOverlayTsx1.__workletHash=14195002390100;BountiesScrollIndicatorOverlayTsx1.__initData=_worklet_14195002390100_init_data;return BountiesScrollIndicatorOverlayTsx1;}([_worklet_14195002390100_init_data,scheduleOnRN,animationCallbackJSThread]))};})" };
let closure_13 = { code: "(function BountiesScrollIndicatorOverlayTsx3(){let[withTiming,visible,isEndCardVisible,enabled,timingStandard,timingSlow]=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!enabled?timingStandard:timingSlow)};})" };
let closure_14 = { code: "(function BountiesScrollIndicatorOverlayTsx4(){let[withTiming,visible,timingStandard]=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx");

export default function BountiesScrollIndicatorOverlay(enabled) {
  enabled = enabled.enabled;
  _require = undefined;
  ({ isEndCardVisible, opacityStyle } = enabled);
  const tmp = closure_10();
  closure_129_0 = enabled;
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  closure_129_1 = tmp4;
  const tmp5 = _slicedToArray(noop.useState(enabled), 2);
  if (enabled !== tmp5[0]) {
    tmp5[1](enabled);
    if (enabled) {
      tmp4(true);
    }
  }
  items = [enabled];
  const effect = obj.useEffect(() => {
    if (timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        closure_3_1(closure_1_0);
        closure_0 = !closure_1_0;
        let num = 5000;
        if (closure_1_0) {
          num = closure_2_9;
        }
        let timeout = setTimeout(() => {
          closure_3_1(closure_1_0);
          closure_0 = !closure_1_0;
          let num = 5000;
          if (closure_1_0) {
            num = closure_2_9;
          }
          let timeout = setTimeout(() => {
            closure_3_1(closure_1_0);
            closure_0 = !closure_1_0;
            let num = 5000;
            if (closure_1_0) {
              num = closure_2_9;
            }
            let timeout = setTimeout(/* F142517 */ function() { ... }, num);
          }, num);
        }, num);
      }, closure_1_9);
      return () => clearTimeout(closure_0);
    }
  }, items);
  let first = enabled;
  if (enabled) {
    first = tmp3[0];
  }
  const tmp2Result = _slicedToArray(noop.useState(first), 2);
  _require = tmp11;
  const tmp2Result2 = _slicedToArray(noop.useState(first), 2);
  if (first !== tmp2Result2[0]) {
    tmp2Result2[1](first);
    if (first) {
      tmp11(true);
    }
  }
  const callback = obj.useCallback(() => {
    _undefined(false);
  }, []);
  let items1 = [closure_12, require("timing/timing").withTiming, first, enabled, require("timingPresets").timingSlow, require("timingPresets").timingStandard, closure_11, require("module_1705").scheduleOnRN, callback];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  StyleSheet = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items1;
  class BountiesScrollIndicatorOverlayTsx2 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      tmp2 = closure_2 ? closure_3 : closure_4;
      items = [, , ];
      items[0] = closure_5;
      items[1] = closure_6;
      items[2] = closure_7;
      [tmp3, tmp4, tmp5] = items;
      obj = { opacity: null };
      class BountiesScrollIndicatorOverlayTsx1 {
        constructor() {
          tmp = closure_0(closure_1);
          return;
        }
      }
      items1 = [, ];
      items1[0] = tmp4;
      items1[1] = tmp5;
      BountiesScrollIndicatorOverlayTsx1.__closure = items1;
      BountiesScrollIndicatorOverlayTsx1.__workletHash = 14195002390100;
      BountiesScrollIndicatorOverlayTsx1.__initData = tmp3;
      obj.opacity = tmp(num, tmp2, "respect-motion-settings", BountiesScrollIndicatorOverlayTsx1);
      return obj;
    }
  }
  const items2 = [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  BountiesScrollIndicatorOverlayTsx2.__closure = items2;
  BountiesScrollIndicatorOverlayTsx2.__workletHash = 4007229602387;
  BountiesScrollIndicatorOverlayTsx2.__initData = tmp18;
  const animatedStyle = require("module_1652").useAnimatedStyle(BountiesScrollIndicatorOverlayTsx2);
  const obj2 = require("module_1652");
  const items3 = [closure_13, require("timing/timing").withTiming, first, isEndCardVisible, enabled, require("timingPresets").timingStandard, require("timingPresets").timingSlow];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  StyleSheet = undefined;
  [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items3;
  class BountiesScrollIndicatorOverlayTsx3 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        tmp2 = closure_2;
        num = 0;
        if (!closure_2) {
          num = 1;
        }
      }
      if (!closure_2) {
        tmp3 = closure_3;
        if (closure_3) {
          tmp4 = closure_5;
        }
        obj = { opacity: null };
        obj.opacity = tmp(num, tmp4);
        return obj;
      }
      tmp4 = closure_4;
      return;
    }
  }
  const items4 = [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
  BountiesScrollIndicatorOverlayTsx3.__closure = items4;
  BountiesScrollIndicatorOverlayTsx3.__workletHash = 17526580643643;
  BountiesScrollIndicatorOverlayTsx3.__initData = tmp28;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(BountiesScrollIndicatorOverlayTsx3);
  const tmp16Result = require("module_1652");
  const items5 = [closure_14, require("timing/timing").withTiming, first, require("timingPresets").timingStandard];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp36, tmp37, tmp38, tmp39] = items5;
  class BountiesScrollIndicatorOverlayTsx4 {
    constructor() {
      num = 0.9;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { transform: null };
      obj1 = { scale: tmp(num, closure_2) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items6 = [tmp37, tmp38, tmp39];
  BountiesScrollIndicatorOverlayTsx4.__closure = items6;
  BountiesScrollIndicatorOverlayTsx4.__workletHash = 12953435859578;
  BountiesScrollIndicatorOverlayTsx4.__initData = tmp36;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(BountiesScrollIndicatorOverlayTsx4);
  const obj3 = { style: null, pointerEvents: "none", children: null };
  const items7 = [tmp.scrollIndicator, opacityStyle];
  obj3.style = items7;
  const obj4 = { style: null, children: c6(LinearGradientDefault, { colors, style: StyleSheet.absoluteFill }) };
  const items8 = [StyleSheet.absoluteFill, animatedStyle1];
  obj4.style = items8;
  const items9 = [c6(_modDef1652.View, obj4), ];
  const obj6 = { style: null, children: null };
  const items10 = [tmp.scrollIndicatorContent, ];
  const items11 = [animatedStyle, animatedStyle2];
  items10[1] = items11;
  obj6.style = items10;
  const items12 = [c6(BountiesScrollIndicatorAnimationDefault, { visible: first, isFadingInContent: tmp2Result[0] }), ];
  const obj7 = { variant: "body-sm/semibold", color: "text-default", style: tmp.scrollIndicatorText, children: null };
  const intl = tmp16(1113).intl;
  obj7.children = intl.string(require("util").t.eafsh4);
  items12[1] = c6(require("Text/Text").Text, obj7);
  obj6.children = items12;
  items9[1] = c7(_modDef1652.View, obj6);
  obj3.children = items9;
  return c7(_modDef1652.View, obj3);
};