// === Module 15379: QuestDockDragHandle ===

// Module 15379 (QuestDockDragHandle)
import spring from "spring" /* 5375 */;
import noop from "module_19" /* 19 */;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const QuestDockMode = fn(5979).QuestDockMode;
const QuestDockConstants = fn(15285);
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: hasOwnProperty, QUEST_DOCK_COLLAPSED_MAX_WIDTH: metroRequire } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
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
const __initData5 = { code: "function QuestDockDragHandleTsx6(){const{windowDimensions,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return{width:Math.min(windowDimensions.get().width,QUEST_DOCK_COLLAPSED_MAX_WIDTH)};}" };
const __initData6 = { code: "function QuestDockDragHandleTsx7(){const{getDragHandleOffsetLeft,activeQuestDockMode,questDockHorizontalGutterCollapsed,QuestDockMode}=this.__closure;return{left:getDragHandleOffsetLeft(activeQuestDockMode.get(),questDockHorizontalGutterCollapsed),transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}" };
const __initData7 = { code: "function QuestDockDragHandleTsx8(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const __initData8 = { code: "function QuestDockDragHandleTsx9(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockDragHandle(isExpanded) {
  const cResult = activeQuestDockMode(576).c(26);
  isExpanded = isExpanded.isExpanded;
  const tmp4 = closure_9();
  const context = youBarHorizontalMargin.useContext(activeQuestDockMode(15286).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  dependencyMap = tmp6;
  const obj = activeQuestDockMode(576);
  youBarHorizontalMargin = activeQuestDockMode(15287).useYouBarHorizontalMargin();
  let obj2 = activeQuestDockMode(15287);
  const fn = function n() {
    return { width: Math.min(windowDimensions.get().width, QUEST_DOCK_COLLAPSED_MAX_WIDTH) };
  };
  fn.__closure = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
  fn.__workletHash = 13640576219747;
  fn.__initData = __initData;
  const animatedStyle = activeQuestDockMode(4811).useAnimatedStyle(fn);
  let obj3 = activeQuestDockMode(4811);
  const obj4 = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
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
  const animatedStyle1 = activeQuestDockMode(4811).useAnimatedStyle(fn2);
  const obj5 = activeQuestDockMode(4811);
  const obj6 = { getDragHandleOffsetLeft, activeQuestDockMode, questDockHorizontalGutterCollapsed: youBarHorizontalMargin, QuestDockMode };
  class M {
    constructor() {
      tmp = closure_0(closure_2[11]);
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
  const obj7 = activeQuestDockMode(4811);
  M.__closure = { withSpring: activeQuestDockMode(5375).withSpring, isDefaultVariant: "default" === isExpanded.variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  M.__workletHash = 7055026667171;
  M.__initData = __initData3;
  const animatedStyle2 = obj7.useAnimatedStyle(M);
  const obj8 = { withSpring: activeQuestDockMode(5375).withSpring, isDefaultVariant: "default" === isExpanded.variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  class C {
    constructor() {
      tmp = closure_0(closure_2[11]);
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
  const obj9 = activeQuestDockMode(4811);
  C.__closure = { withSpring: activeQuestDockMode(5375).withSpring, isDefaultVariant: "default" === isExpanded.variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  C.__workletHash = 14421154962041;
  C.__initData = __initData4;
  const animatedStyle3 = obj9.useAnimatedStyle(C);
  if (cResult[0] === animatedStyle) {
    if (cResult[1] === tmp4.dragHandleWrapper) {
      let tmp12 = cResult[2];
    }
    if (cResult[3] === animatedStyle3) {
      if (cResult[4] === tmp4.dragHandleOverlay) {
        let tmp13 = cResult[5];
      }
      if (cResult[6] !== isExpanded) {
        const intl = tmp(1126).intl;
        const string = intl.string;
        let t = tmp(1126).t;
        if (isExpanded) {
          t = t["GQ+4bk"];
          let stringResult = string(t);
        } else {
          stringResult = string(t.Yplnt6);
        }
        cResult[6] = isExpanded;
        cResult[7] = stringResult;
      } else {
        if (cResult[8] !== cResult[7]) {
          const obj11 = { variant: "overlay", accessibilityLabel: tmp14 };
          const tmp20 = closure_7(tmp(6840).ActionSheetHeaderBar, obj11);
          cResult[8] = tmp14;
          cResult[9] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[9];
        }
        if (cResult[10] === tmp13) {
          if (cResult[11] === tmp18) {
            let tmp21 = cResult[12];
          }
          if (cResult[13] === animatedStyle2) {
            if (cResult[14] === tmp4.dragHandleOverlay) {
              let tmp25 = cResult[15];
            }
            const _Symbol = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp29 = closure_7(tmp(6840).ActionSheetHeaderBar, { variant: "default" });
              cResult[16] = tmp29;
              let tmp27 = tmp29;
            } else {
              tmp27 = cResult[16];
            }
            if (cResult[17] !== tmp25) {
              const obj12 = { style: tmp25, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: tmp27 };
              const tmp33 = closure_7(windowDimensions(6760), obj12);
              cResult[17] = tmp25;
              cResult[18] = tmp33;
              let tmp30 = tmp33;
            } else {
              tmp30 = cResult[18];
            }
            if (cResult[19] === animatedStyle1) {
              if (cResult[20] === tmp21) {
                if (cResult[21] === tmp30) {
                  let tmp34 = cResult[22];
                }
                if (cResult[23] === tmp12) {
                  if (cResult[24] === tmp34) {
                    let tmp39 = cResult[25];
                  }
                  return tmp39;
                }
                const obj13 = { style: tmp12, children: tmp34 };
                const tmp42 = closure_7(windowDimensions(6760), obj13);
                cResult[23] = tmp12;
                cResult[24] = tmp34;
                cResult[25] = tmp42;
                tmp39 = tmp42;
              }
            }
            const obj14 = { style: animatedStyle1, layout: tmp(15284).dimensionsLayoutTransition, children: null };
            let items = [tmp21, tmp30];
            obj14.children = items;
            const tmp38 = closure_8(windowDimensions(6760), obj14);
            cResult[19] = animatedStyle1;
            cResult[20] = tmp21;
            cResult[21] = tmp30;
            cResult[22] = tmp38;
            tmp34 = tmp38;
            const tmp37 = windowDimensions(6760);
          }
          const items1 = [tmp4.dragHandleOverlay, animatedStyle2];
          cResult[13] = animatedStyle2;
          cResult[14] = tmp4.dragHandleOverlay;
          cResult[15] = items1;
          tmp25 = items1;
        }
        const obj15 = { style: tmp13, children: tmp18 };
        const tmp24 = closure_7(windowDimensions(6760), obj15);
        cResult[10] = tmp13;
        cResult[11] = tmp18;
        cResult[12] = tmp24;
        tmp21 = tmp24;
      }
    }
    const items2 = [tmp4.dragHandleOverlay, animatedStyle3];
    cResult[3] = animatedStyle3;
    cResult[4] = tmp4.dragHandleOverlay;
    cResult[5] = items2;
    tmp13 = items2;
  }
  const items3 = [tmp4.dragHandleWrapper, animatedStyle];
  cResult[0] = animatedStyle;
  cResult[1] = tmp4.dragHandleWrapper;
  cResult[2] = items3;
  tmp12 = items3;
  const obj10 = { withSpring: activeQuestDockMode(5375).withSpring, isDefaultVariant: "default" === isExpanded.variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
}) : (function QuestDockDragHandle(arg0) {
  ({ isExpanded, variant } = arg0);
  const tmp = closure_9();
  const context = youBarHorizontalMargin.useContext(activeQuestDockMode(15286).QuestDockGestureContext);
  activeQuestDockMode = context.activeQuestDockMode;
  const windowDimensions = context.windowDimensions;
  dependencyMap = tmp5;
  youBarHorizontalMargin = activeQuestDockMode(15287).useYouBarHorizontalMargin();
  const obj = activeQuestDockMode(15287);
  const tmp2 = activeQuestDockMode;
  const fn = function n() {
    return { width: Math.min(windowDimensions.get().width, QUEST_DOCK_COLLAPSED_MAX_WIDTH) };
  };
  fn.__closure = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
  fn.__workletHash = 1440446516199;
  fn.__initData = __initData5;
  const animatedStyle = activeQuestDockMode(4811).useAnimatedStyle(fn);
  let obj2 = activeQuestDockMode(4811);
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
  fn2.__workletHash = 860392428202;
  fn2.__initData = __initData6;
  const animatedStyle1 = activeQuestDockMode(4811).useAnimatedStyle(fn2);
  const obj4 = activeQuestDockMode(4811);
  const obj5 = { getDragHandleOffsetLeft, activeQuestDockMode, questDockHorizontalGutterCollapsed: youBarHorizontalMargin, QuestDockMode };
  class M {
    constructor() {
      tmp = closure_0(closure_2[11]);
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
  const obj6 = activeQuestDockMode(4811);
  M.__closure = { withSpring: activeQuestDockMode(5375).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  M.__workletHash = 14664873965359;
  M.__initData = __initData7;
  const animatedStyle2 = obj6.useAnimatedStyle(M);
  const obj7 = { withSpring: activeQuestDockMode(5375).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  const fn3 = function k() {
    spring;
    if (!closure_2) {
      if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
        let num = 0.5;
      }
      const obj2 = { opacity: tmp2(num, QUEST_DOCK_MODE_CHANGE_PHYSICS) };
      return obj2;
    }
    num = 0;
  };
  const obj8 = activeQuestDockMode(4811);
  fn3.__closure = { withSpring: activeQuestDockMode(5375).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  fn3.__workletHash = 11824235765;
  fn3.__initData = __initData8;
  const animatedStyle3 = obj8.useAnimatedStyle(fn3);
  const obj10 = { style: null, children: null };
  let items = [tmp.dragHandleWrapper, animatedStyle];
  obj10.style = items;
  const obj9 = { withSpring: activeQuestDockMode(5375).withSpring, isDefaultVariant: "default" === variant, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS };
  const tmp12 = windowDimensions;
  const obj11 = { style: animatedStyle1, layout: null, children: null };
  const tmp13 = windowDimensions(6760);
  obj11.layout = activeQuestDockMode(15284).dimensionsLayoutTransition;
  const obj12 = { style: null, children: null };
  const items1 = [tmp.dragHandleOverlay, animatedStyle3];
  obj12.style = items1;
  const tmp15 = windowDimensions(6760);
  const intl = activeQuestDockMode(1126).intl;
  const string = intl.string;
  const t = activeQuestDockMode(1126).t;
  if (isExpanded) {
    let stringResult = string(t["GQ+4bk"]);
  } else {
    stringResult = string(t.Yplnt6);
  }
  obj12.children = closure_7(activeQuestDockMode(6840).ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult });
  const items2 = [closure_7(windowDimensions(6760), obj12), ];
  const obj13 = { style: null, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items3 = [tmp.dragHandleOverlay, animatedStyle2];
  obj13.style = items3;
  const tmp16 = windowDimensions(6760);
  obj13.children = closure_7(tmp2(6840).ActionSheetHeaderBar, { variant: "default" });
  items2[1] = closure_7(tmp12(6760), obj13);
  obj11.children = items2;
  obj10.children = closure_8(tmp15, obj11);
  return closure_7(tmp13, obj10);
}));