// discord_app/modules/hub/HubJoinManager.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import initializeDefault from "../../lib/LifecycleManager.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import { GuildFeatures } from "../../Constants.tsx";

let require = fn;
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
          hasItem = features.has(GuildFeatures.HUB);
        }
        tmp2 = hasItem;
      }
      if (tmp2) {
        const onClose = applyArgumentsResult.onClose;
        if (onClose != null) {
          onClose();
        }
        applyArgumentsResult(dependencyMap[4]).transitionToGuild(guild.id);
        const obj = applyArgumentsResult(dependencyMap[4]);
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
const result = require("obj132").fileFinishedImporting("modules/hub/HubJoinManager.tsx");

export default hubJoinManager;