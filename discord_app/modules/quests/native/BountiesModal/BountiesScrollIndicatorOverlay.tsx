// === Module 15037: BountiesScrollIndicatorOverlay ===

// Module 15037 (BountiesScrollIndicatorOverlay)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = ["rgba(0,0,0,0)", "rgba(0,0,0,0.7)", "rgba(0,0,0,1)"];
let closure_9 = 5000 + require("timingNone").timingSlowDuration;
let closure_10 = createCacheKey.createStyles(() => {
  let obj = { scrollIndicator: null, scrollIndicatorContent: null, scrollIndicatorText: null };
  obj = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
  obj[0] = obj;
  obj = { position: "absolute", bottom: 124, left: 0, right: 0, alignItems: "center", justifyContent: "flex-start", gap: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = { textAlign: "center" };
  return obj;
});
let closure_11 = { code: "function BountiesScrollIndicatorOverlayTsx1(){const{withTiming,visible,enabled,timingSlow,timingStandard,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visible?1:0,enabled?timingSlow:timingStandard,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
let closure_12 = { code: "function BountiesScrollIndicatorOverlayTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
let closure_13 = { code: "function BountiesScrollIndicatorOverlayTsx3(){const{withTiming,visible,isEndCardVisible,enabled,timingStandard,timingSlow}=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!enabled?timingStandard:timingSlow)};}" };
let closure_14 = { code: "function BountiesScrollIndicatorOverlayTsx4(){const{withTiming,visible,timingStandard}=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};}" };
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx");

export default function BountiesScrollIndicatorOverlay(enabled) {
  enabled = enabled.enabled;
  const isEndCardVisible = enabled.isEndCardVisible;
  importDefault = isEndCardVisible;
  let first;
  let callback;
  callback = undefined;
  const tmp = callback4();
  importDefault = undefined;
  let obj = callback;
  const tmp3 = callback(callback.useState(true), 2);
  importDefault = tmp4;
  const tmp5 = callback(callback.useState(enabled), 2);
  if (enabled !== tmp5[0]) {
    tmp5[1](enabled);
    if (enabled) {
      tmp4(true);
    }
  }
  let items = [enabled];
  const effect = obj.useEffect(() => {
    if (timeout) {
      timeout = false;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        closure_2_1(closure_0);
        closure_0 = !closure_0;
        let num = 5000;
        if (closure_0) {
          num = closure_2_9;
        }
        closure_1_0 = setTimeout(() => {
          closure_2_1(closure_0);
          closure_0 = !closure_0;
          let num = 5000;
          if (closure_0) {
            num = closure_2_9;
          }
          closure_1_0 = setTimeout(() => {
            closure_2_1(closure_0);
            closure_0 = !closure_0;
            let num = 5000;
            if (closure_0) {
              num = closure_2_9;
            }
            closure_1_0 = setTimeout(() => { ... }, num);
          }, num);
        }, num);
      }, closure_1_9);
      return () => clearTimeout(closure_0);
    }
  }, items);
  first = enabled;
  if (enabled) {
    first = tmp3[0];
  }
  let tmp2Result = tmp2(obj.useState(first), 2);
  callback = tmp11;
  tmp2Result = tmp2(obj.useState(first), 2);
  if (first !== tmp2Result[0]) {
    tmp2Result[1](first);
    if (first) {
      tmp11(true);
    }
  }
  callback = obj.useCallback(() => {
    callback(false);
  }, []);
  obj1 = enabled(first[7]);
  class E {
    constructor() {
      tmp = enabled;
      tmp2 = closure_2;
      obj = enabled(closure_2[8]);
      num = 0;
      if (closure_2) {
        num = 1;
      }
      tmpResult = tmp(tmp2[4]);
      tmp4 = enabled ? tmpResult.timingSlow : tmpResult.timingStandard;
      obj = { opacity: null };
      fn = function t() {
        closure_1_0(closure_1_2[7]).runOnJS(closure_4)();
      };
      obj1 = { runOnJS: tmp(tmp2[7]).runOnJS, animationCallbackJSThread: closure_4 };
      fn.__closure = obj1;
      fn.__workletHash = 7847207274031;
      fn.__initData = closure_1_12;
      obj[0] = obj.withTiming(num, tmp4, "respect-motion-settings", fn);
      return obj;
    }
  }
  obj = { withTiming: enabled(first[8]).withTiming, visible: first, enabled, timingSlow: enabled(first[4]).timingSlow, timingStandard: enabled(first[4]).timingStandard, runOnJS: enabled(first[7]).runOnJS, animationCallbackJSThread: callback };
  E.__closure = obj;
  E.__workletHash = 2813930896935;
  E.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(E);
  let obj3 = enabled(first[7]);
  let fn = function j() {
    let obj = enabled(first[8]);
    let num = 0;
    if (first) {
      num = 0;
      if (!closure_1) {
        num = 1;
      }
    }
    if (!closure_1) {
      if (enabled) {
        let timingStandard = tmp(tmp2[4]).timingSlow;
      }
      obj = { opacity: null };
      obj[0] = obj.withTiming(num, timingStandard);
      return obj;
    }
    timingStandard = tmp(tmp2[4]).timingStandard;
  };
  obj = { withTiming: enabled(first[8]).withTiming, visible: first, isEndCardVisible, enabled, timingStandard: enabled(first[4]).timingStandard, timingSlow: enabled(first[4]).timingSlow };
  fn.__closure = obj;
  fn.__workletHash = 12172713560290;
  fn.__initData = closure_13;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  let obj5 = enabled(first[7]);
  class A {
    constructor() {
      tmp = enabled;
      tmp2 = closure_2;
      obj = enabled(closure_2[8]);
      num = 0.9;
      if (closure_2) {
        num = 1;
      }
      obj = { transform: null };
      obj1 = { scale: obj.withTiming(num, tmp(tmp2[4]).timingStandard) };
      items = [];
      items[0] = obj1;
      obj[0] = items;
      return obj;
    }
  }
  obj1 = { withTiming: enabled(first[8]).withTiming, visible: first, timingStandard: enabled(first[4]).timingStandard };
  A.__closure = obj1;
  A.__workletHash = 4041303236067;
  A.__initData = closure_14;
  const animatedStyle2 = obj5.useAnimatedStyle(A);
  const obj2 = { style: items1, pointerEvents: "none", children: null };
  items1 = [tmp.scrollIndicator, enabled.opacityStyle];
  obj3 = { style: items2, children: callback2(importDefault(first[9]), obj4) };
  items2 = [StyleSheet.absoluteFill, animatedStyle1];
  const items3 = [callback2(importDefault(first[7]).View, obj3), ];
  obj5 = { style: items4, children: null };
  items4 = [tmp.scrollIndicatorContent, ];
  const items5 = [animatedStyle, animatedStyle2];
  items4[1] = items5;
  const items6 = [callback2(importDefault(first[10]), { visible: first, isFadingInContent: tmp2Result[0] }), ];
  const obj6 = { variant: "text-sm/semibold", color: "text-default", style: tmp.scrollIndicatorText, children: null };
  const intl = enabled(first[12]).intl;
  obj6[3] = intl.string(enabled(first[12]).t.eafsh4);
  items6[1] = callback2(enabled(first[11]).Text, obj6);
  obj5[1] = items6;
  items3[1] = callback3(importDefault(first[7]).View, obj5);
  obj2[2] = items3;
  return callback3(importDefault(first[7]).View, obj2);
};