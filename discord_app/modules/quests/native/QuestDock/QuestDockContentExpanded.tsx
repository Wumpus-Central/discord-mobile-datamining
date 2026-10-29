// === Module 17033: QuestDockContentExpanded ===

// Module 17033 (QuestDockContentExpanded)
import spring from "spring" /* 5284 */;
import QuestDockUtils from "QuestDockUtils" /* 16946 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(6768).QuestDockMode;
let QUEST_DOCK_MODE_CHANGE_PHYSICS = fn(16947).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = fn(21).jsx;
const createStyles = fn(5005);
let obj = { wrapper: null };
let obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.display = "flex";
obj3.zIndex = 1;
obj.wrapper = obj3;
let closure_7 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockContentExpandedTsx1(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,getQuestDockExpandedWidth,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode===\"content\"?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right))/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const __initData2 = { code: "function QuestDockContentExpandedTsx2(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,getQuestDockExpandedWidth,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode==='content'?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right))/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
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
      size = { height: maxHeight, width: null, opacity: null, transform: null };
      obj3 = closure_0(closure_2[11]);
      obj4 = windowDimensions;
      obj5 = closure_5;
      size.width = obj3.getQuestDockExpandedWidth(windowDimensions.get().width, closure_5.get().left, closure_5.get().right);
      obj6 = closure_0(closure_2[12]);
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      size.opacity = obj6.withSpring(num, closure_5);
      obj1 = { translateX: null };
      obj8 = closure_0(closure_2[12]);
      obj9 = closure_0(closure_2[11]);
      obj1.translateX = obj8.withSpring((questDockWrapperSpecs.get().width - obj9.getQuestDockExpandedWidth(obj4.get().width, obj5.get().left, obj5.get().right)) / 2, closure_5);
      items = [];
      items[0] = obj1;
      size.transform = items;
      return size;
    }
  }
  let obj2 = expandedHeightMode(activeQuestDockMode[10]);
  D.__closure = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp6, expandedHeight, getQuestDockExpandedWidth: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedWidth, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs: context.questDockWrapperSpecs };
  D.__workletHash = 9392780249296;
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
    const obj4 = { style: tmp8, children };
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
  let obj3 = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp6, expandedHeight, getQuestDockExpandedWidth: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedWidth, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs: context.questDockWrapperSpecs };
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
  const fn = function c() {
    let maxHeight;
    if ("content" !== expandedHeightMode) {
      maxHeight = QuestDockUtils.getQuestDockExpandedHeightLimits(windowDimensions.get().height, closure_5.get().top, expandedHeight).maxHeight;
    }
    const size = { height: maxHeight, width: QuestDockUtils.getQuestDockExpandedWidth(windowDimensions.get().width, closure_5.get().left, closure_5.get().right), opacity: null, transform: null };
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    size.opacity = spring.withSpring(num, closure_5);
    const obj2 = { translateX: null };
    const obj8 = spring;
    obj2.translateX = obj8.withSpring((questDockWrapperSpecs.get().width - QuestDockUtils.getQuestDockExpandedWidth(windowDimensions.get().width, closure_5.get().left, closure_5.get().right)) / 2, closure_5);
    const items = [obj2];
    size.transform = items;
    return size;
  };
  let obj = expandedHeightMode(activeQuestDockMode[10]);
  fn.__closure = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp3, expandedHeight, getQuestDockExpandedWidth: expandedHeightMode(activeQuestDockMode[11]).getQuestDockExpandedWidth, withSpring: expandedHeightMode(activeQuestDockMode[12]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  fn.__workletHash = 159575831059;
  fn.__initData = __initData2;
  const animatedStyle = obj.useAnimatedStyle(fn);
  let obj3 = { style: null, children: children.children };
  let items = [tmp.wrapper, animatedStyle];
  obj3.style = items;
  return jsx(expandedHeight(activeQuestDockMode[13]), { style: null, children: children.children });
}));