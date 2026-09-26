// === Module 14733: QuestDockVideoBackground ===

// Module 14733 (QuestDockVideoBackground)
import _modDef672 from "module_672" /* 672 */;
import spring from "spring" /* 5280 */;
import FastImageDefault from "FastImage" /* 5899 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6494 */;
import QuestDockUtils from "QuestDockUtils" /* 14623 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;

require = fn;
function QuestDockBackgroundMediaFade(arg0) {
  let activeQuestDockMode;
  ({ children, style } = arg0);
  activeQuestDockMode = noop.useContext(activeQuestDockMode(14625).QuestDockGestureContext).activeQuestDockMode;
  const tmp = closure_17();
  const fn = function n() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  let obj = activeQuestDockMode(4566);
  fn.__closure = { withSpring: activeQuestDockMode(5280).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 5908890006198;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children };
  const items = [tmp.media, style, animatedStyle];
  obj3.style = items;
  return closure_12(ReanimatedNativeViewDefault, obj3);
}
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, StyleSheet, View: metroRequire } = get_ActivityIndicator);
const QuestDockMode = fn(5756).QuestDockMode;
const QuestDockConstants = fn(14624);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_9, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: c10 } = QuestDockConstants);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
const QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
const createStyles = fn(4836);
let obj2 = { backgroundWrapper: null, backgroundImage: null, backgroundImageWrapper: null, backgroundVideo: null, media: null, backgroundGradient: null, backdrop: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.right = undefined;
obj4.bottom = undefined;
obj4.zIndex = 1;
obj2.backgroundWrapper = obj4;
let obj5 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.resizeMode = "cover";
obj2.backgroundImage = obj5;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundImageWrapper = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundVideo = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj2.media = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backgroundGradient = {};
const merged6 = Object.assign(StyleSheet.absoluteFillObject);
obj2.backdrop = {};
let closure_17 = createStyles.createStyles(obj2);
const __initData = { code: "function QuestDockVideoBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockVideoBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
const __initData3 = { code: "function QuestDockVideoBackgroundTsx3(){const{withSpring,shouldShowVideo,videoLoaded,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(shouldShowVideo&&videoLoaded&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVideoBackground.tsx");

export default noop.memo(function QuestDockVideoBackground(imageUrl) {
  imageUrl = imageUrl.imageUrl;
  ({ videoUrl, collapsedMediaMode } = imageUrl);
  if (collapsedMediaMode === undefined) {
    collapsedMediaMode = obj.PAUSED;
  }
  const gradientBaseColor = imageUrl.gradientBaseColor;
  ({ backdropColor, expandedHeight } = imageUrl);
  let activeQuestDockMode;
  QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = undefined;
  let isRendered;
  let videoLoaded;
  closure_12 = undefined;
  _slicedToArray = tmp2;
  let tmp3 = closure_17();
  const context = activeQuestDockMode.useContext(imageUrl(expandedHeight[9]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const setRestingQuestDockMode = activeQuestDockMode.useContext(imageUrl(expandedHeight[13]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const height = gradientBaseColor(expandedHeight[16])().height;
  const top = gradientBaseColor(expandedHeight[17])().top;
  const tmp8 = gradientBaseColor(expandedHeight[15])(activeQuestDockMode);
  let items = [height];
  const items1 = [height, top, expandedHeight];
  const stateFromStores = imageUrl(expandedHeight[18]).useStateFromStores(items, () => height.useReducedMotion);
  const memo = activeQuestDockMode.useMemo(() => {
    const obj = { height: QuestDockUtils.getQuestDockExpandedHeightLimits(height, top, expandedHeight).maxHeight };
    return obj;
  }, items1);
  const items2 = [gradientBaseColor];
  const memo1 = activeQuestDockMode.useMemo(() => {
    closure_0 = _modDef672(gradientBaseColor);
    return closure_14.map((item) => closure_0.alpha(item).hex());
  }, items2);
  const obj2 = imageUrl(expandedHeight[18]);
  const fn = function w() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
      num = -1 * closure_2_10;
    }
    const items = [{ translateX: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) }, ];
    const obj3 = { translateX: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    let num3 = 0;
    if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
      num3 = -1 * closure_2_10;
    }
    const obj4 = { transform: null, width: null };
    const tmpResult = spring;
    items[1] = { translateY: spring.withSpring(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    obj4.transform = items;
    obj4.width = windowDimensions.get().width;
    return obj4;
  };
  let obj3 = imageUrl(expandedHeight[10]);
  fn.__closure = { withSpring: imageUrl(expandedHeight[11]).withSpring, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: isRendered, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
  fn.__workletHash = 1105448000732;
  fn.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  let obj4 = { withSpring: imageUrl(expandedHeight[11]).withSpring, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: isRendered, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
  const tmp13 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
  const tmp15 = gradientBaseColor(expandedHeight[21])(top.EXPANDED);
  const tmp16 = _slicedToArray;
  [tmp18, c9] = activeQuestDockMode.useState("active" !== windowDimensions.currentState);
  const items3 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = activeQuestDockMode.useEffect(() => {
    closure_0 = windowDimensions.addEventListener("change", (event) => {
      closure_1_9("active" !== event);
      let tmp3 = imageUrl(expandedHeight[22]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = activeQuestDockMode.get() === top.EXPANDED;
      }
      if (tmp3) {
        setRestingQuestDockMode(top.COLLAPSED);
      }
      const obj = imageUrl(expandedHeight[22]);
    });
    return () => {
      closure_0.remove();
    };
  }, items3);
  isRendered = !tmp18;
  if (!tmp18) {
    isRendered = activeQuestDockMode.useContext(gradientBaseColor(expandedHeight[14])).isRendered;
  }
  if (isRendered) {
    isRendered = !stateFromStores;
  }
  if (isRendered) {
    isRendered = null != videoUrl;
  }
  if (isRendered) {
    isRendered = !tmp4(expandedHeight[22]).isAndroid();
    const tmp4Result = tmp4(expandedHeight[22]);
  }
  if (isRendered) {
    isRendered = tmp4(expandedHeight[23]).isHeroVideoSupported(imageUrl.videoMimetype);
    const tmp4Result3 = tmp4(expandedHeight[23]);
  }
  if (isRendered) {
    let tmp21 = !tmp2;
    if (tmp2) {
      tmp21 = tmp15;
    }
    isRendered = tmp21;
  }
  const tmp16Result = tmp16(activeQuestDockMode.useState(false), 2);
  videoLoaded = tmp16Result[0];
  closure_12 = tmp24;
  let tmp26 = videoLoaded;
  const callback = obj.useCallback(() => {
    closure_12(true);
  }, []);
  if (videoLoaded) {
    tmp26 = !isRendered;
  }
  if (tmp26) {
    tmp24(false);
  }
  const items4 = [imageUrl, collapsedMediaMode === obj.HIDDEN];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != imageUrl;
    if (tmp2) {
      tmp2 = closure_3;
    }
    if (tmp2) {
      FastImageDefault.preload(imageUrl);
    }
  }, items4);
  const tmp17 = _slicedToArray(activeQuestDockMode.useState("active" !== windowDimensions.currentState), 2);
  function de() {
    let num = 1;
    if (isRendered) {
      num = 1;
      if (first) {
        if (closure_3) {
          num = 0;
        } else {
          num = 1;
        }
      }
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  }
  const tmp4Result4 = imageUrl(expandedHeight[10]);
  de.__closure = { withSpring: imageUrl(expandedHeight[11]).withSpring, shouldShowVideo: isRendered, videoLoaded, isMediaHiddenWhenCollapsed: collapsedMediaMode === activeQuestDockMode.HIDDEN, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp13 };
  de.__workletHash = 10281907446713;
  de.__initData = __initData3;
  let tmp31 = null;
  const animatedStyle1 = tmp4Result4.useAnimatedStyle(de);
  if (isRendered) {
    const obj6 = { style: tmp3.backgroundVideo, onLoad: callback, source: null, paused: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    const obj7 = { uri: videoUrl };
    obj6.source = obj7;
    obj6.paused = tmp8 !== tmp12.EXPANDED;
    tmp31 = closure_12(tmp4(expandedHeight[25]).VideoComponent, obj6);
  }
  const items5 = [tmp31, ];
  let tmp33 = null;
  if (null != imageUrl) {
    if (!tmp2) {
      const obj8 = { style: null, children: null };
      const items6 = [tmp3.backgroundImageWrapper, memo, animatedStyle1];
      obj8.style = items6;
      const obj9 = { style: null, source: null };
      const items7 = [tmp3.backgroundImage, memo];
      obj9.style = items7;
      const obj10 = { uri: imageUrl };
      obj9.source = obj10;
      obj8.children = closure_12(tmp7(expandedHeight[24]), obj9);
      tmp33 = closure_12(tmp7(expandedHeight[12]), obj8);
      const tmp7Result = tmp7(expandedHeight[12]);
    } else {
      tmp33 = null;
    }
  }
  items5[1] = tmp33;
  const tmp30Result = closure_13(activeQuestDockMode.Fragment, { children: items5 });
  const obj11 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items8 = [tmp3.backgroundWrapper, memo, animatedStyle];
  obj11.style = items8;
  let tmp38 = null;
  const obj5 = { withSpring: imageUrl(expandedHeight[11]).withSpring, shouldShowVideo: isRendered, videoLoaded, isMediaHiddenWhenCollapsed: collapsedMediaMode === obj.HIDDEN, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp13 };
  if (null != backdropColor) {
    const obj12 = { style: null };
    const items9 = [tmp3.backdrop, memo, ];
    const obj13 = { backgroundColor: backdropColor };
    items9[2] = obj13;
    obj12.style = items9;
    tmp38 = closure_12(setRestingQuestDockMode, obj12);
  }
  const items10 = [tmp38, , , ];
  let tmp41 = tmp30Result;
  if (collapsedMediaMode === obj.HIDDEN) {
    const obj14 = { style: memo, children: tmp30Result };
    tmp41 = closure_12(QuestDockBackgroundMediaFade, obj14);
  }
  items10[1] = tmp41;
  const obj15 = { locations, style: null, start: videoLoaded.START, end: videoLoaded.END, colors: memo1 };
  const items11 = [tmp3.backgroundGradient, memo];
  obj15.style = items11;
  items10[2] = closure_12(gradientBaseColor(expandedHeight[26]), obj15);
  items10[3] = imageUrl.foregroundContent;
  obj11.children = items10;
  return closure_13(gradientBaseColor(expandedHeight[12]), obj11);
});
export { QuestDockBackgroundCollapsedMediaMode };