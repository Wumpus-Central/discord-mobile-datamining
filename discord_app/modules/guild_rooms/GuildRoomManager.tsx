// === Module 16714: isExperimentEnabled ===

// Module 16714 (isExperimentEnabled)
import _guildRoomConnect from "_guildRoomConnect" /* 4577 */;
import experimentDefault from "experiment" /* 4608 */;
import initializeDefault from "initialize" /* 5367 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "resolveCreatingNotes" /* 4579 */;

require = arg1;
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
  let obj = experimentDefault;
  obj = { guildId, location: VOICE_STATE_UPDATE };
  return obj.getCurrentConfig(obj).enabled;
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(arg0) {
  const self = this;
  const iter = arg0.voiceStates[Symbol.iterator]();
  while (iter !== undefined) {
    ({ userId, guildId, channelId, sessionId, oldChannelId } = nextResult);
    let obj = id;
    let tmp2 = userId;
    if (userId === id.getId()) {
      let tmp12 = sessionId;
      if (sessionId === obj.getSessionId()) {
        let tmp34 = channelId;
        if (channelId !== channelId) {
          let isExperimentEnabledResult = null != channelId;
          if (isExperimentEnabledResult) {
            let tmp13 = guildId;
            isExperimentEnabledResult = null != guildId;
          }
          if (isExperimentEnabledResult) {
            let tmp15 = guildId;
            isExperimentEnabledResult = self.isExperimentEnabled(guildId, "VOICE_STATE_UPDATE");
          }
          if (isExperimentEnabledResult) {
            let tmp16 = require;
            let tmp17 = dependencyMap;
            let obj3 = _guildRoomConnect;
            let tmp18 = guildId;
            let tmp19 = channelId;
            let guildRoomDisconnectResult = obj3.guildRoomDisconnect(guildId, channelId);
          }
          let tmp21 = channelId;
          if (null != channelId) {
            let tmp22 = guildId;
            if (null != guildId) {
              let tmp23 = pendingPosition;
              pendingPosition = pendingPosition.getPendingPosition();
              let tmp25 = guildId;
              if (self.isExperimentEnabled(guildId, "VOICE_STATE_UPDATE")) {
                let tmp26 = require;
                let tmp27 = dependencyMap;
                let obj4 = _guildRoomConnect;
                let tmp28 = guildId;
                let tmp29 = channelId;
                let tmp30 = pendingPosition;
                let guildRoomConnectResult = obj4.guildRoomConnect(guildId, channelId, pendingPosition);
              }
            }
          }
          let tmp32 = channelId;
          let tmp33 = guildId;
        }
      }
    } else {
      let tmp3 = oldChannelId;
      let tmp4 = null != oldChannelId;
      if (tmp4) {
        let tmp5 = oldChannelId;
        let tmp6 = channelId;
        tmp4 = oldChannelId !== channelId;
      }
      if (tmp4) {
        let tmp7 = require;
        let tmp8 = dependencyMap;
        let obj2 = _guildRoomConnect;
        let tmp9 = userId;
        let tmp10 = oldChannelId;
        let result = obj2.guildRoomLocalDisconnect(tmp2, oldChannelId);
      }
    }
    continue;
  }
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
    const obj = _guildRoomConnect;
  }
};
const guildRoomManager = new GuildRoomManager();
let result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomManager.tsx");

export default guildRoomManager;