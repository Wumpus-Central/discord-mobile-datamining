// === Module 15042: BountiesScrollEndCard ===

// Module 15042 (BountiesScrollEndCard)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 9969 */;
import BountiesModalTransitionsRefactorExperiment from "BountiesModalTransitionsRefactorExperiment" /* 15007 */;
import useVisibilityTransition from "useVisibilityTransition" /* 15008 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
function BountiesScrollEndCardContent(isScrollingInBoundsSharedValue) {
  ({ bounty, isActive } = isScrollingInBoundsSharedValue);
  isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
  const sourceQuestContent = isScrollingInBoundsSharedValue.sourceQuestContent;
  ({ visible, onReplay, opacityStyle } = isScrollingInBoundsSharedValue);
  const tmp = closure_11();
  let obj = isActive(11521);
  const isBountiesVerticalScrollExperimentEnabled = obj.useIsBountiesVerticalScrollExperimentEnabled("BountiesScrollEndCard");
  let obj1 = isActive(15040);
  const bountyCtaInfo = obj1.getBountyCtaInfo(bounty);
  const intl = isActive(1114).intl;
  const stringResult = intl.string(isActive(1114).t["9UtZAY"]);
  let obj2 = isActive(4296);
  const fn = function y() {
    let obj = isScrollingInBoundsSharedValue;
    if (isScrollingInBoundsSharedValue != null) {
      value = obj.get();
    }
    let num = 0;
    if (isActive) {
      num = 0;
      if (true !== value) {
        num = 1;
      }
    }
    obj = { opacity: timing.withTiming(num, timingPresets.timingStandard) };
    return obj;
  };
  obj = { isScrollingInBoundsSharedValue, withTiming: isActive(4561).withTiming, isActive, timingStandard: isActive(4564).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 4903386092677;
  fn.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj = { style: null, pointerEvents: "box-none", children: null };
  const items = [tmp.container, opacityStyle];
  obj.style = items;
  obj1 = { style: tmp.backdropTint, pointerEvents: "none" };
  const items1 = [closure_9(closure_6, obj1), , ];
  obj2 = { colors: ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"], style: tmp.backdropGradient, pointerEvents: "none" };
  items1[1] = closure_9(isScrollingInBoundsSharedValue(4987), obj2);
  if (isBountiesVerticalScrollExperimentEnabled) {
    const obj3 = { style: null, pointerEvents: "box-none", children: null };
    const items2 = [tmp.overlayContent, animatedStyle];
    obj3.style = items2;
    const obj4 = { bounty, sourceQuestContent, disabled: !isActive };
    const items3 = [tmp10(tmp9(15043), obj4), ];
    const obj5 = { style: tmp.endedCtaButtonsContainer, pointerEvents: "box-none", children: null };
    const obj6 = {
      bounty,
      visible,
      sourceQuestContent,
      onClose() {

        },
      showCloseButton: false,
      disabled: !isActive
    };
    obj5.children = tmp10(tmp9(15045), obj6);
    items3[1] = tmp10(tmp11, obj5);
    obj3.children = items3;
    let tmp10Result = tmp8(tmp9(4296).View, obj3);
  } else {
    let tmp13;
    if (isActive) {
      tmp13 = onReplay;
    }
    const obj7 = { onPress: tmp13, disabled: !isActive, accessibilityRole: "button", accessibilityLabel: stringResult, style: tmp.pressable, children: null };
    const obj8 = { style: null, children: null };
    const items4 = [tmp.overlayContent, animatedStyle];
    obj8.style = items4;
    const obj9 = { style: tmp.textBlock, children: null };
    const obj10 = { variant: "heading-md/semibold", color: "text-strong", children: bountyCtaInfo.label };
    const items5 = [tmp10(tmp2(4556).Text, obj10), ];
    const obj11 = { variant: "heading-sm/medium", color: "text-default", children: stringResult };
    items5[1] = tmp10(tmp2(4556).Text, obj11);
    obj9.children = items5;
    const items6 = [tmp8(tmp11, obj9), ];
    const obj12 = { accessible: false, color: tmp9(576).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT, style: tmp.replayIcon };
    items6[1] = tmp10(tmp2(10180).RetryIcon, obj12);
    obj8.children = items6;
    obj7.children = tmp8(tmp9(4296).View, obj8);
    tmp10Result = tmp10(closure_4, obj7);
  }
  items1[2] = tmp10Result;
  obj.children = items1;
  return closure_10(isScrollingInBoundsSharedValue(4296).View, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, StyleSheet: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let createStyles = fn(4560);
let closure_11 = createStyles.createStyles(() => {
  let obj = { container: null, backdropTint: null, backdropGradient: null, overlayContent: null, pressable: null, textBlock: null, replayIcon: null, endedCtaButtonsContainer: null };
  obj = {};
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  obj.container = obj;
  obj = {};
  const merged1 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj.backgroundColor = "rgba(0, 0, 0, 0.6)";
  obj.backdropTint = obj;
  const merged2 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj.backdropGradient = {};
  const obj2 = {};
  const merged3 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj2.justifyContent = "center";
  obj2.alignItems = "center";
  obj.overlayContent = obj2;
  const obj3 = {};
  const merged4 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj3.justifyContent = "center";
  obj3.alignItems = "center";
  obj.pressable = obj3;
  obj.textBlock = { alignItems: "center", gap: nativeDefault.space.PX_4 };
  const obj1 = {};
  const obj4 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.replayIcon = { margin: nativeDefault.space.PX_12 };
  const rect = { position: "absolute", left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, bottom: nativeDefault.space.PX_16 };
  obj.endedCtaButtonsContainer = rect;
  return obj;
});
const entering = function t(value) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  return obj;
};
createStyles = { withTiming: fn(4561).withTiming, timingStandard: fn(4564).timingStandard };
entering.__closure = createStyles;
entering.__workletHash = 12127714049951;
entering.__initData = { code: "function BountiesScrollEndCardTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
const fn2 = function n(value, fn2) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings", fn2) };
  return obj;
};
createStyles = { withTiming: fn(4561).withTiming, timingStandard: fn(4564).timingStandard };
fn2.__closure = createStyles;
fn2.__workletHash = 7470211880124;
fn2.__initData = { code: "function BountiesScrollEndCardTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}" };
const __initData = { code: "function BountiesScrollEndCardTsx3(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx");

export default function BountiesScrollEndCard(visible) {
  visible = visible.visible;
  let obj = BountiesModalTransitionsRefactorExperiment;
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  let obj1 = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = noop.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    return closure_1_9(BountiesScrollEndCardContent, obj);
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
    shouldRender = React7(AnimatedEnterExitItemDefault, obj);
  } else if (shouldRender) {
    obj1 = {};
    let merged = Object.assign(visible);
    obj1.opacityStyle = tmp6;
    shouldRender = React7(BountiesScrollEndCardContent, obj1);
  }
  return shouldRender;
};