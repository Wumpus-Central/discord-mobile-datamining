// === Module 17684: useIsQuestDockModeActiveOrExiting ===

// Module 17684 (useIsQuestDockModeActiveOrExiting)
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5876 */;
import useStateFromSharedValueDefault from "useStateFromSharedValue" /* 11186 */;
import QuestDockGestureContext from "QuestDockGestureContext" /* 17581 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(17580).QUEST_DOCK_MODE_CHANGE_PHYSICS;
let closure_5 = { code: "(function useIsQuestDockModeActiveOrExitingTsx1(){let[activeQuestDockMode,mode]=this.__closure;return activeQuestDockMode.get()===mode;})" };
let closure_6 = { code: "(function useIsQuestDockModeActiveOrExitingTsx2(finished){let[activeQuestDockMode,mode,isActiveOrExiting]=this.__closure;if(finished===true&&activeQuestDockMode.get()!==mode){isActiveOrExiting.set(false);}})" };
let closure_7 = { code: "(function useIsQuestDockModeActiveOrExitingTsx3(isActive,wasActive){let[isActiveOrExiting,transitionProgress,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS,_worklet_1770169018036_init_data,activeQuestDockMode,mode]=this.__closure;if(isActive===wasActive)return;if(wasActive==null&&isActiveOrExiting.get()===isActive)return;if(isActive){isActiveOrExiting.set(true);return;}transitionProgress.set(0);transitionProgress.set(withSpring(1,QUEST_DOCK_MODE_CHANGE_PHYSICS,'respect-motion-settings',function useIsQuestDockModeActiveOrExitingTsx2Factory([_worklet_1770169018036_init_data,activeQuestDockMode,mode,isActiveOrExiting]){const useIsQuestDockModeActiveOrExitingTsx2=function(finished){if(finished===true&&activeQuestDockMode.get()!==mode){isActiveOrExiting.set(false);}};useIsQuestDockModeActiveOrExitingTsx2.__closure=[activeQuestDockMode,mode,isActiveOrExiting];useIsQuestDockModeActiveOrExitingTsx2.__workletHash=1770169018036;useIsQuestDockModeActiveOrExitingTsx2.__initData=_worklet_1770169018036_init_data;return useIsQuestDockModeActiveOrExitingTsx2;}([_worklet_1770169018036_init_data,activeQuestDockMode,mode,isActiveOrExiting])));})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/useIsQuestDockModeActiveOrExiting.tsx");

export default function useIsQuestDockModeActiveOrExiting(arg0) {
  const activeQuestDockMode = noop.useContext(QuestDockGestureContext.QuestDockGestureContext).activeQuestDockMode;
  const sharedValue = _mod1652.useSharedValue(activeQuestDockMode.get() === arg0);
  const sharedValue1 = _mod1652.useSharedValue(0);
  items = [closure_5, activeQuestDockMode, arg0];
  [tmp5, tmp6, tmp7] = items;
  function useIsQuestDockModeActiveOrExitingTsx1() {
    return _undefined.get() === c1;
  }
  let items1 = [tmp6, tmp7];
  useIsQuestDockModeActiveOrExitingTsx1.__closure = items1;
  useIsQuestDockModeActiveOrExitingTsx1.__workletHash = 8163696877118;
  useIsQuestDockModeActiveOrExitingTsx1.__initData = tmp5;
  const items2 = [closure_7, sharedValue, sharedValue1, spring_spring.withSpring, closure_4, closure_6, activeQuestDockMode, arg0];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  function useIsQuestDockModeActiveOrExitingTsx3(arg0, arg1) {
    if (arg0 !== arg1) {
      let tmp2 = null == arg1;
      if (tmp2) {
        tmp2 = _undefined.get() === arg0;
      }
      if (!tmp2) {
        if (arg0) {
          let result = _undefined.set(true);
        } else {
          const result1 = _undefined2.set(0);
          items = [c4, c5, c6, _undefined];
          _undefined = undefined;
          _undefined2 = undefined;
          _undefined3 = undefined;
          [tmp11, tmp12, tmp13, tmp14] = items;
          function useIsQuestDockModeActiveOrExitingTsx2(arg0) {
            let tmp = true === arg0;
            if (tmp) {
              tmp = _undefined.get() !== c1;
            }
            if (tmp) {
              const result = _undefined2.set(false);
            }
          }
          const items1 = [tmp12, tmp13, tmp14];
          useIsQuestDockModeActiveOrExitingTsx2.__closure = items1;
          useIsQuestDockModeActiveOrExitingTsx2.__workletHash = 1770169018036;
          useIsQuestDockModeActiveOrExitingTsx2.__initData = tmp11;
          const result2 = _undefined2.set(_undefined3(1, c3, "respect-motion-settings", useIsQuestDockModeActiveOrExitingTsx2));
        }
      }
    }
  }
  const items3 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15];
  useIsQuestDockModeActiveOrExitingTsx3.__closure = items3;
  useIsQuestDockModeActiveOrExitingTsx3.__workletHash = 14421846937413;
  useIsQuestDockModeActiveOrExitingTsx3.__initData = tmp8;
  const animatedReaction = _mod1652.useAnimatedReaction(useIsQuestDockModeActiveOrExitingTsx1, useIsQuestDockModeActiveOrExitingTsx3);
  return useStateFromSharedValueDefault(sharedValue);
};