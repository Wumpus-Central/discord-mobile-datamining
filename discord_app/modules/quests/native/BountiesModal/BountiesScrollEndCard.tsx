// discord_app/modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import AnimatedEnterExitItemDefault from "../../../../design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import BountiesModalTransitionsRefactorExperiment from "../../experiments/BountiesModalTransitionsRefactorExperiment.tsx";
import useVisibilityTransition from "useVisibilityTransition.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function BountiesScrollEndCardContent(isScrollingInBoundsSharedValue) {
  ({ bounty, isActive } = isScrollingInBoundsSharedValue);
  isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
  const sourceQuestContent = isScrollingInBoundsSharedValue.sourceQuestContent;
  ({ visible, opacityStyle } = isScrollingInBoundsSharedValue);
  const tmp = closure_10();
  let obj = isActive(4373);
  class S {
    constructor() {
      obj = closure_1;
      if (closure_1 != null) {
        value = obj.get();
      }
      tmp2 = closure_0;
      tmp3 = closure_2;
      obj2 = closure_0(closure_2[7]);
      num = 0;
      if (isActive) {
        flag = true;
        num = 0;
        if (true !== value) {
          num = 1;
        }
      }
      obj = { opacity: obj2.withTiming(num, tmp2(tmp3[8]).timingStandard) };
      return obj;
    }
  }
  obj = {
    isScrollingInBoundsSharedValue,
    withTiming: isActive(4637).withTiming,
    isActive,
    timingStandard: isActive(4640).timingStandard,
  };
  S.__closure = obj;
  S.__workletHash = 4903386092677;
  S.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(S);
  obj = { style: null, pointerEvents: "box-none", children: null };
  const items = [tmp.container, opacityStyle];
  obj.style = items;
  const items1 = [
    closure_8(closure_5, { style: tmp.backdropTint, pointerEvents: "none" }),
    closure_8(isScrollingInBoundsSharedValue(5068), {
      colors: ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"],
      style: tmp.backdropGradient,
      pointerEvents: "none",
    }),
  ];
  const obj3 = { style: null, pointerEvents: "box-none", children: null };
  const items2 = [tmp.overlayContent, animatedStyle];
  obj3.style = items2;
  const items3 = [
    closure_8(isScrollingInBoundsSharedValue(15131), { bounty, sourceQuestContent, disabled: !isActive }),
  ];
  const obj5 = {
    style: tmp.endedCtaButtonsContainer,
    pointerEvents: "box-none",
    children: closure_8(isScrollingInBoundsSharedValue(15133), {
      bounty,
      visible,
      sourceQuestContent,
      onClose() {},
      showCloseButton: false,
      disabled: !isActive,
    }),
  };
  items3[1] = closure_8(closure_5, obj5);
  obj3.children = items3;
  items1[2] = closure_9(isScrollingInBoundsSharedValue(4373).View, obj3);
  obj.children = items1;
  return closure_9(isScrollingInBoundsSharedValue(4373).View, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5525).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let createStyles = fn(4636);
let closure_10 = createStyles.createStyles(() => {
  let obj = {
    container: null,
    backdropTint: null,
    backdropGradient: null,
    overlayContent: null,
    endedCtaButtonsContainer: null,
  };
  obj = {};
  const merged = Object.assign(React4.absoluteFillObject);
  obj.container = obj;
  obj = {};
  const merged1 = Object.assign(React4.absoluteFillObject);
  obj.backgroundColor = "rgba(0, 0, 0, 0.6)";
  obj.backdropTint = obj;
  const merged2 = Object.assign(React4.absoluteFillObject);
  obj.backdropGradient = {};
  const obj2 = {};
  const merged3 = Object.assign(React4.absoluteFillObject);
  obj2.justifyContent = "center";
  obj2.alignItems = "center";
  obj.overlayContent = obj2;
  const rect = {
    position: "absolute",
    left: nativeDefault.space.PX_16,
    right: nativeDefault.space.PX_16,
    bottom: nativeDefault.space.PX_16,
  };
  obj.endedCtaButtonsContainer = rect;
  return obj;
});
const entering = function t(value) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  return obj;
};
createStyles = { withTiming: fn(4637).withTiming, timingStandard: fn(4640).timingStandard };
entering.__closure = createStyles;
entering.__workletHash = 12127714049951;
entering.__initData = {
  code: "function BountiesScrollEndCardTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}",
};
const fn2 = function n(value, fn) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings", fn) };
  return obj;
};
createStyles = { withTiming: fn(4637).withTiming, timingStandard: fn(4640).timingStandard };
fn2.__closure = createStyles;
fn2.__workletHash = 7470211880124;
fn2.__initData = {
  code: "function BountiesScrollEndCardTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}",
};
const __initData = {
  code: "function BountiesScrollEndCardTsx3(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx");

export default function BountiesScrollEndCard(visible) {
  visible = visible.visible;
  let obj = BountiesModalTransitionsRefactorExperiment;
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(
    QuestsExperimentLocations.VIDEO_MODAL_MOBILE,
  );
  let obj1 = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = noop.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    return closure_1_8(BountiesScrollEndCardContent, obj);
  }, []);
  obj = { visible, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard };
  const visibilityTransition = useVisibilityTransition.useVisibilityTransition(obj);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    obj = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
    let tmp15;
    if (visible) {
      tmp15 = visible;
    }
    obj.item = tmp15;
    obj.entering = entering;
    obj.exiting = fn2;
    obj.renderItem = callback;
    shouldRender = React6(AnimatedEnterExitItemDefault, obj);
  } else if (shouldRender) {
    obj1 = {};
    let merged = Object.assign(visible);
    obj1.opacityStyle = tmp6;
    shouldRender = React6(BountiesScrollEndCardContent, obj1);
  }
  return shouldRender;
}
