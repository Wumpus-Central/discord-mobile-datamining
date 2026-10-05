// === Module 14852: BountiesScrollIndicatorOverlay ===

// Module 14852 (BountiesScrollIndicatorOverlay)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0.7)", "rgba(0,0,0,1)"];
let closure_9 = 5000 + fn(4894).timingSlowDuration;
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles(() => {
  const obj = { scrollIndicator: null, scrollIndicatorContent: null, scrollIndicatorText: null };
  const rect = { position: "absolute", left: 0, right: 0, bottom: 0, height: "45%", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.scrollIndicator = rect;
  const rect1 = { position: "absolute", bottom: 124, left: 0, right: 0, alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_8 };
  obj.scrollIndicatorContent = rect1;
  obj.scrollIndicatorText = { textAlign: "center" };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((enabled) => {
  const cResult = enabled(576).c(5);
  enabled = enabled.enabled;
  const tmp2 = _slicedToArray(noop.useState(true), 2);
  closure_1 = tmp3;
  const tmp4 = _slicedToArray(noop.useState(enabled), 2);
  if (enabled !== tmp4[0]) {
    tmp4[1](enabled);
    if (enabled) {
      tmp3(true);
    }
  }
  if (cResult[0] !== enabled) {
    const fn = function o() {
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
    };
    const items = [enabled];
    cResult[0] = enabled;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp8 = items;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const effect = noop.useEffect(tmp7, tmp8);
  let first = enabled;
  if (enabled) {
    first = tmp2[0];
  }
  if (cResult[3] !== first) {
    const obj3 = { visible: first };
    cResult[3] = first;
    cResult[4] = obj3;
    let tmp11 = obj3;
  } else {
    tmp11 = cResult[4];
  }
  return tmp11;
}) : ((enabled) => {
  let visible = enabled.enabled;
  const tmp = _slicedToArray(noop.useState(true), 2);
  closure_1 = tmp2;
  const tmp3 = _slicedToArray(noop.useState(visible), 2);
  if (visible !== tmp3[0]) {
    tmp3[1](visible);
    if (visible) {
      tmp2(true);
    }
  }
  const items = [visible];
  const effect = noop.useEffect(() => {
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
  if (visible) {
    visible = tmp[0];
  }
  return { visible };
});
const __initData = { code: "function BountiesScrollIndicatorOverlayTsx1(){const{withTiming,visible,enabled,timingSlow,timingStandard,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visible?1:0,enabled?timingSlow:timingStandard,\"respect-motion-settings\",function(){\"worklet\";runOnJS(animationCallbackJSThread)();})};}" };
const __initData2 = { code: "function BountiesScrollIndicatorOverlayTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const __initData3 = { code: "function BountiesScrollIndicatorOverlayTsx3(){const{withTiming,visible,isEndCardVisible,enabled,timingStandard,timingSlow}=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!enabled?timingStandard:timingSlow)};}" };
const __initData4 = { code: "function BountiesScrollIndicatorOverlayTsx4(){const{withTiming,visible,timingStandard}=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};}" };
const __initData5 = { code: "function BountiesScrollIndicatorOverlayTsx5(){const{withTiming,visible,enabled,timingSlow,timingStandard,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visible?1:0,enabled?timingSlow:timingStandard,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}" };
const __initData6 = { code: "function BountiesScrollIndicatorOverlayTsx6(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}" };
const __initData7 = { code: "function BountiesScrollIndicatorOverlayTsx7(){const{withTiming,visible,isEndCardVisible,enabled,timingStandard,timingSlow}=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!enabled?timingStandard:timingSlow)};}" };
const __initData8 = { code: "function BountiesScrollIndicatorOverlayTsx8(){const{withTiming,visible,timingStandard}=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};}" };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((enabled) => {
  const cResult = enabled(visible[8]).c(30);
  enabled = enabled.enabled;
  const isEndCardVisible = enabled.isEndCardVisible;
  const opacityStyle = enabled.opacityStyle;
  let tmp4 = closure_10();
  if (cResult[0] !== enabled) {
    let obj2 = { enabled };
    cResult[0] = enabled;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  visible = closure_11(tmp5).visible;
  let obj = enabled(visible[8]);
  [tmp7, tmp8] = animationCallbackJSThread.useState(visible);
  _slicedToArray = tmp8;
  const tmp9 = _slicedToArray(animationCallbackJSThread.useState(visible), 2);
  if (visible !== tmp9[0]) {
    tmp9[1](visible);
    if (visible) {
      tmp8(true);
    }
  }
  animationCallbackJSThread = function animationCallbackJSThread() {
    tmp8(false);
  };
  const tmp6 = _slicedToArray(animationCallbackJSThread.useState(visible), 2);
  class A {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[10]);
      num = 0;
      if (visible) {
        num = 1;
      }
      tmpResult = tmp(tmp2[4]);
      tmp4 = enabled ? tmpResult.timingSlow : tmpResult.timingStandard;
      obj1 = { opacity: null };
      fn = function t() {
        enabled(visible[9]).runOnJS(animationCallbackJSThread)();
      };
      obj4 = { runOnJS: tmp(tmp2[9]).runOnJS, animationCallbackJSThread };
      fn.__closure = obj4;
      fn.__workletHash = 7847207274031;
      fn.__initData = closure_13;
      obj1.opacity = obj.withTiming(num, tmp4, "respect-motion-settings", fn);
      return obj1;
    }
  }
  let tmpResult = enabled(visible[9]);
  A.__closure = { withTiming: enabled(visible[10]).withTiming, visible, enabled, timingSlow: enabled(visible[4]).timingSlow, timingStandard: enabled(visible[4]).timingStandard, runOnJS: enabled(visible[9]).runOnJS, animationCallbackJSThread };
  A.__workletHash = 2517455700007;
  A.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(A);
  const obj3 = { withTiming: enabled(visible[10]).withTiming, visible, enabled, timingSlow: enabled(visible[4]).timingSlow, timingStandard: enabled(visible[4]).timingStandard, runOnJS: enabled(visible[9]).runOnJS, animationCallbackJSThread };
  class F {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[10]);
      num = 0;
      if (visible) {
        tmp3 = isEndCardVisible;
        num = 0;
        if (!isEndCardVisible) {
          num = 1;
        }
      }
      if (!isEndCardVisible) {
        tmp4 = enabled;
        if (enabled) {
          timingStandard = tmp(tmp2[4]).timingSlow;
        }
        obj1 = { opacity: null };
        obj1.opacity = obj.withTiming(num, timingStandard);
        return obj1;
      }
      timingStandard = tmp(tmp2[4]).timingStandard;
      return;
    }
  }
  const tmpResult3 = enabled(visible[9]);
  F.__closure = { withTiming: enabled(visible[10]).withTiming, visible, isEndCardVisible, enabled, timingStandard: enabled(visible[4]).timingStandard, timingSlow: enabled(visible[4]).timingSlow };
  F.__workletHash = 12172713560290;
  F.__initData = __initData3;
  const animatedStyle1 = tmpResult3.useAnimatedStyle(F);
  const obj4 = { withTiming: enabled(visible[10]).withTiming, visible, isEndCardVisible, enabled, timingStandard: enabled(visible[4]).timingStandard, timingSlow: enabled(visible[4]).timingSlow };
  let fn = function j() {
    let num = 0.9;
    if (visible) {
      num = 1;
    }
    const obj2 = { transform: null };
    const items = [{ scale: timing.withTiming(num, timingPresets.timingStandard) }];
    obj2.transform = items;
    return obj2;
  };
  const tmpResult4 = enabled(visible[9]);
  fn.__closure = { withTiming: enabled(visible[10]).withTiming, visible, timingStandard: enabled(visible[4]).timingStandard };
  fn.__workletHash = 4041303236067;
  fn.__initData = __initData4;
  const animatedStyle2 = tmpResult4.useAnimatedStyle(fn);
  if (cResult[2] === opacityStyle) {
    if (cResult[3] === tmp4.scrollIndicator) {
      let tmp15 = cResult[4];
    }
    if (cResult[5] !== animatedStyle1) {
      let items = [StyleSheet.absoluteFill, animatedStyle1];
      cResult[5] = animatedStyle1;
      cResult[6] = items;
      let tmp16 = items;
    } else {
      tmp16 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { colors, style: StyleSheet.absoluteFill };
      const tmp24 = closure_6(isEndCardVisible(tmp2[11]), obj6);
      cResult[7] = tmp24;
      let tmp19 = tmp24;
    } else {
      tmp19 = cResult[7];
    }
    if (cResult[8] !== tmp16) {
      const obj7 = { style: tmp16, children: tmp19 };
      const tmp28 = closure_6(isEndCardVisible(tmp2[9]).View, obj7);
      cResult[8] = tmp16;
      cResult[9] = tmp28;
      let tmp25 = tmp28;
    } else {
      tmp25 = cResult[9];
    }
    if (cResult[10] === animatedStyle) {
      if (cResult[11] === animatedStyle2) {
        let tmp29 = cResult[12];
      }
      if (cResult[13] === tmp4.scrollIndicatorContent) {
        if (cResult[14] === tmp29) {
          let tmp30 = cResult[15];
        }
        if (cResult[16] === tmp7) {
          if (cResult[17] === visible) {
            let tmp31 = cResult[18];
          }
          const _Symbol2 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[13]).intl;
            const stringResult = intl.string(tmp(tmp2[13]).t.eafsh4);
            cResult[19] = stringResult;
            let tmp35 = stringResult;
          } else {
            tmp35 = cResult[19];
          }
          if (cResult[20] !== tmp4.scrollIndicatorText) {
            const obj8 = { variant: "text-sm/semibold", color: "text-default", style: tmp4.scrollIndicatorText, children: tmp35 };
            const tmp39 = closure_6(tmp(tmp2[14]).Text, obj8);
            cResult[20] = tmp4.scrollIndicatorText;
            cResult[21] = tmp39;
            let tmp37 = tmp39;
          } else {
            tmp37 = cResult[21];
          }
          if (cResult[22] === tmp37) {
            if (cResult[23] === tmp30) {
              if (cResult[24] === tmp31) {
                let tmp40 = cResult[25];
              }
              if (cResult[26] === tmp40) {
                if (cResult[27] === tmp15) {
                  if (cResult[28] === tmp25) {
                    let tmp44 = cResult[29];
                  }
                  return tmp44;
                }
              }
              const obj9 = { style: tmp15, pointerEvents: "none", children: null };
              const items1 = [tmp25, tmp40];
              obj9.children = items1;
              const tmp47 = closure_7(isEndCardVisible(tmp2[9]).View, obj9);
              cResult[26] = tmp40;
              cResult[27] = tmp15;
              cResult[28] = tmp25;
              cResult[29] = tmp47;
              tmp44 = tmp47;
            }
          }
          const obj10 = { style: tmp30, children: null };
          const items2 = [tmp31, tmp37];
          obj10.children = items2;
          const tmp43 = closure_7(isEndCardVisible(tmp2[9]).View, obj10);
          cResult[22] = tmp37;
          cResult[23] = tmp30;
          cResult[24] = tmp31;
          cResult[25] = tmp43;
          tmp40 = tmp43;
        }
        const obj11 = { visible, isFadingInContent: tmp7 };
        const tmp34 = closure_6(isEndCardVisible(tmp2[12]), obj11);
        cResult[16] = tmp7;
        cResult[17] = visible;
        cResult[18] = tmp34;
        tmp31 = tmp34;
      }
      const items3 = [tmp4.scrollIndicatorContent, tmp29];
      cResult[13] = tmp4.scrollIndicatorContent;
      cResult[14] = tmp29;
      cResult[15] = items3;
      tmp30 = items3;
    }
    const items4 = [animatedStyle, animatedStyle2];
    cResult[10] = animatedStyle;
    cResult[11] = animatedStyle2;
    cResult[12] = items4;
    tmp29 = items4;
  }
  const items5 = [tmp4.scrollIndicator, opacityStyle];
  cResult[2] = opacityStyle;
  cResult[3] = tmp4.scrollIndicator;
  cResult[4] = items5;
  tmp15 = items5;
  const obj5 = { withTiming: enabled(visible[10]).withTiming, visible, timingStandard: enabled(visible[4]).timingStandard };
}) : ((enabled) => {
  enabled = enabled.enabled;
  const isEndCardVisible = enabled.isEndCardVisible;
  _slicedToArray = undefined;
  animationCallbackJSThread = undefined;
  const tmp = closure_10();
  const visible = closure_11({ enabled }).visible;
  const tmp2 = _slicedToArray(animationCallbackJSThread.useState(visible), 2);
  _slicedToArray = tmp3;
  let tmp4 = _slicedToArray(animationCallbackJSThread.useState(visible), 2);
  if (visible !== tmp4[0]) {
    tmp4[1](visible);
    if (visible) {
      tmp3(true);
    }
  }
  animationCallbackJSThread = animationCallbackJSThread.useCallback(() => {
    closure_3(false);
  }, []);
  class B {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[10]);
      num = 0;
      if (visible) {
        num = 1;
      }
      tmpResult = tmp(tmp2[4]);
      tmp4 = enabled ? tmpResult.timingSlow : tmpResult.timingStandard;
      obj1 = { opacity: null };
      fn = function t() {
        enabled(visible[9]).runOnJS(animationCallbackJSThread)();
      };
      obj4 = { runOnJS: tmp(tmp2[9]).runOnJS, animationCallbackJSThread: closure_4 };
      fn.__closure = obj4;
      fn.__workletHash = 7941131212075;
      fn.__initData = closure_17;
      obj1.opacity = obj.withTiming(num, tmp4, "respect-motion-settings", fn);
      return obj1;
    }
  }
  let obj2 = enabled(visible[9]);
  B.__closure = { withTiming: enabled(visible[10]).withTiming, visible, enabled, timingSlow: enabled(visible[4]).timingSlow, timingStandard: enabled(visible[4]).timingStandard, runOnJS: enabled(visible[9]).runOnJS, animationCallbackJSThread };
  B.__workletHash = 2907854834979;
  B.__initData = __initData5;
  const animatedStyle = obj2.useAnimatedStyle(B);
  const obj3 = { withTiming: enabled(visible[10]).withTiming, visible, enabled, timingSlow: enabled(visible[4]).timingSlow, timingStandard: enabled(visible[4]).timingStandard, runOnJS: enabled(visible[9]).runOnJS, animationCallbackJSThread };
  class D {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[10]);
      num = 0;
      if (visible) {
        tmp3 = isEndCardVisible;
        num = 0;
        if (!isEndCardVisible) {
          num = 1;
        }
      }
      if (!isEndCardVisible) {
        tmp4 = enabled;
        if (enabled) {
          timingStandard = tmp(tmp2[4]).timingSlow;
        }
        obj1 = { opacity: null };
        obj1.opacity = obj.withTiming(num, timingStandard);
        return obj1;
      }
      timingStandard = tmp(tmp2[4]).timingStandard;
      return;
    }
  }
  const obj4 = enabled(visible[9]);
  D.__closure = { withTiming: enabled(visible[10]).withTiming, visible, isEndCardVisible, enabled, timingStandard: enabled(visible[4]).timingStandard, timingSlow: enabled(visible[4]).timingSlow };
  D.__workletHash = 12078789622246;
  D.__initData = __initData7;
  const animatedStyle1 = obj4.useAnimatedStyle(D);
  const obj5 = { withTiming: enabled(visible[10]).withTiming, visible, isEndCardVisible, enabled, timingStandard: enabled(visible[4]).timingStandard, timingSlow: enabled(visible[4]).timingSlow };
  class H {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[10]);
      num = 0.9;
      if (visible) {
        num = 1;
      }
      obj1 = { transform: null };
      obj4 = { scale: obj.withTiming(num, tmp(tmp2[4]).timingStandard) };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const obj6 = enabled(visible[9]);
  H.__closure = { withTiming: enabled(visible[10]).withTiming, visible, timingStandard: enabled(visible[4]).timingStandard };
  H.__workletHash = 9473289168623;
  H.__initData = __initData8;
  const animatedStyle2 = obj6.useAnimatedStyle(H);
  const obj8 = { style: null, pointerEvents: "none", children: null };
  let items = [tmp.scrollIndicator, enabled.opacityStyle];
  obj8.style = items;
  const obj9 = { style: null, children: closure_6(isEndCardVisible(visible[11]), { colors, style: StyleSheet.absoluteFill }) };
  const items1 = [StyleSheet.absoluteFill, animatedStyle1];
  obj9.style = items1;
  const items2 = [closure_6(isEndCardVisible(visible[9]).View, obj9), ];
  const obj11 = { style: null, children: null };
  const items3 = [tmp.scrollIndicatorContent, ];
  const items4 = [animatedStyle, animatedStyle2];
  items3[1] = items4;
  obj11.style = items3;
  const items5 = [closure_6(isEndCardVisible(visible[12]), { visible, isFadingInContent: tmp2[0] }), ];
  const obj12 = { variant: "text-sm/semibold", color: "text-default", style: tmp.scrollIndicatorText, children: null };
  const intl = enabled(visible[13]).intl;
  obj12.children = intl.string(enabled(visible[13]).t.eafsh4);
  items5[1] = closure_6(enabled(visible[14]).Text, obj12);
  obj11.children = items5;
  items2[1] = closure_7(isEndCardVisible(visible[9]).View, obj11);
  obj8.children = items2;
  return closure_7(isEndCardVisible(visible[9]).View, obj8);
});