// === Module 14854: BountiesModalAdvertiserCta ===

// Module 14854 (BountiesModalAdvertiserCta)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import QuestContent from "QuestContent" /* 5628 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10918 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require, bounty, obj1;

let Pressable;
let c9;
let closure_12;
let map1;
let metroImportAll;
let closure_3 = ["style"];
let closure_4 = ["style"];
let closure_5 = ["visible"];
({ StyleSheet: metroImportAll, View: c9, Pressable } = react_native);
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = ReanimatedRexport.createAnimatedComponent(Pressable);
let c15 = 40;
let closure_16 = createStyles.createStyles(() => {
  let obj2;
  let obj4;
  let rect;
  const obj = { outerContainer: rect, ctaPressable: obj2, cta: { flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, overflow: "hidden" }, ctaLogoContainer: size, ctaLogo: obj4, ctaInfo: { flex: 1, justifyContent: "center" } };
  rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
  obj2 = { alignSelf: "stretch", borderRadius: nativeDefault.radii.lg };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  ({ flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, overflow: "hidden" });
  size = { width: v40, height: v40, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj4 = {};
  const merged1 = Object.assign(metroImportAll.absoluteFillObject);
  return obj;
});
let entering = function o(sharedValue) {
  let obj2;
  const obj = { opacity: obj2.withTiming(sharedValue, timingPresets.timingStandard, "respect-motion-settings") };
  obj2 = timing;
  return obj;
};
let obj = { withTiming: timing.withTiming, timingStandard: timingPresets.timingStandard };
entering.__closure = obj;
entering.__workletHash = 2981824910249;
entering.__initData = { code: "function BountiesModalAdvertiserCtaTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
let fn2 = function l(sharedValue, fn) {
  let obj2;
  const obj = { opacity: obj2.withTiming(sharedValue, timingPresets.timingFast, "respect-motion-settings", fn) };
  obj2 = timing;
  return obj;
};
let obj2 = { withTiming: timing.withTiming, timingFast: timingPresets.timingFast };
fn2.__closure = obj2;
fn2.__workletHash = 15850601331978;
fn2.__initData = { code: "function BountiesModalAdvertiserCtaTsx2(visible,cleanUp){const{withTiming,timingFast}=this.__closure;return{opacity:withTiming(visible,timingFast,'respect-motion-settings',cleanUp)};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  let getQuestImpressionId;
  let opacityStyle;
  let transformStyle;
  let tmp = bounty;
  let obj = bounty(getQuestImpressionId[12]);
  const cResult = obj.c(53);
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  ({ opacityStyle, transformStyle } = bounty);
  const tmp4 = closure_16();
  if (cResult[0] !== bounty) {
    const tmpResult = tmp(getQuestImpressionId[13]);
    const bountyCtaInfo = tmpResult.getBountyCtaInfo(bounty);
    let scaledImageUrl;
    if (null != bountyCtaInfo.iconImageUri) {
      size = { assetUrl: bountyCtaInfo.iconImageUri, width: v40, height: v40 };
      const tmpResult5 = tmp(getQuestImpressionId[14]);
      scaledImageUrl = tmpResult5.getScaledImageUrl(size);
    }
    cResult[0] = bounty;
    cResult[1] = bountyCtaInfo;
    cResult[2] = scaledImageUrl;
  }
  const tmpResult6 = tmp(getQuestImpressionId[6]);
  const sharedValue = tmpResult6.useSharedValue(0);
  const tmpResult7 = tmp(getQuestImpressionId[15]);
  const buttonPressAnimationProps = tmpResult7.useButtonPressAnimationProps(sharedValue);
  if (cResult[3] !== buttonPressAnimationProps) {
    const style = buttonPressAnimationProps.style;
    cResult[3] = buttonPressAnimationProps;
    cResult[4] = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
    cResult[5] = style;
    const tmp17 = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
  }
  const tmpResult8 = tmp(getQuestImpressionId[16]);
  getQuestImpressionId = tmpResult8.useGetQuestImpressionId();
  if (cResult[6] === bounty.cta) {
    if (cResult[7] === bounty.id) {
      if (cResult[8] === getQuestImpressionId) {
        let tmp19;
        if (cResult[9] === sourceQuestContent) {
          tmp19 = cResult[10];
        }
        closure_3 = tmp19;
        if (cResult[11] !== tmp19) {
          class F {
            constructor() {
              tmp = closure_3(closure_0(closure_2[20]).QuestContent.VIDEO_MODAL_MOBILE);
              return;
            }
          }
          cResult[11] = tmp19;
          cResult[12] = F;
        } else {
          class F {
            constructor() {
              tmp = closure_3(closure_0(closure_2[20]).QuestContent.VIDEO_MODAL_MOBILE);
              return;
            }
          }
        }
        if (cResult[13] !== tmp19) {
          class E {
            constructor() {
              tmp = closure_3(closure_0(closure_2[20]).QuestContent.VIDEO_MODAL_MOBILE_FOOTER);
              return;
            }
          }
          cResult[13] = tmp19;
          cResult[14] = E;
        } else {
          class E {
            constructor() {
              tmp = closure_3(closure_0(closure_2[20]).QuestContent.VIDEO_MODAL_MOBILE_FOOTER);
              return;
            }
          }
        }
        if (cResult[15] === opacityStyle) {
          class E {
            constructor() {
              tmp = closure_3(closure_0(closure_2[20]).QuestContent.VIDEO_MODAL_MOBILE_FOOTER);
              return;
            }
          }
        }
        const items = [tmp4.outerContainer, opacityStyle, transformStyle];
        cResult[15] = opacityStyle;
        cResult[16] = tmp4.outerContainer;
        cResult[17] = transformStyle;
        cResult[18] = items;
      }
    }
  }
  class M {
    constructor(arg0) {
      tmp = closure_0(closure_2[17]);
      obj = { adContentId: bounty.id, adCreativeType: closure_0(closure_2[18]).AdCreativeType.BOUNTY, cta: bounty.cta };
      openAdGameLinkDirectly = tmp.openAdGameLinkDirectly;
      obj1 = { content: bounty, ctaContent: closure_0(closure_2[19]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_2(), sourceQuestContent };
      result = openAdGameLinkDirectly(obj, obj1);
      return;
    }
  }
  cResult[6] = bounty.cta;
  cResult[7] = bounty.id;
  cResult[8] = getQuestImpressionId;
  cResult[9] = sourceQuestContent;
  cResult[10] = M;
  tmp19 = M;
}) : ((bounty) => {
  let BackgroundBlurView;
  let items3;
  let items4;
  let items5;
  let obj10;
  let obj3;
  let obj4;
  let obj6;
  let obj8;
  let opacityStyle;
  let transformStyle;
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let getQuestImpressionId;
  let callback;
  ({ opacityStyle, transformStyle } = bounty);
  let tmp = closure_16();
  let obj = bounty(getQuestImpressionId[13]);
  const bountyCtaInfo = obj.getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    size = { assetUrl: bountyCtaInfo.iconImageUri, width: v40, height: v40 };
    const tmp2Result = bounty(getQuestImpressionId[14]);
    scaledImageUrl = tmp2Result.getScaledImageUrl(size);
  }
  const tmp2Result4 = bounty(getQuestImpressionId[6]);
  const sharedValue = tmp2Result4.useSharedValue(0);
  const tmp2Result5 = bounty(getQuestImpressionId[15]);
  const buttonPressAnimationProps = tmp2Result5.useButtonPressAnimationProps(sharedValue);
  const style = buttonPressAnimationProps.style;
  const tmp9 = _objectWithoutProperties(buttonPressAnimationProps, closure_4);
  const tmp2Result6 = bounty(getQuestImpressionId[16]);
  getQuestImpressionId = tmp2Result6.useGetQuestImpressionId();
  const items = [, , , ];
  ({ id: arr[0], cta: arr[1] } = bounty);
  items[2] = sourceQuestContent;
  items[3] = getQuestImpressionId;
  callback = react.useCallback((content) => {
    const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
    const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: bounty.cta };
    const obj2 = { content, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    const result = openAdGameLinkDirectly(obj, obj2);
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = react.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE);
  }, items1);
  const callback2 = react.useCallback(() => {
    callback(QuestContent.QuestContent.VIDEO_MODAL_MOBILE_FOOTER);
  }, items2);
  let obj2 = { style: items3, children: closure_12(closure_14, obj3) };
  items3 = [tmp.outerContainer, opacityStyle, transformStyle];
  obj3 = { onPress: callback1, accessibilityRole: "button", accessibilityLabel: bountyCtaInfo.label, style: items4, children: closure_13(BackgroundBlurView, obj4) };
  const View = sourceQuestContent(tmp3[6]).View;
  const merged = Object.assign(tmp9);
  items4 = [tmp.ctaPressable, style];
  obj4 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue, children: items5 };
  const obj5 = { style: tmp.ctaLogoContainer, children: closure_12(sourceQuestContent(getQuestImpressionId[21]), obj6) };
  BackgroundBlurView = tmp2(tmp3[24]).BackgroundBlurView;
  obj6 = { source: { uri: scaledImageUrl }, style: tmp.ctaLogo, resizeMode: "cover" };
  items5 = [closure_12(closure_9, obj5), , ];
  const obj7 = { style: tmp.ctaInfo, children: closure_12(bounty(getQuestImpressionId[22]).Text, obj8) };
  obj8 = { lineClamp: 2, variant: "text-sm/semibold", color: "text-default", children: bountyCtaInfo.label };
  items5[1] = closure_12(closure_9, obj7);
  const obj9 = { accessible: false, importantForAccessibility: "no-hide-descendants", children: closure_12(bounty(getQuestImpressionId[23]).Button, obj10) };
  obj10 = { variant: "primary-overlay", text: bountyCtaInfo.buttonLabel, size: "sm", onPress: callback2 };
  items5[2] = closure_12(closure_9, obj9);
  return closure_12(View, obj2);
});
const __initData = { code: "function BountiesModalAdvertiserCtaTsx3(){const{withTiming,interpolate,visibility,visible,timingStandard,timingFast}=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};}" };
const __initData2 = { code: "function BountiesModalAdvertiserCtaTsx4(){const{withTiming,interpolate,visibility,visible,timingStandard,timingFast}=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let animatedStyle;
  let closure_0;
  let opacityStyle;
  let shouldRender;
  let tmp10;
  let tmp11;
  let tmp15;
  let tmp16;
  let tmp4;
  let useReducedMotion;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(18);
  if (cResult[0] !== visible) {
    visible = visible.visible;
    _require = visible;
    const tmp8 = _objectWithoutProperties(visible, closure_5);
    cResult[0] = visible;
    cResult[1] = tmp8;
    cResult[2] = visible;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
  }
  const tmpResult = tmp(animatedStyle[25]);
  const isBountiesModalTransitionsRefactorEnabled = tmpResult.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    entering = function b() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[3] = items;
    cResult[4] = entering;
    tmp11 = entering;
    tmp10 = items;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult4 = tmp(animatedStyle[26]);
  const stateFromStores = tmpResult4.useStateFromStores(tmp10, tmp11);
  let num6 = 0;
  if (tmp5) {
    num6 = 1;
  }
  fn2 = function h() {
    let items;
    const withTiming = timing.withTiming;
    timing;
    const obj = ReanimatedRexport2;
    const interpolateResult = obj.interpolate(num6, [0, 1], [8, 0]);
    const tmp3 = timingPresets;
    const obj2 = { transform: items };
    items = [{ translateY: withTiming(interpolateResult, closure_0 ? tmp3.timingStandard : tmp3.timingFast) }];
    ({ translateY: withTiming(interpolateResult, closure_0 ? tmp3.timingStandard : tmp3.timingFast) });
    return obj2;
  };
  const tmpResult5 = tmp(animatedStyle[6]);
  let obj2 = { withTiming: tmp(tmp2[9]).withTiming, interpolate: tmp(tmp2[6]).interpolate, visibility: num6, visible: tmp5, timingStandard: tmp(tmp2[10]).timingStandard, timingFast: tmp(tmp2[10]).timingFast };
  fn2.__closure = obj2;
  fn2.__workletHash = 252868467367;
  fn2.__initData = __initData;
  animatedStyle = tmpResult5.useAnimatedStyle(fn2);
  if (cResult[5] !== animatedStyle) {
    const fn3 = function p(arg0, opacityStyle) {
      const obj = { opacityStyle, transformStyle: animatedStyle };
      const merged = Object.assign(arg0);
      return closure_12(closure_19, obj);
    };
    cResult[5] = animatedStyle;
    cResult[6] = fn3;
    tmp15 = fn3;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp5) {
    const obj3 = { visible: tmp5, entranceTiming: tmp(animatedStyle[10]).timingStandard, exitTiming: tmp(animatedStyle[10]).timingFast };
    cResult[7] = tmp5;
    cResult[8] = obj3;
    tmp16 = obj3;
  } else {
    tmp16 = cResult[8];
  }
  const tmpResult6 = tmp(animatedStyle[27]);
  const visibilityTransition = tmpResult6.useVisibilityTransition(tmp16);
  ({ opacityStyle, shouldRender } = visibilityTransition);
  if (isBountiesModalTransitionsRefactorEnabled) {
    let tmp25;
    if (tmp5) {
      tmp25 = tmp4;
    }
    if (cResult[9] === tmp15) {
      if (cResult[10] === tmp25) {
        let tmp26;
        if (cResult[11] === stateFromStores) {
          tmp26 = cResult[12];
        }
        return tmp26;
      }
    }
    const obj4 = { useReducedMotion: stateFromStores, item: tmp25, entering, exiting: fn2, renderItem: tmp15 };
    const tmp31 = closure_12(num6(animatedStyle[28]), obj4);
    cResult[9] = tmp15;
    cResult[10] = tmp25;
    cResult[11] = stateFromStores;
    cResult[12] = tmp31;
    tmp26 = tmp31;
  } else {
    if (cResult[13] === opacityStyle) {
      if (cResult[14] === tmp4) {
        if (cResult[15] === shouldRender) {
          let tmp18;
          if (cResult[16] === animatedStyle) {
            tmp18 = cResult[17];
          }
          return tmp18;
        }
      }
    }
    let tmp19 = shouldRender;
    if (tmp19) {
      const obj5 = { opacityStyle, transformStyle: animatedStyle };
      let merged = Object.assign(tmp4);
      tmp19 = closure_12(closure_19, obj5);
    }
    cResult[13] = opacityStyle;
    cResult[14] = tmp4;
    cResult[15] = shouldRender;
    cResult[16] = animatedStyle;
    cResult[17] = tmp19;
    tmp18 = tmp19;
  }
}) : ((visible) => {
  let tmp18;
  let useReducedMotion;
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let animatedStyle;
  let tmp3 = animatedStyle;
  let obj = visible(animatedStyle[25]);
  const isBountiesModalTransitionsRefactorEnabled = obj.useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  let obj2 = visible(animatedStyle[26]);
  let items = [AccessibilityStore];
  let num = 0;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (visible) {
    num = 1;
  }
  entering = function s() {
    let items;
    const withTiming = timing.withTiming;
    timing;
    const obj = ReanimatedRexport2;
    const interpolateResult = obj.interpolate(num, [0, 1], [8, 0]);
    const tmp3 = timingPresets;
    const obj2 = { transform: items };
    items = [{ translateY: withTiming(interpolateResult, visible ? tmp3.timingStandard : tmp3.timingFast) }];
    ({ translateY: withTiming(interpolateResult, visible ? tmp3.timingStandard : tmp3.timingFast) });
    return obj2;
  };
  const tmp2Result = visible(tmp3[6]);
  const obj3 = { withTiming: tmp2(tmp3[9]).withTiming, interpolate: tmp2(tmp3[6]).interpolate, visibility: num, visible, timingStandard: tmp2(tmp3[10]).timingStandard, timingFast: tmp2(tmp3[10]).timingFast };
  entering.__closure = obj3;
  entering.__workletHash = 16458405086304;
  entering.__initData = __initData2;
  animatedStyle = tmp2Result.useAnimatedStyle(entering);
  const items1 = [animatedStyle];
  const callback = react.useCallback((arg0, opacityStyle) => {
    const obj = { opacityStyle, transformStyle: animatedStyle };
    const merged = Object.assign(arg0);
    return closure_12(closure_19, obj);
  }, items1);
  const tmp2Result2 = visible(tmp3[27]);
  const obj4 = { visible, entranceTiming: visible(tmp3[10]).timingStandard, exitTiming: visible(tmp3[10]).timingFast };
  const visibilityTransition = tmp2Result2.useVisibilityTransition(obj4);
  let shouldRender = visibilityTransition.shouldRender;
  if (isBountiesModalTransitionsRefactorEnabled) {
    const obj5 = { useReducedMotion: stateFromStores, item: tmp18, entering, exiting: fn2, renderItem: callback };
    tmp18 = undefined;
    const tmp17 = num(tmp3[28]);
    if (visible) {
      tmp18 = merged;
    }
    shouldRender = closure_12(tmp17, obj5);
  } else if (shouldRender) {
    const obj6 = { opacityStyle: tmp9, transformStyle: animatedStyle };
    const merged1 = Object.assign(merged);
    shouldRender = closure_12(closure_19, obj6);
  }
  return shouldRender;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default tmp4;