// discord_app/modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const QuestDockMode = fn(5977).QuestDockMode;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = fn(15174).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj = { questDockContentCollapsed: null };
let obj3 = {};
const merged = Object.assign(fn(17).StyleSheet.absoluteFillObject);
obj3.bottom = undefined;
obj3.zIndex = 2;
obj.questDockContentCollapsed = obj3;
let closure_7 = createStyles.createStyles(obj);
const __initData = {
  code: "function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}",
};
const __initData2 = {
  code: 'function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?"auto":"none"};}',
};
const __initData3 = {
  code: "function QuestDockContentCollapsedTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}",
};
const __initData4 = {
  code: "function QuestDockContentCollapsedTsx4(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function QuestDockContentCollapsed(arg0) {
        const cResult = require("c").c(7);
        ({ children, hideOnExpand } = arg0);
        _require = tmp4;
        const tmp5 = closure_7();
        const activeQuestDockMode = noop.useContext(tmp(15175).QuestDockGestureContext).activeQuestDockMode;
        let obj = require("c");
        class C {
          constructor() {
            obj = closure_0(closure_2[10]);
            num = 1;
            if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
              tmp = hideOnExpand;
              num = 1;
              if (hideOnExpand) {
                num = 0;
              }
            }
            obj1 = { opacity: obj.withSpring(num, closure_5) };
            return obj1;
          }
        }
        const tmpResult = require("ReanimatedRexport");
        C.__closure = {
          withSpring: require("spring").withSpring,
          activeQuestDockMode,
          QuestDockMode,
          hideOnExpand: undefined === hideOnExpand || hideOnExpand,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        };
        C.__workletHash = 13361221764426;
        C.__initData = __initData;
        const animatedStyle = tmpResult.useAnimatedStyle(C);
        const obj2 = {
          withSpring: require("spring").withSpring,
          activeQuestDockMode,
          QuestDockMode,
          hideOnExpand: undefined === hideOnExpand || hideOnExpand,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        };
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
        const animatedProps = require("ReanimatedRexport").useAnimatedProps(fn);
        if (cResult[0] === tmp5.questDockContentCollapsed) {
          if (cResult[1] === animatedStyle) {
            let tmp8 = cResult[2];
          }
          if (cResult[3] === children) {
            if (cResult[4] === tmp8) {
              if (cResult[5] === animatedProps) {
                let tmp9 = cResult[6];
              }
              return tmp9;
            }
          }
          const obj3 = { style: tmp8, animatedProps, children };
          const tmp12 = jsx(activeQuestDockMode(6753), { style: tmp8, animatedProps, children });
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
        const tmpResult2 = require("ReanimatedRexport");
      }
    : function QuestDockContentCollapsed(children) {
        let hideOnExpand = children.hideOnExpand;
        let tmp = undefined === hideOnExpand;
        if (!tmp) {
          tmp = hideOnExpand;
        }
        hideOnExpand = tmp;
        const activeQuestDockMode = noop.useContext(hideOnExpand(15175).QuestDockGestureContext).activeQuestDockMode;
        const tmp2 = closure_7();
        class D {
          constructor() {
            obj = closure_0(closure_2[10]);
            num = 1;
            if (activeQuestDockMode.get() !== QuestDockMode.COLLAPSED) {
              tmp = hideOnExpand;
              num = 1;
              if (hideOnExpand) {
                num = 0;
              }
            }
            obj1 = { opacity: obj.withSpring(num, closure_5) };
            return obj1;
          }
        }
        let obj = hideOnExpand(4810);
        D.__closure = {
          withSpring: hideOnExpand(5374).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          hideOnExpand: tmp,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        };
        D.__workletHash = 3717871904776;
        D.__initData = __initData3;
        const animatedStyle = obj.useAnimatedStyle(D);
        const obj2 = {
          withSpring: hideOnExpand(5374).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          hideOnExpand: tmp,
          QUEST_DOCK_MODE_CHANGE_PHYSICS,
        };
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
        const animatedProps = hideOnExpand(4810).useAnimatedProps(fn);
        const obj4 = { style: null, animatedProps, children: children.children };
        const items = [tmp2.questDockContentCollapsed, animatedStyle];
        obj4.style = items;
        return jsx(activeQuestDockMode(6753), { style: null, animatedProps, children: children.children });
      },
);
