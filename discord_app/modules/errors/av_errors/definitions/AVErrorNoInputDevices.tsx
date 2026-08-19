// discord_app/modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx
import mapped from "../AVError.tsx";
import getVoiceChannelErrorContext from "../AVErrorContext.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import _detectH265HardwareDecode from "../../../../stores/MediaEngineStore.tsx";
import createRTCConnection from "../../../../stores/RTCConnectionStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorNoInputDevices.tsx");

export const AVErrorNoInputDevicesDefinition = {
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
    if (0 === Object.keys(inputDevices.getInputDevices()).length) {
      if (null != channel) {
        if (null != mediaSessionId.getMediaSessionId()) {
          if (!isGuildStageVoiceResult) {
            const obj = { type: null };
            obj[0] = mapped.AVError.NO_INPUT_DEVICES;
            const merged = Object.assign(getVoiceChannelErrorContext.getVoiceChannelErrorContext());
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