// discord_app/modules/quests/native/QuestDock/QuestDockVideoBackground.tsx
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import QuestDockUtils from "QuestDockUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function QuestDockBackgroundMediaFade(arg0) {
  let activeQuestDockMode;
  ({ children, style } = arg0);
  activeQuestDockMode = noop.useContext(activeQuestDockMode(15154).QuestDockGestureContext).activeQuestDockMode;
  activeQuestDockMode(4343);
  const fn = function n() {
    obj = spring;
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    return obj;
  };
  let __closure = {
    withSpring: activeQuestDockMode(5025).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  fn.__closure = __closure;
  fn.__workletHash = 5908890006198;
  fn.__initData = __initData;
  const animatedStyle = __closure.useAnimatedStyle(fn);
  __closure = { style: null, children };
  const items = [closure_16().media, style, animatedStyle];
  __closure.style = items;
  return closure_11(ReanimatedNativeViewDefault, __closure);
}
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const QuestDockMode = fn(5495).QuestDockMode;
const QuestDockConstants = fn(15153);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9 } =
  QuestDockConstants);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
let QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
fn(4606);
QuestDockBackgroundCollapsedMediaMode = {
  backgroundWrapper: null,
  backgroundImage: null,
  backgroundImageWrapper: null,
  backgroundVideo: null,
  media: null,
  backgroundGradient: null,
};
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.right = undefined;
obj1.bottom = undefined;
obj1.zIndex = 1;
QuestDockBackgroundCollapsedMediaMode.backgroundWrapper = obj1;
const createStyles = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.resizeMode = "cover";
QuestDockBackgroundCollapsedMediaMode.backgroundImage = createStyles;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
QuestDockBackgroundCollapsedMediaMode.backgroundImageWrapper = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
QuestDockBackgroundCollapsedMediaMode.backgroundVideo = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
QuestDockBackgroundCollapsedMediaMode.media = {};
const merged5 = Object.assign(StyleSheet.absoluteFillObject);
QuestDockBackgroundCollapsedMediaMode.backgroundGradient = {};
let closure_16 = createStyles.createStyles(QuestDockBackgroundCollapsedMediaMode);
const __initData = {
  code: "function QuestDockVideoBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData2 = {
  code: "function QuestDockVideoBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}",
};
const __initData3 = {
  code: "function QuestDockVideoBackgroundTsx3(){const{withSpring,shouldShowVideo,videoLoaded,isMediaHiddenWhenCollapsed,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(shouldShowVideo&&videoLoaded&&(isMediaHiddenWhenCollapsed||activeQuestDockMode.get()===QuestDockMode.EXPANDED)?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockVideoBackground.tsx");

