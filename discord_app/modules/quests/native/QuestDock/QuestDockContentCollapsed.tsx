// discord_app/modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import QuestDockGestureContext from "QuestDockGestureContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
const QuestDockMode = fn(6836).QuestDockMode;
let closure_5 = fn(17393).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj = { questDockContentCollapsed: null };
const obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.zIndex = 2;
obj.questDockContentCollapsed = obj3;
let closure_7 = createStyles.createStyles(obj);
let closure_8 = {
  code: "(function QuestDockContentCollapsedTsx1(){let[withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS]=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};})",
};
let closure_9 = {
  code: "(function QuestDockContentCollapsedTsx2(){let[activeQuestDockMode,QuestDockMode,hideOnExpand]=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default noop.memo(function QuestDockContentCollapsed(children) {
  const hideOnExpand = children.hideOnExpand;
  let tmp = undefined === hideOnExpand;
  if (!tmp) {
    tmp = hideOnExpand;
  }
  const activeQuestDockMode = noop.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  const tmp2 = closure_7();
  items = [closure_8, spring_spring.withSpring, activeQuestDockMode, QuestDockMode, tmp, closure_5];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class QuestDockContentCollapsedTsx1 {
    constructor() {
      tmp = closure_0;
      num = 1;
      if (closure_1.get() !== closure_2.COLLAPSED) {
        tmp2 = closure_3;
        num = 1;
        if (closure_3) {
          num = 0;
        }
      }
      obj = { opacity: tmp(num, closure_4) };
      return obj;
    }
  }
  const items1 = [tmp7, tmp8, tmp9, tmp10, tmp11];
  QuestDockContentCollapsedTsx1.__closure = items1;
  QuestDockContentCollapsedTsx1.__workletHash = 8739411300627;
  QuestDockContentCollapsedTsx1.__initData = tmp6;
  const animatedStyle = _mod1652.useAnimatedStyle(QuestDockContentCollapsedTsx1);
  const items2 = [closure_9, activeQuestDockMode, QuestDockMode, tmp];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp13, tmp14, tmp15, tmp16] = items2;
  class QuestDockContentCollapsedTsx2 {
    constructor() {
      pointerEvents = "auto";
      if (closure_0.get() !== closure_1.COLLAPSED) {
        tmp = closure_2;
        pointerEvents = "auto";
        if (closure_2) {
          pointerEvents = "none";
        }
      }
      return { pointerEvents };
    }
  }
  const items3 = [tmp14, tmp15, tmp16];
  QuestDockContentCollapsedTsx2.__closure = items3;
  QuestDockContentCollapsedTsx2.__workletHash = 6789144201508;
  QuestDockContentCollapsedTsx2.__initData = tmp13;
  const animatedProps = _mod1652.useAnimatedProps(QuestDockContentCollapsedTsx2);
  const obj2 = { style: null, animatedProps, children: children.children };
  const items4 = [tmp2.questDockContentCollapsed, animatedStyle];
  obj2.style = items4;
  return jsx(_modDef1652.View, { style: null, animatedProps, children: children.children });
});
