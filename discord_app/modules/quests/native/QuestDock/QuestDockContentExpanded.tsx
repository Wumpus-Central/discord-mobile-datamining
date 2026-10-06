// === Module 15003: QuestDockContentExpanded ===

// Module 15003 (QuestDockContentExpanded)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import spring from "spring" /* 5604 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import QuestDockUtils from "QuestDockUtils" /* 14911 */;
import QuestDockConstants from "QuestDockConstants" /* 14912 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj1, tmp2, tmp4, tmp7;

let obj2;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
let QUEST_DOCK_MODE_CHANGE_PHYSICS = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { wrapper: obj2 };
obj2 = { bottom: undefined, display: "flex", zIndex: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const __initData = { code: "function QuestDockContentExpandedTsx1(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode===\"content\"?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const __initData2 = { code: "function QuestDockContentExpandedTsx2(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode==='content'?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((expandedHeight) => {
  let activeQuestDockMode;
  let children;
  let closure_5;
  let expandedHeightMode;
  let questDockWrapperSpecs;
  let obj = expandedHeightMode(activeQuestDockMode[7]);
  const cResult = obj.c(6);
  ({ children, expandedHeightMode } = expandedHeight);
  expandedHeight = expandedHeight.expandedHeight;
  const tmp3 = closure_7();
  const context = questDockWrapperSpecs.useContext(expandedHeightMode(activeQuestDockMode[8]).QuestDockGestureContext);
  const tmp = activeQuestDockMode;
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  const tmp6 = expandedHeight(activeQuestDockMode[9])();
  QUEST_DOCK_MODE_CHANGE_PHYSICS = tmp6;
  const obj2 = expandedHeightMode(activeQuestDockMode[10]);
  const tmp5 = expandedHeight;
  class D {
    constructor() {
      maxHeight = undefined;
      if ("content" !== expandedHeightMode) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        tmp4 = closure_0(closure_2[11]);
        tmp5 = windowDimensions;
        getQuestDockExpandedHeightLimits = tmp4.getQuestDockExpandedHeightLimits;
        tmp6 = closure_5;
        tmp7 = expandedHeight;
        maxHeight = getQuestDockExpandedHeightLimits(windowDimensions.get().height, closure_5.get().top, expandedHeight).maxHeight;
      }
      size = { height: maxHeight, width: windowDimensions.get().width, opacity: null, transform: null };
      obj2 = windowDimensions;
      tmp8 = closure_0(closure_2[12]);
      withSpring = tmp8.withSpring;
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      size.opacity = withSpring(num, closure_5);
      obj1 = { translateX: null };
      tmp9 = closure_0(closure_2[12]);
      withSpring2 = tmp9.withSpring;
      obj1.translateX = withSpring2((questDockWrapperSpecs.get().width - obj2.get().width) / 2, closure_5);
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  D.__closure = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp6, expandedHeight, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  D.__workletHash = 7331368615982;
  D.__initData = __initData;
  ({ expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp6, expandedHeight, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs });
  const animatedStyle = obj2.useAnimatedStyle(D);
  if (cResult[0] === tmp3.wrapper) {
    let tmp8;
    if (cResult[1] === animatedStyle) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp9;
      if (cResult[4] === tmp8) {
        tmp9 = cResult[5];
      }
      return tmp9;
    }
    const tmp11 = jsx(tmp5(tmp[13]), { style: tmp8, children });
    let num = 3;
    cResult[3] = children;
    cResult[4] = tmp8;
    cResult[5] = tmp11;
    tmp9 = tmp11;
  }
  let items = [tmp3.wrapper, animatedStyle];
  cResult[0] = tmp3.wrapper;
  cResult[1] = animatedStyle;
  cResult[2] = items;
  tmp8 = items;
}) : ((expandedHeightMode) => {
  let activeQuestDockMode;
  let closure_5;
  let questDockWrapperSpecs;
  expandedHeightMode = expandedHeightMode.expandedHeightMode;
  const expandedHeight = expandedHeightMode.expandedHeight;
  const children = expandedHeightMode.children;
  const tmp = closure_7();
  const context = questDockWrapperSpecs.useContext(expandedHeightMode(activeQuestDockMode[8]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  const tmp3 = expandedHeight(activeQuestDockMode[9])();
  QUEST_DOCK_MODE_CHANGE_PHYSICS = tmp3;
  let obj = expandedHeightMode(activeQuestDockMode[10]);
  const fn = function h() {
    let items;
    let num;
    let withSpring;
    let withSpring2;
    let maxHeight;
    if ("content" !== expandedHeightMode) {
      const getQuestDockExpandedHeightLimits = QuestDockUtils.getQuestDockExpandedHeightLimits;
      QuestDockUtils;
      maxHeight = getQuestDockExpandedHeightLimits(windowDimensions.get().height, closure_5.get().top, expandedHeight).maxHeight;
    }
    size = { height: maxHeight, width: windowDimensions.get().width, opacity: withSpring(num, closure_5), transform: items };
    withSpring = spring.withSpring;
    num = 0;
    spring;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    const obj = { translateX: withSpring2((questDockWrapperSpecs.get().width - windowDimensions.get().width) / 2, closure_5) };
    withSpring2 = spring.withSpring;
    spring;
    items = [obj];
    return size;
  };
  fn.__closure = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp3, expandedHeight, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  fn.__workletHash = 4699038490605;
  fn.__initData = __initData2;
  ({ expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp3, expandedHeight, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs });
  const animatedStyle = obj.useAnimatedStyle(fn);
  let items = [tmp.wrapper, animatedStyle];
  return jsx(expandedHeight(activeQuestDockMode[13]), { style: items, children });
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default memoResult;