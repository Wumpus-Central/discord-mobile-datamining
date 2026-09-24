// === Module 15386: BountiesModalAdvertiserCta ===

// Module 15386 (BountiesModalAdvertiserCta)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4561 */;
import timing from "timing" /* 4830 */;
import timingPresets from "timingPresets" /* 4833 */;
import QuestContent from "QuestContent" /* 5754 */;
import AdCreativeType from "AdCreativeType" /* 5756 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8051 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 11837 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
function BountiesModalAdvertiserCtaContent(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let getQuestImpressionId;
  let callback;
  ({ opacityStyle, transformStyle } = bounty);
  const tmp = closure_13();
  const bountyCtaInfo = bounty(getQuestImpressionId[11]).getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    const size = { assetUrl: bountyCtaInfo.iconImageUri, width: 40, height: 40 };
    scaledImageUrl = tmp2(tmp3[12]).getScaledImageUrl(size);
    const tmp2Result = tmp2(tmp3[12]);
  }
  let obj = bounty(getQuestImpressionId[11]);
  const sharedValue = bounty(getQuestImpressionId[6]).useSharedValue(0);
  const tmp2Result4 = bounty(getQuestImpressionId[6]);
  const buttonPressAnimationProps = bounty(getQuestImpressionId[13]).useButtonPressAnimationProps(sharedValue);
  const tmp2Result5 = bounty(getQuestImpressionId[13]);
  const tmp8 = _objectWithoutProperties(buttonPressAnimationProps, callback);
  getQuestImpressionId = bounty(getQuestImpressionId[14]).useGetQuestImpressionId();
  const items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = sourceQuestContent;
  items[3] = getQuestImpressionId;
  callback = noop.useCallback((content) => {
    const obj = QuestPlatformUtils;
    const obj2 = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
    const result = obj.openAdGameLinkDirectly(obj2, { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent });
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = noop.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
  }, items1);
  const callback2 = noop.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE_FOOTER);
  }, items2);
  let obj2 = { style: null, children: null };
  const items3 = [tmp.outerContainer, opacityStyle, transformStyle];
  obj2.style = items3;
  const obj3 = {};
  const merged = Object.assign(tmp8);
  obj3.onPress = callback1;
  obj3.accessibilityRole = "button";
  obj3.accessibilityLabel = bountyCtaInfo.label;
  const items4 = [tmp.ctaPressable, buttonPressAnimationProps.style];
  obj3.style = items4;
  const obj4 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue, children: null };
  const obj5 = { style: tmp.ctaLogoContainer, children: closure_10(sourceQuestContent(getQuestImpressionId[20]), { source: { uri: scaledImageUrl }, style: tmp.ctaLogo, resizeMode: "cover" }) };
  const items5 = [closure_10(closure_7, obj5), , ];
  const obj7 = { style: tmp.ctaInfo, children: closure_10(bounty(getQuestImpressionId[21]).Text, { lineClamp: 2, variant: "text-sm/semibold", color: "text-default", children: bountyCtaInfo.label }) };
  items5[1] = closure_10(closure_7, obj7);
  const obj9 = { accessible: false, importantForAccessibility: "no-hide-descendants", children: closure_10(bounty(getQuestImpressionId[22]).Button, { variant: "primary-overlay", text: bountyCtaInfo.buttonLabel, size: "sm", onPress: callback2 }) };
  items5[2] = closure_10(closure_7, obj9);
  obj4.children = items5;
  obj3.children = closure_11(bounty(getQuestImpressionId[19]).BackgroundBlurView, obj4);
  obj2.children = closure_10(closure_12, obj3);
  return closure_10(sourceQuestContent(getQuestImpressionId[6]).View, obj2);
}
let closure_3 = ["style"];
get_ActivityIndicator = fn(17);
({ StyleSheet: metroRequire, View: closure_7, Pressable } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5749).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let closure_12 = ReanimatedRexport.createAnimatedComponent(Pressable);
const createStyles = fn(4829);
let closure_13 = createStyles.createStyles(() => {
  const obj = { outerContainer: null, ctaPressable: null, cta: null, ctaLogoContainer: null, ctaLogo: null, ctaInfo: null };
  const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
  obj.outerContainer = rect;
  const obj2 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj2.alignSelf = "stretch";
  obj2.borderWidth = 1;
  obj2.borderColor = "transparent";
  obj2.borderRadius = nativeDefault.radii.lg;
  obj2.overflow = "hidden";
  obj.ctaPressable = obj2;
  obj.cta = { flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12 };
  const size = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj.ctaLogoContainer = size;
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.ctaLogo = {};
  obj.ctaInfo = { flex: 1, justifyContent: "center" };
  return obj;
});
let entering = function n(value) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  return obj;
};
entering.__closure = { withTiming: fn(4830).withTiming, timingStandard: fn(4833).timingStandard };
entering.__workletHash = 2981824910249;
entering.__initData = { code: "function BountiesModalAdvertiserCtaTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
const fn2 = function s(value, fn) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingFast, "respect-motion-settings", fn) };
  return obj;
};
let obj = { withTiming: fn(4830).withTiming, timingStandard: fn(4833).timingStandard };
fn2.__closure = { withTiming: fn(4830).withTiming, timingFast: fn(4833).timingFast };
fn2.__workletHash = 15850601331978;
fn2.__initData = { code: "function BountiesModalAdvertiserCtaTsx2(visible,cleanUp){const{withTiming,timingFast}=this.__closure;return{opacity:withTiming(visible,timingFast,'respect-motion-settings',cleanUp)};}" };
const __initData = { code: "function BountiesModalAdvertiserCtaTsx3(){const{withTiming,interpolate,visibility,visible,timingStandard,timingFast}=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default function BountiesModalAdvertiserCta(visible) {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let animatedStyle;
  const isBountiesModalTransitionsRefactorEnabled = visible(animatedStyle[23]).useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  let obj = visible(animatedStyle[23]);
  let items = [AccessibilityStore];
  let num = 0;
  const stateFromStores = visible(animatedStyle[24]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (visible) {
    num = 1;
  }
  let obj2 = visible(animatedStyle[24]);
  entering = function s() {
    const obj = timing;
    const tmp2 = timingPresets;
    const obj3 = { transform: null };
    const interpolateResult = ReanimatedRexport2.interpolate(num, [0, 1], [8, 0]);
    const items = [{ translateY: obj.withTiming(ReanimatedRexport2.interpolate(num, [0, 1], [8, 0]), visible ? tmp2.timingStandard : tmp2.timingFast) }];
    obj3.transform = items;
    return obj3;
  };
  const tmp2Result = visible(animatedStyle[6]);
  entering.__closure = { withTiming: visible(animatedStyle[9]).withTiming, interpolate: visible(animatedStyle[6]).interpolate, visibility: num, visible, timingStandard: visible(animatedStyle[10]).timingStandard, timingFast: visible(animatedStyle[10]).timingFast };
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
  let obj3 = { withTiming: visible(animatedStyle[9]).withTiming, interpolate: visible(animatedStyle[6]).interpolate, visibility: num, visible, timingStandard: visible(animatedStyle[10]).timingStandard, timingFast: visible(animatedStyle[10]).timingFast };
  const tmp2Result2 = visible(animatedStyle[25]);
  const visibilityTransition = tmp2Result2.useVisibilityTransition({ visible, entranceTiming: visible(animatedStyle[10]).timingStandard, exitTiming: visible(animatedStyle[10]).timingFast });
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj5 = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
    let tmp18;
    if (visible) {
      tmp18 = merged;
    }
    obj5.item = tmp18;
    obj5.entering = entering;
    obj5.exiting = fn2;
    obj5.renderItem = callback;
    shouldRender = closure_10(num(tmp3[26]), obj5);
    const tmp17 = num(tmp3[26]);
  } else if (shouldRender) {
    const obj6 = {};
    const merged1 = Object.assign(merged);
    obj6.opacityStyle = tmp9;
    obj6.transformStyle = animatedStyle;
    shouldRender = closure_10(BountiesModalAdvertiserCtaContent, obj6);
  }
  return shouldRender;
};