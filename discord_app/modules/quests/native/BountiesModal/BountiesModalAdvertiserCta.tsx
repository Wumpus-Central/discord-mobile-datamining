// discord_app/modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import QuestContent from "../../../../../discord_common/js/shared/shared-constants/QuestContent.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function BountiesModalAdvertiserCtaContent(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let getQuestImpressionId;
  let callback;
  ({ opacityStyle, transformStyle } = bounty);
  const tmp = closure_13();
  let obj = bounty(getQuestImpressionId[11]);
  const bountyCtaInfo = obj.getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    let tmp2Result = tmp2(tmp3[12]);
    const size = { assetUrl: bountyCtaInfo.iconImageUri, width: 40, height: 40 };
    scaledImageUrl = tmp2Result.getScaledImageUrl(size);
  }
  tmp2Result = tmp2(tmp3[6]);
  const sharedValue = tmp2Result.useSharedValue(0);
  const buttonPressAnimationProps = bounty(getQuestImpressionId[13]).useButtonPressAnimationProps(sharedValue);
  const tmp2Result1 = bounty(getQuestImpressionId[13]);
  const tmp8 = _objectWithoutProperties(buttonPressAnimationProps, callback);
  getQuestImpressionId = bounty(getQuestImpressionId[14]).useGetQuestImpressionId();
  const items = [, , ,];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = sourceQuestContent;
  items[3] = getQuestImpressionId;
  callback = noop.useCallback((content) => {
    let obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
    obj = {
      content,
      ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
      impressionId: getQuestImpressionId(),
      sourceQuestContent,
    };
    const result = obj.openAdGameLinkDirectly(obj, obj);
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = noop.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
  }, items1);
  const callback2 = noop.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE_FOOTER);
  }, items2);
  obj = { style: null, children: null };
  const items3 = [tmp.outerContainer, opacityStyle, transformStyle];
  obj.style = items3;
  obj = {};
  const merged = Object.assign(tmp8);
  obj.onPress = callback1;
  obj.accessibilityRole = "button";
  obj.accessibilityLabel = bountyCtaInfo.label;
  const items4 = [tmp.ctaPressable, buttonPressAnimationProps.style];
  obj.style = items4;
  const obj1 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue, children: null };
  const obj2 = {
    style: tmp.ctaLogoContainer,
    children: closure_10(sourceQuestContent(getQuestImpressionId[20]), {
      source: { uri: scaledImageUrl },
      style: tmp.ctaLogo,
      resizeMode: "cover",
    }),
  };
  const items5 = [closure_10(closure_7, obj2), ,];
  const obj4 = { style: tmp.ctaInfo, children: null };
  const items6 = [
    closure_10(bounty(getQuestImpressionId[21]).Text, {
      lineClamp: 2,
      variant: "text-sm/semibold",
      color: "text-default",
      children: bountyCtaInfo.label,
    }),
    closure_10(bounty(getQuestImpressionId[21]).Text, {
      variant: "text-xs/medium",
      color: "text-default",
      children: bountyCtaInfo.subtext,
    }),
  ];
  obj4.children = items6;
  items5[1] = closure_11(closure_7, obj4);
  const obj7 = {
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: closure_10(bounty(getQuestImpressionId[22]).Button, {
      variant: "primary-overlay",
      text: bountyCtaInfo.buttonLabel,
      size: "sm",
      onPress: callback2,
    }),
  };
  items5[2] = closure_10(closure_7, obj7);
  obj1.children = items5;
  obj.children = closure_11(bounty(getQuestImpressionId[19]).BackgroundBlurView, obj1);
  obj.children = closure_10(closure_12, obj);
  return closure_10(sourceQuestContent(getQuestImpressionId[6]).View, obj);
}
let closure_3 = ["style"];
get_ActivityIndicator = fn(17);
({ StyleSheet: metroRequire, View: closure_7, Pressable } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let closure_12 = ReanimatedRexport.createAnimatedComponent(Pressable);
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles(() => {
  let obj = {
    outerContainer: null,
    ctaPressable: null,
    cta: null,
    ctaLogoContainer: null,
    ctaLogo: null,
    ctaInfo: null,
  };
  const rect = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16,
    alignItems: "center",
  };
  obj.outerContainer = rect;
  obj = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.alignSelf = "stretch";
  obj.borderWidth = 1;
  obj.borderColor = "transparent";
  obj.borderRadius = nativeDefault.radii.lg;
  obj.overflow = "hidden";
  obj.ctaPressable = obj;
  obj = {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: nativeDefault.space.PX_12,
    paddingRight: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_12,
    gap: nativeDefault.space.PX_12,
  };
  obj.cta = obj;
  const size = {
    width: 40,
    height: 40,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.md,
    overflow: "hidden",
  };
  obj.ctaLogoContainer = size;
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.ctaLogo = {};
  obj.ctaInfo = { flex: 1, justifyContent: "center", gap: 2 };
  return obj;
});
let entering = function n(value) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  return obj;
};
let obj = { withTiming: fn(4561).withTiming, timingStandard: fn(4564).timingStandard };
entering.__closure = obj;
entering.__workletHash = 2981824910249;
entering.__initData = {
  code: "function BountiesModalAdvertiserCtaTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}",
};
const fn2 = function s(value, fn) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingFast, "respect-motion-settings", fn) };
  return obj;
};
obj = { withTiming: fn(4561).withTiming, timingFast: fn(4564).timingFast };
fn2.__closure = obj;
fn2.__workletHash = 15850601331978;
fn2.__initData = {
  code: "function BountiesModalAdvertiserCtaTsx2(visible,cleanUp){const{withTiming,timingFast}=this.__closure;return{opacity:withTiming(visible,timingFast,'respect-motion-settings',cleanUp)};}",
};
const __initData = {
  code: "function BountiesModalAdvertiserCtaTsx3(){const{withTiming,interpolate,visibility,visible,timingStandard,timingFast}=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default function BountiesModalAdvertiserCta(visible) {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let animatedStyle;
  let obj = visible(animatedStyle[23]);
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(
    QuestsExperimentLocations.VIDEO_MODAL_MOBILE,
  );
  let obj1 = visible(animatedStyle[24]);
  let items = [AccessibilityStore];
  let num = 0;
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (visible) {
    num = 1;
  }
  let tmp2Result = tmp2(tmp3[6]);
  entering = function s() {
    const tmp2 = timingPresets;
    let obj = { transform: null };
    obj = {
      translateY: obj.withTiming(
        ReanimatedRexport2.interpolate(num, [0, 1], [8, 0]),
        visible ? tmp2.timingStandard : tmp2.timingFast,
      ),
    };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = {
    withTiming: tmp2(tmp3[9]).withTiming,
    interpolate: tmp2(tmp3[6]).interpolate,
    visibility: num,
    visible,
    timingStandard: tmp2(tmp3[10]).timingStandard,
    timingFast: tmp2(tmp3[10]).timingFast,
  };
  entering.__closure = obj;
  entering.__workletHash = 252868467367;
  entering.__initData = __initData;
  animatedStyle = tmp2Result.useAnimatedStyle(entering);
  const items1 = [animatedStyle];
  const callback = noop.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    obj.transformStyle = animatedStyle;
    return closure_2_10(BountiesModalAdvertiserCtaContent, obj);
  }, items1);
  tmp2Result = tmp2(tmp3[25]);
  obj = { visible, entranceTiming: tmp2(tmp3[10]).timingStandard, exitTiming: tmp2(tmp3[10]).timingFast };
  const visibilityTransition = tmp2Result.useVisibilityTransition(obj);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    obj1 = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
    let tmp18;
    if (visible) {
      tmp18 = merged;
    }
    obj1.item = tmp18;
    obj1.entering = entering;
    obj1.exiting = fn2;
    obj1.renderItem = callback;
    shouldRender = closure_10(num(tmp3[26]), obj1);
    const tmp17 = num(tmp3[26]);
  } else if (shouldRender) {
    let obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.opacityStyle = tmp9;
    obj2.transformStyle = animatedStyle;
    shouldRender = closure_10(BountiesModalAdvertiserCtaContent, obj2);
  }
  return shouldRender;
}
