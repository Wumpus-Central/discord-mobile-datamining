// discord_app/modules/quests/native/QuestDock/QuestDock.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import QuestsVisibleMessagesChangedSource from "../../QuestTypes.tsx";
import useQuests from "../../hooks/QuestHooks.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_11 from "QuestDockStore.tsx";
import QuestsExperimentLocations from "../../QuestConstants.tsx";
import QUEST_DOCK_COLLAPSED_HEIGHT from "QuestDockConstants.tsx";
import { AnalyticEvents } from "../../../../Constants.tsx";
import { ThemeTypes } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
  const context1 = top.useContext(
    appThemedBackgroundColor(questDockWrapperSpecs[14]).QuestDockExternalCoordinationContext,
  );
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
      obj = {
        backgroundColor: appThemedBackgroundColor,
        borderBottomRightRadius: null,
        borderBottomLeftRadius: null,
        height: null,
        width: null,
        opacity: null,
        transform: null,
      };
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
      obj[0] = obj6.withSpring(
        questDockWrapperSpecs.get().x + -1 * obj7.roundToNearestPixel(questDockWrapperSpecs.get().width / 2),
        closure_1_14,
      );
      items = [,];
      items[0] = obj;
      obj1 = { translateY: null };
      obj9 = appThemedBackgroundColor(questDockWrapperSpecs[23]);
      obj1[0] = obj9.withSpring(questDockWrapperSpecs.get().y, closure_1_14);
      items[1] = obj1;
      obj[6] = items;
      return obj;
    }
  }
  obj = {
    appThemedBackgroundColor,
    withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring,
    bottomBorderRadius: tmp18,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15,
    questDockWrapperSpecs,
    QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14,
    roundToNearestPixel: appThemedBackgroundColor(questDockWrapperSpecs[24]).roundToNearestPixel,
  };
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
    obj[0] = obj3.withSpring(
      appThemedBackgroundColor(questDockWrapperSpecs[17]).interpolate(sharedValue.get(), [1, 0], [1, 1]),
      appThemedBackgroundColor(questDockWrapperSpecs[25]).springStandard,
    );
    const items = [obj];
    obj[0] = items;
    return obj;
  };
  obj1 = {
    withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring,
    interpolate: appThemedBackgroundColor(questDockWrapperSpecs[17]).interpolate,
    isPressed: sharedValue,
    springStandard: appThemedBackgroundColor(questDockWrapperSpecs[25]).springStandard,
  };
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
  obj2 = {
    withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring,
    activeQuestDockMode,
    QuestDockMode: closure_12,
    QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14,
    windowDimensions,
  };
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
  obj3 = {
    withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring,
    activeQuestDockMode,
    QuestDockMode: closure_12,
    QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14,
  };
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
      let obj = {
        borderTopLeftRadius: null,
        borderTopRightRadius: null,
        borderBottomLeftRadius: null,
        borderBottomRightRadius: null,
        opacity: null,
        height: null,
        width: null,
        transform: null,
        borderBottomWidth: null,
      };
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
                const items = [obj];
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
  ee.__closure = {
    hasInsetHeaderTile: "insetHeader" === layoutVariant,
    activeQuestDockMode,
    QuestDockMode: closure_12,
    QUEST_DOCK_CONTENT_BORDER_RADII: closure_16,
    questDockBorderRadius: token,
    bottomBorderRadius: tmp18,
    withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15,
    QUEST_DOCK_COLLAPSED_HEIGHT: closure_18,
    questDockWrapperSpecs,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17,
  };
  ee.__workletHash = 13161475723910;
  ee.__initData = closure_32;
  obj5 = { style: tmp3.wrapper, pointerEvents: "auto", children: null };
  const animatedStyle4 = obj19.useAnimatedStyle(ee);
  obj6 = {
    nativeID: id,
    style: tmp3.accessibilityWrapper,
    accessibilityViewIsModal: null,
    onAccessibilityEscape: null,
    pointerEvents: "box-none",
    children: null,
  };
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
  items4 = [tmp3.questDockWrapper, ,];
  obj9 = { bottom: youBarTotalHeight - 1 };
  items4[1] = obj9;
  items4[2] = animatedStyle;
  let obj4 = {
    hasInsetHeaderTile: "insetHeader" === layoutVariant,
    activeQuestDockMode,
    QuestDockMode: closure_12,
    QUEST_DOCK_CONTENT_BORDER_RADII: closure_16,
    questDockBorderRadius: token,
    bottomBorderRadius: tmp18,
    withSpring: appThemedBackgroundColor(questDockWrapperSpecs[23]).withSpring,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15,
    QUEST_DOCK_COLLAPSED_HEIGHT: closure_18,
    questDockWrapperSpecs,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17,
  };
  const tmp32 = closure_23;
  obj8[1] = appThemedBackgroundColor(questDockWrapperSpecs[24]).dimensionsLayoutTransition;
  obj10 = {
    style: tmp3.nestedPressable,
    onPressIn: callback2,
    onPressOut: callback3,
    onPress: callback1,
    pointerEvents: null,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityHint: null,
  };
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
  const items5 = [closure_21(closure_9, obj10), , ,];
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
  const items8 = [
    closure_21(importDefault(questDockWrapperSpecs[30]), {
      hideOnExpand: "flush" === layoutVariant,
      children: collapsedContent,
    }),
    closure_21(importDefault(questDockWrapperSpecs[31]), { expandedHeight: str, children: expandedContent }),
  ];
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
  const items10 = [closure_21(token, obj5)];
  obj16 = { style: animatedStyle2, animatedProps, children: null };
  const tmp14Result3 = importDefault(questDockWrapperSpecs[28]);
  obj16[2] = closure_21(appThemedBackgroundColor(questDockWrapperSpecs[33]).Backdrop, {
    onDismiss: callback,
    accessibleDismissStyle: { height: tmp28 },
  });
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
function QuestDockWithEntranceAnimation(arg0) {
  ({ renderModeChangeTracker: identifierMetricTag, identifierMetricTag } = arg0);
  backgroundImageUrl = identifierMetricTag;
  ({
    backgroundImageUrl,
    iconUrl,
    layoutVariant: iconUrl,
    theme: trackAssetLoadingFailure,
    collapsedContent: first1,
    expandedContent: closure_5,
    backgroundContent: closure_6,
  } = arg0);
  let obj = isRendered;
  ({ renderImpressionTracker, trackAssetLoadingFailure } = arg0);
  const context = isRendered.useContext(backgroundImageUrl(iconUrl[40]));
  isRendered = context.isRendered;
  obj1 = identifierMetricTag(iconUrl[41]);
  let items = [first];
  closure_8 = obj1.useStateFromStores(items, () => first.prevRestingQuestDockMode);
  closure_9 = callback(
    isRendered.useState(() => performance.now()),
    1,
  )[0];
  closure_10 = isRendered.useRef(false);
  const tmp6 = callback(isRendered.useState({ width: 0, height: 0 }), 2);
  first = tmp6[0];
  closure_12 = tmp6[1];
  let tmp = backgroundImageUrl;
  const tmp2 = iconUrl;
  const tmp4 = callback;
  const tmp5 = callback5();
  const isEligibleForQuests = identifierMetricTag(iconUrl[42]).getIsEligibleForQuests();
  let obj3 = identifierMetricTag(iconUrl[42]);
  const fn = function n() {
    let obj = identifierMetricTag(iconUrl[23]);
    let num = 0;
    if (isRendered) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, closure_1_37, "animate-always"), transform: null };
    let num2 = 0;
    if (!isRendered) {
      num2 = first.height;
    }
    obj = { translateY: identifierMetricTag(iconUrl[23]).withSpring(num2, closure_1_37) };
    const items = [obj];
    obj[1] = items;
    return obj;
  };
  obj = {
    withSpring: identifierMetricTag(iconUrl[23]).withSpring,
    isRendered,
    ENTRANCE_ANIMATION_SPING_CONFIG: obj5,
    componentDimensions: first,
  };
  fn.__closure = obj;
  fn.__workletHash = 15545726338295;
  fn.__initData = closure_39;
  const animatedStyle = identifierMetricTag(iconUrl[17]).useAnimatedStyle(fn);
  const obj4 = identifierMetricTag(iconUrl[17]);
  const gradientBottom = identifierMetricTag(iconUrl[43]).useGradientBottom();
  const obj6 = identifierMetricTag(iconUrl[43]);
  let backgroundColor;
  const token = identifierMetricTag(iconUrl[21]).useToken(
    backgroundImageUrl(iconUrl[12]).colors.BACKGROUND_SURFACE_HIGH,
  );
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
        return (function* (arg0) {
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
      const tmp = first1(function* () {
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
      let obj = backgroundImageUrl(iconUrl[37]);
      obj = { name: null, tags: null };
      obj[0] = identifierMetricTag(iconUrl[38]).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE;
      const items = [identifierMetricTag, ,];
      const _HermesInternal = HermesInternal;
      items[1] =
        "quest_content:" +
        identifierMetricTag(iconUrl[39]).getQuestContentName(
          identifierMetricTag(iconUrl[35]).QuestContent.QUEST_BAR_MOBILE,
        );
      items[2] = "reason:asset_loading_error";
      obj[1] = items;
      obj.increment(obj);
      const obj3 = identifierMetricTag(iconUrl[39]);
    }
  }, items2);
  let tmp18 = !isEligibleForQuests;
  if (isEligibleForQuests) {
    tmp18 = first1 !== constants.SUCCEEDED;
  }
  closure_14 = tmp18;
  const items3 = [tmp18];
  const effect2 = obj.useEffect(() => {
    let obj = identifierMetricTag(iconUrl[44]);
    obj = { isEligibleToBeVisible: !closure_14 };
    let result = obj.updateQuestDockVisibilityEligibility(obj);
    return () => {
      const result = callback(table[44]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
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
          obj[0] = identifierMetricTag(iconUrl[38]).MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT;
          const items = [backgroundImageUrl];
          obj[1] = items;
          backgroundImageUrl(iconUrl[37]).distribution(obj, rounded);
          const obj2 = backgroundImageUrl(iconUrl[37]);
        }
      }
    };
    obj1 = { children: null, overrideVisibility: null };
    obj1[0] = function children() {
      let obj = { children: null };
      obj = { mode: closure_8 };
      const items = [identifierMetricTag(obj), closure_1_21(closure_1_35, {})];
      obj = {
        children: closure_1_21(identifierMetricTag(iconUrl[45]).ThemeContextProvider, {
          theme: trackAssetLoadingFailure,
          children: closure_1_21(closure_1_33, obj2),
        }),
      };
      items[2] = closure_1_21(identifierMetricTag(iconUrl[13]).QuestDockGestureContextProvider, obj);
      obj[0] = items;
      return closure_1_22(closure_1_23, obj);
    };
    obj1[1] = context.isVisibleToUser;
    obj[3] = renderImpressionTracker(obj1);
    tmp20 = callback3(tmp(tmp2[17]).View, obj);
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
      renderModeChangeTracker: null,
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
      return closure_1_21(quest(closure_1_2[54]).BillableAdPlacementImpressionTrackerNative, {
        questOrQuests: quest,
        overrideVisibility,
        questContent: quest(closure_1_2[35]).QuestContent.QUEST_BAR_MOBILE,
        sourceQuestContent: quest(closure_1_2[35]).QuestContent.QUEST_BAR_MOBILE,
        onImpression: closure_1,
        children,
      });
    };
    obj1[10] = function renderModeChangeTracker(mode) {
      return closure_1_21(closure_1_34, { questId: quest.id, mode: mode.mode });
    };
    obj[1] = tmp6(tmp7, obj1);
    return tmp6(require("getQuestDockMenuAdCreative").QuestDockQuestProvider, obj);
  }
}
function QuestDockBountyContent(bounty) {
  bounty = bounty.bounty;
  return callback3(QuestDockWithEntranceAnimation, {
    identifierMetricTag: "ad_content_id:" + bounty.id,
    iconUrl: bounty.productIcon,
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    collapsedContent: null,
    expandedContent: null,
    backgroundContent: null,
    renderImpressionTracker(children) {
      return closure_1_21(bounty(closure_1_2[54]).BillableAdPlacementImpressionTrackerNative, {
        adContentId: bounty.id,
        adCreativeType: bounty(closure_1_2[55]).AdCreativeType.BOUNTY,
        overrideVisibility: false,
        questContent: bounty(closure_1_2[35]).QuestContent.QUEST_BAR_MOBILE,
        sourceQuestContent: bounty(closure_1_2[35]).QuestContent.QUEST_BAR_MOBILE,
        children: children.children,
      });
    },
    renderModeChangeTracker(mode) {
      return closure_1_21(closure_1_34, {
        adCreativeType: bounty(closure_1_2[55]).AdCreativeType.BOUNTY,
        adContentId: bounty.id,
        mode: mode.mode,
      });
    },
  });
}
let closure_3 = ["mode"];
const error = importAllResult;
({ View: closure_8, StyleSheet, Pressable: c9, Image: c10 } = get_ActivityIndicator);
({ QuestDockMode: closure_12, QuestsExperimentLocations: map1 } = QuestsExperimentLocations);
({
  QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14,
  QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15,
  QUEST_DOCK_CONTENT_BORDER_RADII: closure_16,
  QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17,
  QUEST_DOCK_COLLAPSED_HEIGHT: closure_18,
} = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
let obj = {
  wrapper: { position: "absolute", left: "50%", bottom: 0, zIndex: 1 },
  accessibilityWrapper: null,
  questDockWrapper: null,
  questDockContentWrapper: null,
  questDockHeaderBorder: null,
  nestedPressable: null,
};
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.zIndex = 1;
obj[1] = obj;
createCacheKey = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: ThemesDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS,
  zIndex: 1,
};
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
let closure_25 = {
  code: "function QuestDockTsx1(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}",
};
let closure_26 = {
  code: "function QuestDockTsx2(){const{appThemedBackgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:appThemedBackgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}",
};
let closure_27 = {
  code: "function QuestDockTsx3(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}",
};
let closure_28 = {
  code: "function QuestDockTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}",
};
let closure_29 = {
  code: "function QuestDockTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}",
};
let closure_30 = {
  code: "function QuestDockTsx6(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}",
};
let closure_31 = {
  code: "function QuestDockTsx7(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}",
};
let closure_32 = {
  code: "function QuestDockTsx8(){const{hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}",
};
let closure_36 = createCacheKey.createStyles(() => ({
  wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" },
}));
let obj5 = {};
const merged4 = Object.assign(require("SUBTLE_SPRING").SUBTLE_SPRING);
obj5.overshootClamping = true;
obj5.damping = 54;
let closure_38 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
let closure_39 = {
  code: "function QuestDockTsx9(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}",
};
const memoResult = importAllResult.memo(function QuestDockWithVisibilityContext() {
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[46]);
  mobileQuestDock = obj.useMobileQuestDock();
  const isMobileQuestDockRenderedBase = mobileQuestDock(
    isMobileQuestDockVisibleToUser[46],
  ).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  const obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[46]);
  const tmp = isMobileQuestDockVisibleToUser;
  isMobileQuestDockVisibleToUser = mobileQuestDock(
    isMobileQuestDockVisibleToUser[46],
  ).useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const items1 = [mobileQuestDock];
  const memo = importAllResult.useMemo(
    () => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }),
    items,
  );
  const memo1 = importAllResult.useMemo(() => {
    const type = mobileQuestDock.type;
    if (mobileQuestDock(isMobileQuestDockVisibleToUser[55]).AdCreativeType.BOUNTY === type) {
      let obj = { bounty: null };
      obj[0] = tmp.bounty;
      return closure_1_21(closure_1_42, obj);
    } else if (tmp2(tmp3[55]).AdCreativeType.QUEST === type) {
      obj = { quest: null };
      obj[0] = tmp.quest;
      return closure_1_21(closure_1_41, obj);
    } else if (tmp2(tmp3[55]).AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  let tmp7 = null;
  if (mobileQuestDock.type !== mobileQuestDock(isMobileQuestDockVisibleToUser[55]).AdCreativeType.NO_FILL) {
    obj = { value: null, children: null };
    obj[0] = memo;
    obj[1] = memo1;
    tmp7 = callback3(isMobileQuestDockRenderedBase(tmp[40]).Provider, obj);
  }
  return tmp7;
});
let result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default memoResult;
export { QuestDockQuestContent };
