// === Module 14854: BountiesModalAdvertiserCta ===

// Module 14854 (BountiesModalAdvertiserCta)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import QuestContent from "QuestContent" /* 5628 */;
import AdCreativeType from "AdCreativeType" /* 5630 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10918 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;

require = fn;
let closure_3 = ["style"];
let closure_4 = ["style"];
let closure_5 = ["visible"];
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_8, View: closure_9, Pressable } = get_ActivityIndicator);
const QuestsExperimentLocations = fn(5623).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = ReanimatedRexport.createAnimatedComponent(Pressable);
let c15 = 40;
const createStyles = fn(4890);
let closure_16 = createStyles.createStyles(() => {
  const obj = { outerContainer: null, ctaPressable: null, cta: null, ctaLogoContainer: null, ctaLogo: null, ctaInfo: null };
  const rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
  obj.outerContainer = rect;
  const obj2 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj2.alignSelf = "stretch";
  obj2.borderRadius = nativeDefault.radii.lg;
  obj.ctaPressable = obj2;
  obj.cta = { flexDirection: "row", alignItems: "center", paddingLeft: nativeDefault.space.PX_12, paddingRight: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
  const size = { width: v40, height: v40, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj.ctaLogoContainer = size;
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.ctaLogo = {};
  obj.ctaInfo = { flex: 1, justifyContent: "center" };
  return obj;
});
let entering = function o(value) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingStandard, "respect-motion-settings") };
  return obj;
};
entering.__closure = { withTiming: fn(4891).withTiming, timingStandard: fn(4894).timingStandard };
entering.__workletHash = 2981824910249;
entering.__initData = { code: "function BountiesModalAdvertiserCtaTsx1(visible){const{withTiming,timingStandard}=this.__closure;return{opacity:withTiming(visible,timingStandard,'respect-motion-settings')};}" };
let fn2 = function l(value, fn) {
  const obj = { opacity: timing.withTiming(value, timingPresets.timingFast, "respect-motion-settings", fn) };
  return obj;
};
let obj = { withTiming: fn(4891).withTiming, timingStandard: fn(4894).timingStandard };
fn2.__closure = { withTiming: fn(4891).withTiming, timingFast: fn(4894).timingFast };
fn2.__workletHash = 15850601331978;
fn2.__initData = { code: "function BountiesModalAdvertiserCtaTsx2(visible,cleanUp){const{withTiming,timingFast}=this.__closure;return{opacity:withTiming(visible,timingFast,'respect-motion-settings',cleanUp)};}" };
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((bounty) => {
  const cResult = bounty(getQuestImpressionId[12]).c(53);
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  ({ opacityStyle, transformStyle } = bounty);
  const tmp4 = closure_16();
  if (cResult[0] !== bounty) {
    const bountyCtaInfo = tmp(tmp2[13]).getBountyCtaInfo(bounty);
    let scaledImageUrl;
    if (null != bountyCtaInfo.iconImageUri) {
      const size = { assetUrl: bountyCtaInfo.iconImageUri, width: v40, height: v40 };
      scaledImageUrl = tmp(tmp2[14]).getScaledImageUrl(size);
      const tmpResult5 = tmp(tmp2[14]);
    }
    cResult[0] = bounty;
    cResult[1] = bountyCtaInfo;
    cResult[2] = scaledImageUrl;
    const tmpResult = tmp(tmp2[13]);
  }
  let obj = bounty(getQuestImpressionId[12]);
  const sharedValue = bounty(getQuestImpressionId[6]).useSharedValue(0);
  const tmpResult6 = bounty(getQuestImpressionId[6]);
  const buttonPressAnimationProps = bounty(getQuestImpressionId[15]).useButtonPressAnimationProps(sharedValue);
  if (cResult[3] !== buttonPressAnimationProps) {
    const style = buttonPressAnimationProps.style;
    const tmp17 = _objectWithoutProperties(buttonPressAnimationProps, closure_3);
    cResult[3] = buttonPressAnimationProps;
    cResult[4] = tmp17;
    cResult[5] = style;
  }
  const tmpResult7 = bounty(getQuestImpressionId[15]);
  getQuestImpressionId = bounty(getQuestImpressionId[16]).useGetQuestImpressionId();
  if (cResult[6] === bounty.cta) {
    if (cResult[7] === bounty.id) {
      if (cResult[8] === getQuestImpressionId) {
        if (cResult[9] === sourceQuestContent) {
          let tmp19 = cResult[10];
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
      obj = closure_0(closure_2[17]);
      obj1 = { adContentId: bounty.id, adCreativeType: closure_0(closure_2[18]).AdCreativeType.BOUNTY, cta: bounty.cta };
      obj4 = { content: bounty, ctaContent: closure_0(closure_2[19]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_2(), sourceQuestContent };
      result = obj.openAdGameLinkDirectly(obj1, obj4);
      return;
    }
  }
  cResult[6] = bounty.cta;
  cResult[7] = bounty.id;
  cResult[8] = getQuestImpressionId;
  cResult[9] = sourceQuestContent;
  cResult[10] = M;
  tmp19 = M;
  const tmpResult8 = bounty(getQuestImpressionId[16]);
}) : ((bounty) => {
  bounty = bounty.bounty;
  const sourceQuestContent = bounty.sourceQuestContent;
  let getQuestImpressionId;
  let callback;
  ({ opacityStyle, transformStyle } = bounty);
  const tmp = closure_16();
  const bountyCtaInfo = bounty(getQuestImpressionId[13]).getBountyCtaInfo(bounty);
  let scaledImageUrl;
  if (null != bountyCtaInfo.iconImageUri) {
    const size = { assetUrl: bountyCtaInfo.iconImageUri, width: v40, height: v40 };
    scaledImageUrl = tmp2(tmp3[14]).getScaledImageUrl(size);
    const tmp2Result = tmp2(tmp3[14]);
  }
  let obj = bounty(getQuestImpressionId[13]);
  const sharedValue = bounty(getQuestImpressionId[6]).useSharedValue(0);
  const tmp2Result4 = bounty(getQuestImpressionId[6]);
  const buttonPressAnimationProps = bounty(getQuestImpressionId[15]).useButtonPressAnimationProps(sharedValue);
  const tmp2Result5 = bounty(getQuestImpressionId[15]);
  const tmp9 = _objectWithoutProperties(buttonPressAnimationProps, closure_4);
  getQuestImpressionId = bounty(getQuestImpressionId[16]).useGetQuestImpressionId();
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
  const merged = Object.assign(tmp9);
  obj3.onPress = callback1;
  obj3.accessibilityRole = "button";
  obj3.accessibilityLabel = bountyCtaInfo.label;
  const items4 = [tmp.ctaPressable, buttonPressAnimationProps.style];
  obj3.style = items4;
  const obj4 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue, children: null };
  const obj5 = { style: tmp.ctaLogoContainer, children: closure_12(sourceQuestContent(getQuestImpressionId[21]), { source: { uri: scaledImageUrl }, style: tmp.ctaLogo, resizeMode: "cover" }) };
  const items5 = [closure_12(closure_9, obj5), , ];
  const obj7 = { style: tmp.ctaInfo, children: closure_12(bounty(getQuestImpressionId[22]).Text, { lineClamp: 2, variant: "text-sm/semibold", color: "text-default", children: bountyCtaInfo.label }) };
  items5[1] = closure_12(closure_9, obj7);
  const obj9 = { accessible: false, importantForAccessibility: "no-hide-descendants", children: closure_12(bounty(getQuestImpressionId[23]).Button, { variant: "primary-overlay", text: bountyCtaInfo.buttonLabel, size: "sm", onPress: callback2 }) };
  items5[2] = closure_12(closure_9, obj9);
  obj4.children = items5;
  obj3.children = closure_13(bounty(getQuestImpressionId[24]).BackgroundBlurView, obj4);
  obj2.children = closure_12(closure_14, obj3);
  return closure_12(sourceQuestContent(getQuestImpressionId[6]).View, obj2);
});
const __initData = { code: "function BountiesModalAdvertiserCtaTsx3(){const{withTiming,interpolate,visibility,visible,timingStandard,timingFast}=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};}" };
const __initData2 = { code: "function BountiesModalAdvertiserCtaTsx4(){const{withTiming,interpolate,visibility,visible,timingStandard,timingFast}=this.__closure;return{transform:[{translateY:withTiming(interpolate(visibility,[0,1],[8,0]),visible?timingStandard:timingFast)}]};}" };
ReactCompilerGating = fn(558);
let obj3 = { withTiming: fn(4891).withTiming, timingFast: fn(4894).timingFast };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalAdvertiserCta.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const cResult = require("c").c(18);
  if (cResult[0] !== visible) {
    visible = visible.visible;
    _require = visible;
    const tmp8 = _objectWithoutProperties(visible, closure_5);
    cResult[0] = visible;
    cResult[1] = tmp8;
    cResult[2] = visible;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
  }
  let obj = require("c");
  const isBountiesModalTransitionsRefactorEnabled = require("BountiesModalTransitionsRefactorExperiment").useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    entering = function b() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[3] = items;
    cResult[4] = entering;
    let tmp11 = entering;
    let tmp10 = items;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult = require("BountiesModalTransitionsRefactorExperiment");
  const stateFromStores = require("initialize").useStateFromStores(tmp10, tmp11);
  let num6 = 0;
  if (tmp5) {
    num6 = 1;
  }
  const tmpResult4 = require("initialize");
  fn2 = function h() {
    const obj = timing;
    const tmp2 = timingPresets;
    const obj3 = { transform: null };
    const interpolateResult = ReanimatedRexport2.interpolate(num6, [0, 1], [8, 0]);
    const items = [{ translateY: obj.withTiming(ReanimatedRexport2.interpolate(num6, [0, 1], [8, 0]), closure_0 ? tmp2.timingStandard : tmp2.timingFast) }];
    obj3.transform = items;
    return obj3;
  };
  const tmpResult5 = require("ReanimatedRexport");
  fn2.__closure = { withTiming: require("timing").withTiming, interpolate: require("ReanimatedRexport").interpolate, visibility: num6, visible: tmp5, timingStandard: require("timingPresets").timingStandard, timingFast: require("timingPresets").timingFast };
  fn2.__workletHash = 252868467367;
  fn2.__initData = __initData;
  animatedStyle = tmpResult5.useAnimatedStyle(fn2);
  if (cResult[5] !== animatedStyle) {
    const fn3 = function p(arg0, opacityStyle) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.opacityStyle = opacityStyle;
      obj.transformStyle = animatedStyle;
      return __initData(closure_19, obj);
    };
    cResult[5] = animatedStyle;
    cResult[6] = fn3;
    let tmp15 = fn3;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== tmp5) {
    let obj3 = { visible: tmp5, entranceTiming: tmp(tmp2[10]).timingStandard, exitTiming: tmp(tmp2[10]).timingFast };
    cResult[7] = tmp5;
    cResult[8] = obj3;
    let tmp16 = obj3;
  } else {
    tmp16 = cResult[8];
  }
  let obj2 = { withTiming: require("timing").withTiming, interpolate: require("ReanimatedRexport").interpolate, visibility: num6, visible: tmp5, timingStandard: require("timingPresets").timingStandard, timingFast: require("timingPresets").timingFast };
  const visibilityTransition = require("useVisibilityTransition").useVisibilityTransition(tmp16);
  ({ opacityStyle, shouldRender } = visibilityTransition);
  if (isBountiesModalTransitionsRefactorEnabled) {
    let tmp25;
    if (tmp5) {
      tmp25 = tmp4;
    }
    if (cResult[9] === tmp15) {
      if (cResult[10] === tmp25) {
        if (cResult[11] === stateFromStores) {
          let tmp26 = cResult[12];
        }
        return tmp26;
      }
    }
    const obj4 = { useReducedMotion: stateFromStores, item: tmp25, entering, exiting: fn2, renderItem: tmp15 };
    const tmp31 = closure_12(num6(tmp2[28]), obj4);
    cResult[9] = tmp15;
    cResult[10] = tmp25;
    cResult[11] = stateFromStores;
    cResult[12] = tmp31;
    tmp26 = tmp31;
  } else {
    if (cResult[13] === opacityStyle) {
      if (cResult[14] === tmp4) {
        if (cResult[15] === shouldRender) {
          if (cResult[16] === animatedStyle) {
            let tmp18 = cResult[17];
          }
          return tmp18;
        }
      }
    }
    let tmp19 = shouldRender;
    if (shouldRender) {
      const obj5 = {};
      let merged = Object.assign(tmp4);
      obj5.opacityStyle = opacityStyle;
      obj5.transformStyle = animatedStyle;
      tmp19 = closure_12(closure_19, obj5);
    }
    cResult[13] = opacityStyle;
    cResult[14] = tmp4;
    cResult[15] = shouldRender;
    cResult[16] = animatedStyle;
    cResult[17] = tmp19;
    tmp18 = tmp19;
  }
  const tmpResult6 = require("useVisibilityTransition");
}) : ((visible) => {
  visible = visible.visible;
  let merged = Object.assign(visible, Object.assign({ visible: 0 }));
  let animatedStyle;
  const isBountiesModalTransitionsRefactorEnabled = visible(animatedStyle[25]).useIsBountiesModalTransitionsRefactorEnabled(QuestsExperimentLocations.VIDEO_MODAL_MOBILE);
  let obj = visible(animatedStyle[25]);
  let items = [AccessibilityStore];
  let num = 0;
  const stateFromStores = visible(animatedStyle[26]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (visible) {
    num = 1;
  }
  let obj2 = visible(animatedStyle[26]);
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
  entering.__workletHash = 16458405086304;
  entering.__initData = __initData2;
  animatedStyle = tmp2Result.useAnimatedStyle(entering);
  const items1 = [animatedStyle];
  const callback = noop.useCallback((arg0, opacityStyle) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.opacityStyle = opacityStyle;
    obj.transformStyle = animatedStyle;
    return __initData(closure_19, obj);
  }, items1);
  let obj3 = { withTiming: visible(animatedStyle[9]).withTiming, interpolate: visible(animatedStyle[6]).interpolate, visibility: num, visible, timingStandard: visible(animatedStyle[10]).timingStandard, timingFast: visible(animatedStyle[10]).timingFast };
  const tmp2Result2 = visible(animatedStyle[27]);
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
    shouldRender = closure_12(num(tmp3[28]), obj5);
    const tmp17 = num(tmp3[28]);
  } else if (shouldRender) {
    const obj6 = {};
    const merged1 = Object.assign(merged);
    obj6.opacityStyle = tmp9;
    obj6.transformStyle = animatedStyle;
    shouldRender = closure_12(closure_19, obj6);
  }
  return shouldRender;
});