// discord_app/modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_0, obj1;

let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
const StyleSheet = react_native.StyleSheet;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const colors = ["rgba(0,0,0,0)", "rgba(0,0,0,0.7)", "rgba(0,0,0,1)"];
let closure_9 = 5000 + timingPresets.timingSlowDuration;
let closure_10 = createStyles.createStyles(() => {
  let rect;
  let rect1;
  const obj = { scrollIndicator: rect, scrollIndicatorContent: rect1, scrollIndicatorText: { textAlign: "center" } };
  rect = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  rect1 = {
    position: "absolute",
    bottom: 124,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: nativeDefault.space.PX_8,
  };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (enabled) => {
      let tmp12;
      let tmp8;
      let tmp9;
      const obj = enabled(576);
      const cResult = obj.c(5);
      enabled = enabled.enabled;
      const tmp2 = _slicedToArray(react.useState(true), 2);
      let closure_1 = tmp4;
      const first = tmp2[0];
      const tmp5 = _slicedToArray(react.useState(enabled), 2);
      if (enabled !== tmp5[0]) {
        tmp5[1](enabled);
        if (enabled) {
          tmp2[1](true);
        }
      }
      if (cResult[0] !== enabled) {
        const fn = function o() {
          let timeout;
          const f153051 = () => {
            importDefault(closure_0);
            closure_0 = !closure_0;
            let num = 5000;
            const _setTimeout = setTimeout;
            if (closure_0) {
              num = closure_2_9;
            }
            enabled = _setTimeout(f153051, num);
          };
          const tmp = timeout;
          if (tmp) {
            let c0 = false;
            let _setTimeout = setTimeout;
            timeout = setTimeout(f153051, closure_1_9);
            return () => clearTimeout(closure_0);
          }
        };
        const items = [enabled];
        let num = 0;
        cResult[0] = enabled;
        cResult[1] = fn;
        cResult[2] = items;
        tmp9 = items;
        tmp8 = fn;
      } else {
        tmp8 = cResult[1];
        tmp9 = cResult[2];
      }
      const effect = react.useEffect(tmp8, tmp9);
      if (cResult[3] !== (enabled && first)) {
        const obj3 = { visible: enabled && first };
        cResult[3] = enabled && first;
        cResult[4] = obj3;
        tmp12 = obj3;
      } else {
        tmp12 = cResult[4];
      }
      return tmp12;
    }
  : (enabled) => {
      let visible = enabled.enabled;
      let tmp = _slicedToArray(react.useState(true), 2);
      let closure_1 = tmp3;
      const first = tmp[0];
      const tmp4 = _slicedToArray(react.useState(visible), 2);
      if (visible !== tmp4[0]) {
        tmp4[1](visible);
        if (visible) {
          tmp[1](true);
        }
      }
      const items = [visible];
      const effect = react.useEffect(() => {
        let timeout;
        const f153052 = () => {
          importDefault(closure_0);
          closure_0 = !closure_0;
          let num = 5000;
          const _setTimeout = setTimeout;
          if (closure_0) {
            num = closure_2_9;
          }
          visible = _setTimeout(f153052, num);
        };
        const tmp = timeout;
        if (tmp) {
          let c0 = false;
          let _setTimeout = setTimeout;
          timeout = setTimeout(f153052, closure_1_9);
          return () => clearTimeout(closure_0);
        }
      }, items);
      if (visible) {
        visible = first;
      }
      return { visible };
    };
const __initData = {
  code: 'function BountiesScrollIndicatorOverlayTsx1(){const{withTiming,visible,enabled,timingSlow,timingStandard,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visible?1:0,enabled?timingSlow:timingStandard,"respect-motion-settings",function(){"worklet";runOnJS(animationCallbackJSThread)();})};}',
};
const __initData2 = {
  code: "function BountiesScrollIndicatorOverlayTsx2(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}",
};
const __initData3 = {
  code: "function BountiesScrollIndicatorOverlayTsx3(){const{withTiming,visible,isEndCardVisible,enabled,timingStandard,timingSlow}=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!enabled?timingStandard:timingSlow)};}",
};
const __initData4 = {
  code: "function BountiesScrollIndicatorOverlayTsx4(){const{withTiming,visible,timingStandard}=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};}",
};
const __initData5 = {
  code: "function BountiesScrollIndicatorOverlayTsx5(){const{withTiming,visible,enabled,timingSlow,timingStandard,runOnJS,animationCallbackJSThread}=this.__closure;return{opacity:withTiming(visible?1:0,enabled?timingSlow:timingStandard,'respect-motion-settings',function(){'worklet';runOnJS(animationCallbackJSThread)();})};}",
};
const __initData6 = {
  code: "function BountiesScrollIndicatorOverlayTsx6(){const{runOnJS,animationCallbackJSThread}=this.__closure;runOnJS(animationCallbackJSThread)();}",
};
const __initData7 = {
  code: "function BountiesScrollIndicatorOverlayTsx7(){const{withTiming,visible,isEndCardVisible,enabled,timingStandard,timingSlow}=this.__closure;return{opacity:withTiming(visible&&!isEndCardVisible?1:0,isEndCardVisible||!enabled?timingStandard:timingSlow)};}",
};
const __initData8 = {
  code: "function BountiesScrollIndicatorOverlayTsx8(){const{withTiming,visible,timingStandard}=this.__closure;return{transform:[{scale:withTiming(visible?1:0.9,timingStandard)}]};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (enabled) => {
      let closure_3;
      let items1;
      let items2;
      let tmp5;
      let tmp7;
      let tmp8;
      let visible;
      let obj = enabled(visible[8]);
      const cResult = obj.c(30);
      enabled = enabled.enabled;
      const isEndCardVisible = enabled.isEndCardVisible;
      const opacityStyle = enabled.opacityStyle;
      const tmp4 = closure_10();
      if (cResult[0] !== enabled) {
        const obj2 = { enabled };
        let num = 0;
        cResult[0] = enabled;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      visible = closure_11(tmp5).visible;
      [tmp7, tmp8] = animationCallbackJSThread.useState(visible);
      _slicedToArray(animationCallbackJSThread.useState(visible), 2);
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
      let tmpResult = tmp(tmp2[9]);
      class A {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          tmp3 = closure_0(closure_2[10]);
          num = 0;
          withTiming = tmp3.withTiming;
          if (visible) {
            num = 1;
          }
          tmpResult = tmp(tmp2[4]);
          tmp5 = enabled ? tmpResult.timingSlow : tmpResult.timingStandard;
          obj = { opacity: null };
          fn = function t() {
            const obj = enabled(visible[9]);
            obj.runOnJS(animationCallbackJSThread)();
          };
          obj1 = { runOnJS: tmp(tmp2[9]).runOnJS, animationCallbackJSThread };
          fn.__closure = obj1;
          fn.__workletHash = 7847207274031;
          fn.__initData = closure_13;
          obj.opacity = withTiming(num, tmp5, "respect-motion-settings", fn);
          return obj;
        }
      }
      A.__closure = {
        withTiming: enabled(visible[10]).withTiming,
        visible,
        enabled,
        timingSlow: enabled(visible[4]).timingSlow,
        timingStandard: enabled(visible[4]).timingStandard,
        runOnJS: enabled(visible[9]).runOnJS,
        animationCallbackJSThread,
      };
      A.__workletHash = 2517455700007;
      A.__initData = __initData;
      ({
        withTiming: enabled(visible[10]).withTiming,
        visible,
        enabled,
        timingSlow: enabled(visible[4]).timingSlow,
        timingStandard: enabled(visible[4]).timingStandard,
        runOnJS: enabled(visible[9]).runOnJS,
        animationCallbackJSThread,
      });
      const animatedStyle = tmpResult.useAnimatedStyle(A);
      const tmpResult3 = enabled(visible[9]);
      class F {
        constructor() {
          let num = 0;
          const withTiming = timing.withTiming;
          timing;
          if (visible) {
            num = 0;
            if (!isEndCardVisible) {
              num = 1;
            }
          }
          if (!isEndCardVisible) {
            let timingStandard;
            if (enabled) {
              timingStandard = timingPresets.timingSlow;
            }
            const obj = { opacity: withTiming(num, timingStandard) };
            return obj;
          }
          timingStandard = timingPresets.timingStandard;
        }
      }
      F.__closure = {
        withTiming: enabled(visible[10]).withTiming,
        visible,
        isEndCardVisible,
        enabled,
        timingStandard: enabled(visible[4]).timingStandard,
        timingSlow: enabled(visible[4]).timingSlow,
      };
      F.__workletHash = 12172713560290;
      F.__initData = __initData3;
      ({
        withTiming: enabled(visible[10]).withTiming,
        visible,
        isEndCardVisible,
        enabled,
        timingStandard: enabled(visible[4]).timingStandard,
        timingSlow: enabled(visible[4]).timingSlow,
      });
      const animatedStyle1 = tmpResult3.useAnimatedStyle(F);
      let fn = function j() {
        let items;
        let num = 0.9;
        const withTiming = timing.withTiming;
        timing;
        if (visible) {
          num = 1;
        }
        const obj = { transform: items };
        items = [{ scale: withTiming(num, timingPresets.timingStandard) }];
        ({ scale: withTiming(num, timingPresets.timingStandard) });
        return obj;
      };
      const tmpResult4 = enabled(visible[9]);
      fn.__closure = {
        withTiming: enabled(visible[10]).withTiming,
        visible,
        timingStandard: enabled(visible[4]).timingStandard,
      };
      fn.__workletHash = 4041303236067;
      fn.__initData = __initData4;
      ({ withTiming: enabled(visible[10]).withTiming, visible, timingStandard: enabled(visible[4]).timingStandard });
      const animatedStyle2 = tmpResult4.useAnimatedStyle(fn);
      if (cResult[2] === opacityStyle) {
        let tmp15;
        let tmp16;
        let tmp19;
        let tmp25;
        if (cResult[3] === tmp4.scrollIndicator) {
          tmp15 = cResult[4];
        }
        if (cResult[5] !== animatedStyle1) {
          let items = [StyleSheet.absoluteFill, animatedStyle1];
          cResult[5] = animatedStyle1;
          cResult[6] = items;
          tmp16 = items;
        } else {
          tmp16 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { colors, style: StyleSheet.absoluteFill };
          const tmp24 = closure_6(isEndCardVisible(visible[11]), obj6);
          cResult[7] = tmp24;
          tmp19 = tmp24;
        } else {
          tmp19 = cResult[7];
        }
        if (cResult[8] !== tmp16) {
          const obj7 = { style: tmp16, children: tmp19 };
          const tmp28 = closure_6(isEndCardVisible(visible[9]).View, obj7);
          cResult[8] = tmp16;
          cResult[9] = tmp28;
          tmp25 = tmp28;
        } else {
          tmp25 = cResult[9];
        }
        if (cResult[10] === animatedStyle) {
          let tmp29;
          if (cResult[11] === animatedStyle2) {
            tmp29 = cResult[12];
          }
          if (cResult[13] === tmp4.scrollIndicatorContent) {
            let tmp30;
            if (cResult[14] === tmp29) {
              tmp30 = cResult[15];
            }
            if (cResult[16] === tmp7) {
              let tmp31;
              let tmp35;
              let tmp37;
              if (cResult[17] === visible) {
                tmp31 = cResult[18];
              }
              const _Symbol2 = Symbol;
              const scrollIndicatorText = tmp4.scrollIndicatorText;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(tmp2[13]).intl;
                const stringResult = intl.string(enabled(visible[13]).t.eafsh4);
                cResult[19] = stringResult;
                tmp35 = stringResult;
              } else {
                tmp35 = cResult[19];
              }
              if (cResult[20] !== tmp4.scrollIndicatorText) {
                const obj8 = {
                  variant: "text-sm/semibold",
                  color: "text-default",
                  style: scrollIndicatorText,
                  children: tmp35,
                };
                const tmp39 = closure_6(enabled(visible[14]).Text, obj8);
                cResult[20] = tmp4.scrollIndicatorText;
                cResult[21] = tmp39;
                tmp37 = tmp39;
              } else {
                tmp37 = cResult[21];
              }
              if (cResult[22] === tmp37) {
                if (cResult[23] === tmp30) {
                  let tmp40;
                  if (cResult[24] === tmp31) {
                    tmp40 = cResult[25];
                  }
                  if (cResult[26] === tmp40) {
                    if (cResult[27] === tmp15) {
                      let tmp44;
                      if (cResult[28] === tmp25) {
                        tmp44 = cResult[29];
                      }
                      return tmp44;
                    }
                  }
                  const obj9 = { style: tmp15, pointerEvents: "none", children: items1 };
                  items1 = [tmp25, tmp40];
                  const tmp47 = closure_7(isEndCardVisible(visible[9]).View, obj9);
                  cResult[26] = tmp40;
                  cResult[27] = tmp15;
                  cResult[28] = tmp25;
                  cResult[29] = tmp47;
                  tmp44 = tmp47;
                }
              }
              const obj10 = { style: tmp30, children: items2 };
              items2 = [tmp31, tmp37];
              const tmp43 = closure_7(isEndCardVisible(visible[9]).View, obj10);
              cResult[22] = tmp37;
              cResult[23] = tmp30;
              cResult[24] = tmp31;
              cResult[25] = tmp43;
              tmp40 = tmp43;
            }
            const obj11 = { visible, isFadingInContent: tmp7 };
            const tmp34 = closure_6(isEndCardVisible(visible[12]), obj11);
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
    }
  : (enabled) => {
      let closure_3;
      let intl;
      let items;
      let items1;
      let items2;
      let items3;
      let items5;
      let obj10;
      enabled = enabled.enabled;
      const isEndCardVisible = enabled.isEndCardVisible;
      _slicedToArray = undefined;
      animationCallbackJSThread = undefined;
      const opacityStyle = enabled.opacityStyle;
      const tmp = closure_10();
      const visible = closure_11({ enabled }).visible;
      let obj = animationCallbackJSThread;
      const tmp2 = _slicedToArray(animationCallbackJSThread.useState(visible), 2);
      _slicedToArray = tmp4;
      const first = tmp2[0];
      let tmp5 = _slicedToArray(animationCallbackJSThread.useState(visible), 2);
      if (visible !== tmp5[0]) {
        tmp5[1](visible);
        if (visible) {
          tmp2[1](true);
        }
      }
      animationCallbackJSThread = obj.useCallback(() => {
        closure_3(false);
      }, []);
      const obj2 = enabled(visible[9]);
      class B {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          tmp3 = closure_0(closure_2[10]);
          num = 0;
          withTiming = tmp3.withTiming;
          if (visible) {
            num = 1;
          }
          tmpResult = tmp(tmp2[4]);
          tmp5 = enabled ? tmpResult.timingSlow : tmpResult.timingStandard;
          obj = { opacity: null };
          fn = function t() {
            const obj = enabled(visible[9]);
            obj.runOnJS(animationCallbackJSThread)();
          };
          obj1 = { runOnJS: tmp(tmp2[9]).runOnJS, animationCallbackJSThread: closure_4 };
          fn.__closure = obj1;
          fn.__workletHash = 7941131212075;
          fn.__initData = closure_17;
          obj.opacity = withTiming(num, tmp5, "respect-motion-settings", fn);
          return obj;
        }
      }
      B.__closure = {
        withTiming: enabled(visible[10]).withTiming,
        visible,
        enabled,
        timingSlow: enabled(visible[4]).timingSlow,
        timingStandard: enabled(visible[4]).timingStandard,
        runOnJS: enabled(visible[9]).runOnJS,
        animationCallbackJSThread,
      };
      B.__workletHash = 2907854834979;
      B.__initData = __initData5;
      ({
        withTiming: enabled(visible[10]).withTiming,
        visible,
        enabled,
        timingSlow: enabled(visible[4]).timingSlow,
        timingStandard: enabled(visible[4]).timingStandard,
        runOnJS: enabled(visible[9]).runOnJS,
        animationCallbackJSThread,
      });
      const animatedStyle = obj2.useAnimatedStyle(B);
      const obj4 = enabled(visible[9]);
      class D {
        constructor() {
          let num = 0;
          const withTiming = timing.withTiming;
          timing;
          if (visible) {
            num = 0;
            if (!isEndCardVisible) {
              num = 1;
            }
          }
          if (!isEndCardVisible) {
            let timingStandard;
            if (enabled) {
              timingStandard = timingPresets.timingSlow;
            }
            const obj = { opacity: withTiming(num, timingStandard) };
            return obj;
          }
          timingStandard = timingPresets.timingStandard;
        }
      }
      D.__closure = {
        withTiming: enabled(visible[10]).withTiming,
        visible,
        isEndCardVisible,
        enabled,
        timingStandard: enabled(visible[4]).timingStandard,
        timingSlow: enabled(visible[4]).timingSlow,
      };
      D.__workletHash = 12078789622246;
      D.__initData = __initData7;
      ({
        withTiming: enabled(visible[10]).withTiming,
        visible,
        isEndCardVisible,
        enabled,
        timingStandard: enabled(visible[4]).timingStandard,
        timingSlow: enabled(visible[4]).timingSlow,
      });
      const animatedStyle1 = obj4.useAnimatedStyle(D);
      const obj6 = enabled(visible[9]);
      class H {
        constructor() {
          let items;
          let num = 0.9;
          const withTiming = timing.withTiming;
          timing;
          if (visible) {
            num = 1;
          }
          const obj = { transform: items };
          items = [{ scale: withTiming(num, timingPresets.timingStandard) }];
          ({ scale: withTiming(num, timingPresets.timingStandard) });
          return obj;
        }
      }
      H.__closure = {
        withTiming: enabled(visible[10]).withTiming,
        visible,
        timingStandard: enabled(visible[4]).timingStandard,
      };
      H.__workletHash = 9473289168623;
      H.__initData = __initData8;
      ({ withTiming: enabled(visible[10]).withTiming, visible, timingStandard: enabled(visible[4]).timingStandard });
      const animatedStyle2 = obj6.useAnimatedStyle(H);
      const obj8 = { style: items, pointerEvents: "none", children: items2 };
      items = [tmp.scrollIndicator, opacityStyle];
      const View = isEndCardVisible(visible[9]).View;
      const obj9 = { style: items1, children: closure_6(isEndCardVisible(visible[11]), obj10) };
      items1 = [StyleSheet.absoluteFill, animatedStyle1];
      const View2 = isEndCardVisible(visible[9]).View;
      obj10 = { colors, style: StyleSheet.absoluteFill };
      items2 = [closure_6(View2, obj9)];
      const obj11 = { style: items3, children: items5 };
      items3 = [tmp.scrollIndicatorContent];
      const items4 = [animatedStyle, animatedStyle2];
      items3[1] = items4;
      const View3 = isEndCardVisible(visible[9]).View;
      items5 = [closure_6(isEndCardVisible(visible[12]), { visible, isFadingInContent: first })];
      const obj12 = {
        variant: "text-sm/semibold",
        color: "text-default",
        style: tmp.scrollIndicatorText,
        children: intl.string(enabled(visible[13]).t.eafsh4),
      };
      const Text = enabled(visible[14]).Text;
      intl = enabled(visible[13]).intl;
      items5[1] = closure_6(Text, obj12);
      items2[1] = closure_7(View3, obj11);
      return closure_7(View, obj8);
    };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollIndicatorOverlay.tsx");

export default tmp3;
