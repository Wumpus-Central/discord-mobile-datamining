// === Module 18873: StageChannelRequestToSpeakMessageManager ===

// Module 18873 (StageChannelRequestToSpeakMessageManager)
import MessageTypes from "MessageTypes" /* 1103 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import MessageStore from "MessageStore" /* 5996 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4872 */;
import UserStore from "UserStore" /* 1392 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7199 */;

require = fn;
const MessageFlags = fn(1087).MessageFlags;
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
            if (closure_6.can(userId(4829).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel.getChannel(channelId))) {
              if (null != requestToSpeakTimestamp) {
                user = user.getUser(userId);
                if (null != user) {
                  const result = userId(18874).sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp);
                  const tmp11Result = userId(18874);
                }
              } else {
                messages = messages.getMessages(channelId);
                const findNewestResult = messages.findNewest((type) => {
                  let hasFlagResult = type.type === MessageTypes.MessageTypes.STAGE_RAISE_HAND;
                  if (hasFlagResult) {
                    hasFlagResult = type.hasFlag(constants.EPHEMERAL);
                  }
                  if (hasFlagResult) {
                    hasFlagResult = type.author.id === userId;
                  }
                  return hasFlagResult;
                });
                if (null != findNewestResult) {
                  closure_1(7551).deleteMessage(channelId, findNewestResult.id, true);
                  const obj2 = closure_1(7551);
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx");

export default stageChannelRequestToSpeakMessageManager;