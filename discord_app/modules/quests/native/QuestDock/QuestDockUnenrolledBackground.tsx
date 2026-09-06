// === Module 15201: QuestDockUnenrolledBackground ===

// Module 15201 (QuestDockUnenrolledBackground)
import _modDef672 from "module_672" /* 672 */;
import spring from "spring" /* 4974 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
get_ActivityIndicator = fn(17);
({ AppState: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const QuestDockMode = fn(5444).QuestDockMode;
const QuestDockConstants = fn(15095);
({ QUEST_DOCK_EXPANDED_HEIGHT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_8, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9 } = QuestDockConstants);
const VerticalGradient = fn(1074).VerticalGradient;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let obj = { backgroundWrapper: null, backgroundHeroAsset: null, backgroundHeroAssetVideo: null, backgroundGradient: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.right = undefined;
obj.bottom = undefined;
obj.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj.zIndex = 1;
obj.backgroundWrapper = obj;
const createStyles = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.height = QUEST_DOCK_EXPANDED_HEIGHT;
createStyles.resizeMode = "cover";
obj.backgroundHeroAsset = createStyles;
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundHeroAssetVideo = {};
let obj3 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj3.height = QUEST_DOCK_EXPANDED_HEIGHT;
obj.backgroundGradient = obj3;
let closure_13 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockUnenrolledBackgroundTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,windowDimensions}=this.__closure;return{transform:[{translateX:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*-1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}],width:windowDimensions.get().width};}" };
const __initData2 = { code: "function QuestDockUnenrolledBackgroundTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,videoLoaded,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()!==QuestDockMode.EXPANDED||!videoLoaded?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBackground.tsx");

export default noop.memo(function QuestDockUnenrolledBackground() {
  let obj = activeQuestDockMode(setRestingQuestDockMode[9]);
  const questDockQuest = obj.useQuestDockQuest();
  const tmp4 = closure_13();
  let obj1 = activeQuestDockMode(setRestingQuestDockMode[10]);
  const questDockHeroAsset = obj1.useQuestDockHeroAsset(questDockQuest);
  ({ staticUrl, videoAsset } = questDockHeroAsset);
  let obj2 = noop;
  const context = noop.useContext(activeQuestDockMode(setRestingQuestDockMode[11]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  setRestingQuestDockMode = noop.useContext(activeQuestDockMode(setRestingQuestDockMode[12]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj3 = activeQuestDockMode(setRestingQuestDockMode[14]);
  let items = [closure_6];
  const stateFromStores = obj3.useStateFromStores(items, () => closure_6.useReducedMotion);
  let obj4 = activeQuestDockMode(setRestingQuestDockMode[15]);
  const token = obj4.useToken(windowDimensions(setRestingQuestDockMode[16]).colors.CARD_BACKGROUND_DEFAULT);
  const items1 = [token];
  const memo = noop.useMemo(() => {
    const obj = _modDef672(token);
    const items = [obj.alpha(0).hex(), , , ];
    const alphaResult = obj.alpha(0);
    items[1] = obj.alpha(0.1).hex();
    const alphaResult1 = obj.alpha(0.1);
    items[2] = obj.alpha(0.8).hex();
    const alphaResult2 = obj.alpha(0.8);
    items[3] = obj.alpha(1).hex();
    return items;
  }, items1);
  const memo1 = noop.useMemo(() => [0, 0.33, 0.76, 1], []);
  let obj5 = activeQuestDockMode(setRestingQuestDockMode[18]);
  const fn = function s() {
    let obj = spring;
    let obj1 = activeQuestDockMode;
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.COLLAPSED) {
      num = -1 * React7;
    }
    obj = { translateX: obj.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
    const items = [obj, ];
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
  obj = { withSpring: activeQuestDockMode(setRestingQuestDockMode[19]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED: closure_9, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED, windowDimensions };
  fn.__closure = obj;
  fn.__workletHash = 3565242281634;
  fn.__initData = __initData;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const tmp14 = QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
  const tmp16 = token;
  const tmp8 = windowDimensions(setRestingQuestDockMode[13])(activeQuestDockMode);
  [tmp18, noop] = token(noop.useState("active" !== videoLoaded.currentState), 2);
  const items2 = [activeQuestDockMode, setRestingQuestDockMode];
  const effect = noop.useEffect(() => {
    closure_0 = first.addEventListener("change", (event) => {
      closure_1_4("active" !== event);
      let tmp3 = activeQuestDockMode(setRestingQuestDockMode[20]).isIOS() && tmp;
      if (tmp3) {
        tmp3 = closure_0.get() === constants.EXPANDED;
      }
      if (tmp3) {
        closure_1_2(constants.COLLAPSED);
      }
    });
    return () => {
      closure_0.remove();
    };
  }, items2);
  let isRendered = !tmp18;
  if (!tmp18) {
    isRendered = noop.useContext(windowDimensions(setRestingQuestDockMode[21])).isRendered;
  }
  if (isRendered) {
    isRendered = !stateFromStores;
  }
  if (isRendered) {
    isRendered = null != videoAsset;
  }
  if (isRendered) {
    let tmpResult = tmp(tmp2[20]);
    isRendered = !tmpResult.isAndroid();
  }
  if (isRendered) {
    tmpResult = tmp(tmp2[22]);
    isRendered = tmpResult.isHeroVideoSupported(videoAsset);
  }
  const tmp16Result = tmp16(obj2.useState(false), 2);
  videoLoaded = tmp16Result[0];
  closure_6 = tmp16Result[1];
  const callback = obj2.useCallback(() => {
    closure_6(true);
  }, []);
  const tmp17 = token(noop.useState("active" !== videoLoaded.currentState), 2);
  class G {
    constructor() {
      obj = closure_0(closure_2[19]);
      num = 1;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        tmp = closure_5;
        num = 1;
        if (closure_5) {
          num = 0;
        }
      }
      obj = { opacity: obj.withSpring(num, closure_8) };
      return obj;
    }
  }
  obj = { withSpring: tmp(tmp2[19]).withSpring, activeQuestDockMode, QuestDockMode: tmp13, videoLoaded, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: tmp14 };
  G.__closure = obj;
  G.__workletHash = 13084905891385;
  G.__initData = __initData2;
  const animatedStyle1 = activeQuestDockMode(setRestingQuestDockMode[18]).useAnimatedStyle(G);
  obj1 = { style: null, children: null };
  const items3 = [tmp4.backgroundWrapper, animatedStyle];
  obj1.style = items3;
  let tmp7Result = tmp7(tmp2[23]);
  if (isRendered) {
    obj2 = { children: null };
    obj3 = { style: tmp4.backgroundHeroAssetVideo, onLoad: callback, source: null, paused: null, resizeMode: "cover", muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false };
    obj4 = { uri: videoAsset.url };
    obj3.source = obj4;
    obj3.paused = tmp8 !== tmp13.EXPANDED;
    const items4 = [closure_11(tmp(tmp2[24]).VideoComponent, obj3), ];
    obj5 = { style: animatedStyle1, children: null };
    tmp7Result = tmp7(tmp2[23]);
    const obj6 = { style: tmp4.backgroundHeroAsset, source: null };
    const obj7 = { uri: staticUrl };
    obj6.source = obj7;
    obj5.children = closure_11(tmp7(tmp2[25]), obj6);
    items4[1] = closure_11(tmp7Result, obj5);
    obj2.children = items4;
    let tmp25Result = tmp25(obj2.Fragment, obj2);
    let tmp27 = closure_11;
  } else {
    tmp27 = closure_11;
    const obj8 = { style: tmp4.backgroundHeroAsset, source: null };
    const obj9 = { uri: staticUrl };
    obj8.source = obj9;
    tmp25Result = closure_11(tmp7(tmp2[25]), obj8);
  }
  const items5 = [tmp25Result, tmp27(windowDimensions(setRestingQuestDockMode[26]), { locations: memo1, style: tmp4.backgroundGradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo })];
  obj1.children = items5;
  return closure_12(tmp7Result, obj1);
});