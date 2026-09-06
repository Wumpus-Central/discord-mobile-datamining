// discord_app/modules/quests/native/QuestDock/QuestDock.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import MonitoringAgentDefault from "../../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import ClientThemesOverrides from "../../../client_themes/native/ClientThemesOverrides.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import hooks_QuestHooks from "../../hooks/QuestHooks.tsx";
import QuestsEligibility from "../../lib/QuestsEligibility.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import QuestDockGestureContext from "QuestDockGestureContext.tsx";
import QuestDockBountyHeaderDefault from "QuestDockBountyHeader.tsx";
import QuestDockBountyBodyDefault from "QuestDockBountyBody.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestDockStore from "QuestDockStore.tsx";

require = fn;
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
  let obj1 = appThemedBackgroundColor(questDockExpandHandler[14]);
  questDockExpandHandler = obj1.useQuestDockExpandHandler(questDockCreative);
  let tmp7 = closure_24();
  const context = setRestingQuestDockMode.useContext(
    appThemedBackgroundColor(questDockExpandHandler[15]).QuestDockGestureContext,
  );
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = setRestingQuestDockMode.useContext(
    appThemedBackgroundColor(questDockExpandHandler[16]).QuestDockExternalCoordinationContext,
  );
  const restingQuestDockMode = context1.restingQuestDockMode;
  setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = setRestingQuestDockMode.useId();
  const callback = setRestingQuestDockMode.useCallback(() => {
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  let obj2 = appThemedBackgroundColor(questDockExpandHandler[14]);
  const questDockModeAnimatedReaction = obj2.useQuestDockModeAnimatedReaction();
  let obj3 = appThemedBackgroundColor(questDockExpandHandler[14]);
  const questDockDismissalReset = obj3.useQuestDockDismissalReset();
  obj4 = appThemedBackgroundColor(questDockExpandHandler[17]);
  const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
  let obj5 = appThemedBackgroundColor(questDockExpandHandler[18]);
  const fn = function j() {
    return restingQuestDockMode.get() === QuestDockMode.EXPANDED;
  };
  obj = { restingQuestDockMode, QuestDockMode };
  fn.__closure = obj;
  fn.__workletHash = 2415817673061;
  fn.__initData = __initData;
  const derivedValue = obj5.useDerivedValue(fn);
  const tmp17 = require("useStateFromSharedValue")(derivedValue);
  const top = require("useSafeAreaInsets")().top;
  let obj7 = appThemedBackgroundColor(questDockExpandHandler[21]);
  const youBarTotalHeight = obj7.useYouBarTotalHeight();
  let obj8 = appThemedBackgroundColor(questDockExpandHandler[22]);
  const token = obj8.useToken(require("native").modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp20 = require("useQuestDockAnimatedBorderRadius")(token);
  closure_10 = tmp20;
  let obj9 = appThemedBackgroundColor(questDockExpandHandler[18]);
  const fn2 = function z() {
    const size = {
      backgroundColor: appThemedBackgroundColor,
      borderBottomRightRadius: spring.withSpring(closure_10.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),
      borderBottomLeftRadius: null,
      height: null,
      width: null,
      opacity: null,
      transform: null,
    };
    size.borderBottomLeftRadius = spring.withSpring(closure_10.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    size.height = questDockWrapperSpecs.get().height;
    size.width = questDockWrapperSpecs.get().width;
    size.opacity = spring.withSpring(1, QUEST_DOCK_MODE_CHANGE_PHYSICS);
    let obj = { translateX: null };
    const obj6 = spring;
    obj.translateX = obj6.withSpring(
      questDockWrapperSpecs.get().x + -1 * QuestDockUtils.roundToNearestPixel(questDockWrapperSpecs.get().width / 2),
      QUEST_DOCK_MODE_CHANGE_PHYSICS,
    );
    const items = [obj];
    obj = { translateY: null };
    obj.translateY = spring.withSpring(questDockWrapperSpecs.get().y, QUEST_DOCK_MODE_CHANGE_PHYSICS);
    items[1] = obj;
    size.transform = items;
    return size;
  };
  obj = {
    appThemedBackgroundColor,
    withSpring: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring,
    bottomBorderRadius: tmp20,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    questDockWrapperSpecs,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
    roundToNearestPixel: appThemedBackgroundColor(questDockExpandHandler[25]).roundToNearestPixel,
  };
  fn2.__closure = obj;
  fn2.__workletHash = 4228984550973;
  fn2.__initData = __initData2;
  const animatedStyle = obj9.useAnimatedStyle(fn2);
  let obj11 = appThemedBackgroundColor(questDockExpandHandler[18]);
  const sharedValue = obj11.useSharedValue(0);
  let obj12 = appThemedBackgroundColor(questDockExpandHandler[18]);
  const fn3 = function $() {
    let obj = { transform: null };
    obj = { scale: null };
    const obj3 = spring;
    obj.scale = obj3.withSpring(
      ReanimatedRexport.interpolate(sharedValue.get(), [1, 0], [1, 1]),
      springPresets.springStandard,
    );
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj1 = {
    withSpring: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring,
    interpolate: appThemedBackgroundColor(questDockExpandHandler[18]).interpolate,
    isPressed: sharedValue,
    springStandard: appThemedBackgroundColor(questDockExpandHandler[26]).springStandard,
  };
  fn3.__closure = obj1;
  fn3.__workletHash = 3373473585356;
  fn3.__initData = __initData3;
  const items1 = [setRestingQuestDockMode, questDockExpandHandler];
  const animatedStyle1 = obj12.useAnimatedStyle(fn3);
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
  let obj14 = appThemedBackgroundColor(questDockExpandHandler[18]);
  class J {
    constructor() {
      obj = closure_0(closure_2[24]);
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      obj = { opacity: obj.withSpring(num, closure_14), height: windowDimensions.get().height };
      return obj;
    }
  }
  obj2 = {
    withSpring: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
    windowDimensions,
  };
  J.__closure = obj2;
  J.__workletHash = 6178969276321;
  J.__initData = __initData4;
  const animatedStyle2 = obj14.useAnimatedStyle(J);
  let obj16 = appThemedBackgroundColor(questDockExpandHandler[18]);
  class Z {
    constructor() {
      pointerEvents = "none";
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  Z.__closure = { activeQuestDockMode, QuestDockMode };
  Z.__workletHash = 5416180055289;
  Z.__initData = __initData5;
  const animatedProps = obj16.useAnimatedProps(Z);
  let obj17 = appThemedBackgroundColor(questDockExpandHandler[18]);
  function ee() {
    value = questDockWrapperSpecs.get();
    return windowDimensions.get().height - top - value.height;
  }
  ee.__closure = { questDockWrapperSpecs: context.questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  ee.__workletHash = 8073454569923;
  ee.__initData = __initData6;
  const derivedValue1 = obj17.useDerivedValue(ee);
  const tmp30 = require("useStateFromSharedValue")(derivedValue1);
  function te() {
    let obj = spring;
    if (activeQuestDockMode.get() === QuestDockMode.CLOSED) {
      let num = 0;
    } else {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
    return obj;
  }
  obj3 = {
    withSpring: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
  };
  te.__closure = obj3;
  te.__workletHash = 6468803634518;
  te.__initData = __initData7;
  const animatedStyle3 = appThemedBackgroundColor(questDockExpandHandler[18]).useAnimatedStyle(te);
  const obj19 = appThemedBackgroundColor(questDockExpandHandler[18]);
  function oe() {
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
            value = QUEST_DOCK_CONTENT_BORDER_RADII;
          }
          size.borderBottomLeftRadius = value;
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
                  let tmp16Result = spring;
                  let num6 = 0;
                  if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                    num6 = closure_2_17;
                  }
                  num5 = tmp16Result.withSpring(num6, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
                }
                let obj = { translateX: num5 };
                const items = [obj];
                let num7 = 0;
                if (closure_1) {
                  tmp16Result = spring;
                  let num8 = 0;
                  if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                    num8 = closure_2_17;
                  }
                  num7 = tmp16Result.withSpring(num8, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
                }
                obj = { translateY: num7 };
                items[1] = obj;
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
        value = closure_10.get();
      }
      tmp7 = token;
    }
    tmp4 = token;
  }
  obj4 = {
    hasInsetHeaderTile: tmp,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_CONTENT_BORDER_RADII,
    questDockBorderRadius: token,
    bottomBorderRadius: tmp20,
    withSpring: appThemedBackgroundColor(questDockExpandHandler[24]).withSpring,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    QUEST_DOCK_COLLAPSED_HEIGHT,
    questDockWrapperSpecs,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17,
  };
  oe.__closure = obj4;
  oe.__workletHash = 13161475723910;
  oe.__initData = __initData8;
  obj5 = { style: tmp7.wrapper, pointerEvents: "auto", children: null };
  const animatedStyle4 = appThemedBackgroundColor(questDockExpandHandler[18]).useAnimatedStyle(oe);
  let obj6 = {
    nativeID: id,
    style: tmp7.accessibilityWrapper,
    accessibilityViewIsModal: null,
    onAccessibilityEscape: null,
    pointerEvents: "box-none",
    children: null,
  };
  let tmp37 = isScreenReaderEnabled;
  if (tmp37) {
    tmp37 = tmp17;
  }
  obj6.accessibilityViewIsModal = tmp37;
  obj6.onAccessibilityEscape = callback;
  tmp16(tmp4[28]);
  obj7 = { style: animatedStyle1, children: null };
  let tmp16Result = tmp16(tmp4[29]);
  obj8 = { style: null, layout: null, children: null };
  const items4 = [tmp7.questDockWrapper, ,];
  obj9 = { bottom: youBarTotalHeight - 1 };
  items4[1] = obj9;
  items4[2] = animatedStyle;
  obj8.style = items4;
  const obj21 = appThemedBackgroundColor(questDockExpandHandler[18]);
  obj8.layout = appThemedBackgroundColor(questDockExpandHandler[25]).dimensionsLayoutTransition;
  const obj10 = {
    style: tmp7.nestedPressable,
    onPressIn: callback2,
    onPressOut: callback3,
    onPress: callback1,
    pointerEvents: null,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityHint: null,
  };
  let str3 = "auto";
  if (tmp17) {
    str3 = "none";
  }
  obj10.pointerEvents = str3;
  const intl = tmp3(tmp4[30]).intl;
  obj10.accessibilityLabel = intl.string(appThemedBackgroundColor(questDockExpandHandler[30]).t.rjVPdM);
  let str4 = "";
  if (!tmp17) {
    const intl2 = tmp3(tmp4[30]).intl;
    str4 = intl2.string(tmp3(tmp4[30]).t.n0MlOB);
  }
  obj11 = { children: null };
  obj12 = { children: null };
  obj10.accessibilityHint = str4;
  const items5 = [closure_21(token, obj10), , ,];
  const obj13 = { style: null, layout: null, pointerEvents: "none" };
  const items6 = [tmp7.questDockHeaderBorder, animatedStyle4];
  obj13.style = items6;
  const tmp16Result1 = require("ReanimatedNativeView");
  obj13.layout = appThemedBackgroundColor(questDockExpandHandler[25]).dimensionsLayoutTransition;
  items5[1] = closure_21(require("ReanimatedNativeView"), obj13);
  obj14 = { style: null, children: null };
  const items7 = [tmp7.questDockContentWrapper, animatedStyle3];
  obj14.style = items7;
  const obj15 = { style: tmp7.questDockContentWrapper, children: null };
  const tmp16Result2 = require("ReanimatedNativeView");
  const items8 = [
    closure_21(require("QuestDockContentCollapsed"), {
      hideOnExpand: "flush" === layoutVariant,
      children: collapsedContent,
    }),
    closure_21(require("QuestDockContentExpanded"), { expandedHeight: str, children: expandedContent }),
  ];
  obj15.children = items8;
  const items9 = [closure_22(top, obj15), backgroundContent];
  obj14.children = items9;
  items5[2] = closure_22(require("ReanimatedNativeView"), obj14);
  items5[3] = closure_21(require("QuestDockDragHandle"), { isExpanded: tmp17, variant: str2 });
  obj8.children = items5;
  obj7.children = closure_22(tmp16Result1, obj8);
  obj12.children = closure_21(tmp16Result, obj7);
  obj6.children = closure_21(tmp16Result, obj12);
  obj5.children = closure_21(appThemedBackgroundColor(questDockExpandHandler[27]).AccessibilityViewAnimated, obj6);
  const items10 = [closure_21(top, obj5)];
  obj16 = { style: animatedStyle2, animatedProps, children: null };
  const tmp16Result3 = require("ReanimatedNativeView");
  obj17 = { onDismiss: callback, accessibleDismissStyle: { height: tmp30 } };
  obj16.children = closure_21(appThemedBackgroundColor(questDockExpandHandler[34]).Backdrop, obj17);
  items10[1] = closure_21(require("ReanimatedNativeView"), obj16);
  obj11.children = items10;
  return closure_22(closure_23, obj11);
}
function QuestDockModeChangeTracker(mode) {
  const obj = { mode: mode.mode };
  const merged = Object.assign(_objectWithoutProperties(mode, closure_3));
  obj.questContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  obj.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  const questBarOrDockModeChangeTracking = obj.useQuestBarOrDockModeChangeTracking(obj);
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
    collapsedContent: asyncGeneratorStep,
    expandedContent: _slicedToArray,
    backgroundContent: _objectWithoutProperties,
  } = arg0);
  ({ renderImpressionTracker, trackAssetLoadingFailure } = arg0);
  const context = isRendered.useContext(identifierMetricTag(15182));
  isRendered = context.isRendered;
  let obj1 = initialize;
  let items = [componentDimensions];
  const mode = obj1.useStateFromStores(items, () => first.prevRestingQuestDockMode);
  closure_9 = _slicedToArray(
    isRendered.useState(() => performance.now()),
    1,
  )[0];
  isRendered.useRef(false);
  const tmp6 = _slicedToArray(isRendered.useState({ width: 0, height: 0 }), 2);
  componentDimensions = tmp6[0];
  closure_12 = tmp6[1];
  const tmp5 = closure_36();
  const isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  obj4 = ReanimatedRexport;
  const fn = function n() {
    let obj = spring;
    let num = 0;
    if (isRendered) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, obj4, "animate-always"), transform: null };
    let num2 = 0;
    if (!isRendered) {
      num2 = first.height;
    }
    obj = { translateY: spring.withSpring(num2, obj4) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  let obj = { withSpring: spring.withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: obj4, componentDimensions };
  fn.__closure = obj;
  fn.__workletHash = 15545726338295;
  fn.__initData = __initData9;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const gradientBottom = ClientThemesOverrides.useGradientBottom();
  let backgroundColor;
  const token = useToken.useToken(identifierMetricTag(576).colors.BACKGROUND_SURFACE_HIGH);
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = token;
  }
  closure_129_0 = identifierMetricTag;
  closure_129_1 = backgroundImageUrl;
  closure_129_2 = iconUrl;
  closure_129_3 = trackAssetLoadingFailure;
  const tmp4Result = _slicedToArray(obj.useState(constants2.PENDING), 2);
  const first1 = tmp4Result[0];
  closure_129_4 = first1;
  closure_129_5 = tmp4Result[1];
  closure_129_6 = obj.useEffectEvent((arg0) => {
    if (theme != null) {
      tmp(arg0);
    }
  });
  const items1 = [backgroundImageUrl, iconUrl];
  const effect = obj.useEffect(() => {
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              closure_129_0 = closure_0;
              c4 = 1;
              c5 = 2;
              v3 = 1;
              const obj1 = { value: ref.prefetch(closure_0), done: false };
              return obj1;
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
            obj = { value, done: true };
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
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
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
              const obj1 = { value: Promise.all(items), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (closure_128_0.every((item) => true === item)) {
              let FAILED = constants.SUCCEEDED;
            } else {
              FAILED = constants.FAILED;
            }
            expandedContent(FAILED);
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
  const effect1 = obj.useEffect(() => {
    if (collapsedContent === constants.FAILED) {
      const obj = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: null };
      const items = [_require, ,];
      const _HermesInternal = HermesInternal;
      items[1] = "quest_content:" + AnalyticsTypes.getQuestContentName(QuestTypes.QuestContent.QUEST_BAR_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj.tags = items;
      obj.increment(obj);
    }
  }, items2);
  let tmp18 = !isEligibleForQuests;
  if (isEligibleForQuests) {
    tmp18 = first1 !== constants2.SUCCEEDED;
  }
  closure_14 = tmp18;
  const items3 = [tmp18];
  const effect2 = obj.useEffect(() => {
    const obj = { isEligibleToBeVisible: !closure_14 };
    let result = obj.updateQuestDockVisibilityEligibility(obj);
    return () => {
      const result = closure_1_0(layoutVariant[45]).updateQuestDockVisibilityEligibility({
        isEligibleToBeVisible: false,
      });
    };
  }, items3);
  let tmp20 = null;
  if (!tmp18) {
    obj = { pointerEvents: "box-none", style: null, onLayout: null, children: null };
    const items4 = [tmp5.wrapperAnimated, animatedStyle];
    obj.style = items4;
    obj.onLayout = function onLayout(height) {
      const size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
      closure_12(size);
      if (!ref.current) {
        tmp2.current = true;
        const _Math = Math;
        if (Math.random() < 0.1) {
          const _Math2 = Math;
          const _performance = performance;
          const rounded = Math.round(performance.now() - closure_9);
          const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT, tags: null };
          const items = [identifierMetricTag];
          obj.tags = items;
          MonitoringAgentDefault.distribution(obj, rounded);
        }
      }
    };
    obj1 = {
      children() {
        let obj = { children: null };
        obj = { mode };
        const items = [_require(obj), __initData(QuestBarRenderedTriggerPointWrapper, {})];
        obj = { children: null };
        const obj1 = {
          theme,
          children: __initData(QuestDockWithGestureAnimation, {
            appThemedBackgroundColor: backgroundColor,
            layoutVariant,
            collapsedContent,
            expandedContent,
            backgroundContent,
          }),
        };
        obj.children = __initData(native.ThemeContextProvider, obj1);
        items[2] = __initData(QuestDockGestureContext.QuestDockGestureContextProvider, obj);
        obj.children = items;
        return __initData2(__initData3, obj);
      },
      overrideVisibility: context.isVisibleToUser,
    };
    obj.children = renderImpressionTracker(obj1);
    tmp20 = closure_21(identifierMetricTag(4296).View, obj);
  }
  return tmp20;
}
class QuestDockQuestContent {
  constructor(arg0) {
    quest = global.quest;
    closure_1 = undefined;
    tmp2 = closure_2;
    tmp = quest;
    obj = quest(closure_2[35]);
    closure_1 = obj.useQuestBarImpressionSurvey(quest);
    obj2 = quest(closure_2[47]);
    obj3 = quest(closure_2[47]);
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
        const obj = { quest_id: quest.id, source: constants.QUESTS_BAR_MOBILE, asset_id };
        obj.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, obj);
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
    obj1.layoutVariant = str;
    DARK = undefined;
    if (!tmp5) {
      tmp9 = ThemeTypes;
      DARK = ThemeTypes.DARK;
    }
    obj1.theme = DARK;
    tmp10 = closure_1;
    obj1.collapsedContent = tmp6(tmp10(tmp5 ? tmp2[49] : tmp2[50]), {});
    obj1.expandedContent = tmp6(tmp10(tmp5 ? tmp2[51] : tmp2[52]), {});
    tmp6Result = null;
    if (!tmp5) {
      tmp6Result = tmp6(tmp10(tmp2[53]), {});
    }
    obj1.backgroundContent = tmp6Result;
    obj1.renderImpressionTracker = function renderImpressionTracker(arg0) {
      ({ children, overrideVisibility } = arg0);
      return __initData(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, {
        questOrQuests: quest,
        overrideVisibility,
        questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        onImpression,
        children,
      });
    };
    obj1.renderModeChangeTracker = function renderModeChangeTracker(mode) {
      return __initData(QuestDockModeChangeTracker, { questId: quest.id, mode: mode.mode });
    };
    obj.children = tmp6(tmp7, obj1);
    return tmp6(tmp(tmp2[13]).QuestDockQuestProvider, obj);
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
    collapsedContent: closure_21(QuestDockBountyHeaderDefault, {}),
    expandedContent: closure_21(QuestDockBountyBodyDefault, {}),
    backgroundContent: null,
    renderImpressionTracker(children) {
      return __initData(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, {
        adContentId: bounty.id,
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        overrideVisibility: false,
        questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        children: children.children,
      });
    },
    renderModeChangeTracker(mode) {
      return __initData(QuestDockModeChangeTracker, {
        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
        adContentId: bounty.id,
        mode: mode.mode,
      });
    },
  };
  obj.children = closure_21(QuestDockWithEntranceAnimation, obj);
  return closure_21(bounty(15102).QuestDockBountyProvider, obj);
}
let closure_3 = ["mode"];
get_ActivityIndicator = fn(17);
({ View: closure_8, StyleSheet, Pressable: closure_9, Image: c10 } = get_ActivityIndicator);
const QuestConstants = fn(5444);
({ QuestDockMode: closure_12, QuestsExperimentLocations: map1 } = QuestConstants);
const QuestDockConstants = fn(15095);
({
  QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14,
  QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15,
  QUEST_DOCK_CONTENT_BORDER_RADII: closure_16,
  QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17,
  QUEST_DOCK_COLLAPSED_HEIGHT: closure_18,
} = QuestDockConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
fn(4560);
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
obj.accessibilityWrapper = obj;
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
let createStyles = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.justifyContent = "flex-end";
createStyles.zIndex = 4;
obj.questDockContentWrapper = createStyles;
let obj2 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.bottom = undefined;
obj2.right = undefined;
obj2.borderWidth = 1;
obj2.borderColor = nativeDefault.colors.BORDER_MUTED;
obj2.zIndex = 5;
obj.questDockHeaderBorder = obj2;
let obj3 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 6;
obj.nestedPressable = obj3;
let closure_24 = createStyles.createStyles(obj);
const __initData = {
  code: "function QuestDockTsx1(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}",
};
const __initData2 = {
  code: "function QuestDockTsx2(){const{appThemedBackgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:appThemedBackgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}",
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
createStyles = fn(4560);
let closure_36 = createStyles.createStyles(() => ({
  wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" },
}));
let obj4 = {};
const merged4 = Object.assign(fn(4978).SUBTLE_SPRING);
obj4.overshootClamping = true;
obj4.damping = 54;
const constants2 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
const __initData9 = {
  code: "function QuestDockTsx9(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default noop.memo(function QuestDockWithVisibilityContext() {
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  mobileQuestDock = obj.useMobileQuestDock();
  const isMobileQuestDockRenderedBase = mobileQuestDock(
    isMobileQuestDockVisibleToUser[47],
  ).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  const obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  const tmp = isMobileQuestDockVisibleToUser;
  isMobileQuestDockVisibleToUser = mobileQuestDock(
    isMobileQuestDockVisibleToUser[47],
  ).useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const items1 = [mobileQuestDock];
  const memo = noop.useMemo(
    () => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }),
    items,
  );
  const memo1 = noop.useMemo(() => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      let obj = { bounty: mobileQuestDock.bounty };
      return __initData(QuestDockBountyContent, obj);
    } else if (AdCreativeType.AdCreativeType.QUEST === type) {
      obj = { quest: mobileQuestDock.quest };
      return __initData(QuestDockQuestContent, obj);
    } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  let tmp7 = null;
  if (mobileQuestDock.type !== mobileQuestDock(isMobileQuestDockVisibleToUser[57]).AdCreativeType.NO_FILL) {
    obj = { value: memo, children: memo1 };
    tmp7 = closure_21(isMobileQuestDockRenderedBase(tmp[41]).Provider, obj);
  }
  return tmp7;
});
export { QuestDockQuestContent };
