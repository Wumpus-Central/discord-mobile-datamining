// === Module 17417: AVErrorNoAudioInputDetectedDefinition ===

// Module 17417 (AVErrorNoAudioInputDetectedDefinition)
import mapped from "mapped" /* 9565 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17418 */;
import closure_2 from "ensureGuildLoaded" /* 1387 */;
import closure_3 from "_detectH265HardwareDecode" /* 4529 */;
import closure_4 from "createRTCConnection" /* 4554 */;
import ME from "ME" /* 676 */;

require = arg1;
({ InputModes: c5, RTCConnectionStates: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx");

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