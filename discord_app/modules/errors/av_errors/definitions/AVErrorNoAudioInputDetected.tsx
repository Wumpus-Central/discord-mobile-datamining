// === Module 20200: AVErrorNoAudioInputDetected ===

// Module 20200 (AVErrorNoAudioInputDetected)
import AVError from "AVError" /* 6067 */;
import AVErrorContext from "AVErrorContext" /* 20201 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5884 */;

require = fn;
const Constants = fn(1072);
({ InputModes: hasOwnProperty, RTCConnectionStates: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoAudioInputDetected.tsx");

export const AVErrorNoAudioInputDetectedDefinition = {
  getActiveErrors(voiceState) {
    voiceState = voiceState.voiceState;
    const channel = ChannelStore.getChannel(voiceState.voiceChannelId);
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
      if (null != RTCConnectionStore.getMediaSessionId()) {
        if (!MediaEngineStore.getInputDetectedThisConnection()) {
          if (RTCConnectionStore.getState() === constants2.RTC_CONNECTED) {
            if (MediaEngineStore.getSettings().mode === constants.VOICE_ACTIVITY) {
              if (MediaEngineStore.getSettings().silenceWarning) {
                if (false === MediaEngineStore.getInputDetected()) {
                  if (!isGuildStageVoiceResult) {
                    if (!MediaEngineStore.isSelfMute()) {
                      const obj = { type: AVError.AVError.NO_AUDIO_INPUT_DETECTED };
                      const merged = Object.assign(AVErrorContext.getVoiceChannelErrorContext());
                      items = [obj];
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