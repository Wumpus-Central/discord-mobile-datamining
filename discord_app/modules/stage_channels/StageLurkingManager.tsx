// discord_app/modules/stage_channels/StageLurkingManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";

let require = fn;
class StageLurkingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(arg0) {
      ({ channelId, guildId } = arg0);
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
      }
      applyArgumentsResult.terminate();
      let tmp3 = null;
      if (null != channelId) {
        if (guildId == null) {
          guildId = null;
        }
        tmp3 = guildId;
      }
      const result = applyArgumentsResult.handleDisconnectFromStageChannel(tmp3);
    };
    applyArgumentsResult.handleDisconnectFromStageChannel = function handleDisconnectFromStageChannel(guildId) {
      guildId = guildId.getGuildId();
      const items = [guildId, guildId];
      applyArgumentsResult(7321).stopLurkingAll(items.filter(applyArgumentsResult(1369).isNotNullish));
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      applyArgumentsResult.terminate();
      const result = applyArgumentsResult.handleDisconnectFromStageChannel(null);
    };
    return applyArgumentsResult;
  }
}
const prototype = StageLurkingManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const subscription1 = DispatcherDefault.subscribe("LOGOUT", this.handleLogout);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  DispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
};
const stageLurkingManager = new StageLurkingManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/StageLurkingManager.tsx");

export default stageLurkingManager;
