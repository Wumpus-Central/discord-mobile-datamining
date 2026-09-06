// === Module 15188: QuestDockDragHandle ===

// Module 15188 (QuestDockDragHandle)
import spring from "spring" /* 4974 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestDockMode = fn(5444).QuestDockMode;
const QuestDockConstants = fn(15095);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: hasOwnProperty, QUEST_DOCK_COLLAPSED_MAX_WIDTH: metroRequire } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let obj = { dragHandleWrapper: null, dragHandleOverlay: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.bottom = undefined;
obj.right = undefined;
obj.zIndex = 4;
obj.dragHandleWrapper = obj;
const createStyles = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.bottom = undefined;
obj.dragHandleOverlay = createStyles;
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
  const context = youBarHorizontalMargin.useContext(activeQuestDockMode(15096).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  dependencyMap = tmp5;
  let obj = activeQuestDockMode(15097);
  youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
  let obj1 = activeQuestDockMode(4296);
  const fn = function n() {
    return { width: Math.min(windowDimensions.get().width, QUEST_DOCK_COLLAPSED_MAX_WIDTH) };
  };
  obj = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
  fn.__closure = obj;
  fn.__workletHash = 13640576219747;
  fn.__initData = __initData;
  const animatedStyle = obj1.useAnimatedStyle(fn);
  let obj3 = activeQuestDockMode(4296);
  const fn2 = function u() {
    let obj = activeQuestDockMode;
    if (typeof getDragHandleOffsetLeft === "function") {
      let num = 0;
      if (tmp !== QuestDockMode.EXPANDED) {
        num = -1 * tmp2;
      }
      obj = { left: num, transform: null };
      let num3 = 0;
      if (obj.get() !== QuestDockMode.CLOSED) {
        num3 = 0;
        if (obj.get() !== QuestDockMode.SOFT_DISMISSED) {
          num3 = -4;
        }
      }
      obj = { translateY: num3 };
      const items = [obj];
      obj.transform = items;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  obj = { getDragHandleOffsetLeft, activeQuestDockMode, questDockHorizontalGutterCollapsed: youBarHorizontalMargin, QuestDockMode };
  fn2.__closure = obj;
  fn2.__workletHash = 6256743736366;
  fn2.__initData = __initData2;
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  let obj5 = activeQuestDockMode(4296);
  class M {
    constructor() {
      tmp = closure_0(closure_2[9]);
      if (!closure_2) {
        obj = activeQuestDockMode;
        if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
          num = 0;
        }
        obj = { opacity: null };
        tmp4 = closure_5;
        obj.opacity = tmp2(num, closure_5);
        return obj;
      }
      num = 1;
      return;
    }
  }
  obj1 = { withSpring: activeQuestDockMode(4974).withSpring, isDefaultVariant: tmp5, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  M.__closure = obj1;
  M.__workletHash = 7055026667171;
  M.__initData = __initData3;
  const animatedStyle2 = obj5.useAnimatedStyle(M);
  class C {
    constructor() {
      tmp = closure_0(closure_2[9]);
      if (!closure_2) {
        obj = activeQuestDockMode;
        if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
          num = 0.5;
        }
        obj = { opacity: null };
        tmp4 = closure_5;
        obj.opacity = tmp2(num, closure_5);
        return obj;
      }
      num = 0;
      return;
    }
  }
  const obj8 = activeQuestDockMode(4296);
  const tmp2 = activeQuestDockMode;
  C.__closure = { withSpring: activeQuestDockMode(4974).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  C.__workletHash = 14421154962041;
  C.__initData = __initData4;
  const animatedStyle3 = obj8.useAnimatedStyle(C);
  obj3 = { style: null, children: null };
  let items = [tmp.dragHandleWrapper, animatedStyle];
  obj3.style = items;
  const obj2 = { withSpring: activeQuestDockMode(4974).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  const tmp12 = windowDimensions;
  const obj4 = { style: animatedStyle1, layout: null, children: null };
  const tmp13 = windowDimensions(7073);
  obj4.layout = activeQuestDockMode(15094).dimensionsLayoutTransition;
  obj5 = { style: null, children: null };
  const items1 = [tmp.dragHandleOverlay, animatedStyle3];
  obj5.style = items1;
  const tmp15 = windowDimensions(7073);
  const intl = activeQuestDockMode(1114).intl;
  const string = intl.string;
  const t = activeQuestDockMode(1114).t;
  if (isExpanded) {
    let stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  obj5.children = closure_7(activeQuestDockMode(7154).ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult });
  const items2 = [closure_7(windowDimensions(7073), obj5), ];
  const obj6 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items3 = [tmp.dragHandleOverlay, animatedStyle2];
  obj6.style = items3;
  const tmp16 = windowDimensions(7073);
  obj6.children = closure_7(tmp2(7154).ActionSheetHeaderBar, { variant: "default" });
  items2[1] = closure_7(tmp12(7073), obj6);
  obj4.children = items2;
  obj3.children = closure_8(tmp15, obj4);
  return closure_7(tmp13, obj3);
});