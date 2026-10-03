// discord_app/modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestDockStore from "QuestDockStore.tsx";

require = fn;
let QuestDockMode = fn(5623).QuestDockMode;
let closure_5 = fn(14892).QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
const jsx = fn(21).jsx;
const SECOND = DurationsDefault.Millis.SECOND;
let obj = {
  restingQuestDockMode: null,
  setRestingQuestDockMode: null,
  lastScrollEventSourceId: null,
  questDockOffset: null,
};
let ReanimatedHelperTypes = fn(6571);
obj.restingQuestDockMode = ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED);
obj.setRestingQuestDockMode = function setRestingQuestDockMode() {};
ReanimatedHelperTypes = fn(6571);
obj.lastScrollEventSourceId = ReanimatedHelperTypes.createFakeSharedValue(null);
ReanimatedHelperTypes = fn(6571);
obj.questDockOffset = ReanimatedHelperTypes.createFakeSharedValue(0);
let context = noop.createContext(obj);
fn(558);
const PlatformUtils = fn(1369);
const IS_ANDROID = PlatformUtils.isAndroid();
const __initData = {
  code: "function QuestDockExternalCoordinationContextTsx1(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}",
};
const __initData2 = {
  code: "function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}",
};
const __initData3 = {
  code: 'function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get()){return;}if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY){return;}const lastSourceId=lastScrollEventSourceId.get();if(id!=="guilds"){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=="guilds"&&id!==lastSourceId;if(isFirstScrollEvent){return;}const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom){return;}const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else{if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}}',
};
const __initData4 = {
  code: "function QuestDockExternalCoordinationContextTsx4(){const{restingQuestDockMode}=this.__closure;return restingQuestDockMode.get();}",
};
const __initData5 = {
  code: "function QuestDockExternalCoordinationContextTsx5(nextMode,prevMode){const{runOnJS,cancelReopenQuestDock}=this.__closure;if(nextMode!==prevMode){runOnJS(cancelReopenQuestDock)();}}",
};
const __initData6 = {
  code: "function QuestDockExternalCoordinationContextTsx6(contentOffsetY,contentHeight,layoutHeight){const{isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,runOnJS,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD}=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){runOnJS(cancelReopenQuestDock)();return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){runOnJS(scheduleReopenQuestDock)();}else{runOnJS(setRestingQuestDockMode)(QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){runOnJS(setRestingQuestDockMode)(QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){runOnJS(scheduleReopenQuestDock)();}}",
};
const ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (children) => {
        const cResult = sharedValue1(sharedValue2[8]).c(11);
        const obj = sharedValue1(sharedValue2[8]);
        const sharedValue = sharedValue1(sharedValue2[9]).useSharedValue(null);
        let obj2 = sharedValue1(sharedValue2[9]);
        sharedValue1 = sharedValue1(sharedValue2[9]).useSharedValue(0);
        const obj3 = sharedValue1(sharedValue2[9]);
        const obj4 = sharedValue1(sharedValue2[9]);
        sharedValue2 = obj4.useSharedValue(
          sharedValue1(sharedValue2[10]).isSoftDismissed(QuestDockStore.questDockSoftDismissedAt)
            ? QuestDockMode.SOFT_DISMISSED
            : QuestDockMode.COLLAPSED,
        );
        if (cResult[0] === sharedValue1) {
          if (cResult[1] === sharedValue2) {
            let tmp6 = cResult[2];
          }
          if (cResult[3] === sharedValue) {
            if (cResult[4] === sharedValue1) {
              if (cResult[5] === sharedValue2) {
                if (cResult[6] === tmp6) {
                  let tmp7 = cResult[7];
                }
                if (cResult[8] === tmp7) {
                  if (cResult[9] === children.children) {
                    let tmp9 = cResult[10];
                  }
                  return tmp9;
                }
                const obj6 = { value: tmp7, children: children.children };
                const tmp12 = <context.Provider value={tmp7}>{children.children}</context.Provider>;
                cResult[8] = tmp7;
                cResult[9] = children.children;
                cResult[10] = tmp12;
                tmp9 = tmp12;
              }
            }
          }
          const obj7 = {
            lastScrollEventSourceId: sharedValue,
            restingQuestDockMode: sharedValue2,
            setRestingQuestDockMode: tmp6,
            questDockOffset: sharedValue1,
          };
          cResult[3] = sharedValue;
          cResult[4] = sharedValue1;
          cResult[5] = sharedValue2;
          cResult[6] = tmp6;
          cResult[7] = obj7;
          tmp7 = obj7;
        }
        const fn = function s(mode) {
          const result = sharedValue1.set(0);
          if (sharedValue2.get() !== mode) {
            const result1 = sharedValue2.set(mode);
          }
          if (mode !== QuestDockMode.RESET_TO_PREVIOUS) {
            const result2 = QuestActionCreators.updatePrevRestingQuestDockMode(mode);
          }
        };
        cResult[0] = sharedValue1;
        cResult[1] = sharedValue2;
        cResult[2] = fn;
        tmp6 = fn;
        const obj5 = sharedValue1(sharedValue2[10]);
      }
    : (children) => {
        sharedValue = sharedValue(sharedValue1[9]).useSharedValue(null);
        const obj = sharedValue(sharedValue1[9]);
        sharedValue1 = sharedValue(sharedValue1[9]).useSharedValue(0);
        let obj2 = sharedValue(sharedValue1[9]);
        const obj3 = sharedValue(sharedValue1[9]);
        const sharedValue2 = obj3.useSharedValue(
          sharedValue(sharedValue1[10]).isSoftDismissed(setRestingQuestDockMode.questDockSoftDismissedAt)
            ? QuestDockMode.SOFT_DISMISSED
            : QuestDockMode.COLLAPSED,
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
        const obj4 = sharedValue(sharedValue1[10]);
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
            {children.children}
          </context.Provider>
        );
      },
);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx");

