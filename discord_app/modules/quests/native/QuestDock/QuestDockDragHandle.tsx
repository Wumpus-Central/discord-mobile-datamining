// === Module 14637: QuestDockMode ===

// Module 14637 (QuestDockMode)
import importAllResult from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { QuestDockMode } from "QuestsExperimentLocations" /* 5268 */;
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT" /* 14545 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
let c3 = importAllResult;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: c5, QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_6 } = QUEST_DOCK_COLLAPSED_HEIGHT);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { dragHandleWrapper: null, dragHandleOverlay: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.bottom = undefined;
obj.right = undefined;
obj.zIndex = 4;
obj[0] = obj;
createCacheKey = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.bottom = undefined;
obj[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(obj);
function getDragHandleOffsetLeft(arg0, arg1) {
  let num = 0;
  if (arg0 !== QuestDockMode.EXPANDED) {
    num = -1 * arg1;
  }
  return num;
}
getDragHandleOffsetLeft.__closure = { QuestDockMode };
getDragHandleOffsetLeft.__workletHash = 4145264969027;
getDragHandleOffsetLeft.__initData = { code: "function getDragHandleOffsetLeft_QuestDockDragHandleTsx1(activeQuestDockMode,horizontalEdgeGutter){const{QuestDockMode}=this.__closure;switch(activeQuestDockMode){case QuestDockMode.EXPANDED:return 0;default:return horizontalEdgeGutter*-1;}}" };
let closure_11 = { code: "function QuestDockDragHandleTsx2(){const{windowDimensions,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return{width:Math.min(windowDimensions.get().width,QUEST_DOCK_COLLAPSED_MAX_WIDTH)};}" };
let closure_12 = { code: "function QuestDockDragHandleTsx3(){const{getDragHandleOffsetLeft,activeQuestDockMode,questDockHorizontalGutterCollapsed,isVisualRefreshEnabled,QuestDockMode}=this.__closure;return{left:getDragHandleOffsetLeft(activeQuestDockMode.get(),questDockHorizontalGutterCollapsed),transform:[{translateY:isVisualRefreshEnabled&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
let closure_13 = { code: "function QuestDockDragHandleTsx4(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
let closure_14 = { code: "function QuestDockDragHandleTsx5(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const memoResult = importAllResult.memo(function QuestDockDragHandle(arg0) {
  ({ isExpanded, variant } = arg0);
  const tmp = callback();
  const context = youBarHorizontalMargin.useContext(activeQuestDockMode(14546).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  dependencyMap = tmp5;
  let obj = activeQuestDockMode(14547);
  youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  obj1 = activeQuestDockMode(4120);
  const fn = function n() {
    return { width: Math.min(windowDimensions.get().width, closure_1_6) };
  };
  obj = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH: closure_6 };
  fn.__closure = obj;
  fn.__workletHash = 13640576219747;
  fn.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj3 = activeQuestDockMode(1367);
  const enabled = obj3.useMobileVisualRefreshConfig({ location: "QuestDockDragHandle" }).enabled;
  let obj4 = activeQuestDockMode(4120);
  const fn2 = function u() {
    let obj = activeQuestDockMode;
    const value = activeQuestDockMode.get();
    if (typeof closure_1_10 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let num = 0;
    if (value !== enabled.EXPANDED) {
      num = -1 * youBarHorizontalMargin;
    }
    obj = { left: num, transform: null };
    let num3 = 0;
    if (enabled) {
      num3 = 0;
      if (obj.get() !== tmp3.CLOSED) {
        num3 = 0;
        if (obj.get() !== tmp3.SOFT_DISMISSED) {
          num3 = -4;
        }
      }
    }
    const items = [{ translateY: num3 }];
    obj[1] = items;
    return obj;
  };
  obj = { getDragHandleOffsetLeft, activeQuestDockMode, questDockHorizontalGutterCollapsed: youBarHorizontalMargin, isVisualRefreshEnabled: enabled, QuestDockMode: enabled };
  fn2.__closure = obj;
  fn2.__workletHash = 2091098328770;
  fn2.__initData = closure_12;
  const animatedStyle1 = obj4.useAnimatedStyle(fn2);
  let obj6 = activeQuestDockMode(4120);
  class M {
    constructor() {
      tmp = activeQuestDockMode(closure_2[10]);
      if (!closure_2) {
        obj = activeQuestDockMode;
        if (activeQuestDockMode.get() !== enabled.CLOSED) {
          num = 0;
        }
        obj = { opacity: null };
        tmp4 = closure_1_5;
        obj[0] = tmp2(num, closure_1_5);
        return obj;
      }
      num = 1;
      return;
    }
  }
  obj1 = { withSpring: activeQuestDockMode(4814).withSpring, isDefaultVariant: tmp5, activeQuestDockMode, QuestDockMode: enabled, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  M.__closure = obj1;
  M.__workletHash = 7055026667171;
  M.__initData = closure_13;
  const animatedStyle2 = obj6.useAnimatedStyle(M);
  class O {
    constructor() {
      tmp = activeQuestDockMode(closure_2[10]);
      if (!closure_2) {
        obj = activeQuestDockMode;
        if (activeQuestDockMode.get() !== enabled.CLOSED) {
          num = 0.5;
        }
        obj = { opacity: null };
        tmp4 = closure_1_5;
        obj[0] = tmp2(num, closure_1_5);
        return obj;
      }
      num = 0;
      return;
    }
  }
  const obj9 = activeQuestDockMode(4120);
  const tmp2 = activeQuestDockMode;
  O.__closure = { withSpring: activeQuestDockMode(4814).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode: enabled, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  O.__workletHash = 14421154962041;
  O.__initData = closure_14;
  const animatedStyle3 = obj9.useAnimatedStyle(O);
  obj3 = { style: items, children: null };
  items = [tmp.dragHandleWrapper, animatedStyle];
  const obj2 = { withSpring: activeQuestDockMode(4814).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode: enabled, QUEST_DOCK_MODE_CHANGE_PHYSICS: closure_5 };
  const tmp12 = windowDimensions;
  obj4 = { style: animatedStyle1, layout: null, children: null };
  const tmp13 = windowDimensions(8160);
  const tmp14 = closure_8;
  obj4[1] = activeQuestDockMode(14544).dimensionsLayoutTransition;
  const obj5 = { style: items1, children: null };
  items1 = [tmp.dragHandleOverlay, animatedStyle3];
  const tmp15 = windowDimensions(8160);
  const intl = activeQuestDockMode(1236).intl;
  const string = intl.string;
  const t = activeQuestDockMode(1236).t;
  if (isExpanded) {
    let stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  obj5[1] = closure_7(activeQuestDockMode(5818).ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult });
  const items2 = [closure_7(windowDimensions(8160), obj5), ];
  obj6 = { style: items3, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  items3 = [tmp.dragHandleOverlay, animatedStyle2];
  const tmp16 = windowDimensions(8160);
  obj6[4] = closure_7(tmp2(5818).ActionSheetHeaderBar, { variant: "default" });
  items2[1] = closure_7(tmp12(8160), obj6);
  obj4[2] = items2;
  obj3[1] = tmp14(tmp15, obj4);
  return closure_7(tmp13, obj3);
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default memoResult;