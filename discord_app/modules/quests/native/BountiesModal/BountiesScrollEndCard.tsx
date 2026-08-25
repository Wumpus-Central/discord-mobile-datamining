// discord_app/modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CONFIG_NEVER_ANIMATE_TIMING from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingNone from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import AnimatedRenderItemDefault from "../../../../design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx";
import apexExperiment from "../../experiments/BountiesModalTransitionsRefactorExperiment.tsx";
import useVisibilityTransition from "useVisibilityTransition.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../a11y/AccessibilityStore.tsx";
import { QuestsExperimentLocations } from "../../QuestConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function BountiesScrollEndCardContent(isScrollingInBoundsSharedValue) {
  ({ bounty, isActive } = isScrollingInBoundsSharedValue);
  isScrollingInBoundsSharedValue = isScrollingInBoundsSharedValue.isScrollingInBoundsSharedValue;
  const sourceQuestContent = isScrollingInBoundsSharedValue.sourceQuestContent;
  ({ visible, onReplay, opacityStyle } = isScrollingInBoundsSharedValue);
  const tmp = callback2();
  let obj = isActive(11069);
  const isBountiesVerticalScrollExperimentEnabled = obj.useIsBountiesVerticalScrollExperimentEnabled("BountiesScrollEndCard");
  obj1 = isActive(14492);
  const bountyCtaInfo = obj1.getBountyCtaInfo(bounty);
  const intl = isActive(1236).intl;
  const stringResult = intl.string(isActive(1236).t["9UtZAY"]);
  let obj2 = isActive(4120);
  fn = function y() {
    let obj = isScrollingInBoundsSharedValue;
    if (isScrollingInBoundsSharedValue != null) {
      const value = obj.get();
    }
    let num = 0;
    if (isActive) {
      num = 0;
      if (true !== value) {
        num = 1;
      }
    }
    obj = { opacity: isActive(closure_1_2[7]).withTiming(num, isActive(closure_1_2[8]).timingStandard) };
    return obj;
  };
  obj = { isScrollingInBoundsSharedValue, withTiming: isActive(4381).withTiming, isActive, timingStandard: isActive(4384).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 4903386092677;
  fn.__initData = closure_14;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj = { style: items, pointerEvents: "box-none", children: null };
  items = [tmp.container, opacityStyle];
  obj1 = { style: tmp.backdropTint, pointerEvents: "none" };
  const items1 = [callback(closure_6, obj1), , ];
  obj2 = { colors: ["rgba(0, 0, 0, 0.48)", "rgba(0, 0, 0, 0.8)"], style: tmp.backdropGradient, pointerEvents: "none" };
  items1[1] = callback(isScrollingInBoundsSharedValue(4826), obj2);
  if (isBountiesVerticalScrollExperimentEnabled) {
    const obj3 = { style: null, pointerEvents: "box-none", children: null };
    const items2 = [tmp.overlayContent, animatedStyle];
    obj3[0] = items2;
    const obj4 = { bounty: null, sourceQuestContent: null, disabled: null };
    obj4[0] = bounty;
    obj4[1] = sourceQuestContent;
    obj4[2] = !isActive;
    const items3 = [tmp10(tmp9(14495), obj4), ];
    const obj5 = { style: null, pointerEvents: "box-none", children: null };
    obj5[0] = tmp.endedCtaButtonsContainer;
    const obj6 = { bounty: null, visible: null, sourceQuestContent: null, onClose: null, showCloseButton: false, disabled: null };
    obj6[0] = bounty;
    obj6[1] = visible;
    obj6[2] = sourceQuestContent;
    obj6[3] = function onClose() {

    };
    obj6[5] = !isActive;
    obj5[2] = tmp10(tmp9(14497), obj6);
    items3[1] = tmp10(tmp11, obj5);
    obj3[2] = items3;
    let tmp10Result = tmp8(tmp9(4120).View, obj3);
  } else {
    let tmp13;
    if (isActive) {
      tmp13 = onReplay;
    }
    const obj7 = { onPress: null, disabled: null, accessibilityRole: "button", accessibilityLabel: null, style: null, children: null };
    obj7[0] = tmp13;
    obj7[1] = !isActive;
    obj7[3] = stringResult;
    obj7[4] = tmp.pressable;
    const obj8 = { style: null, children: null };
    const items4 = [tmp.overlayContent, animatedStyle];
    obj8[0] = items4;
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.textBlock;
    const obj10 = { variant: "heading-md/semibold", color: "text-strong", children: null };
    obj10[2] = bountyCtaInfo.label;
    const items5 = [tmp10(tmp2(4376).Text, obj10), ];
    const obj11 = { variant: "heading-sm/medium", color: "text-default", children: null };
    obj11[2] = stringResult;
    items5[1] = tmp10(tmp2(4376).Text, obj11);
    obj9[1] = items5;
    const items6 = [tmp8(tmp11, obj9), ];
    const obj12 = { accessible: false, color: null, style: null };
    obj12[1] = tmp9(712).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT;
    obj12[2] = tmp.replayIcon;
    items6[1] = tmp10(tmp2(10012).RetryIcon, obj12);
    obj8[1] = items6;
    obj7[5] = tmp8(tmp9(4120).View, obj8);
    tmp10Result = tmp10(closure_4, obj7);
    const tmp12 = closure_4;
  }
  items1[2] = tmp10Result;
  obj[2] = items1;
  return closure_10(isScrollingInBoundsSharedValue(4120).View, obj);
}
({ Pressable: c4, StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles(() => {
  let obj = { container: null, backdropTint: null, backdropGradient: null, overlayContent: null, pressable: null, textBlock: null, replayIcon: null, endedCtaButtonsContainer: null };
  obj = {};
  const merged = Object.assign(closure_5.absoluteFillObject);
  obj[0] = obj;
  obj = {};
  const merged1 = Object.assign(closure_5.absoluteFillObject);
  obj.backgroundColor = "rgba(0, 0, 0, 0.6)";
  obj[1] = obj;
  const merged2 = Object.assign(closure_5.absoluteFillObject);
  obj[2] = {};
  const obj2 = {};
  const merged3 = Object.assign(closure_5.absoluteFillObject);
  obj2.justifyContent = "center";
  obj2.alignItems = "center";
  obj[3] = obj2;
  const obj3 = {};
  const merged4 = Object.assign(closure_5.absoluteFillObject);
  obj3.justifyContent = "center";
  obj3.alignItems = "center";
  obj[4] = obj3;
  obj[5] = { alignItems: "center", gap: ThemesDefault.space.PX_4 };
  obj1 = {};
  const obj4 = { alignItems: "center", gap: ThemesDefault.space.PX_4 };
  obj[6] = { margin: ThemesDefault.space.PX_12 };
  const obj5 = { margin: ThemesDefault.space.PX_12 };
  obj[7] = { position: "absolute", left: ThemesDefault.space.PX_16, right: ThemesDefault.space.PX_16, bottom: ThemesDefault.space.PX_16 };
  return obj;
});
let fn = function t(value) {
  const obj = { opacity: CONFIG_NEVER_ANIMATE_TIMING.withTiming(value, timingNone.timingStandard, "respect-motion-settings") };
  return obj;
};
createCacheKey = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingStandard: require("timingNone").timingStandard };
fn.__closure = createCacheKey;
fn.__workletHash = 12127714049951;
fn.__initData = { code: "function BountiesScrollEndCardTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
const fn2 = function n(value, fn2) {
  const obj = { opacity: CONFIG_NEVER_ANIMATE_TIMING.withTiming(value, timingNone.timingStandard, "respect-motion-settings", fn2) };
  return obj;
};
createCacheKey = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingStandard: require("timingNone").timingStandard };
fn2.__closure = createCacheKey;
fn2.__workletHash = 7470211880124;
fn2.__initData = { code: "function BountiesScrollEndCardTsx2(visible,cleanUp){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings',cleanUp)};}" };
let closure_14 = { code: "function BountiesScrollEndCardTsx3(){const{isScrollingInBoundsSharedValue,withTiming,isActive,timingStandard}=this.__closure;var _isScrollingInBoundsS;const isScrollingInBounds=((_isScrollingInBoundsS=isScrollingInBoundsSharedValue)===null||_isScrollingInBoundsS===void 0?void 0:_isScrollingInBoundsS.get())===true;return{opacity:withTiming(isActive&&!isScrollingInBounds?1:0,timingStandard)};}" };
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollEndCard.tsx");

export default function BountiesScrollEndCard(visible) {
  visible = visible.visible;
  let obj = apexExperiment;
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  obj1 = initialize;
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const callback = React.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    return callback(closure_15, obj);
  }, []);
  obj = { visible, entranceTiming: timingNone.timingStandard, exitTiming: timingNone.timingStandard };
  const visibilityTransition = useVisibilityTransition.useVisibilityTransition(obj);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    obj = { useReducedMotion: null, item: null, entering: null, exiting: null, renderItem: null };
    obj[0] = stateFromStores;
    let tmp15;
    if (visible) {
      tmp15 = visible;
    }
    obj[1] = tmp15;
    obj[2] = fn;
    obj[3] = fn2;
    obj[4] = callback;
    shouldRender = callback(AnimatedRenderItemDefault, obj);
    const tmp12 = callback;
    const tmp14 = AnimatedRenderItemDefault;
  } else if (shouldRender) {
    obj1 = {};
    let merged = Object.assign(visible);
    obj1.opacityStyle = tmp6;
    shouldRender = callback(BountiesScrollEndCardContent, obj1);
  }
  return shouldRender;
};