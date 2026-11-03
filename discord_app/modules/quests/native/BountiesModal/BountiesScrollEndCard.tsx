// discord_app/modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import LinearGradientDefault from "../../../../../_runtime/05710_LinearGradient.js";
import AnimatedEnterExitItemDefault from "../../../../design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import BountiesModalTransitionsRefactorExperiment from "../../experiments/BountiesModalTransitionsRefactorExperiment.tsx";
import useVisibilityTransition from "useVisibilityTransition.tsx";
import BountiesEndCardPressableCtaDefault from "BountiesEndCardPressableCta.tsx";
import BountiesModalEndedCtaButtonsDefault from "BountiesModalEndedCtaButtons.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const _modDef1652 = _mod1652;

require = fn;
function BountiesScrollEndCardContent(arg0) {
  ({ bounty, isActive, sourceQuestContent } = arg0);
  ({ visible, isScrollingInBoundsSharedValue, opacityStyle } = arg0);
  const tmp = closure_10();
  items = [
    closure_13,
    isScrollingInBoundsSharedValue,
    timing_timing.withTiming,
    isActive,
    timingPresets.timingStandard,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  class BountiesScrollEndCardTsx3 {
    constructor() {
      obj = closure_0;
      if (closure_0 != null) {
        value = obj.get();
      }
      num = 0;
      tmp2 = closure_1;
      if (closure_2) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj1 = { opacity: tmp2(num, closure_3) };
      return obj1;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7];
  BountiesScrollEndCardTsx3.__closure = items1;
  BountiesScrollEndCardTsx3.__workletHash = 11141440579356;
  BountiesScrollEndCardTsx3.__initData = tmp3;
  const animatedStyle = _mod1652.useAnimatedStyle(BountiesScrollEndCardTsx3);
  const obj2 = { style: null, pointerEvents: "box-none", children: null };
  const items2 = [tmp.container, opacityStyle];
  obj2.style = items2;
  const items3 = [
    React6(hasOwnProperty, { style: tmp.backdropTint, pointerEvents: "none" }),
    React6(LinearGradientDefault, {
      colors: ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"],
      style: tmp.backdropGradient,
      pointerEvents: "none",
    }),
  ];
  const obj5 = { style: null, pointerEvents: "box-none", children: null };
  const items4 = [tmp.overlayContent, animatedStyle];
  obj5.style = items4;
  const items5 = [React6(BountiesEndCardPressableCtaDefault, { bounty, sourceQuestContent, disabled: !isActive })];
  const obj7 = {
    style: tmp.endedCtaButtonsContainer,
    pointerEvents: "box-none",
    children: React6(BountiesModalEndedCtaButtonsDefault, {
      bounty,
      visible,
      sourceQuestContent,
      onClose() {},
      showCloseButton: false,
      disabled: !isActive,
    }),
  };
  items5[1] = React6(hasOwnProperty, obj7);
  obj5.children = items5;
  items3[2] = React7(_modDef1652.View, obj5);
  obj2.children = items3;
  return React7(_modDef1652.View, obj2);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(6901).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5141);
let closure_10 = createStyles.createStyles(() => {
  const obj = {
    container: null,
    backdropTint: null,
    backdropGradient: null,
    overlayContent: null,
    endedCtaButtonsContainer: null,
  };
  const merged = Object.assign(React4.absoluteFillObject);
  obj.container = {};
  const obj3 = {};
  const merged1 = Object.assign(React4.absoluteFillObject);
  obj3.backgroundColor = "rgba(0, 0, 0, 0.6)";
  obj.backdropTint = obj3;
  const merged2 = Object.assign(React4.absoluteFillObject);
  obj.backdropGradient = {};
  const obj5 = {};
  const merged3 = Object.assign(React4.absoluteFillObject);
  obj5.justifyContent = "center";
  obj5.alignItems = "center";
  obj.overlayContent = obj5;
  const rect = {
    position: "absolute",
    left: nativeDefault.space.PX_16,
    right: nativeDefault.space.PX_16,
    bottom: nativeDefault.space.PX_16,
  };
  obj.endedCtaButtonsContainer = rect;
  return obj;
});
let items = [
  {
    code: "(function BountiesScrollEndCardTsx1(visible){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};})",
  },
  fn(5377).withTiming,
  fn(5380).timingStandard,
];
let closure_129_0;
let closure_129_1;
[tmp4, tmp5, tmp6] = items;
class BountiesScrollEndCardTsx1 {
  constructor(arg0) {
    obj = { opacity: closure_0(global, closure_1, "respect-motion-settings") };
    return obj;
  }
}
let items1 = [tmp5, tmp6];
BountiesScrollEndCardTsx1.__closure = items1;
BountiesScrollEndCardTsx1.__workletHash = 17037395898182;
BountiesScrollEndCardTsx1.__initData = tmp4;
let items2 = [
  {
    code: "(function BountiesScrollEndCardTsx2(visible,cleanUp){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};})",
  },
  fn(5377).withTiming,
  fn(5380).timingStandard,
];
let closure_130_0;
let closure_130_1;
[tmp7, tmp8, tmp9] = items2;
class BountiesScrollEndCardTsx2 {
  constructor(arg0, arg1) {
    obj = { opacity: closure_0(global, closure_1, "respect-motion-settings", fn) };
    return obj;
  }
}
let items3 = [tmp8, tmp9];
BountiesScrollEndCardTsx2.__closure = items3;
BountiesScrollEndCardTsx2.__workletHash = 14533750403909;
BountiesScrollEndCardTsx2.__initData = tmp7;
let closure_13 = {
  code: "(function BountiesScrollEndCardTsx3(){let[isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard]=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx");

export default function BountiesScrollEndCard(visible) {
  visible = visible.visible;
  const isBountiesModalTransitionsRefactorEnabled =
    BountiesModalTransitionsRefactorExperiment.useIsBountiesModalTransitionsRefactorEnabled(
      QuestsExperimentLocations.VIDEO_MODAL_MOBILE,
    );
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = noop.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    return closure_1_8(BountiesScrollEndCardContent, obj);
  }, []);
  const obj3 = useVisibilityTransition;
  const visibilityTransition = obj3.useVisibilityTransition({
    visible,
    entranceTiming: timingPresets.timingStandard,
    exitTiming: timingPresets.timingStandard,
  });
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj5 = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
    let tmp15;
    if (visible) {
      tmp15 = visible;
    }
    obj5.item = tmp15;
    obj5.entering = BountiesScrollEndCardTsx1;
    obj5.exiting = BountiesScrollEndCardTsx2;
    obj5.renderItem = callback;
    shouldRender = React6(AnimatedEnterExitItemDefault, obj5);
  } else if (shouldRender) {
    const obj6 = {};
    let merged = Object.assign(visible);
    obj6.opacityStyle = tmp6;
    shouldRender = React6(BountiesScrollEndCardContent, obj6);
  }
  return shouldRender;
}
