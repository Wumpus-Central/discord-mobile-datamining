// discord_app/modules/guild_rooms/GuildRoomManager.tsx
import GuildRoomActionCreators from "GuildRoomActionCreators.native.tsx";
import GuildRoomsExperiment from "GuildRoomsExperiment.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildRoomStore from "GuildRoomStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

const channelId = null;
const guildId = null;
class GuildRoomManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
  isExperimentEnabled(guildId, VOICE_STATE_UPDATE) {
    const obj = GuildRoomsExperiment;
    const obj2 = { guildId, location: VOICE_STATE_UPDATE };
    return obj.getGuildRoomsConfig(obj2).enabled;
  }
  handleVoiceStateUpdates(arg0) {
    let oldChannelId;
    let sessionId;
    let userId;
    const self = this;
    const iter = arg0.voiceStates[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ userId, guildId, channelId, sessionId, oldChannelId } = nextResult);
      if (userId === AuthenticationStore.getId()) {
        if (sessionId === AuthenticationStore.getSessionId()) {
          if (channelId !== channelId) {
            let isExperimentEnabledResult =
              null != channelId && null != guildId && self.isExperimentEnabled(guildId, "VOICE_STATE_UPDATE");
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
        let tmp4 = null != oldChannelId && oldChannelId !== channelId;
        if (tmp4) {
          let obj2 = GuildRoomActionCreators;
          let result = obj2.guildRoomLocalDisconnect(userId, oldChannelId);
        }
      }
      continue;
    }
  }
  handleConnectionResumed() {
    let isExperimentEnabledResult = null != channelId && null != guildId;
    if (isExperimentEnabledResult) {
      const self = this;
      isExperimentEnabledResult = this.isExperimentEnabled(guildId, "CONNECTION_RESUMED");
    }
    if (isExperimentEnabledResult) {
      const obj = GuildRoomActionCreators;
      const guildRoom = obj.fetchGuildRoom(guildId, channelId);
    }
  }
}
const prototype = GuildRoomManager.prototype;
const guildRoomManager = new GuildRoomManager();
let result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomManager.tsx");

export default guildRoomManager;
