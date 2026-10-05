// discord_app/modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx
import Constants from "../../Constants.tsx";
import MessageTypes from "../../../discord_common/js/shared/shared-constants/MessageTypes.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let can, messages, requestToSpeakTimestamp, user;

const MessageFlags = Constants.MessageFlags;
class StageChannelRequestToSpeakMessageManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
  handleVoiceStateUpdates(voiceStates) {
    let channel;
    let id;
    let voiceChannelId;
    voiceStates = voiceStates.voiceStates;
    const item = voiceStates.forEach((requestToSpeakTimestamp) => {
      let channelId;
      let userId;
      ({ channelId, userId } = requestToSpeakTimestamp);
      requestToSpeakTimestamp = requestToSpeakTimestamp.requestToSpeakTimestamp;
      const suppress = requestToSpeakTimestamp.suppress;
      if (voiceChannelId.getVoiceChannelId() === channelId) {
        if (suppress) {
          if (null != channelId) {
            if (userId !== id.getId()) {
              can = can.can;
              if (can(userId(closure_2[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, channel.getChannel(channelId))) {
                if (null != requestToSpeakTimestamp) {
                  user = user.getUser(userId);
                  if (null != user) {
                    const tmp11Result = userId(closure_2[9]);
                    const result = tmp11Result.sendStageRequestToSpeakEphemeralMessage(
                      channelId,
                      user,
                      requestToSpeakTimestamp,
                    );
                  }
                } else {
                  messages = messages.getMessages(channelId);
                  const findNewestResult = messages.findNewest((type) => {
                    const hasFlagResult =
                      type.type === MessageTypes.MessageTypes.STAGE_RAISE_HAND &&
                      type.hasFlag(constants.EPHEMERAL) &&
                      type.author.id === userId;
                    return hasFlagResult;
                  });
                  if (null != findNewestResult) {
                    const obj2 = closure_1(closure_2[11]);
                    obj2.deleteMessage(channelId, findNewestResult.id, true);
                  }
                }
              }
            }
          }
        }
      }
    });
  }
}
const prototype = StageChannelRequestToSpeakMessageManager.prototype;
const stageChannelRequestToSpeakMessageManager = new StageChannelRequestToSpeakMessageManager();
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelRequestToSpeakMessageManager.tsx");

export default stageChannelRequestToSpeakMessageManager;
