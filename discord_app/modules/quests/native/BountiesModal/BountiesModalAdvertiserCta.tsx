// === Module 17210: BountiesModalAdvertiserCta ===

// Module 17210 (BountiesModalAdvertiserCta)
import nativeDefault from "native" /* 575 */;
import QuestContent from "QuestContent" /* 6921 */;
import AdCreativeType from "AdCreativeType" /* 6923 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8011 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9869 */;
import AnimatedEnterExitItemDefault from "AnimatedEnterExitItem" /* 10139 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import module_1652 from "module_1652" /* 1652 */;

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
  items = [, , , ];
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
  const obj7 = { style: tmp.ctaInfo, children: closure_10(bounty(getQuestImpressionId[21]).Text, { lineClamp: 2, variant: "body-sm/semibold", color: "text-default", children: bountyCtaInfo.label }) };
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
({ StyleSheet: closure_6, View: metroImportDefault, Pressable } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(6916).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = module_1652.createAnimatedComponent(Pressable);
const createStyles = fn(5141);
let closure_13 = createStyles.createStyles(() => {
  const obj = { outerContainer: null, ctaPressable: null, cta: null, ctaLogoContainer: null, ctaLogo: null, ctaInfo: null };
  const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
  obj.outerContainer = rect;
  const obj2 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj2.alignSelf = "stretch";
  obj2.borderRadius = nativeDefault.radii.lg;
  obj.ctaPressable = obj2;
  obj.cta = { flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
  const size = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj.ctaLogoContainer = size;
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.ctaLogo = {};
  obj.ctaInfo = { flex: 1, justifyContent: "center" };
  return obj;
});
let items = [{ code: "(function BountiesModalAdvertiserCtaTsx1(visible){let[withTiming,timingStandard]=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};})" }, fn(5378).withTiming, fn(5381).timingStandard];
let closure_129_0;
let closure_129_1;
[tmp4, tmp5, tmp6] = items;
class BountiesModalAdvertiserCtaTsx1 {
  constructor(arg0) {
    obj = { opacity: closure_0(global, closure_1, "respect-motion-settings") };
    return obj;
  }
}
let items1 = [tmp5, tmp6];
BountiesModalAdvertiserCtaTsx1.__closure = items1;
BountiesModalAdvertiserCtaTsx1.__workletHash = 17397968298384;
BountiesModalAdvertiserCtaTsx1.__initData = tmp4;
let items2 = [{ code: "(function BountiesModalAdvertiserCtaTsx2(visible,cleanUp){let[withTiming,timingFast]=this.__closure;return{opacity:withTiming(visible,timingFast,'respect-motion-settings',cleanUp)};})" }, fn(5378).withTiming, fn(5381).timingFast];
let closure_130_0;
let closure_130_1;
[tmp7, tmp8, tmp9] = items2;
class BountiesModalAdvertiserCtaTsx2 {
  constructor(arg0, arg1) {
    obj = { opacity: closure_0(global, closure_1, "respect-motion-settings", fn) };
    return obj;
  }
}
let items3 = [tmp8, tmp9];
BountiesModalAdvertiserCtaTsx2.__closure = items3;
BountiesModalAdvertiserCtaTsx2.__workletHash = 5281001933907;
BountiesModalAdvertiserCtaTsx2.__initData = tmp7;
let closure_17 = { code: "(function BountiesModalAdvertiserCtaTsx3(){let[withTiming,interpolate,visibility,visible,timingStandard,timingFast]=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default function BountiesModalAdvertiserCta(visible) {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let animatedStyle;
  const isBountiesModalTransitionsRefactorEnabled = animatedStyle(17174).useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  let obj = animatedStyle(17174);
  items = [AccessibilityStore];
  let num = 0;
  const stateFromStores = animatedStyle(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (visible) {
    num = 1;
  }
  const obj2 = animatedStyle(504);
  const items1 = [closure_17, animatedStyle(5378).withTiming, animatedStyle(1652).interpolate, num, visible, animatedStyle(5381).timingStandard, animatedStyle(5381).timingFast];
  animatedStyle = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  noop = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items1;
  class BountiesModalAdvertiserCtaTsx3 {
    constructor() {
      tmp = closure_0;
      obj = { transform: null };
      obj1 = { translateY: tmp(closure_1(closure_2, [0, 1], [8, 0]), closure_3 ? closure_4 : closure_5) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  BountiesModalAdvertiserCtaTsx3.__closure = items2;
  BountiesModalAdvertiserCtaTsx3.__workletHash = 3225253604542;
  BountiesModalAdvertiserCtaTsx3.__initData = tmp6;
  animatedStyle = animatedStyle(1652).useAnimatedStyle(BountiesModalAdvertiserCtaTsx3);
  const items3 = [animatedStyle];
  const callback = noop.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    obj.transformStyle = animatedStyle;
    return closure_2_10(BountiesModalAdvertiserCtaContent, obj);
  }, items3);
  const tmp2Result = animatedStyle(1652);
  const tmp2Result2 = animatedStyle(17175);
  const visibilityTransition = tmp2Result2.useVisibilityTransition({ visible, entranceTiming: animatedStyle(5381).timingStandard, exitTiming: animatedStyle(5381).timingFast });
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj4 = { useReducedMotion: stateFromStores, item: null, entering: null, exiting: null, renderItem: null };
    let tmp25;
    if (visible) {
      tmp25 = merged;
    }
    obj4.item = tmp25;
    obj4.entering = BountiesModalAdvertiserCtaTsx1;
    obj4.exiting = BountiesModalAdvertiserCtaTsx2;
    obj4.renderItem = callback;
    shouldRender = closure_10(AnimatedEnterExitItemDefault, obj4);
  } else if (shouldRender) {
    const obj5 = {};
    const merged1 = Object.assign(merged);
    obj5.opacityStyle = tmp16;
    obj5.transformStyle = animatedStyle;
    shouldRender = closure_10(BountiesModalAdvertiserCtaContent, obj5);
  }
  return shouldRender;
};