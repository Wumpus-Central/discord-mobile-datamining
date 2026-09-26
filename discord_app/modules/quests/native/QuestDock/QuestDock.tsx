// discord_app/modules/quests/native/QuestDock/QuestDock.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import MonitoringAgentDefault from "../../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import hooks_QuestHooks from "../../hooks/QuestHooks.tsx";
import QuestsEligibility from "../../lib/QuestsEligibility.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import QuestDockGestureContext from "QuestDockGestureContext.tsx";
import QuestDockBountyHeaderDefault from "QuestDockBountyHeader.tsx";
import QuestDockBountyBodyDefault from "QuestDockBountyBody.tsx";
import QuestDockBountyBackgroundDefault from "QuestDockBountyBackground.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestDockStore from "QuestDockStore.tsx";

require = fn;
function QuestDockWithGestureAnimation(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  ({ layoutVariant, withAndroidOffscreenAlphaCompositingWorkaround } = backgroundColor);
  let isAndroidResult = undefined !== withAndroidOffscreenAlphaCompositingWorkaround;
  ({ expandedHeight, collapsedContent, expandedContent, backgroundContent } = backgroundColor);
  if (isAndroidResult) {
    isAndroidResult = withAndroidOffscreenAlphaCompositingWorkaround;
  }
  if (isAndroidResult) {
    isAndroidResult = backgroundColor(questDockExpandHandler[13]).isAndroid();
    let obj = backgroundColor(questDockExpandHandler[13]);
  }
  importDefault = tmp4;
  let str = "fixed";
  if ("flush" === layoutVariant) {
    str = "content";
  }
  let str2 = "overlay";
  if ("flush" === layoutVariant) {
    str2 = "default";
  }
  const questDockCreative = backgroundColor(questDockExpandHandler[14]).useQuestDockCreative();
  let obj2 = backgroundColor(questDockExpandHandler[14]);
  questDockExpandHandler = backgroundColor(questDockExpandHandler[15]).useQuestDockExpandHandler(questDockCreative);
  const tmp10 = closure_26();
  const context = setRestingQuestDockMode.useContext(
    backgroundColor(questDockExpandHandler[16]).QuestDockGestureContext,
  );
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = setRestingQuestDockMode.useContext(
    backgroundColor(questDockExpandHandler[17]).QuestDockExternalCoordinationContext,
  );
  const restingQuestDockMode = context1.restingQuestDockMode;
  setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = setRestingQuestDockMode.useId();
  const callback = setRestingQuestDockMode.useCallback(() => {
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  let obj3 = backgroundColor(questDockExpandHandler[15]);
  const questDockModeAnimatedReaction = backgroundColor(questDockExpandHandler[15]).useQuestDockModeAnimatedReaction();
  let obj4 = backgroundColor(questDockExpandHandler[15]);
  const questDockDismissalReset = backgroundColor(questDockExpandHandler[15]).useQuestDockDismissalReset();
  let obj5 = backgroundColor(questDockExpandHandler[15]);
  const isScreenReaderEnabled = backgroundColor(questDockExpandHandler[18]).useIsScreenReaderEnabled();
  let obj6 = backgroundColor(questDockExpandHandler[18]);
  class J {
    constructor() {
      return restingQuestDockMode.get() === QuestDockMode.EXPANDED;
    }
  }
  J.__closure = { restingQuestDockMode, QuestDockMode };
  J.__workletHash = 2415817673061;
  J.__initData = __initData;
  const derivedValue = backgroundColor(questDockExpandHandler[19]).useDerivedValue(J);
  const tmp20 = require("useStateFromSharedValue")(derivedValue);
  const top = require("useSafeAreaInsets")().top;
  obj7 = backgroundColor(questDockExpandHandler[19]);
  const obj8 = { restingQuestDockMode, QuestDockMode };
  const youBarTotalHeight = backgroundColor(questDockExpandHandler[22]).useYouBarTotalHeight();
  const obj9 = backgroundColor(questDockExpandHandler[22]);
  const token = backgroundColor(questDockExpandHandler[23]).useToken(
    require("native").modules.mobile.QUEST_DOCK_BORDER_RADIUS,
  );
  const tmp23 = require("useQuestDockAnimatedBorderRadius")(token);
  closure_10 = tmp23;
  const obj10 = backgroundColor(questDockExpandHandler[23]);
  class Z {
    constructor() {
      size = {
        backgroundColor,
        borderBottomRightRadius: null,
        borderBottomLeftRadius: null,
        height: null,
        width: null,
        opacity: null,
        transform: null,
      };
      obj2 = closure_0(closure_2[25]);
      size.borderBottomRightRadius = obj2.withSpring(closure_10.get(), closure_15);
      obj3 = closure_0(closure_2[25]);
      size.borderBottomLeftRadius = obj3.withSpring(closure_10.get(), closure_15);
      size.height = questDockWrapperSpecs.get().height;
      size.width = questDockWrapperSpecs.get().width;
      obj4 = closure_0(closure_2[25]);
      size.opacity = obj4.withSpring(1, closure_14);
      obj1 = { translateX: null };
      obj6 = closure_0(closure_2[25]);
      obj7 = closure_0(closure_2[26]);
      obj1.translateX = obj6.withSpring(
        questDockWrapperSpecs.get().x + -1 * obj7.roundToNearestPixel(questDockWrapperSpecs.get().width / 2),
        closure_14,
      );
      items = [,];
      items[0] = obj1;
      obj10 = { translateY: null };
      obj9 = closure_0(closure_2[25]);
      obj10.translateY = obj9.withSpring(questDockWrapperSpecs.get().y, closure_14);
      items[1] = obj10;
      size.transform = items;
      return size;
    }
  }
  const obj11 = backgroundColor(questDockExpandHandler[19]);
  Z.__closure = {
    backgroundColor,
    withSpring: backgroundColor(questDockExpandHandler[25]).withSpring,
    bottomBorderRadius: tmp23,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs: context.questDockWrapperSpecs,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
    roundToNearestPixel: backgroundColor(questDockExpandHandler[26]).roundToNearestPixel,
  };
  Z.__workletHash = 9565489600157;
  Z.__initData = __initData2;
  const animatedStyle = obj11.useAnimatedStyle(Z);
  const obj12 = {
    backgroundColor,
    withSpring: backgroundColor(questDockExpandHandler[25]).withSpring,
    bottomBorderRadius: tmp23,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs: context.questDockWrapperSpecs,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
    roundToNearestPixel: backgroundColor(questDockExpandHandler[26]).roundToNearestPixel,
  };
  const sharedValue = backgroundColor(questDockExpandHandler[19]).useSharedValue(0);
  const obj13 = backgroundColor(questDockExpandHandler[19]);
  function ee() {
    const obj = { transform: null };
    const obj2 = { scale: null };
    const obj3 = spring;
    obj2.scale = obj3.withSpring(
      ReanimatedRexport.interpolate(sharedValue.get(), [1, 0], [1, 1]),
      springPresets.springStandard,
    );
    const items = [obj2];
    obj.transform = items;
    return obj;
  }
  const obj14 = backgroundColor(questDockExpandHandler[19]);
  ee.__closure = {
    withSpring: backgroundColor(questDockExpandHandler[25]).withSpring,
    interpolate: backgroundColor(questDockExpandHandler[19]).interpolate,
    isPressed: sharedValue,
    springStandard: backgroundColor(questDockExpandHandler[27]).springStandard,
  };
  ee.__workletHash = 3373473585356;
  ee.__initData = __initData3;
  const items1 = [setRestingQuestDockMode, questDockExpandHandler];
  const animatedStyle1 = obj14.useAnimatedStyle(ee);
  const items2 = [sharedValue];
  const callback1 = setRestingQuestDockMode.useCallback(() => {
    setRestingQuestDockMode(QuestDockMode.EXPANDED);
    questDockExpandHandler();
  }, items1);
  const items3 = [sharedValue];
  const callback2 = setRestingQuestDockMode.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const callback3 = setRestingQuestDockMode.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  const obj15 = {
    withSpring: backgroundColor(questDockExpandHandler[25]).withSpring,
    interpolate: backgroundColor(questDockExpandHandler[19]).interpolate,
    isPressed: sharedValue,
    springStandard: backgroundColor(questDockExpandHandler[27]).springStandard,
  };
  function te() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS), height: windowDimensions.get().height };
  }
  const obj16 = backgroundColor(questDockExpandHandler[19]);
  te.__closure = {
    withSpring: backgroundColor(questDockExpandHandler[25]).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
    windowDimensions,
  };
  te.__workletHash = 6178969276321;
  te.__initData = __initData4;
  const animatedStyle2 = obj16.useAnimatedStyle(te);
  const obj17 = {
    withSpring: backgroundColor(questDockExpandHandler[25]).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
    windowDimensions,
  };
  function oe() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  oe.__closure = { activeQuestDockMode, QuestDockMode };
  oe.__workletHash = 5416180055289;
  oe.__initData = __initData5;
  const animatedProps = backgroundColor(questDockExpandHandler[19]).useAnimatedProps(oe);
  const obj18 = backgroundColor(questDockExpandHandler[19]);
  function ie() {
    value = questDockWrapperSpecs.get();
    return windowDimensions.get().height - top - value.height;
  }
  ie.__closure = { questDockWrapperSpecs: context.questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  ie.__workletHash = 8073454569923;
  ie.__initData = __initData6;
  const derivedValue1 = backgroundColor(questDockExpandHandler[19]).useDerivedValue(ie);
  const obj19 = backgroundColor(questDockExpandHandler[19]);
  const tmp33 = require("useStateFromSharedValue")(derivedValue1);
  function re() {
    if (activeQuestDockMode.get() === QuestDockMode.CLOSED) {
      let num = 0;
    } else {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
  }
  const obj20 = backgroundColor(questDockExpandHandler[19]);
  re.__closure = {
    withSpring: backgroundColor(questDockExpandHandler[25]).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
  };
  re.__workletHash = 6468803634518;
  re.__initData = __initData7;
  const animatedStyle3 = obj20.useAnimatedStyle(re);
  const obj21 = {
    withSpring: backgroundColor(questDockExpandHandler[25]).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
  };
  function se() {
    if (closure_1) {
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        let tmp4 = QUEST_DOCK_CONTENT_BORDER_RADII;
      }
      const size = {
        borderTopLeftRadius: tmp4,
        borderTopRightRadius: null,
        borderBottomLeftRadius: null,
        borderBottomRightRadius: null,
        opacity: null,
        height: null,
        width: null,
        transform: null,
        borderBottomWidth: null,
      };
      if (closure_1) {
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          let tmp7 = QUEST_DOCK_CONTENT_BORDER_RADII;
        }
        size.borderTopRightRadius = tmp7;
        if (closure_1) {
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            value2 = QUEST_DOCK_CONTENT_BORDER_RADII;
          }
          size.borderBottomLeftRadius = value2;
          if (closure_1) {
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              value = QUEST_DOCK_CONTENT_BORDER_RADII;
            }
            size.borderBottomRightRadius = value;
            let num2 = 1;
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              num2 = 0;
            }
            size.opacity = spring.withSpring(num2, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
            if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
              if (closure_1) {
                let height = QUEST_DOCK_COLLAPSED_HEIGHT;
              }
              size.height = height;
              if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                if (closure_1) {
                  let width = questDockWrapperSpecs.get().width - 2 * closure_2_17;
                }
                size.width = width;
                let num5 = 0;
                if (closure_1) {
                  let num6 = 0;
                  if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                    num6 = closure_2_17;
                  }
                  num5 = spring.withSpring(num6, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
                  const tmp16Result = spring;
                }
                const obj = { translateX: num5 };
                const items = [obj];
                let num7 = 0;
                if (closure_1) {
                  let num8 = 0;
                  if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                    num8 = closure_2_17;
                  }
                  num7 = spring.withSpring(num8, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
                  const tmp16Result2 = spring;
                }
                const obj4 = { translateY: num7 };
                items[1] = obj4;
                size.transform = items;
                let num9 = 0;
                if (closure_10.get() > 0) {
                  num9 = 1;
                }
                size.borderBottomWidth = num9;
                return size;
              }
              width = questDockWrapperSpecs.get().width;
            }
            height = questDockWrapperSpecs.get().height;
          }
          value = closure_10.get();
        }
        value2 = closure_10.get();
      }
      tmp7 = token;
    }
    tmp4 = token;
  }
  const obj22 = backgroundColor(questDockExpandHandler[19]);
  se.__closure = {
    hasInsetHeaderTile: "insetHeader" === layoutVariant,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    bottomBorderRadius: tmp23,
    withSpring: backgroundColor(questDockExpandHandler[25]).withSpring,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    QUEST_DOCK_COLLAPSED_HEIGHT,
    questDockWrapperSpecs: context.questDockWrapperSpecs,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17,
  };
  se.__workletHash = 13161475723910;
  se.__initData = __initData8;
  const obj24 = { style: tmp10.wrapper, pointerEvents: "auto", children: null };
  const animatedStyle4 = obj22.useAnimatedStyle(se);
  const obj25 = {
    nativeID: id,
    style: tmp10.accessibilityWrapper,
    accessibilityViewIsModal: null,
    onAccessibilityEscape: null,
    pointerEvents: "box-none",
    children: null,
  };
  let tmp40 = isScreenReaderEnabled;
  if (tmp40) {
    tmp40 = tmp20;
  }
  obj25.accessibilityViewIsModal = tmp40;
  obj25.onAccessibilityEscape = callback;
  const obj23 = {
    hasInsetHeaderTile: "insetHeader" === layoutVariant,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    bottomBorderRadius: tmp23,
    withSpring: backgroundColor(questDockExpandHandler[25]).withSpring,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    QUEST_DOCK_COLLAPSED_HEIGHT,
    questDockWrapperSpecs: context.questDockWrapperSpecs,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17,
  };
  const obj26 = { style: animatedStyle1, children: null };
  const tmp19Result = require("QuestDockGestureDetector");
  const obj27 = { style: null, layout: null, children: null };
  const items4 = [tmp10.questDockWrapper, { bottom: youBarTotalHeight - 1 }, animatedStyle];
  obj27.style = items4;
  const obj28 = { bottom: youBarTotalHeight - 1 };
  const tmp19Result6 = require("ReanimatedNativeView");
  obj27.layout = backgroundColor(questDockExpandHandler[26]).dimensionsLayoutTransition;
  const obj29 = {
    style: tmp10.nestedPressable,
    onPressIn: callback2,
    onPressOut: callback3,
    onPress: callback1,
    pointerEvents: null,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityHint: null,
  };
  let str3 = "auto";
  if (tmp20) {
    str3 = "none";
  }
  obj29.pointerEvents = str3;
  const intl = tmp6(tmp7[31]).intl;
  obj29.accessibilityLabel = intl.string(backgroundColor(questDockExpandHandler[31]).t.rjVPdM);
  let str4 = "";
  if (!tmp20) {
    const intl2 = tmp6(tmp7[31]).intl;
    str4 = intl2.string(tmp6(tmp7[31]).t.n0MlOB);
  }
  obj29.accessibilityHint = str4;
  const items5 = [closure_23(token, obj29), , ,];
  const obj30 = { style: null, layout: null, pointerEvents: "none" };
  const items6 = [tmp10.questDockHeaderBorder, animatedStyle4];
  obj30.style = items6;
  const tmp19Result7 = require("ReanimatedNativeView");
  obj30.layout = backgroundColor(questDockExpandHandler[26]).dimensionsLayoutTransition;
  items5[1] = closure_23(require("ReanimatedNativeView"), obj30);
  const obj31 = { style: null, needsOffscreenAlphaCompositing: isAndroidResult, children: null };
  const items7 = [tmp10.questDockContentWrapper, animatedStyle3];
  obj31.style = items7;
  const obj32 = { style: tmp10.questDockContentWrapper, children: null };
  const tmp19Result8 = require("ReanimatedNativeView");
  const items8 = [
    closure_23(require("QuestDockContentCollapsed"), {
      hideOnExpand: "flush" === layoutVariant,
      children: collapsedContent,
    }),
    closure_23(require("QuestDockContentExpanded"), {
      expandedHeightMode: str,
      expandedHeight,
      children: expandedContent,
    }),
  ];
  obj32.children = items8;
  const items9 = [closure_24(top, obj32), backgroundContent];
  obj31.children = items9;
  let str5 = "no-offscreen-compositing";
  if (isAndroidResult) {
    str5 = "offscreen-compositing";
  }
  const obj33 = { children: null };
  const obj34 = { children: null };
  items5[2] = closure_24(require("ReanimatedNativeView"), obj31, str5);
  items5[3] = closure_23(require("QuestDockDragHandle"), { isExpanded: tmp20, variant: str2 });
  obj27.children = items5;
  obj26.children = closure_24(tmp19Result7, obj27);
  obj34.children = closure_23(tmp19Result6, obj26);
  obj25.children = closure_23(tmp19Result, obj34);
  obj24.children = closure_23(backgroundColor(questDockExpandHandler[28]).AccessibilityViewAnimated, obj25);
  const items10 = [closure_23(top, obj24)];
  const obj35 = { style: animatedStyle2, animatedProps, children: null };
  const tmp19Result9 = require("ReanimatedNativeView");
  obj35.children = closure_23(backgroundColor(questDockExpandHandler[35]).Backdrop, {
    onDismiss: callback,
    accessibleDismissStyle: { height: tmp33 },
  });
  items10[1] = closure_23(require("ReanimatedNativeView"), obj35);
  obj33.children = items10;
  return closure_24(closure_25, obj33);
}
function QuestDockModeChangeTracker(mode) {
  const tmp = _objectWithoutProperties(mode, closure_3);
  const obj2 = { mode: mode.mode };
  const merged = Object.assign(tmp);
  obj2.questContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  const questBarOrDockModeChangeTracking = hooks_QuestHooks.useQuestBarOrDockModeChangeTracking(obj2);
  return null;
}
function QuestBarRenderedTriggerPointWrapper() {
  const effect = noop.useEffect(() => {
    const QuestBarRenderedTriggerPoint = require("QuestBarRenderedTriggerPoint").QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
}
function QuestDockWithEntranceAnimation(arg0) {
  ({ renderModeChangeTracker: require, identifierMetricTag } = arg0);
  ({
    backgroundImageUrl,
    iconUrl,
    layoutVariant: dependencyMap,
    theme: closure_3,
    backgroundColor: asyncGeneratorStep,
    expandedHeight: _slicedToArray,
    collapsedContent: _objectWithoutProperties,
    expandedContent: noop,
    backgroundContent: closure_8,
    withAndroidOffscreenAlphaCompositingWorkaround: closure_9,
  } = arg0);
  ({ renderImpressionTracker, trackAssetLoadingFailure } = arg0);
  const context = noop.useContext(identifierMetricTag(14713));
  const isRendered = context.isRendered;
  let items = [mode];
  mode = initialize.useStateFromStores(items, () => mode.prevRestingQuestDockMode);
  closure_12 = _slicedToArray(
    noop.useState(() => performance.now()),
    1,
  )[0];
  noop.useRef(false);
  [componentDimensions, closure_15] = noop.useState({ width: 0, height: 0 });
  const tmp4 = closure_38();
  const isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  const fn = function n() {
    let num = 0;
    if (isRendered) {
      num = 1;
    }
    const obj2 = { opacity: spring.withSpring(num, obj7, "animate-always"), transform: null };
    let num2 = 0;
    if (!isRendered) {
      num2 = first.height;
    }
    const tmpResult = spring;
    const items = [{ translateY: spring.withSpring(num2, obj7) }];
    obj2.transform = items;
    return obj2;
  };
  let obj4 = ReanimatedRexport;
  fn.__closure = {
    withSpring: spring.withSpring,
    isRendered,
    ENTRANCE_ANIMATION_SPING_CONFIG: obj7,
    componentDimensions,
  };
  fn.__workletHash = 15545726338295;
  fn.__initData = __initData9;
  closure_129_5 = undefined;
  closure_129_0 = identifierMetricTag;
  closure_129_1 = backgroundImageUrl;
  closure_129_2 = iconUrl;
  closure_129_3 = trackAssetLoadingFailure;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  [first1, closure_129_5] = noop.useState(constants2.PENDING);
  closure_129_4 = first1;
  closure_129_6 = noop.useEffectEvent((arg0) => {
    if (theme != null) {
      tmp(arg0);
    }
  });
  const items1 = [backgroundImageUrl, iconUrl];
  const effect = noop.useEffect(() => {
    function prefetchWithErrorReporting(arg0) {
      const self = this;
      const apply = closure_1.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_1 = async function _prefetchWithErrorReporting(arg0) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              closure_129_0 = closure_0;
              c4 = 1;
              c5 = 2;
              v3 = 1;
              const obj4 = { value: isRendered.prefetch(closure_0), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            v3(closure_129_0);
            v3 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
            v3 = 3;
            return { value: true, done: true };
          }
        } catch (tmp16) {
          closure_3 = tmp16;
          if (tmp4 === c4) {
            v3 = tmp2;
            throw tmp16;
          } else {
            c5 = tmp;
          }
        }
      }
    };
    closure_2 = async function _preloadQuestDockAssets() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              const items = [];
              if (null != closure_1) {
                items.push(prefetchWithErrorReporting(tmp24));
              }
              if (null != c2) {
                items.push(prefetchWithErrorReporting(tmp15));
              }
              c2 = 1;
              c3 = 1;
              const obj4 = { value: Promise.all(items), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (closure_128_0.every((item) => true === item)) {
              let FAILED = constants.SUCCEEDED;
            } else {
              FAILED = constants.FAILED;
            }
            expandedHeight(FAILED);
            c3 = 3;
          }
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    };
    (function preloadQuestDockAssets() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        HermesBuiltin.applyArguments(self);
      } else {
        apply(self, arguments);
      }
    })();
  }, items1);
  const items2 = [first1, identifierMetricTag];
  const effect1 = noop.useEffect(() => {
    if (backgroundColor === constants.FAILED) {
      const obj2 = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: null };
      const items = [_require, ,];
      const obj = MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items[1] = "quest_content:" + AnalyticsTypes.getQuestContentName(QuestTypes.QuestContent.QUEST_BAR_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj2.tags = items;
      obj.increment(obj2);
    }
  }, items2);
  let tmp14 = !isEligibleForQuests;
  if (isEligibleForQuests) {
    tmp14 = first1 !== constants2.SUCCEEDED;
  }
  closure_16 = tmp14;
  const items3 = [tmp14];
  const effect2 = noop.useEffect(() => {
    let result = QuestActionCreators.updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: !closure_16 });
    return () => {
      const result = closure_1_0(layoutVariant[45]).updateQuestDockVisibilityEligibility({
        isEligibleToBeVisible: false,
      });
    };
  }, items3);
  let tmp16 = null;
  if (!tmp14) {
    const obj6 = { pointerEvents: "box-none", style: null, onLayout: null, children: null };
    const items4 = [tmp4.wrapperAnimated, animatedStyle];
    obj6.style = items4;
    obj6.onLayout = function onLayout(height) {
      const size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
      closure_15(size);
      if (!ref.current) {
        tmp2.current = true;
        const _Math = Math;
        if (Math.random() < 0.1) {
          const _Math2 = Math;
          const _performance = performance;
          const rounded = Math.round(performance.now() - closure_12);
          const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT, tags: null };
          const items = [identifierMetricTag];
          obj.tags = items;
          MonitoringAgentDefault.distribution(obj, rounded);
        }
      }
    };
    obj7 = {
      children() {
        const obj = { children: null };
        const items = [_require({ mode }), __initData3(QuestBarRenderedTriggerPointWrapper, {})];
        const obj3 = { expandedHeight, children: null };
        const obj4 = {
          theme,
          children: __initData3(QuestDockWithGestureAnimation, {
            backgroundColor,
            layoutVariant,
            expandedHeight,
            collapsedContent,
            expandedContent,
            backgroundContent,
            withAndroidOffscreenAlphaCompositingWorkaround: closure_1_9,
          }),
        };
        obj3.children = __initData3(native.ThemeContextProvider, obj4);
        items[2] = __initData3(QuestDockGestureContext.QuestDockGestureContextProvider, obj3);
        obj.children = items;
        return __initData4(closure_2_25, obj);
      },
      overrideVisibility: context.isVisibleToUser,
    };
    obj6.children = renderImpressionTracker(obj7);
    tmp16 = closure_23(identifierMetricTag(4566).View, obj6);
  }
  return tmp16;
}
class QuestDockQuestContent {
  constructor(arg0) {
    quest = global.quest;
    closure_1 = undefined;
    tmp2 = closure_2;
    tmp = quest;
    obj = quest(closure_2[36]);
    closure_1 = obj.useQuestBarImpressionSurvey(quest);
    obj2 = quest(closure_2[15]);
    questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
    obj3 = quest(closure_2[47]);
    obj4 = quest(closure_2[47]);
    userStatus = quest.userStatus;
    enrolledAt = undefined;
    questGameLogotypeAssetUrl = obj4.useQuestGameLogotypeAssetUrl(quest);
    if (userStatus != null) {
      enrolledAt = userStatus.enrolledAt;
    }
    tmp6 = null != enrolledAt;
    tmp7 = jsx;
    obj1 = { quest, children: null };
    obj7 = {
      identifierMetricTag: "quest_id:" + quest.id,
      backgroundImageUrl: obj3.useQuestDockHeroAsset(quest).staticUrl,
      iconUrl: questGameLogotypeAssetUrl,
      trackAssetLoadingFailure(asset_id) {
        AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, {
          quest_id: quest.id,
          source: constants.QUESTS_BAR_MOBILE,
          asset_id,
        });
      },
      layoutVariant: null,
      theme: null,
      backgroundColor: null,
      expandedHeight: null,
      collapsedContent: null,
      expandedContent: null,
      backgroundContent: null,
      renderImpressionTracker: null,
      renderModeChangeTracker: null,
    };
    tmp8 = QuestDockWithEntranceAnimation;
    str = "insetHeader";
    if (tmp6) {
      str = "flush";
    }
    obj7.layoutVariant = str;
    DARK = undefined;
    if (!tmp6) {
      tmp10 = ThemeTypes;
      DARK = ThemeTypes.DARK;
    }
    obj7.theme = DARK;
    obj7.backgroundColor = questDockAppThemedBackgroundColor;
    obj7.expandedHeight = closure_19;
    tmp11 = closure_1;
    obj7.collapsedContent = tmp7(tmp11(tmp6 ? tmp2[49] : tmp2[50]), {});
    obj7.expandedContent = tmp7(tmp11(tmp6 ? tmp2[51] : tmp2[52]), {});
    tmp7Result = null;
    if (!tmp6) {
      tmp7Result = tmp7(tmp11(tmp2[53]), {});
    }
    obj7.backgroundContent = tmp7Result;
    obj7.renderImpressionTracker = function renderImpressionTracker(arg0) {
      ({ children, overrideVisibility } = arg0);
      return __initData3(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, {
        questOrQuests: quest,
        overrideVisibility,
        questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        onImpression,
        children,
      });
    };
    obj7.renderModeChangeTracker = function renderModeChangeTracker(mode) {
      return __initData3(QuestDockModeChangeTracker, { questId: quest.id, mode: mode.mode });
    };
    obj1.children = tmp7(tmp8, obj7);
    return tmp7(tmp(tmp2[14]).QuestDockQuestProvider, obj1);
  }
}
function QuestDockBountyContent(bounty) {
  bounty = bounty.bounty;
  const bountyPreviewImageUrl = bounty(14621).useBountyPreviewImageUrl(bounty);
  let obj = bounty(14621);
  const questDockAppThemedBackgroundColor = bounty(14621).useQuestDockAppThemedBackgroundColor();
  const obj2 = bounty(14621);
  const questDockBountySmokeCollapsedPlaceholderUrl = bounty(14735).useQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj3 = bounty(14735);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = bounty(
    14736,
  ).useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  const obj5 = { bounty, children: null };
  const obj4 = bounty(14736);
  obj5.children = closure_23(QuestDockWithEntranceAnimation, {
    identifierMetricTag: "ad_creative_id:" + bounty.id,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: bounty.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, {
        source: constants.QUESTS_BAR_MOBILE,
        ad_creative_id: bounty.id,
        ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY,
        asset_id,
      });
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_23(QuestDockBountyHeaderDefault, {}),
    expandedContent: closure_23(QuestDockBountyBodyDefault, {}),
    backgroundContent: closure_23(QuestDockBountyBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: isBountiesAndroidQuestBarSmokeAnimationEnabled,
    renderImpressionTracker(arg0) {
      ({ children, overrideVisibility } = arg0);
      return __initData3(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, {
        adContentId: bounty.id,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        overrideVisibility,
        questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        children,
      });
    },
    renderModeChangeTracker(mode) {
      return __initData3(QuestDockModeChangeTracker, {
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        adContentId: bounty.id,
        mode: mode.mode,
      });
    },
  });
  return closure_23(bounty(14631).QuestDockBountyProvider, obj5);
}
let closure_3 = ["mode"];
get_ActivityIndicator = fn(17);
({ View: closure_8, StyleSheet, Pressable: closure_9, Image: c10 } = get_ActivityIndicator);
const QuestConstants = fn(5756);
({ QuestDockMode: closure_12, QuestsExperimentLocations: map1 } = QuestConstants);
const QuestDockConstants = fn(14624);
({
  QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14,
  QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15,
  QUEST_DOCK_CONTENT_BORDER_RADII: closure_16,
  QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17,
  QUEST_DOCK_COLLAPSED_HEIGHT: closure_18,
  QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: closure_19,
  QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT: closure_20,
} = QuestDockConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
let createStyles = fn(4836);
let obj = {
  wrapper: { position: "absolute", left: "50%", bottom: 0, zIndex: 1 },
  accessibilityWrapper: null,
  questDockWrapper: null,
  questDockContentWrapper: null,
  questDockHeaderBorder: null,
  nestedPressable: null,
};
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 1;
obj.accessibilityWrapper = obj3;
const rect = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS,
  zIndex: 1,
};
obj.questDockWrapper = rect;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.justifyContent = "flex-end";
obj4.zIndex = 4;
obj.questDockContentWrapper = obj4;
let obj5 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5.bottom = undefined;
obj5.right = undefined;
obj5.borderWidth = 1;
obj5.borderColor = nativeDefault.colors.BORDER_MUTED;
obj5.zIndex = 5;
obj.questDockHeaderBorder = obj5;
let obj6 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj6.zIndex = 6;
obj.nestedPressable = obj6;
let closure_26 = createStyles.createStyles(obj);
const __initData = {
  code: "function QuestDockTsx1(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}",
};
const __initData2 = {
  code: "function QuestDockTsx2(){const{backgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:backgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}",
};
const __initData3 = {
  code: "function QuestDockTsx3(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}",
};
const __initData4 = {
  code: "function QuestDockTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}",
};
const __initData5 = {
  code: "function QuestDockTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}",
};
const __initData6 = {
  code: "function QuestDockTsx6(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}",
};
const __initData7 = {
  code: "function QuestDockTsx7(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}",
};
const __initData8 = {
  code: "function QuestDockTsx8(){const{hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}",
};
createStyles = fn(4836);
let closure_38 = createStyles.createStyles(() => ({
  wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" },
}));
let obj7 = {};
const merged4 = Object.assign(fn(5284).SUBTLE_SPRING);
obj7.overshootClamping = true;
obj7.damping = 54;
const constants2 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
const __initData9 = {
  code: "function QuestDockTsx9(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default noop.memo(function QuestDockWithVisibilityContext() {
  mobileQuestDock = mobileQuestDock(isMobileQuestDockVisibleToUser[47]).useMobileQuestDock();
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  const isMobileQuestDockRenderedBase = mobileQuestDock(
    isMobileQuestDockVisibleToUser[47],
  ).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  isMobileQuestDockVisibleToUser = mobileQuestDock(
    isMobileQuestDockVisibleToUser[47],
  ).useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const memo = noop.useMemo(
    () => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }),
    items,
  );
  const obj3 = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  const tmp7Result = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[61])(
    mobileQuestDock(isMobileQuestDockVisibleToUser[37]).AdPlacement.MOBILE_HOME_DOCK_AREA,
    "QuestDockWithVisibilityContext",
  );
  const tmp9 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[62])();
  const tmp10 = !tmp9;
  const tmp7 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[61]);
  const items1 = [mobileQuestDock];
  const isMobileQuestDockVisibleToUser1 = mobileQuestDock(
    isMobileQuestDockVisibleToUser[47],
  ).useIsMobileQuestDockVisibleToUser(mobileQuestDock, tmp10);
  const memo1 = noop.useMemo(() => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj2 = { bounty: mobileQuestDock.bounty };
      return __initData3(QuestDockBountyContent, obj2);
    } else if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj = { quest: mobileQuestDock.quest };
      return __initData3(QuestDockQuestContent, obj);
    } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  if (mobileQuestDock.type === mobileQuestDock(isMobileQuestDockVisibleToUser[57]).AdCreativeType.NO_FILL) {
    let tmp16 = null;
    if (null != tmp7Result) {
      tmp16 = null;
      if (!tmp9) {
        const obj5 = { decisionId: tmp7Result.decisionId, visible: isMobileQuestDockVisibleToUser1 };
        tmp16 = closure_23(tmp6(tmp[63]), obj5);
      }
    }
    let tmp14 = tmp16;
  } else {
    const obj6 = { value: memo, children: memo1 };
    tmp14 = closure_23(tmp6(tmp[42]).Provider, obj6);
  }
  return tmp14;
});
export { QuestDockQuestContent };
