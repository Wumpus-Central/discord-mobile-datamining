// === Module 15002: QuestDockContentCollapsed ===

// Module 15002 (QuestDockContentCollapsed)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import spring from "spring" /* 5604 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import QuestDockConstants from "QuestDockConstants" /* 14912 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { questDockContentCollapsed: obj2 };
obj2 = { bottom: undefined, zIndex: 2 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const __initData = { code: "function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData2 = { code: "function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?\"auto\":\"none\"};}" };
const __initData3 = { code: "function QuestDockContentCollapsedTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData4 = { code: "function QuestDockContentCollapsedTsx4(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let closure_0;
  let hideOnExpand;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(7);
  ({ children, hideOnExpand } = arg0);
  _require = tmp4;
  const tmp5 = closure_7();
  const activeQuestDockMode = react.useContext(tmp(14913).QuestDockGestureContext).activeQuestDockMode;
  const tmpResult = tmp(4618);
  class C {
    constructor() {
      const withSpring = spring.withSpring;
      let num = 1;
      spring;
      if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
        num = 1;
        if (closure_0) {
          num = 0;
        }
      }
      const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
      return obj;
    }
  }
  C.__closure = { withSpring: tmp(5604).withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: undefined === hideOnExpand || hideOnExpand, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  C.__workletHash = 13361221764426;
  C.__initData = __initData;
  ({ withSpring: tmp(5604).withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: undefined === hideOnExpand || hideOnExpand, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle = tmpResult.useAnimatedStyle(C);
  const fn = function l() {
    let pointerEvents = "auto";
    if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
      pointerEvents = "auto";
      if (closure_0) {
        pointerEvents = "none";
      }
    }
    return { pointerEvents };
  };
  fn.__closure = { activeQuestDockMode, QuestDockMode, hideOnExpand: undefined === hideOnExpand || hideOnExpand };
  fn.__workletHash = 10575811857405;
  fn.__initData = __initData2;
  const tmpResult2 = tmp(4618);
  const animatedProps = tmpResult2.useAnimatedProps(fn);
  if (cResult[0] === tmp5.questDockContentCollapsed) {
    let tmp8;
    if (cResult[1] === animatedStyle) {
      tmp8 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp8) {
        let tmp9;
        if (cResult[5] === animatedProps) {
          tmp9 = cResult[6];
        }
        return tmp9;
      }
    }
    const tmp12 = jsx(activeQuestDockMode(6577), { style: tmp8, animatedProps, children });
    let num = 3;
    cResult[3] = children;
    cResult[4] = tmp8;
    cResult[5] = animatedProps;
    cResult[6] = tmp12;
    tmp9 = tmp12;
  }
  const items = [tmp5.questDockContentCollapsed, animatedStyle];
  cResult[0] = tmp5.questDockContentCollapsed;
  cResult[1] = animatedStyle;
  cResult[2] = items;
  tmp8 = items;
}) : ((hideOnExpand) => {
  hideOnExpand = hideOnExpand.hideOnExpand;
  let tmp = undefined === hideOnExpand;
  const children = hideOnExpand.children;
  if (!tmp) {
    tmp = hideOnExpand;
  }
  hideOnExpand = tmp;
  const tmp2 = closure_7();
  const activeQuestDockMode = react.useContext(hideOnExpand(14913).QuestDockGestureContext).activeQuestDockMode;
  let obj = hideOnExpand(4618);
  class D {
    constructor() {
      const withSpring = spring.withSpring;
      let num = 1;
      spring;
      if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
        num = 1;
        if (hideOnExpand) {
          num = 0;
        }
      }
      const obj = { opacity: withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
      return obj;
    }
  }
  D.__closure = { withSpring: hideOnExpand(5604).withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: tmp, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  D.__workletHash = 3717871904776;
  D.__initData = __initData3;
  ({ withSpring: hideOnExpand(5604).withSpring, activeQuestDockMode, QuestDockMode, hideOnExpand: tmp, QUEST_DOCK_MODE_CHANGE_PHYSICS });
  const animatedStyle = obj.useAnimatedStyle(D);
  const fn = function _() {
    let pointerEvents = "auto";
    if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
      pointerEvents = "auto";
      if (hideOnExpand) {
        pointerEvents = "none";
      }
    }
    return { pointerEvents };
  };
  fn.__closure = { activeQuestDockMode, QuestDockMode, hideOnExpand: tmp };
  fn.__workletHash = 6904949409659;
  fn.__initData = __initData4;
  const obj3 = hideOnExpand(4618);
  const animatedProps = obj3.useAnimatedProps(fn);
  const items = [tmp2.questDockContentCollapsed, animatedStyle];
  return jsx(activeQuestDockMode(6577), { style: items, animatedProps, children });
}));
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default memoResult;