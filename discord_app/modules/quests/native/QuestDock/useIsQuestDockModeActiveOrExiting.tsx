// discord_app/modules/quests/native/QuestDock/useIsQuestDockModeActiveOrExiting.tsx
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const QUEST_DOCK_MODE_CHANGE_PHYSICS = fn(15431).QUEST_DOCK_MODE_CHANGE_PHYSICS;
const __initData = {
  code: "function useIsQuestDockModeActiveOrExitingTsx1(){const{activeQuestDockMode,mode}=this.__closure;return activeQuestDockMode.get()===mode;}",
};
const __initData2 = {
  code: "function useIsQuestDockModeActiveOrExitingTsx2(isActive,wasActive){const{isActiveOrExiting,transitionProgress,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS,activeQuestDockMode,mode}=this.__closure;if(isActive===wasActive)return;if(wasActive==null&&isActiveOrExiting.get()===isActive)return;if(isActive){isActiveOrExiting.set(true);return;}transitionProgress.set(0);transitionProgress.set(withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished){'worklet';if(finished===true&&activeQuestDockMode.get()!==mode){isActiveOrExiting.set(false);}}));}",
};
let closure_7 = {
  code: "function useIsQuestDockModeActiveOrExitingTsx3(finished){const{activeQuestDockMode,mode,isActiveOrExiting}=this.__closure;if(finished===true&&activeQuestDockMode.get()!==mode){isActiveOrExiting.set(false);}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/useIsQuestDockModeActiveOrExiting.tsx");

export default function useIsQuestDockModeActiveOrExiting(mode) {
  _require = mode;
  const activeQuestDockMode = sharedValue1.useContext(
    require("QuestDockGestureContext").QuestDockGestureContext,
  ).activeQuestDockMode;
  sharedValue = require("ReanimatedRexport").useSharedValue(activeQuestDockMode.get() === mode);
  let obj = require("ReanimatedRexport");
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  let fn = function v() {
    return activeQuestDockMode.get() === closure_0;
  };
  fn.__closure = { activeQuestDockMode, mode };
  fn.__workletHash = 8976243706695;
  fn.__initData = __initData;
  const fn2 = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      let tmp2 = null == arg1;
      if (tmp2) {
        tmp2 = sharedValue.get() === arg0;
      }
      if (!tmp2) {
        if (arg0) {
          let result = sharedValue.set(true);
        } else {
          const result1 = sharedValue1.set(0);
          const obj = spring;
          const fn = function c(arg0) {
            let tmp = true === arg0;
            if (tmp) {
              tmp = activeQuestDockMode.get() !== mode;
            }
            if (tmp) {
              const result = sharedValue.set(false);
            }
          };
          const obj2 = { activeQuestDockMode, mode, isActiveOrExiting: sharedValue };
          fn.__closure = obj2;
          fn.__workletHash = 403164900460;
          fn.__initData = __initData;
          const result2 = sharedValue1.set(obj.withSpring(1, closure_4, "respect-motion-settings", fn));
        }
      }
    }
  };
  const obj3 = require("ReanimatedRexport");
  fn2.__closure = {
    isActiveOrExiting: sharedValue,
    transitionProgress: sharedValue1,
    withSpring: require("spring").withSpring,
    QUEST_DOCK_MODE_CHANGE_PHYSICS,
    activeQuestDockMode,
    mode,
  };
  fn2.__workletHash = 16897972118206;
  fn2.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  return activeQuestDockMode(sharedValue[5])(sharedValue);
}
