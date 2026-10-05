// discord_app/lib/VideoQuality.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import TimeUtils from "../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import BaseConnectionEvent from "../../discord_common/js/packages/media-engine/index.tsx";
import VideoQualityStats from "VideoQualityStats.tsx";
import Histogram from "Histogram.tsx";
import NetworkQualityDefault from "NetworkQuality.tsx";
import VideoBackgroundStore_mod from "../modules/video_backgrounds/VideoBackgroundStore.tsx";
import TypedEventEmitter from "../../discord_common/js/shared/utils/TypedEventEmitter.tsx";
import size from "../../_runtime/metro/00002__.js";

let dependencyMap, importDefault, map, map1, set, vmafHistogram;

function round(arg0) {
  let num = 0;
  if (null != arg0) {
    const _Math = Math;
    num = Math.round(arg0);
  }
  return num;
}
let VideoBackgroundStore = VideoBackgroundStore_mod;
const VideoQualityEvent = { FpsUpdate: "fps-update" };
class VideoQuality extends TypedEventEmitter {
  constructor(connection) {
    let TimeStampProducer;
    if (TimeStampProducer === undefined) {
      TimeStampProducer = TimeUtils.TimeStampProducer;
    }
    const tmp7 = new VideoQuality(tmp4, tmp3, tmp2, tmp, TimeStampProducer, new.target);
    let closure_0 = tmp7;
    tmp7.networkQuality = new NetworkQualityDefault();
    tmp7.pausedCount = 0;
    tmp7.simulcastQualityChanges = 0;
    tmp7.cameraToggles = 0;
    tmp7.callUserIdsCount = 0;
    tmp7.numWindowOcclusionChanges = 0;
    tmp7.outboundStats = {};
    tmp7.inboundStats = {};
    tmp7.symmetricCodecUpdates = 0;
    tmp7.asymmetricCodecUpdates = 0;
    new NetworkQualityDefault();
    tmp7.statCollectionPausedUsers = new Set();
    tmp7.sampleStats = function sampleStats(transport) {
      if (null != transport) {
        const timestampProducer = closure_0.timestampProducer;
        const nowResult = timestampProducer.now();
        const networkQuality = closure_0.networkQuality;
        const result = networkQuality.incrementNetworkStats(nowResult);
        const result1 = closure_0.updateSystemResourceStats();
        const result2 = closure_0.updateVideoEffectStats(transport);
        if (null != transport) {
          const connection = closure_0.connection;
          closure_0.receivedStats(nowResult, transport, connection.getStreamParameters());
        }
      }
    };
    tmp7.connection = connection;
    tmp7.timestampProducer = TimeStampProducer;
    new Set();
    const durationEnabled = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.paused = durationEnabled;
    const durationEnabled1 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.zeroReceivers = durationEnabled1;
    const durationEnabled2 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.videoStopped = durationEnabled2;
    const durationEnabled3 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.videoEffectDuration = durationEnabled3;
    const durationEnabled4 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.hqSimulcastStreamEncoded = durationEnabled4;
    const durationEnabled5 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.lqSimulcastStreamEncoded = durationEnabled5;
    const durationEnabled6 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.bothSimulcastStreamsEncoded = durationEnabled6;
    const durationEnabled7 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.hqSimulcastStreamWatched = durationEnabled7;
    const durationEnabled8 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.lqSimulcastStreamWatched = durationEnabled8;
    const durationEnabled9 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.hqSimulcastStreamEligible = durationEnabled9;
    const durationEnabled10 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.lqSimulcastStreamEligible = durationEnabled10;
    const durationEnabled11 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.windowOccluded = durationEnabled11;
    const durationEnabled12 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.videoStoppedForOcclusion = durationEnabled12;
    const durationEnabled13 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.bandwidthLimitedFramerate = durationEnabled13;
    const durationEnabled14 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.bandwidthLimitedResolution = durationEnabled14;
    const durationEnabled15 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.cameraDuration = durationEnabled15;
    const durationEnabled16 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.cameraOpportunityDuration = durationEnabled16;
    const durationEnabled17 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.cameraSendDuration = durationEnabled17;
    const durationEnabled18 = new TimeUtils.DurationEnabled(false, TimeStampProducer);
    tmp7.videoBackgroundEnabledDuration = durationEnabled18;
    const histogram = new Histogram.Histogram();
    tmp7.videoEntropy = histogram;
    return tmp7;
  }
  addUserToStatsCollectionPausedSet(userId) {
    const statCollectionPausedUsers = this.statCollectionPausedUsers;
    statCollectionPausedUsers.add(userId);
  }
  removeUserFromStatsCollectionPausedSet(userId) {
    const statCollectionPausedUsers = this.statCollectionPausedUsers;
    statCollectionPausedUsers.delete(userId);
  }
  start() {
    const timestampProducer = this.timestampProducer;
    this.streamStart = timestampProducer.now();
    const connection = this.connection;
    connection.on(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
  }
  setOutboundSsrc(ssrc) {
    const self = this;
    if (null == this.outboundStats[ssrc]) {
      const outboundStats = self.outboundStats;
      const self2 = this;
      const self3 = this;
      const outboundStats1 = new VideoQualityStats.OutboundStats(self.timestampProducer);
      outboundStats[ssrc] = outboundStats1;
    }
  }
  getOrCreateInboundStats(userId) {
    const self = this;
    if (null == this.inboundStats[userId]) {
      const inboundStats = self.inboundStats;
      const self2 = this;
      const self3 = this;
      const inboundStats1 = new VideoQualityStats.InboundStats(self.timestampProducer);
      inboundStats[userId] = inboundStats1;
    }
    return self.inboundStats[userId];
  }
  updateCallUserIdsCount(size) {
    this.callUserIdsCount = size;
  }
  setInboundUser(userId, videoSsrc) {
    const orCreateInboundStats = this.getOrCreateInboundStats(userId);
    orCreateInboundStats.setVideoStopped(0 === videoSsrc, VideoQualityStats.VideoStoppedReasons.SenderStopped);
  }
  setUserVideoDisabled(userId, arg1) {
    const orCreateInboundStats = this.getOrCreateInboundStats(userId);
    orCreateInboundStats.setVideoStopped(arg1, VideoQualityStats.VideoStoppedReasons.ClientSideDisableVideo);
    const tmp2 =
      !arg1 && orCreateInboundStats.statsWindow.length > 0 && 0 === orCreateInboundStats.statsWindow[0].packets;
    if (tmp2) {
      const timestampProducer = this.timestampProducer;
      orCreateInboundStats.startTime = timestampProducer.now();
    }
  }
  setOcclusionIncomingVideoEnabled(incomingVideoEnabled) {
    this.videoStoppedForOcclusion.value = !incomingVideoEnabled;
  }
  setWindowOcclusionState(value) {
    const self = this;
    if (value !== this.windowOccluded.value) {
      self.numWindowOcclusionChanges = self.numWindowOcclusionChanges + 1;
    }
    self.windowOccluded.value = value;
  }
  pause() {
    const self = this;
    if (!this.paused.value) {
      self.pausedCount = self.pausedCount + 1;
    }
    const arr = _modDef12;
    const item = arr.forEach(self.outboundStats, (arg0) => {
      arg0.statsWindow = [];
    });
    const arr2 = _modDef12;
    const item1 = arr2.forEach(self.inboundStats, (arg0) => {
      arg0.statsWindow = [];
    });
    self.updateSendState({ paused: true });
  }
  resume() {
    this.updateSendState({ paused: false });
  }
  stop() {
    const connection = this.connection;
    connection.off(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
    const timestampProducer = this.timestampProducer;
    this.streamEnd = timestampProducer.now();
    this.removeAllListeners();
  }
  setViewedSimulcastQuality(value) {
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
  }
  setEligibleSimulcastQuality(value) {
    this.hqSimulcastStreamEligible.value = value;
    this.lqSimulcastStreamEligible.value = !value;
  }
  getNetworkStats() {
    const networkQuality = this.networkQuality;
    return networkQuality.getStats();
  }
  getEncoderUsageStats() {
    const self = this;
    map = new Map();
    for (const key10011 in this.outboundStats) {
      let _Map = Map;
      let self2 = this;
      let self3 = this;
      map1 = new Map();
      let obj3 = self.outboundStats[key10011];
      let codecsUsed = obj3.getCodecsUsed();
      for (const item10013 of codecsUsed) {
        let formatted = item10013.toUpperCase();
        let result = map1.set(formatted, round(self.outboundStats[key10011].codecBuckets[formatted]));
        let _parseInt = parseInt;
        let result1 = map.set(parseInt(key10011), map1);
        continue;
      }
    }
    return map;
  }
  getDecoderUsageStats() {
    const self = this;
    map = new Map();
    for (const key10011 in this.inboundStats) {
      let _Map = Map;
      let self2 = this;
      let self3 = this;
      map1 = new Map();
      let obj3 = self.inboundStats[key10011];
      let codecsUsed = obj3.getCodecsUsed();
      for (const item10013 of codecsUsed) {
        let formatted = item10013.toUpperCase();
        let result = map1.set(formatted, round(self.inboundStats[key10011].codecBuckets[formatted]));
        let result1 = map.set(key10011, map1);
        continue;
      }
    }
    return map;
  }
  getCodecUsageStats(receiver, userId) {
    let num;
    let num10;
    let num11;
    let num12;
    let num13;
    let num2;
    let num3;
    let num4;
    let num5;
    let num6;
    let num8;
    let num9;
    const self = this;
    map = new Map();
    if ("sender" !== receiver) {
      if ("streamer" !== receiver) {
        const decoderUsageStats = self.getDecoderUsageStats();
        let value = map;
        if (decoderUsageStats.has(userId)) {
          value = decoderUsageStats.get(userId);
        }
        const obj = {
          codec_asymmetric_session: this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
          codec_h264_decode_duration_sec: num,
          codec_h265_decode_duration_sec: num2,
          codec_vp8_decode_duration_sec: num3,
          codec_vp9_decode_duration_sec: num4,
          codec_av1_decode_duration_sec: num5,
          codec_unknown_decode_duration_sec: num6,
        };
        num = value.get(VideoQualityStats.CodecTypes.H264);
        if (num == null) {
          num = 0;
        }
        num2 = value.get(VideoQualityStats.CodecTypes.H265);
        if (num2 == null) {
          num2 = 0;
        }
        num3 = value.get(VideoQualityStats.CodecTypes.VP8);
        if (num3 == null) {
          num3 = 0;
        }
        num4 = value.get(VideoQualityStats.CodecTypes.VP9);
        if (num4 == null) {
          num4 = 0;
        }
        num5 = value.get(VideoQualityStats.CodecTypes.AV1);
        if (num5 == null) {
          num5 = 0;
        }
        num6 = value.get(VideoQualityStats.CodecTypes.UNKNOWN);
        if (num6 == null) {
          num6 = 0;
        }
        return obj;
      }
    }
    const encoderUsageStats = self.getEncoderUsageStats();
    if (encoderUsageStats.size > 0) {
      const items = [];
      HermesBuiltin.arraySpread(items, encoderUsageStats.keys(), 0);
      map = encoderUsageStats.get(items.sort()[0]);
    }
    const obj2 = {
      codec_asymmetric_session: this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
      codec_h264_encode_duration_sec: num8,
      codec_h265_encode_duration_sec: num9,
      codec_vp8_encode_duration_sec: num10,
      codec_vp9_encode_duration_sec: num11,
      codec_av1_encode_duration_sec: num12,
      codec_unknown_encode_duration_sec: num13,
    };
    num8 = map.get(VideoQualityStats.CodecTypes.H264);
    if (num8 == null) {
      num8 = 0;
    }
    num9 = map.get(VideoQualityStats.CodecTypes.H265);
    if (num9 == null) {
      num9 = 0;
    }
    num10 = map.get(VideoQualityStats.CodecTypes.VP8);
    if (num10 == null) {
      num10 = 0;
    }
    num11 = map.get(VideoQualityStats.CodecTypes.VP9);
    if (num11 == null) {
      num11 = 0;
    }
    num12 = map.get(VideoQualityStats.CodecTypes.AV1);
    if (num12 == null) {
      num12 = 0;
    }
    num13 = map.get(VideoQualityStats.CodecTypes.UNKNOWN);
    if (num13 == null) {
      num13 = 0;
    }
    return obj2;
  }
  getCameraDurationStats() {
    let cameraDuration;
    let cameraOpportunityDuration;
    let cameraSendDuration;
    let videoBackgroundEnabledDuration;
    const obj = {
      camera_enabled_duration: Math.round(cameraDuration.totalDurationSeconds()),
      camera_send_opportunity_duration: Math.round(cameraOpportunityDuration.totalDurationSeconds()),
      camera_send_duration: Math.round(cameraSendDuration.totalDurationSeconds()),
      num_camera_on_toggles: this.cameraToggles,
      video_background_enabled_duration: Math.round(videoBackgroundEnabledDuration.totalDurationSeconds()),
    };
    cameraDuration = this.cameraDuration;
    cameraOpportunityDuration = this.cameraOpportunityDuration;
    cameraSendDuration = this.cameraSendDuration;
    videoBackgroundEnabledDuration = this.videoBackgroundEnabledDuration;
    return obj;
  }
  getOutboundStats() {
    const self = this;
    let items = [];
    const arr2 = self(12);
    let item = arr2.forEach(this.outboundStats, (vmafHistogram, arg1) => {
      let num;
      let num10;
      let num13;
      let num14;
      let num15;
      let num16;
      let num17;
      let num18;
      let num19;
      let num2;
      let num20;
      let num21;
      let num22;
      let num23;
      let num24;
      let num25;
      let num26;
      let num27;
      let num28;
      let num29;
      let num30;
      let num31;
      let num32;
      let num33;
      let num34;
      let num35;
      let num36;
      let num37;
      let num4;
      let num7;
      let result1;
      let result2;
      let result3;
      let result4;
      let tmp18;
      let tmp19;
      let tmp20;
      let tmp21;
      let tmp22;
      let tmp23;
      let tmp24;
      let tmp27;
      let tmp28;
      let tmp29;
      let tmp30;
      let tmp31;
      let tmp32;
      let tmp33;
      let tmp64;
      let tmp65;
      let tmp66;
      let tmp67;
      let tmp68;
      let tmp69;
      let tmp71;
      let tmp72;
      let tmp73;
      let tmp74;
      let tmp75;
      let tmp76;
      let tmp88;
      let tmp89;
      let tmp90;
      let tmp91;
      let tmp92;
      let tmp93;
      let tmp94;
      let closure_0 = arg1;
      const connection = self.connection;
      let streamParameters;
      if (connection != null) {
        streamParameters = connection.getStreamParameters();
      }
      if (streamParameters.length > 1) {
        const item = streamParameters.forEach((ssrc) => {
          if (parseInt(closure_0) === ssrc.ssrc) {
            num = ssrc.quality;
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
      const videoEntropy = self.videoEntropy;
      const report4 = videoEntropy.getReport(items1);
      const result = vmafHistogram.aggregationDuration / 1000;
      const obj2 = PlatformUtils;
      if (!obj2.isWeb()) {
        const tmp9Result = PlatformUtils;
        if (!tmp9Result.isIOS()) {
          let framesCodec;
          const tmp9Result2 = PlatformUtils;
          if (!tmp9Result2.isAndroid()) {
            framesCodec = vmafHistogram.aggregatedProperties.screenshareFramesUnique;
          }
          const push = items.push;
          const obj3 = {
            target_fps: num2,
            unique_captured_fps: result1,
            target_bitrate_network: num4,
            target_bitrate_network_percentile1: tmp18,
            target_bitrate_network_percentile5: tmp19,
            target_bitrate_network_percentile10: tmp20,
            target_bitrate_network_percentile25: tmp21,
            target_bitrate_network_percentile50: tmp22,
            target_bitrate_network_percentile75: tmp23,
            target_bitrate_network_percentile99: tmp24,
            target_bitrate_max: num7,
            outbound_bandwidth_estimate: num10,
            outbound_bandwidth_surplus_percentile1: tmp27,
            outbound_bandwidth_surplus_percentile5: tmp28,
            outbound_bandwidth_surplus_percentile10: tmp29,
            outbound_bandwidth_surplus_percentile25: tmp30,
            outbound_bandwidth_surplus_percentile50: tmp31,
            outbound_bandwidth_surplus_percentile75: tmp32,
            outbound_bandwidth_surplus_percentile99: tmp33,
            duration_encoder_nvidia_cuda: num13,
            duration_encoder_nvidia_direct3d: num14,
            duration_encoder_nvidia_vulkan: num15,
            duration_encoder_openh264: num16,
            duration_encoder_videotoolbox: num17,
            duration_encoder_amd_direct3d: num18,
            duration_encoder_amd_vaapi: num19,
            duration_encoder_intel: num20,
            duration_encoder_intel_direct3d: num21,
            duration_encoder_intel_vaapi: num22,
            duration_encoder_vp8_libvpx: num23,
            duration_encoder_uncategorized: num24,
            duration_encoder_wmf_chrome: num25,
            duration_encoder_unknown: num26,
            quality: num,
            average_encode_time_ms: vmafHistogram.averageEncodeTime,
            average_encoder_vmaf_score: result2,
            encoder_vmaf_score_percentile1: tmp64,
            encoder_vmaf_score_percentile5: tmp65,
            encoder_vmaf_score_percentile10: tmp66,
            encoder_vmaf_score_percentile25: tmp67,
            encoder_vmaf_score_percentile50: tmp68,
            encoder_vmaf_score_percentile75: tmp69,
            average_encoder_psnr_db: result3,
            encoder_psnr_db_percentile1: tmp71,
            encoder_psnr_db_percentile5: tmp72,
            encoder_psnr_db_percentile10: tmp73,
            encoder_psnr_db_percentile25: tmp74,
            encoder_psnr_db_percentile50: tmp75,
            encoder_psnr_db_percentile75: tmp76,
            average_outbound_want: result4,
            duration_hq_simulcast_stream_encoded: num27,
            duration_lq_simulcast_stream_encoded: num28,
            duration_both_simulcast_streams_encoded: num29,
            duration_fps_bandwidth_limited: num30,
            duration_resolution_bandwidth_limited: num31,
            video_entropy_percentile1: tmp88,
            video_entropy_percentile5: tmp89,
            video_entropy_percentile10: tmp90,
            video_entropy_percentile25: tmp91,
            video_entropy_percentile50: tmp92,
            video_entropy_percentile75: tmp93,
            video_entropy_percentile99: tmp94,
            duration_encoder_exynos: num32,
            duration_encoder_qualcomm: num33,
            duration_encoder_mediatek: num34,
            duration_encoder_wmf_sw: num35,
            duration_encoder_wmf_hw: num36,
            duration_encoder_wmf_direct3d: num37,
          };
          const merged = Object.assign(self.getStats(vmafHistogram));
          num = 0;
          num2 = 0;
          if (0 < result) {
            let num3 = vmafHistogram.targetFrames;
            const _Math = Math;
            round = Math.round;
            if (num3 == null) {
              num3 = 0;
            }
            num2 = round(num3 / result);
          }
          const connection2 = self.connection;
          let context;
          if (connection2 != null) {
            context = connection2.context;
          }
          result1 = null;
          if (context === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
            result1 = null;
            if (0 < result) {
              result1 = framesCodec / result;
            }
          }
          num4 = 0;
          if (0 < result) {
            let num5 = vmafHistogram.targetBytesNetwork;
            const _Math2 = Math;
            const round2 = Math.round;
            if (num5 == null) {
              num5 = 0;
            }
            num4 = round2((8 * num5) / result);
          }
          tmp18 = null;
          if (report2.count > 0) {
            tmp18 = report2.percentiles[1];
          }
          tmp19 = null;
          if (report2.count > 0) {
            tmp19 = report2.percentiles[5];
          }
          tmp20 = null;
          if (report2.count > 0) {
            tmp20 = report2.percentiles[10];
          }
          tmp21 = null;
          if (report2.count > 0) {
            tmp21 = report2.percentiles[25];
          }
          tmp22 = null;
          if (report2.count > 0) {
            tmp22 = report2.percentiles[50];
          }
          tmp23 = null;
          if (report2.count > 0) {
            tmp23 = report2.percentiles[75];
          }
          tmp24 = null;
          if (report2.count > 0) {
            tmp24 = report2.percentiles[99];
          }
          num7 = 0;
          if (0 < result) {
            let num8 = vmafHistogram.targetBytesMax;
            const _Math3 = Math;
            const round3 = Math.round;
            if (num8 == null) {
              num8 = 0;
            }
            num7 = round3((8 * num8) / result);
          }
          num10 = 0;
          if (0 < result) {
            let num11 = vmafHistogram.outboundBytesAvailable;
            const _Math4 = Math;
            const round4 = Math.round;
            if (num11 == null) {
              num11 = 0;
            }
            num10 = round4((8 * num11) / result);
          }
          tmp27 = null;
          if (report3.count > 0) {
            tmp27 = report3.percentiles[1];
          }
          tmp28 = null;
          if (report3.count > 0) {
            tmp28 = report3.percentiles[5];
          }
          tmp29 = null;
          if (report3.count > 0) {
            tmp29 = report3.percentiles[10];
          }
          tmp30 = null;
          if (report3.count > 0) {
            tmp30 = report3.percentiles[25];
          }
          tmp31 = null;
          if (report3.count > 0) {
            tmp31 = report3.percentiles[50];
          }
          tmp32 = null;
          if (report3.count > 0) {
            tmp32 = report3.percentiles[75];
          }
          tmp33 = null;
          if (report3.count > 0) {
            tmp33 = report3.percentiles[99];
          }
          const tmp34 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.NVIDIA_CUDA];
          num13 = 0;
          if (null != tmp34) {
            const _Math5 = Math;
            num13 = Math.round(tmp34);
          }
          const tmp36 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.NVIDIA_DIRECT_3D];
          num14 = 0;
          if (null != tmp36) {
            const _Math6 = Math;
            num14 = Math.round(tmp36);
          }
          const tmp38 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.NVIDIA_VULKAN];
          num15 = 0;
          if (null != tmp38) {
            const _Math7 = Math;
            num15 = Math.round(tmp38);
          }
          const tmp40 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.OPENH264];
          num16 = 0;
          if (null != tmp40) {
            const _Math8 = Math;
            num16 = Math.round(tmp40);
          }
          const tmp42 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.VIDEOTOOLBOX];
          num17 = 0;
          if (null != tmp42) {
            const _Math9 = Math;
            num17 = Math.round(tmp42);
          }
          const tmp44 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.AMD_DIRECT_3D];
          num18 = 0;
          if (null != tmp44) {
            const _Math10 = Math;
            num18 = Math.round(tmp44);
          }
          const tmp46 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.AMD_VAAPI];
          num19 = 0;
          if (null != tmp46) {
            const _Math11 = Math;
            num19 = Math.round(tmp46);
          }
          const tmp48 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.INTEL];
          num20 = 0;
          if (null != tmp48) {
            const _Math12 = Math;
            num20 = Math.round(tmp48);
          }
          const tmp50 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.INTEL_DIRECT_3D];
          num21 = 0;
          if (null != tmp50) {
            const _Math13 = Math;
            num21 = Math.round(tmp50);
          }
          const tmp52 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.INTEL_VAAPI];
          num22 = 0;
          if (null != tmp52) {
            const _Math14 = Math;
            num22 = Math.round(tmp52);
          }
          const tmp54 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.VP8_LIBVPX];
          num23 = 0;
          if (null != tmp54) {
            const _Math15 = Math;
            num23 = Math.round(tmp54);
          }
          const tmp56 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.UNCATEGORIZED];
          num24 = 0;
          if (null != tmp56) {
            const _Math16 = Math;
            num24 = Math.round(tmp56);
          }
          const tmp58 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.WMF_CHROME];
          num25 = 0;
          if (null != tmp58) {
            const _Math17 = Math;
            num25 = Math.round(tmp58);
          }
          const tmp60 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.UNKNOWN];
          num26 = 0;
          if (null != tmp60) {
            const _Math18 = Math;
            num26 = Math.round(tmp60);
          }
          result2 = null;
          if (vmafHistogram.vmafScoreNum > 0) {
            result2 = vmafHistogram.vmafScoreSum / vmafHistogram.vmafScoreNum;
          }
          tmp64 = null;
          if (report.count > 0) {
            tmp64 = report.percentiles[1];
          }
          tmp65 = null;
          if (report.count > 0) {
            tmp65 = report.percentiles[5];
          }
          tmp66 = null;
          if (report.count > 0) {
            tmp66 = report.percentiles[10];
          }
          tmp67 = null;
          if (report.count > 0) {
            tmp67 = report.percentiles[25];
          }
          tmp68 = null;
          if (report.count > 0) {
            tmp68 = report.percentiles[50];
          }
          tmp69 = null;
          if (report.count > 0) {
            tmp69 = report.percentiles[75];
          }
          result3 = null;
          if (vmafHistogram.psnrDbNum > 0) {
            result3 = vmafHistogram.psnrDbSum / vmafHistogram.psnrDbNum;
          }
          tmp71 = null;
          if (report1.count > 0) {
            tmp71 = report1.percentiles[1];
          }
          tmp72 = null;
          if (report1.count > 0) {
            tmp72 = report1.percentiles[5];
          }
          tmp73 = null;
          if (report1.count > 0) {
            tmp73 = report1.percentiles[10];
          }
          tmp74 = null;
          if (report1.count > 0) {
            tmp74 = report1.percentiles[25];
          }
          tmp75 = null;
          if (report1.count > 0) {
            tmp75 = report1.percentiles[50];
          }
          tmp76 = null;
          if (report1.count > 0) {
            tmp76 = report1.percentiles[75];
          }
          result4 = null;
          if (vmafHistogram.outboundSinkWantNum > 0) {
            result4 = vmafHistogram.outboundSinkWantSum / vmafHistogram.outboundSinkWantNum;
          }
          ({
            framesDroppedRateLimiter: obj5.frames_dropped_rate_limiter,
            framesDroppedEncoderQueue: obj5.frames_dropped_encoder_queue,
            framesDroppedCongestionWindow: obj5.frames_dropped_congestion_window,
            framesDroppedEncoder: obj5.frames_dropped_encoder,
          } = vmafHistogram);
          const hqSimulcastStreamEncoded = self.hqSimulcastStreamEncoded;
          const totalDurationSecondsResult = hqSimulcastStreamEncoded.totalDurationSeconds();
          num27 = 0;
          if (null != totalDurationSecondsResult) {
            const _Math19 = Math;
            num27 = Math.round(totalDurationSecondsResult);
          }
          const lqSimulcastStreamEncoded = self.lqSimulcastStreamEncoded;
          const totalDurationSecondsResult1 = lqSimulcastStreamEncoded.totalDurationSeconds();
          num28 = 0;
          if (null != totalDurationSecondsResult1) {
            const _Math20 = Math;
            num28 = Math.round(totalDurationSecondsResult1);
          }
          const bothSimulcastStreamsEncoded = self.bothSimulcastStreamsEncoded;
          const totalDurationSecondsResult2 = bothSimulcastStreamsEncoded.totalDurationSeconds();
          num29 = 0;
          if (null != totalDurationSecondsResult2) {
            const _Math21 = Math;
            num29 = Math.round(totalDurationSecondsResult2);
          }
          const bandwidthLimitedFramerate = self.bandwidthLimitedFramerate;
          const totalDurationSecondsResult3 = bandwidthLimitedFramerate.totalDurationSeconds();
          num30 = 0;
          if (null != totalDurationSecondsResult3) {
            const _Math22 = Math;
            num30 = Math.round(totalDurationSecondsResult3);
          }
          const bandwidthLimitedResolution = self.bandwidthLimitedResolution;
          const totalDurationSecondsResult4 = bandwidthLimitedResolution.totalDurationSeconds();
          num31 = 0;
          if (null != totalDurationSecondsResult4) {
            const _Math23 = Math;
            num31 = Math.round(totalDurationSecondsResult4);
          }
          tmp88 = null;
          if (report4.count > 0) {
            tmp88 = report4.percentiles[1];
          }
          tmp89 = null;
          if (report4.count > 0) {
            tmp89 = report4.percentiles[5];
          }
          tmp90 = null;
          if (report4.count > 0) {
            tmp90 = report4.percentiles[10];
          }
          tmp91 = null;
          if (report4.count > 0) {
            tmp91 = report4.percentiles[25];
          }
          tmp92 = null;
          if (report4.count > 0) {
            tmp92 = report4.percentiles[50];
          }
          tmp93 = null;
          if (report4.count > 0) {
            tmp93 = report4.percentiles[75];
          }
          tmp94 = null;
          if (report4.count > 0) {
            tmp94 = report4.percentiles[99];
          }
          const tmp95 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.EXYNOS];
          num32 = 0;
          if (null != tmp95) {
            const _Math24 = Math;
            num32 = Math.round(tmp95);
          }
          const tmp97 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.QUALCOMM];
          num33 = 0;
          if (null != tmp97) {
            const _Math25 = Math;
            num33 = Math.round(tmp97);
          }
          const tmp99 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.MEDIATEK];
          num34 = 0;
          if (null != tmp99) {
            const _Math26 = Math;
            num34 = Math.round(tmp99);
          }
          const tmp101 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.WMF_SW];
          num35 = 0;
          if (null != tmp101) {
            const _Math27 = Math;
            num35 = Math.round(tmp101);
          }
          const tmp103 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.WMF_HW];
          num36 = 0;
          if (null != tmp103) {
            const _Math28 = Math;
            num36 = Math.round(tmp103);
          }
          const tmp105 = vmafHistogram.encoderBuckets[VideoQualityStats.Encoders.WMF_DIRECT_3D];
          num37 = 0;
          if (null != tmp105) {
            const _Math29 = Math;
            num37 = Math.round(tmp105);
          }
          push(obj3);
        }
      }
      framesCodec = vmafHistogram.aggregatedProperties.framesCodec;
    });
    return items;
  }
  getInboundStats(arg0) {
    return this.getStats(this.inboundStats[arg0]);
  }
  destroyUser(arg0) {
    delete this.inboundStats[arg0];
  }
  getInboundParticipants() {
    const obj = SnowflakeUtilsDefault;
    return obj.keys(this.inboundStats);
  }
  updateSendState(paused) {
    const self = this;
    if (null != paused.paused) {
      self.paused.value = paused.paused;
    }
    if (null != paused.receivers) {
      self.zeroReceivers.value = 0 === paused.receivers;
    }
    self.videoStopped.value = self.paused.value || self.zeroReceivers.value;
    if ((self.paused.value || self.zeroReceivers.value) !== self.videoStopped.value) {
      const arr = _modDef12;
      const item = arr.forEach(self.outboundStats, (arg0) => {
        const items = [];
        arg0.statsWindow = items;
        return items;
      });
    }
  }
  getStats(aggregationDuration) {
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
    let minHeight;
    let minWidth;
    let nackCount;
    let networkFramesDropped;
    let num11;
    let num13;
    let num15;
    let num17;
    let num19;
    let num21;
    let num23;
    let num24;
    let num25;
    let num26;
    let num27;
    let num28;
    let num29;
    let num3;
    let num30;
    let num31;
    let num32;
    let num33;
    let num34;
    let num35;
    let num36;
    let num37;
    let num38;
    let num39;
    let num40;
    let num42;
    let num44;
    let num46;
    let num47;
    let num48;
    let num49;
    let num5;
    let num50;
    let num51;
    let num52;
    let num53;
    let num54;
    let num55;
    let num56;
    let num57;
    let num58;
    let num59;
    let num60;
    let num61;
    let num62;
    let num63;
    let num64;
    let num65;
    let num68;
    let num7;
    let num71;
    let num9;
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
    let videoEffectDuration;
    let videoStopped;
    let windowOccluded;
    let zeroReceivers;
    if (null == aggregationDuration) {
      return null;
    } else {
      let diff;
      const self = this;
      const _Number = Number;
      const NumberResult = Number(this.streamStart);
      if (null != this.streamEnd) {
        diff = self.streamEnd - NumberResult;
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
      const obj = {
        duration: Math.floor(diff / 1000),
        duration_aggregation: Math.round(result),
        duration_stopped_receiving: num3,
        duration_stream_under_8mbps: num5,
        duration_stream_under_7mbps: num7,
        duration_stream_under_6mbps: num9,
        duration_stream_under_5mbps: num11,
        duration_stream_under_4mbps: num13,
        duration_stream_under_3mbps: num15,
        duration_stream_under_2mbps: num17,
        duration_stream_under_1_5mbps: num19,
        duration_stream_under_1mbps: num21,
        duration_stream_under_0_5mbps: num23,
        duration_stream_at_0mbps: num24,
        duration_fps_under_60: num25,
        duration_fps_under_55: num26,
        duration_fps_under_50: num27,
        duration_fps_under_45: num28,
        duration_fps_under_40: num29,
        duration_fps_under_35: num30,
        duration_fps_under_30: num31,
        duration_fps_under_25: num32,
        duration_fps_under_20: num33,
        duration_fps_under_15: num34,
        duration_fps_under_10: num35,
        duration_fps_under_5: num36,
        duration_fps_at_0: num37,
        avg_resolution: num38,
        avg_minor_resolution: num39,
        avg_major_resolution: num40,
        min_resolution_width: minWidth,
        min_resolution_height: minHeight,
        duration_resolution_under_720: num42,
        duration_resolution_under_480: num44,
        duration_resolution_under_360: num46,
        num_pauses: null,
        duration_paused: Math.round(paused.totalDuration() / 1000),
        duration_zero_receivers: Math.round(zeroReceivers.totalDuration() / 1000),
        duration_video_stopped: Math.round(videoStopped.totalDuration() / 1000),
        duration_hq_simulcast_stream_watched: num47,
        duration_lq_simulcast_stream_watched: num48,
        duration_hq_simulcast_stream_eligible: num49,
        duration_lq_simulcast_stream_eligible: num50,
        num_quality_changes: null,
        duration_window_occluded: num51,
        duration_incoming_video_stopped_for_occlusion: num52,
        num_window_occlusion_changes: self.numWindowOcclusionChanges,
        fps_percentile1: report.percentiles[1],
        fps_percentile5: report.percentiles[5],
        fps_percentile10: report.percentiles[10],
        fps_percentile25: report.percentiles[25],
        fps_percentile50: report.percentiles[50],
        fps_percentile75: report.percentiles[75],
        bitrate_percentile1: report1.percentiles[1],
        bitrate_percentile5: report1.percentiles[5],
        bitrate_percentile10: report1.percentiles[10],
        bitrate_percentile25: report1.percentiles[25],
        bitrate_percentile50: report1.percentiles[50],
        bitrate_percentile75: report1.percentiles[75],
        bitrate_percentile99: report1.percentiles[99],
        resolution_percentile1: report2.percentiles[1],
        resolution_percentile5: report2.percentiles[5],
        resolution_percentile10: report2.percentiles[10],
        resolution_percentile25: report2.percentiles[25],
        resolution_percentile50: report2.percentiles[50],
        resolution_percentile75: report2.percentiles[75],
        inbound_bitrate_estimate_percentile1: report3.percentiles[1],
        inbound_bitrate_estimate_percentile5: report3.percentiles[5],
        inbound_bitrate_estimate_percentile10: report3.percentiles[10],
        inbound_bitrate_estimate_percentile25: report3.percentiles[25],
        inbound_bitrate_estimate_percentile50: report3.percentiles[50],
        inbound_bitrate_estimate_percentile75: report3.percentiles[75],
        inbound_bitrate_estimate_percentile99: report3.percentiles[99],
        local_want_percentile1: report4.percentiles[1],
        local_want_percentile5: report4.percentiles[5],
        local_want_percentile10: report4.percentiles[10],
        local_want_percentile25: report4.percentiles[25],
        local_want_percentile50: report4.percentiles[50],
        local_want_percentile75: report4.percentiles[75],
        local_want_percentile90: report4.percentiles[90],
        local_want_percentile95: report4.percentiles[95],
        average_local_want: report4.mean,
        duration_video_effect: Math.round(videoEffectDuration.totalDuration() / 1000),
        cryptor_max_attempts: aggregationDuration.cryptorMaxAttempts,
        duration_decoder_ffmpeg: num53,
        duration_decoder_dav1d: num54,
        duration_decoder_vp8_libvpx: num55,
        duration_decoder_electron: num56,
        duration_decoder_videotoolbox: num57,
        duration_decoder_uncategorized: num58,
        duration_decoder_unknown: num59,
        duration_decoder_exynos: num60,
        duration_decoder_webrtc: num61,
        duration_decoder_qualcomm: num62,
        duration_decoder_mediatek: num63,
        duration_decoder_d3d11videodecoder: num64,
        duration_decoder_android: num65,
      };
      const _Math2 = Math;
      const _Math3 = Math;
      const videoStoppedDuration = aggregationDuration.videoStoppedDuration;
      const asSecondsResult = videoStoppedDuration.asSeconds();
      num3 = 0;
      if (null != asSecondsResult) {
        const _Math4 = Math;
        num3 = Math.round(asSecondsResult);
      }
      num5 = 0;
      if (null != aggregationDuration.bitrateBuckets[8000000]) {
        const _Math5 = Math;
        num5 = Math.round(tmp10);
      }
      num7 = 0;
      if (null != aggregationDuration.bitrateBuckets[7000000]) {
        const _Math6 = Math;
        num7 = Math.round(tmp11);
      }
      num9 = 0;
      if (null != aggregationDuration.bitrateBuckets[6000000]) {
        const _Math7 = Math;
        num9 = Math.round(tmp12);
      }
      num11 = 0;
      if (null != aggregationDuration.bitrateBuckets[5000000]) {
        const _Math8 = Math;
        num11 = Math.round(tmp13);
      }
      num13 = 0;
      if (null != aggregationDuration.bitrateBuckets[4000000]) {
        const _Math9 = Math;
        num13 = Math.round(tmp14);
      }
      num15 = 0;
      if (null != aggregationDuration.bitrateBuckets[3000000]) {
        const _Math10 = Math;
        num15 = Math.round(tmp15);
      }
      num17 = 0;
      if (null != aggregationDuration.bitrateBuckets[2000000]) {
        const _Math11 = Math;
        num17 = Math.round(tmp16);
      }
      num19 = 0;
      if (null != aggregationDuration.bitrateBuckets[1500000]) {
        const _Math12 = Math;
        num19 = Math.round(tmp17);
      }
      num21 = 0;
      if (null != aggregationDuration.bitrateBuckets[1000000]) {
        const _Math13 = Math;
        num21 = Math.round(tmp18);
      }
      num23 = 0;
      if (null != aggregationDuration.bitrateBuckets[500000]) {
        const _Math14 = Math;
        num23 = Math.round(tmp19);
      }
      const first = aggregationDuration.bitrateBuckets[0];
      num24 = 0;
      if (null != first) {
        const _Math15 = Math;
        num24 = Math.round(first);
      }
      num25 = 0;
      if (null != aggregationDuration.fpsBuckets[60]) {
        const _Math16 = Math;
        num25 = Math.round(tmp21);
      }
      num26 = 0;
      if (null != aggregationDuration.fpsBuckets[55]) {
        const _Math17 = Math;
        num26 = Math.round(tmp22);
      }
      num27 = 0;
      if (null != aggregationDuration.fpsBuckets[50]) {
        const _Math18 = Math;
        num27 = Math.round(tmp23);
      }
      num28 = 0;
      if (null != aggregationDuration.fpsBuckets[45]) {
        const _Math19 = Math;
        num28 = Math.round(tmp24);
      }
      num29 = 0;
      if (null != aggregationDuration.fpsBuckets[40]) {
        const _Math20 = Math;
        num29 = Math.round(tmp25);
      }
      num30 = 0;
      if (null != aggregationDuration.fpsBuckets[35]) {
        const _Math21 = Math;
        num30 = Math.round(tmp26);
      }
      num31 = 0;
      if (null != aggregationDuration.fpsBuckets[30]) {
        const _Math22 = Math;
        num31 = Math.round(tmp27);
      }
      num32 = 0;
      if (null != aggregationDuration.fpsBuckets[25]) {
        const _Math23 = Math;
        num32 = Math.round(tmp28);
      }
      num33 = 0;
      if (null != aggregationDuration.fpsBuckets[20]) {
        const _Math24 = Math;
        num33 = Math.round(tmp29);
      }
      num34 = 0;
      if (null != aggregationDuration.fpsBuckets[15]) {
        const _Math25 = Math;
        num34 = Math.round(tmp30);
      }
      num35 = 0;
      if (null != aggregationDuration.fpsBuckets[10]) {
        const _Math26 = Math;
        num35 = Math.round(tmp31);
      }
      num36 = 0;
      if (null != aggregationDuration.fpsBuckets[5]) {
        const _Math27 = Math;
        num36 = Math.round(tmp32);
      }
      const first1 = aggregationDuration.fpsBuckets[0];
      num37 = 0;
      if (null != first1) {
        const _Math28 = Math;
        num37 = Math.round(first1);
      }
      num38 = 0;
      if (aggregationDuration.intervalTotal > 0) {
        const _Math29 = Math;
        num38 = Math.round(aggregationDuration.resolutionTotal / aggregationDuration.intervalTotal);
      }
      num39 = 0;
      if (aggregationDuration.intervalTotal > 0) {
        const _Math30 = Math;
        num39 = Math.round(aggregationDuration.minorResolutionTotal / aggregationDuration.intervalTotal);
      }
      num40 = 0;
      if (aggregationDuration.intervalTotal > 0) {
        const _Math31 = Math;
        num40 = Math.round(aggregationDuration.majorResolutionTotal / aggregationDuration.intervalTotal);
      }
      minWidth = aggregationDuration.minWidth;
      if (minWidth == null) {
        minWidth = null;
      }
      minHeight = aggregationDuration.minHeight;
      if (minHeight == null) {
        minHeight = null;
      }
      num42 = 0;
      if (null != aggregationDuration.resolutionBuckets[720]) {
        const _Math32 = Math;
        num42 = Math.round(tmp36);
      }
      num44 = 0;
      if (null != aggregationDuration.resolutionBuckets[480]) {
        const _Math33 = Math;
        num44 = Math.round(tmp37);
      }
      num46 = 0;
      if (null != aggregationDuration.resolutionBuckets[360]) {
        const _Math34 = Math;
        num46 = Math.round(tmp38);
      }
      ({ pausedCount: obj.num_pauses, paused } = self);
      const _Math35 = Math;
      zeroReceivers = self.zeroReceivers;
      const _Math36 = Math;
      videoStopped = self.videoStopped;
      const _Math37 = Math;
      const hqSimulcastStreamWatched = self.hqSimulcastStreamWatched;
      const totalDurationSecondsResult = hqSimulcastStreamWatched.totalDurationSeconds();
      num47 = 0;
      if (null != totalDurationSecondsResult) {
        const _Math38 = Math;
        num47 = Math.round(totalDurationSecondsResult);
      }
      const lqSimulcastStreamWatched = self.lqSimulcastStreamWatched;
      const totalDurationSecondsResult1 = lqSimulcastStreamWatched.totalDurationSeconds();
      num48 = 0;
      if (null != totalDurationSecondsResult1) {
        const _Math39 = Math;
        num48 = Math.round(totalDurationSecondsResult1);
      }
      const hqSimulcastStreamEligible = self.hqSimulcastStreamEligible;
      const totalDurationSecondsResult2 = hqSimulcastStreamEligible.totalDurationSeconds();
      num49 = 0;
      if (null != totalDurationSecondsResult2) {
        const _Math40 = Math;
        num49 = Math.round(totalDurationSecondsResult2);
      }
      const lqSimulcastStreamEligible = self.lqSimulcastStreamEligible;
      const totalDurationSecondsResult3 = lqSimulcastStreamEligible.totalDurationSeconds();
      num50 = 0;
      if (null != totalDurationSecondsResult3) {
        const _Math41 = Math;
        num50 = Math.round(totalDurationSecondsResult3);
      }
      ({ simulcastQualityChanges: obj.num_quality_changes, windowOccluded } = self);
      const totalDurationSecondsResult4 = windowOccluded.totalDurationSeconds();
      num51 = 0;
      if (null != totalDurationSecondsResult4) {
        const _Math42 = Math;
        num51 = Math.round(totalDurationSecondsResult4);
      }
      const videoStoppedForOcclusion = self.videoStoppedForOcclusion;
      const totalDurationSecondsResult5 = videoStoppedForOcclusion.totalDurationSeconds();
      num52 = 0;
      if (null != totalDurationSecondsResult5) {
        const _Math43 = Math;
        num52 = Math.round(totalDurationSecondsResult5);
      }
      videoEffectDuration = self.videoEffectDuration;
      const _Math44 = Math;
      const tmp47 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.FFMPEG];
      num53 = 0;
      if (null != tmp47) {
        const _Math45 = Math;
        num53 = Math.round(tmp47);
      }
      const tmp48 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.DAV1D];
      num54 = 0;
      if (null != tmp48) {
        const _Math46 = Math;
        num54 = Math.round(tmp48);
      }
      const tmp49 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.VP8_LIBVPX];
      num55 = 0;
      if (null != tmp49) {
        const _Math47 = Math;
        num55 = Math.round(tmp49);
      }
      const tmp50 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.ELECTRON];
      num56 = 0;
      if (null != tmp50) {
        const _Math48 = Math;
        num56 = Math.round(tmp50);
      }
      const tmp51 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.VIDEOTOOLBOX];
      num57 = 0;
      if (null != tmp51) {
        const _Math49 = Math;
        num57 = Math.round(tmp51);
      }
      const tmp52 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.UNCATEGORIZED];
      num58 = 0;
      if (null != tmp52) {
        const _Math50 = Math;
        num58 = Math.round(tmp52);
      }
      const tmp53 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.UNKNOWN];
      num59 = 0;
      if (null != tmp53) {
        const _Math51 = Math;
        num59 = Math.round(tmp53);
      }
      const tmp54 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.EXYNOS];
      num60 = 0;
      if (null != tmp54) {
        const _Math52 = Math;
        num60 = Math.round(tmp54);
      }
      const tmp55 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.WEBRTC];
      num61 = 0;
      if (null != tmp55) {
        const _Math53 = Math;
        num61 = Math.round(tmp55);
      }
      const tmp56 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.QUALCOMM];
      num62 = 0;
      if (null != tmp56) {
        const _Math54 = Math;
        num62 = Math.round(tmp56);
      }
      const tmp57 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.MEDIATEK];
      num63 = 0;
      if (null != tmp57) {
        const _Math55 = Math;
        num63 = Math.round(tmp57);
      }
      const tmp58 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.D3D11VIDEODECODER];
      num64 = 0;
      if (null != tmp58) {
        const _Math56 = Math;
        num64 = Math.round(tmp58);
      }
      const tmp59 = aggregationDuration.decoderBuckets[VideoQualityStats.Decoders.ANDROID];
      num65 = 0;
      if (null != tmp59) {
        const _Math57 = Math;
        num65 = Math.round(tmp59);
      }
      const merged = Object.assign(stats);
      const aggregatedProperties = aggregationDuration.aggregatedProperties;
      ({
        bytes,
        framesDropped,
        networkFramesDropped,
        framesCodec,
        freezeCount,
        totalFreezesDuration,
        totalFramesDuration,
        cryptorFailureCount,
      } = aggregatedProperties);
      let num66 = cryptorFailureCount;
      ({
        framesCodecError,
        framesNetwork,
        packets,
        packetsLost,
        nackCount,
        pliCount,
        qpSum,
        pauseCount,
        totalPausesDuration,
        totalDecodeTime,
        keyframes,
        passthroughCount,
        cryptorSuccessCount,
        cryptorDuration,
        cryptorAttempts,
        cryptorMissingKeyCount,
        cryptorInvalidNonceCount,
        qualityDecodeErrors,
        qualityDecoderReboots,
        qualityScoreErrors,
        qualityFrameDrops,
        qualitySizeMismatches,
      } = aggregatedProperties);
      if (cryptorFailureCount == null) {
        num66 = 0;
      }
      let num67 = aggregationDuration.cryptorFailureBeforeSuccessCount;
      if (num67 == null) {
        num67 = 0;
      }
      const diff1 = num66 - num67;
      if (aggregationDuration instanceof VideoQualityStats.OutboundStats) {
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
        const tmp45Result = PlatformUtils;
        if (!tmp45Result.isWeb()) {
          obj.frames_dropped_render = framesDropped;
        }
      }
      const obj2 = {
        avg_bitrate: num68,
        avg_fps: num71,
        num_bytes: bytes,
        num_packets_lost: packetsLost,
        num_packets: packets,
        num_frames: framesNetwork,
        num_frames_codec_error: framesCodecError,
        time_to_first_frame_ms: aggregationDuration.timeToFirstFrame,
        num_frames_dropped: framesDropped + networkFramesDropped,
        num_nacks: nackCount,
        num_plis: pliCount,
        qp_sum: qpSum,
        num_keyframes: keyframes,
        cryptor_passthrough_count: passthroughCount,
        cryptor_success_count: cryptorSuccessCount,
        cryptor_failure_count: cryptorFailureCount,
        cryptor_duration: cryptorDuration,
        cryptor_attempts: cryptorAttempts,
        cryptor_missing_key_count: cryptorMissingKeyCount,
        cryptor_invalid_nonce_count: cryptorInvalidNonceCount,
        cryptor_failure_after_success_count: diff1,
        encoder_quality_decode_errors: qualityDecodeErrors,
        encoder_quality_decoder_reboots: qualityDecoderReboots,
        encoder_quality_score_errors: qualityScoreErrors,
        encoder_quality_frame_drops: qualityFrameDrops,
        encoder_quality_size_mismatches: qualitySizeMismatches,
      };
      const merged1 = Object.assign(obj);
      num68 = 0;
      if (0 < result) {
        let num69 = bytes;
        const _Math58 = Math;
        round = Math.round;
        if (bytes == null) {
          num69 = 0;
        }
        num68 = round((8 * num69) / result);
      }
      num71 = 0;
      if (0 < result) {
        const _Math59 = Math;
        const round2 = Math.round;
        if (framesCodec == null) {
          framesCodec = 0;
        }
        num71 = round2(framesCodec / result);
      }
      return obj2;
    }
  }
  receivedStats(nowResult, transport, streamParameters) {
    let videoEntropy;
    let self = this;
    importDefault = nowResult;
    dependencyMap = transport;
    VideoBackgroundStore = streamParameters;
    transport = transport.transport;
    let tmp = videoEntropy;
    let obj = videoEntropy(1369);
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
    set = new Set();
    const set1 = new Set();
    self.updateSendState({ receivers: num });
    let value = self.cameraDuration.value;
    const cameraDuration = self.cameraDuration;
    cameraDuration.value =
      self.connection.context === tmp(4945).MediaEngineContextTypes.DEFAULT && null != transport.camera;
    const cameraOpportunityDuration = self.cameraOpportunityDuration;
    const tmp7 = self.connection.context === tmp(4945).MediaEngineContextTypes.DEFAULT && null != transport.camera;
    let tmp9 = self.connection.context === tmp(4945).MediaEngineContextTypes.DEFAULT;
    if (tmp9) {
      let tmp10 = null;
      tmp9 = null != transport.camera;
    }
    if (tmp9) {
      tmp9 = self.callUserIdsCount > 1;
    }
    cameraOpportunityDuration.value = tmp9;
    const cameraSendDuration = self.cameraSendDuration;
    let tmp11 = self.connection.context === tmp(4945).MediaEngineContextTypes.DEFAULT && null != transport.camera;
    if (tmp11) {
      tmp11 = num > 0;
    }
    cameraSendDuration.value = tmp11;
    let tmp13 = self.cameraDuration.value && !value;
    if (tmp13) {
      self.cameraToggles = self.cameraToggles + 1;
    }
    const videoBackgroundEnabledDuration = self.videoBackgroundEnabledDuration;
    let liveBackgroundEnabled = self.connection.context === tmp(4945).MediaEngineContextTypes.DEFAULT;
    if (liveBackgroundEnabled) {
      liveBackgroundEnabled = null != transport.camera;
    }
    if (liveBackgroundEnabled) {
      let tmp15 = VideoBackgroundStore;
      liveBackgroundEnabled = VideoBackgroundStore.liveBackgroundEnabled;
    }
    videoBackgroundEnabledDuration.value = liveBackgroundEnabled;
    let tmp16 = importDefault;
    const obj2 = _modDef12;
    let closure_7 = obj2.max(streamParameters.map((quality) => quality.quality));
    const outbound = transport.rtp.outbound;
    const first = outbound.filter((type) => {
      let tmp = "video" === type.type;
      if (tmp) {
        videoEntropy = undefined;
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
    const item = found.forEach(function (ssrc) {
      if (null != ssrc) {
        ssrc = ssrc.ssrc;
        let obj = self.outboundStats[ssrc];
        if (null == obj) {
          self = this;
          const self2 = this;
          const outboundStats = new VideoQualityStats.OutboundStats(tmp60.timestampProducer);
          self.outboundStats[ssrc] = outboundStats;
          obj = outboundStats;
        }
        let tmp5 = null == obj.timeToFirstFrame;
        if (tmp5) {
          let tmp6 = ssrc.framesEncoded > 0;
          if (!tmp6) {
            let num2 = ssrc.frameRateInput;
            if (num2 == null) {
              num2 = 0;
            }
            tmp6 = num2 > 0;
          }
          tmp5 = tmp6;
        }
        if (tmp5) {
          const _Math = Math;
          obj.timeToFirstFrame = Math.max(0, importDefault - obj.startTime);
        }
        const tmp10 = null != videoEntropy && tmp9 >= 0;
        if (tmp10) {
          videoEntropy = tmp60.videoEntropy;
          videoEntropy.addSample(videoEntropy);
        }
        const found = streamParameters.find((ssrc) => ssrc.ssrc === ssrc);
        let flag = true;
        if (self.connection.context === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
          const connection = tmp60.connection;
          let num5 = connection.getRemoteVideoSinkWants(ssrc);
          let tmp16 = null != num5 && 0 !== num5;
          if (!tmp16) {
            let quality;
            if (found != null) {
              quality = found.quality;
            }
            tmp16 = quality !== closure_7;
          }
          if (!tmp16) {
            const connection2 = tmp60.connection;
            num5 = connection2.getRemoteVideoSinkWants("any");
          }
          if (num5 == null) {
            num5 = 0;
          }
          flag = num5 > 0;
        }
        if ((self.videoStopped.value || !flag) !== obj.isVideoStopped) {
          obj.setVideoStopped(self.videoStopped.value || !flag, VideoQualityStats.VideoStoppedReasons.SenderStopped);
        }
        if (!(self.videoStopped.value || !flag)) {
          const RawVideoStats = VideoQualityStats.RawVideoStats;
          const parseOutboundStatsResult = RawVideoStats.parseOutboundStats(ssrc, importDefault);
          if (self.connection.context === BaseConnectionEvent.MediaEngineContextTypes.STREAM) {
            const screenshare = transport.screenshare;
            let framesCodec = parseOutboundStatsResult.framesCodec;
            if (null != screenshare) {
              if (null == screenshare.hybridDxgiFramesUnique) {
                if (null == screenshare.hybridGdiBitBltFramesUnique) {
                  if (null == screenshare.hybridGdiPrintWindowFramesUnique) {
                    if (null == screenshare.hybridVideohookFramesUnique) {
                      let sum4;
                      if (null == screenshare.hybridGraphicsCaptureFramesUnique) {
                        let num8 = screenshare.screenshareFrames;
                        if (num8 == null) {
                          num8 = 0;
                        }
                        let num9 = screenshare.videohookFrames;
                        if (num9 == null) {
                          num9 = 0;
                        }
                        let num10 = screenshare.quartzFrames;
                        const sum = num8 + num9;
                        if (num10 == null) {
                          num10 = 0;
                        }
                        let num11 = screenshare.screenCaptureKitFrames;
                        const sum1 = sum + num10;
                        if (num11 == null) {
                          num11 = 0;
                        }
                        let num12 = screenshare.x11Frames;
                        const sum2 = sum1 + num11;
                        if (num12 == null) {
                          num12 = 0;
                        }
                        let num13 = screenshare.pipewireFrames;
                        const sum3 = sum2 + num12;
                        if (num13 == null) {
                          num13 = 0;
                        }
                        sum4 = sum3 + num13;
                      }
                      framesCodec = sum4;
                    }
                  }
                }
              }
              let num14 = screenshare.hybridDxgiFramesUnique;
              if (num14 == null) {
                num14 = 0;
              }
              let num15 = screenshare.hybridGdiBitBltFramesUnique;
              if (num15 == null) {
                num15 = 0;
              }
              let num16 = screenshare.hybridGdiPrintWindowFramesUnique;
              const sum5 = num14 + num15;
              if (num16 == null) {
                num16 = 0;
              }
              let num17 = screenshare.hybridVideohookFramesUnique;
              const sum6 = sum5 + num16;
              if (num17 == null) {
                num17 = 0;
              }
              let num18 = screenshare.hybridGraphicsCaptureFramesUnique;
              const sum7 = sum6 + num17;
              if (num18 == null) {
                num18 = 0;
              }
              sum4 = sum7 + num18;
            }
            parseOutboundStatsResult.screenshareFramesUnique = framesCodec;
          }
          const result = obj.appendAndIncrementStats(parseOutboundStatsResult);
          let tmp38 = null != ssrc.minResolutionWidth && ssrc.minResolutionWidth > 0;
          if (tmp38) {
            tmp38 = null == obj.minWidth || ssrc.minResolutionWidth < obj.minWidth;
          }
          if (tmp38) {
            obj.minWidth = ssrc.minResolutionWidth;
          }
          let tmp40 = null != ssrc.minResolutionHeight && ssrc.minResolutionHeight > 0;
          if (tmp40) {
            tmp40 = null == obj.minHeight || ssrc.minResolutionHeight < obj.minHeight;
          }
          if (tmp40) {
            obj.minHeight = ssrc.minResolutionHeight;
          }
          if (obj.encoderCodec !== VideoQualityStats.CodecTypes.UNKNOWN) {
            set.add(obj.encoderCodec);
          }
          let maxBitrate;
          if (found != null) {
            maxBitrate = found.maxBitrate;
          }
          let maxFrameRate;
          const appendTargetRates = obj.appendTargetRates;
          if (found != null) {
            maxFrameRate = found.maxFrameRate;
          }
          let bitrateTarget = ssrc.bitrateTarget;
          if (bitrateTarget == null) {
            let num21 = transport.availableOutgoingBitrate;
            const _Math2 = Math;
            if (num21 == null) {
              num21 = 0;
            }
            let num22 = maxBitrate;
            if (maxBitrate == null) {
              num22 = 0;
            }
            bitrateTarget = min(num21, num22);
          }
          appendTargetRates(maxFrameRate, bitrateTarget, maxBitrate, transport.availableOutgoingBitrate);
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
          const hqSimulcastStreamEncoded = tmp60.hqSimulcastStreamEncoded;
          if (flag2 == null) {
            flag2 = false;
          }
          hqSimulcastStreamEncoded.value = flag2;
          let flag3 = ssrc.lqSimulcastStreamEncoded;
          const lqSimulcastStreamEncoded = tmp60.lqSimulcastStreamEncoded;
          if (flag3 == null) {
            flag3 = false;
          }
          lqSimulcastStreamEncoded.value = flag3;
          let value = tmp60.hqSimulcastStreamEncoded.value;
          const bothSimulcastStreamsEncoded = tmp60.bothSimulcastStreamsEncoded;
          if (value) {
            value = tmp60.lqSimulcastStreamEncoded.value;
          }
          bothSimulcastStreamsEncoded.value = value;
          let flag4 = ssrc.bandwidthLimitedResolution;
          const bandwidthLimitedResolution = tmp60.bandwidthLimitedResolution;
          if (flag4 == null) {
            flag4 = false;
          }
          bandwidthLimitedResolution.value = flag4;
          let flag5 = ssrc.bandwidthLimitedFrameRate;
          const bandwidthLimitedFramerate = tmp60.bandwidthLimitedFramerate;
          if (flag5 == null) {
            flag5 = false;
          }
          bandwidthLimitedFramerate.value = flag5;
        }
      }
    });
    if (!self.paused.value) {
      const tmp16Result = _modDef12;
      const item1 = tmp16Result.forEach(transport.rtp.inbound, function (arr, arg1) {
        const found = arr.find((type) => "video" === type.type);
        if (null != found) {
          let obj = self.inboundStats[arg1];
          if (null == obj) {
            self = this;
            const self2 = this;
            const inboundStats = new VideoQualityStats.InboundStats(obj2.timestampProducer);
            self.inboundStats[arg1] = inboundStats;
            obj = inboundStats;
          }
          const RawVideoStats = VideoQualityStats.RawVideoStats;
          const parseInboundStatsResult = RawVideoStats.parseInboundStats(found, importDefault);
          const statCollectionPausedUsers = obj2.statCollectionPausedUsers;
          if (!statCollectionPausedUsers.has(arg1)) {
            const result = obj.appendAndIncrementStats(parseInboundStatsResult);
            obj.appendTransportStats(transport);
          }
          let tmp13 = null != found.minResolutionWidth && found.minResolutionWidth > 0;
          if (tmp13) {
            tmp13 = null == obj.minWidth || found.minResolutionWidth < obj.minWidth;
          }
          if (tmp13) {
            obj.minWidth = found.minResolutionWidth;
          }
          let tmp15 = null != found.minResolutionHeight && found.minResolutionHeight > 0;
          if (tmp15) {
            tmp15 = null == obj.minHeight || found.minResolutionHeight < obj.minHeight;
          }
          if (tmp15) {
            obj.minHeight = found.minResolutionHeight;
          }
          if (parseInboundStatsResult.packets > 0) {
            self.emit(obj.FpsUpdate, arg1, parseInboundStatsResult.framesCodec, parseInboundStatsResult.timestamp);
          }
          if (obj.decoderCodec !== VideoQualityStats.CodecTypes.UNKNOWN) {
            set1.add(obj.decoderCodec);
          }
          const tmp25 = null == obj.timeToFirstFrame && found.framesDecoded > 0;
          if (tmp25) {
            obj.timeToFirstFrame = importDefault - obj.startTime;
          }
        }
      });
    }
    const tmp21 = 0 !== set.size && 0 !== set1.size;
    if (tmp21) {
      const tmpResult = tmp(2069);
      if (tmpResult.areSetsEqual(set, set1)) {
        self.symmetricCodecUpdates = self.symmetricCodecUpdates + 1;
      } else {
        self.asymmetricCodecUpdates = self.asymmetricCodecUpdates + 1;
      }
    }
  }
  updateSystemResourceStats() {
    const self = this;
    for (const key10003 in this.outboundStats) {
      let obj = self.outboundStats[key10003];
      let addSystemResourcesResult = obj.addSystemResources();
      continue;
    }
    for (const key10006 in self.inboundStats) {
      let obj2 = self.inboundStats[key10006];
      let addSystemResourcesResult1 = obj2.addSystemResources();
      continue;
    }
  }
  updateVideoEffectStats(rtp) {
    let found;
    if (rtp != null) {
      const outbound = rtp.rtp.outbound;
      found = outbound.find((type) => "video" === type.type);
    }
    let type;
    const videoEffectDuration = this.videoEffectDuration;
    if (found != null) {
      type = found.type;
    }
    videoEffectDuration.value = "video" === type && null != found.filter;
  }
}
const prototype = VideoQuality.prototype;
let result = size.fileFinishedImporting("lib/VideoQuality.tsx");

export { VideoQualityEvent };
export { VideoQuality };
