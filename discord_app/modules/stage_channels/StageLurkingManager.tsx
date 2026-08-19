// === Module 12824: _initialize ===

// Module 12824 (_initialize)
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4720 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleConnectionOpen from "handleConnectionOpen" /* 4197 */;

let require = fn;
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
    applyArgumentsResult.handleDisconnectFromStageChannel = function handleDisconnectFromStageChannel(guildId) {
      guildId = guildId.getGuildId();
      const items = [guildId, guildId];
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
  const subscription = dispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const subscription1 = dispatcherDefault.subscribe("LOGOUT", this.handleLogout);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
};
const stageLurkingManager = new StageLurkingManager();
let result = require("obj132").fileFinishedImporting("modules/stage_channels/StageLurkingManager.tsx");

export default stageLurkingManager;