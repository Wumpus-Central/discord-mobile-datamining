// === Module 17424: QuestDockExternalCoordinationContext ===

// Module 17424 (QuestDockExternalCoordinationContext)
import DurationsDefault from "Durations" /* 1089 */;
import QuestActionCreators from "QuestActionCreators" /* 9779 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 17418 */;

const require = globalThis.__r;

require = fn;
const QuestDockMode = fn(6839).QuestDockMode;
let closure_5 = fn(17420).QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
const jsx = fn(21).jsx;
const SECOND = DurationsDefault.Millis.SECOND;
let obj = { restingQuestDockMode: null, setRestingQuestDockMode: null, lastScrollEventSourceId: null, questDockOffset: null };
let ReanimatedHelperTypes = fn(7308);
obj.restingQuestDockMode = ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED);
obj.setRestingQuestDockMode = function setRestingQuestDockMode() {

};
ReanimatedHelperTypes = fn(7308);
obj.lastScrollEventSourceId = ReanimatedHelperTypes.createFakeSharedValue(null);
ReanimatedHelperTypes = fn(7308);
obj.questDockOffset = ReanimatedHelperTypes.createFakeSharedValue(0);
let context = noop.createContext(obj);
const PlatformUtils = fn(1377);
let closure_9 = PlatformUtils.isAndroid();
let closure_10 = { code: "(function QuestDockExternalCoordinationContextTsx1(){let[restingQuestDockMode]=this.__closure;return restingQuestDockMode.get();})" };
let closure_11 = { code: "(function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){let[scheduleOnRN,cancelReopenQuestDock]=this.__closure;if(nextMode!==prevMode){scheduleOnRN(cancelReopenQuestDock);}})" };
let closure_12 = { code: "(function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){let[isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,scheduleOnRN,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD]=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){scheduleOnRN(cancelReopenQuestDock);return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){scheduleOnRN(scheduleReopenQuestDock);}else{scheduleOnRN(setRestingQuestDockMode,QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){scheduleOnRN(setRestingQuestDockMode,QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){scheduleOnRN(scheduleReopenQuestDock);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockExternalCoordinationContext.tsx");

