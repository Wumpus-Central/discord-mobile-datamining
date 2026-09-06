// === Module 17317: VoicePermissionManager ===

// Module 17317 (VoicePermissionManager)
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4707 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 5139 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5421 */;
import VoiceStateRecord from "VoiceStateRecord" /* 4580 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const InputModes = fn(1074).InputModes;
const NativePermissionTypes = fn(4770).NativePermissionTypes;
let c11 = null;
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
  const item = voiceStates.forEach((item) => {
    ({ userId, channelId } = item);
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
              const permission = NativePermissionUtilsDefault.requestPermission(constants2.AUDIO);
              permission.then((result) => {
                if (result) {
                  closure_1_1(dependencyMap[9])(true);
                }
              });
              if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
                const permission1 = NativePermissionUtilsDefault.requestPermission(constants2.INPUT_MONITORING);
                const tmp19Result = NativePermissionUtilsDefault;
              }
            } else {
              const tmp8 = new VoiceStateRecord(item);
              const audienceRequestToSpeakState = useAudienceRequestToSpeakState.getAudienceRequestToSpeakState(tmp8);
              if (audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
                const permission2 = NativePermissionUtilsDefault.requestPermission(constants2.AUDIO);
                permission2.then((result) => {
                  if (result) {
                    closure_1_1(dependencyMap[9])(true);
                  }
                });
                if (MediaEngineStore.getMode() === constants.PUSH_TO_TALK) {
                  const permission3 = NativePermissionUtilsDefault.requestPermission(constants2.INPUT_MONITORING);
                  const tmp13Result = NativePermissionUtilsDefault;
                }
              }
            }
          }
        }
      }
    }
  });
};
const voicePermissionManager = new VoicePermissionManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/VoicePermissionManager.tsx");

export default voicePermissionManager;
export const shouldImmediatelyRequestVoicePermissions = function shouldImmediatelyRequestVoicePermissions(id, id2) {
  const channel = ChannelStore.getChannel(id2);
  let isListenModeCapableResult;
  if (channel != null) {
    isListenModeCapableResult = channel.isListenModeCapable();
  }
  let isSpeakerResult = !isListenModeCapableResult;
  if (isListenModeCapableResult) {
    isSpeakerResult = StageChannelRoleStore.isSpeaker(id, id2);
  }
  return isSpeakerResult;
};