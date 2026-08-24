// === Module 14606: ? ===

// Module 14606
import importAllResult from "noop" /* 19 */;
import { QuestDockMode } from "QuestsExperimentLocations" /* 6753 */;
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT" /* 14515 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
let c3 = importAllResult;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: c5, QUEST_DOCK_EXPANDED_HEIGHT: closure_6 } = QUEST_DOCK_COLLAPSED_HEIGHT);
let obj = { wrapper: null };
obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj.bottom = undefined;
obj.display = "flex";
obj.zIndex = 1;
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
let closure_9 = { code: "function QuestDockContentExpandedTsx1(){const{expandedHeight,QUEST_DOCK_EXPANDED_HEIGHT,windowDimensions,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:expandedHeight==='content'?undefined:QUEST_DOCK_EXPANDED_HEIGHT,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}" };
const memoResult = importAllResult.memo(function QuestDockContentExpanded(children) {
  const expandedHeight = children.expandedHeight;
  const context = windowDimensions.useContext(expandedHeight(questDockWrapperSpecs[6]).QuestDockGestureContext);
  const activeQuestDockMode = context.activeQuestDockMode;
  questDockWrapperSpecs = context.questDockWrapperSpecs;
  windowDimensions = context.windowDimensions;
  let obj = expandedHeight(questDockWrapperSpecs[7]);
  const fn = function s() {
    let tmp;
    if ("content" !== expandedHeight) {
      tmp = closure_1_6;
    }
    let obj = { height: tmp, width: windowDimensions.get().width, opacity: null, transform: null };
    let num = 0;
    if (activeQuestDockMode.get() === closure_1_4.EXPANDED) {
      num = 1;
    }
    obj[2] = expandedHeight(questDockWrapperSpecs[8]).withSpring(num, closure_1_5);
    obj = { translateX: null };
    const obj2 = windowDimensions;
    const obj3 = expandedHeight(questDockWrapperSpecs[8]);
    const tmp2 = expandedHeight;
    const tmp3 = questDockWrapperSpecs;
    obj[0] = expandedHeight(questDockWrapperSpecs[8]).withSpring((questDockWrapperSpecs.get().width - obj2.get().width) / 2, closure_1_5);
    const items = [obj];
    obj[3] = items;
    return obj;
  };
  obj = { expandedHeight, QUEST_DOCK_EXPANDED_HEIGHT: closure_6, windowDimensions, withSpring: expandedHeight(questDockWrapperSpecs[8]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5, questDockWrapperSpecs };
  fn.__closure = obj;
  fn.__workletHash = 2568599305841;
  fn.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [callback().wrapper, animatedStyle];
  return jsx(activeQuestDockMode(questDockWrapperSpecs[9]), { style, children: children.children });
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentExpanded.tsx");

export default memoResult;