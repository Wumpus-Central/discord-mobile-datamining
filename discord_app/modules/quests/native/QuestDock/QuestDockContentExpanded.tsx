// === Module 15187: QuestDockContentExpanded ===

// Module 15187 (QuestDockContentExpanded)
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5444).QuestDockMode;
const QuestDockConstants = fn(15095);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: hasOwnProperty, QUEST_DOCK_EXPANDED_HEIGHT: metroRequire } = QuestDockConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { wrapper: null };
obj = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj.bottom = undefined;
obj.display = "flex";
obj.zIndex = 1;
obj.wrapper = obj;
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockContentExpandedTsx1(){const{expandedHeight,QUEST_DOCK_EXPANDED_HEIGHT,windowDimensions,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeight==='content'?undefined:QUEST_DOCK_EXPANDED_HEIGHT,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default noop.memo(function QuestDockContentExpanded(children) {
  const expandedHeight = children.expandedHeight;
  const context = windowDimensions.useContext(expandedHeight(questDockWrapperSpecs[6]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  windowDimensions = context.windowDimensions;
  expandedHeight(questDockWrapperSpecs[7]);
  const fn = function s() {
    let tmp;
    if ("content" !== expandedHeight) {
      tmp = QUEST_DOCK_EXPANDED_HEIGHT;
    }
    const size = { height: tmp, width: windowDimensions.get().width, opacity: null, transform: null };
    let num = 0;
    if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
      num = 1;
    }
    size.opacity = spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS);
    const obj = { translateX: null };
    obj.translateX = spring.withSpring((questDockWrapperSpecs.get().width - windowDimensions.get().width) / 2, QUEST_DOCK_MODE_CHANGE_PHYSICS);
    const items = [obj];
    size.transform = items;
    return size;
  };
  let obj = { expandedHeight, QUEST_DOCK_EXPANDED_HEIGHT, windowDimensions, withSpring: expandedHeight(questDockWrapperSpecs[8]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS, questDockWrapperSpecs };
  fn.__closure = obj;
  fn.__workletHash = 2568599305841;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: null, children: children.children };
  let items = [closure_8().wrapper, animatedStyle];
  obj.style = items;
  return jsx(activeQuestDockMode(questDockWrapperSpecs[9]), { style: null, children: children.children });
});