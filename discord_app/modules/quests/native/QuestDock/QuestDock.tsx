// === Module 14717: QuestDockWithGestureAnimation ===

// Module 14717 (QuestDockWithGestureAnimation)
import ThemesDefault from "Themes" /* 712 */;
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource" /* 5355 */;
import useQuests from "useQuests" /* 11021 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_11 from "QuestDockMode" /* 14627 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5352 */;
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT" /* 14629 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { ThemeTypes } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
function QuestDockWithGestureAnimation(appThemedBackgroundColor) {
  appThemedBackgroundColor = appThemedBackgroundColor.appThemedBackgroundColor;
  const layoutVariant = appThemedBackgroundColor.layoutVariant;
  importDefault = tmp;
  let str = "fixed";
  ({ collapsedContent, expandedContent, backgroundContent } = appThemedBackgroundColor);
  if ("flush" === layoutVariant) {
    str = "content";
  }
  let str2 = "overlay";
  if ("flush" === layoutVariant) {
    str2 = "default";
  }
  const tmp3 = callback4();
  const context = top.useContext(appThemedBackgroundColor(questDockWrapperSpecs[13]).QuestDockGestureContext);
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = top.useContext(appThemedBackgroundColor(questDockWrapperSpecs[14]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = top.useId();
  const callback = top.useCallback(() => {
    setRestingQuestDockMode(closure_1_12.COLLAPSED);
  }, items);
  let obj = appThemedBackgroundColor(questDockWrapperSpecs[15]);
  const questDockModeAnimatedReaction = obj.useQuestDockModeAnimatedReaction();
  obj1 = appThemedBackgroundColor(questDockWrapperSpecs[15]);
  const questDockDismissalReset = obj1.useQuestDockDismissalReset();
  let obj2 = appThemedBackgroundColor(questDockWrapperSpecs[16]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  let obj3 = appThemedBackgroundColor(questDockWrapperSpecs[17]);
  class F {
    constructor() {
      return restingQuestDockMode.get() === closure_1_12.EXPANDED;
    }
  }
  obj = { restingQuestDockMode, QuestDockMode: closure_12 };
  F.__closure = obj;
  F.__workletHash = 2415817673061;
  F.__initData = closure_25;
  const derivedValue = obj3.useDerivedValue(F);
  const tmp15 = importDefault(questDockWrapperSpecs[18])(derivedValue);
  top = importDefault(questDockWrapperSpecs[19])().top;
  obj5 = appThemedBackgroundColor(questDockWrapperSpecs[20]);
  const youBarTotalHeight = obj5.useYouBarTotalHeight();
  let obj6 = appThemedBackgroundColor(questDockWrapperSpecs[21]);
  const token = obj6.useToken(importDefault(questDockWrapperSpecs[12]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp18 = importDefault(questDockWrapperSpecs[22])(token);
  closure_9 = tmp18;
  let obj7 = appThemedBackgroundColor(questDockWrapperSpecs[17]);
  class V {
    constructor() {
      obj = { backgroundColor: appThemedBackgroundColor, borderBottomRightRadius: null, borderBottomLeftRadius: null, height: null, width: null, opacity: null, transform: null };
      obj2 = appThemedBackgroundColor(questDockWrapperSpecs[23]);
      obj[1] = obj2.withSpring(closure_9.get(), closure_1_15);
      obj3 = appThemedBackgroundColor(questDockWrapperSpecs[23]);
      obj[2] = obj3.withSpring(closure_9.get(), closure_1_15);
      obj[3] = questDockWrapperSpecs.get().height;
      obj[4] = questDockWrapperSpecs.get().width;
      obj4 = appThemedBackgroundColor(questDockWrapperSpecs[23]);
      obj[5] = obj4.withSpring(1, closure_1_14);
      obj = { translateX: null };
      obj6 = appThemedBackgroundColor(questDockWrapperSpecs[23]);
      obj7 = appThemedBackgroundColor(questDockWrapperSpecs[24]);
      obj[0] = obj6.withSpring(questDockWrapperSpecs.get().x + -1 * obj7.roundToNearestPixel(questDockWrapperSpecs.get().width / 2), closure_1_14);
      items = [, ];
      items[0] = obj;
      obj1 = { translateY: null };
      obj9 = appThemedBackgroundColor(questDockWrapperSpecs[23]);
      obj1[0] = obj9.withSpring(questDockWrapperSpecs.get().y, closure_1_14);
      items[1] = obj1;
      obj[6] = items;
      return obj;
    }
  }
  obj = { appThemedBackgroundColor, withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring, bottomBorderRadius: tmp18, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14, roundToNearestPixel: appThemedBackgroundColor(questDockWrapperSpecs[24]).roundToNearestPixel };
  V.__closure = obj;
  V.__workletHash = 4228984550973;
  V.__initData = closure_26;
  const animatedStyle = obj7.useAnimatedStyle(V);
  let obj9 = appThemedBackgroundColor(questDockWrapperSpecs[17]);
  const sharedValue = obj9.useSharedValue(0);
  let obj10 = appThemedBackgroundColor(questDockWrapperSpecs[17]);
  const fn = function j() {
    let obj = { transform: null };
    obj = { scale: null };
    const obj3 = appThemedBackgroundColor(questDockWrapperSpecs[23]);
    const obj4 = appThemedBackgroundColor(questDockWrapperSpecs[17]);
    obj[0] = obj3.withSpring(appThemedBackgroundColor(questDockWrapperSpecs[17]).interpolate(sharedValue.get(), [1, 0], [1, 1]), appThemedBackgroundColor(questDockWrapperSpecs[25]).springStandard);
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj1 = { withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring, interpolate: appThemedBackgroundColor(questDockWrapperSpecs[17]).interpolate, isPressed: sharedValue, springStandard: appThemedBackgroundColor(questDockWrapperSpecs[25]).springStandard };
  fn.__closure = obj1;
  fn.__workletHash = 3373473585356;
  fn.__initData = closure_27;
  const items1 = [setRestingQuestDockMode];
  const animatedStyle1 = obj10.useAnimatedStyle(fn);
  const items2 = [sharedValue];
  const callback1 = top.useCallback(() => {
    setRestingQuestDockMode(closure_1_12.EXPANDED);
  }, items1);
  const items3 = [sharedValue];
  const callback2 = top.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const callback3 = top.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  let obj12 = appThemedBackgroundColor(questDockWrapperSpecs[17]);
  const fn2 = function z() {
    let obj = appThemedBackgroundColor(questDockWrapperSpecs[23]);
    let num = 0;
    if (activeQuestDockMode.get() === closure_1_12.EXPANDED) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_1_14), height: windowDimensions.get().height };
    return obj;
  };
  obj2 = { withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring, activeQuestDockMode, QuestDockMode: closure_12, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14, windowDimensions };
  fn2.__closure = obj2;
  fn2.__workletHash = 6178969276321;
  fn2.__initData = closure_28;
  const animatedStyle2 = obj12.useAnimatedStyle(fn2);
  let obj14 = appThemedBackgroundColor(questDockWrapperSpecs[17]);
  const fn3 = function $() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === closure_1_12.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  };
  fn3.__closure = { activeQuestDockMode, QuestDockMode: closure_12 };
  fn3.__workletHash = 5416180055289;
  fn3.__initData = closure_29;
  const animatedProps = obj14.useAnimatedProps(fn3);
  let obj15 = appThemedBackgroundColor(questDockWrapperSpecs[17]);
  class J {
    constructor() {
      value = questDockWrapperSpecs.get();
      return windowDimensions.get().height - top - value.height;
    }
  }
  J.__closure = { questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  J.__workletHash = 8073454569923;
  J.__initData = closure_30;
  const derivedValue1 = obj15.useDerivedValue(J);
  let obj16 = appThemedBackgroundColor(questDockWrapperSpecs[17]);
  class Z {
    constructor() {
      obj = appThemedBackgroundColor(questDockWrapperSpecs[23]);
      obj2 = activeQuestDockMode;
      if (activeQuestDockMode.get() === closure_1_12.CLOSED) {
        num = 0;
      } else {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, closure_1_14) };
      return obj;
    }
  }
  obj3 = { withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring, activeQuestDockMode, QuestDockMode: closure_12, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14 };
  Z.__closure = obj3;
  Z.__workletHash = 6468803634518;
  Z.__initData = closure_31;
  const animatedStyle3 = obj16.useAnimatedStyle(Z);
  const tmp28 = importDefault(questDockWrapperSpecs[18])(derivedValue1);
  function ee() {
    if (closure_1) {
      if (activeQuestDockMode.get() === closure_1_12.EXPANDED) {
        let tmp4 = closure_1_16;
      }
      let obj = { borderTopLeftRadius: null, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
      obj[0] = tmp4;
      if (tmp) {
        if (activeQuestDockMode.get() === closure_1_12.EXPANDED) {
          let tmp7 = closure_1_16;
        }
        obj[1] = tmp7;
        if (tmp) {
          if (activeQuestDockMode.get() === closure_1_12.EXPANDED) {
            let value = closure_1_16;
          }
          obj[2] = value;
          if (tmp) {
            if (activeQuestDockMode.get() === closure_1_12.EXPANDED) {
              value = closure_1_16;
            }
            obj[3] = value;
            let num2 = 1;
            if (activeQuestDockMode.get() === closure_1_12.EXPANDED) {
              num2 = 0;
            }
            obj[4] = appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring(num2, closure_1_15);
            if (activeQuestDockMode.get() === closure_1_12.EXPANDED) {
              if (tmp) {
                let height = closure_1_18;
              }
              obj[5] = height;
              if (obj3.get() === closure_1_12.EXPANDED) {
                if (tmp) {
                  let width = questDockWrapperSpecs.get().width - 2 * closure_1_17;
                }
                obj[6] = width;
                let num5 = 0;
                if (tmp) {
                  let tmp16Result = tmp16(tmp17[23]);
                  let num6 = 0;
                  if (obj3.get() === closure_1_12.EXPANDED) {
                    num6 = closure_1_17;
                  }
                  num5 = tmp16Result.withSpring(num6, tmp19);
                }
                obj = { translateX: null };
                obj[0] = num5;
                const items = [obj, ];
                let num7 = 0;
                if (tmp) {
                  tmp16Result = tmp16(tmp17[23]);
                  let num8 = 0;
                  if (obj3.get() === closure_1_12.EXPANDED) {
                    num8 = closure_1_17;
                  }
                  num7 = tmp16Result.withSpring(num8, tmp19);
                }
                obj = { translateY: null };
                obj[0] = num7;
                items[1] = obj;
                obj[7] = items;
                let num9 = 0;
                if (store.get() > 0) {
                  num9 = 1;
                }
                obj[8] = num9;
                return obj;
              }
              width = questDockWrapperSpecs.get().width;
            }
            height = questDockWrapperSpecs.get().height;
            const obj2 = appThemedBackgroundColor(questDockWrapperSpecs[23]);
          }
          value = store.get();
        }
        value = store.get();
      }
      tmp7 = token;
    }
    tmp4 = token;
  }
  const obj19 = appThemedBackgroundColor(questDockWrapperSpecs[17]);
  ee.__closure = { hasInsetHeaderTile: "insetHeader" === layoutVariant, activeQuestDockMode, QuestDockMode: closure_12, QUEST_DOCK_CONTENT_BORDER_RADII: closure_16, questDockBorderRadius: token, bottomBorderRadius: tmp18, withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15, QUEST_DOCK_COLLAPSED_HEIGHT: closure_18, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17 };
  ee.__workletHash = 13161475723910;
  ee.__initData = closure_32;
  obj5 = { style: tmp3.wrapper, pointerEvents: "auto", children: null };
  const animatedStyle4 = obj19.useAnimatedStyle(ee);
  obj6 = { nativeID: id, style: tmp3.accessibilityWrapper, accessibilityViewIsModal: null, onAccessibilityEscape: null, pointerEvents: "box-none", children: null };
  let tmp35 = isScreenReaderEnabled;
  if (tmp35) {
    tmp35 = tmp15;
  }
  obj6[2] = tmp35;
  obj6[3] = callback;
  let tmp14Result = tmp14(tmp5[27]);
  obj7 = { style: animatedStyle1, children: null };
  tmp14Result = tmp14(tmp5[28]);
  const obj8 = { style: items4, layout: null, children: null };
  items4 = [tmp3.questDockWrapper, , ];
  obj9 = { bottom: youBarTotalHeight - 1 };
  items4[1] = obj9;
  items4[2] = animatedStyle;
  let obj4 = { hasInsetHeaderTile: "insetHeader" === layoutVariant, activeQuestDockMode, QuestDockMode: closure_12, QUEST_DOCK_CONTENT_BORDER_RADII: closure_16, questDockBorderRadius: token, bottomBorderRadius: tmp18, withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15, QUEST_DOCK_COLLAPSED_HEIGHT: closure_18, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17 };
  const tmp32 = closure_23;
  obj8[1] = appThemedBackgroundColor(questDockWrapperSpecs[24]).dimensionsLayoutTransition;
  obj10 = { style: tmp3.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null };
  let str3 = "auto";
  if (tmp15) {
    str3 = "none";
  }
  obj10[4] = str3;
  const intl = tmp4(tmp5[29]).intl;
  obj10[6] = intl.string(appThemedBackgroundColor(questDockWrapperSpecs[29]).t.rjVPdM);
  let str4 = "";
  if (!tmp15) {
    const intl2 = tmp4(tmp5[29]).intl;
    str4 = intl2.string(tmp4(tmp5[29]).t.n0MlOB);
  }
  const obj11 = { children: null };
  obj12 = { children: null };
  obj10[7] = str4;
  const items5 = [closure_21(closure_9, obj10), , , ];
  const obj13 = { style: items6, layout: null, pointerEvents: "none" };
  items6 = [tmp3.questDockHeaderBorder, animatedStyle4];
  const tmp14Result1 = importDefault(questDockWrapperSpecs[28]);
  const tmp39 = closure_9;
  obj13[1] = appThemedBackgroundColor(questDockWrapperSpecs[24]).dimensionsLayoutTransition;
  items5[1] = closure_21(importDefault(questDockWrapperSpecs[28]), obj13);
  obj14 = { style: items7, children: null };
  items7 = [tmp3.questDockContentWrapper, animatedStyle3];
  obj15 = { style: tmp3.questDockContentWrapper, children: null };
  const tmp14Result2 = importDefault(questDockWrapperSpecs[28]);
  const items8 = [closure_21(importDefault(questDockWrapperSpecs[30]), { hideOnExpand: "flush" === layoutVariant, children: collapsedContent }), closure_21(importDefault(questDockWrapperSpecs[31]), { expandedHeight: str, children: expandedContent })];
  obj15[1] = items8;
  const items9 = [closure_22(token, obj15), backgroundContent];
  obj14[1] = items9;
  items5[2] = closure_22(importDefault(questDockWrapperSpecs[28]), obj14);
  items5[3] = closure_21(importDefault(questDockWrapperSpecs[32]), { isExpanded: tmp15, variant: str2 });
  obj8[2] = items5;
  obj7[1] = closure_22(tmp14Result1, obj8);
  obj12[0] = closure_21(tmp14Result, obj7);
  obj6[5] = closure_21(tmp14Result, obj12);
  obj5[2] = closure_21(appThemedBackgroundColor(questDockWrapperSpecs[26]).AccessibilityViewAnimated, obj6);
  const items10 = [closure_21(token, obj5), ];
  obj16 = { style: animatedStyle2, animatedProps, children: null };
  const tmp14Result3 = importDefault(questDockWrapperSpecs[28]);
  obj16[2] = closure_21(appThemedBackgroundColor(questDockWrapperSpecs[33]).Backdrop, { onDismiss: callback, accessibleDismissStyle: { height: tmp28 } });
  items10[1] = closure_21(importDefault(questDockWrapperSpecs[28]), obj16);
  obj11[0] = items10;
  return closure_22(tmp32, obj11);
}
function QuestDockModeChangeTracker(mode) {
  let obj = useQuests;
  obj = { mode: mode.mode };
  const merged = Object.assign(callback2(mode, closure_3));
  obj.questContent = QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BAR_MOBILE;
  obj.sourceQuestContent = QuestsVisibleMessagesChangedSource.QuestContent.QUEST_BAR_MOBILE;
  const questBarOrDockModeChangeTracking = obj.useQuestBarOrDockModeChangeTracking(obj);
  return null;
}
function QuestBarRenderedTriggerPointWrapper() {
  const effect = importAllResult.useEffect(() => {
    const QuestBarRenderedTriggerPoint = callback(table[36]).QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
}
class QuestDockWithEntranceAnimation {
  constructor() {
    tmp = closure_0;
    tmp2 = closure_2;
    obj = require("getQuestDockMenuAdCreative");
    questCreative = obj.useQuestCreative();
    closure_0 = questCreative;
    obj2 = closure_7;
    tmp4 = isRendered;
    context = closure_7.useContext(require("context"));
    isRendered = context.isRendered;
    closure_2 = closure_5(closure_7.useState(() => performance.now()), 1)[0];
    closure_3 = closure_7.useRef(false);
    tmp6 = closure_36();
    tmp7 = closure_5(closure_7.useState({ width: 0, height: 0 }), 2);
    first = tmp7[0];
    closure_4 = first;
    closure_5 = tmp7[1];
    obj3 = require("initialize");
    items = [];
    items[0] = closure_11;
    closure_6 = obj3.useStateFromStores(items, () => obj.prevRestingQuestDockMode);
    obj4 = require("getIsEligibleForQuests");
    isEligibleForQuests = obj4.getIsEligibleForQuests();
    obj5 = require("useQuests");
    questBarImpressionSurvey = obj5.useQuestBarImpressionSurvey(questCreative);
    obj6 = require("module_4186");
    fn = function t() {
      let obj = questCreative(4892);
      let num = 0;
      if (isRendered) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, closure_1_37, "animate-always"), transform: null };
      let num2 = 0;
      if (!isRendered) {
        num2 = first.height;
      }
      obj = { translateY: questCreative(4892).withSpring(num2, closure_1_37) };
      const items = [obj];
      obj[1] = items;
      return obj;
    };
    obj = { withSpring: require("CONFIG_NEVER_ANIMATE").withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: closure_37, componentDimensions: first };
    fn.__closure = obj;
    fn.__workletHash = 15545726338295;
    fn.__initData = closure_38;
    animatedStyle = obj6.useAnimatedStyle(fn);
    tmp12 = closure_5(closure_7.useState(null), 2);
    first1 = tmp12[0];
    closure_7 = first1;
    closure_8 = tmp12[1];
    obj8 = require("useDeliveredDockCreative");
    staticUrl = obj8.useQuestDockHeroAsset(questCreative).staticUrl;
    obj9 = require("useDeliveredDockCreative");
    questGameLogotypeAssetUrl = obj9.useQuestGameLogotypeAssetUrl(questCreative);
    closure_10 = questGameLogotypeAssetUrl;
    userStatus = questCreative.userStatus;
    enrolledAt = undefined;
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    closure_11 = null != enrolledAt;
    tmpResult = require("useGradientBottom");
    gradientBottom = tmpResult.useGradientBottom();
    tmpResult1 = require("map");
    backgroundColor = undefined;
    token = tmpResult1.useToken(require("Themes").colors.BACKGROUND_SURFACE_HIGH);
    if (gradientBottom != null) {
      backgroundColor = gradientBottom.backgroundColor;
    }
    if (backgroundColor == null) {
      backgroundColor = token;
    }
    closure_12 = backgroundColor;
    items1 = [, , ];
    items1[0] = staticUrl;
    items1[1] = questGameLogotypeAssetUrl;
    items1[2] = questCreative.id;
    effect = obj2.useEffect(() => {
      function prefetchWithErrorReporting(arg0) {
        const self = this;
        const apply = _prefetchWithErrorReporting.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      function _prefetchWithErrorReporting() {
        const self = this;
        const tmp = first((arg0) => {
          closure_0 = arg0;
          c5 = 0;
          c6 = 0;
          c4 = 0;
          return (function*(arg0) {
            if (c6 === 2) {
              c6 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c6 = 2;
                if (0 === c5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    closure_2 = tmp3;
                    const callback = tmp7;
                    c4 = 1;
                    c5 = 2;
                    c6 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = closure_2_10.prefetch(id);
                    return obj1;
                  }
                } else if (1 === tmp7) {
                  c4 = 0;
                  obj1 = callback(closure_2_2[43]);
                  const obj2 = { source: null, quest_id: null, asset_id: null };
                  obj2[0] = closure_2_13.QUESTS_BAR_MOBILE;
                  obj2[1] = id.id;
                  obj2[2] = id;
                  obj1.track(closure_2_19.QUEST_ASSET_LOADING_FAILURE, obj2);
                  c6 = 3;
                  return { value: false, done: true };
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  c4 = 0;
                  c6 = 3;
                  return { value: true, done: true };
                }
              } catch (tmp20) {
                closure_3 = tmp20;
                if (tmp4 === c4) {
                  c6 = tmp2;
                  throw tmp20;
                } else {
                  c5 = tmp;
                }
              }
            }
          })();
        });
        closure_1 = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      function _preloadQuestDockAssets() {
        const self = this;
        const tmp = first(function*() {
          if (c3 === 2) {
            c3 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_1 = tmp5;
                  closure_0 = tmp2;
                  closure_0 = undefined;
                  const items = [];
                  if (null != closure_1_9) {
                    items.push(closure_1_0(tmp23));
                  }
                  if (null != closure_1_10) {
                    items.push(closure_1_0(tmp13));
                  }
                  c2 = 1;
                  c3 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = Promise.all(items);
                  return obj1;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = arg1;
                closure_1_8(closure_0.every((arg0) => true === arg0));
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp17) {
              c3 = tmp;
              throw tmp17;
            }
          }
        });
        closure_2 = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      !(function preloadQuestDockAssets() {
        const self = this;
        const apply = _preloadQuestDockAssets.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }, items1);
    items2 = [, ];
    items2[0] = first1;
    items2[1] = questCreative.id;
    effect1 = obj2.useEffect(() => {
      if (false === first1) {
        let obj = isRendered(7294);
        obj = { name: null, tags: null };
        obj[0] = questCreative(7299).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE;
        const _HermesInternal = HermesInternal;
        const items = ["quest_id:" + questCreative.id, , ];
        const _HermesInternal2 = HermesInternal;
        items[1] = "quest_content:" + questCreative(7420).getQuestContentName(questCreative(5355).QuestContent.QUEST_BAR_MOBILE);
        items[2] = "reason:asset_loading_error";
        obj[1] = items;
        obj.increment(obj);
        const obj3 = questCreative(7420);
      }
    }, items2);
    tmp21 = null == questCreative || !isEligibleForQuests || !first1;
    closure_13 = tmp21;
    items3 = [];
    items3[0] = tmp21;
    effect2 = obj2.useEffect(() => {
      let obj = questCreative(10851);
      obj = { isEligibleToBeVisible: !closure_13 };
      let result = obj.updateQuestDockVisibilityEligibility(obj);
      return () => {
        const result = callback(table[47]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
      };
    }, items3);
    tmp23 = null;
    if (!tmp21) {
      tmp24 = jsx;
      obj1 = { pointerEvents: "box-none", style: null, onLayout: null, children: null };
      items4 = [, ];
      items4[0] = tmp6.wrapperAnimated;
      items4[1] = animatedStyle;
      obj1[1] = items4;
      obj1[2] = function onLayout(height) {
        let obj = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
        callback(obj);
        if (!ref.current) {
          tmp2.current = true;
          const _Math = Math;
          if (Math.random() < 0.1) {
            const _Math2 = Math;
            const _performance = performance;
            const rounded = Math.round(performance.now() - dependencyMap);
            obj = { name: null, tags: null };
            obj[0] = questCreative(7299).MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT;
            const _HermesInternal = HermesInternal;
            const items = ["quest_id:" + questCreative.id];
            obj[1] = items;
            isRendered(7294).distribution(obj, rounded);
            const obj2 = isRendered(7294);
          }
        }
      };
      obj2 = { overrideVisibility: null, questContent: null, questOrQuests: null, onImpression: null, sourceQuestContent: null, children: null };
      obj2[0] = context.isVisibleToUser;
      obj2[1] = require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR_MOBILE;
      obj2[2] = questCreative;
      obj2[3] = questBarImpressionSurvey;
      obj2[4] = require("QuestsVisibleMessagesChangedSource").QuestContent.QUEST_BAR_MOBILE;
      obj2[5] = function children() {
        let obj = { questId: questCreative.id, mode: closure_6 };
        const items = [closure_1_21(closure_1_34, obj), closure_1_21(closure_1_35, {}), ];
        let DARK;
        if (!closure_11) {
          DARK = closure_1_20.DARK;
        }
        obj = { theme: DARK, children: null };
        obj = { appThemedBackgroundColor: backgroundColor, layoutVariant: null, collapsedContent: null, expandedContent: null, backgroundContent: null };
        let str = "insetHeader";
        if (closure_11) {
          str = "flush";
        }
        obj[1] = str;
        obj[2] = closure_1_21(isRendered(closure_11 ? 14724 : 14725), {});
        obj[3] = closure_1_21(isRendered(closure_11 ? 14730 : 14731), {});
        let tmp3Result = null;
        if (!closure_11) {
          tmp3Result = tmp3(tmp9(14732), {});
        }
        obj1 = { children: null };
        const obj2 = { children: null };
        obj[4] = tmp3Result;
        obj[1] = closure_1_21(closure_1_33, obj);
        obj2[0] = closure_1_21(questCreative(4173).ThemeContextProvider, obj);
        items[2] = closure_1_21(questCreative(14630).QuestDockGestureContextProvider, obj2);
        obj1[0] = items;
        return closure_1_22(closure_1_23, obj1);
      };
      obj1[3] = jsx(require("AdContentImpressionTrackerBaseNative").BillableAdPlacementImpressionTrackerNative, obj2);
      tmp23 = jsx(require("module_4186").View, obj1);
    }
    return tmp23;
  }
}
let closure_3 = ["mode"];
const error = importAllResult;
({ View: closure_8, StyleSheet, Pressable: c9, Image: c10 } = get_ActivityIndicator);
({ QuestDockMode: closure_12, QuestsExperimentLocations: map1 } = QuestsExperimentLocations);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15, QUEST_DOCK_CONTENT_BORDER_RADII: closure_16, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17, QUEST_DOCK_COLLAPSED_HEIGHT: closure_18 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
let obj = { wrapper: { position: "absolute", left: "50%", bottom: 0, zIndex: 1 }, accessibilityWrapper: null, questDockWrapper: null, questDockContentWrapper: null, questDockHeaderBorder: null, nestedPressable: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.zIndex = 1;
obj[1] = obj;
createCacheKey = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, zIndex: 1 };
obj[2] = createCacheKey;
let obj2 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj2.justifyContent = "flex-end";
obj2.zIndex = 4;
obj[3] = obj2;
let obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.right = undefined;
obj3.borderWidth = 1;
obj3.borderColor = ThemesDefault.colors.BORDER_MUTED;
obj3.zIndex = 5;
obj[4] = obj3;
let obj4 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj4.zIndex = 6;
obj[5] = obj4;
let closure_24 = createCacheKey.createStyles(obj);
let closure_25 = { code: "function QuestDockTsx1(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}" };
let closure_26 = { code: "function QuestDockTsx2(){const{appThemedBackgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:appThemedBackgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
let closure_27 = { code: "function QuestDockTsx3(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}" };
let closure_28 = { code: "function QuestDockTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}" };
let closure_29 = { code: "function QuestDockTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
let closure_30 = { code: "function QuestDockTsx6(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}" };
let closure_31 = { code: "function QuestDockTsx7(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_32 = { code: "function QuestDockTsx8(){const{hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}" };
let closure_36 = createCacheKey.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj5 = {};
const merged4 = Object.assign(require("SUBTLE_SPRING").SUBTLE_SPRING);
obj5.overshootClamping = true;
obj5.damping = 54;
let closure_38 = { code: "function QuestDockTsx9(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
const memoResult = importAllResult.memo(function QuestDockWithQuestContext() {
  let obj = isMobileQuestDockRenderedBase(14625);
  const mobileQuestDock = obj.useMobileQuestDock();
  isMobileQuestDockRenderedBase = isMobileQuestDockRenderedBase(14625).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  const obj2 = isMobileQuestDockRenderedBase(14625);
  const isMobileQuestDockVisibleToUser = isMobileQuestDockRenderedBase(14625).useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const type = mobileQuestDock.type;
  const memo = importAllResult.useMemo(() => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }), items);
  if (isMobileQuestDockRenderedBase(7393).AdCreativeType.NO_FILL !== type) {
    if (tmp(7393).AdCreativeType.BOUNTY !== type) {
      if (tmp(7393).AdCreativeType.QUEST === type) {
        obj = { value: null, children: null };
        obj[0] = memo;
        obj = { quest: null, children: null };
        obj[0] = mobileQuestDock.quest;
        obj[1] = callback3(QuestDockWithEntranceAnimation, {});
        obj[1] = callback3(tmp(14636).QuestDockQuestProvider, obj);
        return callback3(isMobileQuestDockVisibleToUser(14716).Provider, obj);
      }
    }
  }
  return null;
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default memoResult;
export { QuestDockWithEntranceAnimation };