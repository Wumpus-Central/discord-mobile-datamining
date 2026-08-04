import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleSelectedChannelStoreChange from "handleSelectedChannelStoreChange";
import "initialize";

let require = arg1;
let c6 = null;
let c7 = null;
class GuildRoomManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      VOICE_STATE_UPDATES(arg0) {
            return applyArgumentsResult.handleVoiceStateUpdates(arg0);
          },
      EMBEDDED_ACTIVITY_LAUNCH_SUCCESS(arg0) {
            return applyArgumentsResult.handleEmbeddedActivityLaunchSuccess(arg0);
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildRoomManager.prototype;
prototype["isExperimentEnabled"] = function isExperimentEnabled(guildId, VOICE_STATE_UPDATE) {
  let obj = importDefault(16313);
  obj = { guildId, location: VOICE_STATE_UPDATE };
  return obj.getCurrentConfig(obj).enabled;
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(arg0) {
  let channelId;
  let guildId;
  let oldChannelId;
  let sessionId;
  let userId;
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
            let obj3 = require(16314) /* _guildRoomConnect */;
            let tmp18 = guildId;
            let tmp19 = channelId;
            let guildRoomDisconnectResult = obj3.guildRoomDisconnect(guildId, channelId);
          }
          let tmp21 = channelId;
          if (null != channelId) {
            let tmp22 = guildId;
            if (null != guildId) {
              let tmp23 = handleSelectedChannelStoreChange;
              let pendingPosition = handleSelectedChannelStoreChange.getPendingPosition();
              let tmp25 = guildId;
              if (self.isExperimentEnabled(guildId, "VOICE_STATE_UPDATE")) {
                let tmp26 = require;
                let tmp27 = dependencyMap;
                let obj4 = require(16314) /* _guildRoomConnect */;
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
        let obj2 = require(16314) /* _guildRoomConnect */;
        let tmp9 = userId;
        let tmp10 = oldChannelId;
        let result = obj2.guildRoomLocalDisconnect(tmp2, oldChannelId);
      }
    }
    continue;
  }
};
prototype["handleEmbeddedActivityLaunchSuccess"] = function handleEmbeddedActivityLaunchSuccess(channelId) {
  if (null != channelId.channelId) {
    channel = channel.getChannel(channelId.channelId);
    let isExperimentEnabledResult = null != channel;
    if (isExperimentEnabledResult) {
      const self = this;
      isExperimentEnabledResult = this.isExperimentEnabled(channel.guild_id, "EMBEDDED_ACTIVITY_LAUNCH_SUCCESS");
    }
    if (isExperimentEnabledResult) {
      isExperimentEnabledResult = handleSelectedChannelStoreChange.isVisible(channelId.channelId);
    }
    if (isExperimentEnabledResult) {
      const result = require(16314) /* _guildRoomConnect */.guildRoomToggleLayout(channelId.channelId, true);
      const obj = require(16314) /* _guildRoomConnect */;
    }
  }
};
const guildRoomManager = new GuildRoomManager();
let result = require("handleSelectedChannelStoreChange").fileFinishedImporting("modules/guild_rooms/GuildRoomManager.tsx");

export default guildRoomManager;