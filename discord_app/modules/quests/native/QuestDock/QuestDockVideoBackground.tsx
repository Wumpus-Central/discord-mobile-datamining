// === Module 15314: QuestDockVideoBackground ===

// Module 15314 (QuestDockVideoBackground)
import _modDef672 from "module_672" /* 672 */;
import spring from "spring" /* 5061 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7187 */;
import QuestDockUtils from "QuestDockUtils" /* 15206 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4632 */;

require = fn;
function QuestDockBackgroundMediaFade(arg0) {
  let activeQuestDockMode;
  ({ children, style } = arg0);
  activeQuestDockMode = noop.useContext(activeQuestDockMode(15208).QuestDockGestureContext).activeQuestDockMode;
  const tmp = closure_16();
  const fn = function n() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  let obj = activeQuestDockMode(4376);
  fn.__closure = { withSpring: activeQuestDockMode(5061).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__workletHash = 5908890006198;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children };
  const items = [tmp.media, style, animatedStyle];
  obj3.style = items;
  return closure_11(ReanimatedNativeViewDefault, obj3);
}
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const QuestDockMode = fn(5532).QuestDockMode;
const QuestDockConstants = fn(15207);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9 } = QuestDockConstants);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
const QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
const createStyles = fn(4640);
let obj2 = { backgroundWrapper: null, backgroundImage: null, backgroundImageWrapper: null, backgroundVideo: null, media: null, backgroundGradient: null };
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
let closure_16 = createStyles.createStyles(obj2);
const __initData = { code: "function QuestDockVideoBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockVideoBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
const __initData3 = { code: "function QuestDockVideoBackgroundTsx3(){const{withSpring,shouldShowVideo,videoLoaded,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(shouldShowVideo&&videoLoaded&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVideoBackground.tsx");

export default noop.memo(function QuestDockVideoBackground(gradientBaseColor) {
  ({ imageUrl, videoUrl, collapsedMediaMode } = gradientBaseColor);
  if (collapsedMediaMode === undefined) {
    collapsedMediaMode = obj.PAUSED;
  }
  gradientBaseColor = gradientBaseColor.gradientBaseColor;
  const expandedHeight = gradientBaseColor.expandedHeight;
  let windowDimensions;
  QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = undefined;
  let isRendered;
  let first1;
  closure_11 = undefined;
  dependencyMap = tmp2;
  let tmp3 = closure_16();
  const context = windowDimensions.useContext(gradientBaseColor(15208).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  const setRestingQuestDockMode = windowDimensions.useContext(gradientBaseColor(15211).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  const tmp8 = expandedHeight(8416)(activeQuestDockMode);
  const height = expandedHeight(1478)().height;
  const top = expandedHeight(1612)().top;
  let items = [height];
  const items1 = [height, top, expandedHeight];
  const stateFromStores = gradientBaseColor(504).useStateFromStores(items, () => height.useReducedMotion);
  const memo = windowDimensions.useMemo(() => {
    const obj = { height: QuestDockUtils.getQuestDockExpandedHeightLimits(height, top, expandedHeight).maxHeight };
    return obj;
  }, items1);
  const items2 = [gradientBaseColor];
  const memo1 = windowDimensions.useMemo(() => {
    closure_0 = _modDef672(gradientBaseColor);
    return closure_13.map((item) => closure_0.alpha(item).hex());
  }, items2);
  const obj2 = gradientBaseColor(504);
  const fn = function v() {
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
      num = -1 * React7;
    }
    const items = [{ translateX: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) }, ];
    const obj3 = { translateX: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    let num3 = 0;
    if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
      num3 = -1 * React7;
    }
    const obj4 = { transform: null, width: null };
    const tmpResult = spring;
    items[1] = { translateY: spring.withSpring(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    obj4.transform = items;
    obj4.width = windowDimensions.get().width;
    return obj4;
  };
  let obj3 = gradientBaseColor(4376);
  fn.__closure = { withSpring: gradientBaseColor(5061).withSpring, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: isRendered, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
  fn.__workletHash = 1105448000732;
  fn.__initData = __initData2;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  const tmp17 = activeQuestDockMode(windowDimensions.useState(tmp8 === top.EXPANDED), 2);
  const first = tmp17[0];
  let tmp19 = !first;
  if (!first) {
    tmp19 = tmp15;
  }
  if (tmp19) {
    tmp17[1](true);
  }
  let obj4 = { withSpring: gradientBaseColor(5061).withSpring, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: isRendered, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
  const tmp13 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
  [tmp22, c8] = activeQuestDockMode(windowDimensions.useState("active" !== setRestingQuestDockMode.currentState), 2);
  const items3 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = obj.useEffect(() => {
    closure_0 = setRestingQuestDockMode.addEventListener("change", (event) => {
      closure_1_8("active" !== event);
      let tmp3 = gradientBaseColor(dependencyMap[21]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = activeQuestDockMode.get() === top.EXPANDED;
      }
      if (tmp3) {
        setRestingQuestDockMode(top.COLLAPSED);
      }
      const obj = gradientBaseColor(dependencyMap[21]);
    });
    return () => {
      closure_0.remove();
    };
  }, items3);
  isRendered = !tmp22;
  if (!tmp22) {
    isRendered = windowDimensions.useContext(expandedHeight(15294)).isRendered;
  }
  if (isRendered) {
    isRendered = !stateFromStores;
  }
  if (isRendered) {
    isRendered = null != videoUrl;
  }
  if (isRendered) {
    isRendered = !tmp4(1364).isAndroid();
    const tmp4Result = tmp4(1364);
  }
  if (isRendered) {
    isRendered = tmp4(11918).isHeroVideoSupported(gradientBaseColor.videoMimetype);
    const tmp4Result3 = tmp4(11918);
  }
  if (isRendered) {
    let tmp25 = !tmp2;
    if (tmp2) {
      tmp25 = first;
    }
    isRendered = tmp25;
  }
  const tmp16Result2 = activeQuestDockMode(windowDimensions.useState(false), 2);
  first1 = tmp16Result2[0];
  closure_11 = tmp16Result2[1];
  const callback = obj.useCallback(() => {
    closure_11(true);
  }, []);
  const tmp16Result = activeQuestDockMode(windowDimensions.useState("active" !== setRestingQuestDockMode.currentState), 2);
  const fn2 = function $() {
    let num = 1;
    if (isRendered) {
      num = 1;
      if (first1) {
        if (closure_2) {
          num = 0;
        } else {
          num = 1;
        }
      }
    }
    return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
  };
  const tmp4Result4 = gradientBaseColor(4376);
  fn2.__closure = { withSpring: gradientBaseColor(5061).withSpring, shouldShowVideo: isRendered, videoLoaded: first1, isMediaHiddenWhenCollapsed: collapsedMediaMode === windowDimensions.HIDDEN, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp13 };
  fn2.__workletHash = 10281907446713;
  fn2.__initData = __initData3;
  let tmp31 = null;
  const animatedStyle1 = tmp4Result4.useAnimatedStyle(fn2);
  if (isRendered) {
    const obj6 = { style: tmp3.backgroundVideo, onLoad: callback, source: null, paused: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    const obj7 = { uri: videoUrl };
    obj6.source = obj7;
    obj6.paused = tmp8 !== tmp12.EXPANDED;
    tmp31 = closure_11(tmp4(8456).VideoComponent, obj6);
  }
  const items4 = [tmp31, ];
  let tmp33 = null;
  if (null != imageUrl) {
    const obj8 = { style: null, children: null };
    const items5 = [tmp3.backgroundImageWrapper, memo, animatedStyle1];
    obj8.style = items5;
    const obj9 = { style: null, source: null };
    const items6 = [tmp3.backgroundImage, memo];
    obj9.style = items6;
    const obj10 = { uri: imageUrl };
    obj9.source = obj10;
    obj8.children = closure_11(tmp7(5675), obj9);
    tmp33 = closure_11(tmp7(7187), obj8);
    const tmp7Result = tmp7(7187);
  }
  items4[1] = tmp33;
  const tmp30Result = closure_12(windowDimensions.Fragment, { children: items4 });
  const obj11 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items7 = [tmp3.backgroundWrapper, memo, animatedStyle];
  obj11.style = items7;
  let tmp38 = tmp30Result;
  const obj5 = { withSpring: gradientBaseColor(5061).withSpring, shouldShowVideo: isRendered, videoLoaded: first1, isMediaHiddenWhenCollapsed: collapsedMediaMode === obj.HIDDEN, activeQuestDockMode, QuestDockMode: top, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp13 };
  if (collapsedMediaMode === obj.HIDDEN) {
    const obj12 = { style: memo, children: tmp30Result };
    tmp38 = closure_11(QuestDockBackgroundMediaFade, obj12);
  }
  const items8 = [tmp38, ];
  const obj13 = { locations, style: null, start: first1.START, end: first1.END, colors: memo1 };
  const items9 = [tmp3.backgroundGradient, memo];
  obj13.style = items9;
  items8[1] = closure_11(expandedHeight(5074), obj13);
  obj11.children = items8;
  return closure_12(expandedHeight(7187), obj11);
});
export { QuestDockBackgroundCollapsedMediaMode };