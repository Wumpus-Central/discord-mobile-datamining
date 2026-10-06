// === Module 14916: QuestDockExternalCoordinationContext ===

// Module 14916 (QuestDockExternalCoordinationContext)
import Fragment from "Fragment" /* 21 */;
import DurationsDefault from "Durations" /* 1102 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import QuestConstants from "QuestConstants" /* 5630 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import QuestDockConstants from "QuestDockConstants" /* 14912 */;
import react from "react" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 14910 */;
import "ReanimatedHelperTypes";
import ReanimatedHelperTypes_mod from "ReanimatedHelperTypes" /* 6578 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let ReanimatedHelperTypes;
let QuestDockMode = QuestConstants.QuestDockMode;
let closure_5 = QuestDockConstants.QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
const jsx = Fragment.jsx;
const SECOND = DurationsDefault.Millis.SECOND;
let obj = {
  restingQuestDockMode: ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED),
  setRestingQuestDockMode() {

  },
  lastScrollEventSourceId: ReanimatedHelperTypes.createFakeSharedValue(null),
  questDockOffset: ReanimatedHelperTypes.createFakeSharedValue(0)
};
const createContext = react.createContext;
ReanimatedHelperTypes = ReanimatedHelperTypes_mod;
let context = createContext(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let sharedValue1;
  let sharedValue2;
  const obj = sharedValue1(sharedValue2[8]);
  const cResult = obj.c(11);
  let obj2 = sharedValue1(sharedValue2[9]);
  const sharedValue = obj2.useSharedValue(null);
  const obj3 = sharedValue1(sharedValue2[9]);
  sharedValue1 = obj3.useSharedValue(0);
  const useSharedValue = sharedValue1(sharedValue2[9]).useSharedValue;
  sharedValue1(sharedValue2[9]);
  const obj4 = sharedValue1(sharedValue2[10]);
  sharedValue2 = useSharedValue(obj4.isSoftDismissed(QuestDockStore.questDockSoftDismissedAt) ? QuestDockMode.SOFT_DISMISSED : QuestDockMode.COLLAPSED);
  if (cResult[0] === sharedValue1) {
    let tmp7;
    if (cResult[1] === sharedValue2) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === sharedValue) {
      if (cResult[4] === sharedValue1) {
        if (cResult[5] === sharedValue2) {
          let tmp8;
          if (cResult[6] === tmp7) {
            tmp8 = cResult[7];
          }
          if (cResult[8] === tmp8) {
            let tmp10;
            if (cResult[9] === children.children) {
              tmp10 = cResult[10];
            }
            return tmp10;
          }
          const tmp13 = <context.Provider value={tmp8}>{children.children}</context.Provider>;
          cResult[8] = tmp8;
          cResult[9] = children.children;
          cResult[10] = tmp13;
          tmp10 = tmp13;
        }
      }
    }
    const obj6 = { lastScrollEventSourceId: sharedValue, restingQuestDockMode: sharedValue2, setRestingQuestDockMode: tmp7, questDockOffset: sharedValue1 };
    cResult[3] = sharedValue;
    cResult[4] = sharedValue1;
    cResult[5] = sharedValue2;
    cResult[6] = tmp7;
    cResult[7] = obj6;
    tmp8 = obj6;
  }
  const fn = function s(mode) {
    const result = sharedValue1.set(0);
    if (sharedValue2.get() !== mode) {
      const result1 = sharedValue2.set(mode);
    }
    if (mode !== QuestDockMode.RESET_TO_PREVIOUS) {
      const obj2 = QuestActionCreators;
      const result2 = obj2.updatePrevRestingQuestDockMode(mode);
    }
  };
  cResult[0] = sharedValue1;
  cResult[1] = sharedValue2;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((children) => {
  let setRestingQuestDockMode;
  let sharedValue;
  let sharedValue1;
  const obj = sharedValue(sharedValue1[9]);
  sharedValue = obj.useSharedValue(null);
  let obj2 = sharedValue(sharedValue1[9]);
  sharedValue1 = obj2.useSharedValue(0);
  const useSharedValue = sharedValue(sharedValue1[9]).useSharedValue;
  sharedValue(sharedValue1[9]);
  const obj3 = sharedValue(sharedValue1[10]);
  const sharedValue2 = useSharedValue(obj3.isSoftDismissed(setRestingQuestDockMode.questDockSoftDismissedAt) ? QuestDockMode.SOFT_DISMISSED : QuestDockMode.COLLAPSED);
  const items = [sharedValue2, sharedValue1];
  setRestingQuestDockMode = sharedValue2.useCallback((mode) => {
    const result = sharedValue1.set(0);
    if (sharedValue2.get() !== mode) {
      const result1 = sharedValue2.set(mode);
    }
    if (mode !== QuestDockMode.RESET_TO_PREVIOUS) {
      const obj2 = QuestActionCreators;
      const result2 = obj2.updatePrevRestingQuestDockMode(mode);
    }
  }, items);
  const items1 = [sharedValue, sharedValue2, setRestingQuestDockMode, sharedValue1];
  return <context.Provider value={sharedValue2.useMemo(() => ({ lastScrollEventSourceId: sharedValue, restingQuestDockMode: sharedValue2, setRestingQuestDockMode, questDockOffset: sharedValue1 }), items1)}>{children.children}</context.Provider>;
}));
const IS_ANDROID = PlatformUtils.isAndroid();
const __initData = { code: "function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}" };
const __initData2 = { code: "function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}" };
const __initData3 = { code: "function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get()){return;}if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY){return;}const lastSourceId=lastScrollEventSourceId.get();if(id!==\"guilds\"){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!==\"guilds\"&&id!==lastSourceId;if(isFirstScrollEvent){return;}const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom){return;}const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else{if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}}" };
const __initData4 = { code: "function QuestDockExternalCoordinationContextTsx4(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}" };
const __initData5 = { code: "function QuestDockExternalCoordinationContextTsx5(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}" };
const __initData6 = { code: "function QuestDockExternalCoordinationContextTsx6(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}" };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let ref;
  let restingQuestDockMode;
  let setRestingQuestDockMode;
  let sharedValue1;
  const tmp = id;
  let obj = id(setRestingQuestDockMode[8]);
  const cResult = obj.c(15);
  id = id.id;
  let obj2 = restingQuestDockMode;
  context = restingQuestDockMode.useContext(sharedValue1);
  setRestingQuestDockMode = context.setRestingQuestDockMode;
  restingQuestDockMode = context.restingQuestDockMode;
  const lastScrollEventSourceId = context.lastScrollEventSourceId;
  QuestDockMode = restingQuestDockMode.useRef(-1);
  if (cResult[0] === restingQuestDockMode) {
    let tmp5;
    let tmp15;
    if (cResult[1] === setRestingQuestDockMode) {
      tmp5 = cResult[2];
    }
    closure_5 = tmp5;
    const tmp6 = globalThis;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          if (-1 !== ref.current) {
            const _window = window;
            window.clearTimeout(tmp.current);
          }
        }
      }
      cResult[3] = R;
    } else {
      class R {
        constructor() {
          if (-1 !== ref.current) {
            const _window = window;
            window.clearTimeout(tmp.current);
          }
        }
      }
    }
    R = tmp7;
    const fn2 = function v() {
      return restingQuestDockMode.get();
    };
    let obj3 = { restingQuestDockMode };
    fn2.__closure = obj3;
    fn2.__workletHash = 14040596710288;
    fn2.__initData = __initData;
    const fn3 = function h(arg0, arg1) {
      if (arg0 !== arg1) {
        const obj = ReanimatedRexport;
        obj.runOnJS(R)();
      }
    };
    let obj4 = { runOnJS: tmp(tmp2[9]).runOnJS, cancelReopenQuestDock: tmp7 };
    const useAnimatedReaction = tmp(tmp2[9]).useAnimatedReaction;
    tmp(setRestingQuestDockMode[9]);
    fn3.__closure = obj4;
    fn3.__workletHash = 1848909508809;
    fn3.__initData = __initData2;
    const animatedReaction = useAnimatedReaction(fn2, fn3);
    const tmpResult3 = tmp(setRestingQuestDockMode[9]);
    const sharedValue = tmpResult3.useSharedValue(0);
    const tmpResult4 = tmp(setRestingQuestDockMode[9]);
    sharedValue1 = tmpResult4.useSharedValue(false);
    if (cResult[4] !== sharedValue1) {
      class I {
        constructor() {
          let closure_0;
          const timeout = setTimeout(() => {
            const result = sharedValue1.set(true);
          }, sharedValue);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
      const items = [sharedValue1];
      cResult[4] = sharedValue1;
      cResult[5] = I;
      cResult[6] = items;
      tmp15 = items;
    } else {
      class I {
        constructor() {
          let closure_0;
          const timeout = setTimeout(() => {
            const result = sharedValue1.set(true);
          }, sharedValue);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
      tmp15 = cResult[6];
    }
    const effect = obj2.useEffect(I, tmp15);
    if (cResult[7] === id) {
      class I {
        constructor() {
          let closure_0;
          const timeout = setTimeout(() => {
            const result = sharedValue1.set(true);
          }, sharedValue);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }
    }
    class H {
      constructor(arg0, arg1, arg2) {
        if (sharedValue1.get()) {
          if (restingQuestDockMode.get() !== QuestDockMode.SOFT_DISMISSED) {
            if (restingQuestDockMode.get() !== QuestDockMode.EXPANDED) {
              const value = sharedValue.get();
              const result = sharedValue.set(arg0);
              if (value !== arg0) {
                const value2 = lastScrollEventSourceId.get();
                if ("guilds" !== id) {
                  const result1 = lastScrollEventSourceId.set(id);
                }
                if ("guilds" === id) {
                  if (arg0 < 0) {
                    if (value < 0) {
                      const obj4 = ReanimatedRexport;
                      obj4.runOnJS(R)();
                    }
                  }
                  if (arg0 <= 0) {
                    if (IS_ANDROID) {
                      if (restingQuestDockMode.get() === QuestDockMode.CLOSED) {
                        const runOnJS = ReanimatedRexport.runOnJS;
                        ReanimatedRexport;
                        if (tmp6) {
                          runOnJS(closure_5)();
                        } else {
                          runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);
                        }
                      }
                    }
                  }
                  const _Math = Math;
                  const absolute = Math.abs(value - arg0);
                  if (arg0 > value) {
                    if (arg0 > 0) {
                      if (value > 0) {
                        if (restingQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                          const obj3 = ReanimatedRexport;
                          obj3.runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);
                        }
                      }
                    }
                  }
                  const tmp9 = arg0 < value && restingQuestDockMode.get() === QuestDockMode.CLOSED && absolute >= closure_5;
                  if (tmp9) {
                    const obj2 = ReanimatedRexport;
                    obj2.runOnJS(closure_5)();
                  }
                }
              }
            }
          }
        }
      }
    }
    H.__closure = { isScrollHandlerEnabled: sharedValue1, restingQuestDockMode, QuestDockMode, lastContentOffsetY: sharedValue, lastScrollEventSourceId, id, runOnJS: tmp(setRestingQuestDockMode[9]).runOnJS, cancelReopenQuestDock: tmp7, IS_ANDROID, scheduleReopenQuestDock: tmp5, setRestingQuestDockMode, QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: closure_5 };
    H.__workletHash = 14112426222292;
    H.__initData = __initData3;
    cResult[7] = id;
    cResult[8] = sharedValue1;
    cResult[9] = sharedValue;
    cResult[10] = lastScrollEventSourceId;
    cResult[11] = restingQuestDockMode;
    cResult[12] = tmp5;
    cResult[13] = setRestingQuestDockMode;
    cResult[14] = H;
    const obj5 = { isScrollHandlerEnabled: sharedValue1, restingQuestDockMode, QuestDockMode, lastContentOffsetY: sharedValue, lastScrollEventSourceId, id, runOnJS: tmp(setRestingQuestDockMode[9]).runOnJS, cancelReopenQuestDock: tmp7, IS_ANDROID, scheduleReopenQuestDock: tmp5, setRestingQuestDockMode, QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: closure_5 };
  }
  const fn = function c() {
    if (-1 !== ref.current) {
      const _window = window;
      window.clearTimeout(ref.current);
    }
    ref.current = window.setTimeout(() => {
      if (restingQuestDockMode.get() !== constants.EXPANDED) {
        setRestingQuestDockMode(tmp.COLLAPSED);
      }
    }, 500);
  };
  cResult[0] = restingQuestDockMode;
  cResult[1] = setRestingQuestDockMode;
  cResult[2] = fn;
  tmp5 = fn;
}) : ((id) => {
  let ref;
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
      window.clearTimeout(ref.current);
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
  let obj = id(setRestingQuestDockMode[9]);
  class D {
    constructor() {
      return restingQuestDockMode.get();
    }
  }
  D.__closure = { restingQuestDockMode };
  D.__workletHash = 7763411664725;
  D.__initData = __initData4;
  const fn = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(callback1)();
    }
  };
  let obj2 = { runOnJS: id(setRestingQuestDockMode[9]).runOnJS, cancelReopenQuestDock: callback1 };
  fn.__closure = obj2;
  fn.__workletHash = 925806996878;
  fn.__initData = __initData5;
  const animatedReaction = obj.useAnimatedReaction(D, fn);
  let obj3 = id(setRestingQuestDockMode[9]);
  sharedValue = obj3.useSharedValue(0);
  let obj4 = id(setRestingQuestDockMode[9]);
  sharedValue1 = obj4.useSharedValue(false);
  const items1 = [sharedValue1];
  const effect = restingQuestDockMode.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const result = sharedValue1.set(true);
    }, sharedValue);
    return () => {
      clearTimeout(closure_0);
    };
  }, items1);
  class T {
    constructor(arg0, arg1, arg2) {
      if (sharedValue1.get()) {
        if (restingQuestDockMode.get() !== QuestDockMode.SOFT_DISMISSED) {
          if (restingQuestDockMode.get() !== QuestDockMode.EXPANDED) {
            const value = sharedValue.get();
            const result = sharedValue.set(arg0);
            if (value !== arg0) {
              const value2 = lastScrollEventSourceId.get();
              if ("guilds" !== id) {
                const result1 = lastScrollEventSourceId.set(id);
              }
              if ("guilds" === id) {
                if (arg0 < 0) {
                  if (value < 0) {
                    const obj4 = ReanimatedRexport;
                    obj4.runOnJS(callback1)();
                  }
                }
                if (arg0 <= 0) {
                  if (IS_ANDROID) {
                    if (restingQuestDockMode.get() === QuestDockMode.CLOSED) {
                      const runOnJS = ReanimatedRexport.runOnJS;
                      ReanimatedRexport;
                      if (tmp6) {
                        runOnJS(callback)();
                      } else {
                        runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);
                      }
                    }
                  }
                }
                const _Math = Math;
                const absolute = Math.abs(value - arg0);
                if (arg0 > value) {
                  if (arg0 > 0) {
                    if (value > 0) {
                      if (restingQuestDockMode.get() === QuestDockMode.COLLAPSED) {
                        const obj3 = ReanimatedRexport;
                        obj3.runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);
                      }
                    }
                  }
                }
                const tmp9 = arg0 < value && restingQuestDockMode.get() === QuestDockMode.CLOSED && absolute >= closure_5;
                if (tmp9) {
                  const obj2 = ReanimatedRexport;
                  obj2.runOnJS(callback)();
                }
              }
            }
          }
        }
      }
    }
  }
  T.__closure = { isScrollHandlerEnabled: sharedValue1, restingQuestDockMode, QuestDockMode, lastContentOffsetY: sharedValue, lastScrollEventSourceId, id, runOnJS: id(setRestingQuestDockMode[9]).runOnJS, cancelReopenQuestDock: callback1, IS_ANDROID, scheduleReopenQuestDock, setRestingQuestDockMode, QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: scheduleReopenQuestDock };
  T.__workletHash = 3376853667511;
  T.__initData = __initData6;
  const items2 = [id, sharedValue, lastScrollEventSourceId, restingQuestDockMode, scheduleReopenQuestDock, setRestingQuestDockMode, callback1, sharedValue1];
  ({ isScrollHandlerEnabled: sharedValue1, restingQuestDockMode, QuestDockMode, lastContentOffsetY: sharedValue, lastScrollEventSourceId, id, runOnJS: id(setRestingQuestDockMode[9]).runOnJS, cancelReopenQuestDock: callback1, IS_ANDROID, scheduleReopenQuestDock, setRestingQuestDockMode, QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: scheduleReopenQuestDock });
  return restingQuestDockMode.useCallback(T, items2);
});
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx");

export const QuestDockExternalCoordinationContext = context;
export const QuestDockExternalCoordinationContextProvider = memoResult;
export const useExternalScrollEventHandler = tmp4;