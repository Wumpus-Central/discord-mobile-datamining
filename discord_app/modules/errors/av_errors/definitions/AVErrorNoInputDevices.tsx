// === Module 19326: AVErrorNoInputDevices ===

// Module 19326 (AVErrorNoInputDevices)
import AVError from "AVError" /* 5895 */;
import AVErrorContext from "AVErrorContext" /* 19325 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import MediaEngineStore from "MediaEngineStore" /* 2014 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5712 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx");

export const AVErrorNoInputDevicesDefinition = {
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
    if (0 === Object.keys(MediaEngineStore.getInputDevices()).length) {
      if (null != channel) {
        if (null != RTCConnectionStore.getMediaSessionId()) {
          if (!isGuildStageVoiceResult) {
            const obj = { type: AVError.AVError.NO_INPUT_DEVICES };
            const merged = Object.assign(AVErrorContext.getVoiceChannelErrorContext());
            const items = [obj];
            return items;
          }
        }
      }
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId;
  }
};