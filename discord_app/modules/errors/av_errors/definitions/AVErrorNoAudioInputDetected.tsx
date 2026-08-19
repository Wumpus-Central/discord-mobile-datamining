// === Module 17054: AVErrorNoAudioInputDetectedDefinition ===

// Module 17054 (AVErrorNoAudioInputDetectedDefinition)
import mapped from "mapped" /* 9668 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17055 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import ME from "ME" /* 676 */;

require = fn;
({ InputModes: c5, RTCConnectionStates: closure_6 } = ME);
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx");

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
            if (inputDetectedThisConnection.getSettings().mode === constants.VOICE_ACTIVITY) {
              if (inputDetectedThisConnection.getSettings().silenceWarning) {
                if (false === inputDetectedThisConnection.getInputDetected()) {
                  if (!isGuildStageVoiceResult) {
                    if (!inputDetectedThisConnection.isSelfMute()) {
                      const obj = { type: null };
                      obj[0] = mapped.AVError.NO_AUDIO_INPUT_DETECTED;
                      const merged = Object.assign(getVoiceChannelErrorContext.getVoiceChannelErrorContext());
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