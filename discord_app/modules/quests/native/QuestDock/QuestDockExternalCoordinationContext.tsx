// === Module 16633: QuestDockExternalCoordinationContext ===

// Module 16633 (QuestDockExternalCoordinationContext)
import DurationsDefault from "Durations" /* 1088 */;
import QuestActionCreators from "QuestActionCreators" /* 9852 */;
import noop from "module_19" /* 19 */;
import QuestDockStore from "QuestDockStore" /* 16627 */;

const require = globalThis.__r;

require = fn;
const QuestConstants = fn(6840);
const QuestDockMode = QuestConstants.QuestDockMode;
let QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
let closure_6 = fn(16629).QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD;
const jsx = fn(21).jsx;
const SECOND = DurationsDefault.Millis.SECOND;
let obj = { restingQuestDockMode: null, setRestingQuestDockMode: null, lastScrollEventSourceId: null, questDockOffset: null };
let ReanimatedHelperTypes = fn(7398);
obj.restingQuestDockMode = ReanimatedHelperTypes.createFakeSharedValue(QuestDockMode.COLLAPSED);
obj.setRestingQuestDockMode = function setRestingQuestDockMode() {

};
ReanimatedHelperTypes = fn(7398);
obj.lastScrollEventSourceId = ReanimatedHelperTypes.createFakeSharedValue(null);
ReanimatedHelperTypes = fn(7398);
obj.questDockOffset = ReanimatedHelperTypes.createFakeSharedValue(0);
let context = noop.createContext(obj);
const PlatformUtils = fn(1378);
let closure_10 = PlatformUtils.isAndroid();
let closure_11 = { code: "(function QuestDockExternalCoordinationContextTsx1(){let[restingQuestDockMode]=this.__closure;return restingQuestDockMode.get();})" };
let closure_12 = { code: "(function QuestDockExternalCoordinationContextTsx2(nextMode,prevMode){let[scheduleOnRN,cancelReopenQuestDock]=this.__closure;if(nextMode!==prevMode){scheduleOnRN(cancelReopenQuestDock);}})" };
let closure_13 = { code: "(function QuestDockExternalCoordinationContextTsx3(contentOffsetY,contentHeight,layoutHeight){let[isScrollHandlerEnabled,restingQuestDockMode,QuestDockMode,lastContentOffsetY,lastScrollEventSourceId,id,scheduleOnRN,cancelReopenQuestDock,IS_ANDROID,scheduleReopenQuestDock,setRestingQuestDockMode,autoCloseEnabledSharedValue,QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD]=this.__closure;if(!isScrollHandlerEnabled.get())return;if(restingQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED||restingQuestDockMode.get()===QuestDockMode.EXPANDED){return;}const lastContentOffsetYValue=lastContentOffsetY.get();lastContentOffsetY.set(contentOffsetY);if(lastContentOffsetYValue===contentOffsetY)return;const lastSourceId=lastScrollEventSourceId.get();if(id!=='guilds'){lastScrollEventSourceId.set(id);}const isFirstScrollEvent=id!=='guilds'&&id!==lastSourceId;if(isFirstScrollEvent)return;const isOverscrollingAtTop=contentOffsetY<0&&lastContentOffsetYValue<0;if(isOverscrollingAtTop){scheduleOnRN(cancelReopenQuestDock);return;}const hasLayoutData=layoutHeight!=null&&contentHeight!=null;const isOverscrollingAtBottom=hasLayoutData&&contentOffsetY+layoutHeight>=contentHeight;if(isOverscrollingAtBottom)return;const isScrolledToTop=contentOffsetY<=0&&(IS_ANDROID||lastContentOffsetYValue<=0);if(isScrolledToTop&&restingQuestDockMode.get()===QuestDockMode.CLOSED){if(IS_ANDROID){scheduleOnRN(scheduleReopenQuestDock);}else{scheduleOnRN(setRestingQuestDockMode,QuestDockMode.COLLAPSED);}return;}const isScrollingDown=contentOffsetY>lastContentOffsetYValue&&contentOffsetY>0&&lastContentOffsetYValue>0;const isScrollingUp=contentOffsetY<lastContentOffsetYValue;const scrollDistance=Math.abs(lastContentOffsetYValue-contentOffsetY);if(autoCloseEnabledSharedValue.get()&&isScrollingDown&&restingQuestDockMode.get()===QuestDockMode.COLLAPSED){scheduleOnRN(setRestingQuestDockMode,QuestDockMode.CLOSED);}else if(isScrollingUp&&restingQuestDockMode.get()===QuestDockMode.CLOSED&&scrollDistance>=QUEST_DOCK_EXTERNAL_SCROLL_DELTA_THRESHOLD){scheduleOnRN(scheduleReopenQuestDock);}})" };
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
  QuestsExperimentLocations = undefined;
  context = noop.useContext(c9);
  const setRestingQuestDockMode = context.setRestingQuestDockMode;
  _require = setRestingQuestDockMode;
  const restingQuestDockMode = context.restingQuestDockMode;
  dependencyMap = restingQuestDockMode;
  const lastScrollEventSourceId = context.lastScrollEventSourceId;
  const MobileQuestDockClosedStateExperiment = require("MobileQuestDockClosedStateExperiment").MobileQuestDockClosedStateExperiment;
  const autoCloseEnabled = MobileQuestDockClosedStateExperiment.useConfig({ location: QuestsExperimentLocations.QUESTS_BAR_MOBILE }, { autoTrackExposure: false }).autoCloseEnabled;
  noop = autoCloseEnabled;
  const sharedValue = require("module_1653").useSharedValue(autoCloseEnabled);
  c3 = sharedValue;
  items = [autoCloseEnabled, sharedValue];
  const effect = noop.useEffect(() => {
    const result = _undefined4.set(c2);
  }, items);
  c4 = noop.useRef(-1);
  const items1 = [setRestingQuestDockMode, restingQuestDockMode];
  const callback = noop.useCallback(() => {
    if (-1 !== _undefined5.current) {
      const _window = window;
      window.clearTimeout(_undefined5.current);
    }
    _undefined5.current = window.setTimeout(() => {
      if (_undefined2.get() !== constants.EXPANDED) {
        _undefined(tmp.COLLAPSED);
      }
    }, 500);
  }, items1);
  const callback1 = noop.useCallback(() => {
    if (-1 !== _undefined5.current) {
      const _window = window;
      window.clearTimeout(tmp.current);
    }
  }, []);
  const obj2 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
  const obj3 = require("module_1653");
  const items2 = [c11, restingQuestDockMode];
  _require = undefined;
  [tmp8, tmp9] = items2;
  class QuestDockExternalCoordinationContextTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items3 = [tmp9];
  QuestDockExternalCoordinationContextTsx1.__closure = items3;
  QuestDockExternalCoordinationContextTsx1.__workletHash = 4531016347305;
  QuestDockExternalCoordinationContextTsx1.__initData = tmp8;
  const items4 = [c12, require("module_1706").scheduleOnRN, callback1];
  _require = undefined;
  dependencyMap = undefined;
  [tmp10, tmp11, tmp12] = items4;
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
  const items5 = [tmp11, tmp12];
  QuestDockExternalCoordinationContextTsx2.__closure = items5;
  QuestDockExternalCoordinationContextTsx2.__workletHash = 3450868736561;
  QuestDockExternalCoordinationContextTsx2.__initData = tmp10;
  const animatedReaction = require("module_1653").useAnimatedReaction(QuestDockExternalCoordinationContextTsx1, QuestDockExternalCoordinationContextTsx2);
  const obj4 = require("module_1653");
  const sharedValue1 = require("module_1653").useSharedValue(0);
  const tmp2Result = require("module_1653");
  const sharedValue2 = require("module_1653").useSharedValue(false);
  const items6 = [sharedValue2];
  const effect1 = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      const result = closure_1_5.set(true);
    }, c8);
    return () => {
      clearTimeout(closure_0);
    };
  }, items6);
  const items7 = [closure_13, sharedValue2, restingQuestDockMode, c4, sharedValue1, lastScrollEventSourceId, id, require("module_1706").scheduleOnRN, callback1, c10, callback, setRestingQuestDockMode, sharedValue, c6];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c3 = undefined;
  c4 = undefined;
  QuestsExperimentLocations = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items7;
  class QuestDockExternalCoordinationContextTsx3 {
    constructor(arg0, arg1, arg2) {
      if (closure_0.get()) {
        obj = closure_1;
        tmp = closure_2;
        if (closure_1.get() !== closure_2.SOFT_DISMISSED) {
          if (obj.get() !== tmp.EXPANDED) {
            tmp26 = id;
            tmp27 = closure_3;
            value = closure_3.get();
            result = closure_3.set(id);
            if (value !== id) {
              obj2 = closure_4;
              tmp31 = closure_5;
              str = "guilds";
              value1 = closure_4.get();
              if ("guilds" !== closure_5) {
                result1 = obj2.set(tmp31);
              }
              if ("guilds" === tmp31) {
                num = 0;
                if (id < 0) {
                  if (value < 0) {
                    tmp23 = closure_6;
                    tmp24 = closure_7;
                    tmp25 = closure_6(closure_7);
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
                      tmp18 = closure_6;
                      if (tmp6) {
                        tmp21 = closure_9;
                        tmp18Result = tmp18(closure_9);
                      } else {
                        tmp19 = closure_10;
                        tmp18Result1 = tmp18(closure_10, tmp.COLLAPSED);
                      }
                    }
                  }
                }
                tmp7 = globalThis;
                _Math = Math;
                tmp9 = closure_11;
                absolute = Math.abs(value - id);
                if (closure_11.get()) {
                  if (id > value) {
                    if (id > 0) {
                      if (value > 0) {
                        if (obj.get() === tmp.COLLAPSED) {
                          tmp15 = closure_6;
                          tmp16 = closure_10;
                          tmp17 = closure_6(closure_10, tmp.CLOSED);
                        }
                      }
                    }
                  }
                }
                tmp10 = id < value && obj.get() === tmp.CLOSED;
                if (tmp10) {
                  tmp11 = closure_12;
                  tmp10 = absolute >= closure_12;
                }
                if (tmp10) {
                  tmp12 = closure_6;
                  tmp13 = closure_9;
                  tmp14 = closure_6(closure_9);
                }
              }
            }
          }
        }
      }
      return;
    }
  }
  const items8 = [tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30];
  QuestDockExternalCoordinationContextTsx3.__closure = items8;
  QuestDockExternalCoordinationContextTsx3.__workletHash = 13582936980959;
  QuestDockExternalCoordinationContextTsx3.__initData = tmp17;
  const items9 = [id, sharedValue, sharedValue1, lastScrollEventSourceId, restingQuestDockMode, callback, setRestingQuestDockMode, callback1, sharedValue2];
  return noop.useCallback(QuestDockExternalCoordinationContextTsx3, items9);
}