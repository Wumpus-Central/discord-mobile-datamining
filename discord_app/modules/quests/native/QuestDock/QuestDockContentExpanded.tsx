// === Module 15266: QuestDockContentExpanded ===

// Module 15266 (QuestDockContentExpanded)
import spring from "spring" /* 5024 */;
import QuestDockUtils from "QuestDockUtils" /* 15173 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5494).QuestDockMode;
let QUEST_DOCK_MODE_CHANGE_PHYSICS = fn(15174).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = fn(21).jsx;
const createStyles = fn(4605);
let obj = { wrapper: null };
obj = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj.bottom = undefined;
obj.display = "flex";
obj.zIndex = 1;
obj.wrapper = obj;
let closure_7 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockContentExpandedTsx1(){const{expandedHeightMode,getQuestDockExpandedHeightLimits,windowDimensions,safeArea,expandedHeight,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeightMode==='content'?undefined:getQuestDockExpandedHeightLimits(windowDimensions.get().height,safeArea.get().top,expandedHeight).maxHeight,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default noop.memo(function QuestDockContentExpanded(children) {
  const expandedHeightMode = children.expandedHeightMode;
  const expandedHeight = children.expandedHeight;
  const context = questDockWrapperSpecs.useContext(expandedHeightMode(activeQuestDockMode[6]).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  const windowDimensions = context.windowDimensions;
  const tmp3 = expandedHeight(activeQuestDockMode[7])();
  QUEST_DOCK_MODE_CHANGE_PHYSICS = tmp3;
  let obj = expandedHeightMode(activeQuestDockMode[8]);
  class D {
    constructor() {
      maxHeight = undefined;
      if ("content" !== expandedHeightMode) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[9]);
        tmp4 = windowDimensions;
        tmp5 = closure_5;
        tmp6 = expandedHeight;
        maxHeight = obj.getQuestDockExpandedHeightLimits(windowDimensions.get().height, closure_5.get().top, expandedHeight).maxHeight;
      }
      size = { height: maxHeight, width: windowDimensions.get().width, opacity: null, transform: null };
      obj3 = windowDimensions;
      obj4 = closure_0(closure_2[10]);
      num = 0;
      if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
        num = 1;
      }
      size.opacity = obj4.withSpring(num, closure_5);
      obj = { translateX: null };
      obj6 = closure_0(closure_2[10]);
      obj.translateX = obj6.withSpring((questDockWrapperSpecs.get().width - obj3.get().width) / 2, closure_5);
      items = [];
      items[0] = obj;
      size.transform = items;
      return size;
    }
  }
  obj = { expandedHeightMode, getQuestDockExpandedHeightLimits: expandedHeightMode(activeQuestDockMode[9]).getQuestDockExpandedHeightLimits, windowDimensions, safeArea: tmp3, expandedHeight, withSpring: expandedHeightMode(activeQuestDockMode[10]).withSpring, activeQuestDockMode, QuestDockMode: windowDimensions, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  D.__closure = obj;
  D.__workletHash = 2386648099246;
  D.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(D);
  obj = { style: null, children: children.children };
  let items = [closure_7().wrapper, animatedStyle];
  obj.style = items;
  return jsx(expandedHeight(activeQuestDockMode[11]), { style: null, children: children.children });
});