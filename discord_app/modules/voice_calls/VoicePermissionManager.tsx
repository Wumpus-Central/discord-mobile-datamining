// === Module 16530: handleVoiceChannelSelect ===

// Module 16530 (handleVoiceChannelSelect)
import initializeDefault from "initialize" /* 5038 */;
import buildStageChannelUserRoles from "buildStageChannelUserRoles" /* 4990 */;
import isVoiceMuted from "isVoiceMuted" /* 4543 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import { InputModes } from "ME" /* 676 */;
import { NativePermissionTypes } from "NativePermissionStatus" /* 4839 */;

const require = fn;
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
  const item = voiceStates.forEach((item, index) => {
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
              const permission = callback2(4840).requestPermission(constants2.AUDIO);
              permission.then((result) => {
                if (result) {
                  callback(table[9])(true);
                }
              });
              if (store.getMode() === constants.PUSH_TO_TALK) {
                const permission1 = callback2(4840).requestPermission(constants2.INPUT_MONITORING);
                const tmp19Result = callback2(4840);
              }
              const obj4 = callback2(4840);
            } else {
              const tmp8 = new closure_4(item);
              const audienceRequestToSpeakState = callback(4981).getAudienceRequestToSpeakState(tmp8);
              if (audienceRequestToSpeakState === callback(4981).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
                const permission2 = callback2(4840).requestPermission(constants2.AUDIO);
                permission2.then((result) => {
                  if (result) {
                    callback(table[9])(true);
                  }
                });
                if (store.getMode() === constants.PUSH_TO_TALK) {
                  const permission3 = callback2(4840).requestPermission(constants2.INPUT_MONITORING);
                  const tmp13Result = callback2(4840);
                }
                const obj2 = callback2(4840);
              }
              const obj = callback(4981);
            }
          }
        }
      }
    }
  });
};
const voicePermissionManager = new VoicePermissionManager();
const result = require("obj132").fileFinishedImporting("modules/voice_calls/VoicePermissionManager.tsx");

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