// discord_app/modules/guild_rooms/GuildRoomManager.tsx
import GuildRoomActionCreators from "GuildRoomActionCreators.native.tsx";
import GuildRoomsExperiment from "GuildRoomsExperiment.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildRoomStore from "GuildRoomStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const channelId = null;
const guildId = null;
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
      },
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildRoomManager.prototype;
prototype["isExperimentEnabled"] = function isExperimentEnabled(guildId, VOICE_STATE_UPDATE) {
  const obj = { guildId, location: VOICE_STATE_UPDATE };
  return obj.getGuildRoomsConfig(obj).enabled;
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(arg0) {
  const self = this;
  const iter = arg0.voiceStates[Symbol.iterator]();
  while (iter !== undefined) {
    ({ userId, guildId, channelId, sessionId, oldChannelId } = nextResult);
    let obj = AuthenticationStore;
    let tmp2 = userId;
    if (userId === AuthenticationStore.getId()) {
      if (sessionId === obj.getSessionId()) {
        if (channelId !== channelId) {
          let isExperimentEnabledResult = null != channelId;
          if (isExperimentEnabledResult) {
            isExperimentEnabledResult = null != guildId;
          }
          if (isExperimentEnabledResult) {
            isExperimentEnabledResult = self.isExperimentEnabled(guildId, "VOICE_STATE_UPDATE");
          }
          if (isExperimentEnabledResult) {
            let obj3 = GuildRoomActionCreators;
            let guildRoomDisconnectResult = obj3.guildRoomDisconnect(guildId, channelId);
          }
          if (null != channelId) {
            if (null != guildId) {
              let pendingPosition = GuildRoomStore.getPendingPosition();
              let pendingSeat = GuildRoomStore.getPendingSeat();
              if (self.isExperimentEnabled(guildId, "VOICE_STATE_UPDATE")) {
                let obj4 = GuildRoomActionCreators;
                let guildRoomConnectResult = obj4.guildRoomConnect(guildId, channelId, pendingPosition, pendingSeat);
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
        let obj2 = GuildRoomActionCreators;
        let result = obj2.guildRoomLocalDisconnect(tmp2, oldChannelId);
      }
    }
    continue;
  }
};
prototype["handleConnectionResumed"] = function handleConnectionResumed() {
  let isExperimentEnabledResult = null != channelId;
  if (isExperimentEnabledResult) {
    isExperimentEnabledResult = null != guildId;
  }
  if (isExperimentEnabledResult) {
    const self = this;
    isExperimentEnabledResult = this.isExperimentEnabled(guildId, "CONNECTION_RESUMED");
  }
  if (isExperimentEnabledResult) {
    const guildRoom = GuildRoomActionCreators.fetchGuildRoom(guildId, channelId);
  }
};
const guildRoomManager = new GuildRoomManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomManager.tsx");

export default guildRoomManager;
