// discord_app/modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import AnimatedEnterExitItemDefault from "../../../../design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import BountiesModalTransitionsRefactorExperiment from "../../experiments/BountiesModalTransitionsRefactorExperiment.tsx";
import useVisibilityTransition from "useVisibilityTransition.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function BountiesScrollPromptFooterContent(zIndex) {
  zIndex = zIndex.zIndex;
  const opacityStyle = zIndex.opacityStyle;
  ({ children, onContentLayout, visibilityOpacityStyle } = zIndex);
  const tmp = closure_9();
  const items = [zIndex];
  const memo = noop.useMemo(() => {
    let tmp2;
    if (null != zIndex) {
      const obj = { zIndex: tmp };
      tmp2 = obj;
    }
    return tmp2;
  }, items);
  let obj = zIndex(504);
  const items1 = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  const tmp6 = useSafeAreaInsetsDefault();
  importDefault = tmp6;
  const items2 = [tmp6.bottom];
  const memo1 = noop.useMemo(() => ({ paddingBottom: Math.max(bottom.bottom, nativeDefault.space.PX_8) }), items2);
  obj = { style: null, pointerEvents: "none", children: null };
  const items3 = [tmp.root, visibilityOpacityStyle, memo];
  obj.style = items3;
  obj = { style: null, children: null };
  const items4 = [tmp.gradient, opacityStyle];
  obj.style = items4;
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj.children = closure_7(zIndex(4271).BountiesScrollGradientRive, {
    stateMachine: "State Machine 1",
    fit: "fill",
    alignment: "bottom-center",
    withReducedMotion: str,
  });
  const items5 = [closure_7(ReanimatedRexportDefault.View, obj)];
  const obj1 = { style: null, onLayout: onContentLayout, children };
  const items6 = [tmp.content, memo1, opacityStyle];
  obj1.style = items6;
  items5[1] = closure_7(ReanimatedRexportDefault.View, obj1);
  obj.children = items5;
  return closure_8(ReanimatedRexportDefault.View, obj);
}
const StyleSheet = fn(17).StyleSheet;
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4560);
let closure_9 = createStyles.createStyles(() => {
  let obj = { root: { position: "absolute", bottom: 0, left: 0, right: 0 }, content: null, gradient: null };
  obj = {
    flex: 1,
    minHeight: 97,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: nativeDefault.space.PX_16,
  };
  obj.content = obj;
  obj = {};
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  obj.gradient = obj;
  return obj;
});
const entering = function t(value) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  return obj;
};
createStyles = { withTiming: fn(4561).withTiming, timingStandard: fn(4564).timingStandard };
entering.__closure = createStyles;
entering.__workletHash = 11416950434629;
entering.__initData = {
  code: "function BountiesScrollPromptFooterTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}",
};
const fn2 = function n(value, fn2) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings", fn2) };
  return obj;
};
createStyles = { withTiming: fn(4561).withTiming, timingStandard: fn(4564).timingStandard };
fn2.__closure = createStyles;
fn2.__workletHash = 9928471408966;
fn2.__initData = {
  code: "function BountiesScrollPromptFooterTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptFooter.tsx");

export default function BountiesScrollPromptFooter(visible) {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let obj = BountiesModalTransitionsRefactorExperiment;
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(
    QuestsExperimentLocations.VIDEO_MODAL_MOBILE,
  );
  let obj1 = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = noop.useCallback((arg0, visibilityOpacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.visibilityOpacityStyle = visibilityOpacityStyle;
    return closure_1_7(BountiesScrollPromptFooterContent, obj);
  }, []);
  obj = { visible, entranceTiming: timingPresets.timingStandard, exitTiming: timingPresets.timingStandard };
  const visibilityTransition = useVisibilityTransition.useVisibilityTransition(obj);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    obj = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
    let tmp16;
    if (visible) {
      tmp16 = merged;
    }
    obj.item = tmp16;
    obj.entering = entering;
    obj.exiting = fn2;
    obj.renderItem = callback;
    shouldRender = React5(AnimatedEnterExitItemDefault, obj);
  } else if (shouldRender) {
    obj1 = {};
    const merged1 = Object.assign(merged);
    obj1.visibilityOpacityStyle = tmp7;
    shouldRender = React5(BountiesScrollPromptFooterContent, obj1);
  }
  return shouldRender;
}
export const BOUNTIES_MODAL_BASE_FOOTER_HEIGHT = 97;
