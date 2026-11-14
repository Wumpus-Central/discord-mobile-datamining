// === Module 17027: ICYMIManager ===

// Module 17027 (ICYMIManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import DurationsDefault from "Durations" /* 1089 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 10215 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 10217 */;
import ICYMIExperiment from "ICYMIExperiment" /* 10220 */;
import LifecycleManager from "LifecycleManager" /* 2123 */;

require = fn;
let closure_3 = null;
class ICYMIManager extends tmp2 {
}
const prototype = ICYMIManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  if (obj.getICYMIEnabled("ICYMIManager")) {
    if (!tmpResult.getWaterwheelsDiscoverEnabled("ICYMIManager")) {
      const obj2 = { isInitialLoad: true };
      const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated(obj2);
    }
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      if (!obj.getWaterwheelsDiscoverEnabled("ICYMIManager")) {
        let obj3 = { isInitialLoad: false };
        let dehydrated = closure_1_1(closure_1_2[1]).fetchDehydrated(obj3);
        let obj2 = closure_1_1(closure_1_2[1]);
      }
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        if (!obj.getWaterwheelsDiscoverEnabled("ICYMIManager")) {
          let obj3 = { isInitialLoad: false };
          let dehydrated = closure_1_1(closure_1_2[1]).fetchDehydrated(obj3);
          let obj2 = closure_1_1(closure_1_2[1]);
        }
        if (null != timeout) {
          let _clearTimeout = clearTimeout;
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          if (!obj.getWaterwheelsDiscoverEnabled("ICYMIManager")) {
            let obj3 = { isInitialLoad: false };
            let dehydrated = closure_1_1(closure_1_2[1]).fetchDehydrated(obj3);
            let obj2 = closure_1_1(closure_1_2[1]);
          }
          if (null != timeout) {
            let _clearTimeout = clearTimeout;
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => {
            if (!obj.getWaterwheelsDiscoverEnabled("ICYMIManager")) {
              let obj3 = { isInitialLoad: false };
              let dehydrated = closure_1_1(closure_1_2[1]).fetchDehydrated(obj3);
              let obj2 = closure_1_1(closure_1_2[1]);
            }
            if (null != timeout) {
              let _clearTimeout = clearTimeout;
              clearTimeout(timeout);
            }
            timeout = setTimeout(/* F114467 */ function() { ... }, 15 * closure_1_1(closure_1_2[2]).Millis.MINUTE);
            obj = closure_1_0(closure_1_2[0]);
          }, 15 * closure_1_1(closure_1_2[2]).Millis.MINUTE);
          obj = closure_1_0(closure_1_2[0]);
        }, 15 * closure_1_1(closure_1_2[2]).Millis.MINUTE);
        obj = closure_1_0(closure_1_2[0]);
      }, 15 * closure_1_1(closure_1_2[2]).Millis.MINUTE);
      obj = closure_1_0(closure_1_2[0]);
    }, 15 * DurationsDefault.Millis.MINUTE);
    tmpResult = WaterwheelsDiscoverExperiment;
    const guildChannelScores = ICYMIActionCreatorsDefault.getGuildChannelScores();
    const recommendedGuilds = ICYMIActionCreatorsDefault.getRecommendedGuilds();
  }
  obj = ICYMIExperiment;
};
const iCYMIManager = new ICYMIManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default iCYMIManager;