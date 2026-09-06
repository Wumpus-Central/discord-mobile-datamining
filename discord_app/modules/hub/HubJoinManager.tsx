// === Module 12739: HubJoinManager ===

// Module 12739 (HubJoinManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import transitionToGuild from "transitionToGuild" /* 7342 */;
import GuildStore from "GuildStore" /* 1979 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
class HubJoinManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleGuildCreate = function handleGuildCreate(guild) {
      guild = GuildStore.getGuild(guild.guild.id);
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
        transitionToGuild.transitionToGuild(guild.id);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = HubJoinManager.prototype;
prototype["_initialize"] = function _initialize(onClose) {
  this.onClose = onClose;
  const subscription = DispatcherDefault.subscribe("GUILD_CREATE", this.handleGuildCreate);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("GUILD_CREATE", this.handleGuildCreate);
};
const hubJoinManager = new HubJoinManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/HubJoinManager.tsx");

export default hubJoinManager;