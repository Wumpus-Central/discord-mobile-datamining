// === Module 15186: QuestDockContentCollapsed ===

// Module 15186 (QuestDockContentCollapsed)
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5444).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = fn(15095).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { questDockContentCollapsed: null };
obj = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj.bottom = undefined;
obj.zIndex = 2;
obj.questDockContentCollapsed = obj;
let closure_7 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData2 = { code: "function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default noop.memo(function QuestDockContentCollapsed(children) {
  let hideOnExpand = children.hideOnExpand;
  let tmp = undefined === hideOnExpand;
  if (!tmp) {
    tmp = hideOnExpand;
  }
  hideOnExpand = tmp;
  const activeQuestDockMode = noop.useContext(hideOnExpand(15096).QuestDockGestureContext).activeQuestDockMode;
  hideOnExpand(4296);
  const fn = function l() {
    let obj = spring;
    let num = 1;
    if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
      num = 1;
      if (hideOnExpand) {
        num = 0;
      }
    }
    obj = { opacity: obj.withSpring(num, closure_5) };
    return obj;
  };
  let obj = { withSpring: hideOnExpand(4974).withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: tmp, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn.__closure = obj;
  fn.__workletHash = 13361221764426;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp2 = closure_7();
  class C {
    constructor() {
      pointerEvents = "auto";
      if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
        tmp = hideOnExpand;
        pointerEvents = "auto";
        if (hideOnExpand) {
          pointerEvents = "none";
        }
      }
      return { pointerEvents };
    }
  }
  C.__closure = { activeQuestDockMode, QuestDockMode, hideOnExpand: tmp };
  C.__workletHash = 14339269503421;
  C.__initData = __initData2;
  const animatedProps = hideOnExpand(4296).useAnimatedProps(C);
  obj = { style: null, animatedProps, children: children.children };
  const items = [tmp2.questDockContentCollapsed, animatedStyle];
  obj.style = items;
  return jsx(activeQuestDockMode(7073), { style: null, animatedProps, children: children.children });
});