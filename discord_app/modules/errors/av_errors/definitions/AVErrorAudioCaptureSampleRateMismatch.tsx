// discord_app/modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import AVError from "../AVError.tsx";
import AVErrorContext from "../AVErrorContext.tsx";
import MediaEngineStatsStore from "../../../media_engine/MediaEngineStatsStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../../stores/RTCConnectionStore.tsx";

require = fn;
let closure_5 = 10 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/errors/av_errors/definitions/AVErrorAudioCaptureSampleRateMismatch.tsx",
);

export const AVErrorAudioCaptureSampleRateMismatchDefinition = {
  getActiveErrors() {
    let obj = RTCConnectionStore;
    const rTCConnection = RTCConnectionStore.getRTCConnection();
    let num;
    if (rTCConnection != null) {
      num = rTCConnection.getDurationSeconds();
    }
    if (num == null) {
      num = 0;
    }
    if (num >= 30) {
      const _performance = performance;
      if (nowResult - MediaEngineStore.getLastAudioInputDeviceChangeTimestamp() >= closure_5) {
        const rTCConnection1 = obj.getRTCConnection();
        let mediaEngineConnectionId;
        if (rTCConnection1 != null) {
          mediaEngineConnectionId = rTCConnection1.getMediaEngineConnectionId();
        }
        const connectionStats = MediaEngineStatsStore.getConnectionStats(mediaEngineConnectionId);
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
          obj = {
            type: AVError.AVError.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
            audioCaptureSampleRateMismatchPercent: num2,
          };
          const merged = Object.assign(AVErrorContext.getVoiceChannelErrorContext());
          const items = [obj];
          tmp5 = items;
        }
        return tmp5;
      }
      nowResult = performance.now();
    }
  },
  makeErrorContextKey(mediaSessionId) {
    return "" + mediaSessionId.mediaSessionId + ":" + mediaSessionId.audioInputDeviceName;
  },
};
