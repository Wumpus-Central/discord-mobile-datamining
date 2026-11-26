// === Module 19871: StageChannelRequestToSpeakMessageManager ===

// Module 19871 (StageChannelRequestToSpeakMessageManager)
import MessageTypes from "MessageTypes" /* 1087 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import MessageStore from "MessageStore" /* 6391 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4946 */;
import UserStore from "UserStore" /* 1387 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;

require = fn;
const MessageFlags = fn(1071).MessageFlags;
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
            if (closure_6.can(userId(4900).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel.getChannel(channelId))) {
              if (null != requestToSpeakTimestamp) {
                user = user.getUser(userId);
                if (null != user) {
                  const result = userId(19872).sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp);
                  const tmp11Result = userId(19872);
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
                  closure_1(8244).deleteMessage(channelId, findNewestResult.id, true);
                  const obj2 = closure_1(8244);
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