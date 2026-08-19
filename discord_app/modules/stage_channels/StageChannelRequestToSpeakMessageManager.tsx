// === Module 16704: handleVoiceStateUpdates ===

// Module 16704 (handleVoiceStateUpdates)
import initializeDefault from "initialize" /* 5038 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { MessageFlags } from "ME" /* 676 */;

const require = fn;
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
  const item = voiceStates.forEach((item, index) => {
    ({ channelId, userId } = item);
    const requestToSpeakTimestamp = item.requestToSpeakTimestamp;
    if (voiceChannelId.getVoiceChannelId() === channelId) {
      if (item.suppress) {
        if (null != channelId) {
          if (userId !== id.getId()) {
            if (closure_6.can(userId(table[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel.getChannel(channelId))) {
              if (null != requestToSpeakTimestamp) {
                user = user.getUser(userId);
                if (null != user) {
                  const result = userId(table[9]).sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp);
                  const tmp11Result = userId(table[9]);
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
                  callback(table[11]).deleteMessage(channelId, findNewestResult.id, true);
                  const obj2 = callback(table[11]);
                }
              }
            }
          }
        }
      }
    }
  });
};
const stageChannelRequestToSpeakMessageManager = new StageChannelRequestToSpeakMessageManager();
let result = require("obj132").fileFinishedImporting("modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx");

export default stageChannelRequestToSpeakMessageManager;