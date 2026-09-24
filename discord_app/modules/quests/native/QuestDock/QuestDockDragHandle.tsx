// === Module 15524: QuestDockDragHandle ===

// Module 15524 (QuestDockDragHandle)
import spring from "spring" /* 5272 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestDockMode = fn(5749).QuestDockMode;
const QuestDockConstants = fn(15431);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: hasOwnProperty, QUEST_DOCK_COLLAPSED_MAX_WIDTH: metroRequire } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj = { dragHandleWrapper: null, dragHandleOverlay: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.right = undefined;
obj3.zIndex = 4;
obj.dragHandleWrapper = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.bottom = undefined;
obj.dragHandleOverlay = obj4;
let closure_9 = createStyles.createStyles(obj);
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
const __initData = { code: "function QuestDockDragHandleTsx2(){const{windowDimensions,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return{width:Math.min(windowDimensions.get().width,QUEST_DOCK_COLLAPSED_MAX_WIDTH)};}" };
const __initData2 = { code: "function QuestDockDragHandleTsx3(){const{getDragHandleOffsetLeft,activeQuestDockMode,questDockHorizontalGutterCollapsed,QuestDockMode}=this.__closure;return{left:getDragHandleOffsetLeft(activeQuestDockMode.get(),questDockHorizontalGutterCollapsed),transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
const __initData3 = { code: "function QuestDockDragHandleTsx4(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData4 = { code: "function QuestDockDragHandleTsx5(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default noop.memo(function QuestDockDragHandle(arg0) {
  ({ isExpanded, variant } = arg0);
  const tmp = closure_9();
  const context = youBarHorizontalMargin.useContext(activeQuestDockMode(15432).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  dependencyMap = tmp5;
  youBarHorizontalMargin = activeQuestDockMode(15433).useYouBarHorizontalMargin();
  const obj = activeQuestDockMode(15433);
  const tmp2 = activeQuestDockMode;
  const fn = function n() {
    return { width: Math.min(windowDimensions.get().width, QUEST_DOCK_COLLAPSED_MAX_WIDTH) };
  };
  fn.__closure = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
  fn.__workletHash = 13640576219747;
  fn.__initData = __initData;
  const animatedStyle = activeQuestDockMode(4561).useAnimatedStyle(fn);
  let obj2 = activeQuestDockMode(4561);
  let obj3 = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
  const fn2 = function u() {
    if (typeof getDragHandleOffsetLeft === "function") {
      let num = 0;
      if (tmp !== QuestDockMode.EXPANDED) {
        num = -1 * tmp2;
      }
      const obj2 = { left: num, transform: null };
      let num3 = 0;
      if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
        num3 = 0;
        if (activeQuestDockMode.get() !== QuestDockMode.SOFT_DISMISSED) {
          num3 = -4;
        }
      }
      const obj3 = { translateY: num3 };
      const items = [obj3];
      obj2.transform = items;
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  fn2.__closure = { getDragHandleOffsetLeft, activeQuestDockMode, questDockHorizontalGutterCollapsed: youBarHorizontalMargin, QuestDockMode };
  fn2.__workletHash = 6256743736366;
  fn2.__initData = __initData2;
  const animatedStyle1 = activeQuestDockMode(4561).useAnimatedStyle(fn2);
  const obj4 = activeQuestDockMode(4561);
  const obj5 = { getDragHandleOffsetLeft, activeQuestDockMode, questDockHorizontalGutterCollapsed: youBarHorizontalMargin, QuestDockMode };
  class M {
    constructor() {
      tmp = closure_0(closure_2[9]);
      if (!closure_2) {
        obj = activeQuestDockMode;
        if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
          num = 0;
        }
        obj1 = { opacity: null };
        tmp4 = closure_5;
        obj1.opacity = tmp2(num, closure_5);
        return obj1;
      }
      num = 1;
      return;
    }
  }
  const obj6 = activeQuestDockMode(4561);
  M.__closure = { withSpring: activeQuestDockMode(5272).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  M.__workletHash = 7055026667171;
  M.__initData = __initData3;
  const animatedStyle2 = obj6.useAnimatedStyle(M);
  const obj7 = { withSpring: activeQuestDockMode(5272).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  class C {
    constructor() {
      tmp = closure_0(closure_2[9]);
      if (!closure_2) {
        obj = activeQuestDockMode;
        if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
          num = 0.5;
        }
        obj1 = { opacity: null };
        tmp4 = closure_5;
        obj1.opacity = tmp2(num, closure_5);
        return obj1;
      }
      num = 0;
      return;
    }
  }
  const obj8 = activeQuestDockMode(4561);
  C.__closure = { withSpring: activeQuestDockMode(5272).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  C.__workletHash = 14421154962041;
  C.__initData = __initData4;
  const animatedStyle3 = obj8.useAnimatedStyle(C);
  const obj10 = { style: null, children: null };
  let items = [tmp.dragHandleWrapper, animatedStyle];
  obj10.style = items;
  const obj9 = { withSpring: activeQuestDockMode(5272).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  const tmp12 = windowDimensions;
  const obj11 = { style: animatedStyle1, layout: null, children: null };
  const tmp13 = windowDimensions(7406);
  obj11.layout = activeQuestDockMode(15430).dimensionsLayoutTransition;
  const obj12 = { style: null, children: null };
  const items1 = [tmp.dragHandleOverlay, animatedStyle3];
  obj12.style = items1;
  const tmp15 = windowDimensions(7406);
  const intl = activeQuestDockMode(1115).intl;
  const string = intl.string;
  const t = activeQuestDockMode(1115).t;
  if (isExpanded) {
    let stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  obj12.children = closure_7(activeQuestDockMode(7487).ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult });
  const items2 = [closure_7(windowDimensions(7406), obj12), ];
  const obj13 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items3 = [tmp.dragHandleOverlay, animatedStyle2];
  obj13.style = items3;
  const tmp16 = windowDimensions(7406);
  obj13.children = closure_7(tmp2(7487).ActionSheetHeaderBar, { variant: "default" });
  items2[1] = closure_7(tmp12(7406), obj13);
  obj11.children = items2;
  obj10.children = closure_8(tmp15, obj11);
  return closure_7(tmp13, obj10);
});