export default noop.memo(function QuestDockVideoBackground(gradientBaseColor) {
  ({ imageUrl, videoUrl, collapsedMediaMode } = gradientBaseColor);
  if (collapsedMediaMode === undefined) {
    collapsedMediaMode = __closure.PAUSED;
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
  const context = windowDimensions.useContext(gradientBaseColor(15154).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  windowDimensions = context.windowDimensions;
  const setRestingQuestDockMode = windowDimensions.useContext(
    gradientBaseColor(15157).QuestDockExternalCoordinationContext,
  ).setRestingQuestDockMode;
  const tmp8 = expandedHeight(8353)(activeQuestDockMode);
  const height = expandedHeight(1477)().height;
  const top = expandedHeight(1611)().top;
  let obj1 = gradientBaseColor(504);
  let items = [height];
  const items1 = [height, top, expandedHeight];
  const stateFromStores = obj1.useStateFromStores(items, () => height.useReducedMotion);
  const memo = windowDimensions.useMemo(() => {
    obj = { height: QuestDockUtils.getQuestDockExpandedHeightLimits(height, top, expandedHeight).maxHeight };
    return obj;
  }, items1);
  const items2 = [gradientBaseColor];
  const memo1 = windowDimensions.useMemo(() => {
    closure_0 = _modDef672(gradientBaseColor);
    return closure_13.map((item) => closure_0.alpha(item).hex());
  }, items2);
  let obj2 = gradientBaseColor(4343);
  const fn = function v() {
    obj = spring;
    let obj1 = activeQuestDockMode;
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
      num = -1 * React7;
    }
    obj = { translateX: obj.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    const items = [obj];
    let num3 = 0;
    if (obj1.get() === QuestDockMode.COLLAPSED) {
      num3 = -1 * React7;
    }
    obj = { transform: null, width: null };
    obj1 = { translateY: spring.withSpring(num3, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    items[1] = obj1;
    obj.transform = items;
    obj.width = windowDimensions.get().width;
    return obj;
  };
  __closure = {
    withSpring: gradientBaseColor(5025).withSpring,
    activeQuestDockMode,
    QuestDockMode: top,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: isRendered,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    windowDimensions,
  };
  fn.__closure = __closure;
  fn.__workletHash = 1105448000732;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const tmp17 = activeQuestDockMode(windowDimensions.useState(tmp8 === top.EXPANDED), 2);
  const first = tmp17[0];
  let tmp19 = !first;
  if (!first) {
    tmp19 = tmp15;
  }
  if (tmp19) {
    tmp17[1](true);
  }
  let tmp16Result = tmp16(__closure.useState("active" !== setRestingQuestDockMode.currentState), 2);
  [tmp22, c8] = tmp16Result;
  const items3 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = __closure.useEffect(() => {
    closure_0 = setRestingQuestDockMode.addEventListener("change", (event) => {
      closure_1_8("active" !== event);
      let tmp3 = gradientBaseColor(dependencyMap[21]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = activeQuestDockMode.get() === top.EXPANDED;
      }
      if (tmp3) {
        setRestingQuestDockMode(top.COLLAPSED);
      }
      obj = gradientBaseColor(dependencyMap[21]);
    });
    return () => {
      closure_0.remove();
    };
  }, items3);
  isRendered = !tmp22;
  if (!tmp22) {
    isRendered = windowDimensions.useContext(expandedHeight(15240)).isRendered;
  }
  if (isRendered) {
    isRendered = !stateFromStores;
  }
  if (isRendered) {
    isRendered = null != videoUrl;
  }
  if (isRendered) {
    let tmp4Result = tmp4(1115);
    isRendered = !tmp4Result.isAndroid();
  }
  if (isRendered) {
    tmp4Result = tmp4(11860);
    isRendered = tmp4Result.isHeroVideoSupported(gradientBaseColor.videoMimetype);
  }
  if (isRendered) {
    let tmp25 = !tmp2;
    if (tmp2) {
      tmp25 = first;
    }
    isRendered = tmp25;
  }
  tmp16Result = tmp16(__closure.useState(false), 2);
  first1 = tmp16Result[0];
  closure_11 = tmp16Result[1];
  const callback = __closure.useCallback(() => {
    closure_11(true);
  }, []);
  const fn2 = function $() {
    obj = spring;
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
    obj = { opacity: obj.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    return obj;
  };
  __closure = {
    withSpring: tmp4(5025).withSpring,
    shouldShowVideo: isRendered,
    videoLoaded: first1,
    isMediaHiddenWhenCollapsed: tmp2,
    activeQuestDockMode,
    QuestDockMode: tmp12,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  fn2.__closure = __closure;
  fn2.__workletHash = 10281907446713;
  fn2.__initData = __initData3;
  let tmp31 = null;
  const animatedStyle1 = gradientBaseColor(4343).useAnimatedStyle(fn2);
  if (isRendered) {
    obj1 = {
      style: tmp3.backgroundVideo,
      onLoad: callback,
      source: null,
      paused: null,
      resizeMode: "cover",
      muted: true,
      disableFocus: true,
      preventsDisplaySleepDuringVideoPlayback: false,
    };
    obj2 = { uri: videoUrl };
    obj1.source = obj2;
    obj1.paused = tmp8 !== tmp12.EXPANDED;
    tmp31 = closure_11(tmp4(8393).VideoComponent, obj1);
  }
  const items4 = [tmp31];
  let tmp33 = null;
  if (null != imageUrl) {
    const obj3 = { style: null, children: null };
    const items5 = [tmp3.backgroundImageWrapper, memo, animatedStyle1];
    obj3.style = items5;
    let tmp7Result = tmp7(7146);
    const obj4 = { style: null, source: null };
    const items6 = [tmp3.backgroundImage, memo];
    obj4.style = items6;
    const obj5 = { uri: imageUrl };
    obj4.source = obj5;
    obj3.children = closure_11(tmp7(5638), obj4);
    tmp33 = closure_11(tmp7Result, obj3);
  }
  items4[1] = tmp33;
  const tmp30Result = closure_12(__closure.Fragment, { children: items4 });
  const obj6 = {
    style: null,
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items7 = [tmp3.backgroundWrapper, memo, animatedStyle];
  obj6.style = items7;
  let tmp38 = tmp30Result;
  tmp7Result = tmp7(7146);
  if (collapsedMediaMode === __closure.HIDDEN) {
    const obj7 = { style: memo, children: tmp30Result };
    tmp38 = closure_11(QuestDockBackgroundMediaFade, obj7);
  }
  const items8 = [tmp38];
  const obj8 = { locations, style: null, start: first1.START, end: first1.END, colors: memo1 };
  const items9 = [tmp3.backgroundGradient, memo];
  obj8.style = items9;
  items8[1] = closure_11(expandedHeight(5038), obj8);
  obj6.children = items8;
  return closure_12(tmp7Result, obj6);
});
export { QuestDockBackgroundCollapsedMediaMode };
