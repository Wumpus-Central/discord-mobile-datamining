// discord_app/modules/quests/native/QuestDock/QuestDockDragHandle.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import QuestDockConstants from "QuestDockConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const StyleSheet = react_native.StyleSheet;
const QuestDockMode = QuestConstants.QuestDockMode;
({ QUEST_DOCK_MODE_CHANGE_PHYSICS: hasOwnProperty, QUEST_DOCK_COLLAPSED_MAX_WIDTH: metroRequire } = QuestDockConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { dragHandleWrapper: obj2, dragHandleOverlay: obj3 };
obj2 = { bottom: undefined, right: undefined, zIndex: 4 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { bottom: undefined };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
function getDragHandleOffsetLeft(arg0, arg1) {
  let num = 0;
  if (arg0 !== QuestDockMode.EXPANDED) {
    num = -1 * arg1;
  }
  return num;
}
getDragHandleOffsetLeft.__closure = { QuestDockMode };
getDragHandleOffsetLeft.__workletHash = 4145264969027;
getDragHandleOffsetLeft.__initData = {
  code: "function getDragHandleOffsetLeft_QuestDockDragHandleTsx1(activeQuestDockMode,horizontalEdgeGutter){const{QuestDockMode}=this.__closure;switch(activeQuestDockMode){case QuestDockMode.EXPANDED:return 0;default:return horizontalEdgeGutter*-1;}}",
};
const __initData = {
  code: "function QuestDockDragHandleTsx2(){const{windowDimensions,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return{width:Math.min(windowDimensions.get().width,QUEST_DOCK_COLLAPSED_MAX_WIDTH)};}",
};
const __initData2 = {
  code: "function QuestDockDragHandleTsx3(){const{getDragHandleOffsetLeft,activeQuestDockMode,questDockHorizontalGutterCollapsed,QuestDockMode}=this.__closure;return{left:getDragHandleOffsetLeft(activeQuestDockMode.get(),questDockHorizontalGutterCollapsed),transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}",
};
const __initData3 = {
  code: "function QuestDockDragHandleTsx4(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}",
};
const __initData4 = {
  code: "function QuestDockDragHandleTsx5(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}",
};
const __initData5 = {
  code: "function QuestDockDragHandleTsx6(){const{windowDimensions,QUEST_DOCK_COLLAPSED_MAX_WIDTH}=this.__closure;return{width:Math.min(windowDimensions.get().width,QUEST_DOCK_COLLAPSED_MAX_WIDTH)};}",
};
const __initData6 = {
  code: "function QuestDockDragHandleTsx7(){const{getDragHandleOffsetLeft,activeQuestDockMode,questDockHorizontalGutterCollapsed,QuestDockMode}=this.__closure;return{left:getDragHandleOffsetLeft(activeQuestDockMode.get(),questDockHorizontalGutterCollapsed),transform:[{translateY:activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?-4:0}]};}",
};
const __initData7 = {
  code: "function QuestDockDragHandleTsx8(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isDefaultVariant||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}",
};
const __initData8 = {
  code: "function QuestDockDragHandleTsx9(){const{withSpring,isDefaultVariant,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isDefaultVariant&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}",
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (isExpanded) => {
        let activeQuestDockMode;
        let closure_2;
        let items;
        let youBarHorizontalMargin;
        const tmp = activeQuestDockMode;
        const tmp2 = dependencyMap;
        let obj = activeQuestDockMode(576);
        const cResult = obj.c(26);
        isExpanded = isExpanded.isExpanded;
        const variant = isExpanded.variant;
        const tmp4 = closure_9();
        const context = youBarHorizontalMargin.useContext(activeQuestDockMode(14913).QuestDockGestureContext);
        activeQuestDockMode = context.activeQuestDockMode;
        const windowDimensions = context.windowDimensions;
        dependencyMap = tmp6;
        let obj2 = activeQuestDockMode(14914);
        youBarHorizontalMargin = obj2.useYouBarHorizontalMargin();
        const obj3 = activeQuestDockMode(4618);
        const fn = function n() {
          const obj = { width: Math.min(windowDimensions.get().width, metroRequire) };
          return obj;
        };
        const obj4 = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
        fn.__closure = obj4;
        fn.__workletHash = 13640576219747;
        fn.__initData = __initData;
        const animatedStyle = obj3.useAnimatedStyle(fn);
        const fn2 = function u() {
          let items;
          if (typeof getDragHandleOffsetLeft === "function") {
            let num = 0;
            if (tmp !== QuestDockMode.EXPANDED) {
              num = -1 * tmp2;
            }
            let num3 = 0;
            const obj2 = { left: num, transform: items };
            if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
              num3 = 0;
              if (activeQuestDockMode.get() !== QuestDockMode.SOFT_DISMISSED) {
                num3 = -4;
              }
            }
            items = [{ translateY: num3 }];
            return obj2;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
        const obj6 = {
          getDragHandleOffsetLeft,
          activeQuestDockMode,
          questDockHorizontalGutterCollapsed: youBarHorizontalMargin,
          QuestDockMode,
        };
        fn2.__closure = obj6;
        fn2.__workletHash = 6256743736366;
        fn2.__initData = __initData2;
        const obj5 = activeQuestDockMode(4618);
        const animatedStyle1 = obj5.useAnimatedStyle(fn2);
        const obj7 = activeQuestDockMode(4618);
        class M {
          constructor() {
            spring;
            if (!closure_2) {
              let num;
              if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
                num = 0;
              }
              const obj2 = { opacity: tmp2(num, hasOwnProperty) };
              return obj2;
            }
            num = 1;
          }
        }
        M.__closure = {
          withSpring: activeQuestDockMode(5604).withSpring,
          isDefaultVariant: "default" === variant,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        };
        M.__workletHash = 7055026667171;
        M.__initData = __initData3;
        ({
          withSpring: activeQuestDockMode(5604).withSpring,
          isDefaultVariant: "default" === variant,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        });
        const animatedStyle2 = obj7.useAnimatedStyle(M);
        const obj9 = activeQuestDockMode(4618);
        class C {
          constructor() {
            spring;
            if (!closure_2) {
              let num;
              if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
                num = 0.5;
              }
              const obj2 = { opacity: tmp2(num, hasOwnProperty) };
              return obj2;
            }
            num = 0;
          }
        }
        C.__closure = {
          withSpring: activeQuestDockMode(5604).withSpring,
          isDefaultVariant: "default" === variant,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        };
        C.__workletHash = 14421154962041;
        C.__initData = __initData4;
        ({
          withSpring: activeQuestDockMode(5604).withSpring,
          isDefaultVariant: "default" === variant,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        });
        const animatedStyle3 = obj9.useAnimatedStyle(C);
        if (cResult[0] === animatedStyle) {
          let tmp12;
          if (cResult[1] === tmp4.dragHandleWrapper) {
            tmp12 = cResult[2];
          }
          if (cResult[3] === animatedStyle3) {
            let tmp13;
            let tmp14;
            let tmp16;
            if (cResult[4] === tmp4.dragHandleOverlay) {
              tmp13 = cResult[5];
            }
            if (cResult[6] !== isExpanded) {
              let stringResult;
              const intl = tmp(1126).intl;
              const string = intl.string;
              const t = tmp(1126).t;
              if (isExpanded) {
                stringResult = string(t["GQ+4bk"]);
              } else {
                stringResult = string(t.Yplnt6);
              }
              cResult[6] = isExpanded;
              cResult[7] = stringResult;
              tmp14 = stringResult;
            } else {
              tmp14 = cResult[7];
            }
            if (cResult[8] !== tmp14) {
              const obj11 = { variant: "overlay", accessibilityLabel: tmp14 };
              const tmp18 = closure_7(tmp(6656).ActionSheetHeaderBar, obj11);
              cResult[8] = tmp14;
              cResult[9] = tmp18;
              tmp16 = tmp18;
            } else {
              tmp16 = cResult[9];
            }
            if (cResult[10] === tmp13) {
              let tmp19;
              if (cResult[11] === tmp16) {
                tmp19 = cResult[12];
              }
              if (cResult[13] === animatedStyle2) {
                let tmp23;
                let tmp25;
                let tmp28;
                if (cResult[14] === tmp4.dragHandleOverlay) {
                  tmp23 = cResult[15];
                }
                const _Symbol = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp27 = closure_7(tmp(6656).ActionSheetHeaderBar, { variant: "default" });
                  cResult[16] = tmp27;
                  tmp25 = tmp27;
                } else {
                  tmp25 = cResult[16];
                }
                if (cResult[17] !== tmp23) {
                  const obj12 = {
                    style: tmp23,
                    pointerEvents: "none",
                    accessibilityElementsHidden: true,
                    importantForAccessibility: "no-hide-descendants",
                    children: tmp25,
                  };
                  const tmp31 = closure_7(windowDimensions(6577), obj12);
                  cResult[17] = tmp23;
                  cResult[18] = tmp31;
                  tmp28 = tmp31;
                } else {
                  tmp28 = cResult[18];
                }
                if (cResult[19] === animatedStyle1) {
                  if (cResult[20] === tmp19) {
                    let tmp32;
                    if (cResult[21] === tmp28) {
                      tmp32 = cResult[22];
                    }
                    if (cResult[23] === tmp12) {
                      let tmp37;
                      if (cResult[24] === tmp32) {
                        tmp37 = cResult[25];
                      }
                      return tmp37;
                    }
                    const obj13 = { style: tmp12, children: tmp32 };
                    const tmp40 = closure_7(windowDimensions(6577), obj13);
                    cResult[23] = tmp12;
                    cResult[24] = tmp32;
                    cResult[25] = tmp40;
                    tmp37 = tmp40;
                  }
                }
                const obj14 = { style: animatedStyle1, layout: tmp(14911).dimensionsLayoutTransition, children: items };
                items = [tmp19, tmp28];
                const tmp35 = windowDimensions(6577);
                const tmp36 = closure_8(tmp35, obj14);
                cResult[19] = animatedStyle1;
                cResult[20] = tmp19;
                cResult[21] = tmp28;
                cResult[22] = tmp36;
                tmp32 = tmp36;
              }
              const items1 = [tmp4.dragHandleOverlay, animatedStyle2];
              cResult[13] = animatedStyle2;
              cResult[14] = tmp4.dragHandleOverlay;
              cResult[15] = items1;
              tmp23 = items1;
            }
            const obj15 = { style: tmp13, children: tmp16 };
            const tmp22 = closure_7(windowDimensions(6577), obj15);
            cResult[10] = tmp13;
            cResult[11] = tmp16;
            cResult[12] = tmp22;
            tmp19 = tmp22;
          }
          const items2 = [tmp4.dragHandleOverlay, animatedStyle3];
          let num = 3;
          cResult[3] = animatedStyle3;
          cResult[4] = tmp4.dragHandleOverlay;
          let num3 = 5;
          cResult[5] = items2;
          tmp13 = items2;
        }
        const items3 = [tmp4.dragHandleWrapper, animatedStyle];
        cResult[0] = animatedStyle;
        cResult[1] = tmp4.dragHandleWrapper;
        cResult[2] = items3;
        tmp12 = items3;
      }
    : (arg0) => {
        let ActionSheetHeaderBar;
        let activeQuestDockMode;
        let closure_2;
        let isExpanded;
        let items;
        let items1;
        let items2;
        let items3;
        let obj11;
        let stringResult;
        let tmp15;
        let variant;
        let youBarHorizontalMargin;
        ({ isExpanded, variant } = arg0);
        const tmp = closure_9();
        const tmp2 = activeQuestDockMode;
        const context = youBarHorizontalMargin.useContext(activeQuestDockMode(14913).QuestDockGestureContext);
        activeQuestDockMode = context.activeQuestDockMode;
        const windowDimensions = context.windowDimensions;
        dependencyMap = tmp5;
        let obj = activeQuestDockMode(14914);
        youBarHorizontalMargin = obj.useYouBarHorizontalMargin();
        let obj2 = activeQuestDockMode(4618);
        const fn = function n() {
          const obj = { width: Math.min(windowDimensions.get().width, metroRequire) };
          return obj;
        };
        const obj3 = { windowDimensions, QUEST_DOCK_COLLAPSED_MAX_WIDTH };
        fn.__closure = obj3;
        fn.__workletHash = 1440446516199;
        fn.__initData = __initData5;
        const animatedStyle = obj2.useAnimatedStyle(fn);
        const fn2 = function u() {
          let items;
          if (typeof getDragHandleOffsetLeft === "function") {
            let num = 0;
            if (tmp !== QuestDockMode.EXPANDED) {
              num = -1 * tmp2;
            }
            let num3 = 0;
            const obj2 = { left: num, transform: items };
            if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
              num3 = 0;
              if (activeQuestDockMode.get() !== QuestDockMode.SOFT_DISMISSED) {
                num3 = -4;
              }
            }
            items = [{ translateY: num3 }];
            return obj2;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
        const obj5 = {
          getDragHandleOffsetLeft,
          activeQuestDockMode,
          questDockHorizontalGutterCollapsed: youBarHorizontalMargin,
          QuestDockMode,
        };
        fn2.__closure = obj5;
        fn2.__workletHash = 860392428202;
        fn2.__initData = __initData6;
        const obj4 = activeQuestDockMode(4618);
        const animatedStyle1 = obj4.useAnimatedStyle(fn2);
        const obj6 = activeQuestDockMode(4618);
        class M {
          constructor() {
            spring;
            if (!closure_2) {
              let num;
              if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
                num = 0;
              }
              const obj2 = { opacity: tmp2(num, hasOwnProperty) };
              return obj2;
            }
            num = 1;
          }
        }
        M.__closure = {
          withSpring: activeQuestDockMode(5604).withSpring,
          isDefaultVariant: "default" === variant,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        };
        M.__workletHash = 14664873965359;
        M.__initData = __initData7;
        ({
          withSpring: activeQuestDockMode(5604).withSpring,
          isDefaultVariant: "default" === variant,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        });
        const animatedStyle2 = obj6.useAnimatedStyle(M);
        const obj8 = activeQuestDockMode(4618);
        class E {
          constructor() {
            spring;
            if (!closure_2) {
              let num;
              if (activeQuestDockMode.get() !== QuestDockMode.CLOSED) {
                num = 0.5;
              }
              const obj2 = { opacity: tmp2(num, hasOwnProperty) };
              return obj2;
            }
            num = 0;
          }
        }
        E.__closure = {
          withSpring: activeQuestDockMode(5604).withSpring,
          isDefaultVariant: "default" === variant,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        };
        E.__workletHash = 11824235765;
        E.__initData = __initData8;
        ({
          withSpring: activeQuestDockMode(5604).withSpring,
          isDefaultVariant: "default" === variant,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        });
        const animatedStyle3 = obj8.useAnimatedStyle(E);
        const obj10 = { style: items, children: closure_8(tmp15, obj11) };
        items = [tmp.dragHandleWrapper, animatedStyle];
        obj11 = {
          style: animatedStyle1,
          layout: activeQuestDockMode(14911).dimensionsLayoutTransition,
          children: items2,
        };
        const tmp13 = windowDimensions(6577);
        tmp15 = windowDimensions(6577);
        const obj12 = {
          style: items1,
          children: closure_7(ActionSheetHeaderBar, { variant: "overlay", accessibilityLabel: stringResult }),
        };
        items1 = [tmp.dragHandleOverlay, animatedStyle3];
        const tmp16 = windowDimensions(6577);
        ActionSheetHeaderBar = activeQuestDockMode(6656).ActionSheetHeaderBar;
        const intl = activeQuestDockMode(1126).intl;
        const string = intl.string;
        const t = activeQuestDockMode(1126).t;
        const tmp12 = windowDimensions;
        if (isExpanded) {
          stringResult = string(t["GQ+4bk"]);
        } else {
          stringResult = string(t.Yplnt6);
        }
        items2 = [closure_7(tmp16, obj12)];
        const obj13 = {
          style: items3,
          pointerEvents: "none",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: closure_7(tmp2(6656).ActionSheetHeaderBar, { variant: "default" }),
        };
        items3 = [tmp.dragHandleOverlay, animatedStyle2];
        const tmp12Result = tmp12(6577);
        items2[1] = closure_7(tmp12Result, obj13);
        return closure_7(tmp13, obj10);
      },
);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockDragHandle.tsx");

export default memoResult;
