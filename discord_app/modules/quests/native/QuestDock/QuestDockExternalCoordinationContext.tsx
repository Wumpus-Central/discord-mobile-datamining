// === Module 14211: QuestDockMode ===

// Module 14211 (QuestDockMode)
import importAllResult from "noop";
import QuestDockMode from "QuestDockMode";
import { QuestDockMode } from "QuestsExperimentLocations";
import { QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD as closure_5 } from "QUEST_DOCK_COLLAPSED_HEIGHT";
import { jsx } from "jsxProd";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import createFakeSharedValue from "createFakeSharedValue";
import set from "set";
import set from "QuestsExperimentLocations";

const require = arg1;
const SECOND = require("set").Millis.SECOND;
let obj = { restingQuestDockMode: null, setRestingQuestDockMode: null, lastScrollEventSourceId: null, questDockOffset: null };
obj[0] = createFakeSharedValue.createFakeSharedValue(QuestDockMode.COLLAPSED);
obj[1] = function setRestingQuestDockMode(COLLAPSED) {

};
obj[2] = createFakeSharedValue.createFakeSharedValue(null);
obj[3] = require("noop");
let context = importAllResult.createContext(obj);
set = set.isAndroid();
let closure_10 = { code: "function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}" };
let closure_11 = { code: "function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}" };
let closure_12 = { code: "function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}" };
let result = set.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx");

