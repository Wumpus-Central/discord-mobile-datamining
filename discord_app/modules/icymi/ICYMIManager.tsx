// discord_app/modules/icymi/ICYMIManager.tsx
import obj132Default from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import initializeDefault from "../../lib/LifecycleManager.tsx";
import _modDef9057 from "ICYMIActionCreators.tsx";
import apexExperiment from "ICYMIExperiment.tsx";

require = fn;
let c3 = null;
initializeDefault;
class ICYMIManager extends tmp2 {
}
const prototype = ICYMIManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcherDefault.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  let obj = apexExperiment;
  if (obj.getICYMIEnabled("ICYMIManager")) {
    obj = { isInitialLoad: null };
    obj[0] = true;
    const dehydrated = _modDef9057.fetchDehydrated(obj);
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
    }
    const _setTimeout = setTimeout;
    timeout = setTimeout(() => {
      let dehydrated = callback(table[0]).fetchDehydrated({ isInitialLoad: false });
      if (null != timeout) {
        let _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        let dehydrated = callback(table[0]).fetchDehydrated({ isInitialLoad: false });
        if (null != timeout) {
          let _clearTimeout = clearTimeout;
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          let dehydrated = callback(table[0]).fetchDehydrated({ isInitialLoad: false });
          if (null != timeout) {
            let _clearTimeout = clearTimeout;
            clearTimeout(timeout);
          }
          timeout = setTimeout(() => {
            let dehydrated = callback(table[0]).fetchDehydrated({ isInitialLoad: false });
            if (null != timeout) {
              let _clearTimeout = clearTimeout;
              clearTimeout(timeout);
            }
            timeout = setTimeout(() => { ... }, 15 * callback(table[1]).Millis.MINUTE);
            let obj = callback(table[0]);
          }, 15 * callback(table[1]).Millis.MINUTE);
          let obj = callback(table[0]);
        }, 15 * callback(table[1]).Millis.MINUTE);
        let obj = callback(table[0]);
      }, 15 * callback(table[1]).Millis.MINUTE);
      let obj = callback(table[0]);
    }, 15 * obj132Default.Millis.MINUTE);
    let tmp2Result = _modDef9057;
    const guildChannelScores = tmp2Result.getGuildChannelScores();
    tmp2Result = _modDef9057;
    const recommendedGuilds = tmp2Result.getRecommendedGuilds();
  }
};
const iCYMIManager = new ICYMIManager();
const result = require("obj132").fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default iCYMIManager;