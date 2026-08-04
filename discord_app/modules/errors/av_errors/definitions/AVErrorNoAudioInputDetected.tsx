import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import ME from "ME";

let c5;
let closure_6;
const require = arg1;
({ InputModes: c5, RTCConnectionStates: closure_6 } = ME);
const result = require("createRTCConnection").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx");

export const AVErrorNoAudioInputDetectedDefinition = {
  getActiveErrors(voiceState) {
    voiceState = voiceState.voiceState;
    channel = channel.getChannel(voiceState.voiceChannelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      let suppress;
      if (voiceState != null) {
        suppress = voiceState.suppress;
      }
      isGuildStageVoiceResult = suppress;
    }
    if (null != channel) {
      if (null != mediaSessionId.getMediaSessionId()) {
        if (!inputDetectedThisConnection.getInputDetectedThisConnection()) {
          if (mediaSessionId.getState() === constants2.RTC_CONNECTED) {
            if (obj5.getSettings().mode === constants.VOICE_ACTIVITY) {
              if (obj5.getSettings().silenceWarning) {
                if (false === obj5.getInputDetected()) {
                  if (!isGuildStageVoiceResult) {
                    if (!obj5.isSelfMute()) {
                      const obj = { type: null };
                      obj[0] = require(9091) /* mapped */.AVError.NO_AUDIO_INPUT_DETECTED;
                      const merged = Object.assign(require(16794) /* getVoiceChannelErrorContext */.getVoiceChannelErrorContext());
                      const items = [obj];
                      return items;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId + ":" + mediaSessionId.audioInputDeviceName;
  }
};