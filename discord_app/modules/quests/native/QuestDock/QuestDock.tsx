// === Module 16720: QuestDock ===

// Module 16720 (QuestDock)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import _modDef1653 from "module_1653" /* 1653 */;
import native from "native" /* 5073 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5780 */;
import MetricEvents from "MetricEvents" /* 5785 */;
import QuestTypes from "QuestTypes" /* 6843 */;
import AdCreativeType from "AdCreativeType" /* 6847 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8350 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 8577 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9850 */;
import QuestActionCreators from "QuestActionCreators" /* 9852 */;
import QuestRewardUtils from "QuestRewardUtils" /* 9866 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 13790 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 16630 */;
import QuestDockVisibilityContextDefault from "QuestDockVisibilityContext" /* 16719 */;
import useQuestDockAnimatedBorderRadiusDefault from "useQuestDockAnimatedBorderRadius" /* 16721 */;
import QuestDockGestureDetectorDefault from "QuestDockGestureDetector" /* 16722 */;
import QuestDockContentCollapsedDefault from "QuestDockContentCollapsed" /* 16723 */;
import QuestDockContentExpandedDefault from "QuestDockContentExpanded" /* 16724 */;
import QuestDockDragHandleDefault from "QuestDockDragHandle" /* 16725 */;
import QuestBarExpandRateV1Experiment from "QuestBarExpandRateV1Experiment" /* 16727 */;
import QuestDockBountyHeaderDefault from "QuestDockBountyHeader" /* 16753 */;
import QuestDockBountyBodyDefault from "QuestDockBountyBody" /* 16754 */;
import QuestDockBountyBackgroundDefault from "QuestDockBountyBackground" /* 16756 */;
import QuestDockPlayableHeaderDefault from "QuestDockPlayableHeader" /* 16757 */;
import QuestDockPlayableBodyDefault from "QuestDockPlayableBody" /* 16758 */;
import QuestDockPlayableBackgroundDefault from "QuestDockPlayableBackground" /* 16760 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import QuestDockStore from "QuestDockStore" /* 16627 */;

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
  const tmp9 = closure_27();
  const context = noop.useContext(require("QuestDockGestureContext").QuestDockGestureContext);
  ({ questDockWrapperSpecs, activeQuestDockMode, windowDimensions } = context);
  const context1 = noop.useContext(require("QuestDockExternalCoordinationContext").QuestDockExternalCoordinationContext);
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  items = [setRestingQuestDockMode];
  const id = noop.useId();
  const callback = noop.useCallback(() => {
    _undefined(constants.COLLAPSED);
  }, items);
  const isVisibleToUser = noop.useContext(QuestDockVisibilityContextDefault).isVisibleToUser;
  const MobileQuestDockClosedStateExperiment = require("MobileQuestDockClosedStateExperiment").MobileQuestDockClosedStateExperiment;
  let obj3 = require("QuestDockHooks");
  const obj5 = { location: constants2.QUESTS_BAR_MOBILE };
  const questDockModeAnimatedReaction = require("QuestDockHooks").useQuestDockModeAnimatedReaction();
  const obj6 = require("QuestDockHooks");
  const questDockDismissalReset = require("QuestDockHooks").useQuestDockDismissalReset({ autoCloseEnabled: MobileQuestDockClosedStateExperiment.useConfig(obj5, { autoTrackExposure: isVisibleToUser }).autoCloseEnabled });
  obj7 = require("QuestDockHooks");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const obj8 = require("useIsScreenReaderEnabled");
  const items1 = [closure_28, context1.restingQuestDockMode, closure_13];
  _require = undefined;
  importDefault = undefined;
  [tmp19, tmp20, tmp21] = items1;
  class QuestDockTsx1 {
    constructor() {
      return closure_0.get() === closure_1.EXPANDED;
    }
  }
  const items2 = [tmp20, tmp21];
  QuestDockTsx1.__closure = items2;
  QuestDockTsx1.__workletHash = 9923018697916;
  QuestDockTsx1.__initData = tmp19;
  const derivedValue = require("module_1653").useDerivedValue(QuestDockTsx1);
  const tmp23 = useStateFromSharedValueDefault(derivedValue);
  const obj9 = require("module_1653");
  const items3 = [closure_29, activeQuestDockMode, closure_13];
  _require = undefined;
  importDefault = undefined;
  [tmp24, tmp25, tmp26] = items3;
  class QuestDockTsx2 {
    constructor() {
      return closure_0.get() === closure_1.EXPANDED;
    }
  }
  const items4 = [tmp25, tmp26];
  QuestDockTsx2.__closure = items4;
  QuestDockTsx2.__workletHash = 1853966243711;
  QuestDockTsx2.__initData = tmp24;
  const derivedValue1 = require("module_1653").useDerivedValue(QuestDockTsx2);
  const tmp28 = useStateFromSharedValueDefault(derivedValue1) && isVisibleToUser;
  const items5 = [tmp28];
  const effect = obj4.useEffect(() => {
    if (c2) {
      const result = QuestActionCreators.updateQuestDockExpandedOnScreen({ isExpandedOnScreen: true });
      return () => backgroundColor(_undefined2[24]).updateQuestDockExpandedOnScreen({ isExpandedOnScreen: false });
    }
  }, items5);
  const tmp5Result = require("module_1653");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  const tmp5Result11 = require("useYouBarTotalHeight");
  const token = require("useToken").useToken(tmp14(575).modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp32 = useQuestDockAnimatedBorderRadiusDefault(token);
  const tmp5Result12 = require("useToken");
  const items6 = [closure_30, backgroundColor, require("spring/spring").withSpring, tmp32, closure_16, questDockWrapperSpecs, closure_15, require("QuestDockUtils").roundToNearestPixel];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42] = items6;
  class QuestDockTsx3 {
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
  const items7 = [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42];
  QuestDockTsx3.__closure = items7;
  QuestDockTsx3.__workletHash = 6773388487365;
  QuestDockTsx3.__initData = tmp35;
  const animatedStyle = require("module_1653").useAnimatedStyle(QuestDockTsx3);
  const tmp5Result13 = require("module_1653");
  const sharedValue = require("module_1653").useSharedValue(0);
  const tmp5Result14 = require("module_1653");
  const items8 = [closure_31, require("spring/spring").withSpring, require("module_1653").interpolate, sharedValue, require("springPresets").springStandard];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp45, tmp46, tmp47, tmp48, tmp49] = items8;
  class QuestDockTsx4 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0(closure_1(closure_2.get(), [1, 0], [1, 1]), closure_3) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items9 = [tmp46, tmp47, tmp48, tmp49];
  QuestDockTsx4.__closure = items9;
  QuestDockTsx4.__workletHash = 8862471858418;
  QuestDockTsx4.__initData = tmp45;
  const items10 = [setRestingQuestDockMode, questDockExpandHandler];
  const animatedStyle1 = require("module_1653").useAnimatedStyle(QuestDockTsx4);
  const items11 = [sharedValue];
  const callback1 = obj4.useCallback(() => {
    _undefined(constants.EXPANDED);
    backgroundColor();
  }, items10);
  const items12 = [sharedValue];
  const callback2 = obj4.useCallback(() => {
    const result = _undefined3.set(1);
  }, items11);
  const callback3 = obj4.useCallback(() => {
    const result = _undefined3.set(0);
  }, items12);
  const tmp5Result15 = require("module_1653");
  const items13 = [closure_32, require("spring/spring").withSpring, activeQuestDockMode, closure_13, closure_15, windowDimensions];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp54, tmp55, tmp56, tmp57, tmp58, tmp59] = items13;
  class QuestDockTsx5 {
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
  const items14 = [tmp55, tmp56, tmp57, tmp58, tmp59];
  QuestDockTsx5.__closure = items14;
  QuestDockTsx5.__workletHash = 2620464071737;
  QuestDockTsx5.__initData = tmp54;
  const animatedStyle2 = require("module_1653").useAnimatedStyle(QuestDockTsx5);
  const tmp5Result16 = require("module_1653");
  const items15 = [closure_33, activeQuestDockMode, closure_13];
  _require = undefined;
  importDefault = undefined;
  [tmp61, tmp62, tmp63] = items15;
  class QuestDockTsx6 {
    constructor() {
      pointerEvents = "none";
      if (closure_0.get() === closure_1.EXPANDED) {
        pointerEvents = "auto";
      }
      return { pointerEvents };
    }
  }
  const items16 = [tmp62, tmp63];
  QuestDockTsx6.__closure = items16;
  QuestDockTsx6.__workletHash = 5976546068419;
  QuestDockTsx6.__initData = tmp61;
  const animatedProps = require("module_1653").useAnimatedProps(QuestDockTsx6);
  const tmp5Result17 = require("module_1653");
  const items17 = [closure_34, questDockWrapperSpecs, windowDimensions, useSafeAreaInsetsDefault().top];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp65, tmp66, tmp67, tmp68] = items17;
  class QuestDockTsx7 {
    constructor() {
      value = closure_0.get();
      return closure_1.get().height - closure_2 - value.height;
    }
  }
  const items18 = [tmp66, tmp67, tmp68];
  QuestDockTsx7.__closure = items18;
  QuestDockTsx7.__workletHash = 15515676447867;
  QuestDockTsx7.__initData = tmp65;
  const derivedValue2 = require("module_1653").useDerivedValue(QuestDockTsx7);
  const tmp5Result18 = require("module_1653");
  const tmp70 = useStateFromSharedValueDefault(derivedValue2);
  const items19 = [closure_35, require("spring/spring").withSpring, activeQuestDockMode, closure_13, closure_15];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp71, tmp72, tmp73, tmp74, tmp75] = items19;
  class QuestDockTsx8 {
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
  const items20 = [tmp72, tmp73, tmp74, tmp75];
  QuestDockTsx8.__closure = items20;
  QuestDockTsx8.__workletHash = 5546765379872;
  QuestDockTsx8.__initData = tmp71;
  const animatedStyle3 = require("module_1653").useAnimatedStyle(QuestDockTsx8);
  const tmp5Result19 = require("module_1653");
  const items21 = [closure_36, "insetHeader" === layoutVariant, activeQuestDockMode, closure_13, closure_17, token, tmp32, require("spring/spring").withSpring, closure_16, closure_19, questDockWrapperSpecs, closure_18];
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
  [tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88] = items21;
  class QuestDockTsx9 {
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
  const items22 = [tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88];
  QuestDockTsx9.__closure = items22;
  QuestDockTsx9.__workletHash = 12919847392350;
  QuestDockTsx9.__initData = tmp77;
  const obj10 = { style: tmp9.wrapper, pointerEvents: "auto", children: null };
  const animatedStyle4 = require("module_1653").useAnimatedStyle(QuestDockTsx9);
  const obj11 = { nativeID: id, style: tmp9.accessibilityWrapper, accessibilityViewIsModal: null, onAccessibilityEscape: null, pointerEvents: "box-none", children: null };
  let tmp94 = isScreenReaderEnabled;
  if (tmp94) {
    tmp94 = tmp23;
  }
  obj11.accessibilityViewIsModal = tmp94;
  obj11.onAccessibilityEscape = callback;
  const tmp5Result20 = require("module_1653");
  const obj12 = { style: animatedStyle1, children: null };
  const obj13 = { style: null, layout: require("QuestDockUtils").dimensionsLayoutTransition, children: null };
  const items23 = [tmp9.questDockWrapper, { bottom: youBarTotalHeight - 1 }, animatedStyle];
  obj13.style = items23;
  const obj15 = { style: tmp9.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null };
  let str3 = "auto";
  if (tmp23) {
    str3 = "none";
  }
  obj15.pointerEvents = str3;
  const intl = tmp5(1112).intl;
  obj15.accessibilityLabel = intl.string(require("util").t.rjVPdM);
  let str4 = "";
  if (!tmp23) {
    const intl2 = tmp5(1112).intl;
    str4 = intl2.string(tmp5(1112).t.n0MlOB);
  }
  const obj16 = { children: null };
  const obj17 = { children: null };
  obj15.accessibilityHint = str4;
  const items24 = [closure_24(c9, obj15), , , ];
  const obj18 = { style: null, layout: require("QuestDockUtils").dimensionsLayoutTransition, pointerEvents: "none" };
  const items25 = [tmp9.questDockHeaderBorder, animatedStyle4];
  obj18.style = items25;
  items24[1] = closure_24(_modDef1653.View, obj18);
  const obj19 = { style: null, needsOffscreenAlphaCompositing: isAndroidResult, children: null };
  const items26 = [tmp9.questDockContentWrapper, animatedStyle3];
  obj19.style = items26;
  const obj20 = { style: tmp9.questDockContentWrapper, pointerEvents: "box-none", children: null };
  const items27 = [closure_24(QuestDockContentCollapsedDefault, { hideOnExpand: "flush" === layoutVariant, children: collapsedContent }), closure_24(QuestDockContentExpandedDefault, { expandedHeightMode: str, expandedHeight, children: expandedContent })];
  obj20.children = items27;
  const items28 = [closure_25(c8, obj20), backgroundContent];
  obj19.children = items28;
  items24[2] = closure_25(_modDef1653.View, obj19);
  items24[3] = closure_24(QuestDockDragHandleDefault, { isExpanded: tmp23, variant: str2 });
  obj13.children = items24;
  obj12.children = closure_25(_modDef1653.View, obj13);
  obj17.children = closure_24(_modDef1653.View, obj12);
  obj11.children = closure_24(QuestDockGestureDetectorDefault, obj17);
  obj10.children = closure_24(require("AccessibilityView").AccessibilityViewAnimated, obj11);
  const items29 = [closure_24(c8, obj10), ];
  const obj21 = { style: animatedStyle2, animatedProps, children: closure_24(require("Backdrop").Backdrop, { onDismiss: callback, accessibleDismissStyle: { height: tmp70 } }) };
  items29[1] = closure_24(_modDef1653.View, obj21);
  obj16.children = items29;
  return closure_25(closure_26, obj16);
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
  items = [closure_12];
  const mode = require("initialize").useStateFromStores(items, () => closure_12.prevRestingQuestDockMode);
  closure_12 = _slicedToArray(noop.useState(() => performance.now()), 1)[0];
  noop.useRef(false);
  let obj2 = require("initialize");
  const tmp5 = closure_40();
  [tmp7, closure_14] = noop.useState({ width: 0, height: 0 });
  const tmp6 = _slicedToArray(noop.useState({ width: 0, height: 0 }), 2);
  const isEligibleForQuests = require("QuestsEligibility").getIsEligibleForQuests();
  let obj3 = require("QuestsEligibility");
  const items1 = [closure_43, require("spring/spring").withSpring, isRendered, obj7, tmp7];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  [tmp9, tmp10, tmp11, tmp12, tmp13] = items1;
  class QuestDockTsx10 {
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
  QuestDockTsx10.__closure = items2;
  QuestDockTsx10.__workletHash = 4347997312022;
  QuestDockTsx10.__initData = tmp9;
  closure_129_6 = undefined;
  closure_129_0 = adCreativeId;
  closure_129_1 = adCreativeType;
  closure_129_2 = backgroundImageUrl;
  closure_129_3 = iconUrl;
  closure_129_4 = trackAssetLoadingFailure;
  const animatedStyle = require("module_1653").useAnimatedStyle(QuestDockTsx10);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
      const result = _undefined(closure_1_2[24]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
    };
  }, items5);
  let tmp22 = null;
  if (!tmp20) {
    const obj5 = { pointerEvents: "box-none", style: null, onLayout: null, children: null };
    const items6 = [tmp5.wrapperAnimated, animatedStyle];
    obj5.style = items6;
    obj5.onLayout = function onLayout(height) {
      const size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
      constants2(size);
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
          items = [_undefined({ mode }), dependencyMap(QuestBarRenderedTriggerPointWrapper, {}), ];
          const obj3 = { expandedHeight, children: null };
          const obj4 = { theme, children: dependencyMap(QuestDockWithGestureAnimation, { backgroundColor, layoutVariant, expandedHeight, collapsedContent, expandedContent, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround: closure_1_10 }) };
          obj3.children = dependencyMap(native.ThemeContextProvider, obj4);
          items[2] = dependencyMap(QuestDockGestureContext.QuestDockGestureContextProvider, obj3);
          obj.children = items;
          return closure_2_25(closure_2_26, obj);
        },
      overrideVisibility: isVisibleToUser
    };
    obj5.children = renderImpressionTracker(obj6);
    tmp22 = closure_24(_modDef1653.View, obj5);
  }
  return tmp22;
}
class QuestDockQuestContent {
  constructor(arg0) {
    quest = global.quest;
    obj = closure_0(closure_2[46]);
    items = [];
    items[0] = closure_11;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    obj2 = closure_0(closure_2[49]);
    questOrbRewardQuantityForUser = obj2.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores);
    if (null != questOrbRewardQuantityForUser) {
      tmp6 = jsx;
      tmp7 = ExpandRateV1ExperimentEligibleQuestDockQuestContent;
      obj1 = { quest: null, orbCount: null };
      obj1.quest = quest;
      obj1.orbCount = questOrbRewardQuantityForUser;
      tmp5 = jsx(ExpandRateV1ExperimentEligibleQuestDockQuestContent, obj1, quest.id);
    } else {
      tmp3 = jsx;
      tmp4 = QuestDockQuestContentWithAssets;
      obj5 = { quest: null };
      obj5.quest = quest;
      tmp5 = jsx(QuestDockQuestContentWithAssets, obj5);
    }
    return tmp5;
  }
}
function ExpandRateV1ExperimentEligibleQuestDockQuestContent(arg0) {
  ({ quest, orbCount } = arg0);
  const questBarExpandRateV1Config = QuestBarExpandRateV1Experiment.useQuestBarExpandRateV1Config(constants2.QUESTS_BAR_MOBILE);
  return dependencyMap(QuestDockQuestContentWithAssets, { quest, squareAsset: questBarExpandRateV1Config.squareAsset, rewardMessage: questBarExpandRateV1Config.rewardMessage, orbCount });
}
function QuestDockQuestContentWithAssets(quest) {
  quest = quest.quest;
  let str = quest.squareAsset;
  if (str === undefined) {
    str = "default";
  }
  let str2 = quest.rewardMessage;
  if (str2 === undefined) {
    str2 = "generic";
  }
  const onImpression = quest(9850).useQuestBarImpressionSurvey(quest);
  const obj = quest(9850);
  const questDockAppThemedBackgroundColor = quest(16626).useQuestDockAppThemedBackgroundColor();
  const obj2 = quest(16626);
  const obj3 = quest(16623);
  const userStatus = quest.userStatus;
  let enrolledAt;
  const questGameLogotypeAssetUrl = quest(16623).useQuestGameLogotypeAssetUrl(quest);
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  let DARK;
  if (null == enrolledAt) {
    DARK = ThemeTypes.DARK;
  }
  let url = questGameLogotypeAssetUrl;
  if ("advertiser" === str) {
    url = tmp(9861).getQuestAsset(quest, tmp(9861).QuestAssetType.GAME_TILE, ThemeTypes.DARK).url;
    const tmpResult = tmp(9861);
  }
  const obj5 = { quest, children: null };
  const obj6 = {
    adCreativeId: quest.id,
    adCreativeType: quest(6847).AdCreativeType.QUEST,
    backgroundImageUrl: obj3.useQuestDockHeroAsset(quest).staticUrl,
    iconUrl: url,
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
  let str3 = "insetHeader";
  if (null != enrolledAt) {
    str3 = "flush";
  }
  obj6.layoutVariant = str3;
  obj6.theme = DARK;
  obj6.backgroundColor = questDockAppThemedBackgroundColor;
  obj6.expandedHeight = expandedHeight;
  if (null != enrolledAt) {
    let tmp10Result = closure_24(tmp12(16728), {});
    let tmp14 = tmp12;
  } else {
    obj7 = { squareAsset: str, rewardMessage: str2, orbCount: quest.orbCount };
    tmp10Result = closure_24(tmp12(16729), obj7);
    tmp14 = tmp12;
  }
  obj6.collapsedContent = tmp10Result;
  obj6.expandedContent = closure_24(tmp14(null != enrolledAt ? 16739 : 16740), {});
  let tmp10Result2 = null;
  if (null == enrolledAt) {
    tmp10Result2 = closure_24(tmp14(16743), {});
  }
  obj6.backgroundContent = tmp10Result2;
  obj6.renderImpressionTracker = function renderImpressionTracker(arg0) {
    ({ children, overrideVisibility } = arg0);
    return dependencyMap(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { questOrQuests: quest, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, onImpression, children });
  };
  obj6.renderModeChangeTracker = function renderModeChangeTracker(mode) {
    return dependencyMap(QuestDockModeChangeTracker, { questId: quest.id, mode: mode.mode });
  };
  obj5.children = closure_24(QuestDockWithEntranceAnimation, obj6);
  return closure_24(quest(16663).QuestDockQuestProvider, obj5);
}
function QuestDockBountyContent(bounty) {
  bounty = bounty.bounty;
  const bountyPreviewImageUrl = bounty(16626).useBountyPreviewImageUrl(bounty);
  let obj = bounty(16626);
  const questDockAppThemedBackgroundColor = bounty(16626).useQuestDockAppThemedBackgroundColor();
  const obj2 = bounty(16626);
  const questDockBountySmokeCollapsedPlaceholderUrl = bounty(16748).getQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = { bounty, children: null };
  const obj3 = bounty(16748);
  obj4.children = closure_24(QuestDockWithEntranceAnimation, {
    adCreativeId: bounty.id,
    adCreativeType: bounty(6847).AdCreativeType.BOUNTY,
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
    collapsedContent: closure_24(QuestDockBountyHeaderDefault, {}),
    expandedContent: closure_24(QuestDockBountyBodyDefault, {}),
    backgroundContent: closure_24(QuestDockBountyBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: true,
    renderImpressionTracker(arg0) {
      ({ children, overrideVisibility } = arg0);
      return dependencyMap(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children });
    },
    renderModeChangeTracker(mode) {
      return dependencyMap(QuestDockModeChangeTracker, { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode });
    }
  });
  return closure_24(bounty(16663).QuestDockBountyProvider, obj4);
}
function QuestDockPlayableContent(playable) {
  playable = playable.playable;
  const bountyPreviewImageUrl = playable(16626).useBountyPreviewImageUrl(playable);
  let obj = playable(16626);
  const questDockAppThemedBackgroundColor = playable(16626).useQuestDockAppThemedBackgroundColor();
  const obj2 = playable(16626);
  const questDockBountySmokeCollapsedPlaceholderUrl = playable(16748).getQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = { playable, children: null };
  const obj3 = playable(16748);
  obj4.children = closure_24(QuestDockWithEntranceAnimation, {
    adCreativeId: playable.id,
    adCreativeType: playable(6847).AdCreativeType.PLAYABLE,
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
    collapsedContent: closure_24(QuestDockPlayableHeaderDefault, {}),
    expandedContent: closure_24(QuestDockPlayableBodyDefault, {}),
    backgroundContent: closure_24(QuestDockPlayableBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: true,
    renderImpressionTracker(arg0) {
      ({ children, overrideVisibility } = arg0);
      return dependencyMap(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { adContentId: playable.id, adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children });
    },
    renderModeChangeTracker(mode) {
      return dependencyMap(QuestDockModeChangeTracker, { adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE, adContentId: playable.id, mode: mode.mode });
    }
  });
  return closure_24(playable(16663).QuestDockPlayableProvider, obj4);
}
const styles = ["mode"];
get_ActivityIndicator = fn(17);
({ View: closure_8, StyleSheet, Pressable: closure_9, Image: closure_10 } = get_ActivityIndicator);
const QuestConstants = fn(6840);
({ QuestDockMode: map1, QuestsExperimentLocations: closure_14 } = QuestConstants);
const QuestDockConstants = fn(16629);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_16, QUEST_DOCK_CONTENT_BORDER_RADII: closure_17, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18, QUEST_DOCK_COLLAPSED_HEIGHT: closure_19, QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: closure_20, QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT: closure_21 } = QuestDockConstants);
const AnalyticEvents = fn(1071).AnalyticEvents;
const ThemeTypes = fn(1082).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_24, jsxs: closure_25, Fragment: closure_26 } = jsxProd);
let createStyles = fn(5012);
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
let closure_27 = createStyles.createStyles(obj);
let closure_28 = { code: "(function QuestDockTsx1(){let[restingQuestDockMode,QuestDockMode]=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;})" };
let closure_29 = { code: "(function QuestDockTsx2(){let[activeQuestDockMode,QuestDockMode]=this.__closure;return activeQuestDockMode.get()===QuestDockMode.EXPANDED;})" };
let closure_30 = { code: "(function QuestDockTsx3(){let[backgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel]=this.__closure;return{backgroundColor:backgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};})" };
let closure_31 = { code: "(function QuestDockTsx4(){let[withSpring,interpolate,isPressed,springStandard]=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};})" };
let closure_32 = { code: "(function QuestDockTsx5(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};})" };
let closure_33 = { code: "(function QuestDockTsx6(){let[activeQuestDockMode,QuestDockMode]=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};})" };
let closure_34 = { code: "(function QuestDockTsx7(){let[questDockWrapperSpecs,windowDimensions,safeAreaTop]=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;})" };
let closure_35 = { code: "(function QuestDockTsx8(){let[withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};})" };
let closure_36 = { code: "(function QuestDockTsx9(){let[hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED]=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};})" };
createStyles = fn(5012);
let closure_40 = createStyles.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj7 = {};
const merged4 = Object.assign(fn(5614).SUBTLE_SPRING);
obj7.overshootClamping = true;
obj7.damping = 54;
const constants3 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
let closure_43 = { code: "(function QuestDockTsx10(){let[withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions]=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default noop.memo(function QuestDockWithVisibilityContext() {
  mobileQuestDock = mobileQuestDock(isMobileQuestDockVisibleToUser[51]).useMobileQuestDock();
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[51]);
  const isMobileQuestDockRenderedBase = mobileQuestDock(isMobileQuestDockVisibleToUser[51]).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[51]);
  isMobileQuestDockVisibleToUser = mobileQuestDock(isMobileQuestDockVisibleToUser[51]).useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const memo = noop.useMemo(() => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }), items);
  let obj3 = mobileQuestDock(isMobileQuestDockVisibleToUser[51]);
  const tmp7Result = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[67])(mobileQuestDock(isMobileQuestDockVisibleToUser[40]).AdPlacement.MOBILE_HOME_DOCK_AREA, "QuestDockWithVisibilityContext");
  const tmp9 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[68])();
  const tmp10 = !tmp9;
  const tmp7 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[67]);
  const items1 = [mobileQuestDock];
  const isMobileQuestDockVisibleToUser1 = mobileQuestDock(isMobileQuestDockVisibleToUser[51]).useIsMobileQuestDockVisibleToUser(mobileQuestDock, tmp10);
  const memo1 = noop.useMemo(() => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj2 = { bounty: mobileQuestDock.bounty };
      return dependencyMap(QuestDockBountyContent, obj2);
    } else if (AdCreativeType.AdCreativeType.PLAYABLE === type) {
      const obj3 = { playable: mobileQuestDock.playable };
      return dependencyMap(QuestDockPlayableContent, obj3);
    } else if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj = { quest: mobileQuestDock.quest };
      return dependencyMap(QuestDockQuestContent, obj);
    } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  if (mobileQuestDock.type === mobileQuestDock(isMobileQuestDockVisibleToUser[44]).AdCreativeType.NO_FILL) {
    let tmp16 = null;
    if (null != tmp7Result) {
      tmp16 = null;
      if (!tmp9) {
        const obj5 = { noFillDecision: tmp7Result, visible: isMobileQuestDockVisibleToUser1 };
        tmp16 = closure_24(tmp6(tmp[69]), obj5, tmp7Result.decisionId);
      }
    }
    let tmp14 = tmp16;
  } else {
    const obj6 = { value: memo, children: memo1 };
    tmp14 = closure_24(tmp6(tmp[19]).Provider, obj6);
  }
  return tmp14;
});
export { QuestDockQuestContent };