// === Module 17343: AVErrorAudioCaptureSampleRateMismatchDefinition ===

// Module 17343 (AVErrorAudioCaptureSampleRateMismatchDefinition)
import setDefault from "set" /* 687 */;
import mapped from "mapped" /* 9486 */;
import getVoiceChannelErrorContext from "getVoiceChannelErrorContext" /* 17331 */;
import closure_2 from "updateAveragedStatsHelper" /* 4532 */;
import closure_3 from "_detectH265HardwareDecode" /* 4496 */;
import closure_4 from "createRTCConnection" /* 4519 */;

require = arg1;
let closure_5 = 10 * setDefault.Millis.SECOND;
const result = require("set").fileFinishedImporting("modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx");

export const AVErrorAudioCaptureSampleRateMismatchDefinition = {
  getActiveErrors() {
    let obj = rTCConnection;
    rTCConnection = rTCConnection.getRTCConnection();
    let num;
    if (rTCConnection != null) {
      num = rTCConnection.getDurationSeconds();
    }
    if (num == null) {
      num = 0;
    }
    if (num >= 30) {
      const _performance = performance;
      if (nowResult - lastAudioInputDeviceChangeTimestamp.getLastAudioInputDeviceChangeTimestamp() >= closure_5) {
        const rTCConnection1 = obj.getRTCConnection();
        let mediaEngineConnectionId;
        if (rTCConnection1 != null) {
          mediaEngineConnectionId = rTCConnection1.getMediaEngineConnectionId();
        }
        connectionStats = connectionStats.getConnectionStats(mediaEngineConnectionId);
        let num2;
        if (connectionStats != null) {
          const outbound = connectionStats.stats.rtp.outbound;
          const found = outbound.find((type) => "audio" === type.type);
          if (found != null) {
            num2 = found.sampleRateMismatchPercent;
          }
        }
        if (num2 == null) {
          num2 = 0;
        }
        const _Math = Math;
        let tmp5;
        if (Math.abs(num2) > 30) {
          obj = { type: null, audioCaptureSampleRateMismatchPercent: null };
          obj[0] = mapped.AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH;
          obj[1] = num2;
          const merged = Object.assign(getVoiceChannelErrorContext.getVoiceChannelErrorContext());
          const items = [obj];
          tmp5 = items;
          const obj4 = getVoiceChannelErrorContext;
        }
        return tmp5;
      }
      nowResult = performance.now();
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId + ":" + mediaSessionId.audioInputDeviceName;
  }
};