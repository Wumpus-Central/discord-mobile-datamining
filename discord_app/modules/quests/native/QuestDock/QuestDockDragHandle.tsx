// === Module 17089: QuestDockDragHandle ===

// Module 17089 (QuestDockDragHandle)
import spring from "spring" /* 5632 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7235 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestDockMode = fn(6775).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = fn(17001).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj = { dragHandleWrapper: null, dragHandleOverlay: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.zIndex = 4;
obj.dragHandleWrapper = obj3;
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.bottom = undefined;
obj.dragHandleOverlay = obj4;
let closure_8 = createStyles.createStyles(obj);
const __initData = { code: "function QuestDockDragHandleTsx1(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
const __initData2 = { code: "function QuestDockDragHandleTsx2(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData3 = { code: "function QuestDockDragHandleTsx3(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default noop.memo(function QuestDockDragHandle(arg0) {
  ({ isExpanded, variant } = arg0);
  const tmp = closure_8();
  activeQuestDockMode = noop.useContext(activeQuestDockMode(17002).QuestDockGestureContext).activeQuestDockMode;
  importDefault = tmp4;
  const fn = function c() {
    let num = 0;
    if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
      num = 0;
      if (activeQuestDockMode.get() !== tmp.SOFT_DISMISSED) {
        num = -4;
      }
    }
    const obj2 = { transform: null };
    const items = [{ translateY: num }];
    obj2.transform = items;
    return obj2;
  };
  fn.__closure = { activeQuestDockMode, QuestDockMode };
  fn.__workletHash = 8792527248223;
  fn.__initData = __initData;
  const animatedStyle = activeQuestDockMode(5090).useAnimatedStyle(fn);
  const obj = activeQuestDockMode(5090);
  let obj2 = { activeQuestDockMode, QuestDockMode };
  const tmp2 = activeQuestDockMode;
  class M {
    constructor() {
      tmp = closure_0(closure_2[8]);
      if (!closure_1) {
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
  const obj3 = activeQuestDockMode(5090);
  M.__closure = { withSpring: activeQuestDockMode(5632).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  M.__workletHash = 6896281369829;
  M.__initData = __initData2;
  const animatedStyle1 = obj3.useAnimatedStyle(M);
  const obj4 = { withSpring: activeQuestDockMode(5632).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  const fn2 = function k() {
    spring;
    if (!closure_1) {
      if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
        let num = 0.5;
      }
      const obj2 = { opacity: tmp2(num, closure_5) };
      return obj2;
    }
    num = 0;
  };
  const obj5 = activeQuestDockMode(5090);
  fn2.__closure = { withSpring: activeQuestDockMode(5632).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn2.__workletHash = 7780416831295;
  fn2.__initData = __initData3;
  const animatedStyle2 = obj5.useAnimatedStyle(fn2);
  const obj7 = { style: tmp.dragHandleWrapper, children: null };
  const obj6 = { withSpring: activeQuestDockMode(5632).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  const obj8 = { style: animatedStyle, layout: null, children: null };
  const tmp10 = ReanimatedNativeViewDefault;
  obj8.layout = activeQuestDockMode(17000).dimensionsLayoutTransition;
  const obj9 = { style: null, children: null };
  let items = [tmp.dragHandleOverlay, animatedStyle2];
  obj9.style = items;
  const tmp12 = ReanimatedNativeViewDefault;
  const intl = activeQuestDockMode(1114).intl;
  const string = intl.string;
  const t = activeQuestDockMode(1114).t;
  if (isExpanded) {
    let stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  obj9.children = closure_6(activeQuestDockMode(5590).ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult });
  const items1 = [closure_6(ReanimatedNativeViewDefault, obj9), ];
  const obj10 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items2 = [tmp.dragHandleOverlay, animatedStyle1];
  obj10.style = items2;
  obj10.children = closure_6(tmp2(5590).ActionSheetHeaderBar, { variant: "default" });
  items1[1] = closure_6(ReanimatedNativeViewDefault, obj10);
  obj8.children = items1;
  obj7.children = closure_7(tmp12, obj8);
  return closure_6(tmp10, obj7);
});