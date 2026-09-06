// === Module 14544: ICYMIManager ===

// Module 14544 (ICYMIManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8352 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;

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
  let obj = ICYMIExperiment;
  if (obj.getICYMIEnabled("ICYMIManager")) {
    obj = { isInitialLoad: true };
    const dehydrated = ICYMIActionCreatorsDefault.fetchDehydrated(obj);
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
    let tmp2Result = ICYMIActionCreatorsDefault;
    const guildChannelScores = tmp2Result.getGuildChannelScores();
    tmp2Result = ICYMIActionCreatorsDefault;
    const recommendedGuilds = tmp2Result.getRecommendedGuilds();
  }
};
const iCYMIManager = new ICYMIManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default iCYMIManager;