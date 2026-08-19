// discord_app/modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx
import mapped from "../AVError.tsx";
import getVoiceChannelErrorContext from "../AVErrorContext.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import _detectH265HardwareDecode from "../../../../stores/MediaEngineStore.tsx";
import createRTCConnection from "../../../../stores/RTCConnectionStore.tsx";
import ME from "../../../../Constants.tsx";

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