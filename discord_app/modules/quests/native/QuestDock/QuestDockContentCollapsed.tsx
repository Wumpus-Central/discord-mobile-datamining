// discord_app/modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const QuestDockMode = fn(5751).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = fn(14599).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj = { questDockContentCollapsed: null };
const obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.zIndex = 2;
obj.questDockContentCollapsed = obj3;
let closure_7 = createStyles.createStyles(obj);
const __initData = {
  code: "function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}",
};
const __initData2 = {
  code: "function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default noop.memo(function QuestDockContentCollapsed(children) {
  let hideOnExpand = children.hideOnExpand;
  let tmp = undefined === hideOnExpand;
  if (!tmp) {
    tmp = hideOnExpand;
  }
  hideOnExpand = tmp;
  const activeQuestDockMode = noop.useContext(hideOnExpand(14600).QuestDockGestureContext).activeQuestDockMode;
  const tmp2 = closure_7();
  const fn = function l() {
    let num = 1;
    if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
      num = 1;
      if (hideOnExpand) {
        num = 0;
      }
    }
    return { opacity: spring.withSpring(num, closure_5) };
  };
  let obj = hideOnExpand(4563);
  fn.__closure = {
    withSpring: hideOnExpand(5273).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    hideOnExpand: tmp,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
  };
  fn.__workletHash = 13361221764426;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const obj2 = {
    withSpring: hideOnExpand(5273).withSpring,
    activeQuestDockMode,
    QuestDockMode,
    hideOnExpand: tmp,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
  };
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
  const animatedProps = hideOnExpand(4563).useAnimatedProps(C);
  const obj4 = { style: null, animatedProps, children: children.children };
  const items = [tmp2.questDockContentCollapsed, animatedStyle];
  obj4.style = items;
  return jsx(activeQuestDockMode(6489), { style: null, animatedProps, children: children.children });
});
