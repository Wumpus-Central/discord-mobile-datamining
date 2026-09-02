// === Module 12501: _initialize ===

// Module 12501 (_initialize)
import dispatcherDefault from "dispatcher" /* 706 */;
import initializeDefault from "initialize" /* 4662 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;
import { GuildFeatures } from "ME" /* 673 */;

let require = arg1;
initializeDefault;
class HubJoinManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleGuildCreate = function handleGuildCreate(guild) {
      guild = closure_1_3.getGuild(guild.guild.id);
      let tmp2 = null != guild;
      if (tmp2) {
        const features = guild.features;
        let hasItem;
        if (features != null) {
          hasItem = features.has(closure_1_4.HUB);
        }
        tmp2 = hasItem;
      }
      if (tmp2) {
        const onClose = applyArgumentsResult.onClose;
        if (onClose != null) {
          onClose();
        }
        applyArgumentsResult(closure_1_2[4]).transitionToGuild(guild.id);
        const obj = applyArgumentsResult(closure_1_2[4]);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = HubJoinManager.prototype;
prototype["_initialize"] = function _initialize(onClose) {
  this.onClose = onClose;
  const subscription = dispatcherDefault.subscribe("GUILD_CREATE", this.handleGuildCreate);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("GUILD_CREATE", this.handleGuildCreate);
};
const hubJoinManager = new HubJoinManager();
const result = require("set").fileFinishedImporting("modules/hub/HubJoinManager.tsx");

export default hubJoinManager;