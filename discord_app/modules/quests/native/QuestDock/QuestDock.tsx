// === Module 17417: QuestDock ===

// Module 17417 (QuestDock)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import native from "native" /* 5229 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6619 */;
import MetricEvents from "MetricEvents" /* 6624 */;
import QuestTypes from "QuestTypes" /* 6864 */;
import AdCreativeType from "AdCreativeType" /* 6868 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7970 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8933 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9788 */;
import QuestActionCreators from "QuestActionCreators" /* 9789 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 14901 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17335 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 17416 */;
import useQuestDockAnimatedBorderRadiusDefault from "useQuestDockAnimatedBorderRadius" /* 17418 */;
import QuestDockGestureDetectorDefault from "QuestDockGestureDetector" /* 17419 */;
import QuestDockContentCollapsedDefault from "QuestDockContentCollapsed" /* 17420 */;
import QuestDockContentExpandedDefault from "QuestDockContentExpanded" /* 17421 */;
import QuestDockDragHandleDefault from "QuestDockDragHandle" /* 17422 */;
import QuestDockBountyHeaderDefault from "QuestDockBountyHeader" /* 17444 */;
import QuestDockBountyBodyDefault from "QuestDockBountyBody" /* 17447 */;
import QuestDockBountyBackgroundDefault from "QuestDockBountyBackground" /* 17449 */;
import QuestDockPlayableHeaderDefault from "QuestDockPlayableHeader" /* 17450 */;
import QuestDockPlayableBodyDefault from "QuestDockPlayableBody" /* 17451 */;
import QuestDockPlayableBackgroundDefault from "QuestDockPlayableBackground" /* 17452 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17332 */;

