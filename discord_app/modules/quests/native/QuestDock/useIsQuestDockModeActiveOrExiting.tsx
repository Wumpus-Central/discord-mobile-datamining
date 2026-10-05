// === Module 15005: useIsQuestDockModeActiveOrExiting ===

// Module 15005 (useIsQuestDockModeActiveOrExiting)
import spring from "spring" /* 5597 */;
import QuestDockConstants from "QuestDockConstants" /* 14896 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const QUEST_DOCK_MODE_CHANGE_PHYSICS = QuestDockConstants.QUEST_DOCK_MODE_CHANGE_PHYSICS;
const __initData = { code: "function useIsQuestDockModeActiveOrExitingTsx1(){const{activeQuestDockMode,mode}=this.__closure;return activeQuestDockMode.get()===mode;}" };
const __initData2 = { code: "function useIsQuestDockModeActiveOrExitingTsx2(isActive,wasActive){const{isActiveOrExiting,transitionProgress,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS,activeQuestDockMode,mode}=this.__closure;if(isActive===wasActive){return;}if(wasActive==null&&isActiveOrExiting.get()===isActive){return;}if(isActive){isActiveOrExiting.set(true);return;}transitionProgress.set(0);transitionProgress.set(withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS,\"respect-motion-settings\",function(finished){\"worklet\";if(finished===true&&activeQuestDockMode.get()!==mode){isActiveOrExiting.set(false);}}));}" };
let closure_7 = { code: "function useIsQuestDockModeActiveOrExitingTsx3(finished){const{activeQuestDockMode,mode,isActiveOrExiting}=this.__closure;if(finished===true&&activeQuestDockMode.get()!==mode){isActiveOrExiting.set(false);}}" };
const __initData3 = { code: "function useIsQuestDockModeActiveOrExitingTsx4(){const{activeQuestDockMode,mode}=this.__closure;return activeQuestDockMode.get()===mode;}" };
const __initData4 = { code: "function useIsQuestDockModeActiveOrExitingTsx5(isActive,wasActive){const{isActiveOrExiting,transitionProgress,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS,activeQuestDockMode,mode}=this.__closure;if(isActive===wasActive)return;if(wasActive==null&&isActiveOrExiting.get()===isActive)return;if(isActive){isActiveOrExiting.set(true);return;}transitionProgress.set(0);transitionProgress.set(withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished){'worklet';if(finished===true&&activeQuestDockMode.get()!==mode){isActiveOrExiting.set(false);}}));}" };
let closure_10 = { code: "function useIsQuestDockModeActiveOrExitingTsx6(finished){const{activeQuestDockMode,mode,isActiveOrExiting}=this.__closure;if(finished===true&&activeQuestDockMode.get()!==mode){isActiveOrExiting.set(false);}}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((mode) => {
  let sharedValue;
  let sharedValue1;
  _require = mode;
  const activeQuestDockMode = sharedValue1.useContext(require("QuestDockGestureContext").QuestDockGestureContext).activeQuestDockMode;
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(activeQuestDockMode.get() === mode);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(0);
  let fn = function v() {
    return activeQuestDockMode.get() === mode;
  };
  fn.__closure = { activeQuestDockMode, mode };
  fn.__workletHash = 8976243706695;
  fn.__initData = __initData;
  const fn2 = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      const tmp2 = null == arg1 && sharedValue.get() === arg0;
      if (!tmp2) {
        if (arg0) {
          let result = sharedValue.set(true);
        } else {
          const result1 = sharedValue1.set(0);
          set = sharedValue1.set;
          const fn = function c(arg0) {
            const tmp = true === arg0 && activeQuestDockMode.get() !== mode;
            if (tmp) {
              const result = sharedValue.set(false);
            }
          };
          const obj2 = { activeQuestDockMode, mode, isActiveOrExiting: sharedValue };
          fn.__closure = obj2;
          fn.__workletHash = 403164900460;
          fn.__initData = __initData;
          const obj = spring;
          const result2 = set(obj.withSpring(1, QUEST_DOCK_MODE_CHANGE_PHYSICS, "respect-motion-settings", fn));
        }
      }
    }
  };
  const obj3 = require("ReanimatedRexport");
  fn2.__closure = { isActiveOrExiting: sharedValue, transitionProgress: sharedValue1, withSpring: require("spring").withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS, activeQuestDockMode, mode };
  fn2.__workletHash = 10677920060222;
  fn2.__initData = __initData2;
  ({ isActiveOrExiting: sharedValue, transitionProgress: sharedValue1, withSpring: require("spring").withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS, activeQuestDockMode, mode });
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  return activeQuestDockMode(sharedValue[6])(sharedValue);
}) : ((mode) => {
  let sharedValue;
  let sharedValue1;
  _require = mode;
  const activeQuestDockMode = sharedValue1.useContext(require("QuestDockGestureContext").QuestDockGestureContext).activeQuestDockMode;
  let obj = require("ReanimatedRexport");
  sharedValue = obj.useSharedValue(activeQuestDockMode.get() === mode);
  let obj2 = require("ReanimatedRexport");
  sharedValue1 = obj2.useSharedValue(0);
  let fn = function n() {
    return activeQuestDockMode.get() === mode;
  };
  fn.__closure = { activeQuestDockMode, mode };
  fn.__workletHash = 12800411599906;
  fn.__initData = __initData3;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      const tmp2 = null == arg1 && sharedValue.get() === arg0;
      if (!tmp2) {
        if (arg0) {
          let result = sharedValue.set(true);
        } else {
          const result1 = sharedValue1.set(0);
          set = sharedValue1.set;
          const fn = function n(arg0) {
            const tmp = true === arg0 && activeQuestDockMode.get() !== mode;
            if (tmp) {
              const result = sharedValue.set(false);
            }
          };
          const obj2 = { activeQuestDockMode, mode, isActiveOrExiting: sharedValue };
          fn.__closure = obj2;
          fn.__workletHash = 6554254521481;
          fn.__initData = __initData;
          const obj = spring;
          const result2 = set(obj.withSpring(1, QUEST_DOCK_MODE_CHANGE_PHYSICS, "respect-motion-settings", fn));
        }
      }
    }
  };
  const obj3 = require("ReanimatedRexport");
  fn2.__closure = { isActiveOrExiting: sharedValue, transitionProgress: sharedValue1, withSpring: require("spring").withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS, activeQuestDockMode, mode };
  fn2.__workletHash = 11410512079513;
  fn2.__initData = __initData4;
  ({ isActiveOrExiting: sharedValue, transitionProgress: sharedValue1, withSpring: require("spring").withSpring, QUEST_DOCK_MODE_CHANGE_PHYSICS, activeQuestDockMode, mode });
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  return activeQuestDockMode(sharedValue[6])(sharedValue);
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/useIsQuestDockModeActiveOrExiting.tsx");

export default tmp2;