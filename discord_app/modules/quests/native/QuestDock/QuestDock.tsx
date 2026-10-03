// discord_app/modules/quests/native/QuestDock/QuestDock.tsx
import c from "../../../../../_runtime/00576_c.js";
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
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import hooks_QuestHooks from "../../hooks/QuestHooks.tsx";
import QuestContentImpressionTracker from "../QuestContentImpressionTracker.native.tsx";
import QuestHooks from "../QuestHooks.native.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import QuestDockGestureContext from "QuestDockGestureContext.tsx";
import QuestDockBountyHeaderDefault from "QuestDockBountyHeader.tsx";
import QuestDockBountyBodyDefault from "QuestDockBountyBody.tsx";
import QuestDockBountyBackgroundDefault from "QuestDockBountyBackground.tsx";
import useNoFillDecisionDefault from "../../hooks/useNoFillDecision.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestDockStore from "QuestDockStore.tsx";

require = fn;
let closure_3 = ["mode"];
let closure_4 = ["mode"];
get_ActivityIndicator = fn(17);
({ View: closure_9, StyleSheet, Pressable: c10, Image: closure_11 } = get_ActivityIndicator);
const QuestConstants = fn(5623);
({ QuestDockMode: map1, QuestsExperimentLocations: closure_14 } = QuestConstants);
const QuestDockConstants = fn(14892);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_16, QUEST_DOCK_CONTENT_BORDER_RADII: closure_17, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18, QUEST_DOCK_COLLAPSED_HEIGHT: closure_19, QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: closure_20, QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT: closure_21 } = QuestDockConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_24, jsxs: closure_25, Fragment: closure_26 } = jsxProd);
let createStyles = fn(4890);
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
const __initData = { code: "function QuestDockTsx1(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}" };
const __initData2 = { code: "function QuestDockTsx2(){const{backgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:backgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const __initData3 = { code: "function QuestDockTsx3(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}" };
const __initData4 = { code: "function QuestDockTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}" };
const __initData5 = { code: "function QuestDockTsx5(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?\"auto\":\"none\"};}" };
const __initData6 = { code: "function QuestDockTsx6(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}" };
const __initData7 = { code: "function QuestDockTsx7(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData8 = { code: "function QuestDockTsx8(){const{hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}" };
const __initData9 = { code: "function QuestDockTsx9(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}" };
const __initData10 = { code: "function QuestDockTsx10(){const{backgroundColor,withSpring,bottomBorderRadius,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_MODE_CHANGE_PHYSICS,roundToNearestPixel}=this.__closure;return{backgroundColor:backgroundColor,borderBottomRightRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(bottomBorderRadius.get(),QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,opacity:withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const __initData11 = { code: "function QuestDockTsx11(){const{withSpring,interpolate,isPressed,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[1,1]),springStandard)}]};}" };
const __initData12 = { code: "function QuestDockTsx12(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}" };
const __initData13 = { code: "function QuestDockTsx13(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}" };
const __initData14 = { code: "function QuestDockTsx14(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height;}" };
const __initData15 = { code: "function QuestDockTsx15(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData16 = { code: "function QuestDockTsx16(){const{hasInsetHeaderTile,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,questDockBorderRadius,bottomBorderRadius,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,QUEST_DOCK_COLLAPSED_HEIGHT,questDockWrapperSpecs,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderTopLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderTopRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:questDockBorderRadius,borderBottomLeftRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),borderBottomRightRadius:hasInsetHeaderTile&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:bottomBorderRadius.get(),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:activeQuestDockMode.get()===QuestDockMode.EXPANDED?hasInsetHeaderTile?QUEST_DOCK_COLLAPSED_HEIGHT:questDockWrapperSpecs.get().height:questDockWrapperSpecs.get().height,width:activeQuestDockMode.get()===QuestDockMode.EXPANDED&&hasInsetHeaderTile?questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2:questDockWrapperSpecs.get().width,transform:[{translateX:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0},{translateY:hasInsetHeaderTile?withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED):0}],borderBottomWidth:bottomBorderRadius.get()>0?1:0};}" };
let ReactCompilerGating = fn(558);
let closure_44 = ReactCompilerGating.isReactCompilerEnabled() ? ((backgroundColor) => {
  const cResult = backgroundColor(questDockExpandHandler[14]).c(83);
  backgroundColor = backgroundColor.backgroundColor;
  ({ layoutVariant, expandedHeight, collapsedContent, expandedContent, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround } = backgroundColor);
  if (cResult[0] !== (undefined !== withAndroidOffscreenAlphaCompositingWorkaround && withAndroidOffscreenAlphaCompositingWorkaround)) {
    let isAndroidResult = tmp4;
    if (tmp4) {
      isAndroidResult = tmp(tmp2[15]).isAndroid();
      const tmpResult = tmp(tmp2[15]);
    }
    cResult[0] = tmp4;
    cResult[1] = isAndroidResult;
  }
  importDefault = tmp7;
  let obj = backgroundColor(questDockExpandHandler[14]);
  const questDockCreative = backgroundColor(questDockExpandHandler[16]).useQuestDockCreative();
  const tmpResult17 = backgroundColor(questDockExpandHandler[16]);
  questDockExpandHandler = backgroundColor(questDockExpandHandler[17]).useQuestDockExpandHandler(questDockCreative);
  const tmp11 = closure_27();
  const context = top.useContext(tmp(tmp2[18]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = top.useContext(tmp(tmp2[19]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const id = top.useId();
  if (cResult[2] !== setRestingQuestDockMode) {
    class A {
      constructor() {
        tmp = setRestingQuestDockMode(QuestDockMode.COLLAPSED);
        return;
      }
    }
    cResult[2] = setRestingQuestDockMode;
    cResult[3] = A;
  } else {
    class A {
      constructor() {
        tmp = setRestingQuestDockMode(QuestDockMode.COLLAPSED);
        return;
      }
    }
  }
  const tmpResult18 = backgroundColor(questDockExpandHandler[17]);
  const questDockModeAnimatedReaction = backgroundColor(questDockExpandHandler[17]).useQuestDockModeAnimatedReaction();
  const tmpResult19 = backgroundColor(questDockExpandHandler[17]);
  const questDockDismissalReset = backgroundColor(questDockExpandHandler[17]).useQuestDockDismissalReset();
  const tmpResult20 = backgroundColor(questDockExpandHandler[17]);
  const isScreenReaderEnabled = backgroundColor(questDockExpandHandler[20]).useIsScreenReaderEnabled();
  const tmpResult21 = backgroundColor(questDockExpandHandler[20]);
  function ie() {
    return restingQuestDockMode.get() === QuestDockMode.EXPANDED;
  }
  ie.__closure = { restingQuestDockMode, QuestDockMode };
  ie.__workletHash = 2415817673061;
  ie.__initData = __initData;
  const derivedValue = backgroundColor(questDockExpandHandler[21]).useDerivedValue(ie);
  require("useStateFromSharedValue")(derivedValue);
  top = require("useSafeAreaInsets")().top;
  let obj2 = { restingQuestDockMode, QuestDockMode };
  const tmp21 = importDefault;
  const tmpResult22 = backgroundColor(questDockExpandHandler[21]);
  const youBarTotalHeight = backgroundColor(questDockExpandHandler[24]).useYouBarTotalHeight();
  const tmpResult23 = backgroundColor(questDockExpandHandler[24]);
  const token = backgroundColor(questDockExpandHandler[25]).useToken(require("native").modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp25 = require("useQuestDockAnimatedBorderRadius")(token);
  closure_10 = tmp25;
  const tmpResult24 = backgroundColor(questDockExpandHandler[25]);
  function re() {
    const size = { backgroundColor, borderBottomRightRadius: spring.withSpring(closure_10.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED), borderBottomLeftRadius: null, height: null, width: null, opacity: null, transform: null };
    size.borderBottomLeftRadius = spring.withSpring(closure_10.get(), QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
    size.height = questDockWrapperSpecs.get().height;
    size.width = questDockWrapperSpecs.get().width;
    size.opacity = spring.withSpring(1, QUEST_DOCK_MODE_CHANGE_PHYSICS);
    const obj = { translateX: null };
    const obj6 = spring;
    obj.translateX = obj6.withSpring(questDockWrapperSpecs.get().x + -1 * QuestDockUtils.roundToNearestPixel(questDockWrapperSpecs.get().width / 2), QUEST_DOCK_MODE_CHANGE_PHYSICS);
    const items = [obj, ];
    const obj5 = { translateY: null };
    obj5.translateY = spring.withSpring(questDockWrapperSpecs.get().y, QUEST_DOCK_MODE_CHANGE_PHYSICS);
    items[1] = obj5;
    size.transform = items;
    return size;
  }
  const tmpResult25 = backgroundColor(questDockExpandHandler[21]);
  re.__closure = { backgroundColor, withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, bottomBorderRadius: tmp25, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs: context.questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[28]).roundToNearestPixel };
  re.__workletHash = 9565489600157;
  re.__initData = __initData2;
  const animatedStyle = tmpResult25.useAnimatedStyle(re);
  let obj3 = { backgroundColor, withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, bottomBorderRadius: tmp25, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs: context.questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[28]).roundToNearestPixel };
  const sharedValue = backgroundColor(questDockExpandHandler[21]).useSharedValue(0);
  const tmpResult26 = backgroundColor(questDockExpandHandler[21]);
  function se() {
    const obj = { transform: null };
    const obj2 = { scale: null };
    const obj3 = spring;
    obj2.scale = obj3.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), [1, 0], [1, 1]), springPresets.springStandard);
    const items = [obj2];
    obj.transform = items;
    return obj;
  }
  const tmpResult27 = backgroundColor(questDockExpandHandler[21]);
  se.__closure = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, interpolate: backgroundColor(questDockExpandHandler[21]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[29]).springStandard };
  se.__workletHash = 3373473585356;
  se.__initData = __initData3;
  const animatedStyle1 = tmpResult27.useAnimatedStyle(se);
  if (cResult[4] === questDockExpandHandler) {
    class A {
      constructor() {
        tmp = setRestingQuestDockMode(QuestDockMode.COLLAPSED);
        return;
      }
    }
    if (cResult[7] !== sharedValue) {
      class A {
        constructor() {
          tmp = setRestingQuestDockMode(QuestDockMode.COLLAPSED);
          return;
        }
      }
      cResult[7] = sharedValue;
      class Ae {
        constructor() {
          obj = closure_0(closure_2[27]);
          num = 0;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num = 1;
          }
          obj1 = { opacity: obj.withSpring(num, closure_15), height: windowDimensions.get().height };
          return obj1;
        }
      }
    } else {
      class A {
        constructor() {
          tmp = setRestingQuestDockMode(QuestDockMode.COLLAPSED);
          return;
        }
      }
    }
    if (cResult[9] !== sharedValue) {
      class Ce {
        constructor() {
          result = closure_11.set(0);
          return;
        }
      }
      cResult[9] = sharedValue;
      class Ae {
        constructor() {
          obj = closure_0(closure_2[27]);
          num = 0;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num = 1;
          }
          obj1 = { opacity: obj.withSpring(num, closure_15), height: windowDimensions.get().height };
          return obj1;
        }
      }
    } else {
      class Ce {
        constructor() {
          result = closure_11.set(0);
          return;
        }
      }
    }
    class Ae {
      constructor() {
        obj = closure_0(closure_2[27]);
        num = 0;
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          num = 1;
        }
        obj1 = { opacity: obj.withSpring(num, closure_15), height: windowDimensions.get().height };
        return obj1;
      }
    }
    let obj5 = { withSpring: tmp(tmp2[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, windowDimensions };
    Ae.__closure = obj5;
    Ae.__workletHash = 6178969276321;
    Ae.__initData = __initData4;
    const animatedStyle2 = tmp(tmp2[21]).useAnimatedStyle(Ae);
    const tmpResult28 = tmp(tmp2[21]);
    class Te {
      constructor() {
        pointerEvents = "none";
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          pointerEvents = "auto";
        }
        return { pointerEvents };
      }
    }
    let obj6 = { activeQuestDockMode, QuestDockMode };
    Te.__closure = obj6;
    Te.__workletHash = 17271982627769;
    Te.__initData = __initData5;
    const animatedProps = tmp(tmp2[21]).useAnimatedProps(Te);
    const tmpResult29 = tmp(tmp2[21]);
    class Qe {
      constructor() {
        value = questDockWrapperSpecs.get();
        return windowDimensions.get().height - top - value.height;
      }
    }
    obj7 = { questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
    Qe.__closure = obj7;
    Qe.__workletHash = 8073454569923;
    Qe.__initData = __initData6;
    const derivedValue1 = tmp(tmp2[21]).useDerivedValue(Qe);
    tmp21(tmp2[22])(derivedValue1);
    const tmpResult30 = tmp(tmp2[21]);
    class Ie {
      constructor() {
        obj = closure_0(closure_2[27]);
        obj2 = activeQuestDockMode;
        if (activeQuestDockMode.get() === QuestDockMode.CLOSED) {
          num = 0;
        } else {
          num = 1;
        }
        obj1 = { opacity: obj.withSpring(num, closure_15) };
        return obj1;
      }
    }
    const obj8 = { withSpring: tmp(tmp2[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
    Ie.__closure = obj8;
    Ie.__workletHash = 6468803634518;
    Ie.__initData = __initData7;
    const animatedStyle3 = tmp(tmp2[21]).useAnimatedStyle(Ie);
    const tmpResult31 = tmp(tmp2[21]);
    function me() {
      if (closure_1) {
        if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
          let tmp4 = QUEST_DOCK_CONTENT_BORDER_RADII;
        }
        const size = { borderTopLeftRadius: tmp4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
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
                    let width = questDockWrapperSpecs.get().width - 2 * collapsedCategories;
                  }
                  size.width = width;
                  let num5 = 0;
                  if (closure_1) {
                    let num6 = 0;
                    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                      num6 = collapsedCategories;
                    }
                    num5 = spring.withSpring(num6, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
                    const tmp16Result = spring;
                  }
                  const obj = { translateX: num5 };
                  const items = [obj, ];
                  let num7 = 0;
                  if (closure_1) {
                    let num8 = 0;
                    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                      num8 = collapsedCategories;
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
    const obj9 = { hasInsetHeaderTile: tmp7, activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp25, withSpring: tmp(tmp2[27]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18 };
    me.__closure = obj9;
    me.__workletHash = 13161475723910;
    me.__initData = __initData8;
    const animatedStyle4 = tmp(tmp2[21]).useAnimatedStyle(me);
    ({ wrapper, accessibilityWrapper } = tmp11);
    if (tmp48) {
      class Ce {
        constructor() {
          result = closure_11.set(0);
          return;
        }
      }
    }
    const diff = youBarTotalHeight - 1;
    if (cResult[11] !== diff) {
      class Ce {
        constructor() {
          result = closure_11.set(0);
          return;
        }
      }
      tmp51[0] = diff;
      cResult[11] = diff;
      class Ae {
        constructor() {
          obj = closure_0(closure_2[27]);
          num = 0;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num = 1;
          }
          obj1 = { opacity: obj.withSpring(num, closure_15), height: windowDimensions.get().height };
          return obj1;
        }
      }
      cResult[12] = tmp51;
    } else {
      class Ce {
        constructor() {
          result = closure_11.set(0);
          return;
        }
      }
    }
    if (cResult[13] === animatedStyle) {
      class Ce {
        constructor() {
          result = closure_11.set(0);
          return;
        }
      }
    }
    let items = [tmp11.questDockWrapper, tmp51, animatedStyle];
    cResult[13] = animatedStyle;
    cResult[14] = tmp11.questDockWrapper;
    cResult[15] = tmp51;
    cResult[16] = items;
    tmp48 = isScreenReaderEnabled;
    const tmpResult32 = tmp(tmp2[21]);
  }
  function ne() {
    setRestingQuestDockMode(QuestDockMode.EXPANDED);
    questDockExpandHandler();
  }
  cResult[4] = questDockExpandHandler;
  cResult[5] = setRestingQuestDockMode;
  cResult[6] = ne;
  let obj4 = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, interpolate: backgroundColor(questDockExpandHandler[21]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[29]).springStandard };
}) : ((backgroundColor) => {
  backgroundColor = backgroundColor.backgroundColor;
  ({ layoutVariant, withAndroidOffscreenAlphaCompositingWorkaround } = backgroundColor);
  let isAndroidResult = undefined !== withAndroidOffscreenAlphaCompositingWorkaround;
  ({ expandedHeight, collapsedContent, expandedContent, backgroundContent } = backgroundColor);
  if (isAndroidResult) {
    isAndroidResult = withAndroidOffscreenAlphaCompositingWorkaround;
  }
  if (isAndroidResult) {
    isAndroidResult = backgroundColor(questDockExpandHandler[15]).isAndroid();
    let obj = backgroundColor(questDockExpandHandler[15]);
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
  const questDockCreative = backgroundColor(questDockExpandHandler[16]).useQuestDockCreative();
  let obj2 = backgroundColor(questDockExpandHandler[16]);
  questDockExpandHandler = backgroundColor(questDockExpandHandler[17]).useQuestDockExpandHandler(questDockCreative);
  const tmp10 = closure_27();
  const context = top.useContext(backgroundColor(questDockExpandHandler[18]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = top.useContext(backgroundColor(questDockExpandHandler[19]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = top.useId();
  const callback = top.useCallback(() => {
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items);
  let obj3 = backgroundColor(questDockExpandHandler[17]);
  const questDockModeAnimatedReaction = backgroundColor(questDockExpandHandler[17]).useQuestDockModeAnimatedReaction();
  let obj4 = backgroundColor(questDockExpandHandler[17]);
  const questDockDismissalReset = backgroundColor(questDockExpandHandler[17]).useQuestDockDismissalReset();
  let obj5 = backgroundColor(questDockExpandHandler[17]);
  const isScreenReaderEnabled = backgroundColor(questDockExpandHandler[20]).useIsScreenReaderEnabled();
  let obj6 = backgroundColor(questDockExpandHandler[20]);
  class W {
    constructor() {
      return restingQuestDockMode.get() === QuestDockMode.EXPANDED;
    }
  }
  W.__closure = { restingQuestDockMode, QuestDockMode };
  W.__workletHash = 7060288082029;
  W.__initData = __initData9;
  const derivedValue = backgroundColor(questDockExpandHandler[21]).useDerivedValue(W);
  const tmp20 = require("useStateFromSharedValue")(derivedValue);
  top = require("useSafeAreaInsets")().top;
  obj7 = backgroundColor(questDockExpandHandler[21]);
  const obj8 = { restingQuestDockMode, QuestDockMode };
  const youBarTotalHeight = backgroundColor(questDockExpandHandler[24]).useYouBarTotalHeight();
  const obj9 = backgroundColor(questDockExpandHandler[24]);
  const token = backgroundColor(questDockExpandHandler[25]).useToken(require("native").modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp23 = require("useQuestDockAnimatedBorderRadius")(token);
  closure_10 = tmp23;
  const obj10 = backgroundColor(questDockExpandHandler[25]);
  class Z {
    constructor() {
      size = { backgroundColor, borderBottomRightRadius: null, borderBottomLeftRadius: null, height: null, width: null, opacity: null, transform: null };
      obj2 = closure_0(closure_2[27]);
      size.borderBottomRightRadius = obj2.withSpring(closure_10.get(), closure_16);
      obj3 = closure_0(closure_2[27]);
      size.borderBottomLeftRadius = obj3.withSpring(closure_10.get(), closure_16);
      size.height = questDockWrapperSpecs.get().height;
      size.width = questDockWrapperSpecs.get().width;
      obj4 = closure_0(closure_2[27]);
      size.opacity = obj4.withSpring(1, closure_15);
      obj1 = { translateX: null };
      obj6 = closure_0(closure_2[27]);
      obj7 = closure_0(closure_2[28]);
      obj1.translateX = obj6.withSpring(questDockWrapperSpecs.get().x + -1 * obj7.roundToNearestPixel(questDockWrapperSpecs.get().width / 2), closure_15);
      items = [, ];
      items[0] = obj1;
      obj10 = { translateY: null };
      obj9 = closure_0(closure_2[27]);
      obj10.translateY = obj9.withSpring(questDockWrapperSpecs.get().y, closure_15);
      items[1] = obj10;
      size.transform = items;
      return size;
    }
  }
  const obj11 = backgroundColor(questDockExpandHandler[21]);
  Z.__closure = { backgroundColor, withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, bottomBorderRadius: tmp23, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs: context.questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[28]).roundToNearestPixel };
  Z.__workletHash = 11927010554990;
  Z.__initData = __initData10;
  const animatedStyle = obj11.useAnimatedStyle(Z);
  const obj12 = { backgroundColor, withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, bottomBorderRadius: tmp23, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs: context.questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[28]).roundToNearestPixel };
  const sharedValue = backgroundColor(questDockExpandHandler[21]).useSharedValue(0);
  const obj13 = backgroundColor(questDockExpandHandler[21]);
  function ee() {
    const obj = { transform: null };
    const obj2 = { scale: null };
    const obj3 = spring;
    obj2.scale = obj3.withSpring(ReanimatedRexport.interpolate(sharedValue.get(), [1, 0], [1, 1]), springPresets.springStandard);
    const items = [obj2];
    obj.transform = items;
    return obj;
  }
  const obj14 = backgroundColor(questDockExpandHandler[21]);
  ee.__closure = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, interpolate: backgroundColor(questDockExpandHandler[21]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[29]).springStandard };
  ee.__workletHash = 5840865258847;
  ee.__initData = __initData11;
  const items1 = [setRestingQuestDockMode, questDockExpandHandler];
  const animatedStyle1 = obj14.useAnimatedStyle(ee);
  const items2 = [sharedValue];
  const callback1 = top.useCallback(() => {
    setRestingQuestDockMode(QuestDockMode.EXPANDED);
    questDockExpandHandler();
  }, items1);
  const items3 = [sharedValue];
  const callback2 = top.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const callback3 = top.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  const obj15 = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, interpolate: backgroundColor(questDockExpandHandler[21]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[29]).springStandard };
  function te() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS), height: windowDimensions.get().height };
  }
  const obj16 = backgroundColor(questDockExpandHandler[21]);
  te.__closure = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, windowDimensions };
  te.__workletHash = 11488074451286;
  te.__initData = __initData12;
  const animatedStyle2 = obj16.useAnimatedStyle(te);
  const obj17 = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, windowDimensions };
  function oe() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  oe.__closure = { activeQuestDockMode, QuestDockMode };
  oe.__workletHash = 6944577019790;
  oe.__initData = __initData13;
  const animatedProps = backgroundColor(questDockExpandHandler[21]).useAnimatedProps(oe);
  const obj18 = backgroundColor(questDockExpandHandler[21]);
  function ie() {
    value = questDockWrapperSpecs.get();
    return windowDimensions.get().height - top - value.height;
  }
  ie.__closure = { questDockWrapperSpecs: context.questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  ie.__workletHash = 14953270062704;
  ie.__initData = __initData14;
  const derivedValue1 = backgroundColor(questDockExpandHandler[21]).useDerivedValue(ie);
  const obj19 = backgroundColor(questDockExpandHandler[21]);
  const tmp33 = require("useStateFromSharedValue")(derivedValue1);
  function re() {
    if (activeQuestDockMode.get() === QuestDockMode.CLOSED) {
      let num = 0;
    } else {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
  }
  const obj20 = backgroundColor(questDockExpandHandler[21]);
  re.__closure = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  re.__workletHash = 2744133111557;
  re.__initData = __initData15;
  const animatedStyle3 = obj20.useAnimatedStyle(re);
  const obj21 = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  function se() {
    if (closure_1) {
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        let tmp4 = QUEST_DOCK_CONTENT_BORDER_RADII;
      }
      const size = { borderTopLeftRadius: tmp4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
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
                  let width = questDockWrapperSpecs.get().width - 2 * collapsedCategories;
                }
                size.width = width;
                let num5 = 0;
                if (closure_1) {
                  let num6 = 0;
                  if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                    num6 = collapsedCategories;
                  }
                  num5 = spring.withSpring(num6, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED);
                  const tmp16Result = spring;
                }
                const obj = { translateX: num5 };
                const items = [obj, ];
                let num7 = 0;
                if (closure_1) {
                  let num8 = 0;
                  if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
                    num8 = collapsedCategories;
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
  const obj22 = backgroundColor(questDockExpandHandler[21]);
  se.__closure = { hasInsetHeaderTile: "insetHeader" === layoutVariant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp23, withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs: context.questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18 };
  se.__workletHash = 7661128291673;
  se.__initData = __initData16;
  const obj24 = { style: tmp10.wrapper, pointerEvents: "auto", children: null };
  const animatedStyle4 = obj22.useAnimatedStyle(se);
  const obj25 = { nativeID: id, style: tmp10.accessibilityWrapper, accessibilityViewIsModal: null, onAccessibilityEscape: null, pointerEvents: "box-none", children: null };
  let tmp40 = isScreenReaderEnabled;
  if (tmp40) {
    tmp40 = tmp20;
  }
  obj25.accessibilityViewIsModal = tmp40;
  obj25.onAccessibilityEscape = callback;
  const obj23 = { hasInsetHeaderTile: "insetHeader" === layoutVariant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp23, withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs: context.questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18 };
  const obj26 = { style: animatedStyle1, children: null };
  const tmp19Result = require("QuestDockGestureDetector");
  const obj27 = { style: null, layout: null, children: null };
  const items4 = [tmp10.questDockWrapper, { bottom: youBarTotalHeight - 1 }, animatedStyle];
  obj27.style = items4;
  const obj28 = { bottom: youBarTotalHeight - 1 };
  const tmp19Result6 = require("ReanimatedNativeView");
  obj27.layout = backgroundColor(questDockExpandHandler[28]).dimensionsLayoutTransition;
  const obj29 = { style: tmp10.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null };
  let str3 = "auto";
  if (tmp20) {
    str3 = "none";
  }
  obj29.pointerEvents = str3;
  const intl = tmp6(tmp7[30]).intl;
  obj29.accessibilityLabel = intl.string(backgroundColor(questDockExpandHandler[30]).t.rjVPdM);
  let str4 = "";
  if (!tmp20) {
    const intl2 = tmp6(tmp7[30]).intl;
    str4 = intl2.string(tmp6(tmp7[30]).t.n0MlOB);
  }
  obj29.accessibilityHint = str4;
  const items5 = [closure_24(closure_10, obj29), , , ];
  const obj30 = { style: null, layout: null, pointerEvents: "none" };
  const items6 = [tmp10.questDockHeaderBorder, animatedStyle4];
  obj30.style = items6;
  const tmp19Result7 = require("ReanimatedNativeView");
  obj30.layout = backgroundColor(questDockExpandHandler[28]).dimensionsLayoutTransition;
  items5[1] = closure_24(require("ReanimatedNativeView"), obj30);
  const obj31 = { style: null, needsOffscreenAlphaCompositing: isAndroidResult, children: null };
  const items7 = [tmp10.questDockContentWrapper, animatedStyle3];
  obj31.style = items7;
  const obj32 = { style: tmp10.questDockContentWrapper, children: null };
  const tmp19Result8 = require("ReanimatedNativeView");
  const items8 = [closure_24(require("QuestDockContentCollapsed"), { hideOnExpand: "flush" === layoutVariant, children: collapsedContent }), closure_24(require("QuestDockContentExpanded"), { expandedHeightMode: str, expandedHeight, children: expandedContent })];
  obj32.children = items8;
  const items9 = [closure_25(token, obj32), backgroundContent];
  obj31.children = items9;
  let str5 = "no-offscreen-compositing";
  if (isAndroidResult) {
    str5 = "offscreen-compositing";
  }
  const obj33 = { children: null };
  const obj34 = { children: null };
  items5[2] = closure_25(require("ReanimatedNativeView"), obj31, str5);
  items5[3] = closure_24(require("QuestDockDragHandle"), { isExpanded: tmp20, variant: str2 });
  obj27.children = items5;
  obj26.children = closure_25(tmp19Result7, obj27);
  obj34.children = closure_24(tmp19Result6, obj26);
  obj25.children = closure_24(tmp19Result, obj34);
  obj24.children = closure_24(backgroundColor(questDockExpandHandler[36]).AccessibilityViewAnimated, obj25);
  const items10 = [closure_24(token, obj24), ];
  const obj35 = { style: animatedStyle2, animatedProps, children: null };
  const tmp19Result9 = require("ReanimatedNativeView");
  obj35.children = closure_24(backgroundColor(questDockExpandHandler[37]).Backdrop, { onDismiss: callback, accessibleDismissStyle: { height: tmp33 } });
  items10[1] = closure_24(require("ReanimatedNativeView"), obj35);
  obj33.children = items10;
  return closure_25(closure_26, obj33);
});
ReactCompilerGating = fn(558);
let closure_45 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  const cResult = c.c(6);
  if (cResult[0] !== mode) {
    mode = mode.mode;
    const tmp8 = _objectWithoutProperties(mode, closure_3);
    cResult[0] = mode;
    cResult[1] = mode;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
    let tmp4 = mode;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    if (cResult[4] === tmp5) {
      let tmp9 = cResult[5];
    }
    const questBarOrDockModeChangeTracking = hooks_QuestHooks.useQuestBarOrDockModeChangeTracking(tmp9);
    return null;
  }
  const obj2 = { mode: tmp4 };
  const merged = Object.assign(tmp5);
  obj2.questContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = obj2;
  tmp9 = obj2;
}) : ((mode) => {
  const tmp = _objectWithoutProperties(mode, closure_4);
  const obj2 = { mode: mode.mode };
  const merged = Object.assign(tmp);
  obj2.questContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_BAR_MOBILE;
  const questBarOrDockModeChangeTracking = hooks_QuestHooks.useQuestBarOrDockModeChangeTracking(obj2);
  return null;
});
ReactCompilerGating = fn(558);
let closure_46 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const QuestBarRenderedTriggerPoint = require("QuestBarRenderedTriggerPoint").QuestBarRenderedTriggerPoint;
      QuestBarRenderedTriggerPoint.trigger();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = noop.useEffect(tmp2, tmp3);
  return null;
}) : (() => {
  const effect = noop.useEffect(() => {
    const QuestBarRenderedTriggerPoint = require("QuestBarRenderedTriggerPoint").QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
});
createStyles = fn(4890);
let closure_47 = createStyles.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj7 = {};
const merged4 = Object.assign(fn(5598).SUBTLE_SPRING);
obj7.overshootClamping = true;
obj7.damping = 54;
const constants2 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
ReactCompilerGating = fn(558);
let closure_50 = ReactCompilerGating.isReactCompilerEnabled() ? ((adCreativeId) => {
  const cResult = adCreativeId(backgroundImageUrl[14]).c(14);
  adCreativeId = adCreativeId.adCreativeId;
  const adCreativeType = adCreativeId.adCreativeType;
  backgroundImageUrl = adCreativeId.backgroundImageUrl;
  const iconUrl = adCreativeId.iconUrl;
  const trackAssetLoadingFailure = adCreativeId.trackAssetLoadingFailure;
  [first, _slicedToArray] = noop.useState(constants2.PENDING);
  if (cResult[0] !== trackAssetLoadingFailure) {
    const fn = function o(arg0) {
      if (trackAssetLoadingFailure != null) {
        tmp(arg0);
      }
    };
    cResult[0] = trackAssetLoadingFailure;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const effectEvent = noop.useEffectEvent(tmp4);
  if (cResult[2] === backgroundImageUrl) {
    if (cResult[3] === iconUrl) {
      if (cResult[4] === effectEvent) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === backgroundImageUrl) {
        if (cResult[7] === iconUrl) {
          let tmp7 = cResult[8];
        }
        const effect = noop.useEffect(tmp6, tmp7);
        if (cResult[9] === adCreativeId) {
          if (cResult[10] === adCreativeType) {
            if (cResult[11] === first) {
              let tmp9 = cResult[12];
              let tmp10 = cResult[13];
            }
            const effect1 = noop.useEffect(tmp9, tmp10);
            return first;
          }
        }
        class I {
          constructor() {
            if (closure_5 === closure_49.FAILED) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[41]);
              obj1 = { name: null, tags: null };
              tmp3 = closure_0;
              obj1.name = closure_0(closure_2[42]).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE;
              tmp4 = adCreativeId;
              tmp5 = globalThis;
              _HermesInternal = HermesInternal;
              str = "ad_creative_id:";
              items = [, , , ];
              items[0] = "ad_creative_id:" + adCreativeId;
              tmp6 = adCreativeType;
              _HermesInternal2 = HermesInternal;
              str2 = "ad_creative_type:";
              items[1] = "ad_creative_type:" + closure_0(closure_2[43]).AdCreativeType[adCreativeType];
              obj3 = closure_0(closure_2[44]);
              _HermesInternal3 = HermesInternal;
              str3 = "quest_content:";
              items[2] = "quest_content:" + obj3.getQuestContentName(closure_0(closure_2[38]).QuestContent.QUEST_BAR_MOBILE);
              str4 = "reason:asset_loading_error";
              items[3] = "reason:asset_loading_error";
              obj1.tags = items;
              incrementResult = obj.increment(obj1);
            }
            return;
          }
        }
        let items = [first, adCreativeId, adCreativeType];
        cResult[9] = adCreativeId;
        cResult[10] = adCreativeType;
        cResult[11] = first;
        cResult[12] = I;
        cResult[13] = items;
        tmp10 = items;
        tmp9 = I;
      }
      const items1 = [, iconUrl];
      cResult[6] = backgroundImageUrl;
      cResult[7] = iconUrl;
      cResult[8] = items1;
      tmp7 = items1;
    }
  }
  class T {
    constructor() {
      closure_129_0 = closure_5(function*(arg0) {
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
            return { value: "IconComponent", done: "IconComponent" };
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
                const obj4 = { value: closure_2_11.prefetch(closure_0), done: false };
                return obj4;
              }
            } else if (1 === tmp7) {
              c4 = 0;
              effectEvent(closure_129_0);
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
      });
      closure_0 = closure_5(function*() {
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
            return { value: "IconComponent", done: "IconComponent" };
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
                closure_128_0 = undefined;
                const items = [];
                if (null != backgroundImageUrl) {
                  items.push(tmp2(tmp24));
                }
                if (null != iconUrl) {
                  items.push(tmp2(tmp15));
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
              if (closure_128_0.every(/* F155214 */ function() { ... })) {
                let FAILED = constants.SUCCEEDED;
              } else {
                FAILED = constants.FAILED;
              }
              closure_2_6(FAILED);
              c3 = 3;
            }
          } catch (tmp19) {
            c3 = tmp;
            throw tmp19;
          }
        }
      });
      tmp = (function preloadQuestDockAssets() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      return;
    }
  }
  cResult[2] = backgroundImageUrl;
  cResult[3] = iconUrl;
  cResult[4] = effectEvent;
  cResult[5] = T;
  tmp6 = T;
  let obj = adCreativeId(backgroundImageUrl[14]);
}) : ((adCreativeId) => {
  adCreativeId = adCreativeId.adCreativeId;
  const adCreativeType = adCreativeId.adCreativeType;
  const backgroundImageUrl = adCreativeId.backgroundImageUrl;
  const iconUrl = adCreativeId.iconUrl;
  const trackAssetLoadingFailure = adCreativeId.trackAssetLoadingFailure;
  [first, _slicedToArray] = noop.useState(constants2.PENDING);
  closure_7 = noop.useEffectEvent((arg0) => {
    if (trackAssetLoadingFailure != null) {
      tmp(arg0);
    }
  });
  let items = [backgroundImageUrl, iconUrl];
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
    closure_1 = async function _prefetchWithErrorReporting2(arg0) {
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
          return { value: "IconComponent", done: "IconComponent" };
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
              const obj4 = { value: closure_2_11.prefetch(closure_0), done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_1_7(closure_129_0);
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
    closure_2 = async function _preloadQuestDockAssets2() {
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
          return { value: "IconComponent", done: "IconComponent" };
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
            closure_1_6(FAILED);
            c3 = 3;
          }
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    };
    !(function preloadQuestDockAssets() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items);
  const items1 = [first, adCreativeId, adCreativeType];
  const effect1 = noop.useEffect(() => {
    if (first === constants.FAILED) {
      const obj2 = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: null };
      const _HermesInternal = HermesInternal;
      const items = ["ad_creative_id:" + adCreativeId, , , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[adCreativeType];
      const obj = MonitoringAgentDefault;
      const _HermesInternal3 = HermesInternal;
      items[2] = "quest_content:" + AnalyticsTypes.getQuestContentName(QuestTypes.QuestContent.QUEST_BAR_MOBILE);
      items[3] = "reason:asset_loading_error";
      obj2.tags = items;
      obj.increment(obj2);
    }
  }, items1);
  return first;
});
const __initData17 = { code: "function QuestDockTsx17(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,\"animate-always\"),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
const __initData18 = { code: "function QuestDockTsx18(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
ReactCompilerGating = fn(558);
let closure_53 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockWithEntranceAnimation(adCreativeId) {
  let tmp2 = adCreativeType;
  const cResult = renderModeChangeTracker(adCreativeType[14]).c(40);
  ({ renderImpressionTracker, renderModeChangeTracker } = adCreativeId);
  adCreativeId = adCreativeId.adCreativeId;
  adCreativeType = adCreativeId.adCreativeType;
  ({ backgroundImageUrl, iconUrl, trackAssetLoadingFailure, layoutVariant } = adCreativeId);
  const theme = adCreativeId.theme;
  const backgroundColor = adCreativeId.backgroundColor;
  expandedHeight = adCreativeId.expandedHeight;
  const collapsedContent = adCreativeId.collapsedContent;
  const expandedContent = adCreativeId.expandedContent;
  const backgroundContent = adCreativeId.backgroundContent;
  const withAndroidOffscreenAlphaCompositingWorkaround = adCreativeId.withAndroidOffscreenAlphaCompositingWorkaround;
  let View = adCreativeId;
  const context = expandedContent.useContext(adCreativeId(adCreativeType[45]));
  const isRendered = context.isRendered;
  const isVisibleToUser = context.isVisibleToUser;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores];
    const fn = function s() {
      return stateFromStores.prevRestingQuestDockMode;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = renderModeChangeTracker(adCreativeType[14]);
  stateFromStores = renderModeChangeTracker(tmp2[46]).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      return performance.now();
    };
    cResult[2] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[2];
  }
  const first = expandedHeight(obj2.useState(tmp9), 1)[0];
  expandedContent.useRef(false);
  const tmp12 = closure_47();
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let size = { width: 0, height: 0 };
    cResult[3] = size;
    let tmp13 = size;
  } else {
    tmp13 = cResult[3];
  }
  const tmp10Result = expandedHeight(expandedContent.useState(tmp13), 2);
  const first1 = tmp10Result[0];
  closure_16 = tmp10Result[1];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const isEligibleForQuests = renderModeChangeTracker(tmp2[47]).getIsEligibleForQuests();
    cResult[4] = isEligibleForQuests;
    let tmp16 = isEligibleForQuests;
    const tmpResult3 = renderModeChangeTracker(tmp2[47]);
  } else {
    tmp16 = cResult[4];
  }
  let tmpResult = renderModeChangeTracker(tmp2[46]);
  class V {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[27]);
      num = 0;
      tmp3 = isRendered;
      if (isRendered) {
        num = 1;
      }
      obj1 = { opacity: obj.withSpring(num, closure_48, "animate-always"), transform: null };
      tmp4 = closure_48;
      tmpResult = tmp(tmp2[27]);
      num2 = 0;
      if (!tmp3) {
        tmp5 = closure_15;
        num2 = closure_15.height;
      }
      obj5 = { translateY: tmpResult.withSpring(num2, tmp4) };
      items = [];
      items[0] = obj5;
      obj1.transform = items;
      return obj1;
    }
  }
  const tmpResult4 = renderModeChangeTracker(tmp2[21]);
  V.__closure = { withSpring: renderModeChangeTracker(tmp2[27]).withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: obj7, componentDimensions: first1 };
  V.__workletHash = 7000537051560;
  V.__initData = __initData17;
  const animatedStyle = tmpResult4.useAnimatedStyle(V);
  if (cResult[5] === adCreativeId) {
    if (cResult[6] === adCreativeType) {
      if (cResult[7] === backgroundImageUrl) {
        if (cResult[8] === iconUrl) {
          let tmp22 = !tmp16;
          if (tmp16) {
            tmp22 = tmp21 !== constants2.SUCCEEDED;
          }
          closure_17 = tmp22;
          if (cResult[11] !== tmp22) {
            const fn3 = function z() {
              let result = QuestActionCreators.updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: !closure_17 });
              return () => {
                const result = renderModeChangeTracker(adCreativeType[48]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
              };
            };
            const items1 = [tmp22];
            cResult[11] = tmp22;
            cResult[12] = fn3;
            cResult[13] = items1;
            let tmp25 = items1;
            let tmp24 = fn3;
          } else {
            tmp24 = cResult[12];
            tmp25 = cResult[13];
          }
          const effect = obj2.useEffect(tmp24, tmp25);
          if (tmp22) {
            return null;
          } else {
            if (cResult[14] === animatedStyle) {
              if (cResult[15] === tmp12.wrapperAnimated) {
                let tmp28 = cResult[16];
              }
              if (cResult[17] === adCreativeId) {
                if (cResult[18] === adCreativeType) {
                  if (cResult[19] === first) {
                    let tmp29 = cResult[20];
                  }
                  if (cResult[21] === backgroundColor) {
                    if (cResult[22] === backgroundContent) {
                      if (cResult[23] === collapsedContent) {
                        if (cResult[24] === expandedContent) {
                          if (cResult[25] === expandedHeight) {
                            if (cResult[26] === layoutVariant) {
                              if (cResult[27] === stateFromStores) {
                                if (cResult[28] === renderModeChangeTracker) {
                                  if (cResult[29] === theme) {
                                    if (cResult[30] === withAndroidOffscreenAlphaCompositingWorkaround) {
                                      let tmp30 = cResult[31];
                                    }
                                    if (cResult[32] === isVisibleToUser) {
                                      if (cResult[33] === renderImpressionTracker) {
                                        if (cResult[34] === tmp30) {
                                          let tmp31 = cResult[35];
                                        }
                                        if (cResult[36] === tmp31) {
                                          if (cResult[37] === tmp28) {
                                          }
                                        }
                                        View = View(tmp2[21]).View;
                                        let obj4 = { pointerEvents: "box-none", style: tmp28, onLayout: tmp29, children: tmp31 };
                                        tmp2 = closure_24(View, obj4);
                                        cResult[36] = tmp31;
                                        cResult[37] = tmp28;
                                        cResult[38] = tmp29;
                                        cResult[39] = tmp2;
                                      }
                                    }
                                    const obj5 = { children: tmp30, overrideVisibility: isVisibleToUser };
                                    let result = renderImpressionTracker(obj5);
                                    cResult[32] = isVisibleToUser;
                                    cResult[33] = renderImpressionTracker;
                                    cResult[34] = tmp30;
                                    cResult[35] = result;
                                    tmp31 = result;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  function de() {
                    const obj = { children: null };
                    const items = [renderModeChangeTracker({ mode: stateFromStores }), closure_2_24(closure_46, {}), ];
                    const obj3 = { expandedHeight, children: null };
                    const obj4 = { theme, children: closure_2_24(closure_44, { backgroundColor, layoutVariant, expandedHeight, collapsedContent, expandedContent, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround }) };
                    obj3.children = closure_2_24(native.ThemeContextProvider, obj4);
                    items[2] = closure_2_24(QuestDockGestureContext.QuestDockGestureContextProvider, obj3);
                    obj.children = items;
                    return closure_2_25(closure_2_26, obj);
                  }
                  cResult[21] = backgroundColor;
                  cResult[22] = backgroundContent;
                  cResult[23] = collapsedContent;
                  cResult[24] = expandedContent;
                  cResult[25] = expandedHeight;
                  cResult[26] = layoutVariant;
                  cResult[27] = stateFromStores;
                  cResult[28] = renderModeChangeTracker;
                  cResult[29] = theme;
                  cResult[30] = withAndroidOffscreenAlphaCompositingWorkaround;
                  cResult[31] = de;
                  tmp30 = de;
                }
              }
              function ae(height) {
                const size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
                closure_16(size);
                if (!ref.current) {
                  tmp2.current = true;
                  const _Math = Math;
                  if (Math.random() < 0.1) {
                    const _Math2 = Math;
                    const _performance = performance;
                    const rounded = Math.round(performance.now() - first);
                    const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT, tags: null };
                    const _HermesInternal = HermesInternal;
                    const items = ["ad_creative_id:" + adCreativeId, ];
                    const _HermesInternal2 = HermesInternal;
                    items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[adCreativeType];
                    obj.tags = items;
                    MonitoringAgentDefault.distribution(obj, rounded);
                  }
                }
              }
              cResult[17] = adCreativeId;
              cResult[18] = adCreativeType;
              cResult[19] = first;
              cResult[20] = ae;
              tmp29 = ae;
            }
            const items2 = [tmp12.wrapperAnimated, animatedStyle];
            cResult[14] = animatedStyle;
            cResult[15] = tmp12.wrapperAnimated;
            cResult[16] = items2;
            tmp28 = items2;
          }
        }
      }
    }
  }
  cResult[5] = adCreativeId;
  cResult[6] = adCreativeType;
  cResult[7] = backgroundImageUrl;
  cResult[8] = iconUrl;
  cResult[9] = trackAssetLoadingFailure;
  cResult[10] = { adCreativeId, adCreativeType, backgroundImageUrl, iconUrl, trackAssetLoadingFailure };
  let obj3 = { withSpring: renderModeChangeTracker(tmp2[27]).withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: obj7, componentDimensions: first1 };
  const obj6 = { adCreativeId, adCreativeType, backgroundImageUrl, iconUrl, trackAssetLoadingFailure };
}) : (function QuestDockWithEntranceAnimation(adCreativeType) {
  ({ renderModeChangeTracker: require, adCreativeId } = adCreativeType);
  adCreativeType = adCreativeType.adCreativeType;
  ({ layoutVariant: closure_3, theme: closure_4, backgroundColor: asyncGeneratorStep, expandedHeight: _slicedToArray, collapsedContent: _objectWithoutProperties, expandedContent: noop, backgroundContent: closure_9, withAndroidOffscreenAlphaCompositingWorkaround: closure_10 } = adCreativeType);
  ({ renderImpressionTracker, backgroundImageUrl, iconUrl, trackAssetLoadingFailure } = adCreativeType);
  const context = noop.useContext(adCreativeId(adCreativeType[45]));
  const isRendered = context.isRendered;
  let items = [mode];
  mode = require("initialize").useStateFromStores(items, () => mode.prevRestingQuestDockMode);
  closure_13 = _slicedToArray(noop.useState(() => performance.now()), 1)[0];
  noop.useRef(false);
  let obj2 = require("initialize");
  const tmp2 = adCreativeType;
  [componentDimensions, closure_16] = noop.useState({ width: 0, height: 0 });
  const tmp4 = closure_47();
  const isEligibleForQuests = require("QuestsEligibility").getIsEligibleForQuests();
  let obj3 = require("QuestsEligibility");
  const fn = function o() {
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
  let obj4 = require("ReanimatedRexport");
  fn.__closure = { withSpring: require("spring").withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: obj7, componentDimensions };
  fn.__workletHash = 13272356181063;
  fn.__initData = __initData18;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let tmp10 = !isEligibleForQuests;
  if (isEligibleForQuests) {
    tmp10 = tmp9 !== constants2.SUCCEEDED;
  }
  closure_17 = tmp10;
  const items1 = [tmp10];
  const effect = noop.useEffect(() => {
    let result = QuestActionCreators.updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: !closure_17 });
    return () => {
      const result = closure_1_0(adCreativeType[48]).updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
    };
  }, items1);
  let tmp13 = null;
  if (!tmp10) {
    const obj6 = { pointerEvents: "box-none", style: null, onLayout: null, children: null };
    const items2 = [tmp4.wrapperAnimated, animatedStyle];
    obj6.style = items2;
    obj6.onLayout = function onLayout(height) {
      const size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
      closure_16(size);
      if (!ref.current) {
        tmp2.current = true;
        const _Math = Math;
        if (Math.random() < 0.1) {
          const _Math2 = Math;
          const _performance = performance;
          const rounded = Math.round(performance.now() - closure_13);
          const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT, tags: null };
          const _HermesInternal = HermesInternal;
          const items = ["ad_creative_id:" + adCreativeId, ];
          const _HermesInternal2 = HermesInternal;
          items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[adCreativeType];
          obj.tags = items;
          MonitoringAgentDefault.distribution(obj, rounded);
        }
      }
    };
    obj7 = {
      children() {
          const obj = { children: null };
          const items = [_require({ mode }), closure_2_24(closure_46, {}), ];
          const obj3 = { expandedHeight, children: null };
          const obj4 = { theme, children: closure_2_24(closure_44, { backgroundColor, layoutVariant, expandedHeight, collapsedContent, expandedContent, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround: closure_1_10 }) };
          obj3.children = closure_2_24(native.ThemeContextProvider, obj4);
          items[2] = closure_2_24(QuestDockGestureContext.QuestDockGestureContextProvider, obj3);
          obj.children = items;
          return closure_2_25(closure_2_26, obj);
        },
      overrideVisibility: context.isVisibleToUser
    };
    obj6.children = renderImpressionTracker(obj7);
    tmp13 = closure_24(adCreativeId(tmp2[21]).View, obj6);
  }
  return tmp13;
});
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockQuestContent(quest) {
  const cResult = quest(576).c(27);
  quest = quest.quest;
  const obj = quest(576);
  const tmp = quest;
  const questBarImpressionSurvey = quest(10911).useQuestBarImpressionSurvey(quest);
  const obj2 = quest(10911);
  const questDockAppThemedBackgroundColor = quest(14889).useQuestDockAppThemedBackgroundColor();
  const obj3 = quest(14889);
  const staticUrl = quest(14888).useQuestDockHeroAsset(quest).staticUrl;
  const obj4 = quest(14888);
  const questGameLogotypeAssetUrl = quest(14888).useQuestGameLogotypeAssetUrl(quest);
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  if (cResult[0] !== quest.id) {
    const fn = function o(asset_id) {
      AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, { quest_id: quest.id, source: constants.QUESTS_BAR_MOBILE, asset_id });
    };
    cResult[0] = quest.id;
    cResult[1] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  let str = "insetHeader";
  if (null != enrolledAt) {
    str = "flush";
  }
  if (null == enrolledAt) {
    const DARK = ThemeTypes.DARK;
  }
  if (cResult[2] !== (null != enrolledAt)) {
    const tmp14Result = closure_24(questBarImpressionSurvey(tmp8 ? 14988 : 14989), {});
    const tmp14Result3 = closure_24(questBarImpressionSurvey(tmp8 ? 14996 : 14997), {});
    let tmp14Result4 = null;
    if (!tmp8) {
      tmp14Result4 = closure_24(tmp15(14999), {});
    }
    cResult[2] = tmp8;
    cResult[3] = tmp14Result;
    cResult[4] = tmp14Result3;
    cResult[5] = tmp14Result4;
    let tmp13 = tmp14Result4;
    let tmp12 = tmp14Result3;
    let tmp11 = tmp14Result;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  if (cResult[6] === questBarImpressionSurvey) {
    if (cResult[7] === quest) {
      let tmp19 = cResult[8];
    }
    if (cResult[9] !== quest.id) {
      class C {
        constructor(arg0) {
          obj = { questId: quest.id, mode: quest.mode };
          return jsx(f69309, obj);
        }
      }
      cResult[9] = quest.id;
      cResult[10] = C;
    } else {
      class C {
        constructor(arg0) {
          obj = { questId: quest.id, mode: quest.mode };
          return jsx(f69309, obj);
        }
      }
    }
    if (cResult[11] === questDockAppThemedBackgroundColor) {
      class C {
        constructor(arg0) {
          obj = { questId: quest.id, mode: quest.mode };
          return jsx(f69309, obj);
        }
      }
    }
    const obj6 = { adCreativeId: quest.id, adCreativeType: tmp(5630).AdCreativeType.QUEST, backgroundImageUrl: staticUrl, iconUrl: questGameLogotypeAssetUrl, trackAssetLoadingFailure: tmp9, layoutVariant: str, theme: DARK, backgroundColor: questDockAppThemedBackgroundColor, expandedHeight, collapsedContent: tmp11, expandedContent: tmp12, backgroundContent: tmp13, renderImpressionTracker: tmp19, renderModeChangeTracker: C };
    const tmp25 = closure_24(closure_53, obj6);
    cResult[11] = questDockAppThemedBackgroundColor;
    cResult[12] = staticUrl;
    cResult[13] = questGameLogotypeAssetUrl;
    cResult[14] = quest.id;
    class S {
      constructor(arg0) {
        ({ children, overrideVisibility } = quest);
        obj = { questOrQuests: quest, overrideVisibility, questContent: closure_0(closure_2[38]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: closure_0(closure_2[38]).QuestContent.QUEST_BAR_MOBILE, onImpression: closure_1, children };
        return jsx(closure_0(closure_2[57]).BillableAdPlacementImpressionTrackerNative, obj);
      }
    }
    cResult[15] = tmp9;
    cResult[16] = str;
    cResult[17] = DARK;
    cResult[18] = tmp11;
    cResult[19] = tmp12;
    cResult[20] = tmp13;
    cResult[21] = tmp19;
    cResult[22] = C;
    cResult[23] = tmp25;
  }
  class S {
    constructor(arg0) {
      ({ children, overrideVisibility } = quest);
      obj = { questOrQuests: quest, overrideVisibility, questContent: closure_0(closure_2[38]).QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: closure_0(closure_2[38]).QuestContent.QUEST_BAR_MOBILE, onImpression: closure_1, children };
      return jsx(closure_0(closure_2[57]).BillableAdPlacementImpressionTrackerNative, obj);
    }
  }
  cResult[6] = questBarImpressionSurvey;
  cResult[7] = quest;
  cResult[8] = S;
  tmp19 = S;
  const obj5 = quest(14888);
}) : (function QuestDockQuestContent(quest) {
  quest = quest.quest;
  const onImpression = quest(10911).useQuestBarImpressionSurvey(quest);
  const obj = quest(10911);
  const questDockAppThemedBackgroundColor = quest(14889).useQuestDockAppThemedBackgroundColor();
  const obj2 = quest(14889);
  const obj3 = quest(14888);
  const userStatus = quest.userStatus;
  let enrolledAt;
  const questGameLogotypeAssetUrl = quest(14888).useQuestGameLogotypeAssetUrl(quest);
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const obj5 = { quest, children: null };
  const obj6 = {
    adCreativeId: quest.id,
    adCreativeType: quest(5630).AdCreativeType.QUEST,
    backgroundImageUrl: obj3.useQuestDockHeroAsset(quest).staticUrl,
    iconUrl: questGameLogotypeAssetUrl,
    trackAssetLoadingFailure(asset_id) {
      AnalyticsUtilsDefault.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, { quest_id: quest.id, source: constants.QUESTS_BAR_MOBILE, asset_id });
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
  let str = "insetHeader";
  if (null != enrolledAt) {
    str = "flush";
  }
  obj6.layoutVariant = str;
  let DARK;
  if (null == enrolledAt) {
    DARK = ThemeTypes.DARK;
  }
  obj6.theme = DARK;
  obj6.backgroundColor = questDockAppThemedBackgroundColor;
  obj6.expandedHeight = expandedHeight;
  obj6.collapsedContent = closure_24(onImpression(null != enrolledAt ? 14988 : 14989), {});
  obj6.expandedContent = closure_24(onImpression(null != enrolledAt ? 14996 : 14997), {});
  let tmp7Result = null;
  if (null == enrolledAt) {
    tmp7Result = closure_24(tmp11(14999), {});
  }
  obj6.backgroundContent = tmp7Result;
  obj6.renderImpressionTracker = function renderImpressionTracker(arg0) {
    ({ children, overrideVisibility } = arg0);
    return closure_2_24(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { questOrQuests: quest, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, onImpression, children });
  };
  obj6.renderModeChangeTracker = function renderModeChangeTracker(mode) {
    return closure_2_24(closure_45, { questId: quest.id, mode: mode.mode });
  };
  obj5.children = closure_24(closure_53, obj6);
  return closure_24(quest(14921).QuestDockQuestProvider, obj5);
});
let closure_54 = tmp11;
ReactCompilerGating = fn(558);
let closure_55 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockBountyContent(bounty) {
  const cResult = bounty(576).c(22);
  bounty = bounty.bounty;
  let obj = bounty(576);
  const bountyPreviewImageUrl = bounty(14889).useBountyPreviewImageUrl(bounty);
  const obj2 = bounty(14889);
  const questDockAppThemedBackgroundColor = bounty(14889).useQuestDockAppThemedBackgroundColor();
  const obj3 = bounty(14889);
  const questDockBountySmokeCollapsedPlaceholderUrl = bounty(15002).useQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = bounty(15002);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = bounty(15003).useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  if (cResult[0] !== bounty.id) {
    const fn = function o(asset_id) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, { source: constants.QUESTS_BAR_MOBILE, ad_creative_id: bounty.id, ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY, asset_id });
    };
    cResult[0] = bounty.id;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_24(QuestDockBountyHeaderDefault, {});
    const tmp14 = closure_24(QuestDockBountyBodyDefault, {});
    cResult[2] = tmp13;
    cResult[3] = tmp14;
    let tmp10 = tmp14;
    let tmp9 = tmp13;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  if (cResult[4] !== bountyPreviewImageUrl) {
    const obj6 = { previewImageUrl: bountyPreviewImageUrl };
    const tmp18 = closure_24(QuestDockBountyBackgroundDefault, obj6);
    cResult[4] = bountyPreviewImageUrl;
    cResult[5] = tmp18;
    let tmp15 = tmp18;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== bounty.id) {
    const fn2 = function u(arg0) {
      ({ children, overrideVisibility } = arg0);
      return closure_2_24(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children });
    };
    class D {
      constructor(arg0) {
        obj = { adCreativeType: closure_0(closure_2[43]).AdCreativeType.BOUNTY, adContentId: bounty.id, mode: bounty.mode };
        return jsx(f69309, obj);
      }
    }
    cResult[6] = bounty.id;
    cResult[7] = fn2;
    cResult[8] = D;
    let tmp19 = fn2;
  } else {
    tmp19 = cResult[7];
    class D {
      constructor(arg0) {
        obj = { adCreativeType: closure_0(closure_2[43]).AdCreativeType.BOUNTY, adContentId: bounty.id, mode: bounty.mode };
        return jsx(f69309, obj);
      }
    }
  }
  if (cResult[9] === questDockAppThemedBackgroundColor) {
    if (cResult[10] === bounty.id) {
      if (cResult[11] === bounty.productIcon) {
        if (cResult[12] === isBountiesAndroidQuestBarSmokeAnimationEnabled) {
          if (cResult[13] === questDockBountySmokeCollapsedPlaceholderUrl) {
            if (cResult[14] === tmp8) {
              if (cResult[15] === tmp15) {
                if (cResult[16] === tmp19) {
                  if (cResult[17] === D) {
                    let tmp21 = cResult[18];
                  }
                  class D {
                    constructor(arg0) {
                      obj = { adCreativeType: closure_0(closure_2[43]).AdCreativeType.BOUNTY, adContentId: bounty.id, mode: bounty.mode };
                      return jsx(f69309, obj);
                    }
                  }
                  obj7 = { bounty, children: tmp21 };
                  const tmp25 = closure_24(tmp(14921).QuestDockBountyProvider, obj7);
                  cResult[19] = bounty;
                  cResult[20] = tmp21;
                  cResult[21] = tmp25;
                }
              }
            }
          }
        }
      }
    }
  }
  const obj5 = bounty(15003);
  const tmp22 = closure_24(closure_53, { adCreativeId: bounty.id, adCreativeType: bounty(5630).AdCreativeType.BOUNTY, backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl, iconUrl: bounty.productIcon, trackAssetLoadingFailure: tmp8, layoutVariant: "insetHeader", theme: ThemeTypes.DARK, backgroundColor: questDockAppThemedBackgroundColor, expandedHeight: expandedHeight2, collapsedContent: tmp9, expandedContent: tmp10, backgroundContent: tmp15, withAndroidOffscreenAlphaCompositingWorkaround: isBountiesAndroidQuestBarSmokeAnimationEnabled, renderImpressionTracker: tmp19, renderModeChangeTracker: D });
  cResult[9] = questDockAppThemedBackgroundColor;
  cResult[10] = bounty.id;
  cResult[11] = bounty.productIcon;
  cResult[12] = isBountiesAndroidQuestBarSmokeAnimationEnabled;
  cResult[13] = questDockBountySmokeCollapsedPlaceholderUrl;
  cResult[14] = tmp8;
  cResult[15] = tmp15;
  cResult[16] = tmp19;
  cResult[17] = D;
  cResult[18] = tmp22;
  tmp21 = tmp22;
  const obj8 = { adCreativeId: bounty.id, adCreativeType: bounty(5630).AdCreativeType.BOUNTY, backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl, iconUrl: bounty.productIcon, trackAssetLoadingFailure: tmp8, layoutVariant: "insetHeader", theme: ThemeTypes.DARK, backgroundColor: questDockAppThemedBackgroundColor, expandedHeight: expandedHeight2, collapsedContent: tmp9, expandedContent: tmp10, backgroundContent: tmp15, withAndroidOffscreenAlphaCompositingWorkaround: isBountiesAndroidQuestBarSmokeAnimationEnabled, renderImpressionTracker: tmp19, renderModeChangeTracker: D };
}) : (function QuestDockBountyContent(bounty) {
  bounty = bounty.bounty;
  const bountyPreviewImageUrl = bounty(14889).useBountyPreviewImageUrl(bounty);
  let obj = bounty(14889);
  const questDockAppThemedBackgroundColor = bounty(14889).useQuestDockAppThemedBackgroundColor();
  const obj2 = bounty(14889);
  const questDockBountySmokeCollapsedPlaceholderUrl = bounty(15002).useQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj3 = bounty(15002);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = bounty(15003).useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  const obj5 = { bounty, children: null };
  const obj4 = bounty(15003);
  obj5.children = closure_24(closure_53, {
    adCreativeId: bounty.id,
    adCreativeType: bounty(5630).AdCreativeType.BOUNTY,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: bounty.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, { source: constants.QUESTS_BAR_MOBILE, ad_creative_id: bounty.id, ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY, asset_id });
    },
    layoutVariant: "insetHeader",
    theme: ThemeTypes.DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight: expandedHeight2,
    collapsedContent: closure_24(QuestDockBountyHeaderDefault, {}),
    expandedContent: closure_24(QuestDockBountyBodyDefault, {}),
    backgroundContent: closure_24(QuestDockBountyBackgroundDefault, { previewImageUrl: bountyPreviewImageUrl }),
    withAndroidOffscreenAlphaCompositingWorkaround: isBountiesAndroidQuestBarSmokeAnimationEnabled,
    renderImpressionTracker(arg0) {
      ({ children, overrideVisibility } = arg0);
      return closure_2_24(QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative, { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children });
    },
    renderModeChangeTracker(mode) {
      return closure_2_24(closure_45, { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode });
    }
  });
  return closure_24(bounty(14921).QuestDockBountyProvider, obj5);
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockWithVisibilityContext() {
  let tmp2 = dependencyMap;
  const cResult = c.c(13);
  const mobileQuestDock = QuestHooks.useMobileQuestDock();
  const isMobileQuestDockRenderedBase = QuestHooks.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  const isMobileQuestDockVisibleToUser = QuestHooks.useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  if (cResult[0] === isMobileQuestDockRenderedBase) {
    if (cResult[1] === isMobileQuestDockVisibleToUser) {
      let tmp7 = cResult[2];
    }
    let tmp8 = importDefault;
    let decisionId = useNoFillDecisionDefault(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, "QuestDockWithVisibilityContext");
    const tmp10 = useIsWindowLargeDefault();
    const tmp11 = !tmp10;
    const isMobileQuestDockVisibleToUser1 = QuestHooks.useIsMobileQuestDockVisibleToUser(mobileQuestDock, tmp11);
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      if (cResult[3] !== mobileQuestDock.bounty) {
        const obj5 = { bounty: mobileQuestDock.bounty };
        const tmp21 = closure_1_24(closure_55, obj5);
        cResult[3] = mobileQuestDock.bounty;
        cResult[4] = tmp21;
      }
    } else {
      if (AdCreativeType.AdCreativeType.QUEST === type) {
        if (cResult[5] !== mobileQuestDock.quest) {
          const obj6 = { quest: mobileQuestDock.quest };
          const tmp17 = closure_1_24(closure_54, obj6);
          cResult[5] = mobileQuestDock.quest;
          cResult[6] = tmp17;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[6];
        }
        let tmp13 = tmp14;
      } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
        tmp13 = null;
      }
      if (mobileQuestDock.type === AdCreativeType.AdCreativeType.NO_FILL) {
        let tmp27 = null;
        if (null != decisionId) {
          tmp27 = null;
          if (!tmp10) {
            if (cResult[7] === isMobileQuestDockVisibleToUser1) {
            }
            tmp8 = tmp8(15017);
            obj7 = { decisionId: decisionId.decisionId, visible: isMobileQuestDockVisibleToUser1 };
            tmp2 = closure_1_24(tmp8, obj7);
            cResult[7] = isMobileQuestDockVisibleToUser1;
            decisionId = decisionId.decisionId;
            cResult[8] = decisionId;
            cResult[9] = tmp2;
          }
        }
        let tmp23 = tmp27;
      } else {
        if (cResult[10] === tmp13) {
          if (cResult[11] === tmp7) {
            tmp23 = cResult[12];
          }
        }
        const obj8 = { value: tmp7, children: tmp13 };
        const tmp25 = closure_1_24(tmp8(14980).Provider, obj8);
        cResult[10] = tmp13;
        cResult[11] = tmp7;
        cResult[12] = tmp25;
        tmp23 = tmp25;
      }
      return tmp23;
    }
    const tmpResult = QuestHooks;
  }
  const obj9 = { isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser };
  cResult[0] = isMobileQuestDockRenderedBase;
  cResult[1] = isMobileQuestDockVisibleToUser;
  cResult[2] = obj9;
  tmp7 = obj9;
}) : (function QuestDockWithVisibilityContext() {
  mobileQuestDock = mobileQuestDock(isMobileQuestDockVisibleToUser[50]).useMobileQuestDock();
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  const isMobileQuestDockRenderedBase = mobileQuestDock(isMobileQuestDockVisibleToUser[50]).useIsMobileQuestDockRenderedBase(mobileQuestDock);
  let obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  isMobileQuestDockVisibleToUser = mobileQuestDock(isMobileQuestDockVisibleToUser[50]).useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const memo = noop.useMemo(() => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }), items);
  const obj3 = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  const tmp7Result = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[63])(mobileQuestDock(isMobileQuestDockVisibleToUser[38]).AdPlacement.MOBILE_HOME_DOCK_AREA, "QuestDockWithVisibilityContext");
  const tmp9 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[64])();
  const tmp10 = !tmp9;
  const tmp7 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[63]);
  const items1 = [mobileQuestDock];
  const isMobileQuestDockVisibleToUser1 = mobileQuestDock(isMobileQuestDockVisibleToUser[50]).useIsMobileQuestDockVisibleToUser(mobileQuestDock, tmp10);
  const memo1 = noop.useMemo(() => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj2 = { bounty: mobileQuestDock.bounty };
      return closure_2_24(closure_55, obj2);
    } else if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj = { quest: mobileQuestDock.quest };
      return closure_2_24(closure_54, obj);
    } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
      return null;
    }
  }, items1);
  if (mobileQuestDock.type === mobileQuestDock(isMobileQuestDockVisibleToUser[43]).AdCreativeType.NO_FILL) {
    let tmp16 = null;
    if (null != tmp7Result) {
      tmp16 = null;
      if (!tmp9) {
        const obj5 = { decisionId: tmp7Result.decisionId, visible: isMobileQuestDockVisibleToUser1 };
        tmp16 = closure_24(tmp6(tmp[65]), obj5);
      }
    }
    let tmp14 = tmp16;
  } else {
    const obj6 = { value: memo, children: memo1 };
    tmp14 = closure_24(tmp6(tmp[45]).Provider, obj6);
  }
  return tmp14;
}));
export const QuestDockQuestContent = tmp11;