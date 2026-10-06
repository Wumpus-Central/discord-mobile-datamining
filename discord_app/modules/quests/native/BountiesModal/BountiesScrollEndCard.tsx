// discord_app/modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import AnimatedEnterExitItemDefault from "../../../../design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import BountiesModalTransitionsRefactorExperiment from "../../experiments/BountiesModalTransitionsRefactorExperiment.tsx";
import useVisibilityTransition from "useVisibilityTransition.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles(() => {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let rect;
  const obj = {
    container: obj2,
    backdropTint: obj3,
    backdropGradient: obj4,
    overlayContent: obj5,
    endedCtaButtonsContainer: rect,
  };
  obj2 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj3 = { backgroundColor: "rgba(0, 0, 0, 0.6)" };
  const merged1 = Object.assign(React3.absoluteFillObject);
  obj4 = {};
  const merged2 = Object.assign(React3.absoluteFillObject);
  obj5 = { justifyContent: "center", alignItems: "center" };
  const merged3 = Object.assign(React3.absoluteFillObject);
  rect = {
    position: "absolute",
    left: nativeDefault.space.PX_16,
    right: nativeDefault.space.PX_16,
    bottom: nativeDefault.space.PX_16,
  };
  return obj;
});
let entering = function n(sharedValue) {
  let obj2;
  const obj = { opacity: obj2.withTiming(sharedValue, timingPresets.timingStandard, "respect-motion-settings") };
  obj2 = timing;
  return obj;
};
let obj = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
entering.__closure = obj;
entering.__workletHash = 12127714049951;
entering.__initData = {
  code: "function BountiesScrollEndCardTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}",
};
let fn2 = function t(sharedValue, fn) {
  let obj2;
  const obj = { opacity: obj2.withTiming(sharedValue, timingPresets.timingStandard, "respect-motion-settings", fn) };
  obj2 = timing;
  return obj;
};
let obj2 = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
fn2.__closure = obj2;
fn2.__workletHash = 7470211880124;
fn2.__initData = {
  code: "function BountiesScrollEndCardTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}",
};
const __initData = {
  code: "function BountiesScrollEndCardTsx3(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}",
};
const __initData2 = {
  code: "function BountiesScrollEndCardTsx4(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isScrollingInBoundsSharedValue) => {
      let bounty;
      let isActive;
      let opacityStyle;
      let sourceQuestContent;
      let visible;
      const obj = isActive(576);
      const cResult = obj.c(33);
      ({ bounty, visible, isActive } = isScrollingInBoundsSharedValue);
      isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
      ({ sourceQuestContent, opacityStyle } = isScrollingInBoundsSharedValue);
      const tmp3 = closure_10();
      let obj2 = isActive(4618);
      const fn = function t() {
        let value;
        if (isScrollingInBoundsSharedValue != null) {
          value = isScrollingInBoundsSharedValue.get();
        }
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (isActive) {
          num = 0;
          if (true !== value) {
            num = 1;
          }
        }
        const obj2 = { opacity: withTiming(num, timingPresets.timingStandard) };
        return obj2;
      };
      fn.__closure = {
        isScrollingInBoundsSharedValue,
        withTiming: isActive(4897).withTiming,
        isActive,
        timingStandard: isActive(4900).timingStandard,
      };
      fn.__workletHash = 4903386092677;
      fn.__initData = __initData;
      ({
        isScrollingInBoundsSharedValue,
        withTiming: isActive(4897).withTiming,
        isActive,
        timingStandard: isActive(4900).timingStandard,
      });
      const animatedStyle = obj2.useAnimatedStyle(fn);
      if (cResult[0] === opacityStyle) {
        let tmp11;
        if (cResult[3] !== tmp3.backdropTint) {
          const obj4 = { style: tmp3.backdropTint, pointerEvents: "none" };
          let num = 3;
          cResult[3] = tmp3.backdropTint;
          cResult[4] = closure_8(closure_5, obj4);
          const tmp9 = closure_8(closure_5, obj4);
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items = ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"];
          cResult[5] = items;
          tmp11 = items;
        } else {
          tmp11 = cResult[5];
        }
        if (cResult[6] !== tmp3.backdropGradient) {
          const obj5 = { colors: tmp11, style: tmp3.backdropGradient, pointerEvents: "none" };
          cResult[6] = tmp3.backdropGradient;
          cResult[7] = closure_8(isScrollingInBoundsSharedValue(5612), obj5);
          const tmp15 = closure_8(isScrollingInBoundsSharedValue(5612), obj5);
        }
        if (cResult[8] === animatedStyle) {
          if (cResult[11] === bounty) {
            if (cResult[12] === sourceQuestContent) {
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class V {
                  constructor() {}
                }
                cResult[15] = V;
              } else {
                class V {
                  constructor() {}
                }
              }
              if (cResult[16] === bounty) {
                class V {
                  constructor() {}
                }
              }
              const obj6 = {
                bounty,
                visible,
                sourceQuestContent,
                onClose: V,
                showCloseButton: false,
                disabled: !isActive,
              };
              cResult[16] = bounty;
              cResult[17] = sourceQuestContent;
              cResult[18] = !isActive;
              cResult[19] = visible;
              cResult[20] = closure_8(isScrollingInBoundsSharedValue(14854), obj6);
              const tmp27 = closure_8(isScrollingInBoundsSharedValue(14854), obj6);
            }
          }
          const obj7 = { bounty, sourceQuestContent, disabled: !isActive };
          cResult[11] = bounty;
          cResult[12] = sourceQuestContent;
          cResult[13] = !isActive;
          cResult[14] = closure_8(isScrollingInBoundsSharedValue(14851), obj7);
          const tmp21 = closure_8(isScrollingInBoundsSharedValue(14851), obj7);
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
    }
  : (isScrollingInBoundsSharedValue) => {
      let bounty;
      let isActive;
      let items;
      let items1;
      let items2;
      let items3;
      let obj9;
      let opacityStyle;
      let visible;
      ({ bounty, isActive } = isScrollingInBoundsSharedValue);
      isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
      const sourceQuestContent = isScrollingInBoundsSharedValue.sourceQuestContent;
      ({ visible, opacityStyle } = isScrollingInBoundsSharedValue);
      const tmp = closure_10();
      const obj = isActive(4618);
      class S {
        constructor() {
          let value;
          if (isScrollingInBoundsSharedValue != null) {
            value = isScrollingInBoundsSharedValue.get();
          }
          let num = 0;
          const withTiming = timing.withTiming;
          timing;
          if (isActive) {
            num = 0;
            if (true !== value) {
              num = 1;
            }
          }
          const obj2 = { opacity: withTiming(num, timingPresets.timingStandard) };
          return obj2;
        }
      }
      let obj2 = {
        isScrollingInBoundsSharedValue,
        withTiming: isActive(4897).withTiming,
        isActive,
        timingStandard: isActive(4900).timingStandard,
      };
      S.__closure = obj2;
      S.__workletHash = 6897254818210;
      S.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(S);
      const obj3 = { style: items, pointerEvents: "box-none", children: items1 };
      items = [tmp.container, opacityStyle];
      const obj4 = { style: tmp.backdropTint, pointerEvents: "none" };
      const View = isScrollingInBoundsSharedValue(4618).View;
      items1 = [closure_8(closure_5, obj4), ,];
      const obj5 = {
        colors: ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"],
        style: tmp.backdropGradient,
        pointerEvents: "none",
      };
      items1[1] = closure_8(isScrollingInBoundsSharedValue(5612), obj5);
      const obj6 = { style: items2, pointerEvents: "box-none", children: items3 };
      items2 = [tmp.overlayContent, animatedStyle];
      const View2 = isScrollingInBoundsSharedValue(4618).View;
      items3 = [,];
      const obj7 = { bounty, sourceQuestContent, disabled: !isActive };
      items3[0] = closure_8(isScrollingInBoundsSharedValue(14851), obj7);
      const obj8 = {
        style: tmp.endedCtaButtonsContainer,
        pointerEvents: "box-none",
        children: closure_8(isScrollingInBoundsSharedValue(14854), obj9),
      };
      obj9 = {
        bounty,
        visible,
        sourceQuestContent,
        onClose() {},
        showCloseButton: false,
        disabled: !isActive,
      };
      items3[1] = closure_8(closure_5, obj8);
      items1[2] = closure_9(View2, obj6);
      return closure_9(View, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      let opacityStyle;
      let shouldRender;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp9;
      let useReducedMotion;
      let obj = react2;
      const cResult = obj.c(12);
      visible = visible.visible;
      const obj2 = BountiesModalTransitionsRefactorExperiment;
      const isBountiesModalTransitionsRefactorEnabled = obj2.useIsBountiesModalTransitionsRefactorEnabled(
        QuestsExperimentLocations.VIDEO_MODAL_MOBILE,
      );
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        fn2 = function b(arg0, opacityStyle) {
          const obj = { opacityStyle };
          const merged = Object.assign(arg0);
          return closure_1_8(closure_1_15, obj);
        };
        cResult[2] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== visible) {
        const obj3 = {
          visible,
          entranceTiming: timingPresets.timingStandard,
          exitTiming: timingPresets.timingStandard,
        };
        cResult[3] = visible;
        cResult[4] = obj3;
        tmp10 = obj3;
      } else {
        tmp10 = cResult[4];
      }
      const tmpResult2 = useVisibilityTransition;
      const visibilityTransition = tmpResult2.useVisibilityTransition(tmp10);
      ({ opacityStyle, shouldRender } = visibilityTransition);
      if (isBountiesModalTransitionsRefactorEnabled) {
        let tmp19;
        if (visible) {
          tmp19 = visible;
        }
        if (cResult[5] === tmp19) {
          let tmp20;
          if (cResult[6] === stateFromStores) {
            tmp20 = cResult[7];
          }
          return tmp20;
        }
        const obj4 = { useReducedMotion: stateFromStores, item: tmp19, entering, exiting: fn2, renderItem: tmp9 };
        const tmp25 = metroImportAll(AnimatedEnterExitItemDefault, obj4);
        cResult[5] = tmp19;
        cResult[6] = stateFromStores;
        cResult[7] = tmp25;
        tmp20 = tmp25;
      } else {
        if (cResult[8] === opacityStyle) {
          if (cResult[9] === visible) {
            let tmp12;
            if (cResult[10] === shouldRender) {
              tmp12 = cResult[11];
            }
            return tmp12;
          }
        }
        let tmp13 = shouldRender;
        if (tmp13) {
          const obj5 = { opacityStyle };
          let merged = Object.assign(visible);
          tmp13 = metroImportAll(closure_15, obj5);
        }
        cResult[8] = opacityStyle;
        cResult[9] = visible;
        cResult[10] = shouldRender;
        cResult[11] = tmp13;
        tmp12 = tmp13;
      }
    }
  : (visible) => {
      let tmp15;
      let useReducedMotion;
      visible = visible.visible;
      let obj = BountiesModalTransitionsRefactorExperiment;
      const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(
        QuestsExperimentLocations.VIDEO_MODAL_MOBILE,
      );
      const items = [AccessibilityStore];
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const callback = react.useCallback((arg0, opacityStyle) => {
        const obj = { opacityStyle };
        const merged = Object.assign(arg0);
        return closure_1_8(closure_1_15, obj);
      }, []);
      const obj3 = useVisibilityTransition;
      const obj4 = { visible, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard };
      const visibilityTransition = obj3.useVisibilityTransition(obj4);
      let shouldRender = visibilityTransition.shouldRender;
      if (isBountiesModalTransitionsRefactorEnabled) {
        const obj5 = { useReducedMotion: stateFromStores, item: tmp15, entering, exiting: fn2, renderItem: callback };
        tmp15 = undefined;
        const tmp14 = AnimatedEnterExitItemDefault;
        if (visible) {
          tmp15 = visible;
        }
        shouldRender = metroImportAll(tmp14, obj5);
      } else if (shouldRender) {
        const obj6 = { opacityStyle: tmp6 };
        let merged = Object.assign(visible);
        shouldRender = metroImportAll(closure_15, obj6);
      }
      return shouldRender;
    };
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx");

export default tmp4;
