// discord_app/modules/hub/HubJoinManager.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";
import "initialize";

let require = arg1;
class HubJoinManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleGuildCreate = function handleGuildCreate(guild) {
      guild = outer1_3.getGuild(guild.guild.id);
      let tmp2 = null != guild;
      if (tmp2) {
        const features = guild.features;
        let hasItem;
        if (features != null) {
          hasItem = features.has(outer1_4.HUB);
        }
        tmp2 = hasItem;
      }
      if (tmp2) {
        const onClose = applyArgumentsResult.onClose;
        if (onClose != null) {
          onClose();
        }
        applyArgumentsResult(outer1_2[4]).transitionToGuild(guild.id);
        const obj = applyArgumentsResult(outer1_2[4]);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = HubJoinManager.prototype;
prototype["_initialize"] = function _initialize(onClose) {
  this.onClose = onClose;
  const subscription = require("../../Dispatcher.tsx").subscribe("GUILD_CREATE", this.handleGuildCreate);
};
prototype["_terminate"] = function _terminate() {
  require("../../Dispatcher.tsx").unsubscribe("GUILD_CREATE", this.handleGuildCreate);
};
const hubJoinManager = new HubJoinManager();
const result = require("initialize").fileFinishedImporting("modules/hub/HubJoinManager.tsx");

export default hubJoinManager;