// discord_app/modules/hub/HubJoinManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import transitionToGuild from "../routing/transitionToGuild.native.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";

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
