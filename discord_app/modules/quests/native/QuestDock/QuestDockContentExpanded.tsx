// === Module 15378: QuestDockContentExpanded ===

// Module 15378 (QuestDockContentExpanded)
import spring from "spring" /* 5375 */;
import QuestDockUtils from "QuestDockUtils" /* 15284 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5979).QuestDockMode;
let QUEST_DOCK_MODE_CHANGE_PHYSICS = fn(15285).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = { wrapper: null };
let obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.display = "flex";
obj3.zIndex = 1;
obj.wrapper = obj3;
let closure_7 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockContentExpandedTsx1(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode===\"content\"?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const __initData2 = { code: "function QuestDockContentExpandedTsx2(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode==='content'?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockContentExpanded(expandedHeight) {
  const cResult = expandedHeightMode(activeQuestDockMode[7]).c(6);
  ({ children, expandedHeightMode } = expandedHeight);
  expandedHeight = expandedHeight.expandedHeight;
  const tmp3 = closure_7();
  const context = questDockWrapperSpecs.useContext(expandedHeightMode(activeQuestDockMode[8]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  const tmp6 = expandedHeight(activeQuestDockMode[9])();
  QUEST_DOCK_MODE_CHANGE_PHYSICS = tmp6;
  let obj = expandedHeightMode(activeQuestDockMode[7]);
  const tmp = activeQuestDockMode;
  const tmp5 = expandedHeight;
  class D {
    constructor() {
      maxHeight = undefined;
      if ("content" !== expandedHeightMode) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[11]);
        tmp4 = windowDimensions;
        tmp5 = closure_5;
        tmp6 = expandedHeight;
        maxHeight = obj.getQuestDockExpandedHeightLimits(windowDimensions.get().height, closure_5.get().top, expandedHeight).maxHeight;
      }
      size = { height: maxHeight, width: windowDimensions.get().width, opacity: null, transform: null };
      obj3 = windowDimensions;
      obj4 = closure_0(closure_2[12]);
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      size.opacity = obj4.withSpring(num, closure_5);
      obj1 = { translateX: null };
      obj6 = closure_0(closure_2[12]);
      obj1.translateX = obj6.withSpring((questDockWrapperSpecs.get().width - obj3.get().width) / 2, closure_5);
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  let obj2 = expandedHeightMode(activeQuestDockMode[10]);
  D.__closure = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp6, expandedHeight, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs: context.questDockWrapperSpecs };
  D.__workletHash = 7331368615982;
  D.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(D);
  if (cResult[0] === tmp3.wrapper) {
    if (cResult[1] === animatedStyle) {
      let tmp8 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp8) {
        let tmp9 = cResult[5];
      }
      return tmp9;
    }
    let obj4 = { style: tmp8, children };
    const tmp11 = jsx(tmp5(tmp[13]), { style: tmp8, children });
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
  const obj3 = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp6, expandedHeight, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs: context.questDockWrapperSpecs };
}) : (function QuestDockContentExpanded(children) {
  const expandedHeightMode = children.expandedHeightMode;
  const expandedHeight = children.expandedHeight;
  const context = questDockWrapperSpecs.useContext(expandedHeightMode(activeQuestDockMode[8]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  const tmp3 = expandedHeight(activeQuestDockMode[9])();
  QUEST_DOCK_MODE_CHANGE_PHYSICS = tmp3;
  const tmp = closure_7();
  const fn = function h() {
    let maxHeight;
    if ("content" !== expandedHeightMode) {
      maxHeight = QuestDockUtils.getQuestDockExpandedHeightLimits(windowDimensions.get().height, closure_5.get().top, expandedHeight).maxHeight;
    }
    const size = { height: maxHeight, width: windowDimensions.get().width, opacity: null, transform: null };
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    size.opacity = spring.withSpring(num, closure_5);
    const obj2 = { translateX: null };
    obj2.translateX = spring.withSpring((questDockWrapperSpecs.get().width - windowDimensions.get().width) / 2, closure_5);
    const items = [obj2];
    size.transform = items;
    return size;
  };
  let obj = expandedHeightMode(activeQuestDockMode[10]);
  fn.__closure = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp3, expandedHeight, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  fn.__workletHash = 4699038490605;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj3 = { style: null, children: children.children };
  let items = [tmp.wrapper, animatedStyle];
  obj3.style = items;
  return jsx(expandedHeight(activeQuestDockMode[13]), { style: null, children: children.children });
}));