export const QuestDockExternalCoordinationContext = context;
export const QuestDockExternalCoordinationContextProvider = noop.memo(function QuestDockExternalCoordinationContextProviderInner(children) {
  sharedValue = sharedValue(sharedValue1[7]).useSharedValue(null);
  const obj = sharedValue(sharedValue1[7]);
  sharedValue1 = sharedValue(sharedValue1[7]).useSharedValue(0);
  let obj2 = sharedValue(sharedValue1[7]);
  const obj3 = sharedValue(sharedValue1[7]);
  const sharedValue2 = obj3.useSharedValue(sharedValue(sharedValue1[8]).isSoftDismissed(setRestingQuestDockMode.questDockSoftDismissedAt) ? QuestDockMode.SOFT_DISMISSED : QuestDockMode.COLLAPSED);
  items = [sharedValue2, sharedValue1];
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
  const obj4 = sharedValue(sharedValue1[8]);
  return <context.Provider value={sharedValue2.useMemo(() => ({ lastScrollEventSourceId: sharedValue, restingQuestDockMode: sharedValue2, setRestingQuestDockMode, questDockOffset: sharedValue1 }), items1)}>{children.children}</context.Provider>;
});
export function useExternalScrollEventHandler(id) {
  id = id.id;
  noop = undefined;
  c3 = undefined;
  context = noop.useContext(c8);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  const restingQuestDockMode = context.restingQuestDockMode;
  dependencyMap = restingQuestDockMode;
  const lastScrollEventSourceId = context.lastScrollEventSourceId;
  noop = noop.useRef(-1);
  items = [setRestingQuestDockMode, restingQuestDockMode];
  const callback = noop.useCallback(() => {
    if (-1 !== _undefined3.current) {
      const _window = window;
      window.clearTimeout(_undefined3.current);
    }
    _undefined3.current = window.setTimeout(() => {
      if (_undefined2.get() !== constants.EXPANDED) {
        _undefined(tmp.COLLAPSED);
      }
    }, 500);
  }, items);
  const callback1 = noop.useCallback(() => {
    if (-1 !== _undefined3.current) {
      const _window = window;
      window.clearTimeout(tmp.current);
    }
  }, []);
  const items1 = [c10, restingQuestDockMode];
  _require = undefined;
  [tmp6, tmp7] = items1;
  class QuestDockExternalCoordinationContextTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items2 = [tmp7];
  QuestDockExternalCoordinationContextTsx1.__closure = items2;
  QuestDockExternalCoordinationContextTsx1.__workletHash = 4531016347305;
  QuestDockExternalCoordinationContextTsx1.__initData = tmp6;
  const items3 = [c11, require("module_1705").scheduleOnRN, callback1];
  _require = undefined;
  dependencyMap = undefined;
  [tmp8, tmp9, tmp10] = items3;
  class QuestDockExternalCoordinationContextTsx2 {
    constructor(arg0, arg1) {
      if (id !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1);
      }
      return;
    }
  }
  const items4 = [tmp9, tmp10];
  QuestDockExternalCoordinationContextTsx2.__closure = items4;
  QuestDockExternalCoordinationContextTsx2.__workletHash = 3450868736561;
  QuestDockExternalCoordinationContextTsx2.__initData = tmp8;
  const animatedReaction = require("module_1652").useAnimatedReaction(QuestDockExternalCoordinationContextTsx1, QuestDockExternalCoordinationContextTsx2);
  const obj2 = require("module_1652");
  const sharedValue = require("module_1652").useSharedValue(0);
  const tmp4Result = require("module_1652");
  const sharedValue1 = require("module_1652").useSharedValue(false);
  const items5 = [sharedValue1];
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = _undefined4.set(true);
    }, c7);
    return () => {
      clearTimeout(closure_0);
    };
  }, items5);
  const items6 = [closure_12, sharedValue1, restingQuestDockMode, c4, sharedValue, lastScrollEventSourceId, id, require("module_1705").scheduleOnRN, callback1, c9, callback, setRestingQuestDockMode, c5];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items6;
  class QuestDockExternalCoordinationContextTsx3 {
    constructor(arg0, arg1, arg2) {
      if (closure_0.get()) {
        obj = closure_1;
        tmp = closure_2;
        if (closure_1.get() !== closure_2.SOFT_DISMISSED) {
          if (obj.get() !== tmp.EXPANDED) {
            tmp25 = id;
            tmp26 = closure_3;
            value = closure_3.get();
            result = closure_3.set(id);
            if (value !== id) {
              obj2 = closure_4;
              tmp30 = closure_5;
              str = "guilds";
              value1 = closure_4.get();
              if ("guilds" !== closure_5) {
                result1 = obj2.set(tmp30);
              }
              if ("guilds" === tmp30) {
                num = 0;
                if (id < 0) {
                  if (value < 0) {
                    tmp22 = closure_6;
                    tmp23 = closure_7;
                    tmp24 = closure_6(closure_7);
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
                  if (closure_8) {
                    if (obj.get() === tmp.CLOSED) {
                      tmp17 = closure_6;
                      if (tmp6) {
                        tmp20 = closure_9;
                        tmp17Result = tmp17(closure_9);
                      } else {
                        tmp18 = closure_10;
                        tmp17Result1 = tmp17(closure_10, tmp.COLLAPSED);
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
                        tmp14 = closure_6;
                        tmp15 = closure_10;
                        tmp16 = closure_6(closure_10, tmp.CLOSED);
                      }
                    }
                  }
                }
                tmp9 = id < value && obj.get() === tmp.CLOSED;
                if (tmp9) {
                  tmp10 = closure_11;
                  tmp9 = absolute >= closure_11;
                }
                if (tmp9) {
                  tmp11 = closure_6;
                  tmp12 = closure_9;
                  tmp13 = closure_6(closure_9);
                }
              }
            }
          }
        }
      }
      return;
    }
  }
  const items7 = [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
  QuestDockExternalCoordinationContextTsx3.__closure = items7;
  QuestDockExternalCoordinationContextTsx3.__workletHash = 5916985737194;
  QuestDockExternalCoordinationContextTsx3.__initData = tmp15;
  const items8 = [id, sharedValue, lastScrollEventSourceId, restingQuestDockMode, callback, setRestingQuestDockMode, callback1, sharedValue1];
  return noop.useCallback(QuestDockExternalCoordinationContextTsx3, items8);
}