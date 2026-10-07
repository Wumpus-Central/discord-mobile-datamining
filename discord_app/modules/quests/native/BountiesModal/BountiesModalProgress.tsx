// discord_app/modules/quests/native/BountiesModal/BountiesModalProgress.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles(() => {
  const obj = { progressContainer: { height: 4 }, progressTrack: null, progressBar: null, progressBarGlowLayer: null };
  const obj2 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj2.borderRadius = nativeDefault.radii.round;
  obj2.backgroundColor = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj2.opacity = 0.54;
  obj.progressTrack = obj2;
  const rect = {
    position: "absolute",
    height: "100%",
    left: 0,
    bottom: 0,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.unsafe_rawColors.GREEN_300,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 4,
    shadowColor: "#30C773",
  };
  obj.progressBar = rect;
  const rect1 = {
    position: "absolute",
    height: "100%",
    left: 0,
    bottom: 0,
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.unsafe_rawColors.GREEN_300,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 8,
    shadowColor: nativeDefault.unsafe_rawColors.GREEN_300,
  };
  obj.progressBarGlowLayer = rect1;
  return obj;
});
const __initData = {
  code: "function BountiesModalProgressTsx1(){const{withTiming,visible,timingFast}=this.__closure;return{opacity:withTiming(visible?1:0,timingFast)};}",
};
const __initData2 = {
  code: 'function BountiesModalProgressTsx2(){const{withTiming,progress,shouldSkipAnimation,timingNone,timingFast}=this.__closure;return{width:withTiming(progress*100+"%",shouldSkipAnimation?timingNone:timingFast,"animate-always")};}',
};
const __initData3 = {
  code: "function BountiesModalProgressTsx3(){const{withTiming,visible,timingFast}=this.__closure;return{opacity:withTiming(visible?1:0,timingFast)};}",
};
const __initData4 = {
  code: "function BountiesModalProgressTsx4(){const{withTiming,progress,shouldSkipAnimation,timingNone,timingFast}=this.__closure;return{width:withTiming(progress*100+\"%\",shouldSkipAnimation?timingNone:timingFast,'animate-always')};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalProgress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (progress) => {
      const cResult = progress(shouldSkipAnimation[7]).c(17);
      progress = progress.progress;
      const visible = progress.visible;
      const style = progress.style;
      const tmp4 = closure_9();
      const tmp5 = _slicedToArray(noop.useState(false), 2);
      shouldSkipAnimation = tmp5[0];
      const tmp7 = _slicedToArray(noop.useState(progress), 2);
      const first1 = tmp7[0];
      if (progress !== first1) {
        tmp7[1](progress);
        tmp5[1](progress < first1);
      }
      let obj = progress(shouldSkipAnimation[7]);
      class R {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[9]);
          num = 0;
          if (visible) {
            num = 1;
          }
          obj1 = { opacity: obj.withTiming(num, tmp(tmp2[10]).timingFast) };
          return obj1;
        }
      }
      const tmpResult = progress(shouldSkipAnimation[8]);
      R.__closure = {
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        visible,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      };
      R.__workletHash = 5158131592262;
      R.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(R);
      const obj2 = {
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        visible,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      };
      class A {
        constructor() {
          obj = closure_0(closure_2[9]);
          result = 100 * progress;
          tmp2 = closure_0(closure_2[10]);
          obj1 = { width: obj.withTiming(`${tmp}%`, closure_2 ? tmp2.timingNone : tmp2.timingFast, "animate-always") };
          return obj1;
        }
      }
      const tmpResult2 = progress(shouldSkipAnimation[8]);
      A.__closure = {
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        progress,
        shouldSkipAnimation,
        timingNone: progress(shouldSkipAnimation[10]).timingNone,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      };
      A.__workletHash = 6312952981669;
      A.__initData = __initData2;
      const animatedStyle1 = tmpResult2.useAnimatedStyle(A);
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.progressContainer) {
          if (cResult[2] === animatedStyle) {
            let tmp13 = cResult[3];
          }
          if (cResult[4] !== tmp4.progressTrack) {
            const obj4 = { style: tmp4.progressTrack };
            const tmp17 = closure_7(closure_6, obj4);
            cResult[4] = tmp4.progressTrack;
            cResult[5] = tmp17;
            let tmp14 = tmp17;
          } else {
            tmp14 = cResult[5];
          }
          if (cResult[6] === animatedStyle1) {
            if (cResult[7] === tmp4.progressBarGlowLayer) {
              let tmp18 = cResult[8];
            }
            if (cResult[9] === animatedStyle1) {
              if (cResult[10] === tmp4.progressBar) {
                let tmp22 = cResult[11];
              }
              if (cResult[12] === tmp13) {
                if (cResult[13] === tmp14) {
                  if (cResult[14] === tmp18) {
                    if (cResult[15] === tmp22) {
                      let tmp26 = cResult[16];
                    }
                    return tmp26;
                  }
                }
              }
              const obj5 = { style: tmp13, children: null };
              const items = [tmp14, tmp18, tmp22];
              obj5.children = items;
              const tmp29 = closure_8(visible(tmp2[8]).View, obj5);
              cResult[12] = tmp13;
              cResult[13] = tmp14;
              cResult[14] = tmp18;
              cResult[15] = tmp22;
              cResult[16] = tmp29;
              tmp26 = tmp29;
            }
            const obj6 = { style: null };
            const items1 = [tmp4.progressBar, animatedStyle1];
            obj6.style = items1;
            const tmp25 = closure_7(visible(tmp2[8]).View, obj6);
            cResult[9] = animatedStyle1;
            cResult[10] = tmp4.progressBar;
            cResult[11] = tmp25;
            tmp22 = tmp25;
          }
          const obj7 = { style: null };
          const items2 = [tmp4.progressBarGlowLayer, animatedStyle1];
          obj7.style = items2;
          const tmp21 = closure_7(visible(tmp2[8]).View, obj7);
          cResult[6] = animatedStyle1;
          cResult[7] = tmp4.progressBarGlowLayer;
          cResult[8] = tmp21;
          tmp18 = tmp21;
        }
      }
      const items3 = [tmp4.progressContainer, style, animatedStyle];
      cResult[0] = style;
      cResult[1] = tmp4.progressContainer;
      cResult[2] = animatedStyle;
      cResult[3] = items3;
      tmp13 = items3;
      const obj3 = {
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        progress,
        shouldSkipAnimation,
        timingNone: progress(shouldSkipAnimation[10]).timingNone,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      };
    }
  : (progress) => {
      progress = progress.progress;
      const visible = progress.visible;
      const tmp = closure_9();
      let tmp2 = _slicedToArray(noop.useState(false), 2);
      const shouldSkipAnimation = tmp2[0];
      const tmp4 = _slicedToArray(noop.useState(progress), 2);
      const first1 = tmp4[0];
      if (progress !== first1) {
        tmp4[1](progress);
        tmp2[1](progress < first1);
      }
      const fn = function v() {
        let num = 0;
        if (visible) {
          num = 1;
        }
        return { opacity: timing.withTiming(num, timingPresets.timingFast) };
      };
      let obj = progress(shouldSkipAnimation[8]);
      fn.__closure = {
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        visible,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      };
      fn.__workletHash = 3136948411652;
      fn.__initData = __initData3;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj2 = {
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        visible,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      };
      class N {
        constructor() {
          obj = closure_0(closure_2[9]);
          result = 100 * progress;
          tmp2 = closure_0(closure_2[10]);
          obj1 = { width: obj.withTiming(`${tmp}%`, closure_2 ? tmp2.timingNone : tmp2.timingFast, "animate-always") };
          return obj1;
        }
      }
      const obj3 = progress(shouldSkipAnimation[8]);
      N.__closure = {
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        progress,
        shouldSkipAnimation,
        timingNone: progress(shouldSkipAnimation[10]).timingNone,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      };
      N.__workletHash = 15721490201411;
      N.__initData = __initData4;
      const animatedStyle1 = obj3.useAnimatedStyle(N);
      const obj5 = { style: null, children: null };
      const items = [tmp.progressContainer, progress.style, animatedStyle];
      obj5.style = items;
      const items1 = [closure_7(closure_6, { style: tmp.progressTrack }), ,];
      const obj7 = { style: null };
      const items2 = [tmp.progressBarGlowLayer, animatedStyle1];
      obj7.style = items2;
      items1[1] = closure_7(visible(shouldSkipAnimation[8]).View, obj7);
      const obj8 = { style: null };
      const items3 = [tmp.progressBar, animatedStyle1];
      obj8.style = items3;
      items1[2] = closure_7(visible(shouldSkipAnimation[8]).View, obj8);
      obj5.children = items1;
      return closure_8(visible(shouldSkipAnimation[8]).View, obj5);
    };
export const PROGRESS_BAR_HEIGHT = 4;
