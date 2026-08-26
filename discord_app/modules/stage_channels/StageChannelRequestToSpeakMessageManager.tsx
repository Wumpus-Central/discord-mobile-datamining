// === Module 16917: handleVoiceStateUpdates ===

// Module 16917 (handleVoiceStateUpdates)
import initializeDefault from "initialize" /* 5433 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "reinjectEphemerals" /* 4687 */;
import closure_6 from "getUncachedChannelPermissions" /* 4089 */;
import closure_7 from "handleConnectionOpen" /* 1981 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import { MessageFlags } from "ME" /* 676 */;

const require = arg1;
initializeDefault;
class StageChannelRequestToSpeakMessageManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
}
StageChannelRequestToSpeakMessageManager.prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((requestToSpeakTimestamp) => {
    ({ channelId, userId } = requestToSpeakTimestamp);
    requestToSpeakTimestamp = requestToSpeakTimestamp.requestToSpeakTimestamp;
    if (voiceChannelId.getVoiceChannelId() === channelId) {
      if (requestToSpeakTimestamp.suppress) {
        if (null != channelId) {
          if (userId !== id.getId()) {
            if (closure_6.can(userId(table[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel.getChannel(channelId))) {
              if (null != requestToSpeakTimestamp) {
                user = user.getUser(userId);
                if (null != user) {
                  const result = tmp11(tmp12[9]).sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp);
                  const tmp11Result = tmp11(tmp12[9]);
                }
              } else {
                messages = messages.getMessages(channelId);
                const findNewestResult = messages.findNewest((type) => {
                  let hasFlagResult = type.type === userId(closure_1_2[10]).MessageTypes.STAGE_RAISE_HAND;
                  if (hasFlagResult) {
                    hasFlagResult = type.hasFlag(closure_1_9.EPHEMERAL);
                  }
                  if (hasFlagResult) {
                    hasFlagResult = type.author.id === userId;
                  }
                  return hasFlagResult;
                });
                if (null != findNewestResult) {
                  callback(tmp12[11]).deleteMessage(channelId, findNewestResult.id, true);
                  const obj2 = callback(tmp12[11]);
                }
              }
            }
            tmp11 = userId;
          }
        }
      }
    }
  });
};
const stageChannelRequestToSpeakMessageManager = new StageChannelRequestToSpeakMessageManager();
let result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx");

export default stageChannelRequestToSpeakMessageManager;