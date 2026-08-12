// discord_app/modules/icymi/ICYMIManager.tsx
import "initialize";
import { dispatcher } from "../../Dispatcher.tsx";
import { ICYMIActionCreators } from "ICYMIActionCreators.tsx";
import { apexExperiment } from "ICYMIExperiment.tsx";

const require = arg1;
let c3 = null;
class ICYMIManager extends tmp2 {
}
const prototype = ICYMIManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcher.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["_terminate"] = function _terminate() {
  dispatcher.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
};
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  let obj = apexExperiment;
  if (obj.getICYMIEnabled("ICYMIManager")) {
    obj = { isInitialLoad: null };
    obj[0] = true;
    const dehydrated = ICYMIActionCreators.fetchDehydrated(obj);
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
          }, 15 * callback(table[1]).Millis.MINUTE);
        }, 15 * callback(table[1]).Millis.MINUTE);
      }, 15 * callback(table[1]).Millis.MINUTE);
    }, 15 * tmp2(687).Millis.MINUTE);
    let tmp2Result = tmp2(8958);
    const guildChannelScores = tmp2Result.getGuildChannelScores();
    tmp2Result = tmp2(8958);
    const recommendedGuilds = tmp2Result.getRecommendedGuilds();
    const obj2 = ICYMIActionCreators;
  }
};
const iCYMIManager = new ICYMIManager();
const result = require("initialize").fileFinishedImporting("modules/icymi/ICYMIManager.tsx");

export default iCYMIManager;