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
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles(() => {
  let obj = { progressContainer: { height: 4 }, progressTrack: null, progressBar: null, progressBarGlowLayer: null };
  obj = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.borderRadius = nativeDefault.radii.round;
  obj.backgroundColor = nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
  obj.opacity = 0.54;
  obj.progressTrack = obj;
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
  code: "function BountiesModalProgressTsx2(){const{withTiming,progress,shouldSkipAnimation,timingNone,timingFast}=this.__closure;return{width:withTiming(progress*100+\"%\",shouldSkipAnimation?timingNone:timingFast,'animate-always')};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalProgress.tsx");

export default function BountiesModalProgress(progress) {
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
  let obj = progress(shouldSkipAnimation[6]);
  class O {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[7]);
      num = 0;
      if (visible) {
        num = 1;
      }
      obj = { opacity: obj.withTiming(num, tmp(tmp2[8]).timingFast) };
      return obj;
    }
  }
  obj = {
    withTiming: progress(shouldSkipAnimation[7]).withTiming,
    visible,
    timingFast: progress(shouldSkipAnimation[8]).timingFast,
  };
  O.__closure = obj;
  O.__workletHash = 5158131592262;
  O.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(O);
  let obj2 = progress(shouldSkipAnimation[6]);
  class B {
    constructor() {
      obj = closure_0(closure_2[7]);
      result = 100 * progress;
      tmp2 = closure_0(closure_2[8]);
      obj = { width: obj.withTiming(`${tmp}%`, closure_2 ? tmp2.timingNone : tmp2.timingFast, "animate-always") };
      return obj;
    }
  }
  obj = {
    withTiming: progress(shouldSkipAnimation[7]).withTiming,
    progress,
    shouldSkipAnimation,
    timingNone: progress(shouldSkipAnimation[8]).timingNone,
    timingFast: progress(shouldSkipAnimation[8]).timingFast,
  };
  B.__closure = obj;
  B.__workletHash = 15586067343237;
  B.__initData = __initData2;
  const animatedStyle1 = obj2.useAnimatedStyle(B);
  const obj1 = { style: null, children: null };
  const items = [tmp.progressContainer, progress.style, animatedStyle];
  obj1.style = items;
  obj2 = { style: tmp.progressTrack };
  const items1 = [closure_7(closure_6, obj2), ,];
  const obj3 = { style: null };
  const items2 = [tmp.progressBarGlowLayer, animatedStyle1];
  obj3.style = items2;
  items1[1] = closure_7(visible(shouldSkipAnimation[6]).View, obj3);
  const obj4 = { style: null };
  const items3 = [tmp.progressBar, animatedStyle1];
  obj4.style = items3;
  items1[2] = closure_7(visible(shouldSkipAnimation[6]).View, obj4);
  obj1.children = items1;
  return closure_8(visible(shouldSkipAnimation[6]).View, obj1);
}
export const PROGRESS_BAR_HEIGHT = 4;
