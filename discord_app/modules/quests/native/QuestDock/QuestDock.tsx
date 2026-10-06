// === Module 15000: QuestDock ===

// Module 15000 (QuestDock)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5416 */;
import MetricEvents from "MetricEvents" /* 5421 */;
import spring from "spring" /* 5604 */;
import springPresets from "springPresets" /* 5605 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6440 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10924 */;
import QuestContentImpressionTracker from "QuestContentImpressionTracker" /* 10971 */;
import QuestHooks from "QuestHooks" /* 14908 */;
import QuestDockUtils from "QuestDockUtils" /* 14911 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 14913 */;
import reactDefault from "react" /* 14999 */;
import QuestDockBountyHeaderDefault from "QuestDockBountyHeader" /* 15028 */;
import QuestDockBountyBodyDefault from "QuestDockBountyBody" /* 15031 */;
import QuestDockBountyBackgroundDefault from "QuestDockBountyBackground" /* 15033 */;
import useNoFillDecisionDefault from "useNoFillDecision" /* 15034 */;
import NoFillQuestDockDefault from "NoFillQuestDock" /* 15036 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestDockStore from "QuestDockStore" /* 14910 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import QuestDockConstants from "QuestDockConstants" /* 14912 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3, c5, c6, expandedHeight, importDefault;

let StyleSheet;
let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_24;
let closure_25;
let closure_26;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let unpackModuleId;
let closure_3 = ["mode"];
let closure_4 = ["mode"];
({ View: c9, StyleSheet, Pressable: c10, Image: unpackModuleId } = react_native);
({ QuestDockMode: map1, QuestsExperimentLocations: closure_14 } = QuestConstants);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_15, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_16, QUEST_DOCK_CONTENT_BORDER_RADII: closure_17, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18, QUEST_DOCK_COLLAPSED_HEIGHT: closure_19, QUEST_DOCK_LANDSCAPE_MEDIA_EXPANDED_HEIGHT: closure_20, QUEST_DOCK_PORTRAIT_MEDIA_EXPANDED_HEIGHT: closure_21 } = QuestDockConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const ThemeTypes = Constants2.ThemeTypes;
({ jsx: closure_24, jsxs: closure_25, Fragment: closure_26 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { position: "absolute", left: "50%", bottom: 0, zIndex: 1 }, accessibilityWrapper: obj2, questDockWrapper: rect, questDockContentWrapper: obj3, questDockHeaderBorder: obj4, nestedPressable: obj5 };
obj2 = { zIndex: 1 };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", bottom: 0, left: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, zIndex: 1 };
obj3 = { justifyContent: "flex-end", zIndex: 4 };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { bottom: undefined, right: undefined, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, zIndex: 5 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { zIndex: 6 };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_27 = createStyles(obj);
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
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_44 = ReactCompilerGating.isReactCompilerEnabled() ? ((backgroundColor) => {
  let accessibilityWrapper;
  let backgroundContent;
  let closure_1;
  let collapsedContent;
  let expandedContent;
  let layoutVariant;
  let questDockExpandHandler;
  let top;
  let withAndroidOffscreenAlphaCompositingWorkaround;
  let wrapper;
  const tmp = backgroundColor;
  let obj = backgroundColor(questDockExpandHandler[14]);
  const cResult = obj.c(83);
  backgroundColor = backgroundColor.backgroundColor;
  ({ layoutVariant, expandedHeight, collapsedContent, expandedContent, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround } = backgroundColor);
  let tmp4 = undefined !== withAndroidOffscreenAlphaCompositingWorkaround && withAndroidOffscreenAlphaCompositingWorkaround;
  if (cResult[0] !== tmp4) {
    let isAndroidResult = tmp4;
    if (isAndroidResult) {
      const tmpResult = tmp(questDockExpandHandler[15]);
      isAndroidResult = tmpResult.isAndroid();
    }
    let num = 0;
    cResult[0] = tmp4;
    let num2 = 1;
    cResult[1] = isAndroidResult;
  }
  let tmp7 = "insetHeader" === layoutVariant;
  importDefault = tmp7;
  const tmpResult17 = tmp(questDockExpandHandler[16]);
  const questDockCreative = tmpResult17.useQuestDockCreative();
  const tmpResult18 = tmp(questDockExpandHandler[17]);
  questDockExpandHandler = tmpResult18.useQuestDockExpandHandler(questDockCreative);
  const tmp11 = closure_27();
  const context = top.useContext(tmp(tmp2[18]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = top.useContext(tmp(tmp2[19]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  const id = top.useId();
  if (cResult[2] !== setRestingQuestDockMode) {
    class A {
      constructor() {
        setRestingQuestDockMode(map1.COLLAPSED);
      }
    }
    cResult[2] = setRestingQuestDockMode;
    cResult[3] = A;
  } else {
    class A {
      constructor() {
        setRestingQuestDockMode(map1.COLLAPSED);
      }
    }
  }
  const tmpResult19 = tmp(questDockExpandHandler[17]);
  const questDockModeAnimatedReaction = tmpResult19.useQuestDockModeAnimatedReaction();
  const tmpResult20 = tmp(questDockExpandHandler[17]);
  const questDockDismissalReset = tmpResult20.useQuestDockDismissalReset();
  const tmpResult21 = tmp(questDockExpandHandler[20]);
  const isScreenReaderEnabled = tmpResult21.useIsScreenReaderEnabled();
  function ie() {
    return restingQuestDockMode.get() === map1.EXPANDED;
  }
  let obj2 = { restingQuestDockMode, QuestDockMode };
  ie.__closure = obj2;
  ie.__workletHash = 2415817673061;
  ie.__initData = __initData;
  const tmpResult22 = tmp(questDockExpandHandler[21]);
  const derivedValue = tmpResult22.useDerivedValue(ie);
  require("useStateFromSharedValue")(derivedValue);
  top = require("useSafeAreaInsets")().top;
  const tmpResult23 = tmp(questDockExpandHandler[24]);
  const youBarTotalHeight = tmpResult23.useYouBarTotalHeight();
  const tmpResult24 = tmp(questDockExpandHandler[25]);
  const token = tmpResult24.useToken(require("native").modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp25 = require("useQuestDockAnimatedBorderRadius")(token);
  let closure_10 = tmp25;
  function re() {
    let items;
    let obj2;
    let obj3;
    let obj4;
    let obj8;
    let withSpring;
    let x;
    size = { backgroundColor, borderBottomRightRadius: obj2.withSpring(closure_10.get(), closure_16), borderBottomLeftRadius: obj3.withSpring(closure_10.get(), closure_16), height: questDockWrapperSpecs.get().height, width: questDockWrapperSpecs.get().width, opacity: obj4.withSpring(1, closure_15), transform: items };
    obj2 = spring;
    obj3 = spring;
    obj4 = spring;
    const obj = { translateX: withSpring(x + -1 * obj6.roundToNearestPixel(questDockWrapperSpecs.get().width / 2), closure_15) };
    withSpring = spring.withSpring;
    spring;
    x = questDockWrapperSpecs.get().x;
    items = [obj, ];
    obj6 = QuestDockUtils;
    const obj5 = { translateY: obj8.withSpring(questDockWrapperSpecs.get().y, closure_15) };
    items[1] = obj5;
    obj8 = spring;
    return size;
  }
  const tmpResult25 = tmp(questDockExpandHandler[21]);
  let obj3 = { backgroundColor, withSpring: tmp(tmp2[27]).withSpring, bottomBorderRadius: tmp25, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: tmp(tmp2[28]).roundToNearestPixel };
  re.__closure = obj3;
  re.__workletHash = 9565489600157;
  re.__initData = __initData2;
  const animatedStyle = tmpResult25.useAnimatedStyle(re);
  const tmpResult26 = tmp(questDockExpandHandler[21]);
  const sharedValue = tmpResult26.useSharedValue(0);
  function se() {
    let interpolateResult;
    let items;
    let withSpring;
    const obj = { transform: items };
    const obj2 = { scale: withSpring(interpolateResult, springPresets.springStandard) };
    withSpring = spring.withSpring;
    spring;
    const obj3 = ReanimatedRexport;
    items = [obj2];
    interpolateResult = obj3.interpolate(sharedValue.get(), [1, 0], [1, 1]);
    return obj;
  }
  const tmpResult27 = tmp(questDockExpandHandler[21]);
  let obj4 = { withSpring: tmp(tmp2[27]).withSpring, interpolate: tmp(tmp2[21]).interpolate, isPressed: sharedValue, springStandard: tmp(tmp2[29]).springStandard };
  se.__closure = obj4;
  se.__workletHash = 3373473585356;
  se.__initData = __initData3;
  const animatedStyle1 = tmpResult27.useAnimatedStyle(se);
  const tmp21 = importDefault;
  if (cResult[4] === questDockExpandHandler) {
    class A {
      constructor() {
        setRestingQuestDockMode(map1.COLLAPSED);
      }
    }
    if (cResult[7] !== sharedValue) {
      class A {
        constructor() {
          setRestingQuestDockMode(map1.COLLAPSED);
        }
      }
      let num5 = 7;
      cResult[7] = sharedValue;
      let num6 = 8;
      class Ae {
        constructor() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (activeQuestDockMode.get() === map1.EXPANDED) {
            num = 1;
          }
          const obj = { opacity: withSpring(num, closure_15), height: windowDimensions.get().height };
          return obj;
        }
      }
    } else {
      class A {
        constructor() {
          setRestingQuestDockMode(map1.COLLAPSED);
        }
      }
    }
    if (cResult[9] !== sharedValue) {
      class Ce {
        constructor() {
          const result = sharedValue.set(0);
        }
      }
      let num7 = 9;
      cResult[9] = sharedValue;
      let num8 = 10;
      class Ae {
        constructor() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (activeQuestDockMode.get() === map1.EXPANDED) {
            num = 1;
          }
          const obj = { opacity: withSpring(num, closure_15), height: windowDimensions.get().height };
          return obj;
        }
      }
    } else {
      class Ce {
        constructor() {
          const result = sharedValue.set(0);
        }
      }
    }
    const tmpResult28 = tmp(questDockExpandHandler[21]);
    class Ae {
      constructor() {
        const withSpring = spring.withSpring;
        let num = 0;
        spring;
        if (activeQuestDockMode.get() === map1.EXPANDED) {
          num = 1;
        }
        const obj = { opacity: withSpring(num, closure_15), height: windowDimensions.get().height };
        return obj;
      }
    }
    let obj5 = { withSpring: tmp(tmp2[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, windowDimensions };
    const useAnimatedStyle = tmpResult28.useAnimatedStyle;
    Ae.__closure = obj5;
    let num9 = 6178969276321;
    Ae.__workletHash = 6178969276321;
    Ae.__initData = __initData4;
    const animatedStyle2 = useAnimatedStyle(Ae);
    const tmpResult29 = tmp(questDockExpandHandler[21]);
    class Te {
      constructor() {
        let pointerEvents = "none";
        if (activeQuestDockMode.get() === map1.EXPANDED) {
          pointerEvents = "auto";
        }
        return { pointerEvents };
      }
    }
    obj6 = { activeQuestDockMode, QuestDockMode };
    Te.__closure = obj6;
    Te.__workletHash = 17271982627769;
    Te.__initData = __initData5;
    const animatedProps = tmpResult29.useAnimatedProps(Te);
    const tmpResult30 = tmp(questDockExpandHandler[21]);
    class Qe {
      constructor() {
        const value = questDockWrapperSpecs.get();
        return windowDimensions.get().height - top - value.height;
      }
    }
    const obj7 = { questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
    Qe.__closure = obj7;
    Qe.__workletHash = 8073454569923;
    Qe.__initData = __initData6;
    const derivedValue1 = tmpResult30.useDerivedValue(Qe);
    tmp21(questDockExpandHandler[22])(derivedValue1);
    const tmpResult31 = tmp(questDockExpandHandler[21]);
    class Ie {
      constructor() {
        let num;
        const withSpring = spring.withSpring;
        spring;
        if (activeQuestDockMode.get() === map1.CLOSED) {
          num = 0;
        } else {
          num = 1;
        }
        const obj2 = { opacity: withSpring(num, closure_15) };
        return obj2;
      }
    }
    let obj8 = { withSpring: tmp(tmp2[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
    const useAnimatedStyle2 = tmpResult31.useAnimatedStyle;
    Ie.__closure = obj8;
    Ie.__workletHash = 6468803634518;
    Ie.__initData = __initData7;
    const animatedStyle21 = useAnimatedStyle2(Ie);
    function me() {
      if (closure_1) {
        let tmp4;
        if (activeQuestDockMode.get() === map1.EXPANDED) {
          tmp4 = closure_17;
        }
        size = { borderTopLeftRadius: tmp4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
        if (closure_1) {
          let tmp7;
          if (activeQuestDockMode.get() === map1.EXPANDED) {
            tmp7 = closure_17;
          }
          size.borderTopRightRadius = tmp7;
          if (closure_1) {
            let value2;
            if (activeQuestDockMode.get() === map1.EXPANDED) {
              value2 = closure_17;
            }
            size.borderBottomLeftRadius = value2;
            if (closure_1) {
              let value;
              if (activeQuestDockMode.get() === map1.EXPANDED) {
                value = closure_17;
              }
              size.borderBottomRightRadius = value;
              const withSpring = spring.withSpring;
              let num2 = 1;
              spring;
              if (activeQuestDockMode.get() === map1.EXPANDED) {
                num2 = 0;
              }
              size.opacity = withSpring(num2, closure_16);
              if (activeQuestDockMode.get() === map1.EXPANDED) {
                let height;
                if (closure_1) {
                  height = closure_19;
                }
                size.height = height;
                if (activeQuestDockMode.get() === map1.EXPANDED) {
                  let width;
                  if (closure_1) {
                    width = questDockWrapperSpecs.get().width - 2 * authStore4;
                  }
                  size.width = width;
                  let num5 = 0;
                  if (closure_1) {
                    const withSpring2 = spring.withSpring;
                    let num6 = 0;
                    spring;
                    if (activeQuestDockMode.get() === map1.EXPANDED) {
                      num6 = authStore4;
                    }
                    num5 = withSpring2(num6, closure_16);
                  }
                  const items = [{ translateX: num5 }, ];
                  let num7 = 0;
                  const obj = { translateX: num5 };
                  if (closure_1) {
                    const withSpring3 = spring.withSpring;
                    let num8 = 0;
                    spring;
                    if (activeQuestDockMode.get() === map1.EXPANDED) {
                      num8 = authStore4;
                    }
                    num7 = withSpring3(num8, closure_16);
                  }
                  const obj3 = { translateY: num7 };
                  items[1] = obj3;
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
    const obj9 = { hasInsetHeaderTile: tmp7, activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp25, withSpring: tmp(questDockExpandHandler[27]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18 };
    const useAnimatedStyle3 = tmp(tmp2[21]).useAnimatedStyle;
    tmp(questDockExpandHandler[21]);
    me.__closure = obj9;
    me.__workletHash = 13161475723910;
    me.__initData = __initData8;
    const animatedStyle3 = useAnimatedStyle3(me);
    ({ wrapper, accessibilityWrapper } = tmp11);
    const tmp51 = isScreenReaderEnabled;
    if (tmp51) {
      class Ce {
        constructor() {
          const result = sharedValue.set(0);
        }
      }
    }
    const diff = youBarTotalHeight - 1;
    if (cResult[11] !== diff) {
      class Ce {
        constructor() {
          const result = sharedValue.set(0);
        }
      }
      tmp54[0] = diff;
      cResult[11] = diff;
      class Ae {
        constructor() {
          const withSpring = spring.withSpring;
          let num = 0;
          spring;
          if (activeQuestDockMode.get() === map1.EXPANDED) {
            num = 1;
          }
          const obj = { opacity: withSpring(num, closure_15), height: windowDimensions.get().height };
          return obj;
        }
      }
      cResult[12] = tmp54;
    } else {
      class Ce {
        constructor() {
          const result = sharedValue.set(0);
        }
      }
    }
    if (cResult[13] === animatedStyle) {
      class Ce {
        constructor() {
          const result = sharedValue.set(0);
        }
      }
    }
    let items = [tmp11.questDockWrapper, tmp54, animatedStyle];
    cResult[13] = animatedStyle;
    cResult[14] = tmp11.questDockWrapper;
    cResult[15] = tmp54;
    cResult[16] = items;
  }
  function ne() {
    setRestingQuestDockMode(map1.EXPANDED);
    questDockExpandHandler();
  }
  cResult[4] = questDockExpandHandler;
  cResult[5] = setRestingQuestDockMode;
  cResult[6] = ne;
}) : ((backgroundColor) => {
  let AccessibilityViewAnimated;
  let backgroundContent;
  let closure_1;
  let collapsedContent;
  let expandedContent;
  let intl;
  let items10;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let layoutVariant;
  let obj25;
  let obj27;
  let obj34;
  let obj36;
  let questDockExpandHandler;
  let str3;
  let str4;
  let tmp19Result;
  let tmp19Result7;
  let tmp40;
  let top;
  let withAndroidOffscreenAlphaCompositingWorkaround;
  backgroundColor = backgroundColor.backgroundColor;
  ({ layoutVariant, withAndroidOffscreenAlphaCompositingWorkaround } = backgroundColor);
  let isAndroidResult = undefined !== withAndroidOffscreenAlphaCompositingWorkaround;
  ({ expandedHeight, collapsedContent, expandedContent, backgroundContent } = backgroundColor);
  if (isAndroidResult) {
    isAndroidResult = withAndroidOffscreenAlphaCompositingWorkaround;
  }
  if (isAndroidResult) {
    let obj = backgroundColor(questDockExpandHandler[15]);
    isAndroidResult = obj.isAndroid();
  }
  let tmp4 = "insetHeader" === layoutVariant;
  importDefault = tmp4;
  let str = "fixed";
  if ("flush" === layoutVariant) {
    str = "content";
  }
  let str2 = "overlay";
  if ("flush" === layoutVariant) {
    str2 = "default";
  }
  let tmp7 = questDockExpandHandler;
  let obj2 = backgroundColor(questDockExpandHandler[16]);
  const questDockCreative = obj2.useQuestDockCreative();
  let obj3 = backgroundColor(questDockExpandHandler[17]);
  questDockExpandHandler = obj3.useQuestDockExpandHandler(questDockCreative);
  const tmp10 = closure_27();
  const context = top.useContext(backgroundColor(questDockExpandHandler[18]).QuestDockGestureContext);
  const questDockWrapperSpecs = context.questDockWrapperSpecs;
  const activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const context1 = top.useContext(backgroundColor(questDockExpandHandler[19]).QuestDockExternalCoordinationContext);
  const restingQuestDockMode = context1.restingQuestDockMode;
  const setRestingQuestDockMode = context1.setRestingQuestDockMode;
  let items = [setRestingQuestDockMode];
  const id = top.useId();
  const callback = top.useCallback(() => {
    setRestingQuestDockMode(map1.COLLAPSED);
  }, items);
  let obj4 = backgroundColor(questDockExpandHandler[17]);
  const questDockModeAnimatedReaction = obj4.useQuestDockModeAnimatedReaction();
  let obj5 = backgroundColor(questDockExpandHandler[17]);
  const questDockDismissalReset = obj5.useQuestDockDismissalReset();
  obj6 = backgroundColor(questDockExpandHandler[20]);
  const isScreenReaderEnabled = obj6.useIsScreenReaderEnabled();
  const obj7 = backgroundColor(questDockExpandHandler[21]);
  class W {
    constructor() {
      return restingQuestDockMode.get() === map1.EXPANDED;
    }
  }
  let obj8 = { restingQuestDockMode, QuestDockMode };
  W.__closure = obj8;
  W.__workletHash = 7060288082029;
  W.__initData = __initData9;
  const derivedValue = obj7.useDerivedValue(W);
  const tmp20 = require("useStateFromSharedValue")(derivedValue);
  top = require("useSafeAreaInsets")().top;
  const obj9 = backgroundColor(questDockExpandHandler[24]);
  const youBarTotalHeight = obj9.useYouBarTotalHeight();
  const obj10 = backgroundColor(questDockExpandHandler[25]);
  const token = obj10.useToken(require("native").modules.mobile.QUEST_DOCK_BORDER_RADIUS);
  const tmp23 = require("useQuestDockAnimatedBorderRadius")(token);
  let closure_10 = tmp23;
  const obj11 = backgroundColor(questDockExpandHandler[21]);
  class Z {
    constructor() {
      let items;
      let obj2;
      let obj3;
      let obj4;
      let obj8;
      let withSpring;
      let x;
      size = { backgroundColor, borderBottomRightRadius: obj2.withSpring(closure_10.get(), closure_16), borderBottomLeftRadius: obj3.withSpring(closure_10.get(), closure_16), height: questDockWrapperSpecs.get().height, width: questDockWrapperSpecs.get().width, opacity: obj4.withSpring(1, closure_15), transform: items };
      obj2 = spring;
      obj3 = spring;
      obj4 = spring;
      const obj = { translateX: withSpring(x + -1 * obj6.roundToNearestPixel(questDockWrapperSpecs.get().width / 2), closure_15) };
      withSpring = spring.withSpring;
      spring;
      x = questDockWrapperSpecs.get().x;
      items = [obj, ];
      obj6 = QuestDockUtils;
      const obj5 = { translateY: obj8.withSpring(questDockWrapperSpecs.get().y, closure_15) };
      items[1] = obj5;
      obj8 = spring;
      return size;
    }
  }
  Z.__closure = { backgroundColor, withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, bottomBorderRadius: tmp23, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[28]).roundToNearestPixel };
  Z.__workletHash = 11927010554990;
  Z.__initData = __initData10;
  ({ backgroundColor, withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, bottomBorderRadius: tmp23, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, questDockWrapperSpecs, QUEST_DOCK_MODE_CHANGE_PHYSICS, roundToNearestPixel: backgroundColor(questDockExpandHandler[28]).roundToNearestPixel });
  const animatedStyle = obj11.useAnimatedStyle(Z);
  const obj13 = backgroundColor(questDockExpandHandler[21]);
  const sharedValue = obj13.useSharedValue(0);
  function ee() {
    let interpolateResult;
    let items;
    let withSpring;
    const obj = { transform: items };
    const obj2 = { scale: withSpring(interpolateResult, springPresets.springStandard) };
    withSpring = spring.withSpring;
    spring;
    const obj3 = ReanimatedRexport;
    items = [obj2];
    interpolateResult = obj3.interpolate(sharedValue.get(), [1, 0], [1, 1]);
    return obj;
  }
  const obj14 = backgroundColor(questDockExpandHandler[21]);
  ee.__closure = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, interpolate: backgroundColor(questDockExpandHandler[21]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[29]).springStandard };
  ee.__workletHash = 5840865258847;
  ee.__initData = __initData11;
  const items1 = [setRestingQuestDockMode, questDockExpandHandler];
  ({ withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, interpolate: backgroundColor(questDockExpandHandler[21]).interpolate, isPressed: sharedValue, springStandard: backgroundColor(questDockExpandHandler[29]).springStandard });
  const animatedStyle1 = obj14.useAnimatedStyle(ee);
  const items2 = [sharedValue];
  const callback1 = top.useCallback(() => {
    setRestingQuestDockMode(map1.EXPANDED);
    questDockExpandHandler();
  }, items1);
  const items3 = [sharedValue];
  const callback2 = top.useCallback(() => {
    const result = sharedValue.set(1);
  }, items2);
  const callback3 = top.useCallback(() => {
    const result = sharedValue.set(0);
  }, items3);
  function te() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (activeQuestDockMode.get() === map1.EXPANDED) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, closure_15), height: windowDimensions.get().height };
    return obj;
  }
  const obj16 = backgroundColor(questDockExpandHandler[21]);
  te.__closure = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, windowDimensions };
  te.__workletHash = 11488074451286;
  te.__initData = __initData12;
  ({ withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, windowDimensions });
  const animatedStyle2 = obj16.useAnimatedStyle(te);
  function oe() {
    let pointerEvents = "none";
    if (activeQuestDockMode.get() === map1.EXPANDED) {
      pointerEvents = "auto";
    }
    return { pointerEvents };
  }
  oe.__closure = { activeQuestDockMode, QuestDockMode };
  oe.__workletHash = 6944577019790;
  oe.__initData = __initData13;
  const obj18 = backgroundColor(questDockExpandHandler[21]);
  const animatedProps = obj18.useAnimatedProps(oe);
  function ie() {
    const value = questDockWrapperSpecs.get();
    return windowDimensions.get().height - top - value.height;
  }
  ie.__closure = { questDockWrapperSpecs, windowDimensions, safeAreaTop: top };
  ie.__workletHash = 14953270062704;
  ie.__initData = __initData14;
  const obj19 = backgroundColor(questDockExpandHandler[21]);
  const derivedValue1 = obj19.useDerivedValue(ie);
  function re() {
    let num;
    const withSpring = spring.withSpring;
    spring;
    if (activeQuestDockMode.get() === map1.CLOSED) {
      num = 0;
    } else {
      num = 1;
    }
    const obj2 = { opacity: withSpring(num, closure_15) };
    return obj2;
  }
  const tmp33 = require("useStateFromSharedValue")(derivedValue1);
  const obj20 = backgroundColor(questDockExpandHandler[21]);
  re.__closure = { withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  re.__workletHash = 2744133111557;
  re.__initData = __initData15;
  ({ withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle3 = obj20.useAnimatedStyle(re);
  function se() {
    if (closure_1) {
      let tmp4;
      if (activeQuestDockMode.get() === map1.EXPANDED) {
        tmp4 = closure_17;
      }
      size = { borderTopLeftRadius: tmp4, borderTopRightRadius: null, borderBottomLeftRadius: null, borderBottomRightRadius: null, opacity: null, height: null, width: null, transform: null, borderBottomWidth: null };
      if (closure_1) {
        let tmp7;
        if (activeQuestDockMode.get() === map1.EXPANDED) {
          tmp7 = closure_17;
        }
        size.borderTopRightRadius = tmp7;
        if (closure_1) {
          let value2;
          if (activeQuestDockMode.get() === map1.EXPANDED) {
            value2 = closure_17;
          }
          size.borderBottomLeftRadius = value2;
          if (closure_1) {
            let value;
            if (activeQuestDockMode.get() === map1.EXPANDED) {
              value = closure_17;
            }
            size.borderBottomRightRadius = value;
            const withSpring = spring.withSpring;
            let num2 = 1;
            spring;
            if (activeQuestDockMode.get() === map1.EXPANDED) {
              num2 = 0;
            }
            size.opacity = withSpring(num2, closure_16);
            if (activeQuestDockMode.get() === map1.EXPANDED) {
              let height;
              if (closure_1) {
                height = closure_19;
              }
              size.height = height;
              if (activeQuestDockMode.get() === map1.EXPANDED) {
                let width;
                if (closure_1) {
                  width = questDockWrapperSpecs.get().width - 2 * authStore4;
                }
                size.width = width;
                let num5 = 0;
                if (closure_1) {
                  const withSpring2 = spring.withSpring;
                  let num6 = 0;
                  spring;
                  if (activeQuestDockMode.get() === map1.EXPANDED) {
                    num6 = authStore4;
                  }
                  num5 = withSpring2(num6, closure_16);
                }
                const items = [{ translateX: num5 }, ];
                let num7 = 0;
                const obj = { translateX: num5 };
                if (closure_1) {
                  const withSpring3 = spring.withSpring;
                  let num8 = 0;
                  spring;
                  if (activeQuestDockMode.get() === map1.EXPANDED) {
                    num8 = authStore4;
                  }
                  num7 = withSpring3(num8, closure_16);
                }
                const obj3 = { translateY: num7 };
                items[1] = obj3;
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
  se.__closure = { hasInsetHeaderTile: tmp4, activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp23, withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18 };
  se.__workletHash = 7661128291673;
  se.__initData = __initData16;
  const obj24 = { style: tmp10.wrapper, pointerEvents: "auto", children: closure_24(AccessibilityViewAnimated, obj25) };
  ({ hasInsetHeaderTile: tmp4, activeQuestDockMode, QuestDockMode, QUEST_DOCK_CONTENT_BORDER_RADII, questDockBorderRadius: token, bottomBorderRadius: tmp23, withSpring: backgroundColor(questDockExpandHandler[27]).withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, QUEST_DOCK_COLLAPSED_HEIGHT, questDockWrapperSpecs, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_18 });
  const animatedStyle4 = obj22.useAnimatedStyle(se);
  obj25 = { nativeID: id, style: tmp10.accessibilityWrapper, accessibilityViewIsModal: tmp40, onAccessibilityEscape: callback, pointerEvents: "box-none", children: closure_24(tmp19Result, obj34) };
  tmp40 = isScreenReaderEnabled;
  AccessibilityViewAnimated = backgroundColor(questDockExpandHandler[36]).AccessibilityViewAnimated;
  if (tmp40) {
    tmp40 = tmp20;
  }
  const obj26 = { style: animatedStyle1, children: closure_25(tmp19Result7, obj27) };
  tmp19Result = require("QuestDockGestureDetector");
  obj27 = { style: items4, layout: backgroundColor(tmp7[28]).dimensionsLayoutTransition, children: items5 };
  items4 = [tmp10.questDockWrapper, , ];
  const obj28 = { bottom: youBarTotalHeight - 1 };
  items4[1] = obj28;
  items4[2] = animatedStyle;
  const tmp19Result6 = require("ReanimatedNativeView");
  tmp19Result7 = require("ReanimatedNativeView");
  const obj29 = { style: tmp10.nestedPressable, onPressIn: callback2, onPressOut: callback3, onPress: callback1, pointerEvents: str3, accessibilityRole: "button", accessibilityLabel: intl.string(backgroundColor(tmp7[30]).t.rjVPdM), accessibilityHint: str4 };
  str3 = "auto";
  const tmp44 = closure_10;
  if (tmp20) {
    str3 = "none";
  }
  intl = tmp6(tmp7[30]).intl;
  str4 = "";
  if (!tmp20) {
    const intl2 = tmp6(tmp7[30]).intl;
    str4 = intl2.string(tmp6(tmp7[30]).t.n0MlOB);
  }
  items5 = [closure_24(tmp44, obj29), , , ];
  const obj30 = { style: items6, layout: backgroundColor(tmp7[28]).dimensionsLayoutTransition, pointerEvents: "none" };
  items6 = [tmp10.questDockHeaderBorder, animatedStyle4];
  const tmp19Result8 = require("ReanimatedNativeView");
  items5[1] = closure_24(tmp19Result8, obj30);
  const obj31 = { style: items7, needsOffscreenAlphaCompositing: isAndroidResult, children: items9 };
  items7 = [tmp10.questDockContentWrapper, animatedStyle3];
  const obj32 = { style: tmp10.questDockContentWrapper, children: items8 };
  items8 = [, ];
  const tmp19Result9 = require("ReanimatedNativeView");
  items8[0] = closure_24(require("QuestDockContentCollapsed"), { hideOnExpand: "flush" === layoutVariant, children: collapsedContent });
  items8[1] = closure_24(require("QuestDockContentExpanded"), { expandedHeightMode: str, expandedHeight, children: expandedContent });
  items9 = [closure_25(token, obj32), backgroundContent];
  let str5 = "no-offscreen-compositing";
  if (isAndroidResult) {
    str5 = "offscreen-compositing";
  }
  const obj33 = { children: items10 };
  obj34 = { children: closure_24(tmp19Result6, obj26) };
  items5[2] = closure_25(tmp19Result9, obj31, str5);
  items5[3] = closure_24(require("QuestDockDragHandle"), { isExpanded: tmp20, variant: str2 });
  items10 = [closure_24(token, obj24), ];
  const obj35 = { style: animatedStyle2, animatedProps, children: closure_24(backgroundColor(tmp7[37]).Backdrop, obj36) };
  obj36 = { onDismiss: callback, accessibleDismissStyle: { height: tmp33 } };
  const tmp19Result10 = require("ReanimatedNativeView");
  items10[1] = closure_24(tmp19Result10, obj35);
  return closure_25(closure_26, obj33);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_45 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] !== mode) {
    mode = mode.mode;
    const tmp8 = _objectWithoutProperties(mode, closure_3);
    cResult[0] = mode;
    cResult[1] = mode;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = mode;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let tmp9;
    if (cResult[4] === tmp5) {
      tmp9 = cResult[5];
    }
    const tmpResult = hooks_QuestHooks;
    const questBarOrDockModeChangeTracking = tmpResult.useQuestBarOrDockModeChangeTracking(tmp9);
    return null;
  }
  const obj2 = { mode: tmp4, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const merged = Object.assign(tmp5);
  cResult[3] = tmp4;
  cResult[4] = tmp5;
  cResult[5] = obj2;
  tmp9 = obj2;
}) : ((mode) => {
  mode = mode.mode;
  const tmp = _objectWithoutProperties(mode, closure_4);
  const obj = { mode, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const useQuestBarOrDockModeChangeTracking = hooks_QuestHooks.useQuestBarOrDockModeChangeTracking;
  hooks_QuestHooks;
  const merged = Object.assign(tmp);
  const questBarOrDockModeChangeTracking = useQuestBarOrDockModeChangeTracking(obj);
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_46 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
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
  const effect = react.useEffect(tmp2, tmp3);
  return null;
}) : (() => {
  const effect = react.useEffect(() => {
    const QuestBarRenderedTriggerPoint = require("QuestBarRenderedTriggerPoint").QuestBarRenderedTriggerPoint;
    QuestBarRenderedTriggerPoint.trigger();
  }, []);
  return null;
});
createStyles = createStyles_mod;
let closure_47 = createStyles.createStyles(() => ({ wrapperAnimated: { position: "absolute", bottom: 0, padding: 0, width: "100%" } }));
let obj6 = { overshootClamping: true, damping: 54 };
const merged4 = Object.assign(springPresets.SUBTLE_SPRING);
const constants2 = { PENDING: "pending", SUCCEEDED: "succeeded", FAILED: "failed" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_50 = ReactCompilerGating.isReactCompilerEnabled() ? ((adCreativeId) => {
  let backgroundImageUrl;
  let closure_6;
  let first;
  let tmp4;
  let obj = adCreativeId(backgroundImageUrl[14]);
  const cResult = obj.c(14);
  adCreativeId = adCreativeId.adCreativeId;
  const adCreativeType = adCreativeId.adCreativeType;
  backgroundImageUrl = adCreativeId.backgroundImageUrl;
  const iconUrl = adCreativeId.iconUrl;
  const trackAssetLoadingFailure = adCreativeId.trackAssetLoadingFailure;
  [first, _slicedToArray] = react.useState(constants2.PENDING);
  if (cResult[0] !== trackAssetLoadingFailure) {
    const fn = function o(arg0) {
      if (trackAssetLoadingFailure != null) {
        tmp(arg0);
      }
    };
    cResult[0] = trackAssetLoadingFailure;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const effectEvent = react.useEffectEvent(tmp4);
  if (cResult[2] === backgroundImageUrl) {
    if (cResult[3] === iconUrl) {
      let tmp6;
      if (cResult[4] === effectEvent) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === backgroundImageUrl) {
        let tmp7;
        if (cResult[7] === iconUrl) {
          tmp7 = cResult[8];
        }
        const effect = react.useEffect(tmp6, tmp7);
        if (cResult[9] === adCreativeId) {
          if (cResult[10] === adCreativeType) {
            let tmp9;
            let tmp10;
            if (cResult[11] === first) {
              tmp9 = cResult[12];
              tmp10 = cResult[13];
            }
            const effect1 = react.useEffect(tmp9, tmp10);
            return first;
          }
        }
        class I {
          constructor() {
            let items;
            if (first === constants.FAILED) {
              const obj = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: items };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["ad_creative_id:" + adCreativeId, , , ];
              const _HermesInternal2 = HermesInternal;
              items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[adCreativeType];
              const _HermesInternal3 = HermesInternal;
              const obj2 = AnalyticsTypes;
              items[2] = "quest_content:" + obj2.getQuestContentName(QuestTypes.QuestContent.QUEST_BAR_MOBILE);
              items[3] = "reason:asset_loading_error";
              increment(obj);
            }
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
      closure_0 = closure_5(function*(arg0) {
        closure_0 = arg0;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c4;
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
                let closure_2 = tmp;
                let closure_1 = tmp4;
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj4 = { value: closure_2_11.prefetch(closure_0), done: false };
                return obj4;
              }
            } else if (1 === c5) {
              c4 = 0;
              closure_1_7(closure_0);
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
          } catch (tmp13) {
            closure_3 = tmp13;
            if (0 === c4) {
              c6 = 3;
              throw tmp13;
            } else {
              c5 = 1;
            }
          }
        }
      });
      prefetchWithErrorReporting = function prefetchWithErrorReporting() {
        return closure_0(...arguments);
      };
      closure_0 = closure_5(function*() {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let tmp;
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
                let closure_1 = tmp4;
                tmp = undefined;
                const items = [];
                if (null != backgroundImageUrl) {
                  items.push(tmp(tmp22));
                }
                if (null != iconUrl) {
                  items.push(tmp(tmp14));
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
              let FAILED;
              tmp = value;
              if (tmp.every(function() { /* body not rendered: F155762 */ })) {
                FAILED = constants.SUCCEEDED;
              } else {
                FAILED = constants.FAILED;
              }
              closure_2_6(FAILED);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp18) {
            c3 = 3;
            throw tmp18;
          }
        }
      });
      tmp = (function preloadQuestDockAssets() {
        return closure_0(...arguments);
      })();
      return;
    }
  }
  cResult[2] = backgroundImageUrl;
  cResult[3] = iconUrl;
  cResult[4] = effectEvent;
  cResult[5] = T;
  tmp6 = T;
}) : ((adCreativeId) => {
  let closure_6;
  let first;
  adCreativeId = adCreativeId.adCreativeId;
  const adCreativeType = adCreativeId.adCreativeType;
  const backgroundImageUrl = adCreativeId.backgroundImageUrl;
  const iconUrl = adCreativeId.iconUrl;
  const trackAssetLoadingFailure = adCreativeId.trackAssetLoadingFailure;
  [first, _slicedToArray] = react.useState(constants2.PENDING);
  let closure_7 = react.useEffectEvent((arg0) => {
    if (trackAssetLoadingFailure != null) {
      tmp(arg0);
    }
  });
  let items = [backgroundImageUrl, iconUrl];
  const effect = react.useEffect(() => {
    function preloadQuestDockAssets() {
      return obj(...arguments);
    }
    function prefetchWithErrorReporting(arg0) {
      return obj(...arguments);
    }
    let obj = function _prefetchWithErrorReporting2() {
      obj = _asyncToGenerator(async (arg0) => {
        let closure_0 = arg0;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c4;
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
                let closure_2 = tmp;
                let closure_1 = tmp4;
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj4 = { value: closure_2_11.prefetch(closure_0), done: false };
                return obj4;
              }
            } else if (1 === c5) {
              c4 = 0;
              closure_1_7(closure_0);
              c6 = 3;
              return { value: false, done: true };
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c4 = 0;
              c6 = 3;
              return { value: true, done: true };
            }
          } catch (tmp13) {
            closure_3 = tmp13;
            if (0 === c4) {
              c6 = 3;
              throw tmp13;
            } else {
              c5 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    obj = function _preloadQuestDockAssets2() {
      obj = _asyncToGenerator(async () => {
        let closure_0;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let tmp;
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
                let closure_1 = tmp4;
                tmp = undefined;
                const items = [];
                if (null != c2) {
                  items.push(prefetchWithErrorReporting(tmp22));
                }
                if (null != c3) {
                  items.push(prefetchWithErrorReporting(tmp14));
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
              obj = { value, done: true };
              return obj;
            } else {
              let FAILED;
              tmp = value;
              if (tmp.every((item) => true === item)) {
                FAILED = constants.SUCCEEDED;
              } else {
                FAILED = constants.FAILED;
              }
              closure_1_6(FAILED);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp18) {
            c3 = 3;
            throw tmp18;
          }
        }
      });
      return obj(...arguments);
    };
    let tmp = !preloadQuestDockAssets();
  }, items);
  const items1 = [first, adCreativeId, adCreativeType];
  const effect1 = react.useEffect(() => {
    let items;
    if (first === constants.FAILED) {
      const obj = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: items };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items = ["ad_creative_id:" + adCreativeId, , , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[adCreativeType];
      const _HermesInternal3 = HermesInternal;
      const obj2 = AnalyticsTypes;
      items[2] = "quest_content:" + obj2.getQuestContentName(QuestTypes.QuestContent.QUEST_BAR_MOBILE);
      items[3] = "reason:asset_loading_error";
      increment(obj);
    }
  }, items1);
  return first;
});
const __initData17 = { code: "function QuestDockTsx17(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,\"animate-always\"),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
const __initData18 = { code: "function QuestDockTsx18(){const{withSpring,isRendered,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isRendered?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isRendered?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_53 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockWithEntranceAnimation(adCreativeId) {
  let adCreativeType;
  let backgroundImageUrl;
  let iconUrl;
  let layoutVariant;
  let renderImpressionTracker;
  let renderModeChangeTracker;
  let stateFromStores;
  let tmp10;
  let tmp14;
  let tmp17;
  let tmp6;
  let tmp7;
  let trackAssetLoadingFailure;
  const tmp2 = adCreativeType;
  let obj = renderModeChangeTracker(adCreativeType[14]);
  const cResult = obj.c(40);
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
  let obj2 = expandedContent;
  const context = expandedContent.useContext(adCreativeId(adCreativeType[45]));
  const isRendered = context.isRendered;
  const isVisibleToUser = context.isVisibleToUser;
  const tmp4 = adCreativeId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores];
    const fn = function s() {
      return stateFromStores.prevRestingQuestDockMode;
    };
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = renderModeChangeTracker(tmp2[46]);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      return performance.now();
    };
    cResult[2] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
  }
  const first = expandedHeight(obj2.useState(tmp10), 1)[0];
  const ref = obj2.useRef(false);
  const tmp13 = closure_47();
  const tmp11 = expandedHeight;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    size = { width: 0, height: 0 };
    cResult[3] = size;
    tmp14 = size;
  } else {
    tmp14 = cResult[3];
  }
  const tmp11Result = tmp11(obj2.useState(tmp14), 2);
  const first1 = tmp11Result[0];
  let closure_16 = tmp11Result[1];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult3 = renderModeChangeTracker(tmp2[47]);
    const isEligibleForQuests = tmpResult3.getIsEligibleForQuests();
    cResult[4] = isEligibleForQuests;
    tmp17 = isEligibleForQuests;
  } else {
    tmp17 = cResult[4];
  }
  const tmpResult4 = renderModeChangeTracker(tmp2[21]);
  class V {
    constructor() {
      let items;
      let num = 0;
      const withSpring = spring.withSpring;
      spring;
      if (isRendered) {
        num = 1;
      }
      let num2 = 0;
      const obj = { opacity: withSpring(num, obj6, "animate-always"), transform: items };
      const withSpring2 = spring.withSpring;
      spring;
      if (!isRendered) {
        num2 = first1.height;
      }
      items = [{ translateY: withSpring2(num2, obj6) }];
      ({ translateY: withSpring2(num2, obj6) });
      return obj;
    }
  }
  let obj3 = { withSpring: renderModeChangeTracker(tmp2[27]).withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: obj6, componentDimensions: first1 };
  V.__closure = obj3;
  V.__workletHash = 7000537051560;
  V.__initData = __initData17;
  const animatedStyle = tmpResult4.useAnimatedStyle(V);
  if (cResult[5] === adCreativeId) {
    if (cResult[6] === adCreativeType) {
      if (cResult[7] === backgroundImageUrl) {
        if (cResult[8] === iconUrl) {
          let tmp26;
          let tmp25;
          let tmp23 = !tmp17;
          if (tmp17) {
            tmp23 = tmp22 !== constants2.SUCCEEDED;
          }
          let closure_17 = tmp23;
          if (cResult[11] !== tmp23) {
            const fn3 = function z() {
              let obj = QuestActionCreators;
              const obj2 = { isEligibleToBeVisible: !closure_17 };
              let result = obj.updateQuestDockVisibilityEligibility(obj2);
              return () => {
                const obj = renderModeChangeTracker(adCreativeType[48]);
                const result = obj.updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
              };
            };
            const items1 = [tmp23];
            cResult[11] = tmp23;
            cResult[12] = fn3;
            cResult[13] = items1;
            tmp26 = items1;
            tmp25 = fn3;
          } else {
            tmp25 = cResult[12];
            tmp26 = cResult[13];
          }
          const effect = obj2.useEffect(tmp25, tmp26);
          let tmp28 = null;
          if (!tmp23) {
            if (cResult[14] === animatedStyle) {
              let tmp29;
              if (cResult[15] === tmp13.wrapperAnimated) {
                tmp29 = cResult[16];
              }
              if (cResult[17] === adCreativeId) {
                if (cResult[18] === adCreativeType) {
                  let tmp30;
                  if (cResult[19] === first) {
                    tmp30 = cResult[20];
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
                                    let tmp31;
                                    if (cResult[30] === withAndroidOffscreenAlphaCompositingWorkaround) {
                                      tmp31 = cResult[31];
                                    }
                                    if (cResult[32] === isVisibleToUser) {
                                      if (cResult[33] === renderImpressionTracker) {
                                        let tmp32;
                                        if (cResult[34] === tmp31) {
                                          tmp32 = cResult[35];
                                        }
                                        if (cResult[36] === tmp32) {
                                          if (cResult[37] === tmp29) {
                                            let tmp34;
                                            if (cResult[38] === tmp30) {
                                              tmp34 = cResult[39];
                                            }
                                            tmp28 = tmp34;
                                          }
                                        }
                                        let obj4 = { pointerEvents: "box-none", style: tmp29, onLayout: tmp30, children: tmp32 };
                                        const tmp36 = closure_24(tmp4(tmp2[21]).View, obj4);
                                        cResult[36] = tmp32;
                                        cResult[37] = tmp29;
                                        cResult[38] = tmp30;
                                        cResult[39] = tmp36;
                                        tmp34 = tmp36;
                                      }
                                    }
                                    let obj5 = { children: tmp31, overrideVisibility: isVisibleToUser };
                                    let result = renderImpressionTracker(obj5);
                                    cResult[32] = isVisibleToUser;
                                    cResult[33] = renderImpressionTracker;
                                    cResult[34] = tmp31;
                                    cResult[35] = result;
                                    tmp32 = result;
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
                    let ThemeContextProvider;
                    let items;
                    let obj4;
                    let obj5;
                    const obj = { children: items };
                    items = [, , ];
                    const obj2 = { mode: stateFromStores };
                    items[0] = renderModeChangeTracker(obj2);
                    items[1] = closure_24(closure_46, {});
                    const obj3 = { expandedHeight, children: closure_24(ThemeContextProvider, obj4) };
                    const QuestDockGestureContextProvider = QuestDockGestureContext.QuestDockGestureContextProvider;
                    obj4 = { theme, children: closure_24(closure_44, obj5) };
                    obj5 = { backgroundColor, layoutVariant, expandedHeight, collapsedContent, expandedContent, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround };
                    ThemeContextProvider = native.ThemeContextProvider;
                    items[2] = closure_24(QuestDockGestureContextProvider, obj3);
                    return closure_25(prioritySpeakerDucking, obj);
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
                  tmp31 = de;
                }
              }
              function ae(height) {
                let items;
                size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
                closure_16(size);
                if (!ref.current) {
                  tmp2.current = true;
                  const _Math = Math;
                  if (Math.random() < 0.1) {
                    const _Math2 = Math;
                    const _performance = performance;
                    const rounded = Math.round(performance.now() - first);
                    const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT, tags: items };
                    const distribution = MonitoringAgentDefault.distribution;
                    MonitoringAgentDefault;
                    const _HermesInternal = HermesInternal;
                    items = ["ad_creative_id:" + adCreativeId, ];
                    const _HermesInternal2 = HermesInternal;
                    items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[adCreativeType];
                    distribution(obj, rounded);
                  }
                }
              }
              cResult[17] = adCreativeId;
              cResult[18] = adCreativeType;
              cResult[19] = first;
              cResult[20] = ae;
              tmp30 = ae;
            }
            const items2 = [tmp13.wrapperAnimated, animatedStyle];
            cResult[14] = animatedStyle;
            cResult[15] = tmp13.wrapperAnimated;
            cResult[16] = items2;
            tmp29 = items2;
          }
          return tmp28;
        }
      }
    }
  }
  obj6 = { adCreativeId, adCreativeType, backgroundImageUrl, iconUrl, trackAssetLoadingFailure };
  cResult[5] = adCreativeId;
  cResult[6] = adCreativeType;
  cResult[7] = backgroundImageUrl;
  cResult[8] = iconUrl;
  cResult[9] = trackAssetLoadingFailure;
  cResult[10] = obj6;
}) : (function QuestDockWithEntranceAnimation(adCreativeType) {
  let adCreativeId;
  let backgroundColor;
  let backgroundContent;
  let backgroundImageUrl;
  let closure_10;
  let closure_16;
  let closure_9;
  let collapsedContent;
  let componentDimensions;
  let expandedContent;
  let iconUrl;
  let items2;
  let layoutVariant;
  let mode;
  let obj7;
  let renderImpressionTracker;
  let require;
  let theme;
  let trackAssetLoadingFailure;
  ({ renderModeChangeTracker: require, adCreativeId } = adCreativeType);
  adCreativeType = adCreativeType.adCreativeType;
  ({ layoutVariant: closure_3, theme: closure_4, backgroundColor: _asyncToGenerator, expandedHeight: _slicedToArray, collapsedContent: _objectWithoutProperties, expandedContent: react, backgroundContent: closure_9, withAndroidOffscreenAlphaCompositingWorkaround: closure_10 } = adCreativeType);
  ({ renderImpressionTracker, backgroundImageUrl, iconUrl, trackAssetLoadingFailure } = adCreativeType);
  const tmp2 = adCreativeType;
  const context = react.useContext(adCreativeId(adCreativeType[45]));
  const isRendered = context.isRendered;
  const isVisibleToUser = context.isVisibleToUser;
  let obj2 = require("get initialized");
  let items = [mode];
  mode = obj2.useStateFromStores(items, () => mode.prevRestingQuestDockMode);
  let closure_13 = _slicedToArray(react.useState(() => performance.now()), 1)[0];
  const ref = react.useRef(false);
  const tmp4 = closure_47();
  [componentDimensions, closure_16] = react.useState({ width: 0, height: 0 });
  let obj3 = require("QuestsEligibility");
  const isEligibleForQuests = obj3.getIsEligibleForQuests();
  let obj4 = require("ReanimatedRexport");
  const fn = function o() {
    let items;
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (isRendered) {
      num = 1;
    }
    let num2 = 0;
    const obj = { opacity: withSpring(num, obj6, "animate-always"), transform: items };
    const withSpring2 = spring.withSpring;
    spring;
    if (!isRendered) {
      num2 = first.height;
    }
    items = [{ translateY: withSpring2(num2, obj6) }];
    ({ translateY: withSpring2(num2, obj6) });
    return obj;
  };
  let obj5 = { withSpring: require("spring").withSpring, isRendered, ENTRANCE_ANIMATION_SPING_CONFIG: obj6, componentDimensions };
  fn.__closure = obj5;
  fn.__workletHash = 13272356181063;
  fn.__initData = __initData18;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let tmp10 = !isEligibleForQuests;
  if (isEligibleForQuests) {
    tmp10 = tmp9 !== constants2.SUCCEEDED;
  }
  let closure_17 = tmp10;
  const items1 = [tmp10];
  const effect = react.useEffect(() => {
    let obj = QuestActionCreators;
    const obj2 = { isEligibleToBeVisible: !closure_17 };
    let result = obj.updateQuestDockVisibilityEligibility(obj2);
    return () => {
      const obj = closure_1_0(adCreativeType[48]);
      const result = obj.updateQuestDockVisibilityEligibility({ isEligibleToBeVisible: false });
    };
  }, items1);
  let tmp13 = null;
  if (!tmp10) {
    obj6 = {
      pointerEvents: "box-none",
      style: items2,
      onLayout(height) {
          let items;
          size = { height: height.nativeEvent.layout.height, width: height.nativeEvent.layout.width };
          closure_16(size);
          if (!ref.current) {
            tmp2.current = true;
            const _Math = Math;
            if (Math.random() < 0.1) {
              const _Math2 = Math;
              const _performance = performance;
              const rounded = Math.round(performance.now() - closure_13);
              const obj = { name: MetricEvents.MetricEvents.QUEST_BAR_MOBILE_TIME_TO_FIRST_PAINT, tags: items };
              const distribution = MonitoringAgentDefault.distribution;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["ad_creative_id:" + adCreativeId, ];
              const _HermesInternal2 = HermesInternal;
              items[1] = "ad_creative_type:" + AdCreativeType.AdCreativeType[adCreativeType];
              distribution(obj, rounded);
            }
          }
        },
      children: renderImpressionTracker(obj7)
    };
    items2 = [tmp4.wrapperAnimated, animatedStyle];
    obj7 = {
      children() {
          let ThemeContextProvider;
          let items;
          let obj4;
          let obj5;
          const obj = { children: items };
          items = [, , ];
          const obj2 = { mode };
          items[0] = _require(obj2);
          items[1] = closure_24(closure_46, {});
          const obj3 = { expandedHeight: _slicedToArray, children: closure_24(ThemeContextProvider, obj4) };
          const QuestDockGestureContextProvider = QuestDockGestureContext.QuestDockGestureContextProvider;
          obj4 = { theme, children: closure_24(closure_44, obj5) };
          obj5 = { backgroundColor: _asyncToGenerator, layoutVariant, expandedHeight: _slicedToArray, collapsedContent: _objectWithoutProperties, expandedContent: react, backgroundContent, withAndroidOffscreenAlphaCompositingWorkaround: closure_10 };
          ThemeContextProvider = native.ThemeContextProvider;
          items[2] = closure_24(QuestDockGestureContextProvider, obj3);
          return closure_25(prioritySpeakerDucking, obj);
        },
      overrideVisibility: isVisibleToUser
    };
    const View = adCreativeId(tmp2[21]).View;
    tmp13 = closure_24(View, obj6);
  }
  return tmp13;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockQuestContent(quest) {
  let DARK;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp9;
  let obj = quest(576);
  const cResult = obj.c(27);
  const tmp = quest;
  quest = quest.quest;
  let obj2 = quest(10924);
  const questBarImpressionSurvey = obj2.useQuestBarImpressionSurvey(quest);
  const obj3 = quest(14909);
  const questDockAppThemedBackgroundColor = obj3.useQuestDockAppThemedBackgroundColor();
  const obj4 = quest(14908);
  const staticUrl = obj4.useQuestDockHeroAsset(quest).staticUrl;
  const obj5 = quest(14908);
  const questGameLogotypeAssetUrl = obj5.useQuestGameLogotypeAssetUrl(quest);
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  if (cResult[0] !== quest.id) {
    const fn = function o(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { quest_id: quest.id, source: constants.QUESTS_BAR_MOBILE, asset_id };
      obj.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, obj2);
    };
    cResult[0] = quest.id;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  let str = "insetHeader";
  if (null != enrolledAt) {
    str = "flush";
  }
  if (null == enrolledAt) {
    DARK = ThemeTypes.DARK;
  }
  if (cResult[2] !== (null != enrolledAt)) {
    const tmp14Result = closure_24(questBarImpressionSurvey(null != enrolledAt ? 15007 : 15008), {});
    const tmp14Result3 = closure_24(questBarImpressionSurvey(null != enrolledAt ? 15015 : 15016), {});
    let tmp14Result4 = null;
    if (null == enrolledAt) {
      tmp14Result4 = closure_24(tmp15(15018), {});
    }
    cResult[2] = null != enrolledAt;
    cResult[3] = tmp14Result;
    cResult[4] = tmp14Result3;
    cResult[5] = tmp14Result4;
    tmp13 = tmp14Result4;
    tmp12 = tmp14Result3;
    tmp11 = tmp14Result;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  if (cResult[6] === questBarImpressionSurvey) {
    let tmp19;
    if (cResult[7] === quest) {
      tmp19 = cResult[8];
    }
    if (cResult[9] !== quest.id) {
      class C {
        constructor(mode) {
          const obj = { questId: quest.id, mode: mode.mode };
          return closure_24(closure_45, obj);
        }
      }
      cResult[9] = quest.id;
      cResult[10] = C;
    } else {
      class C {
        constructor(mode) {
          const obj = { questId: quest.id, mode: mode.mode };
          return closure_24(closure_45, obj);
        }
      }
    }
    if (cResult[11] === questDockAppThemedBackgroundColor) {
      class C {
        constructor(mode) {
          const obj = { questId: quest.id, mode: mode.mode };
          return closure_24(closure_45, obj);
        }
      }
    }
    obj6 = { adCreativeId: quest.id, adCreativeType: tmp(5637).AdCreativeType.QUEST, backgroundImageUrl: staticUrl, iconUrl: questGameLogotypeAssetUrl, trackAssetLoadingFailure: tmp9, layoutVariant: str, theme: DARK, backgroundColor: questDockAppThemedBackgroundColor, expandedHeight, collapsedContent: tmp11, expandedContent: tmp12, backgroundContent: tmp13, renderImpressionTracker: tmp19, renderModeChangeTracker: C };
    cResult[11] = questDockAppThemedBackgroundColor;
    cResult[12] = staticUrl;
    cResult[13] = questGameLogotypeAssetUrl;
    cResult[14] = quest.id;
    const tmp25 = closure_24(closure_53, obj6);
    class S {
      constructor(arg0) {
        let children;
        let overrideVisibility;
        ({ children, overrideVisibility } = arg0);
        const obj = { questOrQuests: quest, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, onImpression: questBarImpressionSurvey, children };
        const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
        return closure_24(BillableAdPlacementImpressionTrackerNative, obj);
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
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { questOrQuests: quest, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, onImpression: questBarImpressionSurvey, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return closure_24(BillableAdPlacementImpressionTrackerNative, obj);
    }
  }
  cResult[6] = questBarImpressionSurvey;
  cResult[7] = quest;
  cResult[8] = S;
  tmp19 = S;
}) : (function QuestDockQuestContent(quest) {
  let DARK;
  let str;
  let tmp7Result;
  quest = quest.quest;
  let obj = quest(10924);
  const onImpression = obj.useQuestBarImpressionSurvey(quest);
  let obj2 = quest(14909);
  const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
  const obj3 = quest(14908);
  const staticUrl = obj3.useQuestDockHeroAsset(quest).staticUrl;
  const userStatus = quest.userStatus;
  let enrolledAt;
  const obj4 = quest(14908);
  const questGameLogotypeAssetUrl = obj4.useQuestGameLogotypeAssetUrl(quest);
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const obj5 = { quest, children: closure_24(closure_53, obj6) };
  obj6 = {
    adCreativeId: quest.id,
    adCreativeType: quest(5637).AdCreativeType.QUEST,
    backgroundImageUrl: staticUrl,
    iconUrl: questGameLogotypeAssetUrl,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { quest_id: quest.id, source: constants.QUESTS_BAR_MOBILE, asset_id };
      obj.track(AnalyticEvents.QUEST_ASSET_LOADING_FAILURE, obj2);
    },
    layoutVariant: str,
    theme: DARK,
    backgroundColor: questDockAppThemedBackgroundColor,
    expandedHeight,
    collapsedContent: closure_24(onImpression(null != enrolledAt ? 15007 : 15008), {}),
    expandedContent: closure_24(onImpression(null != enrolledAt ? 15015 : 15016), {}),
    backgroundContent: tmp7Result,
    renderImpressionTracker(arg0) {
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { questOrQuests: quest, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, onImpression, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return closure_24(BillableAdPlacementImpressionTrackerNative, obj);
    },
    renderModeChangeTracker(mode) {
      const obj = { questId: quest.id, mode: mode.mode };
      return closure_24(closure_45, obj);
    }
  };
  const QuestDockQuestProvider = tmp(14940).QuestDockQuestProvider;
  str = "insetHeader";
  if (null != enrolledAt) {
    str = "flush";
  }
  DARK = undefined;
  if (null == enrolledAt) {
    DARK = ThemeTypes.DARK;
  }
  tmp7Result = null;
  if (null == enrolledAt) {
    tmp7Result = closure_24(tmp11(15018), {});
  }
  return closure_24(QuestDockQuestProvider, obj5);
});
let closure_54 = tmp12;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_55 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockBountyContent(bounty) {
  let tmp10;
  let tmp15;
  let tmp19;
  let tmp8;
  let tmp9;
  let obj = bounty(576);
  const cResult = obj.c(22);
  bounty = bounty.bounty;
  let obj2 = bounty(14909);
  const bountyPreviewImageUrl = obj2.useBountyPreviewImageUrl(bounty);
  const obj3 = bounty(14909);
  const questDockAppThemedBackgroundColor = obj3.useQuestDockAppThemedBackgroundColor();
  const obj4 = bounty(15021);
  const questDockBountySmokeCollapsedPlaceholderUrl = obj4.useQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj5 = bounty(15022);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = obj5.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  if (cResult[0] !== bounty.id) {
    const fn = function o(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source: constants.QUESTS_BAR_MOBILE, ad_creative_id: bounty.id, ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY, asset_id };
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, obj2);
    };
    cResult[0] = bounty.id;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp13 = closure_24(QuestDockBountyHeaderDefault, {});
    const tmp14 = closure_24(QuestDockBountyBodyDefault, {});
    cResult[2] = tmp13;
    cResult[3] = tmp14;
    tmp10 = tmp14;
    tmp9 = tmp13;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  if (cResult[4] !== bountyPreviewImageUrl) {
    obj6 = { previewImageUrl: bountyPreviewImageUrl };
    const tmp18 = closure_24(QuestDockBountyBackgroundDefault, obj6);
    cResult[4] = bountyPreviewImageUrl;
    cResult[5] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== bounty.id) {
    const fn2 = function u(arg0) {
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return closure_24(BillableAdPlacementImpressionTrackerNative, obj);
    };
    class D {
      constructor(mode) {
        const obj = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode };
        return closure_24(closure_45, obj);
      }
    }
    cResult[6] = bounty.id;
    cResult[7] = fn2;
    cResult[8] = D;
    tmp19 = fn2;
  } else {
    tmp19 = cResult[7];
    class D {
      constructor(mode) {
        const obj = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode };
        return closure_24(closure_45, obj);
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
                  let tmp21;
                  if (cResult[17] === D) {
                    tmp21 = cResult[18];
                  }
                  class D {
                    constructor(mode) {
                      const obj = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode };
                      return closure_24(closure_45, obj);
                    }
                  }
                  const obj7 = { bounty, children: tmp21 };
                  cResult[19] = bounty;
                  cResult[20] = tmp21;
                  cResult[21] = closure_24(bounty(14940).QuestDockBountyProvider, obj7);
                  const tmp25 = closure_24(bounty(14940).QuestDockBountyProvider, obj7);
                }
              }
            }
          }
        }
      }
    }
  }
  const obj8 = { adCreativeId: bounty.id, adCreativeType: bounty(5637).AdCreativeType.BOUNTY, backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl, iconUrl: bounty.productIcon, trackAssetLoadingFailure: tmp8, layoutVariant: "insetHeader", theme: ThemeTypes.DARK, backgroundColor: questDockAppThemedBackgroundColor, expandedHeight: expandedHeight2, collapsedContent: tmp9, expandedContent: tmp10, backgroundContent: tmp15, withAndroidOffscreenAlphaCompositingWorkaround: isBountiesAndroidQuestBarSmokeAnimationEnabled, renderImpressionTracker: tmp19, renderModeChangeTracker: D };
  const tmp22 = closure_24(closure_53, obj8);
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
}) : (function QuestDockBountyContent(bounty) {
  bounty = bounty.bounty;
  let obj = bounty(14909);
  const bountyPreviewImageUrl = obj.useBountyPreviewImageUrl(bounty);
  let obj2 = bounty(14909);
  const questDockAppThemedBackgroundColor = obj2.useQuestDockAppThemedBackgroundColor();
  const obj3 = bounty(15021);
  const questDockBountySmokeCollapsedPlaceholderUrl = obj3.useQuestDockBountySmokeCollapsedPlaceholderUrl();
  const obj4 = bounty(15022);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = obj4.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  const obj5 = { bounty, children: closure_24(closure_53, obj6) };
  obj6 = {
    adCreativeId: bounty.id,
    adCreativeType: bounty(5637).AdCreativeType.BOUNTY,
    backgroundImageUrl: questDockBountySmokeCollapsedPlaceholderUrl,
    iconUrl: bounty.productIcon,
    trackAssetLoadingFailure(asset_id) {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { source: constants.QUESTS_BAR_MOBILE, ad_creative_id: bounty.id, ad_creative_type: AdCreativeType.AdCreativeType.BOUNTY, asset_id };
      obj.track(AnalyticEvents.AD_ASSET_LOADING_FAILURE, obj2);
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
      let children;
      let overrideVisibility;
      ({ children, overrideVisibility } = arg0);
      const obj = { adContentId: bounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, overrideVisibility, questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, children };
      const BillableAdPlacementImpressionTrackerNative = QuestContentImpressionTracker.BillableAdPlacementImpressionTrackerNative;
      return closure_24(BillableAdPlacementImpressionTrackerNative, obj);
    },
    renderModeChangeTracker(mode) {
      const obj = { adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adContentId: bounty.id, mode: mode.mode };
      return closure_24(closure_45, obj);
    }
  };
  const QuestDockBountyProvider = bounty(14940).QuestDockBountyProvider;
  return closure_24(QuestDockBountyProvider, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockWithVisibilityContext() {
  const obj = react2;
  const cResult = obj.c(13);
  const obj2 = QuestHooks;
  const mobileQuestDock = obj2.useMobileQuestDock();
  const obj3 = QuestHooks;
  const isMobileQuestDockRenderedBase = obj3.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  const obj4 = QuestHooks;
  const isMobileQuestDockVisibleToUser = obj4.useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  if (cResult[0] === isMobileQuestDockRenderedBase) {
    let tmp7;
    let tmp14;
    let tmp23;
    if (cResult[1] === isMobileQuestDockVisibleToUser) {
      tmp7 = cResult[2];
    }
    const tmp9 = useNoFillDecisionDefault;
    const tmp9Result = tmp9(QuestTypes.AdPlacement.MOBILE_HOME_DOCK_AREA, "QuestDockWithVisibilityContext");
    const tmp11 = useIsWindowLargeDefault();
    const tmp12 = !tmp11;
    const tmpResult = QuestHooks;
    const isMobileQuestDockVisibleToUser1 = tmpResult.useIsMobileQuestDockVisibleToUser(mobileQuestDock, tmp12);
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      let tmp19;
      if (cResult[3] !== mobileQuestDock.bounty) {
        const obj5 = { bounty: mobileQuestDock.bounty };
        const tmp22 = closure_24(closure_55, obj5);
        cResult[3] = mobileQuestDock.bounty;
        cResult[4] = tmp22;
        tmp19 = tmp22;
      } else {
        tmp19 = cResult[4];
      }
      tmp14 = tmp19;
    } else if (AdCreativeType.AdCreativeType.QUEST === type) {
      let tmp15;
      if (cResult[5] !== mobileQuestDock.quest) {
        obj6 = { quest: mobileQuestDock.quest };
        const tmp18 = closure_24(closure_54, obj6);
        cResult[5] = mobileQuestDock.quest;
        cResult[6] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[6];
      }
      tmp14 = tmp15;
    } else if (AdCreativeType.AdCreativeType.NO_FILL === type) {
      tmp14 = null;
    }
    if (mobileQuestDock.type === AdCreativeType.AdCreativeType.NO_FILL) {
      let tmp27 = null;
      if (null != tmp9Result) {
        tmp27 = null;
        if (!tmp11) {
          if (cResult[7] === isMobileQuestDockVisibleToUser1) {
            let tmp28;
            if (cResult[8] === tmp9Result.decisionId) {
              tmp28 = cResult[9];
            }
            tmp27 = tmp28;
          }
          const obj7 = { decisionId: tmp9Result.decisionId, visible: isMobileQuestDockVisibleToUser1 };
          const tmp30 = closure_24(NoFillQuestDockDefault, obj7);
          cResult[7] = isMobileQuestDockVisibleToUser1;
          cResult[8] = tmp9Result.decisionId;
          cResult[9] = tmp30;
          tmp28 = tmp30;
        }
      }
      tmp23 = tmp27;
    } else {
      if (cResult[10] === tmp14) {
        if (cResult[11] === tmp7) {
          tmp23 = cResult[12];
        }
      }
      const obj8 = { value: tmp7, children: tmp14 };
      const tmp25 = closure_24(reactDefault.Provider, obj8);
      cResult[10] = tmp14;
      cResult[11] = tmp7;
      cResult[12] = tmp25;
      tmp23 = tmp25;
    }
    return tmp23;
  }
  const obj9 = { isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser };
  cResult[0] = isMobileQuestDockRenderedBase;
  cResult[1] = isMobileQuestDockVisibleToUser;
  cResult[2] = obj9;
  tmp7 = obj9;
}) : (function QuestDockWithVisibilityContext() {
  let isMobileQuestDockVisibleToUser;
  let mobileQuestDock;
  let tmp14;
  let obj = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  mobileQuestDock = obj.useMobileQuestDock();
  let obj2 = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  const isMobileQuestDockRenderedBase = obj2.useIsMobileQuestDockRenderedBase(mobileQuestDock);
  const obj3 = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  isMobileQuestDockVisibleToUser = obj3.useIsMobileQuestDockVisibleToUser(mobileQuestDock, isMobileQuestDockRenderedBase);
  const items = [isMobileQuestDockRenderedBase, isMobileQuestDockVisibleToUser];
  const memo = react.useMemo(() => ({ isRendered: isMobileQuestDockRenderedBase, isVisibleToUser: isMobileQuestDockVisibleToUser }), items);
  const tmp7 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[63]);
  const tmp7Result = tmp7(mobileQuestDock(isMobileQuestDockVisibleToUser[38]).AdPlacement.MOBILE_HOME_DOCK_AREA, "QuestDockWithVisibilityContext");
  const tmp9 = isMobileQuestDockRenderedBase(isMobileQuestDockVisibleToUser[64])();
  const items1 = [mobileQuestDock];
  const tmp10 = !tmp9;
  const obj4 = mobileQuestDock(isMobileQuestDockVisibleToUser[50]);
  const isMobileQuestDockVisibleToUser1 = obj4.useIsMobileQuestDockVisibleToUser(mobileQuestDock, tmp10);
  const memo1 = react.useMemo(() => {
    const type = mobileQuestDock.type;
    if (AdCreativeType.AdCreativeType.BOUNTY === type) {
      const obj2 = { bounty: mobileQuestDock.bounty };
      return closure_24(closure_55, obj2);
    } else if (AdCreativeType.AdCreativeType.QUEST === type) {
      const obj = { quest: mobileQuestDock.quest };
      return closure_24(closure_54, obj);
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
    tmp14 = tmp16;
  } else {
    obj6 = { value: memo, children: memo1 };
    tmp14 = closure_24(tmp6(tmp[45]).Provider, obj6);
  }
  return tmp14;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDock.tsx");

export default memoResult;
export const QuestDockQuestContent = tmp12;