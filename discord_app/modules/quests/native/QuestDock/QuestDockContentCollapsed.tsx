// discord_app/modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { QuestDockMode } from "../../QuestConstants.tsx";
import { QUEST_DOCK_MODE_CHANGE_PHYSICS as closure_5 } from "QuestDockConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
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
  let hideOnExpand = children.hideOnExpand;
  let tmp = undefined === hideOnExpand;
  if (!tmp) {
    tmp = hideOnExpand;
  }
  hideOnExpand = tmp;
  const activeQuestDockMode = importAllResult.useContext(hideOnExpand(14448).QuestDockGestureContext).activeQuestDockMode;
  let obj = hideOnExpand(4115);
  const fn = function l() {
    let obj = hideOnExpand(closure_1_2[8]);
    let num = 1;
    if (activeQuestDockMode.get() !== closure_1_4.COLLAPSED) {
      num = 1;
      if (hideOnExpand) {
        num = 0;
      }
    }
    obj = { opacity: obj.withSpring(num, closure_1_5) };
    return obj;
  };
  obj = { withSpring: hideOnExpand(4744).withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: tmp, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  fn.__closure = obj;
  fn.__workletHash = 13361221764426;
  fn.__initData = closure_8;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const tmp2 = callback();
  class C {
    constructor() {
      pointerEvents = "auto";
      if (activeQuestDockMode.get() !== closure_1_4.COLLAPSED) {
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
  C.__initData = closure_9;
  const animatedProps = hideOnExpand(4115).useAnimatedProps(C);
  const style = [tmp2.questDockContentCollapsed, animatedStyle];
  return jsx(activeQuestDockMode(8125), { style, animatedProps, children: children.children });
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default memoResult;