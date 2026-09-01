// === Module 14642: BountiesModalAdvertiserCtaContent ===

// Module 14642 (BountiesModalAdvertiserCtaContent)
import ThemesDefault from "Themes" /* 712 */;
import CONFIG_NEVER_ANIMATE_TIMING from "CONFIG_NEVER_ANIMATE_TIMING" /* 4479 */;
import timingNone from "timingNone" /* 4482 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { QuestsExperimentLocations } from "QuestsExperimentLocations" /* 5387 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "module_4217" /* 4217 */;

require = arg1;
function BountiesModalAdvertiserCtaContent(bounty) {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let getQuestImpressionId;
  let callback;
  ({ opacityStyle, transformStyle } = bounty);
  const tmp = callback4();
  let obj = bounty(getQuestImpressionId[11]);
  const bountyCtaInfo = obj.getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    let tmp2Result = tmp2(tmp3[12]);
    obj = { assetUrl: null, width: 40, height: 40 };
    obj[0] = bountyCtaInfo.iconImageUri;
    scaledImageUrl = tmp2Result.getScaledImageUrl(obj);
  }
  tmp2Result = tmp2(tmp3[6]);
  const sharedValue = tmp2Result.useSharedValue(0);
  const buttonPressAnimationProps = bounty(getQuestImpressionId[13]).useButtonPressAnimationProps(sharedValue);
  const tmp2Result1 = bounty(getQuestImpressionId[13]);
  const tmp8 = callback(buttonPressAnimationProps, callback);
  getQuestImpressionId = bounty(getQuestImpressionId[14]).useGetQuestImpressionId();
  const items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = sourceQuestContent;
  items[3] = getQuestImpressionId;
  callback = React.useCallback((content) => {
    let obj = bounty(getQuestImpressionId[15]);
    obj = { adContentId: bounty.id, adCreativeType: bounty(getQuestImpressionId[16]).AdCreativeType.BOUNTY, cta: bounty.cta };
    obj = { content, ctaContent: bounty(getQuestImpressionId[17]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    const result = obj.openAdGameLinkDirectly(obj, obj);
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = React.useCallback(() => {
    callback(bounty(getQuestImpressionId[18]).QuestContent.VIDEO_MODAL_MOBILE);
  }, items1);
  const callback2 = React.useCallback(() => {
    callback(bounty(getQuestImpressionId[18]).QuestContent.VIDEO_MODAL_MOBILE_FOOTER);
  }, items2);
  obj = { style: items3, children: null };
  items3 = [tmp.outerContainer, opacityStyle, transformStyle];
  obj1 = {};
  const merged = Object.assign(tmp8);
  obj1.onPress = callback1;
  obj1.accessibilityRole = "button";
  obj1.accessibilityLabel = bountyCtaInfo.label;
  const items4 = [tmp.ctaPressable, buttonPressAnimationProps.style];
  obj1.style = items4;
  const obj2 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue, children: null };
  const tmp2Result2 = bounty(getQuestImpressionId[14]);
  const items5 = [callback2(closure_7, { style: tmp.ctaLogoContainer, children: callback2(sourceQuestContent(getQuestImpressionId[20]), obj4) }), , ];
  const obj5 = { style: tmp.ctaInfo, children: null };
  const items6 = [callback2(bounty(getQuestImpressionId[21]).Text, { lineClamp: 2, variant: "text-sm/semibold", color: "text-default", children: bountyCtaInfo.label }), callback2(bounty(getQuestImpressionId[21]).Text, { variant: "text-xs/medium", color: "text-default", children: bountyCtaInfo.subtext })];
  obj5[1] = items6;
  items5[1] = callback3(closure_7, obj5);
  const obj3 = { style: tmp.ctaLogoContainer, children: callback2(sourceQuestContent(getQuestImpressionId[20]), obj4) };
  const obj6 = { lineClamp: 2, variant: "text-sm/semibold", color: "text-default", children: bountyCtaInfo.label };
  const obj7 = { variant: "text-xs/medium", color: "text-default", children: bountyCtaInfo.subtext };
  items5[2] = callback2(closure_7, { accessible: false, importantForAccessibility: "no-hide-descendants", children: callback2(bounty(getQuestImpressionId[22]).Button, obj9) });
  obj2[3] = items5;
  obj1.children = callback3(bounty(getQuestImpressionId[19]).BackgroundBlurView, obj2);
  obj[1] = callback2(closure_12, obj1);
  return callback2(sourceQuestContent(getQuestImpressionId[6]).View, obj);
}
let closure_3 = ["style"];
({ StyleSheet: closure_6, View: error, Pressable } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = importDefaultResult.createAnimatedComponent(Pressable);
let closure_13 = createCacheKey.createStyles(() => {
  let obj = { outerContainer: null, ctaPressable: null, cta: null, ctaLogoContainer: null, ctaLogo: null, ctaInfo: null };
  obj = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16, alignItems: "center" };
  obj[0] = obj;
  obj = {};
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_TOP_HIGH);
  obj.alignSelf = "stretch";
  obj.borderWidth = 1;
  obj.borderColor = "transparent";
  obj.borderRadius = ThemesDefault.radii.lg;
  obj.overflow = "hidden";
  obj[1] = obj;
  obj[2] = { flexDirection: "row", alignItems: "center", paddingLeft: ThemesDefault.space.PX_12, paddingRight: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_12 };
  obj1 = { flexDirection: "row", alignItems: "center", paddingLeft: ThemesDefault.space.PX_12, paddingRight: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_12 };
  obj[3] = { width: 40, height: 40, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.md, overflow: "hidden" };
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj[4] = {};
  obj[5] = { flex: 1, justifyContent: "center", gap: 2 };
  return obj;
});
let fn = function n(value) {
  const obj = { opacity: CONFIG_NEVER_ANIMATE_TIMING.withTiming(value, timingNone.timingStandard, "respect-motion-settings") };
  return obj;
};
let obj = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingStandard: require("timingNone").timingStandard };
fn.__closure = obj;
fn.__workletHash = 2981824910249;
fn.__initData = { code: "function BountiesModalAdvertiserCtaTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
const fn2 = function s(value, fn2) {
  const obj = { opacity: CONFIG_NEVER_ANIMATE_TIMING.withTiming(value, timingNone.timingFast, "respect-motion-settings", fn2) };
  return obj;
};
obj = { withTiming: require("CONFIG_NEVER_ANIMATE_TIMING").withTiming, timingFast: require("timingNone").timingFast };
fn2.__closure = obj;
fn2.__workletHash = 15850601331978;
fn2.__initData = { code: "function BountiesModalAdvertiserCtaTsx2(visible,cleanUp){const{withTiming,timingFast}=this.__closure;return{opacity:withTiming(visible,timingFast,'respect-motion-settings',cleanUp)};}" };
let closure_17 = { code: "function BountiesModalAdvertiserCtaTsx3(){const{withTiming,interpolate,visibility,visible,timingStandard,timingFast}=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};}" };
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default function BountiesModalAdvertiserCta(visible) {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.create(null));
  let num;
  let animatedStyle;
  let obj = visible(animatedStyle[23]);
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  obj1 = visible(animatedStyle[24]);
  let items = [closure_8];
  num = 0;
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (visible) {
    num = 1;
  }
  let tmp2Result = tmp2(tmp3[6]);
  fn = function s() {
    let obj = visible(animatedStyle[9]);
    const obj2 = visible(animatedStyle[6]);
    const tmp2 = visible(animatedStyle[10]);
    obj = { transform: null };
    obj = { translateY: obj.withTiming(visible(animatedStyle[6]).interpolate(num, [0, 1], [8, 0]), visible ? tmp2.timingStandard : tmp2.timingFast) };
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj = { withTiming: tmp2(tmp3[9]).withTiming, interpolate: tmp2(tmp3[6]).interpolate, visibility: num, visible, timingStandard: tmp2(tmp3[10]).timingStandard, timingFast: tmp2(tmp3[10]).timingFast };
  fn.__closure = obj;
  fn.__workletHash = 252868467367;
  fn.__initData = closure_17;
  animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const items1 = [animatedStyle];
  const callback = React.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    obj.transformStyle = animatedStyle;
    return closure_1_10(closure_1_16, obj);
  }, items1);
  tmp2Result = tmp2(tmp3[25]);
  obj = { visible, entranceTiming: tmp2(tmp3[10]).timingStandard, exitTiming: tmp2(tmp3[10]).timingFast };
  const visibilityTransition = tmp2Result.useVisibilityTransition(obj);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    obj1 = { useReducedMotion: null, item: null, entering: null, exiting: null, renderItem: null };
    obj1[0] = stateFromStores;
    let tmp18;
    if (visible) {
      tmp18 = merged;
    }
    obj1[1] = tmp18;
    obj1[2] = fn;
    obj1[3] = fn2;
    obj1[4] = callback;
    shouldRender = callback2(num(tmp3[26]), obj1);
    const tmp15 = callback2;
    const tmp17 = num(tmp3[26]);
  } else if (shouldRender) {
    let obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.opacityStyle = tmp9;
    obj2.transformStyle = animatedStyle;
    shouldRender = callback2(BountiesModalAdvertiserCtaContent, obj2);
  }
  return shouldRender;
};