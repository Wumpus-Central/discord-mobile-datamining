// discord_app/modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx
import importAllResult from "noop";
import { QuestDockMode } from "QuestsExperimentLocations";
import { QUEST_DOCK_MODE_CHANGE_PHYSICS as closure_5 } from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { CONFIG_NEVER_ANIMATE } from "../../../../design/animation/reanimated/spring/spring.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";
import { QuestDockMode } from "QuestDockGestureContext.tsx";

let require = arg1;
let c3 = importAllResult;
let obj = { questDockContentCollapsed: null };
obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj.bottom = undefined;
obj.zIndex = 2;
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
let closure_8 = { code: "function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_9 = { code: "function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}" };
const memoResult = importAllResult.memo(function QuestDockContentCollapsed(children) {
  const hideOnExpand = children.hideOnExpand;
  let tmp = undefined === hideOnExpand;
  if (!tmp) {
    tmp = hideOnExpand;
  }
  const require = tmp;
  const activeQuestDockMode = importAllResult.useContext(QuestDockMode.QuestDockGestureContext).activeQuestDockMode;
  let obj = ReanimatedRexport;
  const fn = function l() {
    let obj = tmp(outer1_2[8]);
    let num = 1;
    if (activeQuestDockMode.get() !== outer1_4.COLLAPSED) {
      num = 1;
      if (tmp) {
        num = 0;
      }
    }
    obj = { opacity: obj.withSpring(num, outer1_5) };
    return obj;
  };
  obj = { withSpring: CONFIG_NEVER_ANIMATE.withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: tmp, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  fn.__closure = obj;
  fn.__workletHash = 13361221764426;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp2 = callback();
  class C {
    constructor() {
      pointerEvents = "auto";
      if (activeQuestDockMode.get() !== outer1_4.COLLAPSED) {
        tmp = closure_0;
        pointerEvents = "auto";
        if (closure_0) {
          pointerEvents = "none";
        }
      }
      return { pointerEvents };
    }
  }
  C.__closure = { activeQuestDockMode, QuestDockMode, hideOnExpand: tmp };
  C.__workletHash = 14339269503421;
  C.__initData = closure_9;
  const animatedProps = ReanimatedRexport.useAnimatedProps(C);
  const style = [tmp2.questDockContentCollapsed, animatedStyle];
  return jsx(activeQuestDockMode(7791), { style, animatedProps, children: children.children });
});
const result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default memoResult;