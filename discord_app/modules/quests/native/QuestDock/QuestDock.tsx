// === Module 15025: QuestDockWithGestureAnimation ===

// Module 15025 (QuestDockWithGestureAnimation)
import ThemesDefault from "Themes" /* 709 */;
import QuestsVisibleMessagesChangedSource from "QuestsVisibleMessagesChangedSource" /* 5399 */;
import useQuests from "useQuests" /* 11307 */;
import _modDef15043 from "module_15043" /* 15043 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "_objectWithoutProperties" /* 109 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_11 from "QuestDockMode" /* 14935 */;
import QuestsExperimentLocations from "QuestsExperimentLocations" /* 5396 */;
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT" /* 14937 */;
import { AnalyticEvents } from "ME" /* 673 */;
import { ThemeTypes } from "sum" /* 502 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
  let obj = appThemedBackgroundColor(questDockExpandHandler[13]);
  const questDockCreative = obj.useQuestDockCreative();
  obj1 = appThemedBackgroundColor(questDockExpandHandler[14]);
  questDockExpandHandler = obj1.useQuestDockExpandHandler(questDockCreative);
  let tmp7 = callback4();
  const context = setRestingQuestDockMode.useContext(appThemedBackgroundColor(questDockExpandHandler[15]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = setRestingQuestDockMode.useContext(appThemedBackgroundColor(questDockExpandHandler[16]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = setRestingQuestDockMode.useId();
  const callback = setRestingQuestDockMode.useCallback(() => {
    setRestingQuestDockMode(closure_1_12.COLLAPSED);
  }, items);
  let obj2 = appThemedBackgroundColor(questDockExpandHandler[14]);
  const questDockModeAnimatedReaction = obj2.useQuestDockModeAnimatedReaction();
  let obj3 = appThemedBackgroundColor(questDockExpandHandler[14]);
  const questDockDismissalReset = obj3.useQuestDockDismissalReset();
  let obj4 = appThemedBackgroundColor(questDockExpandHandler[17]);
  const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  obj5 = appThemedBackgroundColor(questDockExpandHandler[18]);
  const fn = function j() {
    return restingQuestDockMode.get() === closure_1_12.EXPANDED;
  };
  obj = { restingQuestDockMode, QuestDockMode: closure_12 };
  fn.__closure = obj;
  fn.__workletHash = 2415817673061;
  fn.__initData = closure_25;
  const derivedValue = obj5.useDerivedValue(fn);
  const tmp17 = importDefault(questDockExpandHandler[19])(derivedValue);
  const top = importDefault(questDockExpandHandler[20])().top;
  let obj7 = appThemedBackgroundColor(questDockExpandHandler[21]);
  const youBarTotalHeight = obj7.useYouBarTotalHeight();
  let obj8 = appThemedBackgroundColor(questDockExpandHandler[22]);
  const token = obj8.useToken(importDefault(questDockExpandHandler[12]).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp20 = importDefault(questDockExpandHandler[23])(token);
  closure_10 = tmp20;
  let obj9 = appThemedBackgroundColor(questDockExpandHandler[18]);
  const fn2 = function z() {
    let obj = { backgroundColor: appThemedBackgroundColor, borderBottomRightRadius: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring(store.get(), closure_1_15), borderBottomLeftRadius: null, height: null, width: null, opacity: null, transform: null };
    const obj2 = appThemedBackgroundColor(questDockExpandHandler[24]);
    obj[2] = appThemedBackgroundColor(questDockExpandHandler[24]).withSpring(store.get(), closure_1_15);
    obj[3] = questDockWrapperSpecs.get().height;
    obj[4] = questDockWrapperSpecs.get().width;
    const obj3 = appThemedBackgroundColor(questDockExpandHandler[24]);
    obj[5] = appThemedBackgroundColor(questDockExpandHandler[24]).withSpring(1, closure_1_14);
    obj = { translateX: null };
    const obj4 = appThemedBackgroundColor(questDockExpandHandler[24]);
    const obj6 = appThemedBackgroundColor(questDockExpandHandler[24]);
    obj[0] = obj6.withSpring(questDockWrapperSpecs.get().x + -1 * appThemedBackgroundColor(questDockExpandHandler[25]).roundToNearestPixel(questDockWrapperSpecs.get().width / 2), closure_1_14);
    const items = [obj, ];
    obj = { translateY: null };
    const obj7 = appThemedBackgroundColor(questDockExpandHandler[25]);
    obj[0] = appThemedBackgroundColor(questDockExpandHandler[24]).withSpring(questDockWrapperSpecs.get().y, closure_1_14);
    items[1] = obj;
    obj[6] = items;
    return obj;
  };
  obj = { appThemedBackgroundColor, withSpring: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring, bottomBorderRadius: tmp20, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14, roundToNearestPixel: appThemedBackgroundColor(questDockExpandHandler[25]).roundToNearestPixel };
  fn2.__closure = obj;
  fn2.__workletHash = 4228984550973;
  fn2.__initData = closure_26;
  const animatedStyle = obj9.useAnimatedStyle(fn2);
  let obj11 = appThemedBackgroundColor(questDockExpandHandler[18]);
  const sharedValue = obj11.useSharedValue(0);
  let obj12 = appThemedBackgroundColor(questDockExpandHandler[18]);
  const fn3 = function $() {
    let obj = { transform: null };
    obj = { scale: null };
    const obj3 = appThemedBackgroundColor(questDockExpandHandler[24]);
    const obj4 = appThemedBackgroundColor(questDockExpandHandler[18]);
    obj[0] = obj3.withSpring(appThemedBackgroundColor(questDockExpandHandler[18]).interpolate(sharedValue.get(), [1, 0], [1, 1]), appThemedBackgroundColor(questDockExpandHandler[26]).springStandard);
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj1 = { withSpring: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring, interpolate: appThemedBackgroundColor(questDockExpandHandler[18]).interpolate, isPressed: sharedValue, springStandard: appThemedBackgroundColor(questDockExpandHandler[26]).springStandard };
  fn3.__closure = obj1;
  fn3.__workletHash = 3373473585356;
  fn3.__initData = closure_27;
  const items1 = [setRestingQuestDockMode, questDockExpandHandler];
  const animatedStyle1 = obj12.useAnimatedStyle(fn3);
  const items2 = [sharedValue];
  const callback1 = setRestingQuestDockMode.useCallback(() => {
    setRestingQuestDockMode(closure_1_12.EXPANDED);
    questDockExpandHandler();
  }, items1);
  const items3 = [sharedValue];
  const callback2 = setRestingQuestDockMode.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const callback3 = setRestingQuestDockMode.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  let obj14 = appThemedBackgroundColor(questDockExpandHandler[18]);
  class J {
    constructor() {
      obj = appThemedBackgroundColor(closure_2[24]);
      num = 0;
      if (activeQuestDockMode.get() === closure_1_12.EXPANDED) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, closure_1_14), height: windowDimensions.get().height };
      return obj;
    }
  }
  obj2 = { withSpring: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring, activeQuestDockMode, QuestDockMode: closure_12, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14, windowDimensions };
  J.__closure = obj2;
  J.__workletHash = 6178969276321;
  J.__initData = closure_28;
  const animatedStyle2 = obj14.useAnimatedStyle(J);
  let obj16 = appThemedBackgroundColor(questDockExpandHandler[18]);
  class Z {
    constructor() {
      pointerEvents = "none";
      if (activeQuestDockMode.get() === closure_1_12.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  Z.__closure = { activeQuestDockMode, QuestDockMode: closure_12 };
  Z.__workletHash = 5416180055289;
  Z.__initData = closure_29;
  const animatedProps = obj16.useAnimatedProps(Z);
  function ee() {
    const value = questDockWrapperSpecs.get();
    return windowDimensions.get().height - top - value.height;
  }
  ee.__closure = { questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  ee.__workletHash = 8073454569923;
  ee.__initData = closure_30;
  const derivedValue1 = appThemedBackgroundColor(questDockExpandHandler[18]).useDerivedValue(ee);
  const obj18 = appThemedBackgroundColor(questDockExpandHandler[18]);
  const tmp30 = importDefault(questDockExpandHandler[19])(derivedValue1);
  function te() {
    let obj = appThemedBackgroundColor(questDockExpandHandler[24]);
    if (activeQuestDockMode.get() === closure_1_12.CLOSED) {
      let num = 0;
    } else {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_1_14) };
    return obj;
  }
  obj3 = { withSpring: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring, activeQuestDockMode, QuestDockMode: closure_12, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14 };
  te.__closure = obj3;
  te.__workletHash = 6468803634518;
  te.__initData = closure_31;
  const animatedStyle3 = appThemedBackgroundColor(questDockExpandHandler[18]).useAnimatedStyle(te);
  const obj19 = appThemedBackgroundColor(questDockExpandHandler[18]);
  function oe() {
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
            obj[4] = appThemedBackgroundColor(questDockExpandHandler[24]).withSpring(num2, closure_1_15);
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
                  let tmp16Result = tmp16(tmp17[24]);
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
                  tmp16Result = tmp16(tmp17[24]);
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
            const obj2 = appThemedBackgroundColor(questDockExpandHandler[24]);
          }
          value = store.get();
        }
        value = store.get();
      }
      tmp7 = token;
    }
    tmp4 = token;
  }
  obj4 = { hasInsetHeaderTile: tmp, activeQuestDockMode, QuestDockMode: closure_12, QUEST_DOCK_CONTENT_BORDER_RADII: closure_16, questDockBorderRadius: token, bottomBorderRadius: tmp20, withSpring: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15, QUEST_DOCK_COLLAPSED_HEIGHT: closure_18, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17 };
  oe.__closure = obj4;
  oe.__workletHash = 13161475723910;
  oe.__initData = closure_32;
  obj5 = { style: tmp7.wrapper, pointerEvents: "auto", children: null };
  const animatedStyle4 = appThemedBackgroundColor(questDockExpandHandler[18]).useAnimatedStyle(oe);
  let obj6 = { nativeID: id, style: tmp7.accessibilityWrapper, accessibilityViewIsModal: null, onAccessibilityEscape: null, pointerEvents: "box-none", children: null };
  let tmp37 = isScreenReaderEnabled;
  if (tmp37) {
    tmp37 = tmp17;
  }
  obj6[2] = tmp37;
  obj6[3] = callback;
  let tmp16Result = tmp16(tmp4[28]);
  obj7 = { style: animatedStyle1, children: null };
  tmp16Result = tmp16(tmp4[29]);
  obj8 = { style: items4, layout: null, children: null };
  items4 = [tmp7.questDockWrapper, , ];
  obj9 = { bottom: youBarTotalHeight - 1 };
  items4[1] = obj9;
  items4[2] = animatedStyle;
  const obj21 = appThemedBackgroundColor(questDockExpandHandler[18]);
  const tmp34 = closure_23;
  obj8[1] = appThemedBackgroundColor(questDockExpandHandler[25]).dimensionsLayoutTransition;
  const obj10 = { style: tmp7.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null };
  let str3 = "auto";
  if (tmp17) {
    str3 = "none";
  }
  obj10[4] = str3;
  const intl = tmp3(tmp4[30]).intl;
  obj10[6] = intl.string(appThemedBackgroundColor(questDockExpandHandler[30]).t.rjVPdM);
  let str4 = "";
  if (!tmp17) {
    const intl2 = tmp3(tmp4[30]).intl;
    str4 = intl2.string(tmp3(tmp4[30]).t.n0MlOB);
  }
  obj11 = { children: null };
  obj12 = { children: null };
  obj10[7] = str4;
  const items5 = [closure_21(token, obj10), , , ];
  const obj13 = { style: items6, layout: null, pointerEvents: "none" };
  items6 = [tmp7.questDockHeaderBorder, animatedStyle4];
  const tmp16Result1 = importDefault(questDockExpandHandler[29]);
  const tmp41 = token;
  obj13[1] = appThemedBackgroundColor(questDockExpandHandler[25]).dimensionsLayoutTransition;
  items5[1] = closure_21(importDefault(questDockExpandHandler[29]), obj13);
  obj14 = { style: items7, children: null };
  items7 = [tmp7.questDockContentWrapper, animatedStyle3];
  const obj15 = { style: tmp7.questDockContentWrapper, children: null };
  const tmp16Result2 = importDefault(questDockExpandHandler[29]);
  const items8 = [closure_21(importDefault(questDockExpandHandler[31]), { hideOnExpand: "flush" === layoutVariant, children: collapsedContent }), closure_21(importDefault(questDockExpandHandler[32]), { expandedHeight: str, children: expandedContent })];
  obj15[1] = items8;
  const items9 = [closure_22(top, obj15), backgroundContent];
  obj14[1] = items9;
  items5[2] = closure_22(importDefault(questDockExpandHandler[29]), obj14);
  items5[3] = closure_21(importDefault(questDockExpandHandler[33]), { isExpanded: tmp17, variant: str2 });
  obj8[2] = items5;
  obj7[1] = closure_22(tmp16Result1, obj8);
  obj12[0] = closure_21(tmp16Result, obj7);
  obj6[5] = closure_21(tmp16Result, obj12);
  obj5[2] = closure_21(appThemedBackgroundColor(questDockExpandHandler[27]).AccessibilityViewAnimated, obj6);
  const items10 = [closure_21(top, obj5), ];
  obj16 = { style: animatedStyle2, animatedProps, children: null };
  const tmp16Result3 = importDefault(questDockExpandHandler[29]);
  obj16[2] = closure_21(appThemedBackgroundColor(questDockExpandHandler[34]).Backdrop, { onDismiss: callback, accessibleDismissStyle: { height: tmp30 } });
  items10[1] = closure_21(importDefault(questDockExpandHandler[29]), obj16);
  obj11[0] = items10;
  return closure_22(tmp34, obj11);
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
    const QuestBarRenderedTriggerPoint = callback(table[37]).QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
}
function QuestDockWithEntranceAnimation(arg0) {
  ({ renderModeChangeTracker: identifierMetricTag, identifierMetricTag } = arg0);
  backgroundImageUrl = identifierMetricTag;
  ({ backgroundImageUrl, iconUrl, layoutVariant: iconUrl, theme: trackAssetLoadingFailure, collapsedContent: first1, expandedContent: closure_5, backgroundContent: closure_6 } = arg0);
  let obj = isRendered;
  ({ renderImpressionTracker, trackAssetLoadingFailure } = arg0);
  const context = isRendered.useContext(backgroundImageUrl(iconUrl[41]));
  isRendered = context.isRendered;
  obj1 = identifierMetricTag(iconUrl[42]);
  let items = [first];
  closure_8 = obj1.useStateFromStores(items, () => first.prevRestingQuestDockMode);
  closure_9 = callback(isRendered.useState(() => performance.now()), 1)[0];
  closure_10 = isRendered.useRef(false);
  const tmp6 = callback(isRendered.useState({ width: 0, height: 0 }), 2);
  first = tmp6[0];
  closure_12 = tmp6[1];
  let tmp = backgroundImageUrl;
  const tmp2 = iconUrl;
  const tmp4 = callback;
  const tmp5 = callback5();
  const isEligibleForQuests = identifierMetricTag(iconUrl[43]).getIsEligibleForQuests();
  let obj3 = identifierMetricTag(iconUrl[43]);
  const fn = function n() {
    let obj = identifierMetricTag(iconUrl[24]);
    let num = 0;
    if (isRendered) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_1_37, "animate-always"), transform: null };
    let num2 = 0;
    if (!isRendered) {
      num2 = first.height;
    }
    obj = { translateY: identifierMetricTag(iconUrl[24]).withSpring(num2, closure_1_37) };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = { withSpring: identifierMetricTag(iconUrl[24]).withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: obj5, componentDimensions: first };
  fn.__closure = obj;
  fn.__workletHash = 15545726338295;
  fn.__initData = closure_39;
  const animatedStyle = identifierMetricTag(iconUrl[18]).useAnimatedStyle(fn);
  const obj4 = identifierMetricTag(iconUrl[18]);
  const gradientBottom = identifierMetricTag(iconUrl[44]).useGradientBottom();
  const obj6 = identifierMetricTag(iconUrl[44]);
  let backgroundColor;
  const token = identifierMetricTag(iconUrl[22]).useToken(backgroundImageUrl(iconUrl[12]).colors.BACKGROUND_SURFACE_HIGH);
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = token;
  }
  first1 = undefined;
  callback = undefined;
  closure_6 = undefined;
  const tmp4Result = tmp4(obj.useState(constants.PENDING), 2);
  first1 = tmp4Result[0];
  callback = tmp4Result[1];
  closure_6 = obj.useEffectEvent((arg0) => {
    if (trackAssetLoadingFailure != null) {
      tmp(arg0);
    }
  });
  const items1 = [backgroundImageUrl, iconUrl];
  const effect = obj.useEffect(() => {
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
      const tmp = first1((arg0) => {
        closure_0 = arg0;
        c5 = 0;
        c6 = 0;
        c4 = 0;
        return (function*(arg0) {
          if (v0 === 2) {
            v0 = 3;
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
              v0 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_2 = tmp3;
                  closure_1 = tmp7;
                  c4 = 1;
                  c5 = 2;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_2_10.prefetch(closure_0);
                  return obj1;
                }
              } else if (1 === tmp7) {
                c4 = 0;
                v0(closure_0);
                v0 = 3;
                return { value: false, done: true };
              } else if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c4 = 0;
                v0 = 3;
                return { value: true, done: true };
              }
            } catch (tmp16) {
              closure_3 = tmp16;
              if (tmp4 === c4) {
                v0 = tmp2;
                throw tmp16;
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
      const tmp = first1(function*() {
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
                if (null != closure_1_1) {
                  items.push(closure_1_0(tmp25));
                }
                if (null != c2) {
                  items.push(closure_1_0(tmp15));
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
              if (closure_0.every((arg0) => true === arg0)) {
                let FAILED = tmp11.SUCCEEDED;
              } else {
                FAILED = tmp11.FAILED;
              }
              closure_1_5(FAILED);
              c3 = 3;
              const tmp8 = closure_1_5;
            }
          } catch (tmp19) {
            c3 = tmp;
            throw tmp19;
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
    (function preloadQuestDockAssets() {
      const self = this;
      const apply = _preloadQuestDockAssets.apply;
      if (typeof apply === "unknown") {
        HermesBuiltin.applyArguments(self);
      } else {
        apply(self, arguments);
      }
    })();
  }, items1);
  const items2 = [first1, identifierMetricTag];
  const effect1 = obj.useEffect(() => {
    if (first1 === closure_1_38.FAILED) {
      let obj = backgroundImageUrl(iconUrl[38]);
      obj = { name: null, tags: null };
      obj[0] = identifierMetricTag(iconUrl[39]).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE;
      const items = [identifierMetricTag, , ];
      const _HermesInternal = HermesInternal;
      items[1] = "quest_content:" + identifierMetricTag(iconUrl[40]).getQuestContentName(identifierMetricTag(iconUrl[36]).QuestContent.QUEST_BAR_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj[1] = items;
      obj.increment(obj);
      const obj3 = identifierMetricTag(iconUrl[40]);
    }
  }, items2);
  let tmp18 = !isEligibleForQuests;
  if (isEligibleForQuests) {
    tmp18 = first1 !== constants.SUCCEEDED;
  }
  closure_14 = tmp18;
  const items3 = [tmp18];
  const effect2 = obj.useEffect(() => {
    let obj = identifierMetricTag(iconUrl[45]);
    obj = { isEligibleToBeVisible: !closure_14 };
    let result = obj.updateQuestDockVisibilityEligibility(obj);
    return () => {
      const result = callback(table[45]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
    };
  }, items3);
  let tmp20 = null;
  if (!tmp18) {
    obj = { pointerEvents: "box-none", style: null, onLayout: null, children: null };
    const items4 = [tmp5.wrapperAnimated, animatedStyle];
    obj[1] = items4;
    obj[2] = function onLayout(height) {
      let obj = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
      callback(obj);
      if (!ref.current) {
        tmp2.current = true;
        const _Math = Math;
        if (Math.random() < 0.1) {
          const _Math2 = Math;
          const _performance = performance;
          const rounded = Math.round(performance.now() - closure_9);
          obj = { name: null, tags: null };
          obj[0] = identifierMetricTag(iconUrl[39]).MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT;
          const items = [backgroundImageUrl];
          obj[1] = items;
          backgroundImageUrl(iconUrl[38]).distribution(obj, rounded);
          const obj2 = backgroundImageUrl(iconUrl[38]);
        }
      }
    };
    obj1 = { children: null, overrideVisibility: null };
    obj1[0] = function children() {
      let obj = { children: null };
      obj = { mode: closure_8 };
      const items = [identifierMetricTag(obj), closure_1_21(closure_1_35, {}), ];
      obj = { children: closure_1_21(identifierMetricTag(iconUrl[46]).ThemeContextProvider, { theme: trackAssetLoadingFailure, children: closure_1_21(closure_1_33, obj2) }) };
      items[2] = closure_1_21(identifierMetricTag(iconUrl[15]).QuestDockGestureContextProvider, obj);
      obj[0] = items;
      return closure_1_22(closure_1_23, obj);
    };
    obj1[1] = context.isVisibleToUser;
    obj[3] = renderImpressionTracker(obj1);
    tmp20 = callback3(tmp(tmp2[18]).View, obj);
  }
  return tmp20;
}
class QuestDockQuestContent {
  constructor(arg0) {
    quest = global.quest;
    closure_1 = undefined;
    tmp2 = closure_2;
    tmp = quest;
    obj = require("useQuests");
    closure_1 = obj.useQuestBarImpressionSurvey(quest);
    obj2 = require("useDeliveredDockCreative");
    obj3 = require("useDeliveredDockCreative");
    userStatus = quest.userStatus;
    enrolledAt = undefined;
    questGameLogotypeAssetUrl = obj3.useQuestGameLogotypeAssetUrl(quest);
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    tmp5 = null != enrolledAt;
    tmp6 = jsx;
    obj = { quest, children: null };
    obj1 = {
      identifierMetricTag: "quest_id:" + quest.id,
      backgroundImageUrl: obj2.useQuestDockHeroAsset(quest).staticUrl,
      iconUrl: questGameLogotypeAssetUrl,
      trackAssetLoadingFailure(asset_id) {
            let obj = callback(closure_1_2[48]);
            obj = { quest_id: quest.id, source: closure_1_13.QUESTS_BAR_MOBILE, asset_id };
            obj.track(closure_1_19.QUEST_ASSET_LOADING_FAILURE, obj);
          },
      layoutVariant: null,
      theme: null,
      collapsedContent: null,
      expandedContent: null,
      backgroundContent: null,
      renderImpressionTracker: null,
      renderModeChangeTracker: null
    };
    tmp7 = QuestDockWithEntranceAnimation;
    str = "insetHeader";
    if (tmp5) {
      str = "flush";
    }
    obj1[4] = str;
    DARK = undefined;
    if (!tmp5) {
      tmp9 = ThemeTypes;
      DARK = ThemeTypes.DARK;
    }
    obj1[5] = DARK;
    tmp10 = closure_1;
    obj1[6] = tmp6(tmp10(tmp5 ? tmp2[49] : tmp2[50]), {});
    obj1[7] = tmp6(tmp10(tmp5 ? tmp2[51] : tmp2[52]), {});
    tmp6Result = null;
    if (!tmp5) {
      tmp6Result = tmp6(require("QUEST_DOCK_EXPANDED_HEIGHT"), {});
    }
    obj1[8] = tmp6Result;
    obj1[9] = function renderImpressionTracker(arg0) {
      ({ children, overrideVisibility } = arg0);
      return closure_1_21(quest(closure_1_2[54]).BillableAdPlacementImpressionTrackerNative, { questOrQuests: quest, overrideVisibility, questContent: quest(closure_1_2[36]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: quest(closure_1_2[36]).QuestContent.QUEST_BAR_MOBILE, onImpression: closure_1, children });
    };
    obj1[10] = function renderModeChangeTracker(mode) {
      return closure_1_21(closure_1_34, { questId: quest.id, mode: mode.mode });
    };
    obj[1] = tmp6(tmp7, obj1);
    return tmp6(require("getCreativeAnalyticsParams").QuestDockQuestProvider, obj);
  }
}
function QuestDockBountyContent(bounty) {
  bounty = bounty.bounty;
  let obj = { bounty, children: null };
  obj = {
    identifierMetricTag: "ad_creative_id:" + bounty.id,
    iconUrl: bounty.productIcon,
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    collapsedContent: callback3(_modDef15043, {}),
    expandedContent: null,
    backgroundContent: null,
    renderImpressionTracker(children) {
      return closure_1_21(bounty(closure_1_2[54]).BillableAdPlacementImpressionTrackerNative, { adContentId: bounty.id, adCreativeType: bounty(closure_1_2[56]).AdCreativeType.BOUNTY, overrideVisibility: false, questContent: bounty(closure_1_2[36]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: bounty(closure_1_2[36]).QuestContent.QUEST_BAR_MOBILE, children: children.children });
    },
    renderModeChangeTracker(mode) {
      return closure_1_21(closure_1_34, { adCreativeType: bounty(closure_1_2[56]).AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode });
    }
  };
  obj[1] = callback3(QuestDockWithEntranceAnimation, obj);
  return callback3(bounty(14944).QuestDockBountyProvider, obj);
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
let closure_38 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
let closure_39 = { code: "function QuestDockTsx9(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
const memoResult = importAllResult.memo(function QuestDockWithVisibilityContext() {
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  mobileQuestDock = obj.useMobileQuestDock();
  const isMobileQuestDockRenderedBase = mobileQuestDock(isMobileQuestDockVisibleToUser[47]).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  const obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  const tmp = isMobileQuestDockVisibleToUser;
  isMobileQuestDockVisibleToUser = mobileQuestDock(isMobileQuestDockVisibleToUser[47]).useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const items1 = [mobileQuestDock];
  const memo = importAllResult.useMemo(() => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }), items);
  const memo1 = importAllResult.useMemo(() => {
    const type = mobileQuestDock.type;
    if (mobileQuestDock(isMobileQuestDockVisibleToUser[56]).AdCreativeType.BOUNTY === type) {
      let obj = { bounty: null };
      obj[0] = tmp.bounty;
      return closure_1_21(closure_1_42, obj);
    } else if (tmp2(tmp3[56]).AdCreativeType.QUEST === type) {
      obj = { quest: null };
      obj[0] = tmp.quest;
      return closure_1_21(closure_1_41, obj);
    } else if (tmp2(tmp3[56]).AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  let tmp7 = null;
  if (mobileQuestDock.type !== mobileQuestDock(isMobileQuestDockVisibleToUser[56]).AdCreativeType.NO_FILL) {
    obj = { value: null, children: null };
    obj[0] = memo;
    obj[1] = memo1;
    tmp7 = callback3(isMobileQuestDockRenderedBase(tmp[41]).Provider, obj);
  }
  return tmp7;
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default memoResult;
export { QuestDockQuestContent };