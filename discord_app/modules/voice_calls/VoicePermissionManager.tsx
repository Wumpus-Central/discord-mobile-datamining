// discord_app/modules/voice_calls/VoicePermissionManager.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import closure_3 from "../stage_channels/StageChannelRoleStore.tsx";
import closure_4 from "../../records/VoiceStateRecord.tsx";
import closure_5 from "../../stores/AuthenticationStore.tsx";
import closure_6 from "../../stores/ChannelStore.tsx";
import closure_7 from "../../stores/MediaEngineStore.tsx";
import closure_8 from "../../stores/RTCConnectionStore.tsx";
import { InputModes } from "../../Constants.tsx";
import { NativePermissionTypes } from "../native_permissions/NativePermissionConstants.tsx";

const require = arg1;
let c11 = null;
initializeDefault;
class VoicePermissionManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates, VOICE_CHANNEL_SELECT: applyArgumentsResult.handleVoiceChannelSelect };
    return applyArgumentsResult;
  }
}
const prototype = VoicePermissionManager.prototype;
prototype["handleVoiceChannelSelect"] = function handleVoiceChannelSelect(channelId) {
  if (null == channelId.channelId) {
    c11 = null;
  }
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((arg0) => {
    ({ userId, channelId } = arg0);
    if (null != channelId) {
      if (id.getId() === userId) {
        if (null != rTCConnectionId.getRTCConnectionId()) {
          if (channelId !== channelId) {
            channel = channel.getChannel(channelId);
            let isListenModeCapableResult;
            if (channel != null) {
              isListenModeCapableResult = channel.isListenModeCapable();
            }
            let isSpeakerResult = !isListenModeCapableResult;
            if (isListenModeCapableResult) {
              isSpeakerResult = speaker.isSpeaker(userId, channelId);
            }
            if (isSpeakerResult) {
              const permission = callback2(4964).requestPermission(constants2.AUDIO);
              permission.then((arg0) => {
                if (arg0) {
                  callback(table[9])(true);
                }
              });
              if (store.getMode() === constants.PUSH_TO_TALK) {
                const permission1 = callback2(4964).requestPermission(constants2.INPUT_MONITORING);
                const tmp19Result = callback2(4964);
              }
            } else {
              const tmp8 = new closure_4(arg0);
              const audienceRequestToSpeakState = callback(4568).getAudienceRequestToSpeakState(tmp8);
              if (audienceRequestToSpeakState === callback(4568).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
                const permission2 = callback2(4964).requestPermission(constants2.AUDIO);
                permission2.then((arg0) => {
                  if (arg0) {
                    callback(table[9])(true);
                  }
                });
                if (store.getMode() === constants.PUSH_TO_TALK) {
                  const permission3 = tmp13(4964).requestPermission(tmp14.INPUT_MONITORING);
                  const tmp13Result = tmp13(4964);
                }
                const obj2 = callback2(4964);
                tmp13 = callback2;
                tmp14 = constants2;
              }
              const obj = callback(4568);
            }
          }
        }
      }
    }
  });
};
const voicePermissionManager = new VoicePermissionManager();
const result = require("set").fileFinishedImporting("modules/voice_calls/VoicePermissionManager.tsx");

export default voicePermissionManager;
export const shouldImmediatelyRequestVoicePermissions = function shouldImmediatelyRequestVoicePermissions(id, id2) {
  channel = channel.getChannel(id2);
  let isListenModeCapableResult;
  if (channel != null) {
    isListenModeCapableResult = channel.isListenModeCapable();
  }
  let isSpeakerResult = !isListenModeCapableResult;
  if (isListenModeCapableResult) {
    isSpeakerResult = speaker.isSpeaker(id, id2);
  }
  return isSpeakerResult;
};