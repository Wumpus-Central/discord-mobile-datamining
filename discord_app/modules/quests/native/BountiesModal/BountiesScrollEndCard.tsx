// === Module 14834: BountiesScrollEndCard ===

// Module 14834 (BountiesScrollEndCard)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9647 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 14817 */;
import useVisibilityTransition from "useVisibilityTransition" /* 14818 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5623).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles(() => {
  const obj = { container: null, backdropTint: null, backdropGradient: null, overlayContent: null, endedCtaButtonsContainer: null };
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
  const rect = { position: "absolute", left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
  obj.endedCtaButtonsContainer = rect;
  return obj;
});
let entering = function n(value) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  return obj;
};
entering.__closure = { withTiming: fn(4891).withTiming, timingStandard: fn(4894).timingStandard };
entering.__workletHash = 12127714049951;
entering.__initData = { code: "function BountiesScrollEndCardTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
let fn2 = function t(value, fn) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings", fn) };
  return obj;
};
let obj2 = { withTiming: fn(4891).withTiming, timingStandard: fn(4894).timingStandard };
fn2.__closure = { withTiming: fn(4891).withTiming, timingStandard: fn(4894).timingStandard };
fn2.__workletHash = 7470211880124;
fn2.__initData = { code: "function BountiesScrollEndCardTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}" };
const __initData = { code: "function BountiesScrollEndCardTsx3(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const __initData2 = { code: "function BountiesScrollEndCardTsx4(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((isScrollingInBoundsSharedValue) => {
  const cResult = isActive(576).c(33);
  ({ bounty, visible, isActive } = isScrollingInBoundsSharedValue);
  isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
  ({ sourceQuestContent, opacityStyle } = isScrollingInBoundsSharedValue);
  const tmp3 = closure_10();
  const obj = isActive(576);
  const fn = function t() {
    if (isScrollingInBoundsSharedValue != null) {
      value = isScrollingInBoundsSharedValue.get();
    }
    let num = 0;
    if (isActive) {
      num = 0;
      if (true !== value) {
        num = 1;
      }
    }
    return { opacity: timing.withTiming(num, timingPresets.timingStandard) };
  };
  let obj2 = isActive(4612);
  fn.__closure = { isScrollingInBoundsSharedValue, withTiming: isActive(4891).withTiming, isActive, timingStandard: isActive(4894).timingStandard };
  fn.__workletHash = 4903386092677;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  if (cResult[0] === opacityStyle) {
    if (cResult[3] !== tmp3.backdropTint) {
      const obj4 = { style: tmp3.backdropTint, pointerEvents: "none" };
      const tmp9 = closure_8(closure_5, obj4);
      cResult[3] = tmp3.backdropTint;
      cResult[4] = tmp9;
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"];
      cResult[5] = items;
      let tmp11 = items;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== tmp3.backdropGradient) {
      const obj5 = { colors: tmp11, style: tmp3.backdropGradient, pointerEvents: "none" };
      const tmp15 = closure_8(isScrollingInBoundsSharedValue(5605), obj5);
      cResult[6] = tmp3.backdropGradient;
      cResult[7] = tmp15;
    }
    if (cResult[8] === animatedStyle) {
      if (cResult[11] === bounty) {
        if (cResult[12] === sourceQuestContent) {
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class V {
              constructor() {
                return;
              }
            }
            cResult[15] = V;
          } else {
            class V {
              constructor() {
                return;
              }
            }
          }
          if (cResult[16] === bounty) {
            class V {
              constructor() {
                return;
              }
            }
          }
          const obj6 = { bounty, visible, sourceQuestContent, onClose: V, showCloseButton: false, disabled: !isActive };
          const tmp27 = closure_8(isScrollingInBoundsSharedValue(14838), obj6);
          cResult[16] = bounty;
          cResult[17] = sourceQuestContent;
          cResult[18] = !isActive;
          cResult[19] = visible;
          cResult[20] = tmp27;
        }
      }
      const obj7 = { bounty, sourceQuestContent, disabled: !isActive };
      const tmp21 = closure_8(isScrollingInBoundsSharedValue(14835), obj7);
      cResult[11] = bounty;
      cResult[12] = sourceQuestContent;
      cResult[13] = !isActive;
      cResult[14] = tmp21;
    }
    const items1 = [tmp3.overlayContent, animatedStyle];
    cResult[8] = animatedStyle;
    cResult[9] = tmp3.overlayContent;
    cResult[10] = items1;
  }
  const items2 = [tmp3.container, opacityStyle];
  cResult[0] = opacityStyle;
  cResult[1] = tmp3.container;
  cResult[2] = items2;
  const obj3 = { isScrollingInBoundsSharedValue, withTiming: isActive(4891).withTiming, isActive, timingStandard: isActive(4894).timingStandard };
}) : ((isScrollingInBoundsSharedValue) => {
  ({ bounty, isActive } = isScrollingInBoundsSharedValue);
  isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
  const sourceQuestContent = isScrollingInBoundsSharedValue.sourceQuestContent;
  ({ visible, opacityStyle } = isScrollingInBoundsSharedValue);
  const tmp = closure_10();
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
      obj1 = { opacity: obj2.withTiming(num, tmp2(tmp3[8]).timingStandard) };
      return obj1;
    }
  }
  const obj = isActive(4612);
  S.__closure = { isScrollingInBoundsSharedValue, withTiming: isActive(4891).withTiming, isActive, timingStandard: isActive(4894).timingStandard };
  S.__workletHash = 6897254818210;
  S.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(S);
  const obj3 = { style: null, pointerEvents: "box-none", children: null };
  const items = [tmp.container, opacityStyle];
  obj3.style = items;
  const items1 = [closure_8(closure_5, { style: tmp.backdropTint, pointerEvents: "none" }), closure_8(isScrollingInBoundsSharedValue(5605), { colors: ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"], style: tmp.backdropGradient, pointerEvents: "none" }), ];
  const obj6 = { style: null, pointerEvents: "box-none", children: null };
  const items2 = [tmp.overlayContent, animatedStyle];
  obj6.style = items2;
  const items3 = [closure_8(isScrollingInBoundsSharedValue(14835), { bounty, sourceQuestContent, disabled: !isActive }), ];
  const obj8 = {
    style: tmp.endedCtaButtonsContainer,
    pointerEvents: "box-none",
    children: closure_8(isScrollingInBoundsSharedValue(14838), {
      bounty,
      visible,
      sourceQuestContent,
      onClose() {

      },
      showCloseButton: false,
      disabled: !isActive
    })
  };
  items3[1] = closure_8(closure_5, obj8);
  obj6.children = items3;
  items1[2] = closure_9(isScrollingInBoundsSharedValue(4612).View, obj6);
  obj3.children = items1;
  return closure_9(isScrollingInBoundsSharedValue(4612).View, obj3);
});
ReactCompilerGating = fn(558);
let obj3 = { withTiming: fn(4891).withTiming, timingStandard: fn(4894).timingStandard };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const cResult = c.c(12);
  visible = visible.visible;
  const isBountiesModalTransitionsRefactorEnabled = BountiesModalTransitionsRefactorExperiment.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    entering = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = entering;
    tmp5 = items;
    tmp6 = entering;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    fn2 = function b(arg0, opacityStyle) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.opacityStyle = opacityStyle;
      return closure_1_8(closure_1_15, obj);
    };
    cResult[2] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== visible) {
    const obj3 = { visible, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard };
    cResult[3] = visible;
    cResult[4] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult = initialize;
  const visibilityTransition = useVisibilityTransition.useVisibilityTransition(tmp10);
  ({ opacityStyle, shouldRender } = visibilityTransition);
  if (isBountiesModalTransitionsRefactorEnabled) {
    let tmp19;
    if (visible) {
      tmp19 = visible;
    }
    if (cResult[5] === tmp19) {
      if (cResult[6] === stateFromStores) {
        let tmp20 = cResult[7];
      }
      return tmp20;
    }
    const obj4 = { useReducedMotion: stateFromStores, item: tmp19, entering, exiting: fn2, renderItem: tmp9 };
    const tmp25 = closure_1_8(AnimatedEnterExitItemDefault, obj4);
    cResult[5] = tmp19;
    cResult[6] = stateFromStores;
    cResult[7] = tmp25;
    tmp20 = tmp25;
  } else {
    if (cResult[8] === opacityStyle) {
      if (cResult[9] === visible) {
        if (cResult[10] === shouldRender) {
          let tmp12 = cResult[11];
        }
        return tmp12;
      }
    }
    let tmp13 = shouldRender;
    if (shouldRender) {
      const obj5 = {};
      let merged = Object.assign(visible);
      obj5.opacityStyle = opacityStyle;
      tmp13 = closure_1_8(closure_15, obj5);
    }
    cResult[8] = opacityStyle;
    cResult[9] = visible;
    cResult[10] = shouldRender;
    cResult[11] = tmp13;
    tmp12 = tmp13;
  }
  const tmpResult2 = useVisibilityTransition;
}) : ((visible) => {
  visible = visible.visible;
  const isBountiesModalTransitionsRefactorEnabled = BountiesModalTransitionsRefactorExperiment.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = noop.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    return closure_1_8(closure_1_15, obj);
  }, []);
  const obj3 = useVisibilityTransition;
  const visibilityTransition = obj3.useVisibilityTransition({ visible, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard });
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj5 = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
    let tmp15;
    if (visible) {
      tmp15 = visible;
    }
    obj5.item = tmp15;
    obj5.entering = entering;
    obj5.exiting = fn2;
    obj5.renderItem = callback;
    shouldRender = closure_1_8(AnimatedEnterExitItemDefault, obj5);
  } else if (shouldRender) {
    const obj6 = {};
    let merged = Object.assign(visible);
    obj6.opacityStyle = tmp6;
    shouldRender = closure_1_8(closure_15, obj6);
  }
  return shouldRender;
});