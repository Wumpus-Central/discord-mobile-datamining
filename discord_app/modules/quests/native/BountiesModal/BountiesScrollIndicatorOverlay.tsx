// discord_app/modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0.7)", "rgba(0,0,0,1)"];
let closure_9 = 5000 + fn(4564).timingSlowDuration;
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles(() => {
  const obj = { scrollIndicator: null, scrollIndicatorContent: null, scrollIndicatorText: null };
  const rect = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.scrollIndicator = rect;
  const rect1 = { position: "absolute", bottom: 124, left: 0, right: 0, alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
  obj.scrollIndicatorContent = rect1;
  obj.scrollIndicatorText = { textAlign: "center" };
  return obj;
});
const __initData = { code: "function BountiesScrollIndicatorOverlayTsx1(){const{withTiming,visible,enabled,timingSlow,timingStandard,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visible?1:0,enabled?timingSlow:timingStandard,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
const __initData2 = { code: "function BountiesScrollIndicatorOverlayTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const __initData3 = { code: "function BountiesScrollIndicatorOverlayTsx3(){const{withTiming,visible,isEndCardVisible,enabled,timingStandard,timingSlow}=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!enabled?timingStandard:timingSlow)};}" };
const __initData4 = { code: "function BountiesScrollIndicatorOverlayTsx4(){const{withTiming,visible,timingStandard}=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx");

export default function BountiesScrollIndicatorOverlay(enabled) {
  enabled = enabled.enabled;
  const isEndCardVisible = enabled.isEndCardVisible;
  let visible;
  _slicedToArray = undefined;
  animationCallbackJSThread = undefined;
  const tmp = closure_10();
  closure_129_0 = enabled;
  let obj = animationCallbackJSThread;
  const tmp3 = _slicedToArray(animationCallbackJSThread.useState(true), 2);
  closure_129_1 = tmp4;
  const tmp5 = _slicedToArray(animationCallbackJSThread.useState(enabled), 2);
  if (enabled !== tmp5[0]) {
    tmp5[1](enabled);
    if (enabled) {
      tmp4(true);
    }
  }
  let items = [enabled];
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
            let timeout = setTimeout(() => { ... }, num);
          }, num);
        }, num);
      }, closure_1_9);
      return () => clearTimeout(closure_0);
    }
  }, items);
  visible = enabled;
  if (enabled) {
    visible = tmp3[0];
  }
  tmp2(obj.useState(visible), 2);
  _slicedToArray = tmp11;
  const tmp2Result = tmp2(obj.useState(visible), 2);
  if (visible !== tmp2Result[0]) {
    tmp2Result[1](visible);
    if (visible) {
      tmp11(true);
    }
  }
  animationCallbackJSThread = obj.useCallback(() => {
    closure_3(false);
  }, []);
  let obj1 = enabled(visible[7]);
  class E {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[8]);
      num = 0;
      if (closure_2) {
        num = 1;
      }
      tmpResult = tmp(tmp2[4]);
      tmp4 = enabled ? tmpResult.timingSlow : tmpResult.timingStandard;
      obj = { opacity: null };
      fn = function t() {
        enabled(first[7]).runOnJS(animationCallbackJSThread)();
      };
      obj1 = { runOnJS: tmp(tmp2[7]).runOnJS, animationCallbackJSThread: closure_4 };
      fn.__closure = obj1;
      fn.__workletHash = 7847207274031;
      fn.__initData = closure_12;
      obj.opacity = obj.withTiming(num, tmp4, "respect-motion-settings", fn);
      return obj;
    }
  }
  obj = { withTiming: enabled(visible[8]).withTiming, visible, enabled, timingSlow: enabled(visible[4]).timingSlow, timingStandard: enabled(visible[4]).timingStandard, runOnJS: enabled(visible[7]).runOnJS, animationCallbackJSThread };
  E.__closure = obj;
  E.__workletHash = 2813930896935;
  E.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(E);
  let obj3 = enabled(visible[7]);
  let fn = function j() {
    let obj = timing;
    let num = 0;
    if (first) {
      num = 0;
      if (!isEndCardVisible) {
        num = 1;
      }
    }
    if (!isEndCardVisible) {
      if (enabled) {
        let timingStandard = timingPresets.timingSlow;
      }
      obj = { opacity: null };
      obj.opacity = obj.withTiming(num, timingStandard);
      return obj;
    }
    timingStandard = timingPresets.timingStandard;
  };
  obj = { withTiming: enabled(visible[8]).withTiming, visible, isEndCardVisible, enabled, timingStandard: enabled(visible[4]).timingStandard, timingSlow: enabled(visible[4]).timingSlow };
  fn.__closure = obj;
  fn.__workletHash = 12172713560290;
  fn.__initData = __initData3;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  let obj5 = enabled(visible[7]);
  class A {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[8]);
      num = 0.9;
      if (closure_2) {
        num = 1;
      }
      obj = { transform: null };
      obj1 = { scale: obj.withTiming(num, tmp(tmp2[4]).timingStandard) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  obj1 = { withTiming: enabled(visible[8]).withTiming, visible, timingStandard: enabled(visible[4]).timingStandard };
  A.__closure = obj1;
  A.__workletHash = 4041303236067;
  A.__initData = __initData4;
  const animatedStyle2 = obj5.useAnimatedStyle(A);
  const obj2 = { style: null, pointerEvents: "none", children: null };
  const items1 = [tmp.scrollIndicator, enabled.opacityStyle];
  obj2.style = items1;
  obj3 = { style: null, children: closure_6(isEndCardVisible(visible[9]), { colors, style: StyleSheet.absoluteFill }) };
  const items2 = [StyleSheet.absoluteFill, animatedStyle1];
  obj3.style = items2;
  const items3 = [closure_6(isEndCardVisible(visible[7]).View, obj3), ];
  obj5 = { style: null, children: null };
  const items4 = [tmp.scrollIndicatorContent, ];
  const items5 = [animatedStyle, animatedStyle2];
  items4[1] = items5;
  obj5.style = items4;
  const items6 = [closure_6(isEndCardVisible(visible[10]), { visible, isFadingInContent: tmp2Result[0] }), ];
  const obj6 = { variant: "text-sm/semibold", color: "text-default", style: tmp.scrollIndicatorText, children: null };
  const intl = enabled(visible[12]).intl;
  obj6.children = intl.string(enabled(visible[12]).t.eafsh4);
  items6[1] = closure_6(enabled(visible[11]).Text, obj6);
  obj5.children = items6;
  items3[1] = closure_7(isEndCardVisible(visible[7]).View, obj5);
  obj2.children = items3;
  return closure_7(isEndCardVisible(visible[7]).View, obj2);
};