// discord_app/modules/voice_calls/VoicePermissionManager.tsx
import buildStageChannelUserRoles from "buildStageChannelUserRoles";
import isVoiceMuted from "isVoiceMuted";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import { InputModes } from "ME";
import { NativePermissionTypes } from "NativePermissionStatus";
import "initialize";

const require = arg1;
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
    let c11 = null;
  }
};
prototype["handleVoiceStateUpdates"] = function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((arg0) => {
    let channelId;
    let userId;
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
              const permission = callback2(4902).requestPermission(constants2.AUDIO);
              permission.then((arg0) => {
                if (arg0) {
                  callback(table[9])(true);
                }
              });
              if (store.getMode() === constants.PUSH_TO_TALK) {
                const permission1 = callback2(4902).requestPermission(constants2.INPUT_MONITORING);
                const tmp19Result = callback2(4902);
              }
            } else {
              const tmp8 = new isVoiceMuted(arg0);
              const audienceRequestToSpeakState = callback(4529).getAudienceRequestToSpeakState(tmp8);
              if (audienceRequestToSpeakState === callback(4529).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
                const permission2 = callback2(4902).requestPermission(constants2.AUDIO);
                permission2.then((arg0) => {
                  if (arg0) {
                    callback(table[9])(true);
                  }
                });
                if (store.getMode() === constants.PUSH_TO_TALK) {
                  const permission3 = tmp13(4902).requestPermission(tmp14.INPUT_MONITORING);
                  const tmp13Result = tmp13(4902);
                }
                const obj2 = callback2(4902);
                tmp13 = callback2;
                tmp14 = constants2;
              }
              const obj = callback(4529);
            }
          }
        }
      }
    }
  });
};
const voicePermissionManager = new VoicePermissionManager();
const result = require("fetchFingerprint").fileFinishedImporting("modules/voice_calls/VoicePermissionManager.tsx");

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