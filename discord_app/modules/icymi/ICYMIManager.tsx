// === Module 14669: ICYMIManager ===

// Module 14669 (ICYMIManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8500 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8501 */;
import LifecycleManager from "LifecycleManager" /* 1899 */;

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
    const obj3 = { isInitialLoad: true };
    const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated(obj3);
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      let dehydrated = closure_1_1(closure_1_2[0]).fetchDehydrated({ isInitialLoad: false });
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        let dehydrated = closure_1_1(closure_1_2[0]).fetchDehydrated({ isInitialLoad: false });
        if (null != timeout) {
          let _clearTimeout = clearTimeout;
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          let dehydrated = closure_1_1(closure_1_2[0]).fetchDehydrated({ isInitialLoad: false });
          if (null != timeout) {
            let _clearTimeout = clearTimeout;
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => {
            let dehydrated = closure_1_1(closure_1_2[0]).fetchDehydrated({ isInitialLoad: false });
            if (null != timeout) {
              let _clearTimeout = clearTimeout;
              clearTimeout(timeout);
            }
            timeout = setTimeout(() => { ... }, 15 * closure_1_1(closure_1_2[1]).Millis.MINUTE);
            let obj = closure_1_1(closure_1_2[0]);
          }, 15 * closure_1_1(closure_1_2[1]).Millis.MINUTE);
          let obj = closure_1_1(closure_1_2[0]);
        }, 15 * closure_1_1(closure_1_2[1]).Millis.MINUTE);
        let obj = closure_1_1(closure_1_2[0]);
      }, 15 * closure_1_1(closure_1_2[1]).Millis.MINUTE);
      let obj = closure_1_1(closure_1_2[0]);
    }, 15 * DurationsDefault.Millis.MINUTE);
    const guildChannelScores = ICYMIActionCreatorsDefault.getGuildChannelScores();
    const tmp2Result = ICYMIActionCreatorsDefault;
    const recommendedGuilds = ICYMIActionCreatorsDefault.getRecommendedGuilds();
    const tmp2Result2 = ICYMIActionCreatorsDefault;
  }
  obj = ICYMIExperiment;
};
const iCYMIManager = new ICYMIManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default iCYMIManager;