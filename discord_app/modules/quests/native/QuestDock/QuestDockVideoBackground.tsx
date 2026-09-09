// discord_app/modules/quests/native/QuestDock/QuestDockVideoBackground.tsx
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function QuestDockBackgroundMediaFade(children) {
  let activeQuestDockMode;
  activeQuestDockMode = noop.useContext(activeQuestDockMode(15126).QuestDockGestureContext).activeQuestDockMode;
  activeQuestDockMode(4310);
  const fn = function s() {
    obj = spring;
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    obj = { opacity: obj.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    return obj;
  };
  let __closure = {
    withSpring: activeQuestDockMode(4988).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  fn.__closure = __closure;
  fn.__workletHash = 5908890006198;
  fn.__initData = __initData;
  const animatedStyle = __closure.useAnimatedStyle(fn);
  __closure = { style: null, children: children.children };
  const items = [closure_16().fullHeightMedia, animatedStyle];
  __closure.style = items;
  return closure_11(ReanimatedNativeViewDefault, __closure);
}
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const QuestDockMode = fn(5458).QuestDockMode;
const QuestDockConstants = fn(15125);
({
  QUEST_DOCK_EXPANDED_HEIGHT,
  QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8,
  QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9,
} = QuestDockConstants);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = [0, 0.1, 0.8, 1];
const locations = [0, 0.33, 0.76, 1];
let QuestDockBackgroundCollapsedMediaMode = { PAUSED: "paused", HIDDEN: "hidden" };
fn(4574);
QuestDockBackgroundCollapsedMediaMode = {
  backgroundWrapper: null,
  backgroundImage: null,
  backgroundVideo: null,
  fullHeightMedia: null,
  backgroundGradient: null,
};
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.right = undefined;
obj1.bottom = undefined;
obj1.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj1.zIndex = 1;
QuestDockBackgroundCollapsedMediaMode.backgroundWrapper = obj1;
const createStyles = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.height = QUEST_DOCK_EXPANDED_HEIGHT;
createStyles.resizeMode = "cover";
QuestDockBackgroundCollapsedMediaMode.backgroundImage = createStyles;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
QuestDockBackgroundCollapsedMediaMode.backgroundVideo = {};
let obj4 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj4.height = QUEST_DOCK_EXPANDED_HEIGHT;
QuestDockBackgroundCollapsedMediaMode.fullHeightMedia = obj4;
let obj5 = {};
const merged4 = Object.assign(StyleSheet.absoluteFillObject);
obj5.height = QUEST_DOCK_EXPANDED_HEIGHT;
QuestDockBackgroundCollapsedMediaMode.backgroundGradient = obj5;
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
  let activeQuestDockMode;
  let setRestingQuestDockMode;
  currentState = undefined;
  let isRendered;
  let first1;
  QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = undefined;
  importDefault = tmp2;
  let tmp3 = closure_16();
  __closure = setRestingQuestDockMode;
  const context = setRestingQuestDockMode.useContext(gradientBaseColor(activeQuestDockMode[9]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  setRestingQuestDockMode = setRestingQuestDockMode.useContext(
    gradientBaseColor(activeQuestDockMode[13]).QuestDockExternalCoordinationContext,
  ).setRestingQuestDockMode;
  const tmp8 = require("useStateFromSharedValue")(activeQuestDockMode);
  let obj1 = gradientBaseColor(activeQuestDockMode[16]);
  let items = [isRendered];
  const items1 = [gradientBaseColor];
  const stateFromStores = obj1.useStateFromStores(items, () => isRendered.useReducedMotion);
  const memo = setRestingQuestDockMode.useMemo(() => {
    closure_0 = _modDef672(gradientBaseColor);
    return closure_13.map((item) => closure_0.alpha(item).hex());
  }, items1);
  let obj2 = gradientBaseColor(activeQuestDockMode[10]);
  class P {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[11]);
      obj2 = activeQuestDockMode;
      num = 0;
      tmp3 = QuestDockMode;
      if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
        tmp4 = closure_9;
        num2 = -1;
        num = -1 * closure_9;
      }
      obj = { translateX: obj.withSpring(num, closure_8) };
      tmp5 = closure_8;
      items = [,];
      items[0] = obj;
      tmpResult = tmp(tmp2[11]);
      num3 = 0;
      if (obj2.get() === tmp3.COLLAPSED) {
        tmp6 = closure_9;
        num4 = -1;
        num3 = -1 * closure_9;
      }
      obj1 = { transform: null, width: null };
      obj2 = { translateY: tmpResult.withSpring(num3, tmp5) };
      items[1] = obj2;
      obj1.transform = items;
      obj1.width = windowDimensions.get().width;
      return obj1;
    }
  }
  __closure = {
    withSpring: gradientBaseColor(activeQuestDockMode[11]).withSpring,
    activeQuestDockMode,
    QuestDockMode: first1,
    QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
    windowDimensions,
  };
  P.__closure = __closure;
  P.__workletHash = 1105448000732;
  P.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(P);
  const tmp16 = windowDimensions(setRestingQuestDockMode.useState(tmp8 === first1.EXPANDED), 2);
  const first = tmp16[0];
  let tmp18 = !first;
  if (!first) {
    tmp18 = tmp14;
  }
  if (tmp18) {
    tmp16[1](true);
  }
  let tmp15Result = tmp15(__closure.useState("active" !== currentState.currentState), 2);
  [tmp21, c5] = tmp15Result;
  const items2 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = __closure.useEffect(() => {
    closure_0 = _undefined.addEventListener("change", (event) => {
      _undefined("active" !== event);
      let tmp3 = gradientBaseColor(activeQuestDockMode[18]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = closure_1_2.get() === first1.EXPANDED;
      }
      if (tmp3) {
        setRestingQuestDockMode(first1.COLLAPSED);
      }
      obj = gradientBaseColor(activeQuestDockMode[18]);
    });
    return () => {
      closure_0.remove();
    };
  }, items2);
  isRendered = !tmp21;
  if (!tmp21) {
    isRendered = setRestingQuestDockMode.useContext(require("QuestDockVisibilityContext")).isRendered;
  }
  if (isRendered) {
    isRendered = !stateFromStores;
  }
  if (isRendered) {
    isRendered = null != videoUrl;
  }
  if (isRendered) {
    let tmp4Result = tmp4(tmp5[18]);
    isRendered = !tmp4Result.isAndroid();
  }
  if (isRendered) {
    tmp4Result = tmp4(tmp5[19]);
    isRendered = tmp4Result.isHeroVideoSupported(gradientBaseColor.videoMimetype);
  }
  if (isRendered) {
    let tmp24 = !tmp2;
    if (tmp2) {
      tmp24 = first;
    }
    isRendered = tmp24;
  }
  tmp15Result = tmp15(__closure.useState(false), 2);
  first1 = tmp15Result[0];
  QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = tmp15Result[1];
  const callback = __closure.useCallback(() => {
    closure_8(true);
  }, []);
  const fn = function z() {
    obj = spring;
    let num = 1;
    if (isRendered) {
      num = 1;
      if (first1) {
        if (closure_1) {
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
    withSpring: tmp4(tmp5[11]).withSpring,
    shouldShowVideo: isRendered,
    videoLoaded: first1,
    isMediaHiddenWhenCollapsed: tmp2,
    activeQuestDockMode,
    QuestDockMode: tmp11,
    QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
  };
  fn.__closure = __closure;
  fn.__workletHash = 10281907446713;
  fn.__initData = __initData3;
  let tmp30 = null;
  const animatedStyle1 = gradientBaseColor(activeQuestDockMode[10]).useAnimatedStyle(fn);
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
    obj1.paused = tmp8 !== tmp11.EXPANDED;
    tmp30 = closure_11(tmp4(tmp5[20]).VideoComponent, obj1);
  }
  const items3 = [tmp30];
  let tmp32 = null;
  if (null != imageUrl) {
    const obj3 = { style: null, children: null };
    const items4 = [tmp3.fullHeightMedia, animatedStyle1];
    obj3.style = items4;
    let tmp7Result = tmp7(tmp5[12]);
    const obj4 = { style: tmp3.backgroundImage, source: null };
    const obj5 = { uri: imageUrl };
    obj4.source = obj5;
    obj3.children = closure_11(tmp7(tmp5[21]), obj4);
    tmp32 = closure_11(tmp7Result, obj3);
  }
  items3[1] = tmp32;
  const tmp29Result = closure_12(__closure.Fragment, { children: items3 });
  const obj6 = {
    style: null,
    pointerEvents: "none",
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items5 = [tmp3.backgroundWrapper, animatedStyle];
  obj6.style = items5;
  let tmp37 = tmp29Result;
  tmp7Result = tmp7(tmp5[12]);
  if (collapsedMediaMode === __closure.HIDDEN) {
    const obj7 = { children: tmp29Result };
    tmp37 = closure_11(QuestDockBackgroundMediaFade, obj7);
  }
  const items6 = [
    tmp37,
    closure_11(require("LinearGradient"), {
      locations,
      style: tmp3.backgroundGradient,
      start: VerticalGradient.START,
      end: VerticalGradient.END,
      colors: memo,
    }),
  ];
  obj6.children = items6;
  return closure_12(tmp7Result, obj6);
});
export { QuestDockBackgroundCollapsedMediaMode };
