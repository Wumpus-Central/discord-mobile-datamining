// === Module 16567: QuestDockDragHandle ===

// Module 16567 (QuestDockDragHandle)
import spring from "spring" /* 5248 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7170 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestDockMode = fn(6711).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = fn(16480).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4972);
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
const __initData4 = { code: "function QuestDockDragHandleTsx4(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
const __initData5 = { code: "function QuestDockDragHandleTsx5(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData6 = { code: "function QuestDockDragHandleTsx6(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockDragHandle(isExpanded) {
  const cResult = activeQuestDockMode(576).c(23);
  isExpanded = isExpanded.isExpanded;
  const tmp4 = closure_8();
  activeQuestDockMode = noop.useContext(activeQuestDockMode(16481).QuestDockGestureContext).activeQuestDockMode;
  importDefault = tmp5;
  const obj = activeQuestDockMode(576);
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
  const animatedStyle = activeQuestDockMode(5053).useAnimatedStyle(fn);
  let obj2 = activeQuestDockMode(5053);
  const obj3 = { activeQuestDockMode, QuestDockMode };
  class M {
    constructor() {
      tmp = closure_0(closure_2[10]);
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
  const obj4 = activeQuestDockMode(5053);
  M.__closure = { withSpring: activeQuestDockMode(5248).withSpring, isDefaultVariant: "default" === isExpanded.variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  M.__workletHash = 6896281369829;
  M.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(M);
  const obj5 = { withSpring: activeQuestDockMode(5248).withSpring, isDefaultVariant: "default" === isExpanded.variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
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
  const obj6 = activeQuestDockMode(5053);
  fn2.__closure = { withSpring: activeQuestDockMode(5248).withSpring, isDefaultVariant: "default" === isExpanded.variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn2.__workletHash = 7780416831295;
  fn2.__initData = __initData3;
  const animatedStyle2 = obj6.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle2) {
    if (cResult[1] === tmp4.dragHandleOverlay) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] !== isExpanded) {
      const intl = tmp(1125).intl;
      const string = intl.string;
      let t = tmp(1125).t;
      if (isExpanded) {
        t = t["GQ+4bk"];
        let stringResult = string(t);
      } else {
        stringResult = string(t.Yplnt6);
      }
      cResult[3] = isExpanded;
      cResult[4] = stringResult;
    } else {
      if (cResult[5] !== cResult[4]) {
        const obj8 = { variant: "overlay", accessibilityLabel: tmp10 };
        const tmp16 = closure_6(tmp(5583).ActionSheetHeaderBar, obj8);
        cResult[5] = tmp10;
        cResult[6] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === tmp9) {
        if (cResult[8] === tmp14) {
          let tmp17 = cResult[9];
        }
        if (cResult[10] === animatedStyle1) {
          if (cResult[11] === tmp4.dragHandleOverlay) {
            let tmp21 = cResult[12];
          }
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp25 = closure_6(tmp(5583).ActionSheetHeaderBar, { variant: "default" });
            cResult[13] = tmp25;
            let tmp23 = tmp25;
          } else {
            tmp23 = cResult[13];
          }
          if (cResult[14] !== tmp21) {
            const obj9 = { style: tmp21, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp23 };
            const tmp29 = closure_6(ReanimatedNativeViewDefault, obj9);
            cResult[14] = tmp21;
            cResult[15] = tmp29;
            let tmp26 = tmp29;
          } else {
            tmp26 = cResult[15];
          }
          if (cResult[16] === animatedStyle) {
            if (cResult[17] === tmp17) {
              if (cResult[18] === tmp26) {
                let tmp30 = cResult[19];
              }
              if (cResult[20] === tmp4.dragHandleWrapper) {
                if (cResult[21] === tmp30) {
                  let tmp35 = cResult[22];
                }
                return tmp35;
              }
              const obj10 = { style: tmp4.dragHandleWrapper, children: tmp30 };
              const tmp38 = closure_6(ReanimatedNativeViewDefault, obj10);
              cResult[20] = tmp4.dragHandleWrapper;
              cResult[21] = tmp30;
              cResult[22] = tmp38;
              tmp35 = tmp38;
            }
          }
          const obj11 = { style: animatedStyle, layout: tmp(16479).dimensionsLayoutTransition, children: null };
          let items = [tmp17, tmp26];
          obj11.children = items;
          const tmp34 = closure_7(ReanimatedNativeViewDefault, obj11);
          cResult[16] = animatedStyle;
          cResult[17] = tmp17;
          cResult[18] = tmp26;
          cResult[19] = tmp34;
          tmp30 = tmp34;
        }
        const items1 = [tmp4.dragHandleOverlay, animatedStyle1];
        cResult[10] = animatedStyle1;
        cResult[11] = tmp4.dragHandleOverlay;
        cResult[12] = items1;
        tmp21 = items1;
      }
      const obj12 = { style: tmp9, children: tmp14 };
      const tmp20 = closure_6(ReanimatedNativeViewDefault, obj12);
      cResult[7] = tmp9;
      cResult[8] = tmp14;
      cResult[9] = tmp20;
      tmp17 = tmp20;
    }
  }
  const items2 = [tmp4.dragHandleOverlay, animatedStyle2];
  cResult[0] = animatedStyle2;
  cResult[1] = tmp4.dragHandleOverlay;
  cResult[2] = items2;
  tmp9 = items2;
  const obj7 = { withSpring: activeQuestDockMode(5248).withSpring, isDefaultVariant: "default" === isExpanded.variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
}) : (function QuestDockDragHandle(arg0) {
  ({ isExpanded, variant } = arg0);
  const tmp = closure_8();
  activeQuestDockMode = noop.useContext(activeQuestDockMode(16481).QuestDockGestureContext).activeQuestDockMode;
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
  fn.__workletHash = 15319778954170;
  fn.__initData = __initData4;
  const animatedStyle = activeQuestDockMode(5053).useAnimatedStyle(fn);
  const obj = activeQuestDockMode(5053);
  let obj2 = { activeQuestDockMode, QuestDockMode };
  const tmp2 = activeQuestDockMode;
  const fn2 = function l() {
    spring;
    if (!closure_1) {
      if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
        let num = 0;
      }
      const obj2 = { opacity: tmp2(num, closure_5) };
      return obj2;
    }
    num = 1;
  };
  const obj3 = activeQuestDockMode(5053);
  fn2.__closure = { withSpring: activeQuestDockMode(5248).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn2.__workletHash = 6699454768642;
  fn2.__initData = __initData5;
  const animatedStyle1 = obj3.useAnimatedStyle(fn2);
  const obj4 = { withSpring: activeQuestDockMode(5248).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  const fn3 = function _() {
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
  const obj5 = activeQuestDockMode(5053);
  fn3.__closure = { withSpring: activeQuestDockMode(5248).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn3.__workletHash = 2024198657306;
  fn3.__initData = __initData6;
  const animatedStyle2 = obj5.useAnimatedStyle(fn3);
  const obj7 = { style: tmp.dragHandleWrapper, children: null };
  const obj6 = { withSpring: activeQuestDockMode(5248).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  const obj8 = { style: animatedStyle, layout: null, children: null };
  const tmp10 = ReanimatedNativeViewDefault;
  obj8.layout = activeQuestDockMode(16479).dimensionsLayoutTransition;
  const obj9 = { style: null, children: null };
  let items = [tmp.dragHandleOverlay, animatedStyle2];
  obj9.style = items;
  const tmp12 = ReanimatedNativeViewDefault;
  const intl = activeQuestDockMode(1125).intl;
  const string = intl.string;
  const t = activeQuestDockMode(1125).t;
  if (isExpanded) {
    let stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  obj9.children = closure_6(activeQuestDockMode(5583).ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult });
  const items1 = [closure_6(ReanimatedNativeViewDefault, obj9), ];
  const obj10 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items2 = [tmp.dragHandleOverlay, animatedStyle1];
  obj10.style = items2;
  obj10.children = closure_6(tmp2(5583).ActionSheetHeaderBar, { variant: "default" });
  items1[1] = closure_6(ReanimatedNativeViewDefault, obj10);
  obj8.children = items1;
  obj7.children = closure_7(tmp12, obj8);
  return closure_6(tmp10, obj7);
}));