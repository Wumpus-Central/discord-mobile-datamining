// discord_app/modules/quests/native/BountiesModal/BountiesModalProgress.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  let obj2;
  let rect;
  let rect1;
  const obj = { progressContainer: { height: 4 }, progressTrack: obj2, progressBar: rect, progressBarGlowLayer: rect1 };
  obj2 = {
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
    opacity: 0.54,
  };
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  rect = {
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
  rect1 = {
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (progress) => {
      let items;
      let items1;
      let items2;
      let shouldSkipAnimation;
      let tmp7;
      const tmp = progress;
      const tmp2 = shouldSkipAnimation;
      let obj = progress(shouldSkipAnimation[7]);
      const cResult = obj.c(17);
      progress = progress.progress;
      const visible = progress.visible;
      const style = progress.style;
      const tmp4 = closure_9();
      [shouldSkipAnimation, tmp7] = react.useState(false);
      const tmp8 = _slicedToArray(react.useState(progress), 2);
      const first1 = tmp8[0];
      if (progress !== first1) {
        tmp8[1](progress);
        tmp7(progress < first1);
      }
      const tmpResult = tmp(tmp2[8]);
      class R {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          tmp3 = closure_0(closure_2[9]);
          num = 0;
          withTiming = tmp3.withTiming;
          if (visible) {
            num = 1;
          }
          obj = { opacity: withTiming(num, tmp(tmp2[10]).timingFast) };
          return obj;
        }
      }
      R.__closure = { withTiming: tmp(tmp2[9]).withTiming, visible, timingFast: tmp(tmp2[10]).timingFast };
      R.__workletHash = 5158131592262;
      R.__initData = __initData;
      ({ withTiming: tmp(tmp2[9]).withTiming, visible, timingFast: tmp(tmp2[10]).timingFast });
      const animatedStyle = tmpResult.useAnimatedStyle(R);
      const tmpResult2 = tmp(tmp2[8]);
      class A {
        constructor() {
          tmp = closure_0(closure_2[9]);
          withTiming = tmp.withTiming;
          result = 100 * progress;
          tmp3 = closure_0(closure_2[10]);
          obj = { width: withTiming(`${tmp2}%`, closure_2 ? tmp3.timingNone : tmp3.timingFast, "animate-always") };
          return obj;
        }
      }
      A.__closure = {
        withTiming: tmp(tmp2[9]).withTiming,
        progress,
        shouldSkipAnimation,
        timingNone: tmp(tmp2[10]).timingNone,
        timingFast: tmp(tmp2[10]).timingFast,
      };
      A.__workletHash = 6312952981669;
      A.__initData = __initData2;
      ({
        withTiming: tmp(tmp2[9]).withTiming,
        progress,
        shouldSkipAnimation,
        timingNone: tmp(tmp2[10]).timingNone,
        timingFast: tmp(tmp2[10]).timingFast,
      });
      const animatedStyle1 = tmpResult2.useAnimatedStyle(A);
      if (cResult[0] === style) {
        if (cResult[1] === tmp4.progressContainer) {
          let tmp14;
          let tmp15;
          if (cResult[2] === animatedStyle) {
            tmp14 = cResult[3];
          }
          if (cResult[4] !== tmp4.progressTrack) {
            const obj4 = { style: tmp4.progressTrack };
            const tmp18 = closure_7(closure_6, obj4);
            let num = 4;
            cResult[4] = tmp4.progressTrack;
            cResult[5] = tmp18;
            tmp15 = tmp18;
          } else {
            tmp15 = cResult[5];
          }
          if (cResult[6] === animatedStyle1) {
            let tmp19;
            if (cResult[7] === tmp4.progressBarGlowLayer) {
              tmp19 = cResult[8];
            }
            if (cResult[9] === animatedStyle1) {
              let tmp23;
              if (cResult[10] === tmp4.progressBar) {
                tmp23 = cResult[11];
              }
              if (cResult[12] === tmp14) {
                if (cResult[13] === tmp15) {
                  if (cResult[14] === tmp19) {
                    let tmp27;
                    if (cResult[15] === tmp23) {
                      tmp27 = cResult[16];
                    }
                    return tmp27;
                  }
                }
              }
              const obj5 = { style: tmp14, children: items };
              items = [tmp15, tmp19, tmp23];
              const tmp30 = closure_8(visible(tmp2[8]).View, obj5);
              cResult[12] = tmp14;
              cResult[13] = tmp15;
              cResult[14] = tmp19;
              cResult[15] = tmp23;
              cResult[16] = tmp30;
              tmp27 = tmp30;
            }
            const obj6 = { style: items1 };
            items1 = [tmp4.progressBar, animatedStyle1];
            const tmp26 = closure_7(visible(tmp2[8]).View, obj6);
            cResult[9] = animatedStyle1;
            cResult[10] = tmp4.progressBar;
            cResult[11] = tmp26;
            tmp23 = tmp26;
          }
          const obj7 = { style: items2 };
          items2 = [tmp4.progressBarGlowLayer, animatedStyle1];
          const tmp22 = closure_7(visible(tmp2[8]).View, obj7);
          cResult[6] = animatedStyle1;
          cResult[7] = tmp4.progressBarGlowLayer;
          cResult[8] = tmp22;
          tmp19 = tmp22;
        }
      }
      const items3 = [tmp4.progressContainer, style, animatedStyle];
      cResult[0] = style;
      cResult[1] = tmp4.progressContainer;
      cResult[2] = animatedStyle;
      cResult[3] = items3;
      tmp14 = items3;
    }
  : (progress) => {
      let items;
      let items1;
      let items2;
      let items3;
      let shouldSkipAnimation;
      let tmp4;
      progress = progress.progress;
      const visible = progress.visible;
      shouldSkipAnimation = undefined;
      const style = progress.style;
      const tmp = closure_9();
      [shouldSkipAnimation, tmp4] = react.useState(false);
      const tmp5 = _slicedToArray(react.useState(progress), 2);
      const first1 = tmp5[0];
      if (progress !== first1) {
        tmp5[1](progress);
        tmp4(progress < first1);
      }
      let obj = progress(shouldSkipAnimation[8]);
      const fn = function v() {
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (visible) {
          num = 1;
        }
        const obj = { opacity: withTiming(num, timingPresets.timingFast) };
        return obj;
      };
      fn.__closure = {
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        visible,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      };
      fn.__workletHash = 3136948411652;
      fn.__initData = __initData3;
      ({
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        visible,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      });
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj3 = progress(shouldSkipAnimation[8]);
      class N {
        constructor() {
          const withTiming = timing.withTiming;
          const result = 100 * progress;
          timing;
          const tmp3 = timingPresets;
          const obj = { width: withTiming(`${tmp2}%`, first ? tmp3.timingNone : tmp3.timingFast, "animate-always") };
          return obj;
        }
      }
      N.__closure = {
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        progress,
        shouldSkipAnimation,
        timingNone: progress(shouldSkipAnimation[10]).timingNone,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      };
      N.__workletHash = 15721490201411;
      N.__initData = __initData4;
      ({
        withTiming: progress(shouldSkipAnimation[9]).withTiming,
        progress,
        shouldSkipAnimation,
        timingNone: progress(shouldSkipAnimation[10]).timingNone,
        timingFast: progress(shouldSkipAnimation[10]).timingFast,
      });
      const animatedStyle1 = obj3.useAnimatedStyle(N);
      const obj5 = { style: items, children: items1 };
      items = [tmp.progressContainer, style, animatedStyle];
      const obj6 = { style: tmp.progressTrack };
      const View = visible(shouldSkipAnimation[8]).View;
      items1 = [closure_7(closure_6, obj6), ,];
      const obj7 = { style: items2 };
      items2 = [tmp.progressBarGlowLayer, animatedStyle1];
      items1[1] = closure_7(visible(shouldSkipAnimation[8]).View, obj7);
      const obj8 = { style: items3 };
      items3 = [tmp.progressBar, animatedStyle1];
      items1[2] = closure_7(visible(shouldSkipAnimation[8]).View, obj8);
      return closure_8(View, obj5);
    };
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalProgress.tsx");

export default tmp4;
export const PROGRESS_BAR_HEIGHT = 4;