export const QuestDockExternalCoordinationContext = context;
export const QuestDockExternalCoordinationContextProvider = importAllResult.memo(function QuestDockExternalCoordinationContextProviderInner(children) {
  let obj = sharedValue(sharedValue1[7]);
  sharedValue = obj.useSharedValue(null);
  sharedValue1 = sharedValue(sharedValue1[7]).useSharedValue(0);
  let obj2 = sharedValue(sharedValue1[7]);
  const obj3 = sharedValue(sharedValue1[7]);
  const sharedValue2 = obj3.useSharedValue(sharedValue(sharedValue1[8]).isSoftDismissed(callback.questDockSoftDismissedAt) ? tmp3.SOFT_DISMISSED : tmp3.COLLAPSED);
  const items = [sharedValue2, sharedValue1];
  callback = sharedValue2.useCallback((mode) => {
    const result = sharedValue1.set(0);
    if (sharedValue2.get() !== mode) {
      const result1 = sharedValue2.set(mode);
    }
    if (mode !== outer1_4.RESET_TO_PREVIOUS) {
      const result2 = sharedValue(sharedValue1[9]).updatePrevRestingQuestDockMode(mode);
      const obj2 = sharedValue(sharedValue1[9]);
    }
  }, items);
  const items1 = [sharedValue, sharedValue2, callback, sharedValue1];
  obj = { value: sharedValue2.useMemo(() => ({ lastScrollEventSourceId: sharedValue, restingQuestDockMode: sharedValue2, setRestingQuestDockMode: callback, questDockOffset: sharedValue1 }), items1), children: children.children };
  return <context.Provider value={sharedValue2.useMemo(() => ({ lastScrollEventSourceId: sharedValue, restingQuestDockMode: sharedValue2, setRestingQuestDockMode: callback, questDockOffset: sharedValue1 }), items1)}>{arg0.children}</context.Provider>;
});
export const useExternalScrollEventHandler = function useExternalScrollEventHandler(id) {
  id = id.id;
  let setRestingQuestDockMode;
  let restingQuestDockMode;
  let lastScrollEventSourceId;
  let closure_4;
  let callback;
  let callback1;
  let sharedValue;
  let sharedValue1;
  const context = restingQuestDockMode.useContext(sharedValue1);
  setRestingQuestDockMode = context.setRestingQuestDockMode;
  restingQuestDockMode = context.restingQuestDockMode;
  lastScrollEventSourceId = context.lastScrollEventSourceId;
  closure_4 = restingQuestDockMode.useRef(-1);
  const items = [setRestingQuestDockMode, restingQuestDockMode];
  callback = restingQuestDockMode.useCallback(() => {
    if (-1 !== ref.current) {
      const _window = window;
      window.clearTimeout(tmp.current);
    }
    ref.current = window.setTimeout(() => {
      if (closure_2.get() !== outer1_4.EXPANDED) {
        callback(tmp.COLLAPSED);
      }
    }, 500);
  }, items);
  callback1 = restingQuestDockMode.useCallback(() => {
    if (-1 !== ref.current) {
      const _window = window;
      window.clearTimeout(tmp.current);
    }
  }, []);
  let obj = id(setRestingQuestDockMode[7]);
  class D {
    constructor() {
      return restingQuestDockMode.get();
    }
  }
  D.__closure = { restingQuestDockMode };
  D.__workletHash = 14040596710288;
  D.__initData = closure_10;
  const fn = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      id(setRestingQuestDockMode[7]).runOnJS(callback1)();
      const obj = id(setRestingQuestDockMode[7]);
    }
  };
  obj = { runOnJS: id(setRestingQuestDockMode[7]).runOnJS, cancelReopenQuestDock: callback1 };
  fn.__closure = obj;
  fn.__workletHash = 1848909508809;
  fn.__initData = closure_11;
  const animatedReaction = obj.useAnimatedReaction(D, fn);
  sharedValue = id(setRestingQuestDockMode[7]).useSharedValue(0);
  let obj3 = id(setRestingQuestDockMode[7]);
  sharedValue1 = id(setRestingQuestDockMode[7]).useSharedValue(false);
  const items1 = [sharedValue1];
  const effect = restingQuestDockMode.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_8.set(true);
    }, sharedValue);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  class T {
    constructor(arg0, arg1, arg2) {
      if (D.get()) {
        obj = restingQuestDockMode;
        tmp = useRef;
        if (restingQuestDockMode.get() !== useRef.SOFT_DISMISSED) {
          if (obj.get() !== tmp.EXPANDED) {
            tmp30 = id;
            tmp31 = useAnimatedReaction;
            value = useAnimatedReaction.get();
            result = useAnimatedReaction.set(id);
            if (value !== id) {
              obj5 = lastScrollEventSourceId;
              tmp35 = id;
              str = "guilds";
              value1 = lastScrollEventSourceId.get();
              if ("guilds" !== id) {
                result1 = obj5.set(tmp35);
              }
              if ("guilds" === tmp35) {
                num = 0;
                if (id < 0) {
                  if (value < 0) {
                    tmp26 = id;
                    tmp27 = setRestingQuestDockMode;
                    obj4 = id(setRestingQuestDockMode[7]);
                    tmp28 = useCallback;
                    tmp29 = obj4.runOnJS(useCallback)();
                  }
                }
                tmp3 = arg2;
                tmp4 = null;
                if (null != arg2) {
                  tmp5 = arg1;
                  if (null != arg1) {
                  }
                }
                if (id <= 0) {
                  if (outer1_9) {
                    if (obj.get() === tmp.CLOSED) {
                      tmp19 = id;
                      tmp20 = setRestingQuestDockMode;
                      tmp21 = id(setRestingQuestDockMode[7]);
                      runOnJS = tmp21.runOnJS;
                      if (tmp6) {
                        tmp24 = c5;
                        tmp25 = runOnJS(c5)();
                      } else {
                        tmp22 = setRestingQuestDockMode;
                        tmp23 = runOnJS(setRestingQuestDockMode)(tmp.COLLAPSED);
                      }
                    }
                  }
                }
                tmp7 = globalThis;
                _Math = Math;
                absolute = Math.abs(value - id);
                if (id > value) {
                  if (id > 0) {
                    if (value > 0) {
                      if (obj.get() === tmp.COLLAPSED) {
                        tmp15 = id;
                        tmp16 = setRestingQuestDockMode;
                        obj3 = id(setRestingQuestDockMode[7]);
                        tmp17 = setRestingQuestDockMode;
                        tmp18 = obj3.runOnJS(setRestingQuestDockMode)(tmp.CLOSED);
                      }
                    }
                  }
                }
                tmp9 = id < value && obj.get() === tmp.CLOSED;
                if (tmp9) {
                  tmp10 = c5;
                  tmp9 = absolute >= c5;
                }
                if (tmp9) {
                  tmp11 = id;
                  tmp12 = setRestingQuestDockMode;
                  obj2 = id(setRestingQuestDockMode[7]);
                  tmp13 = c5;
                  tmp14 = obj2.runOnJS(c5)();
                }
              }
            }
          }
        }
      }
      return;
    }
  }
  obj = { isScrollHandlerEnabled: sharedValue1, restingQuestDockMode, QuestDockMode: closure_4, lastContentOffsetY: sharedValue, lastScrollEventSourceId, id, runOnJS: id(setRestingQuestDockMode[7]).runOnJS, cancelReopenQuestDock: callback1, IS_ANDROID: set, scheduleReopenQuestDock: callback, setRestingQuestDockMode, QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: callback };
  T.__closure = obj;
  T.__workletHash = 9824540806898;
  T.__initData = closure_12;
  const items2 = [id, sharedValue, lastScrollEventSourceId, restingQuestDockMode, callback, setRestingQuestDockMode, callback1, sharedValue1];
  return restingQuestDockMode.useCallback(T, items2);
};