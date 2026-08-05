// discord_app/lib/VideoQuality.tsx
import "on";
import { apply } from "../../_runtime/00012_apply.js";
import { BaseConnectionEvent } from "../../discord_common/js/packages/media-engine/index.tsx";
import { DISCORD_EPOCH } from "../utils/SnowflakeUtils.tsx";
import { parseEncoder } from "VideoQualityStats.tsx";

let require = arg1;
function round(arg0) {
  let num;
  num = 0;
  if (null != arg0) {
    const _Math = Math;
    num = Math.round(arg0);
  }
  return num;
}
let obj = { FpsUpdate: "fps-update" };
class VideoQuality extends tmp2 {
  constructor(arg0) {
    TimeStampProducer = arg1;
    if (arg1 === undefined) {
      tmp5 = closure_0;
      tmp6 = closure_2;
      TimeStampProducer = require("sleep").TimeStampProducer;
    }
    tmp7 = new VideoQuality(tmp4, tmp3, tmp2, tmp, TimeStampProducer, new.target);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp7;
    tmp8 = new require("_initStats")();
    tmp7.networkQuality = tmp8;
    tmp7.pausedCount = 0;
    tmp7.simulcastQualityChanges = 0;
    tmp7.cameraToggles = 0;
    tmp7.callUserIdsCount = 0;
    tmp7.numWindowOcclusionChanges = 0;
    tmp7.outboundStats = {};
    tmp7.inboundStats = {};
    tmp7.symmetricCodecUpdates = 0;
    tmp7.asymmetricCodecUpdates = 0;
    set = new Set();
    tmp7.statCollectionPausedUsers = set;
    tmp7.sampleStats = function sampleStats(transport) {
      if (null != transport) {
        const timestampProducer = tmp7.timestampProducer;
        const nowResult = timestampProducer.now();
        const networkQuality = tmp7.networkQuality;
        const result = networkQuality.incrementNetworkStats(nowResult);
        const result1 = tmp7.updateSystemResourceStats();
        const result2 = tmp7.updateVideoEffectStats(transport);
        if (null != transport) {
          const connection = obj.connection;
          obj.receivedStats(nowResult, transport, connection.getStreamParameters());
        }
      }
    };
    tmp7.connection = global;
    tmp7.timestampProducer = TimeStampProducer;
    durationEnabled = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.paused = durationEnabled;
    durationEnabled1 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.zeroReceivers = durationEnabled1;
    durationEnabled2 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.videoStopped = durationEnabled2;
    durationEnabled3 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.videoEffectDuration = durationEnabled3;
    durationEnabled4 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.hqSimulcastStreamEncoded = durationEnabled4;
    durationEnabled5 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.lqSimulcastStreamEncoded = durationEnabled5;
    durationEnabled6 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.bothSimulcastStreamsEncoded = durationEnabled6;
    durationEnabled7 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.hqSimulcastStreamWatched = durationEnabled7;
    durationEnabled8 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.lqSimulcastStreamWatched = durationEnabled8;
    durationEnabled9 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.hqSimulcastStreamEligible = durationEnabled9;
    durationEnabled10 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.lqSimulcastStreamEligible = durationEnabled10;
    durationEnabled11 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.windowOccluded = durationEnabled11;
    durationEnabled12 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.videoStoppedForOcclusion = durationEnabled12;
    durationEnabled13 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.bandwidthLimitedFramerate = durationEnabled13;
    durationEnabled14 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.bandwidthLimitedResolution = durationEnabled14;
    durationEnabled15 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.cameraDuration = durationEnabled15;
    durationEnabled16 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.cameraOpportunityDuration = durationEnabled16;
    durationEnabled17 = new require("sleep").DurationEnabled(false, TimeStampProducer);
    tmp7.cameraSendDuration = durationEnabled17;
    histogram = new require("getSamples").Histogram();
    tmp7.videoEntropy = histogram;
    return tmp7;
  }
}
const prototype = VideoQuality.prototype;
prototype["addUserToStatsCollectionPausedSet"] = function addUserToStatsCollectionPausedSet(userId) {
  const statCollectionPausedUsers = this.statCollectionPausedUsers;
  statCollectionPausedUsers.add(userId);
};
prototype["removeUserFromStatsCollectionPausedSet"] = function removeUserFromStatsCollectionPausedSet(userId) {
  const statCollectionPausedUsers = this.statCollectionPausedUsers;
  statCollectionPausedUsers.delete(userId);
};
prototype["start"] = function start() {
  const timestampProducer = this.timestampProducer;
  this.streamStart = timestampProducer.now();
  const connection = this.connection;
  connection.on(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
};
prototype["setOutboundSsrc"] = function setOutboundSsrc(ssrc) {
  const self = this;
  if (null == this.outboundStats[ssrc]) {
    const outboundStats = new parseEncoder.OutboundStats(self.timestampProducer);
    self.outboundStats[ssrc] = outboundStats;
  }
};
prototype["getOrCreateInboundStats"] = function getOrCreateInboundStats(userId) {
  const self = this;
  if (null == this.inboundStats[userId]) {
    const inboundStats = new parseEncoder.InboundStats(self.timestampProducer);
    self.inboundStats[userId] = inboundStats;
  }
  return self.inboundStats[userId];
};
prototype["updateCallUserIdsCount"] = function updateCallUserIdsCount(size) {
  this.callUserIdsCount = size;
};
prototype["setInboundUser"] = function setInboundUser(userId, videoSsrc) {
  const orCreateInboundStats = this.getOrCreateInboundStats(userId);
  orCreateInboundStats.setVideoStopped(0 === videoSsrc, parseEncoder.VideoStoppedReasons.SenderStopped);
};
prototype["setUserVideoDisabled"] = function setUserVideoDisabled(userId, arg1) {
  const orCreateInboundStats = this.getOrCreateInboundStats(userId);
  orCreateInboundStats.setVideoStopped(arg1, parseEncoder.VideoStoppedReasons.ClientSideDisableVideo);
  let tmp2 = !arg1;
  if (!arg1) {
    tmp2 = orCreateInboundStats.statsWindow.length > 0;
  }
  if (tmp2) {
    tmp2 = 0 === orCreateInboundStats.statsWindow[0].packets;
  }
  if (tmp2) {
    const timestampProducer = this.timestampProducer;
    orCreateInboundStats.startTime = timestampProducer.now();
  }
};
prototype["setOcclusionIncomingVideoEnabled"] = function setOcclusionIncomingVideoEnabled(incomingVideoEnabled) {
  this.videoStoppedForOcclusion.value = !incomingVideoEnabled;
};
prototype["setWindowOcclusionState"] = function setWindowOcclusionState(value) {
  const self = this;
  if (value !== this.windowOccluded.value) {
    self.numWindowOcclusionChanges = self.numWindowOcclusionChanges + 1;
  }
  self.windowOccluded.value = value;
};
prototype["pause"] = function pause() {
  const self = this;
  if (!this.paused.value) {
    self.pausedCount = self.pausedCount + 1;
  }
  const item = apply.forEach(self.outboundStats, (arg0) => {
    arg0.statsWindow = [];
  });
  const arr = apply;
  const item1 = apply.forEach(self.inboundStats, (arg0) => {
    arg0.statsWindow = [];
  });
  self.updateSendState({ paused: true });
};
prototype["resume"] = function resume() {
  this.updateSendState({ paused: false });
};
prototype["stop"] = function stop() {
  const connection = this.connection;
  connection.off(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
  const timestampProducer = this.timestampProducer;
  this.streamEnd = timestampProducer.now();
  this.removeAllListeners();
};
prototype["setViewedSimulcastQuality"] = function setViewedSimulcastQuality(value) {
  const self = this;
  let tmp = value !== this.hqSimulcastStreamWatched.value;
  if (tmp) {
    const hqSimulcastStreamWatched = self.hqSimulcastStreamWatched;
    let tmp2 = hqSimulcastStreamWatched.totalDuration() > 0;
    if (!tmp2) {
      const lqSimulcastStreamWatched = self.lqSimulcastStreamWatched;
      tmp2 = lqSimulcastStreamWatched.totalDuration() > 0;
    }
    tmp = tmp2;
  }
  if (tmp) {
    self.simulcastQualityChanges = self.simulcastQualityChanges + 1;
  }
  self.hqSimulcastStreamWatched.value = value;
  self.lqSimulcastStreamWatched.value = !value;
};
prototype["setEligibleSimulcastQuality"] = function setEligibleSimulcastQuality(value) {
  this.hqSimulcastStreamEligible.value = value;
  this.lqSimulcastStreamEligible.value = !value;
};
prototype["getNetworkStats"] = function getNetworkStats() {
  const networkQuality = this.networkQuality;
  return networkQuality.getStats();
};
prototype["getEncoderUsageStats"] = function getEncoderUsageStats() {
  const self = this;
  const map = new Map();
  for (const key10011 in this.outboundStats) {
    let tmp6 = key10011;
    let _Map = Map;
    let tmp7 = new.target;
    let tmp8 = new.target;
    let map1 = new Map();
    let tmp9 = map1;
    let obj3 = self.outboundStats[key10011];
    let codecsUsed = obj3.getCodecsUsed();
    let tmp11 = codecsUsed;
    let tmp = codecsUsed;
    for (const item10013 of codecsUsed) {
      let formatted = item10013.toUpperCase();
      let tmp3 = round;
      let result = map1.set(formatted, round(self.outboundStats[key10011].codecBuckets[formatted]));
      let _parseInt = parseInt;
      let result1 = map.set(parseInt(key10011), map1);
      continue;
    }
  }
  return map;
};
prototype["getDecoderUsageStats"] = function getDecoderUsageStats() {
  const self = this;
  const map = new Map();
  for (const key10011 in this.inboundStats) {
    let tmp6 = key10011;
    let _Map = Map;
    let tmp7 = new.target;
    let tmp8 = new.target;
    let map1 = new Map();
    let tmp9 = map1;
    let obj3 = self.inboundStats[key10011];
    let codecsUsed = obj3.getCodecsUsed();
    let tmp11 = codecsUsed;
    let tmp = codecsUsed;
    for (const item10013 of codecsUsed) {
      let formatted = item10013.toUpperCase();
      let tmp3 = round;
      let result = map1.set(formatted, round(self.inboundStats[key10011].codecBuckets[formatted]));
      let result1 = map.set(key10011, map1);
      continue;
    }
  }
  return map;
};
prototype["getCodecUsageStats"] = function getCodecUsageStats(receiver, userId) {
  const self = this;
  let map = new Map();
  if ("sender" !== receiver) {
    if ("streamer" !== receiver) {
      const decoderUsageStats = self.getDecoderUsageStats();
      let value = map;
      if (decoderUsageStats.has(userId)) {
        value = decoderUsageStats.get(userId);
      }
      let obj = { codec_asymmetric_session: null, codec_h264_decode_duration_sec: null, codec_h265_decode_duration_sec: null, codec_vp8_decode_duration_sec: null, codec_vp9_decode_duration_sec: null, codec_av1_decode_duration_sec: null, codec_unknown_decode_duration_sec: null };
      obj[0] = tmp;
      let num = value.get(parseEncoder.CodecTypes.H264);
      if (num == null) {
        num = 0;
      }
      obj[1] = num;
      let num2 = value.get(tmp2(7121).CodecTypes.H265);
      if (num2 == null) {
        num2 = 0;
      }
      obj[2] = num2;
      let num3 = value.get(tmp2(7121).CodecTypes.VP8);
      if (num3 == null) {
        num3 = 0;
      }
      obj[3] = num3;
      let num4 = value.get(tmp2(7121).CodecTypes.VP9);
      if (num4 == null) {
        num4 = 0;
      }
      obj[4] = num4;
      let num5 = value.get(tmp2(7121).CodecTypes.AV1);
      if (num5 == null) {
        num5 = 0;
      }
      obj[5] = num5;
      let num6 = value.get(tmp2(7121).CodecTypes.UNKNOWN);
      if (num6 == null) {
        num6 = 0;
      }
      obj[6] = num6;
      return obj;
    }
  }
  const encoderUsageStats = self.getEncoderUsageStats();
  if (encoderUsageStats.size > 0) {
    const items = [];
    HermesBuiltin.arraySpread(encoderUsageStats.keys(), 0);
    map = encoderUsageStats.get(items.sort()[0]);
  }
  obj = { codec_asymmetric_session: tmp, codec_h264_encode_duration_sec: null, codec_h265_encode_duration_sec: null, codec_vp8_encode_duration_sec: null, codec_vp9_encode_duration_sec: null, codec_av1_encode_duration_sec: null, codec_unknown_encode_duration_sec: null };
  let num8 = map.get(parseEncoder.CodecTypes.H264);
  if (num8 == null) {
    num8 = 0;
  }
  obj[1] = num8;
  let num9 = map.get(tmp7(7121).CodecTypes.H265);
  if (num9 == null) {
    num9 = 0;
  }
  obj[2] = num9;
  let num10 = map.get(tmp7(7121).CodecTypes.VP8);
  if (num10 == null) {
    num10 = 0;
  }
  obj[3] = num10;
  let num11 = map.get(tmp7(7121).CodecTypes.VP9);
  if (num11 == null) {
    num11 = 0;
  }
  obj[4] = num11;
  let num12 = map.get(tmp7(7121).CodecTypes.AV1);
  if (num12 == null) {
    num12 = 0;
  }
  obj[5] = num12;
  let num13 = map.get(tmp7(7121).CodecTypes.UNKNOWN);
  if (num13 == null) {
    num13 = 0;
  }
  obj[6] = num13;
  return obj;
};
prototype["getCameraDurationStats"] = function getCameraDurationStats() {
  const cameraDuration = this.cameraDuration;
  const cameraOpportunityDuration = this.cameraOpportunityDuration;
  const cameraSendDuration = this.cameraSendDuration;
  return { camera_enabled_duration: Math.round(cameraDuration.totalDurationSeconds()), camera_send_opportunity_duration: Math.round(cameraOpportunityDuration.totalDurationSeconds()), camera_send_duration: Math.round(cameraSendDuration.totalDurationSeconds()), num_camera_on_toggles: this.cameraToggles };
};
prototype["getOutboundStats"] = function getOutboundStats() {
  const self = this;
  let items = [];
  let item = self(12).forEach(this.outboundStats, (vmafHistogram) => {
    let items = arg1;
    let obj = self;
    const connection = self.connection;
    let streamParameters;
    if (connection != null) {
      streamParameters = connection.getStreamParameters();
    }
    if (streamParameters.length > 1) {
      const item = streamParameters.forEach((ssrc) => {
        if (parseInt(closure_0) === ssrc.ssrc) {
          let num = ssrc.quality;
          if (num == null) {
            num = 50;
          }
        }
      });
    }
    items = [1, 5, 10, 25, 50, 75];
    const items1 = [1, 5, 10, 25, 50, 75, 99];
    vmafHistogram = vmafHistogram.vmafHistogram;
    const report = vmafHistogram.getReport(items);
    const psnrHistogram = vmafHistogram.psnrHistogram;
    const report1 = psnrHistogram.getReport(items);
    const targetBitrateHistogram = vmafHistogram.targetBitrateHistogram;
    const report2 = targetBitrateHistogram.getReport(items1);
    const outboundBandwidthSurplus = vmafHistogram.outboundBandwidthSurplus;
    const report3 = outboundBandwidthSurplus.getReport(items1);
    const videoEntropy = obj.videoEntropy;
    const report4 = videoEntropy.getReport(items1);
    const result = vmafHistogram.aggregationDuration / 1000;
    if (!obj2.isWeb()) {
      let tmp9Result = tmp9(tmp10[7]);
      if (!tmp9Result.isIOS()) {
        tmp9Result = tmp9(tmp10[7]);
        if (!tmp9Result.isAndroid()) {
          let framesCodec = vmafHistogram.aggregatedProperties.screenshareFramesUnique;
        }
        obj = {};
        const merged = Object.assign(obj.getStats(vmafHistogram));
        let num2 = 0;
        if (0 < result) {
          let num3 = vmafHistogram.targetFrames;
          if (num3 == null) {
            num3 = 0;
          }
          num2 = Math.round(num3 / result);
        }
        obj.target_fps = num2;
        const connection2 = obj.connection;
        let context;
        if (connection2 != null) {
          context = connection2.context;
        }
        let result1 = null;
        if (context === tmp9(tmp10[4]).MediaEngineContextTypes.STREAM) {
          result1 = null;
          if (0 < result) {
            result1 = framesCodec / result;
          }
        }
        obj.unique_captured_fps = result1;
        let num4 = 0;
        if (0 < result) {
          let num5 = vmafHistogram.targetBytesNetwork;
          if (num5 == null) {
            num5 = 0;
          }
          num4 = Math.round(8 * num5 / result);
        }
        obj.target_bitrate_network = num4;
        let tmp18 = null;
        if (report2.count > 0) {
          tmp18 = report2.percentiles[1];
        }
        obj.target_bitrate_network_percentile1 = tmp18;
        let tmp19 = null;
        if (report2.count > 0) {
          tmp19 = report2.percentiles[5];
        }
        obj.target_bitrate_network_percentile5 = tmp19;
        let tmp20 = null;
        if (report2.count > 0) {
          tmp20 = report2.percentiles[10];
        }
        obj.target_bitrate_network_percentile10 = tmp20;
        let tmp21 = null;
        if (report2.count > 0) {
          tmp21 = report2.percentiles[25];
        }
        obj.target_bitrate_network_percentile25 = tmp21;
        let tmp22 = null;
        if (report2.count > 0) {
          tmp22 = report2.percentiles[50];
        }
        obj.target_bitrate_network_percentile50 = tmp22;
        let tmp23 = null;
        if (report2.count > 0) {
          tmp23 = report2.percentiles[75];
        }
        obj.target_bitrate_network_percentile75 = tmp23;
        let tmp24 = null;
        if (report2.count > 0) {
          tmp24 = report2.percentiles[99];
        }
        obj.target_bitrate_network_percentile99 = tmp24;
        let num7 = 0;
        if (0 < result) {
          let num8 = vmafHistogram.targetBytesMax;
          if (num8 == null) {
            num8 = 0;
          }
          num7 = Math.round(8 * num8 / result);
        }
        obj.target_bitrate_max = num7;
        let num10 = 0;
        if (0 < result) {
          let num11 = vmafHistogram.outboundBytesAvailable;
          if (num11 == null) {
            num11 = 0;
          }
          num10 = Math.round(8 * num11 / result);
        }
        obj.outbound_bandwidth_estimate = num10;
        let tmp27 = null;
        if (report3.count > 0) {
          tmp27 = report3.percentiles[1];
        }
        obj.outbound_bandwidth_surplus_percentile1 = tmp27;
        let tmp28 = null;
        if (report3.count > 0) {
          tmp28 = report3.percentiles[5];
        }
        obj.outbound_bandwidth_surplus_percentile5 = tmp28;
        let tmp29 = null;
        if (report3.count > 0) {
          tmp29 = report3.percentiles[10];
        }
        obj.outbound_bandwidth_surplus_percentile10 = tmp29;
        let tmp30 = null;
        if (report3.count > 0) {
          tmp30 = report3.percentiles[25];
        }
        obj.outbound_bandwidth_surplus_percentile25 = tmp30;
        let tmp31 = null;
        if (report3.count > 0) {
          tmp31 = report3.percentiles[50];
        }
        obj.outbound_bandwidth_surplus_percentile50 = tmp31;
        let tmp32 = null;
        if (report3.count > 0) {
          tmp32 = report3.percentiles[75];
        }
        obj.outbound_bandwidth_surplus_percentile75 = tmp32;
        let tmp33 = null;
        if (report3.count > 0) {
          tmp33 = report3.percentiles[99];
        }
        obj.outbound_bandwidth_surplus_percentile99 = tmp33;
        const tmp34 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.NVIDIA_CUDA];
        let num13 = 0;
        if (null != tmp34) {
          const _Math = Math;
          num13 = Math.round(tmp34);
        }
        obj.duration_encoder_nvidia_cuda = num13;
        const tmp36 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.NVIDIA_DIRECT_3D];
        let num14 = 0;
        if (null != tmp36) {
          const _Math2 = Math;
          num14 = Math.round(tmp36);
        }
        obj.duration_encoder_nvidia_direct3d = num14;
        const tmp38 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.NVIDIA_VULKAN];
        let num15 = 0;
        if (null != tmp38) {
          const _Math3 = Math;
          num15 = Math.round(tmp38);
        }
        obj.duration_encoder_nvidia_vulkan = num15;
        const tmp40 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.OPENH264];
        let num16 = 0;
        if (null != tmp40) {
          const _Math4 = Math;
          num16 = Math.round(tmp40);
        }
        obj.duration_encoder_openh264 = num16;
        const tmp42 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.VIDEOTOOLBOX];
        let num17 = 0;
        if (null != tmp42) {
          const _Math5 = Math;
          num17 = Math.round(tmp42);
        }
        obj.duration_encoder_videotoolbox = num17;
        const tmp44 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.AMD_DIRECT_3D];
        let num18 = 0;
        if (null != tmp44) {
          const _Math6 = Math;
          num18 = Math.round(tmp44);
        }
        obj.duration_encoder_amd_direct3d = num18;
        const tmp46 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.AMD_VAAPI];
        let num19 = 0;
        if (null != tmp46) {
          const _Math7 = Math;
          num19 = Math.round(tmp46);
        }
        obj.duration_encoder_amd_vaapi = num19;
        const tmp48 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.INTEL];
        let num20 = 0;
        if (null != tmp48) {
          const _Math8 = Math;
          num20 = Math.round(tmp48);
        }
        obj.duration_encoder_intel = num20;
        const tmp50 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.INTEL_DIRECT_3D];
        let num21 = 0;
        if (null != tmp50) {
          const _Math9 = Math;
          num21 = Math.round(tmp50);
        }
        obj.duration_encoder_intel_direct3d = num21;
        const tmp52 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.INTEL_VAAPI];
        let num22 = 0;
        if (null != tmp52) {
          const _Math10 = Math;
          num22 = Math.round(tmp52);
        }
        obj.duration_encoder_intel_vaapi = num22;
        const tmp54 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.VP8_LIBVPX];
        let num23 = 0;
        if (null != tmp54) {
          const _Math11 = Math;
          num23 = Math.round(tmp54);
        }
        obj.duration_encoder_vp8_libvpx = num23;
        const tmp56 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.UNCATEGORIZED];
        let num24 = 0;
        if (null != tmp56) {
          const _Math12 = Math;
          num24 = Math.round(tmp56);
        }
        obj.duration_encoder_uncategorized = num24;
        const tmp58 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.WMF_CHROME];
        let num25 = 0;
        if (null != tmp58) {
          const _Math13 = Math;
          num25 = Math.round(tmp58);
        }
        obj.duration_encoder_wmf_chrome = num25;
        const tmp60 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.UNKNOWN];
        let num26 = 0;
        if (null != tmp60) {
          const _Math14 = Math;
          num26 = Math.round(tmp60);
        }
        obj.duration_encoder_unknown = num26;
        obj.quality = self;
        obj.average_encode_time_ms = vmafHistogram.averageEncodeTime;
        let result2 = null;
        if (vmafHistogram.vmafScoreNum > 0) {
          result2 = vmafHistogram.vmafScoreSum / vmafHistogram.vmafScoreNum;
        }
        obj.average_encoder_vmaf_score = result2;
        let tmp64 = null;
        if (report.count > 0) {
          tmp64 = report.percentiles[1];
        }
        obj.encoder_vmaf_score_percentile1 = tmp64;
        let tmp65 = null;
        if (report.count > 0) {
          tmp65 = report.percentiles[5];
        }
        obj.encoder_vmaf_score_percentile5 = tmp65;
        let tmp66 = null;
        if (report.count > 0) {
          tmp66 = report.percentiles[10];
        }
        obj.encoder_vmaf_score_percentile10 = tmp66;
        let tmp67 = null;
        if (report.count > 0) {
          tmp67 = report.percentiles[25];
        }
        obj.encoder_vmaf_score_percentile25 = tmp67;
        let tmp68 = null;
        if (report.count > 0) {
          tmp68 = report.percentiles[50];
        }
        obj.encoder_vmaf_score_percentile50 = tmp68;
        let tmp69 = null;
        if (report.count > 0) {
          tmp69 = report.percentiles[75];
        }
        obj.encoder_vmaf_score_percentile75 = tmp69;
        let result3 = null;
        if (vmafHistogram.psnrDbNum > 0) {
          result3 = vmafHistogram.psnrDbSum / vmafHistogram.psnrDbNum;
        }
        obj.average_encoder_psnr_db = result3;
        let tmp71 = null;
        if (report1.count > 0) {
          tmp71 = report1.percentiles[1];
        }
        obj.encoder_psnr_db_percentile1 = tmp71;
        let tmp72 = null;
        if (report1.count > 0) {
          tmp72 = report1.percentiles[5];
        }
        obj.encoder_psnr_db_percentile5 = tmp72;
        let tmp73 = null;
        if (report1.count > 0) {
          tmp73 = report1.percentiles[10];
        }
        obj.encoder_psnr_db_percentile10 = tmp73;
        let tmp74 = null;
        if (report1.count > 0) {
          tmp74 = report1.percentiles[25];
        }
        obj.encoder_psnr_db_percentile25 = tmp74;
        let tmp75 = null;
        if (report1.count > 0) {
          tmp75 = report1.percentiles[50];
        }
        obj.encoder_psnr_db_percentile50 = tmp75;
        let tmp76 = null;
        if (report1.count > 0) {
          tmp76 = report1.percentiles[75];
        }
        obj.encoder_psnr_db_percentile75 = tmp76;
        let result4 = null;
        if (vmafHistogram.outboundSinkWantNum > 0) {
          result4 = vmafHistogram.outboundSinkWantSum / vmafHistogram.outboundSinkWantNum;
        }
        obj.average_outbound_want = result4;
        ({ framesDroppedRateLimiter: obj5.frames_dropped_rate_limiter, framesDroppedEncoderQueue: obj5.frames_dropped_encoder_queue, framesDroppedCongestionWindow: obj5.frames_dropped_congestion_window, framesDroppedEncoder: obj5.frames_dropped_encoder } = vmafHistogram);
        const hqSimulcastStreamEncoded = obj.hqSimulcastStreamEncoded;
        const totalDurationSecondsResult = hqSimulcastStreamEncoded.totalDurationSeconds();
        let num27 = 0;
        if (null != totalDurationSecondsResult) {
          const _Math15 = Math;
          num27 = Math.round(totalDurationSecondsResult);
        }
        obj.duration_hq_simulcast_stream_encoded = num27;
        const lqSimulcastStreamEncoded = obj.lqSimulcastStreamEncoded;
        const totalDurationSecondsResult1 = lqSimulcastStreamEncoded.totalDurationSeconds();
        let num28 = 0;
        if (null != totalDurationSecondsResult1) {
          const _Math16 = Math;
          num28 = Math.round(totalDurationSecondsResult1);
        }
        obj.duration_lq_simulcast_stream_encoded = num28;
        const bothSimulcastStreamsEncoded = obj.bothSimulcastStreamsEncoded;
        const totalDurationSecondsResult2 = bothSimulcastStreamsEncoded.totalDurationSeconds();
        let num29 = 0;
        if (null != totalDurationSecondsResult2) {
          const _Math17 = Math;
          num29 = Math.round(totalDurationSecondsResult2);
        }
        obj.duration_both_simulcast_streams_encoded = num29;
        const bandwidthLimitedFramerate = obj.bandwidthLimitedFramerate;
        const totalDurationSecondsResult3 = bandwidthLimitedFramerate.totalDurationSeconds();
        let num30 = 0;
        if (null != totalDurationSecondsResult3) {
          const _Math18 = Math;
          num30 = Math.round(totalDurationSecondsResult3);
        }
        obj.duration_fps_bandwidth_limited = num30;
        const bandwidthLimitedResolution = obj.bandwidthLimitedResolution;
        const totalDurationSecondsResult4 = bandwidthLimitedResolution.totalDurationSeconds();
        let num31 = 0;
        if (null != totalDurationSecondsResult4) {
          const _Math19 = Math;
          num31 = Math.round(totalDurationSecondsResult4);
        }
        obj.duration_resolution_bandwidth_limited = num31;
        let tmp88 = null;
        if (report4.count > 0) {
          tmp88 = report4.percentiles[1];
        }
        obj.video_entropy_percentile1 = tmp88;
        let tmp89 = null;
        if (report4.count > 0) {
          tmp89 = report4.percentiles[5];
        }
        obj.video_entropy_percentile5 = tmp89;
        let tmp90 = null;
        if (report4.count > 0) {
          tmp90 = report4.percentiles[10];
        }
        obj.video_entropy_percentile10 = tmp90;
        let tmp91 = null;
        if (report4.count > 0) {
          tmp91 = report4.percentiles[25];
        }
        obj.video_entropy_percentile25 = tmp91;
        let tmp92 = null;
        if (report4.count > 0) {
          tmp92 = report4.percentiles[50];
        }
        obj.video_entropy_percentile50 = tmp92;
        let tmp93 = null;
        if (report4.count > 0) {
          tmp93 = report4.percentiles[75];
        }
        obj.video_entropy_percentile75 = tmp93;
        let tmp94 = null;
        if (report4.count > 0) {
          tmp94 = report4.percentiles[99];
        }
        obj.video_entropy_percentile99 = tmp94;
        const tmp95 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.EXYNOS];
        let num32 = 0;
        if (null != tmp95) {
          const _Math20 = Math;
          num32 = Math.round(tmp95);
        }
        obj.duration_encoder_exynos = num32;
        const tmp97 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.QUALCOMM];
        let num33 = 0;
        if (null != tmp97) {
          const _Math21 = Math;
          num33 = Math.round(tmp97);
        }
        obj.duration_encoder_qualcomm = num33;
        const tmp99 = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.MEDIATEK];
        let num34 = 0;
        if (null != tmp99) {
          streamParameters = globalThis;
          const _Math22 = Math;
          num34 = Math.round(tmp99);
        }
        obj.duration_encoder_mediatek = num34;
        streamParameters = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.WMF_SW];
        let num35 = 0;
        if (null != streamParameters) {
          streamParameters = globalThis;
          const _Math23 = Math;
          num35 = Math.round(streamParameters);
        }
        obj.duration_encoder_wmf_sw = num35;
        streamParameters = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.WMF_HW];
        let num36 = 0;
        if (null != streamParameters) {
          streamParameters = globalThis;
          const _Math24 = Math;
          num36 = Math.round(streamParameters);
        }
        obj.duration_encoder_wmf_hw = num36;
        streamParameters = vmafHistogram.encoderBuckets[tmp9(undefined, tmp10[5]).Encoders.WMF_DIRECT_3D];
        let num37 = 0;
        if (null != streamParameters) {
          streamParameters = globalThis;
          const _Math25 = Math;
          num37 = Math.round(streamParameters);
        }
        obj.duration_encoder_wmf_direct3d = num37;
        streamParameters = items.push(obj);
      }
    }
    framesCodec = vmafHistogram.aggregatedProperties.framesCodec;
  });
  return items;
};
prototype["getInboundStats"] = function getInboundStats(arg0) {
  return this.getStats(this.inboundStats[arg0]);
};
prototype["destroyUser"] = function destroyUser(arg0) {
  delete tmp2[tmp];
};
prototype["getInboundParticipants"] = function getInboundParticipants() {
  return DISCORD_EPOCH.keys(this.inboundStats);
};
prototype["updateSendState"] = function updateSendState(paused) {
  const self = this;
  if (null != paused.paused) {
    self.paused.value = paused.paused;
  }
  if (null != paused.receivers) {
    self.zeroReceivers.value = 0 === paused.receivers;
  }
  self.videoStopped.value = self.paused.value || self.zeroReceivers.value;
  if ((self.paused.value || self.zeroReceivers.value) !== self.videoStopped.value) {
    const item = apply.forEach(self.outboundStats, (arg0) => {
      const items = [];
      arg0.statsWindow = items;
      return items;
    });
    const arr = apply;
  }
};
prototype["getStats"] = function getStats(aggregationDuration) {
  let bytes;
  let cryptorAttempts;
  let cryptorDuration;
  let cryptorFailureCount;
  let cryptorInvalidNonceCount;
  let cryptorMissingKeyCount;
  let cryptorSuccessCount;
  let framesCodec;
  let framesCodecError;
  let framesDropped;
  let framesNetwork;
  let freezeCount;
  let keyframes;
  let nackCount;
  let networkFramesDropped;
  let packets;
  let packetsLost;
  let passthroughCount;
  let pauseCount;
  let paused;
  let pliCount;
  let qpSum;
  let qualityDecodeErrors;
  let qualityDecoderReboots;
  let qualityFrameDrops;
  let qualityScoreErrors;
  let qualitySizeMismatches;
  let totalDecodeTime;
  let totalFramesDuration;
  let totalFreezesDuration;
  let totalPausesDuration;
  let windowOccluded;
  if (null == aggregationDuration) {
    return null;
  } else {
    const self = this;
    const _Number = Number;
    const NumberResult = Number(this.streamStart);
    if (null != this.streamEnd) {
      let diff = self.streamEnd - NumberResult;
    } else {
      const timestampProducer = self.timestampProducer;
      diff = timestampProducer.now() - NumberResult;
    }
    const _Math = Math;
    const result = Math.max(aggregationDuration.aggregationDuration, 0) / 1000;
    const items = [1, 5, 10, 25, 50, 75];
    const fpsHistogram = aggregationDuration.fpsHistogram;
    const report = fpsHistogram.getReport(items);
    const bitrateHistogram = aggregationDuration.bitrateHistogram;
    const report1 = bitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]);
    const resolutionHistogram = aggregationDuration.resolutionHistogram;
    const report2 = resolutionHistogram.getReport(items);
    const inboundBitrateEstimateHistogram = aggregationDuration.inboundBitrateEstimateHistogram;
    const report3 = inboundBitrateEstimateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]);
    const localWantHistogram = aggregationDuration.localWantHistogram;
    const report4 = localWantHistogram.getReport([1, 5, 10, 25, 50, 75, 90, 95]);
    const systemResources = aggregationDuration.systemResources;
    const stats = systemResources.getStats();
    let obj = { duration: null, duration_aggregation: null, duration_stopped_receiving: null, duration_stream_under_8mbps: null, duration_stream_under_7mbps: null, duration_stream_under_6mbps: null, duration_stream_under_5mbps: null, duration_stream_under_4mbps: null, duration_stream_under_3mbps: null, duration_stream_under_2mbps: null, duration_stream_under_1_5mbps: null, duration_stream_under_1mbps: null, duration_stream_under_0_5mbps: null, duration_stream_at_0mbps: null, duration_fps_under_60: null, duration_fps_under_55: null, duration_fps_under_50: null, duration_fps_under_45: null, duration_fps_under_40: null, duration_fps_under_35: null, duration_fps_under_30: null, duration_fps_under_25: null, duration_fps_under_20: null, duration_fps_under_15: null, duration_fps_under_10: null, duration_fps_under_5: null, duration_fps_at_0: null, avg_resolution: null, avg_minor_resolution: null, avg_major_resolution: null, min_resolution_width: null, min_resolution_height: null, duration_resolution_under_720: null, duration_resolution_under_480: null, duration_resolution_under_360: null, num_pauses: null, duration_paused: null, duration_zero_receivers: null, duration_video_stopped: null, duration_hq_simulcast_stream_watched: null, duration_lq_simulcast_stream_watched: null, duration_hq_simulcast_stream_eligible: null, duration_lq_simulcast_stream_eligible: null, num_quality_changes: null, duration_window_occluded: null, duration_incoming_video_stopped_for_occlusion: null, num_window_occlusion_changes: null, fps_percentile1: null, fps_percentile5: null, fps_percentile10: null, fps_percentile25: null, fps_percentile50: null, fps_percentile75: null, bitrate_percentile1: null, bitrate_percentile5: null, bitrate_percentile10: null, bitrate_percentile25: null, bitrate_percentile50: null, bitrate_percentile75: null, bitrate_percentile99: null, resolution_percentile1: null, resolution_percentile5: null, resolution_percentile10: null, resolution_percentile25: null, resolution_percentile50: null, resolution_percentile75: null, inbound_bitrate_estimate_percentile1: null, inbound_bitrate_estimate_percentile5: null, inbound_bitrate_estimate_percentile10: null, inbound_bitrate_estimate_percentile25: null, inbound_bitrate_estimate_percentile50: null, inbound_bitrate_estimate_percentile75: null, inbound_bitrate_estimate_percentile99: null, local_want_percentile1: null, local_want_percentile5: null, local_want_percentile10: null, local_want_percentile25: null, local_want_percentile50: null, local_want_percentile75: null, local_want_percentile90: null, local_want_percentile95: null, average_local_want: null, duration_video_effect: null, cryptor_max_attempts: null, duration_decoder_ffmpeg: null, duration_decoder_dav1d: null, duration_decoder_vp8_libvpx: null, duration_decoder_electron: null, duration_decoder_videotoolbox: null, duration_decoder_uncategorized: null, duration_decoder_unknown: null, duration_decoder_exynos: null, duration_decoder_webrtc: null, duration_decoder_qualcomm: null, duration_decoder_mediatek: null, duration_decoder_d3d11videodecoder: null, duration_decoder_android: null };
    const _Math2 = Math;
    obj[0] = Math.floor(diff / 1000);
    const _Math3 = Math;
    obj[1] = Math.round(result);
    const videoStoppedDuration = aggregationDuration.videoStoppedDuration;
    const asSecondsResult = videoStoppedDuration.asSeconds();
    let num3 = 0;
    if (null != asSecondsResult) {
      const _Math4 = Math;
      num3 = Math.round(asSecondsResult);
    }
    obj[2] = num3;
    let num5 = 0;
    if (null != aggregationDuration.bitrateBuckets[8000000]) {
      const _Math5 = Math;
      num5 = Math.round(tmp10);
    }
    obj[3] = num5;
    let num7 = 0;
    if (null != aggregationDuration.bitrateBuckets[7000000]) {
      const _Math6 = Math;
      num7 = Math.round(tmp11);
    }
    obj[4] = num7;
    let num9 = 0;
    if (null != aggregationDuration.bitrateBuckets[6000000]) {
      const _Math7 = Math;
      num9 = Math.round(tmp12);
    }
    obj[5] = num9;
    let num11 = 0;
    if (null != aggregationDuration.bitrateBuckets[5000000]) {
      const _Math8 = Math;
      num11 = Math.round(tmp13);
    }
    obj[6] = num11;
    let num13 = 0;
    if (null != aggregationDuration.bitrateBuckets[4000000]) {
      const _Math9 = Math;
      num13 = Math.round(tmp14);
    }
    obj[7] = num13;
    let num15 = 0;
    if (null != aggregationDuration.bitrateBuckets[3000000]) {
      const _Math10 = Math;
      num15 = Math.round(tmp15);
    }
    obj[8] = num15;
    let num17 = 0;
    if (null != aggregationDuration.bitrateBuckets[2000000]) {
      const _Math11 = Math;
      num17 = Math.round(tmp16);
    }
    obj[9] = num17;
    let num19 = 0;
    if (null != aggregationDuration.bitrateBuckets[1500000]) {
      const _Math12 = Math;
      num19 = Math.round(tmp17);
    }
    obj[10] = num19;
    let num21 = 0;
    if (null != aggregationDuration.bitrateBuckets[1000000]) {
      const _Math13 = Math;
      num21 = Math.round(tmp18);
    }
    obj[11] = num21;
    let num23 = 0;
    if (null != aggregationDuration.bitrateBuckets[500000]) {
      const _Math14 = Math;
      num23 = Math.round(tmp19);
    }
    obj[12] = num23;
    const first = aggregationDuration.bitrateBuckets[0];
    let num24 = 0;
    if (null != first) {
      const _Math15 = Math;
      num24 = Math.round(first);
    }
    obj[13] = num24;
    let num25 = 0;
    if (null != aggregationDuration.fpsBuckets[60]) {
      const _Math16 = Math;
      num25 = Math.round(tmp21);
    }
    obj[14] = num25;
    let num26 = 0;
    if (null != aggregationDuration.fpsBuckets[55]) {
      const _Math17 = Math;
      num26 = Math.round(tmp22);
    }
    obj[15] = num26;
    let num27 = 0;
    if (null != aggregationDuration.fpsBuckets[50]) {
      const _Math18 = Math;
      num27 = Math.round(tmp23);
    }
    obj[16] = num27;
    let num28 = 0;
    if (null != aggregationDuration.fpsBuckets[45]) {
      const _Math19 = Math;
      num28 = Math.round(tmp24);
    }
    obj[17] = num28;
    let num29 = 0;
    if (null != aggregationDuration.fpsBuckets[40]) {
      const _Math20 = Math;
      num29 = Math.round(tmp25);
    }
    obj[18] = num29;
    let num30 = 0;
    if (null != aggregationDuration.fpsBuckets[35]) {
      const _Math21 = Math;
      num30 = Math.round(tmp26);
    }
    obj[19] = num30;
    let num31 = 0;
    if (null != aggregationDuration.fpsBuckets[30]) {
      const _Math22 = Math;
      num31 = Math.round(tmp27);
    }
    obj[20] = num31;
    let num32 = 0;
    if (null != aggregationDuration.fpsBuckets[25]) {
      const _Math23 = Math;
      num32 = Math.round(tmp28);
    }
    obj[21] = num32;
    let num33 = 0;
    if (null != aggregationDuration.fpsBuckets[20]) {
      const _Math24 = Math;
      num33 = Math.round(tmp29);
    }
    obj[22] = num33;
    let num34 = 0;
    if (null != aggregationDuration.fpsBuckets[15]) {
      const _Math25 = Math;
      num34 = Math.round(tmp30);
    }
    obj[23] = num34;
    let num35 = 0;
    if (null != aggregationDuration.fpsBuckets[10]) {
      const _Math26 = Math;
      num35 = Math.round(tmp31);
    }
    obj[24] = num35;
    let num36 = 0;
    if (null != aggregationDuration.fpsBuckets[5]) {
      const _Math27 = Math;
      num36 = Math.round(tmp32);
    }
    obj[25] = num36;
    const first1 = aggregationDuration.fpsBuckets[0];
    let num37 = 0;
    if (null != first1) {
      const _Math28 = Math;
      num37 = Math.round(first1);
    }
    obj[26] = num37;
    let num38 = 0;
    if (aggregationDuration.intervalTotal > 0) {
      const _Math29 = Math;
      num38 = Math.round(aggregationDuration.resolutionTotal / aggregationDuration.intervalTotal);
    }
    obj[27] = num38;
    let num39 = 0;
    if (aggregationDuration.intervalTotal > 0) {
      const _Math30 = Math;
      num39 = Math.round(aggregationDuration.minorResolutionTotal / aggregationDuration.intervalTotal);
    }
    obj[28] = num39;
    let num40 = 0;
    if (aggregationDuration.intervalTotal > 0) {
      const _Math31 = Math;
      num40 = Math.round(aggregationDuration.majorResolutionTotal / aggregationDuration.intervalTotal);
    }
    obj[29] = num40;
    let minWidth = aggregationDuration.minWidth;
    if (minWidth == null) {
      minWidth = null;
    }
    obj[30] = minWidth;
    let minHeight = aggregationDuration.minHeight;
    if (minHeight == null) {
      minHeight = null;
    }
    obj[31] = minHeight;
    let num42 = 0;
    if (null != aggregationDuration.resolutionBuckets[720]) {
      const _Math32 = Math;
      num42 = Math.round(tmp36);
    }
    obj[32] = num42;
    let num44 = 0;
    if (null != aggregationDuration.resolutionBuckets[480]) {
      const _Math33 = Math;
      num44 = Math.round(tmp37);
    }
    obj[33] = num44;
    let num46 = 0;
    if (null != aggregationDuration.resolutionBuckets[360]) {
      const _Math34 = Math;
      num46 = Math.round(tmp38);
    }
    obj[34] = num46;
    ({ pausedCount: obj[35], paused } = self);
    const _Math35 = Math;
    obj[36] = Math.round(paused.totalDuration() / 1000);
    const zeroReceivers = self.zeroReceivers;
    const _Math36 = Math;
    obj[37] = Math.round(zeroReceivers.totalDuration() / 1000);
    const videoStopped = self.videoStopped;
    const _Math37 = Math;
    obj[38] = Math.round(videoStopped.totalDuration() / 1000);
    const hqSimulcastStreamWatched = self.hqSimulcastStreamWatched;
    const totalDurationSecondsResult = hqSimulcastStreamWatched.totalDurationSeconds();
    let num47 = 0;
    if (null != totalDurationSecondsResult) {
      const _Math38 = Math;
      num47 = Math.round(totalDurationSecondsResult);
    }
    obj[39] = num47;
    const lqSimulcastStreamWatched = self.lqSimulcastStreamWatched;
    const totalDurationSecondsResult1 = lqSimulcastStreamWatched.totalDurationSeconds();
    let num48 = 0;
    if (null != totalDurationSecondsResult1) {
      const _Math39 = Math;
      num48 = Math.round(totalDurationSecondsResult1);
    }
    obj[40] = num48;
    const hqSimulcastStreamEligible = self.hqSimulcastStreamEligible;
    const totalDurationSecondsResult2 = hqSimulcastStreamEligible.totalDurationSeconds();
    let num49 = 0;
    if (null != totalDurationSecondsResult2) {
      const _Math40 = Math;
      num49 = Math.round(totalDurationSecondsResult2);
    }
    obj[41] = num49;
    const lqSimulcastStreamEligible = self.lqSimulcastStreamEligible;
    const totalDurationSecondsResult3 = lqSimulcastStreamEligible.totalDurationSeconds();
    let num50 = 0;
    if (null != totalDurationSecondsResult3) {
      const _Math41 = Math;
      num50 = Math.round(totalDurationSecondsResult3);
    }
    obj[42] = num50;
    ({ simulcastQualityChanges: obj[43], windowOccluded } = self);
    const totalDurationSecondsResult4 = windowOccluded.totalDurationSeconds();
    let num51 = 0;
    if (null != totalDurationSecondsResult4) {
      const _Math42 = Math;
      num51 = Math.round(totalDurationSecondsResult4);
    }
    obj[44] = num51;
    const videoStoppedForOcclusion = self.videoStoppedForOcclusion;
    const totalDurationSecondsResult5 = videoStoppedForOcclusion.totalDurationSeconds();
    let num52 = 0;
    if (null != totalDurationSecondsResult5) {
      const _Math43 = Math;
      num52 = Math.round(totalDurationSecondsResult5);
    }
    obj[45] = num52;
    obj[46] = self.numWindowOcclusionChanges;
    obj[47] = report.percentiles[1];
    obj[48] = report.percentiles[5];
    obj[49] = report.percentiles[10];
    obj[50] = report.percentiles[25];
    obj[51] = report.percentiles[50];
    obj[52] = report.percentiles[75];
    obj[53] = report1.percentiles[1];
    obj[54] = report1.percentiles[5];
    obj[55] = report1.percentiles[10];
    obj[56] = report1.percentiles[25];
    obj[57] = report1.percentiles[50];
    obj[58] = report1.percentiles[75];
    obj[59] = report1.percentiles[99];
    obj[60] = report2.percentiles[1];
    obj[61] = report2.percentiles[5];
    obj[62] = report2.percentiles[10];
    obj[63] = report2.percentiles[25];
    obj[64] = report2.percentiles[50];
    obj[65] = report2.percentiles[75];
    obj[66] = report3.percentiles[1];
    obj[67] = report3.percentiles[5];
    obj[68] = report3.percentiles[10];
    obj[69] = report3.percentiles[25];
    obj[70] = report3.percentiles[50];
    obj[71] = report3.percentiles[75];
    obj[72] = report3.percentiles[99];
    obj[73] = report4.percentiles[1];
    obj[74] = report4.percentiles[5];
    obj[75] = report4.percentiles[10];
    obj[76] = report4.percentiles[25];
    obj[77] = report4.percentiles[50];
    obj[78] = report4.percentiles[75];
    obj[79] = report4.percentiles[90];
    obj[80] = report4.percentiles[95];
    obj[81] = report4.mean;
    const videoEffectDuration = self.videoEffectDuration;
    const _Math44 = Math;
    obj[82] = Math.round(videoEffectDuration.totalDuration() / 1000);
    obj[83] = aggregationDuration.cryptorMaxAttempts;
    const tmp47 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.FFMPEG];
    let num53 = 0;
    if (null != tmp47) {
      const _Math45 = Math;
      num53 = Math.round(tmp47);
    }
    obj[84] = num53;
    const tmp48 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.DAV1D];
    let num54 = 0;
    if (null != tmp48) {
      const _Math46 = Math;
      num54 = Math.round(tmp48);
    }
    obj[85] = num54;
    const tmp49 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.VP8_LIBVPX];
    let num55 = 0;
    if (null != tmp49) {
      const _Math47 = Math;
      num55 = Math.round(tmp49);
    }
    obj[86] = num55;
    const tmp50 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.ELECTRON];
    let num56 = 0;
    if (null != tmp50) {
      const _Math48 = Math;
      num56 = Math.round(tmp50);
    }
    obj[87] = num56;
    const tmp51 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.VIDEOTOOLBOX];
    let num57 = 0;
    if (null != tmp51) {
      const _Math49 = Math;
      num57 = Math.round(tmp51);
    }
    obj[88] = num57;
    const tmp52 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.UNCATEGORIZED];
    let num58 = 0;
    if (null != tmp52) {
      const _Math50 = Math;
      num58 = Math.round(tmp52);
    }
    obj[89] = num58;
    const tmp53 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.UNKNOWN];
    let num59 = 0;
    if (null != tmp53) {
      const _Math51 = Math;
      num59 = Math.round(tmp53);
    }
    obj[90] = num59;
    const tmp54 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.EXYNOS];
    let num60 = 0;
    if (null != tmp54) {
      const _Math52 = Math;
      num60 = Math.round(tmp54);
    }
    obj[91] = num60;
    const tmp55 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.WEBRTC];
    let num61 = 0;
    if (null != tmp55) {
      const _Math53 = Math;
      num61 = Math.round(tmp55);
    }
    obj[92] = num61;
    const tmp56 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.QUALCOMM];
    let num62 = 0;
    if (null != tmp56) {
      const _Math54 = Math;
      num62 = Math.round(tmp56);
    }
    obj[93] = num62;
    const tmp57 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.MEDIATEK];
    let num63 = 0;
    if (null != tmp57) {
      const _Math55 = Math;
      num63 = Math.round(tmp57);
    }
    obj[94] = num63;
    const tmp58 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.D3D11VIDEODECODER];
    let num64 = 0;
    if (null != tmp58) {
      const _Math56 = Math;
      num64 = Math.round(tmp58);
    }
    obj[95] = num64;
    const tmp59 = aggregationDuration.decoderBuckets[require(undefined, 7121) /* parseEncoder */.Decoders.ANDROID];
    let num65 = 0;
    if (null != tmp59) {
      const _Math57 = Math;
      num65 = Math.round(tmp59);
    }
    obj[96] = num65;
    const merged = Object.assign(stats);
    const aggregatedProperties = aggregationDuration.aggregatedProperties;
    ({ bytes, framesDropped, networkFramesDropped, framesCodec, freezeCount, totalFreezesDuration, totalFramesDuration, cryptorFailureCount } = aggregatedProperties);
    let num66 = cryptorFailureCount;
    ({ framesCodecError, framesNetwork, packets, packetsLost, nackCount, pliCount, qpSum, pauseCount, totalPausesDuration, totalDecodeTime, keyframes, passthroughCount, cryptorSuccessCount, cryptorDuration, cryptorAttempts, cryptorMissingKeyCount, cryptorInvalidNonceCount, qualityDecodeErrors, qualityDecoderReboots, qualityScoreErrors, qualityFrameDrops, qualitySizeMismatches } = aggregatedProperties);
    if (cryptorFailureCount == null) {
      num66 = 0;
    }
    let num67 = aggregationDuration.cryptorFailureBeforeSuccessCount;
    if (num67 == null) {
      num67 = 0;
    }
    const diff1 = num66 - num67;
    if (aggregationDuration instanceof parseEncoder.OutboundStats) {
      obj.sender_freeze_count = freezeCount;
      obj.sender_total_freezes_duration = totalFreezesDuration;
      obj.sender_total_frames_duration = totalFramesDuration;
      obj.consecutive_static_color_frames_max = aggregationDuration.consecutiveStaticColorFramesMax;
    } else {
      obj.receiver_freeze_count = freezeCount;
      obj.receiver_total_freezes_duration = totalFreezesDuration;
      obj.receiver_total_frames_duration = totalFramesDuration;
      obj.receiver_pause_count = pauseCount;
      obj.receiver_total_pauses_duration = totalPausesDuration;
      obj.total_decode_time_ms = totalDecodeTime;
      obj.frames_dropped_network = networkFramesDropped;
      if (!tmp45Result.isWeb()) {
        obj.frames_dropped_render = framesDropped;
      }
      tmp45Result = tmp45(500);
    }
    obj = {};
    const merged1 = Object.assign(obj);
    let num68 = 0;
    if (0 < result) {
      let num69 = bytes;
      if (bytes == null) {
        num69 = 0;
      }
      num68 = Math.round(8 * num69 / result);
    }
    obj.avg_bitrate = num68;
    let num71 = 0;
    if (0 < result) {
      if (framesCodec == null) {
        framesCodec = 0;
      }
      num71 = Math.round(framesCodec / result);
    }
    obj.avg_fps = num71;
    obj.num_bytes = bytes;
    obj.num_packets_lost = packetsLost;
    obj.num_packets = packets;
    obj.num_frames = framesNetwork;
    obj.num_frames_codec_error = framesCodecError;
    obj.time_to_first_frame_ms = aggregationDuration.timeToFirstFrame;
    obj.num_frames_dropped = framesDropped + networkFramesDropped;
    obj.num_nacks = nackCount;
    obj.num_plis = pliCount;
    obj.qp_sum = qpSum;
    obj.num_keyframes = keyframes;
    obj.cryptor_passthrough_count = passthroughCount;
    obj.cryptor_success_count = cryptorSuccessCount;
    obj.cryptor_failure_count = cryptorFailureCount;
    obj.cryptor_duration = cryptorDuration;
    obj.cryptor_attempts = cryptorAttempts;
    obj.cryptor_missing_key_count = cryptorMissingKeyCount;
    obj.cryptor_invalid_nonce_count = cryptorInvalidNonceCount;
    obj.cryptor_failure_after_success_count = diff1;
    obj.encoder_quality_decode_errors = qualityDecodeErrors;
    obj.encoder_quality_decoder_reboots = qualityDecoderReboots;
    obj.encoder_quality_score_errors = qualityScoreErrors;
    obj.encoder_quality_frame_drops = qualityFrameDrops;
    obj.encoder_quality_size_mismatches = qualitySizeMismatches;
    return obj;
  }
};
prototype["receivedStats"] = function receivedStats(nowResult, transport, streamParameters) {
  let self = this;
  self = this;
  const importDefault = nowResult;
  const dependencyMap = transport;
  let closure_3 = streamParameters;
  transport = transport.transport;
  let num = 1;
  if (!obj.isWeb()) {
    const receiverReports = transport.receiverReports;
    let num2;
    if (receiverReports != null) {
      num2 = receiverReports.length;
    }
    if (num2 == null) {
      num2 = 0;
    }
    num = num2;
  }
  const set = new Set();
  const set1 = new Set();
  self.updateSendState({ receivers: num });
  let tmp7 = self.connection.context === tmp(4381).MediaEngineContextTypes.DEFAULT;
  if (tmp7) {
    tmp7 = null != transport.camera;
  }
  self.cameraDuration.value = tmp7;
  let tmp9 = self.connection.context === tmp(4381).MediaEngineContextTypes.DEFAULT;
  if (tmp9) {
    tmp9 = null != transport.camera;
  }
  if (tmp9) {
    tmp9 = self.callUserIdsCount > 1;
  }
  self.cameraOpportunityDuration.value = tmp9;
  let tmp11 = self.connection.context === tmp(4381).MediaEngineContextTypes.DEFAULT;
  if (tmp11) {
    tmp11 = null != transport.camera;
  }
  if (tmp11) {
    tmp11 = num > 0;
  }
  self.cameraSendDuration.value = tmp11;
  if (tmp13) {
    self.cameraToggles = self.cameraToggles + 1;
  }
  obj = videoEntropy(500);
  tmp13 = self.cameraDuration.value && !self.cameraDuration.value;
  const tmp14 = importDefault;
  let closure_7 = apply.max(streamParameters.map((quality) => quality.quality));
  const outbound = transport.rtp.outbound;
  const first = outbound.filter((type) => {
    let tmp = "video" === type.type;
    if (tmp) {
      let videoEntropy;
      if (type != null) {
        videoEntropy = type.videoEntropy;
      }
      tmp = null != videoEntropy;
    }
    return tmp;
  })[0];
  videoEntropy = undefined;
  if (first != null) {
    videoEntropy = first.videoEntropy;
  }
  const outbound1 = transport.rtp.outbound;
  let found = outbound1.filter((type) => "video" === type.type);
  const item = found.forEach((ssrc) => {
    if (null != ssrc) {
      ssrc = ssrc.ssrc;
      let obj = self.outboundStats[ssrc];
      if (null == obj) {
        const outboundStats = new videoEntropy(transport[5]).OutboundStats(tmp63.timestampProducer);
        tmp63.outboundStats[ssrc] = outboundStats;
        obj = outboundStats;
      }
      let tmp7 = null == obj.timeToFirstFrame;
      if (tmp7) {
        let tmp8 = ssrc.framesEncoded > 0;
        if (!tmp8) {
          let num2 = ssrc.frameRateInput;
          if (num2 == null) {
            num2 = 0;
          }
          tmp8 = num2 > 0;
        }
        tmp7 = tmp8;
      }
      if (tmp7) {
        const _Math = Math;
        obj.timeToFirstFrame = Math.max(0, closure_1 - obj.startTime);
      }
      let tmp12 = null != ssrc;
      if (tmp12) {
        tmp12 = tmp11 >= 0;
      }
      if (tmp12) {
        videoEntropy = tmp63.videoEntropy;
        videoEntropy.addSample(tmp11);
      }
      const found = streamParameters.find((ssrc) => ssrc.ssrc === ssrc);
      let flag = true;
      if (self.connection.context === videoEntropy(transport[4]).MediaEngineContextTypes.STREAM) {
        const connection = tmp63.connection;
        let num5 = connection.getRemoteVideoSinkWants(ssrc);
        let tmp18 = null != num5;
        if (tmp18) {
          tmp18 = 0 !== num5;
        }
        if (!tmp18) {
          let quality;
          if (found != null) {
            quality = found.quality;
          }
          tmp18 = quality !== closure_7;
        }
        if (!tmp18) {
          const connection2 = tmp63.connection;
          num5 = connection2.getRemoteVideoSinkWants("any");
        }
        if (num5 == null) {
          num5 = 0;
        }
        flag = num5 > 0;
      }
      if ((self.videoStopped.value || !flag) !== obj.isVideoStopped) {
        obj.setVideoStopped(tmp21, videoEntropy(transport[5]).VideoStoppedReasons.SenderStopped);
      }
      if (!(self.videoStopped.value || !flag)) {
        const RawVideoStats = videoEntropy(transport[5]).RawVideoStats;
        const parseOutboundStatsResult = RawVideoStats.parseOutboundStats(ssrc, closure_1);
        if (tmp63.connection.context === videoEntropy(transport[4]).MediaEngineContextTypes.STREAM) {
          let num18 = transport.screenshare;
          if (null == num18) {
            parseOutboundStatsResult.screenshareFramesUnique = parseOutboundStatsResult.framesCodec;
          } else {
            if (null == num18.hybridDxgiFramesUnique) {
              if (null == num18.hybridGdiBitBltFramesUnique) {
                if (null == num18.hybridGdiPrintWindowFramesUnique) {
                  if (null == num18.hybridVideohookFramesUnique) {
                    if (null == num18.hybridGraphicsCaptureFramesUnique) {
                      let num8 = num18.screenshareFrames;
                      if (num8 == null) {
                        num8 = 0;
                      }
                      let num9 = num18.videohookFrames;
                      if (num9 == null) {
                        num9 = 0;
                      }
                      let num10 = num18.quartzFrames;
                      const sum = num8 + num9;
                      if (num10 == null) {
                        num10 = 0;
                      }
                      let num11 = num18.screenCaptureKitFrames;
                      const sum1 = sum + num10;
                      if (num11 == null) {
                        num11 = 0;
                      }
                      let num12 = num18.x11Frames;
                      const sum2 = sum1 + num11;
                      if (num12 == null) {
                        num12 = 0;
                      }
                      let num13 = num18.pipewireFrames;
                      const sum3 = sum2 + num12;
                      if (num13 == null) {
                        num13 = 0;
                      }
                      let sum4 = sum3 + num13;
                    }
                  }
                }
              }
            }
            let num14 = num18.hybridDxgiFramesUnique;
            if (num14 == null) {
              num14 = 0;
            }
            let num15 = num18.hybridGdiBitBltFramesUnique;
            if (num15 == null) {
              num15 = 0;
            }
            let num16 = num18.hybridGdiPrintWindowFramesUnique;
            const sum5 = num14 + num15;
            if (num16 == null) {
              num16 = 0;
            }
            let num17 = num18.hybridVideohookFramesUnique;
            const sum6 = sum5 + num16;
            if (num17 == null) {
              num17 = 0;
            }
            num18 = num18.hybridGraphicsCaptureFramesUnique;
            const sum7 = sum6 + num17;
            if (num18 == null) {
              num18 = 0;
            }
            sum4 = sum7 + num18;
          }
        }
        const result = obj.appendAndIncrementStats(parseOutboundStatsResult);
        let tmp41 = null != ssrc.minResolutionWidth;
        if (tmp41) {
          tmp41 = ssrc.minResolutionWidth > 0;
        }
        if (tmp41) {
          tmp41 = null == obj.minWidth || ssrc.minResolutionWidth < obj.minWidth;
          const tmp42 = null == obj.minWidth || ssrc.minResolutionWidth < obj.minWidth;
        }
        if (tmp41) {
          obj.minWidth = ssrc.minResolutionWidth;
        }
        let tmp43 = null != ssrc.minResolutionHeight;
        if (tmp43) {
          tmp43 = ssrc.minResolutionHeight > 0;
        }
        if (tmp43) {
          tmp43 = null == obj.minHeight || ssrc.minResolutionHeight < obj.minHeight;
          const tmp44 = null == obj.minHeight || ssrc.minResolutionHeight < obj.minHeight;
        }
        if (tmp43) {
          obj.minHeight = ssrc.minResolutionHeight;
        }
        if (obj.encoderCodec !== videoEntropy(transport[5]).CodecTypes.UNKNOWN) {
          set.add(obj.encoderCodec);
        }
        let maxBitrate;
        if (found != null) {
          maxBitrate = found.maxBitrate;
        }
        let maxFrameRate;
        if (found != null) {
          maxFrameRate = found.maxFrameRate;
        }
        let bitrateTarget = ssrc.bitrateTarget;
        if (bitrateTarget == null) {
          let num21 = transport.availableOutgoingBitrate;
          if (num21 == null) {
            num21 = 0;
          }
          let num22 = maxBitrate;
          if (maxBitrate == null) {
            num22 = 0;
          }
          bitrateTarget = Math.min(num21, num22);
        }
        obj.appendTargetRates(maxFrameRate, bitrateTarget, maxBitrate, transport.availableOutgoingBitrate);
        let num23 = ssrc.averageEncodeTime;
        if (num23 == null) {
          num23 = 0;
        }
        obj.averageEncodeTime = num23;
        let prop = ssrc.framesDroppedRateLimiter;
        if (prop == null) {
          prop = null;
        }
        obj.framesDroppedRateLimiter = prop;
        let prop1 = ssrc.framesDroppedEncoderQueue;
        if (prop1 == null) {
          prop1 = null;
        }
        obj.framesDroppedEncoderQueue = prop1;
        let prop2 = ssrc.framesDroppedCongestionWindow;
        if (prop2 == null) {
          prop2 = null;
        }
        obj.framesDroppedCongestionWindow = prop2;
        let framesDroppedEncoder = ssrc.framesDroppedEncoder;
        if (framesDroppedEncoder == null) {
          framesDroppedEncoder = null;
        }
        obj.framesDroppedEncoder = framesDroppedEncoder;
        let flag2 = ssrc.hqSimulcastStreamEncoded;
        if (flag2 == null) {
          flag2 = false;
        }
        tmp63.hqSimulcastStreamEncoded.value = flag2;
        let flag3 = ssrc.lqSimulcastStreamEncoded;
        if (flag3 == null) {
          flag3 = false;
        }
        tmp63.lqSimulcastStreamEncoded.value = flag3;
        let value = tmp63.hqSimulcastStreamEncoded.value;
        if (value) {
          value = tmp63.lqSimulcastStreamEncoded.value;
        }
        tmp63.bothSimulcastStreamsEncoded.value = value;
        let flag4 = ssrc.bandwidthLimitedResolution;
        if (flag4 == null) {
          flag4 = false;
        }
        tmp63.bandwidthLimitedResolution.value = flag4;
        let flag5 = ssrc.bandwidthLimitedFrameRate;
        if (flag5 == null) {
          flag5 = false;
        }
        tmp63.bandwidthLimitedFramerate.value = flag5;
      }
    }
  });
  if (!self.paused.value) {
    const item1 = tmp14(12).forEach(transport.rtp.inbound, (arr) => {
      const found = arr.find((type) => "video" === type.type);
      if (null != found) {
        let obj = self.inboundStats[arg1];
        if (null == obj) {
          const inboundStats = new videoEntropy(transport[5]).InboundStats(obj2.timestampProducer);
          obj2.inboundStats[arg1] = inboundStats;
          obj = inboundStats;
        }
        const RawVideoStats = videoEntropy(transport[5]).RawVideoStats;
        const parseInboundStatsResult = RawVideoStats.parseInboundStats(found, closure_1);
        const statCollectionPausedUsers = obj2.statCollectionPausedUsers;
        if (!statCollectionPausedUsers.has(arg1)) {
          const result = obj.appendAndIncrementStats(parseInboundStatsResult);
          obj.appendTransportStats(transport);
        }
        let tmp15 = null != found.minResolutionWidth;
        if (tmp15) {
          tmp15 = found.minResolutionWidth > 0;
        }
        if (tmp15) {
          tmp15 = null == obj.minWidth || found.minResolutionWidth < obj.minWidth;
          const tmp16 = null == obj.minWidth || found.minResolutionWidth < obj.minWidth;
        }
        if (tmp15) {
          obj.minWidth = found.minResolutionWidth;
        }
        let tmp17 = null != found.minResolutionHeight;
        if (tmp17) {
          tmp17 = found.minResolutionHeight > 0;
        }
        if (tmp17) {
          tmp17 = null == obj.minHeight || found.minResolutionHeight < obj.minHeight;
          const tmp18 = null == obj.minHeight || found.minResolutionHeight < obj.minHeight;
        }
        if (tmp17) {
          obj.minHeight = found.minResolutionHeight;
        }
        if (parseInboundStatsResult.packets > 0) {
          obj2.emit(transport.FpsUpdate, arg1, parseInboundStatsResult.framesCodec, parseInboundStatsResult.timestamp);
        }
        if (obj.decoderCodec !== videoEntropy(transport[5]).CodecTypes.UNKNOWN) {
          set1.add(obj.decoderCodec);
        }
        if (tmp27) {
          obj.timeToFirstFrame = tmp10 - obj.startTime;
        }
        tmp10 = closure_1;
        tmp27 = null == obj.timeToFirstFrame && found.framesDecoded > 0;
      }
    });
    const tmp14Result = tmp14(12);
  }
  if (tmp19) {
    if (tmpResult.areSetsEqual(set, set1)) {
      self.symmetricCodecUpdates = self.symmetricCodecUpdates + 1;
    } else {
      self.asymmetricCodecUpdates = self.asymmetricCodecUpdates + 1;
    }
    tmpResult = tmp(1414);
  }
};
prototype["updateSystemResourceStats"] = function updateSystemResourceStats() {
  const self = this;
  for (const key10003 in this.outboundStats) {
    let tmp = key10003;
    let obj = self.outboundStats[key10003];
    let addSystemResourcesResult = obj.addSystemResources();
    continue;
  }
  for (const key10006 in self.inboundStats) {
    let tmp3 = key10006;
    let obj2 = self.inboundStats[key10006];
    let addSystemResourcesResult1 = obj2.addSystemResources();
    continue;
  }
};
prototype["updateVideoEffectStats"] = function updateVideoEffectStats(rtp) {
  let found;
  if (rtp != null) {
    const outbound = rtp.rtp.outbound;
    found = outbound.find((type) => "video" === type.type);
  }
  let type;
  if (found != null) {
    type = found.type;
  }
  this.videoEffectDuration.value = "video" === type && null != found.filter;
};
let result = require("sleep").fileFinishedImporting("lib/VideoQuality.tsx");

export const VideoQualityEvent = obj;
export { VideoQuality };