require = fn;
function QuestDockWithGestureAnimation(arg0) {
  ({ layoutVariant, withAndroidOffscreenAlphaCompositingWorkaround } = arg0);
  let isAndroidResult = undefined !== withAndroidOffscreenAlphaCompositingWorkaround;
  ({ backgroundColor, expandedHeight, collapsedContent, expandedContent, backgroundContent } = arg0);
  if (isAndroidResult) {
    isAndroidResult = withAndroidOffscreenAlphaCompositingWorkaround;
  }
  if (isAndroidResult) {
    isAndroidResult = require("PlatformUtils").isAndroid();
    let obj = require("PlatformUtils");
  }
  let str = "fixed";
  if ("flush" === layoutVariant) {
    str = "content";
  }
  let str2 = "overlay";
  if ("flush" === layoutVariant) {
    str2 = "default";
  }
  const questDockCreative = require("QuestDockCreativeContext").useQuestDockCreative();
  const obj2 = require("QuestDockCreativeContext");
  const questDockExpandHandler = require("QuestDockHooks").useQuestDockExpandHandler(questDockCreative);
  _require = questDockExpandHandler;
  const tmp9 = closure_26();
  const context = noop.useContext(require("QuestDockGestureContext").QuestDockGestureContext);
  ({ questDockWrapperSpecs, activeQuestDockMode, windowDimensions } = context);
  const context1 = noop.useContext(require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  items = [setRestingQuestDockMode];
  const id = noop.useId();
  const callback = noop.useCallback(() => {
    _undefined(constants.COLLAPSED);
  }, items);
  let obj3 = require("QuestDockHooks");
  const questDockModeAnimatedReaction = require("QuestDockHooks").useQuestDockModeAnimatedReaction();
  const obj5 = require("QuestDockHooks");
  const questDockDismissalReset = require("QuestDockHooks").useQuestDockDismissalReset();
  const obj6 = require("QuestDockHooks");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  obj7 = require("useIsScreenReaderEnabled");
  const items1 = [closure_27, context1.restingQuestDockMode, closure_12];
  _require = undefined;
  importDefault = undefined;
  [tmp18, tmp19, tmp20] = items1;
  class QuestDockTsx1 {
    constructor() {
      return closure_0.get() === closure_1.EXPANDED;
    }
  }
  const items2 = [tmp19, tmp20];
  QuestDockTsx1.__closure = items2;
  QuestDockTsx1.__workletHash = 9923018697916;
  QuestDockTsx1.__initData = tmp18;
  const derivedValue = require("module_1652").useDerivedValue(QuestDockTsx1);
  const tmp23 = useStateFromSharedValueDefault(derivedValue);
  const obj8 = require("module_1652");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  const tmp5Result = require("useYouBarTotalHeight");
  const token = require("useToken").useToken(nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp26 = useQuestDockAnimatedBorderRadiusDefault(token);
  const tmp5Result10 = require("useToken");
  const items3 = [closure_28, backgroundColor, require("spring/spring").withSpring, tmp26, closure_15, questDockWrapperSpecs, closure_14, require("QuestDockUtils").roundToNearestPixel];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36] = items3;
  class QuestDockTsx2 {
    constructor() {
      size = { backgroundColor: closure_0, borderBottomRightRadius: closure_1(closure_2.get(), closure_3), borderBottomLeftRadius: closure_1(closure_2.get(), closure_3), height: closure_4.get().height, width: closure_4.get().width, opacity: closure_1(1, closure_5), transform: null };
      obj1 = { translateX: closure_1(closure_4.get().x + -1 * closure_6(closure_4.get().width / 2), closure_5) };
      items = [, ];
      items[0] = obj1;
      obj4 = { translateY: closure_1(closure_4.get().y, closure_5) };
      items[1] = obj4;
      size.transform = items;
      return size;
    }
  }
  const items4 = [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36];
  QuestDockTsx2.__closure = items4;
  QuestDockTsx2.__workletHash = 13174299505860;
  QuestDockTsx2.__initData = tmp29;
  const animatedStyle = require("module_1652").useAnimatedStyle(QuestDockTsx2);
  const tmp5Result11 = require("module_1652");
  const sharedValue = require("module_1652").useSharedValue(0);
  const tmp5Result12 = require("module_1652");
  const items5 = [closure_29, require("spring/spring").withSpring, require("module_1652").interpolate, sharedValue, require("springPresets").springStandard];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp39, tmp40, tmp41, tmp42, tmp43] = items5;
  class QuestDockTsx3 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0(closure_1(closure_2.get(), [1, 0], [1, 1]), closure_3) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items6 = [tmp40, tmp41, tmp42, tmp43];
  QuestDockTsx3.__closure = items6;
  QuestDockTsx3.__workletHash = 6545557591925;
  QuestDockTsx3.__initData = tmp39;
  const items7 = [setRestingQuestDockMode, questDockExpandHandler];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(QuestDockTsx3);
  const items8 = [sharedValue];
  const callback1 = obj4.useCallback(() => {
    _undefined(constants.EXPANDED);
    backgroundColor();
  }, items7);
  const items9 = [sharedValue];
  const callback2 = obj4.useCallback(() => {
    const result = _undefined2.set(1);
  }, items8);
  const callback3 = obj4.useCallback(() => {
    const result = _undefined2.set(0);
  }, items9);
  const tmp5Result13 = require("module_1652");
  const items10 = [closure_30, require("spring/spring").withSpring, activeQuestDockMode, closure_12, closure_14, windowDimensions];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp48, tmp49, tmp50, tmp51, tmp52, tmp53] = items10;
  class QuestDockTsx4 {
    constructor() {
      tmp = closure_0;
      num = 0;
      if (closure_1.get() === closure_2.EXPANDED) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_3), height: closure_4.get().height };
      return obj;
    }
  }
  const items11 = [tmp49, tmp50, tmp51, tmp52, tmp53];
  QuestDockTsx4.__closure = items11;
  QuestDockTsx4.__workletHash = 1480244273080;
  QuestDockTsx4.__initData = tmp48;
  const animatedStyle2 = require("module_1652").useAnimatedStyle(QuestDockTsx4);
  const tmp5Result14 = require("module_1652");
  const items12 = [closure_31, activeQuestDockMode, closure_12];
  _require = undefined;
  importDefault = undefined;
  [tmp55, tmp56, tmp57] = items12;
  class QuestDockTsx5 {
    constructor() {
      pointerEvents = "none";
      if (closure_0.get() === closure_1.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  const items13 = [tmp56, tmp57];
  QuestDockTsx5.__closure = items13;
  QuestDockTsx5.__workletHash = 16280207829696;
  QuestDockTsx5.__initData = tmp55;
  const animatedProps = require("module_1652").useAnimatedProps(QuestDockTsx5);
  const tmp5Result15 = require("module_1652");
  const items14 = [closure_32, questDockWrapperSpecs, windowDimensions, useSafeAreaInsetsDefault().top];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp59, tmp60, tmp61, tmp62] = items14;
  class QuestDockTsx6 {
    constructor() {
      value = closure_0.get();
      return closure_1.get().height - closure_2 - value.height;
    }
  }
  const items15 = [tmp60, tmp61, tmp62];
  QuestDockTsx6.__closure = items15;
  QuestDockTsx6.__workletHash = 14232802848762;
  QuestDockTsx6.__initData = tmp59;
  const derivedValue1 = require("module_1652").useDerivedValue(QuestDockTsx6);
  const tmp5Result16 = require("module_1652");
  const tmp64 = useStateFromSharedValueDefault(derivedValue1);
  const items16 = [closure_33, require("spring/spring").withSpring, activeQuestDockMode, closure_12, closure_14];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp65, tmp66, tmp67, tmp68, tmp69] = items16;
  class QuestDockTsx7 {
    constructor() {
      obj = closure_1;
      tmp = closure_0;
      if (closure_1.get() === closure_2.CLOSED) {
        num = 0;
      } else {
        num = 1;
      }
      obj1 = { opacity: tmp(num, closure_3) };
      return obj1;
    }
  }
  const items17 = [tmp66, tmp67, tmp68, tmp69];
  QuestDockTsx7.__closure = items17;
  QuestDockTsx7.__workletHash = 13838986608047;
  QuestDockTsx7.__initData = tmp65;
  const animatedStyle3 = require("module_1652").useAnimatedStyle(QuestDockTsx7);
  const tmp5Result17 = require("module_1652");
  const items18 = [closure_34, "insetHeader" === layoutVariant, activeQuestDockMode, closure_12, closure_16, token, tmp26, require("spring/spring").withSpring, closure_15, closure_18, questDockWrapperSpecs, closure_17];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  noop = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82] = items18;
  class QuestDockTsx8 {
    constructor() {
      tmp = closure_0;
      if (closure_0) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        if (closure_1.get() === closure_2.EXPANDED) {
          tmp4 = closure_3;
        }
        size = { borderTopLeftRadius: null, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
        size.borderTopLeftRadius = tmp4;
        if (tmp) {
          tmp5 = closure_1;
          tmp6 = closure_2;
          if (closure_1.get() === closure_2.EXPANDED) {
            tmp7 = closure_3;
          }
          size.borderTopRightRadius = tmp7;
          if (tmp) {
            tmp8 = closure_1;
            tmp9 = closure_2;
            if (closure_1.get() === closure_2.EXPANDED) {
              value1 = closure_3;
            }
            size.borderBottomLeftRadius = value1;
            if (tmp) {
              tmp12 = closure_1;
              tmp13 = closure_2;
              if (closure_1.get() === closure_2.EXPANDED) {
                value = closure_3;
              }
              size.borderBottomRightRadius = value;
              tmp16 = closure_6;
              obj2 = closure_1;
              tmp17 = closure_2;
              num = 1;
              num2 = 1;
              if (closure_1.get() === closure_2.EXPANDED) {
                num2 = 0;
              }
              tmp18 = closure_7;
              size.opacity = tmp16(num2, closure_7);
              if (obj2.get() === tmp17.EXPANDED) {
                if (tmp) {
                  height = closure_8;
                }
                size.height = height;
                if (obj2.get() === tmp17.EXPANDED) {
                  if (tmp) {
                    tmp21 = closure_9;
                    tmp22 = closure_10;
                    num3 = 2;
                    width = closure_9.get().width - 2 * closure_10;
                  }
                  size.width = width;
                  num4 = 0;
                  num5 = 0;
                  if (tmp) {
                    num6 = 0;
                    if (obj2.get() === tmp17.EXPANDED) {
                      num6 = closure_10;
                    }
                    num5 = tmp16(num6, tmp18);
                  }
                  obj1 = { translateX: null };
                  obj1.translateX = num5;
                  items = [, ];
                  items[0] = obj1;
                  num7 = 0;
                  if (tmp) {
                    num8 = 0;
                    if (obj2.get() === tmp17.EXPANDED) {
                      num8 = closure_10;
                    }
                    num7 = tmp16(num8, tmp18);
                  }
                  obj5 = { translateY: null };
                  obj5.translateY = num7;
                  items[1] = obj5;
                  size.transform = items;
                  tmp23 = closure_5;
                  num9 = 0;
                  if (closure_5.get() > 0) {
                    num9 = 1;
                  }
                  size.borderBottomWidth = num9;
                  return size;
                }
                tmp20 = closure_9;
                width = closure_9.get().width;
              }
              tmp19 = closure_9;
              height = closure_9.get().height;
            }
            tmp14 = closure_5;
            value = closure_5.get();
          }
          tmp10 = closure_5;
          value1 = closure_5.get();
        }
        tmp7 = closure_4;
      }
      tmp4 = closure_4;
      return;
    }
  }
  const items19 = [tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82];
  QuestDockTsx8.__closure = items19;
  QuestDockTsx8.__workletHash = 11829674658399;
  QuestDockTsx8.__initData = tmp71;
  const obj9 = { style: tmp9.wrapper, pointerEvents: "auto", children: null };
  const animatedStyle4 = require("module_1652").useAnimatedStyle(QuestDockTsx8);
  const obj10 = { nativeID: id, style: tmp9.accessibilityWrapper, accessibilityViewIsModal: null, onAccessibilityEscape: null, pointerEvents: "box-none", children: null };
  let tmp88 = isScreenReaderEnabled;
  if (tmp88) {
    tmp88 = tmp23;
  }
  obj10.accessibilityViewIsModal = tmp88;
  obj10.onAccessibilityEscape = callback;
  const tmp5Result18 = require("module_1652");
  const obj11 = { style: animatedStyle1, children: null };
  const obj12 = { style: null, layout: require("QuestDockUtils").dimensionsLayoutTransition, children: null };
  const items20 = [tmp9.questDockWrapper, { bottom: youBarTotalHeight - 1 }, animatedStyle];
  obj12.style = items20;
  const obj14 = { style: tmp9.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null };
  let str3 = "auto";
  if (tmp23) {
    str3 = "none";
  }
  obj14.pointerEvents = str3;
  const intl = tmp5(1113).intl;
  obj14.accessibilityLabel = intl.string(require("util").t.rjVPdM);
  let str4 = "";
  if (!tmp23) {
    const intl2 = tmp5(1113).intl;
    str4 = intl2.string(tmp5(1113).t.n0MlOB);
  }
  const obj15 = { children: null };
  const obj16 = { children: null };
  obj14.accessibilityHint = str4;
  const items21 = [closure_23(c9, obj14), , , ];
  const obj17 = { style: null, layout: require("QuestDockUtils").dimensionsLayoutTransition, pointerEvents: "none" };
  const items22 = [tmp9.questDockHeaderBorder, animatedStyle4];
  obj17.style = items22;
  items21[1] = closure_23(_modDef1652.View, obj17);
  const obj18 = { style: null, needsOffscreenAlphaCompositing: isAndroidResult, children: null };
  const items23 = [tmp9.questDockContentWrapper, animatedStyle3];
  obj18.style = items23;
  const obj19 = { style: tmp9.questDockContentWrapper, children: null };
  const items24 = [closure_23(QuestDockContentCollapsedDefault, { hideOnExpand: "flush" === layoutVariant, children: collapsedContent }), closure_23(QuestDockContentExpandedDefault, { expandedHeightMode: str, expandedHeight, children: expandedContent })];
  obj19.children = items24;
  const items25 = [closure_24(c8, obj19), backgroundContent];
  obj18.children = items25;
  items21[2] = closure_24(_modDef1652.View, obj18);
  items21[3] = closure_23(QuestDockDragHandleDefault, { isExpanded: tmp23, variant: str2 });
  obj12.children = items21;
  obj11.children = closure_24(_modDef1652.View, obj12);
  obj16.children = closure_23(_modDef1652.View, obj11);
  obj10.children = closure_23(QuestDockGestureDetectorDefault, obj16);
  obj9.children = closure_23(require("AccessibilityView").AccessibilityViewAnimated, obj10);
  const items26 = [closure_23(c8, obj9), ];
  const obj20 = { style: animatedStyle2, animatedProps, children: closure_23(require("Backdrop").Backdrop, { onDismiss: callback, accessibleDismissStyle: { height: tmp64 } }) };
  items26[1] = closure_23(_modDef1652.View, obj20);
  obj15.children = items26;
  return closure_24(closure_25, obj15);
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
function QuestDockWithEntranceAnimation(adCreativeType) {
  ({ renderModeChangeTracker: c0, adCreativeId } = adCreativeType);
  importDefault = adCreativeId;
  adCreativeType = adCreativeType.adCreativeType;
  ({ backgroundImageUrl, iconUrl, layoutVariant: c3, theme: asyncGeneratorStep, backgroundColor: _slicedToArray, expandedHeight: _objectWithoutProperties, collapsedContent: noop, expandedContent: closure_8, backgroundContent: closure_9, withAndroidOffscreenAlphaCompositingWorkaround: closure_10 } = adCreativeType);
  ({ renderImpressionTracker, trackAssetLoadingFailure } = adCreativeType);
  const context = noop.useContext(QuestDockVisibilityContextDefault);
  ({ isRendered, isVisibleToUser } = context);
  items = [mode];
  mode = require("initialize").useStateFromStores(items, () => mode.prevRestingQuestDockMode);
  closure_12 = _slicedToArray(noop.useState(() => performance.now()), 1)[0];
  noop.useRef(false);
  let obj2 = require("initialize");
  const tmp5 = closure_38();
  [tmp7, closure_14] = noop.useState({ width: 0, height: 0 });
  const tmp6 = _slicedToArray(noop.useState({ width: 0, height: 0 }), 2);
  const isEligibleForQuests = require("QuestsEligibility").getIsEligibleForQuests();
  let obj3 = require("QuestsEligibility");
  const items1 = [closure_41, require("spring/spring").withSpring, isRendered, obj7, tmp7];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  class QuestDockTsx9 {
    constructor() {
      tmp = closure_0;
      num = 0;
      tmp2 = closure_1;
      if (closure_1) {
        num = 1;
      }
      obj = { opacity: tmp(num, closure_2, "animate-always"), transform: null };
      tmp3 = closure_2;
      num2 = 0;
      if (!tmp2) {
        tmp4 = closure_3;
        num2 = closure_3.height;
      }
      obj1 = { translateY: tmp(num2, tmp3) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items2 = [tmp10, tmp11, tmp12, tmp13];
  QuestDockTsx9.__closure = items2;
  QuestDockTsx9.__workletHash = 10691310740750;
  QuestDockTsx9.__initData = tmp9;
  closure_129_6 = undefined;
  closure_129_0 = adCreativeId;
  closure_129_1 = adCreativeType;
  closure_129_2 = backgroundImageUrl;
  closure_129_3 = iconUrl;
  closure_129_4 = trackAssetLoadingFailure;
  const animatedStyle = require("module_1652").useAnimatedStyle(QuestDockTsx9);
  [first, closure_129_6] = noop.useState(constants3.PENDING);
  closure_129_5 = first;
  closure_129_7 = noop.useEffectEvent((arg0) => {
    if (theme != null) {
      tmp(arg0);
    }
  });
  const items3 = [backgroundImageUrl, iconUrl];
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
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              closure_129_0 = closure_0;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj4 = { value: closure_2_10.prefetch(closure_0), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            collapsedContent(closure_129_0);
            c6 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp16) {
          closure_3 = tmp16;
          if (tmp4 === c4) {
            c6 = tmp2;
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
              items = [];
              if (null != c2) {
                items.push(prefetchWithErrorReporting(tmp24));
              }
              if (null != c3) {
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
  }, items3);
  const items4 = [first, adCreativeId, adCreativeType];
  const effect1 = noop.useEffect(() => {
    if (backgroundColor === constants.FAILED) {
      const obj2 = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: null };
      const _HermesInternal = HermesInternal;
      items = ["ad_creative_id:" + c0, , , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[c1];
      const obj = MonitoringAgentDefault;
      const _HermesInternal3 = HermesInternal;
      items[2] = "quest_content:" + AnalyticsTypes.getQuestContentName(QuestTypes.QuestContent.QUEST_BAR_MOBILE);
      items[3] = "reason:asset_loading_error";
      obj2.tags = items;
      obj.increment(obj2);
    }
  }, items4);
  let tmp20 = !isEligibleForQuests;
  if (isEligibleForQuests) {
    tmp20 = first !== constants3.SUCCEEDED;
  }
  closure_15 = tmp20;
  const items5 = [tmp20];
  const effect2 = noop.useEffect(() => {
    let result = QuestActionCreators.updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: !closure_15 });
    return () => {
      const result = _undefined(closure_1_2[45]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
    };
  }, items5);
  let tmp22 = null;
  if (!tmp20) {
    const obj5 = { pointerEvents: "box-none", style: null, onLayout: null, children: null };
    const items6 = [tmp5.wrapperAnimated, animatedStyle];
    obj5.style = items6;
    obj5.onLayout = function onLayout(height) {
      const size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
      closure_1_14(size);
      if (!ref.current) {
        tmp2.current = true;
        const _Math = Math;
        if (Math.random() < 0.1) {
          const _Math2 = Math;
          const _performance = performance;
          const rounded = Math.round(performance.now() - closure_12);
          const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT, tags: null };
          const _HermesInternal = HermesInternal;
          items = ["ad_creative_id:" + c1, ];
          const _HermesInternal2 = HermesInternal;
          items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[c2];
          obj.tags = items;
          MonitoringAgentDefault.distribution(obj, rounded);
        }
      }
    };
    const obj6 = {
      children() {
          const obj = { children: null };
          items = [_undefined({ mode }), dependencyMap2(QuestBarRenderedTriggerPointWrapper, {}), ];
          const obj3 = { expandedHeight, children: null };
          const obj4 = { theme, children: dependencyMap2(QuestDockWithGestureAnimation, { backgroundColor, layoutVariant, expandedHeight, collapsedContent, expandedContent, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround: closure_1_10 }) };
          obj3.children = dependencyMap2(native.ThemeContextProvider, obj4);
          items[2] = dependencyMap2(QuestDockGestureContext.QuestDockGestureContextProvider, obj3);
          obj.children = items;
          return dependencyMap3(closure_2_25, obj);
        },
      overrideVisibility: isVisibleToUser
    };
    obj5.children = renderImpressionTracker(obj6);
    tmp22 = closure_23(_modDef1652.View, obj5);
  }
  return tmp22;
}
class QuestDockQuestContent {
  constructor(arg0) {
    quest = global.quest;
    closure_1 = undefined;
    tmp = quest;
    tmp2 = closure_2;
    obj = quest(closure_2[35]);
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
      adCreativeId: quest.id,
      adCreativeType: tmp(tmp2[40]).AdCreativeType.QUEST,
      backgroundImageUrl: obj3.useQuestDockHeroAsset(quest).staticUrl,
      iconUrl: questGameLogotypeAssetUrl,
      trackAssetLoadingFailure(asset_id) {
            AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, { quest_id: quest.id, source: constants2.QUESTS_BAR_MOBILE, asset_id });
          },
      layoutVariant: null,
      theme: null,
      backgroundColor: null,
      expandedHeight: null,
      collapsedContent: null,
      expandedContent: null,
      backgroundContent: null,
      renderImpressionTracker: null,
      renderModeChangeTracker: null
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
      return dependencyMap2(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { questOrQuests: quest, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, onImpression, children });
    };
    obj7.renderModeChangeTracker = function renderModeChangeTracker(mode) {
      return dependencyMap2(QuestDockModeChangeTracker, { questId: quest.id, mode: mode.mode });
    };
    obj1.children = tmp7(tmp8, obj7);
    return tmp7(tmp(tmp2[14]).QuestDockQuestProvider, obj1);
  }
}
function QuestDockBountyContent(bounty) {
  bounty = bounty.bounty;
  const bountyPreviewImageUrl = bounty(17331).useBountyPreviewImageUrl(bounty);
  let obj = bounty(17331);
  const questDockAppThemedBackgroundColor = bounty(17331).useQuestDockAppThemedBackgroundColor();
  const obj2 = bounty(17331);
  const questDockBountySmokeCollapsedPlaceholderUrl = bounty(17438).getQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = { bounty, children: null };
  const obj3 = bounty(17438);
  obj4.children = closure_23(QuestDockWithEntranceAnimation, {
    adCreativeId: bounty.id,
    adCreativeType: bounty(6868).AdCreativeType.BOUNTY,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: bounty.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, { source: constants2.QUESTS_BAR_MOBILE, ad_creative_id: bounty.id, ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY, asset_id });
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_23(QuestDockBountyHeaderDefault, {}),
    expandedContent: closure_23(QuestDockBountyBodyDefault, {}),
    backgroundContent: closure_23(QuestDockBountyBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: true,
    renderImpressionTracker(arg0) {
      ({ children, overrideVisibility } = arg0);
      return dependencyMap2(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children });
    },
    renderModeChangeTracker(mode) {
      return dependencyMap2(QuestDockModeChangeTracker, { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode });
    }
  });
  return closure_23(bounty(17362).QuestDockBountyProvider, obj4);
}
function QuestDockPlayableContent(playable) {
  playable = playable.playable;
  const bountyPreviewImageUrl = playable(17331).useBountyPreviewImageUrl(playable);
  let obj = playable(17331);
  const questDockAppThemedBackgroundColor = playable(17331).useQuestDockAppThemedBackgroundColor();
  const obj2 = playable(17331);
  const questDockBountySmokeCollapsedPlaceholderUrl = playable(17438).getQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = { playable, children: null };
  const obj3 = playable(17438);
  obj4.children = closure_23(QuestDockWithEntranceAnimation, {
    adCreativeId: playable.id,
    adCreativeType: playable(6868).AdCreativeType.PLAYABLE,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: playable.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, { source: constants2.QUESTS_BAR_MOBILE, ad_creative_id: playable.id, ad_creative_type: AdCreativeType.AdCreativeType.PLAYABLE, asset_id });
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_23(QuestDockPlayableHeaderDefault, {}),
    expandedContent: closure_23(QuestDockPlayableBodyDefault, {}),
    backgroundContent: closure_23(QuestDockPlayableBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: true,
    renderImpressionTracker(arg0) {
      ({ children, overrideVisibility } = arg0);
      return dependencyMap2(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { adContentId: playable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children });
    },
    renderModeChangeTracker(mode) {
      return dependencyMap2(QuestDockModeChangeTracker, { adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, adContentId: playable.id, mode: mode.mode });
    }
  });
  return closure_23(playable(17362).QuestDockPlayableProvider, obj4);
}
const styles = ["mode"];
get_ActivityIndicator = fn(17);
({ View: closure_8, StyleSheet, Pressable: closure_9, Image: closure_10 } = get_ActivityIndicator);
const QuestConstants = fn(6861);
({ QuestDockMode: closure_12, QuestsExperimentLocations: map1 } = QuestConstants);
const QuestDockConstants = fn(17334);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_14, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_15, QUEST_DOCK_CONTENT_BORDER_RADII: closure_16, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_17, QUEST_DOCK_COLLAPSED_HEIGHT: closure_18, QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: closure_19, QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT: closure_20 } = QuestDockConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const ThemeTypes = fn(1083).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
let createStyles = fn(5170);
let obj = { wrapper: { position: "absolute", left: "50%", bottom: 0, zIndex: 1 }, accessibilityWrapper: null, questDockWrapper: null, questDockContentWrapper: null, questDockHeaderBorder: null, nestedPressable: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.zIndex = 1;
obj.accessibilityWrapper = obj3;
const rect = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, zIndex: 1 };
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
let closure_27 = { code: "(function QuestDockTsx1(){let[restingQuestDockMode,QuestDockMode]=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;})" };
let closure_28 = { code: "(function QuestDockTsx2(){let[backgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel]=this.__closure;return{backgroundColor:backgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};})" };
let closure_29 = { code: "(function QuestDockTsx3(){let[withSpring,interpolate,isPressed,springStandard]=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};})" };
let closure_30 = { code: "(function QuestDockTsx4(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};})" };
let closure_31 = { code: "(function QuestDockTsx5(){let[activeQuestDockMode,QuestDockMode]=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};})" };
let closure_32 = { code: "(function QuestDockTsx6(){let[questDockWrapperSpecs,windowDimensions,safeAreaTop]=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;})" };
let closure_33 = { code: "(function QuestDockTsx7(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};})" };
let closure_34 = { code: "(function QuestDockTsx8(){let[hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED]=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};})" };
createStyles = fn(5170);
let closure_38 = createStyles.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj7 = {};
const merged4 = Object.assign(fn(5792).SUBTLE_SPRING);
obj7.overshootClamping = true;
obj7.damping = 54;
const constants3 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
let closure_41 = { code: "(function QuestDockTsx9(){let[withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions]=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default noop.memo(function QuestDockWithVisibilityContext() {
  mobileQuestDock = mobileQuestDock(isMobileQuestDockVisibleToUser[47]).useMobileQuestDock();
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  const isMobileQuestDockRenderedBase = mobileQuestDock(isMobileQuestDockVisibleToUser[47]).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  isMobileQuestDockVisibleToUser = mobileQuestDock(isMobileQuestDockVisibleToUser[47]).useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const memo = noop.useMemo(() => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }), items);
  let obj3 = mobileQuestDock(isMobileQuestDockVisibleToUser[47]);
  const tmp7Result = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[62])(mobileQuestDock(isMobileQuestDockVisibleToUser[36]).AdPlacement.MOBILE_HOME_DOCK_AREA, "QuestDockWithVisibilityContext");
  const tmp9 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[63])();
  const tmp10 = !tmp9;
  const tmp7 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[62]);
  const items1 = [mobileQuestDock];
  const isMobileQuestDockVisibleToUser1 = mobileQuestDock(isMobileQuestDockVisibleToUser[47]).useIsMobileQuestDockVisibleToUser(mobileQuestDock, tmp10);
  const memo1 = noop.useMemo(() => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj2 = { bounty: mobileQuestDock.bounty };
      return dependencyMap2(QuestDockBountyContent, obj2);
    } else if (AdCreativeType.AdCreativeType.PLAYABLE === type) {
      const obj3 = { playable: mobileQuestDock.playable };
      return dependencyMap2(QuestDockPlayableContent, obj3);
    } else if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj = { quest: mobileQuestDock.quest };
      return dependencyMap2(QuestDockQuestContent, obj);
    } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  if (mobileQuestDock.type === mobileQuestDock(isMobileQuestDockVisibleToUser[40]).AdCreativeType.NO_FILL) {
    let tmp16 = null;
    if (null != tmp7Result) {
      tmp16 = null;
      if (!tmp9) {
        const obj5 = { noFillDecision: tmp7Result, visible: isMobileQuestDockVisibleToUser1 };
        tmp16 = closure_23(tmp6(tmp[64]), obj5, tmp7Result.decisionId);
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