export const QuestDockExternalCoordinationContext = context;
export const QuestDockExternalCoordinationContextProvider = memoResult;
export const useExternalScrollEventHandler = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      const cResult = id(setRestingQuestDockMode[8]).c(15);
      id = id.id;
      context = restingQuestDockMode.useContext(sharedValue1);
      setRestingQuestDockMode = context.setRestingQuestDockMode;
      restingQuestDockMode = context.restingQuestDockMode;
      const lastScrollEventSourceId = context.lastScrollEventSourceId;
      QuestDockMode = restingQuestDockMode.useRef(-1);
      if (cResult[0] === restingQuestDockMode) {
        if (cResult[1] === setRestingQuestDockMode) {
          let tmp5 = cResult[2];
        }
        closure_5 = tmp5;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              if (-1 !== closure_4.current) {
                tmp2 = globalThis;
                _window = window;
                clearTimeoutResult = window.clearTimeout(tmp.current);
              }
              return;
            }
          }
          cResult[3] = R;
        } else {
          class R {
            constructor() {
              if (-1 !== closure_4.current) {
                tmp2 = globalThis;
                _window = window;
                clearTimeoutResult = window.clearTimeout(tmp.current);
              }
              return;
            }
          }
        }
        closure_6 = R;
        const fn2 = function v() {
          return restingQuestDockMode.get();
        };
        let obj3 = { restingQuestDockMode };
        fn2.__closure = obj3;
        fn2.__workletHash = 14040596710288;
        fn2.__initData = __initData;
        const fn3 = function h(arg0, arg1) {
          if (arg0 !== arg1) {
            ReanimatedRexport.runOnJS(closure_6)();
          }
        };
        let obj4 = { runOnJS: tmp(tmp2[9]).runOnJS, cancelReopenQuestDock: R };
        fn3.__closure = obj4;
        fn3.__workletHash = 1848909508809;
        fn3.__initData = __initData2;
        const animatedReaction = tmp(tmp2[9]).useAnimatedReaction(fn2, fn3);
        const tmpResult = tmp(tmp2[9]);
        const sharedValue = tmp(tmp2[9]).useSharedValue(0);
        const tmpResult3 = tmp(tmp2[9]);
        sharedValue1 = tmp(tmp2[9]).useSharedValue(false);
        if (cResult[4] !== sharedValue1) {
          class I {
            constructor() {
              closure_0 = setTimeout(() => {
                const result = sharedValue1.set(true);
              }, closure_7);
              return () => {
                clearTimeout(closure_0);
              };
            }
          }
          const items = [sharedValue1];
          cResult[4] = sharedValue1;
          cResult[5] = I;
          cResult[6] = items;
          let tmp14 = items;
        } else {
          class I {
            constructor() {
              closure_0 = setTimeout(() => {
                const result = sharedValue1.set(true);
              }, closure_7);
              return () => {
                clearTimeout(closure_0);
              };
            }
          }
          tmp14 = cResult[6];
        }
        const effect = obj2.useEffect(I, tmp14);
        if (cResult[7] === id) {
          class I {
            constructor() {
              closure_0 = setTimeout(() => {
                const result = sharedValue1.set(true);
              }, closure_7);
              return () => {
                clearTimeout(closure_0);
              };
            }
          }
        }
        class H {
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
                          obj4 = closure_0(closure_1[9]);
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
                            tmp21 = closure_0(closure_1[9]);
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
                              obj3 = closure_0(closure_1[9]);
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
                        obj2 = closure_0(closure_1[9]);
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
        const obj5 = {
          isScrollHandlerEnabled: sharedValue1,
          restingQuestDockMode,
          QuestDockMode,
          lastContentOffsetY: sharedValue,
          lastScrollEventSourceId,
          id,
          runOnJS: tmp(tmp2[9]).runOnJS,
          cancelReopenQuestDock: R,
          IS_ANDROID,
          scheduleReopenQuestDock: tmp5,
          setRestingQuestDockMode,
          QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: closure_5,
        };
        H.__closure = obj5;
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
        const tmpResult4 = tmp(tmp2[9]);
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
      let obj = id(setRestingQuestDockMode[8]);
      obj2 = restingQuestDockMode;
    }
  : (id) => {
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
          ReanimatedRexport.runOnJS(callback1)();
        }
      };
      let obj = id(setRestingQuestDockMode[9]);
      fn.__closure = { runOnJS: id(setRestingQuestDockMode[9]).runOnJS, cancelReopenQuestDock: callback1 };
      fn.__workletHash = 925806996878;
      fn.__initData = __initData5;
      const animatedReaction = obj.useAnimatedReaction(D, fn);
      let obj2 = { runOnJS: id(setRestingQuestDockMode[9]).runOnJS, cancelReopenQuestDock: callback1 };
      sharedValue = id(setRestingQuestDockMode[9]).useSharedValue(0);
      let obj3 = id(setRestingQuestDockMode[9]);
      sharedValue1 = id(setRestingQuestDockMode[9]).useSharedValue(false);
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
                        obj4 = closure_0(closure_1[9]);
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
                          tmp21 = closure_0(closure_1[9]);
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
                            obj3 = closure_0(closure_1[9]);
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
                      obj2 = closure_0(closure_1[9]);
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
      let obj4 = id(setRestingQuestDockMode[9]);
      T.__closure = {
        isScrollHandlerEnabled: sharedValue1,
        restingQuestDockMode,
        QuestDockMode,
        lastContentOffsetY: sharedValue,
        lastScrollEventSourceId,
        id,
        runOnJS: id(setRestingQuestDockMode[9]).runOnJS,
        cancelReopenQuestDock: callback1,
        IS_ANDROID,
        scheduleReopenQuestDock,
        setRestingQuestDockMode,
        QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD: scheduleReopenQuestDock,
      };
      T.__workletHash = 3376853667511;
      T.__initData = __initData6;
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
