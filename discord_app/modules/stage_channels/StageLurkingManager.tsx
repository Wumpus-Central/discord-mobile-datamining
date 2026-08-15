// discord_app/modules/stage_channels/StageLurkingManager.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import "initialize";
import { dispatcher } from "../../Dispatcher.tsx";

let require = arg1;
class StageLurkingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(arg0) {
      let channelId;
      let guildId;
      ({ channelId, guildId } = arg0);
      if (null != channelId) {
        const channel = outer1_3.getChannel(channelId);
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
      applyArgumentsResult(7284).stopLurkingAll(items.filter(applyArgumentsResult(1370).isNotNullish));
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
  const subscription = dispatcher.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const obj = dispatcher;
  const subscription1 = dispatcher.subscribe("LOGOUT", this.handleLogout);
};
prototype["_terminate"] = function _terminate() {
  dispatcher.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const obj = dispatcher;
  dispatcher.unsubscribe("LOGOUT", this.handleLogout);
};
const stageLurkingManager = new StageLurkingManager();
let result = require("initialize").fileFinishedImporting("modules/stage_channels/StageLurkingManager.tsx");

export default stageLurkingManager;