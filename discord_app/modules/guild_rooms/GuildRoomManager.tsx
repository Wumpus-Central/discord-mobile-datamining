// === Module 16586: isExperimentEnabled ===

// Module 16586 (isExperimentEnabled)
import initializeDefault from "initialize" /* 5038 */;
import _guildRoomConnect from "_guildRoomConnect" /* 9862 */;
import experimentDefault from "experiment" /* 9882 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import resolveCreatingNotes from "resolveCreatingNotes" /* 9864 */;

require = fn;
let c5 = null;
let c6 = null;
initializeDefault;
class GuildRoomManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      VOICE_STATE_UPDATES(arg0) {
            return applyArgumentsResult.handleVoiceStateUpdates(arg0);
          },
      CONNECTION_RESUMED() {
            return applyArgumentsResult.handleConnectionResumed();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildRoomManager.prototype;
prototype["isExperimentEnabled"] = function isExperimentEnabled(guildId, VOICE_STATE_UPDATE) {
  const obj = { guildId, location: VOICE_STATE_UPDATE };
  return obj.getCurrentConfig(obj).enabled;
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(arg0) {
  const self = this;
  const iter = arg0.voiceStates[Symbol.iterator]();
  while (iter !== undefined) {
    ({ userId, guildId, channelId, sessionId, oldChannelId } = nextResult);
    if (userId === id.getId()) {
      if (sessionId === id.getSessionId()) {
        if (channelId !== channelId) {
          let isExperimentEnabledResult = null != channelId;
          if (isExperimentEnabledResult) {
            isExperimentEnabledResult = null != guildId;
          }
          if (isExperimentEnabledResult) {
            isExperimentEnabledResult = self.isExperimentEnabled(guildId, "VOICE_STATE_UPDATE");
          }
          if (isExperimentEnabledResult) {
            let obj3 = _guildRoomConnect;
            let guildRoomDisconnectResult = obj3.guildRoomDisconnect(guildId, channelId);
          }
          if (null != channelId) {
            if (null != guildId) {
              pendingPosition = pendingPosition.getPendingPosition();
              if (self.isExperimentEnabled(guildId, "VOICE_STATE_UPDATE")) {
                let obj4 = _guildRoomConnect;
                let guildRoomConnectResult = obj4.guildRoomConnect(guildId, channelId, pendingPosition);
              }
            }
          }
        }
      }
    } else {
      let tmp4 = null != oldChannelId;
      if (tmp4) {
        tmp4 = oldChannelId !== channelId;
      }
      if (tmp4) {
        let obj2 = _guildRoomConnect;
        let result = obj2.guildRoomLocalDisconnect(userId, oldChannelId);
      }
    }
    continue;
  }
  nextResult = iter.next();
};
prototype["handleConnectionResumed"] = function handleConnectionResumed() {
  let isExperimentEnabledResult = null != c5;
  if (isExperimentEnabledResult) {
    isExperimentEnabledResult = null != c6;
  }
  if (isExperimentEnabledResult) {
    const self = this;
    isExperimentEnabledResult = this.isExperimentEnabled(c6, "CONNECTION_RESUMED");
  }
  if (isExperimentEnabledResult) {
    const guildRoom = _guildRoomConnect.fetchGuildRoom(c6, c5);
  }
};
const guildRoomManager = new GuildRoomManager();
let result = require("obj132").fileFinishedImporting("modules/guild_rooms/GuildRoomManager.tsx");

export default guildRoomManager;