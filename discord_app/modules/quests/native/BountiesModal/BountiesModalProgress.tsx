// discord_app/modules/quests/native/BountiesModal/BountiesModalProgress.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5170);
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
let closure_10 = {
  code: "(function BountiesModalProgressTsx1(){let[withTiming,visible,timingFast]=this.__closure;return{opacity:withTiming(visible?1:0,timingFast)};})",
};
let closure_11 = {
  code: "(function BountiesModalProgressTsx2(){let[withTiming,progress,shouldSkipAnimation,timingNone,timingFast]=this.__closure;return{width:withTiming(progress*100+\"%\",shouldSkipAnimation?timingNone:timingFast,'animate-always')};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalProgress.tsx");

export default function BountiesModalProgress(progress) {
  progress = progress.progress;
  ({ visible, style } = progress);
  const tmp = closure_9();
  [tmp3, tmp4] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(progress), 2);
  const first = tmp5[0];
  if (progress !== first) {
    tmp5[1](progress);
    tmp4(progress < first);
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  items = [closure_10, timing_timing.withTiming, visible, timingPresets.timingFast];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp11, tmp12, tmp13, tmp14] = items;
  class BountiesModalProgressTsx1 {
    constructor() {
      num = 0;
      tmp = closure_0;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items1 = [tmp12, tmp13, tmp14];
  BountiesModalProgressTsx1.__closure = items1;
  BountiesModalProgressTsx1.__workletHash = 13607903947935;
  BountiesModalProgressTsx1.__initData = tmp11;
  const animatedStyle = _mod1652.useAnimatedStyle(BountiesModalProgressTsx1);
  const items2 = [
    closure_11,
    timing_timing.withTiming,
    progress,
    tmp3,
    timingPresets.timingNone,
    timingPresets.timingFast,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items2;
  class BountiesModalProgressTsx2 {
    constructor() {
      obj = { width: closure_0(`${100 * closure_1}%`, closure_2 ? closure_3 : closure_4, "animate-always") };
      return obj;
    }
  }
  const items3 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  BountiesModalProgressTsx2.__closure = items3;
  BountiesModalProgressTsx2.__workletHash = 7029081522716;
  BountiesModalProgressTsx2.__initData = tmp16;
  const animatedStyle1 = _mod1652.useAnimatedStyle(BountiesModalProgressTsx2);
  const obj2 = { style: null, children: null };
  const items4 = [tmp.progressContainer, style, animatedStyle];
  obj2.style = items4;
  const items5 = [metroImportDefault(timestampProducer, { style: tmp.progressTrack }), ,];
  const obj4 = { style: null };
  const items6 = [tmp.progressBarGlowLayer, animatedStyle1];
  obj4.style = items6;
  items5[1] = metroImportDefault(_modDef1652.View, obj4);
  const obj5 = { style: null };
  const items7 = [tmp.progressBar, animatedStyle1];
  obj5.style = items7;
  items5[2] = metroImportDefault(_modDef1652.View, obj5);
  obj2.children = items5;
  return React5(_modDef1652.View, obj2);
}
export const PROGRESS_BAR_HEIGHT = 4;
