// discord_app/modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestDockStore from "QuestDockStore.tsx";

require = fn;
let QuestDockMode = fn(5444).QuestDockMode;
let closure_5 = fn(15095).QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
const jsx = fn(21).jsx;
const SECOND = DurationsDefault.Millis.SECOND;
let obj = {
  restingQuestDockMode: null,
  setRestingQuestDockMode: null,
  lastScrollEventSourceId: null,
  questDockOffset: null,
};
let ReanimatedHelperTypes = fn(7074);
obj.restingQuestDockMode = ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED);
obj.setRestingQuestDockMode = function setRestingQuestDockMode() {};
ReanimatedHelperTypes = fn(7074);
obj.lastScrollEventSourceId = ReanimatedHelperTypes.createFakeSharedValue(null);
ReanimatedHelperTypes = fn(7074);
obj.questDockOffset = ReanimatedHelperTypes.createFakeSharedValue(0);
let context = noop.createContext(obj);
const PlatformUtils = fn(1115);
const IS_ANDROID = PlatformUtils.isAndroid();
const __initData = {
  code: "function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}",
};
const __initData2 = {
  code: "function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}",
};
const __initData3 = {
  code: "function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx");

export const QuestDockExternalCoordinationContext = context;
export const QuestDockExternalCoordinationContextProvider = noop.memo(
  function QuestDockExternalCoordinationContextProviderInner(children) {
    let obj = sharedValue(sharedValue1[7]);
    sharedValue = obj.useSharedValue(null);
    sharedValue1 = sharedValue(sharedValue1[7]).useSharedValue(0);
    let obj2 = sharedValue(sharedValue1[7]);
    const obj3 = sharedValue(sharedValue1[7]);
    const sharedValue2 = obj3.useSharedValue(
      sharedValue(sharedValue1[8]).isSoftDismissed(setRestingQuestDockMode.questDockSoftDismissedAt)
        ? tmp3.SOFT_DISMISSED
        : tmp3.COLLAPSED,
    );
    const items = [sharedValue2, sharedValue1];
    setRestingQuestDockMode = sharedValue2.useCallback((mode) => {
      const result = sharedValue1.set(0);
      if (sharedValue2.get() !== mode) {
        const result1 = sharedValue2.set(mode);
      }
      if (mode !== QuestDockMode.RESET_TO_PREVIOUS) {
        const result2 = QuestActionCreators.updatePrevRestingQuestDockMode(mode);
      }
    }, items);
    const items1 = [sharedValue, sharedValue2, setRestingQuestDockMode, sharedValue1];
    obj = {
      value: sharedValue2.useMemo(
        () => ({
          lastScrollEventSourceId: sharedValue,
          restingQuestDockMode: sharedValue2,
          setRestingQuestDockMode,
          questDockOffset: sharedValue1,
        }),
        items1,
      ),
      children: children.children,
    };
    return (
      <context.Provider
        value={sharedValue2.useMemo(
          () => ({
            lastScrollEventSourceId: sharedValue,
            restingQuestDockMode: sharedValue2,
            setRestingQuestDockMode,
            questDockOffset: sharedValue1,
          }),
          items1,
        )}
      >
        {arg0.children}
      </context.Provider>
    );
  },
);
export const useExternalScrollEventHandler = function useExternalScrollEventHandler(id) {
  id = id.id;
  let restingQuestDockMode;
  let sharedValue;
  let sharedValue1;
  context = restingQuestDockMode.useContext(sharedValue1);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  restingQuestDockMode = context.restingQuestDockMode;
  const lastScrollEventSourceId = context.lastScrollEventSourceId;
  QuestDockMode = restingQuestDockMode.useRef(-1);
  const items = [setRestingQuestDockMode, restingQuestDockMode];
  const scheduleReopenQuestDock = restingQuestDockMode.useCallback(() => {
    if (-1 !== ref.current) {
      const _window = window;
      window.clearTimeout(tmp.current);
    }
    ref.current = window.setTimeout(() => {
      if (restingQuestDockMode.get() !== constants.EXPANDED) {
        setRestingQuestDockMode(tmp.COLLAPSED);
      }
    }, 500);
  }, items);
  const callback1 = restingQuestDockMode.useCallback(() => {
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
  D.__initData = __initData;
  const fn = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(callback1)();
    }
  };
  obj = { runOnJS: id(setRestingQuestDockMode[7]).runOnJS, cancelReopenQuestDock: callback1 };
  fn.__closure = obj;
  fn.__workletHash = 1848909508809;
  fn.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(D, fn);
  sharedValue = id(setRestingQuestDockMode[7]).useSharedValue(0);
  let obj3 = id(setRestingQuestDockMode[7]);
  sharedValue1 = id(setRestingQuestDockMode[7]).useSharedValue(false);
  const items1 = [sharedValue1];
  const effect = restingQuestDockMode.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = sharedValue1.set(true);
    }, sharedValue);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  class T {
    constructor(arg0, arg1, arg2) {
      if (closure_8.get()) {
        obj = restingQuestDockMode;
        tmp = QuestDockMode;
        if (restingQuestDockMode.get() !== QuestDockMode.SOFT_DISMISSED) {
          if (obj.get() !== tmp.EXPANDED) {
            tmp30 = id;
            tmp31 = closure_7;
            value = closure_7.get();
            result = closure_7.set(id);
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
                    tmp26 = closure_0;
                    tmp27 = closure_1;
                    obj4 = closure_0(closure_1[7]);
                    tmp28 = closure_6;
                    tmp29 = obj4.runOnJS(closure_6)();
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
                  if (closure_9) {
                    if (obj.get() === tmp.CLOSED) {
                      tmp19 = closure_0;
                      tmp20 = closure_1;
                      tmp21 = closure_0(closure_1[7]);
                      runOnJS = tmp21.runOnJS;
                      if (tmp6) {
                        tmp24 = closure_5;
                        tmp25 = runOnJS(closure_5)();
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
                        tmp15 = closure_0;
                        tmp16 = closure_1;
                        obj3 = closure_0(closure_1[7]);
                        tmp17 = setRestingQuestDockMode;
                        tmp18 = obj3.runOnJS(setRestingQuestDockMode)(tmp.CLOSED);
                      }
                    }
                  }
                }
                tmp9 = id < value && obj.get() === tmp.CLOSED;
                if (tmp9) {
                  tmp10 = closure_5;
                  tmp9 = absolute >= closure_5;
                }
                if (tmp9) {
                  tmp11 = closure_0;
                  tmp12 = closure_1;
                  obj2 = closure_0(closure_1[7]);
                  tmp13 = closure_5;
                  tmp14 = obj2.runOnJS(closure_5)();
                }
              }
            }
          }
        }
      }
      return;
    }
  }
  obj = {
    isScrollHandlerEnabled: sharedValue1,
    restingQuestDockMode,
    QuestDockMode,
    lastContentOffsetY: sharedValue,
    lastScrollEventSourceId,
    id,
    runOnJS: id(setRestingQuestDockMode[7]).runOnJS,
    cancelReopenQuestDock: callback1,
    IS_ANDROID,
    scheduleReopenQuestDock,
    setRestingQuestDockMode,
    QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: scheduleReopenQuestDock,
  };
  T.__closure = obj;
  T.__workletHash = 9824540806898;
  T.__initData = __initData3;
  const items2 = [
    id,
    sharedValue,
    lastScrollEventSourceId,
    restingQuestDockMode,
    scheduleReopenQuestDock,
    setRestingQuestDockMode,
    callback1,
    sharedValue1,
  ];
  return restingQuestDockMode.useCallback(T, items2);
};
