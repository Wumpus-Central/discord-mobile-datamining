// discord_app/modules/stage_channels/StageLurkingManager.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import initializeDefault from "../../lib/LifecycleManager.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";
import closure_4 from "../../stores/SelectedGuildStore.tsx";

let require = arg1;
initializeDefault;
class StageLurkingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(arg0) {
      ({ channelId, guildId } = arg0);
      if (null != channelId) {
        const channel = closure_1_3.getChannel(channelId);
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
    applyArgumentsResult.handleDisconnectFromStageChannel = function handleDisconnectFromStageChannel(arg0) {
      guildId = guildId.getGuildId();
      const items = [guildId, arg0];
      applyArgumentsResult(6175).stopLurkingAll(items.filter(applyArgumentsResult(1470).isNotNullish));
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
  const subscription = dispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const obj = dispatcherDefault;
  const subscription1 = dispatcherDefault.subscribe("LOGOUT", this.handleLogout);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
};
const stageLurkingManager = new StageLurkingManager();
let result = require("set").fileFinishedImporting("modules/stage_channels/StageLurkingManager.tsx");

export default stageLurkingManager;
