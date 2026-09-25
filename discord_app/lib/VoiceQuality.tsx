// discord_app/lib/VoiceQuality.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import BaseConnectionEvent from "../../discord_common/js/packages/media-engine/index.tsx";
import Histogram from "Histogram.tsx";
import SystemResourcesDefault from "SystemResources.tsx";
import NetworkQualityDefault from "NetworkQuality.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import TypedEventEmitter from "../../discord_common/js/shared/utils/TypedEventEmitter.tsx";

require = fn;
function explodePlayoutMetrics(obj) {
  obj = {};
  for (const key10012 in arg0) {
    let obj2 = arg0[key10012];
    if (obj2 instanceof Histogram.Histogram) {
      let report = obj2.getReport([75, 95, 99]);
      let _Math = Math;
      let text = `${key10012}_mean`;
      obj[`${key10012}_mean`] = Math.round(report.mean);
      let _Math2 = Math;
      let text1 = `${key10012}_p75`;
      obj[`${key10012}_p75`] = Math.round(report.percentiles[75]);
      let _Math3 = Math;
      let text2 = `${key10012}_p95`;
      obj[`${key10012}_p95`] = Math.round(report.percentiles[95]);
      let _Math4 = Math;
      let text3 = `${key10012}_p99`;
      obj[`${key10012}_p99`] = Math.round(report.percentiles[99]);
      let _Math5 = Math;
      let text4 = `${key10012}_max`;
      obj[`${key10012}_max`] = Math.round(report.max);
      continue;
    } else {
      let num = 0;
      let text5 = `${key10012}_mean`;
      if (null != obj2) {
        num = obj2.mean;
      }
      obj[text5] = num;
      let num2 = 0;
      let text6 = `${key10012}_p75`;
      if (null != obj2) {
        num2 = obj2.p75;
      }
      obj[text6] = num2;
      let num3 = 0;
      let text7 = `${key10012}_p95`;
      if (null != obj2) {
        num3 = obj2.p95;
      }
      obj[text7] = num3;
      let num4 = 0;
      let text8 = `${key10012}_p99`;
      if (null != obj2) {
        num4 = obj2.p99;
      }
      obj[text8] = num4;
      let num5 = 0;
      let text9 = `${key10012}_max`;
      if (null != obj2) {
        num5 = obj2.max;
      }
      obj[text9] = num5;
      continue;
    }
    continue;
  }
  return obj;
}
const VoiceQualityEvent = { InputDeviceSampleRateChanged: "input-device-sample-rate-changed" };
class VoiceQuality extends tmp2 {
  constructor(arg0) {
    tmp3 = new VoiceQuality(tmp2, tmp);
    closure_0 = tmp3;
    tmp3.sampleAudioDevice = function sampleAudioDevice(input, inputDeviceStats) {
      if (undefined !== input) {
        if (undefined === input.restartCount) {
          if (undefined === input.bufferViolations) {
            let num = input.timeToFirstCallbackMs;
            if (num == null) {
              num = 0;
            }
            if (tmp6) {
              inputDeviceStats.timeToFirstCallbackMs = input.timeToFirstCallbackMs;
            }
            let num3 = input.sessionSampleRate;
            if (num3 == null) {
              num3 = 0;
            }
            if (0 !== num3) {
              if (inputDeviceStats.sessionSampleRate !== input.sessionSampleRate) {
                let num4 = input.sessionSampleRate;
                if (num4 == null) {
                  num4 = 0;
                }
                closure_0.emit(obj.InputDeviceSampleRateChanged, num4);
              }
              inputDeviceStats.sessionSampleRate = input.sessionSampleRate;
            }
            if (tmp10) {
              inputDeviceStats.timeFromConnectToFirstCallbackMs = input.timeFromConnectToFirstCallbackMs;
            }
            tmp10 =
              undefined !== input.timeFromConnectToFirstCallbackMs &&
              undefined === inputDeviceStats.timeFromConnectToFirstCallbackMs;
            tmp6 = 0 !== num && undefined === inputDeviceStats.timeToFirstCallbackMs;
          } else {
            const bufferViolations = input.bufferViolations;
            let bufferViolations1 = inputDeviceStats.bufferViolations;
            if (bufferViolations1 == null) {
              bufferViolations1 = { accumulated: 0, lastValue: 0 };
            }
            ({ accumulated: accumulated2, lastValue: lastValue2 } = bufferViolations1);
            if (lastValue2 > bufferViolations) {
              let sum = accumulated2 + bufferViolations;
            } else {
              sum = accumulated2 + (bufferViolations - lastValue2);
            }
            accumulated2 = { accumulated: sum, lastValue: bufferViolations };
            inputDeviceStats.bufferViolations = accumulated2;
          }
        } else {
          const restartCount = input.restartCount;
          let restartCount1 = inputDeviceStats.restartCount;
          if (restartCount1 == null) {
            restartCount1 = { accumulated: 0, lastValue: 0 };
          }
          ({ accumulated, lastValue } = restartCount1);
          if (lastValue > restartCount) {
            let sum1 = accumulated + restartCount;
          } else {
            sum1 = accumulated + (restartCount - lastValue);
          }
          accumulated = { accumulated: sum1, lastValue: restartCount };
          inputDeviceStats.restartCount = accumulated;
        }
      }
    };
    tmp3.appendTargetRates = function appendTargetRates(previousTimestampMs) {
      let num = arg1;
      if (arg1 === undefined) {
        num = 0;
      }
      let num2 = arg2;
      if (arg2 === undefined) {
        num2 = 0;
      }
      if (0 !== previousTimestampMs.previousTimestampMs) {
        const _performance2 = performance;
        const nowResult = performance.now();
        previousTimestampMs.aggregationDurationMs =
          previousTimestampMs.aggregationDurationMs + (nowResult - previousTimestampMs.previousTimestampMs);
        const result = (nowResult - previousTimestampMs.previousTimestampMs) / 1000;
        previousTimestampMs.bytesAvailable = previousTimestampMs.bytesAvailable + (num / 8) * result;
        previousTimestampMs.bytesTarget = previousTimestampMs.bytesTarget + (num2 / 8) * result;
        previousTimestampMs.previousTimestampMs = nowResult;
      } else {
        const _performance = performance;
        previousTimestampMs.previousTimestampMs = performance.now();
      }
    };
    tmp3.sampleStats = function sampleStats(rtp) {
      if (null != rtp) {
        const networkQuality = num.networkQuality;
        const result = networkQuality.incrementNetworkStats(num(4858).now());
        const systemResources = num.systemResources;
        systemResources.takeSample();
        num = 0;
        const obj2 = num(4858);
        let item = _modDef12.forEach(rtp.rtp.outbound, (type) => {
          if ("audio" === type.type) {
            num = type.bitrateTarget;
            if (num == null) {
              num = 0;
            }
            const outboundStats = {};
            const merged = Object.assign(num.outboundStats);
            ({ packetsSent: obj.packetsSent, bytesSent: obj.bytesSent, packetsLost } = type);
            if (packetsLost == null) {
              packetsLost = 0;
            }
            outboundStats.packetsLost = packetsLost;
            let num2 = type.passthroughCount;
            if (num2 == null) {
              num2 = 0;
            }
            outboundStats.passthroughCount = num2;
            let num3 = type.encryptSuccessCount;
            if (num3 == null) {
              num3 = 0;
            }
            outboundStats.encryptSuccessCount = num3;
            let num4 = type.encryptFailureCount;
            if (num4 == null) {
              num4 = 0;
            }
            outboundStats.encryptFailureCount = num4;
            let num5 = type.encryptDuration;
            if (num5 == null) {
              num5 = 0;
            }
            outboundStats.encryptDuration = num5;
            let num6 = type.encryptAttempts;
            if (num6 == null) {
              num6 = 0;
            }
            outboundStats.encryptAttempts = num6;
            let num7 = type.encryptMaxAttempts;
            if (num7 == null) {
              num7 = 0;
            }
            outboundStats.encryptMaxAttempts = num7;
            let num8 = type.encryptMissingKeyCount;
            if (num8 == null) {
              num8 = 0;
            }
            outboundStats.encryptMissingKeyCount = num8;
            num.outboundStats = outboundStats;
            const _Boolean = Boolean;
            if (tmp5) {
              const speakingAudioLevel = tmp.outboundStats.speakingAudioLevel;
              const _Math = Math;
              speakingAudioLevel.addSample(20 * Math.log(type.audioLevel));
            }
            tmp5 = true === Boolean(type.audioDetected) && null != type.audioLevel;
          }
        });
        num.decryptionFailures = rtp.transport.decryptionFailures;
        num.routingFailures = rtp.transport.routingFailures;
        num.appendTargetRates(num.outboundStats, rtp.transport.availableOutgoingBitrate, num);
        const item1 = _modDef12.forEach(rtp.rtp.inbound, (arg0, arg1) => {
          closure_0 = arg1;
          const item = closure_1_1(dependencyMap[6]).forEach(arg0, (type) => {
            if ("audio" === type.type) {
              ({ packetsReceived, packetsLost, bytesReceived, nackCount, fecPacketsReceived } = type);
              if (fecPacketsReceived == null) {
                fecPacketsReceived = 0;
              }
              num = type.fecPacketsDiscarded;
              if (num == null) {
                num = 0;
              }
              const bufferStats = {
                audioJitterBuffer: type.audioJitterBuffer,
                audioJitterBufferHistogram: null,
                audioJitterTarget: null,
                audioJitterTargetHistogram: null,
                audioJitterDelay: null,
                audioJitterDelayHistogram: null,
                relativeReceptionDelay: null,
                relativePlayoutDelay: null,
              };
              let prop;
              if (num.inboundStats[closure_0] != null) {
                prop = tmp29.bufferStats.audioJitterBufferHistogram;
              }
              if (prop == null) {
                prop = new closure_0(7156).Histogram();
              }
              bufferStats.audioJitterBufferHistogram = prop;
              bufferStats.audioJitterTarget = type.audioJitterTarget;
              let prop1;
              if (num.inboundStats[closure_0] != null) {
                prop1 = tmp29.bufferStats.audioJitterTargetHistogram;
              }
              if (prop1 == null) {
                prop1 = new closure_0(7156).Histogram();
              }
              bufferStats.audioJitterTargetHistogram = prop1;
              bufferStats.audioJitterDelay = type.audioJitterDelay;
              let prop2;
              if (num.inboundStats[closure_0] != null) {
                prop2 = tmp29.bufferStats.audioJitterDelayHistogram;
              }
              if (prop2 == null) {
                prop2 = new closure_0(7156).Histogram();
              }
              bufferStats.audioJitterDelayHistogram = prop2;
              ({ relativeReceptionDelay: obj.relativeReceptionDelay, relativePlayoutDelay: obj.relativePlayoutDelay } =
                type);
              const audioJitterBufferHistogram = bufferStats.audioJitterBufferHistogram;
              let prop3 = type.audioJitterBufferSamples;
              if (prop3 == null) {
                prop3 = [];
              }
              audioJitterBufferHistogram.addSamples(prop3);
              const audioJitterDelayHistogram = bufferStats.audioJitterDelayHistogram;
              let prop4 = type.audioJitterDelaySamples;
              if (prop4 == null) {
                prop4 = [];
              }
              audioJitterDelayHistogram.addSamples(prop4);
              const audioJitterTargetHistogram = bufferStats.audioJitterTargetHistogram;
              let prop5 = type.audioJitterTargetSamples;
              if (prop5 == null) {
                prop5 = [];
              }
              audioJitterTargetHistogram.addSamples(prop5);
              const obj3 = {
                silent: null,
                normal: null,
                merged: null,
                expanded: null,
                accelerated: null,
                preemptiveExpanded: null,
                cng: null,
              };
              ({
                opSilence: obj2.silent,
                opNormal: obj2.normal,
                opMerge: obj2.merged,
                opExpand: obj2.expanded,
                opAccelerate: obj2.accelerated,
                opPreemptiveExpand: obj2.preemptiveExpanded,
                opCNG: obj2.cng,
                passthroughCount,
              } = type);
              if (passthroughCount == null) {
                passthroughCount = 0;
              }
              const obj4 = {
                passthroughCount,
                decryptSuccessCount: null,
                decryptFailureCount: null,
                decryptDuration: null,
                decryptAttempts: null,
                decryptMissingKeyCount: null,
                decryptInvalidNonceCount: null,
              };
              let num2 = type.decryptSuccessCount;
              if (num2 == null) {
                num2 = 0;
              }
              obj4.decryptSuccessCount = num2;
              let num3 = type.decryptFailureCount;
              if (num3 == null) {
                num3 = 0;
              }
              obj4.decryptFailureCount = num3;
              let num4 = type.decryptDuration;
              if (num4 == null) {
                num4 = 0;
              }
              obj4.decryptDuration = num4;
              let num5 = type.decryptAttempts;
              if (num5 == null) {
                num5 = 0;
              }
              obj4.decryptAttempts = num5;
              let num6 = type.decryptMissingKeyCount;
              if (num6 == null) {
                num6 = 0;
              }
              obj4.decryptMissingKeyCount = num6;
              let num7 = type.decryptInvalidNonceCount;
              if (num7 == null) {
                num7 = 0;
              }
              obj4.decryptInvalidNonceCount = num7;
              if (null != num.inboundStats[closure_0]) {
                let decryptFailureBeforeSuccessCount = tmp29.decryptFailureBeforeSuccessCount;
                if (decryptFailureBeforeSuccessCount == null) {
                  let decryptFailureCount;
                  if (obj4.decryptSuccessCount > 0) {
                    decryptFailureCount = obj4.decryptFailureCount;
                  }
                  decryptFailureBeforeSuccessCount = decryptFailureCount;
                }
                const obj5 = {
                  connectedAtMs: tmp29.connectedAtMs,
                  packetsReceived,
                  bytesReceived,
                  packetsLost,
                  nackCount: null,
                  fecPacketsReceived: null,
                  fecPacketsDiscarded: null,
                  bufferStats: null,
                  frameOpStats: null,
                  decryptFailureBeforeSuccessCount: null,
                };
                if (nackCount == null) {
                  nackCount = 0;
                }
                obj5.nackCount = nackCount;
                obj5.fecPacketsReceived = fecPacketsReceived;
                obj5.fecPacketsDiscarded = num;
                obj5.bufferStats = bufferStats;
                obj5.frameOpStats = obj3;
                obj5.decryptFailureBeforeSuccessCount = decryptFailureBeforeSuccessCount;
                const merged = Object.assign(obj4);
                tmp27.inboundStats[closure_0] = obj5;
                const obj6 = {
                  previousTimestampMs: tmp27.periodicInboundStats[closure_0].previousTimestampMs,
                  previous: tmp27.periodicInboundStats[closure_0].previous,
                  currentTimestampMs: null,
                  current: null,
                  accelerateRateSum: null,
                  expandRateSum: null,
                  preemptiveExpandRateSum: null,
                  speechExpandRateSum: null,
                  numRateSamples: null,
                };
                const _performance3 = performance;
                obj6.currentTimestampMs = performance.now();
                obj6.current = obj3;
                let num14 = type.accelerateRate;
                if (num14 == null) {
                  num14 = 0;
                }
                obj6.accelerateRateSum = tmp27.periodicInboundStats[closure_0].accelerateRateSum + num14;
                let num15 = type.expandRate;
                if (num15 == null) {
                  num15 = 0;
                }
                obj6.expandRateSum = tmp27.periodicInboundStats[closure_0].expandRateSum + num15;
                let num16 = type.preemptiveExpandRate;
                if (num16 == null) {
                  num16 = 0;
                }
                obj6.preemptiveExpandRateSum = tmp27.periodicInboundStats[closure_0].preemptiveExpandRateSum + num16;
                let num17 = type.speechExpandRate;
                if (num17 == null) {
                  num17 = 0;
                }
                obj6.speechExpandRateSum = tmp27.periodicInboundStats[closure_0].speechExpandRateSum + num17;
                obj6.numRateSamples = tmp27.periodicInboundStats[closure_0].numRateSamples + 1;
                tmp27.periodicInboundStats[closure_0] = obj6;
              } else {
                const obj7 = {
                  connectedAtMs: null,
                  packetsReceived: null,
                  bytesReceived: null,
                  packetsLost: null,
                  nackCount: null,
                  fecPacketsReceived: null,
                  fecPacketsDiscarded: null,
                  bufferStats: null,
                  frameOpStats: null,
                };
                const _performance4 = performance;
                obj7.connectedAtMs = performance.now();
                obj7.packetsReceived = packetsReceived;
                obj7.bytesReceived = bytesReceived;
                obj7.packetsLost = packetsLost;
                let num8 = nackCount;
                if (nackCount == null) {
                  num8 = 0;
                }
                obj7.nackCount = num8;
                obj7.fecPacketsReceived = fecPacketsReceived;
                obj7.fecPacketsDiscarded = num;
                obj7.bufferStats = bufferStats;
                obj7.frameOpStats = obj3;
                const merged1 = Object.assign(obj4);
                tmp27.inboundStats[closure_0] = obj7;
                const obj13 = {
                  previousTimestampMs: null,
                  previous: null,
                  currentTimestampMs: null,
                  current: null,
                  accelerateRateSum: null,
                  expandRateSum: null,
                  preemptiveExpandRateSum: null,
                  speechExpandRateSum: null,
                  numRateSamples: 1,
                };
                const _performance = performance;
                obj13.previousTimestampMs = performance.now();
                obj13.previous = obj3;
                const _performance2 = performance;
                obj13.currentTimestampMs = performance.now();
                obj13.current = obj3;
                let num9 = type.accelerateRate;
                if (num9 == null) {
                  num9 = 0;
                }
                obj13.accelerateRateSum = num9;
                let num10 = type.expandRate;
                if (num10 == null) {
                  num10 = 0;
                }
                obj13.expandRateSum = num10;
                let num11 = type.preemptiveExpandRate;
                if (num11 == null) {
                  num11 = 0;
                }
                obj13.preemptiveExpandRateSum = num11;
                let num12 = type.speechExpandRate;
                if (num12 == null) {
                  num12 = 0;
                }
                obj13.speechExpandRateSum = num12;
                tmp27.periodicInboundStats[closure_0] = obj13;
              }
            }
          });
        });
        if (undefined !== rtp.audioDevice) {
          obj.sampleAudioDevice(rtp.audioDevice.input, obj.inputDeviceStats);
          obj.sampleAudioDevice(rtp.audioDevice.output, obj.outputDeviceStats);
        }
      }
    };
    tmp3.connection = global;
    tmp4 = new closure_1(closure_2[3])();
    tmp3.networkQuality = tmp4;
    tmp5 = new closure_1(closure_2[4])();
    tmp3.systemResources = tmp5;
    tmp3.inboundStats = {};
    obj = {
      packetsSent: 0,
      bytesSent: 0,
      packetsLost: 0,
      passthroughCount: 0,
      encryptSuccessCount: 0,
      encryptFailureCount: 0,
      encryptDuration: 0,
      encryptAttempts: 0,
      encryptMaxAttempts: 0,
      encryptMissingKeyCount: 0,
      bytesAvailable: 0,
      bytesTarget: 0,
      previousTimestampMs: 0,
      aggregationDurationMs: 0,
      speakingAudioLevel: null,
    };
    histogram = new closure_0(closure_2[1]).Histogram();
    obj.speakingAudioLevel = histogram;
    tmp3.outboundStats = obj;
    tmp3.periodicInboundStats = {};
    tmp3.inputDeviceStats = {};
    tmp3.outputDeviceStats = {};
    return tmp3;
  }
}
const prototype = VoiceQuality.prototype;
prototype["start"] = function start() {
  const connection = this.connection;
  connection.on(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
};
prototype["stop"] = function stop() {
  const connection = this.connection;
  connection.off(BaseConnectionEvent.BaseConnectionEvent.Stats, this.sampleStats);
};
prototype["getPacketStats"] = function getPacketStats() {
  const reduced = _modDef12.reduce(
    this.inboundStats,
    (packetsReceived, packetsReceived2) => {
      packetsReceived.packetsReceived = packetsReceived.packetsReceived + packetsReceived2.packetsReceived;
      packetsReceived.packetsReceivedLost = packetsReceived.packetsReceivedLost + packetsReceived2.packetsLost;
      packetsReceived.nackCount = packetsReceived.nackCount + packetsReceived2.nackCount;
      packetsReceived.fecPacketsReceived = packetsReceived.fecPacketsReceived + packetsReceived2.fecPacketsReceived;
      packetsReceived.fecPacketsDiscarded = packetsReceived.fecPacketsDiscarded + packetsReceived2.fecPacketsDiscarded;
      return packetsReceived;
    },
    { packetsReceived: 0, packetsReceivedLost: 0, nackCount: 0, fecPacketsReceived: 0, fecPacketsDiscarded: 0 },
  );
  return {
    packets_sent: this.outboundStats.packetsSent,
    packets_sent_lost: this.outboundStats.packetsLost,
    packets_received: reduced.packetsReceived,
    packets_received_lost: reduced.packetsReceivedLost,
    num_nacks_sent: reduced.nackCount,
    fec_packets_received: reduced.fecPacketsReceived,
    fec_packets_discarded: reduced.fecPacketsDiscarded,
  };
};
prototype["getInboundPacketsStats"] = function getInboundPacketsStats(sender_user_id) {
  if (null == this.inboundStats[sender_user_id]) {
    obj = {};
  } else {
    obj = { num_packets: null, num_packets_lost: null };
    ({ packetsReceived: obj.num_packets, packetsLost: obj.num_packets_lost } = tmp);
  }
  return obj;
};
prototype["getOutboundPacketsStats"] = function getOutboundPacketsStats() {
  return { num_packets: this.outboundStats.packetsSent, num_packets_lost: this.outboundStats.packetsLost };
};
prototype["getBytesStats"] = function getBytesStats() {
  const self = this;
  const result = this.outboundStats.aggregationDurationMs / 1000;
  obj = {
    bytes_sent: this.outboundStats.bytesSent,
    bytes_received: _modDef12.reduce(this.inboundStats, (arg0, bytesReceived) => arg0 + bytesReceived.bytesReceived, 0),
    outbound_bandwidth_estimate: null,
    audio_target_bitrate: null,
  };
  let num = 0;
  if (0 < result) {
    const _Math = Math;
    num = Math.round((8 * self.outboundStats.bytesAvailable) / result);
  }
  obj.outbound_bandwidth_estimate = num;
  let num3 = 0;
  if (0 < result) {
    const _Math2 = Math;
    num3 = Math.round((8 * self.outboundStats.bytesTarget) / result);
  }
  obj.audio_target_bitrate = num3;
  return obj;
};
prototype["getInboundBytesStats"] = function getInboundBytesStats(sender_user_id) {
  if (null == this.inboundStats[sender_user_id]) {
    obj = {};
  } else {
    obj = { num_bytes: tmp.bytesReceived };
  }
  return obj;
};
prototype["getOutboundBytesStats"] = function getOutboundBytesStats() {
  return { num_bytes: this.outboundStats.bytesSent };
};
prototype["getInboundDurationStats"] = function getInboundDurationStats(sender_user_id) {
  if (null == this.inboundStats[sender_user_id]) {
    obj = {};
  } else {
    obj = { duration_connected_ms: null };
    const _Math = Math;
    const _performance = performance;
    obj.duration_connected_ms = Math.round(performance.now() - tmp.connectedAtMs);
  }
  return obj;
};
prototype["getInboundJitterStats"] = function getInboundJitterStats(sender_user_id) {
  if (null == this.inboundStats[sender_user_id]) {
    let obj2 = {};
  } else {
    const audioJitterBufferHistogram = tmp.bufferStats.audioJitterBufferHistogram;
    if (audioJitterBufferHistogram.getSamples() > 0) {
      let audioJitterBuffer = tmp.bufferStats.audioJitterBufferHistogram;
    } else {
      audioJitterBuffer = tmp.bufferStats.audioJitterBuffer;
    }
    obj = { audio_jitter_buffer: audioJitterBuffer, audio_jitter_delay: null, audio_jitter_target: null };
    const audioJitterDelayHistogram = tmp.bufferStats.audioJitterDelayHistogram;
    if (audioJitterDelayHistogram.getSamples() > 0) {
      let audioJitterDelay = tmp.bufferStats.audioJitterDelayHistogram;
    } else {
      audioJitterDelay = tmp.bufferStats.audioJitterDelay;
    }
    obj.audio_jitter_delay = audioJitterDelay;
    const audioJitterTargetHistogram = tmp.bufferStats.audioJitterTargetHistogram;
    if (audioJitterTargetHistogram.getSamples() > 0) {
      let audioJitterTarget = tmp.bufferStats.audioJitterTargetHistogram;
    } else {
      audioJitterTarget = tmp.bufferStats.audioJitterTarget;
    }
    obj.audio_jitter_target = audioJitterTarget;
    obj2 = explodePlayoutMetrics(obj);
  }
  return obj2;
};
prototype["getNetworkStats"] = function getNetworkStats() {
  const networkQuality = this.networkQuality;
  return networkQuality.getStats();
};
prototype["getSystemResourceStats"] = function getSystemResourceStats() {
  const systemResources = this.systemResources;
  return systemResources.getStats();
};
prototype["getBufferStats"] = function getBufferStats() {
  const reduced = _modDef12.reduce(
    this.inboundStats,
    (arg0, bufferStats) => {
      const audioJitterBufferHistogram = bufferStats.bufferStats.audioJitterBufferHistogram;
      if (audioJitterBufferHistogram.getSamples() > 0) {
        const audioJitterBufferHistogram2 = bufferStats.bufferStats.audioJitterBufferHistogram;
        let percentile = audioJitterBufferHistogram2.getPercentile(75);
      } else {
        percentile = null;
        if (null != bufferStats.bufferStats.audioJitterBuffer) {
          percentile = bufferStats.bufferStats.audioJitterBuffer.p75;
        }
      }
      bufferStats = arg0;
      let percentile1 = null;
      if (null != arg0) {
        const audioJitterBufferHistogram3 = bufferStats.audioJitterBufferHistogram;
        if (audioJitterBufferHistogram3.getSamples() > 0) {
          const audioJitterBufferHistogram4 = bufferStats.audioJitterBufferHistogram;
          percentile1 = audioJitterBufferHistogram4.getPercentile(75);
        } else {
          percentile1 = null;
          if (null != bufferStats.audioJitterBuffer) {
            percentile1 = bufferStats.audioJitterBuffer.p75;
          }
        }
      }
      let tmp3 = null == bufferStats || null == percentile1;
      if (!tmp3) {
        tmp3 = null != percentile && percentile > percentile1;
        const tmp4 = null != percentile && percentile > percentile1;
      }
      if (tmp3) {
        bufferStats = bufferStats.bufferStats;
      }
      return bufferStats;
    },
    null,
  );
  if (null == reduced) {
    if (null == reduced) {
      if (null == reduced) {
        obj = {
          audio_jitter_buffer: null,
          audio_jitter_target: null,
          audio_jitter_delay: null,
          relative_reception_delay: null,
          relative_playout_delay: null,
        };
        let prop;
        if (reduced != null) {
          prop = reduced.relativeReceptionDelay;
        }
        if (prop == null) {
          prop = null;
        }
        obj.relative_reception_delay = prop;
        let relativePlayoutDelay;
        if (reduced != null) {
          relativePlayoutDelay = reduced.relativePlayoutDelay;
        }
        if (relativePlayoutDelay == null) {
          relativePlayoutDelay = null;
        }
        const obj2 = {};
        obj.relative_playout_delay = relativePlayoutDelay;
        const merged = Object.assign(explodePlayoutMetrics(obj));
        return obj2;
      } else {
        const audioJitterDelayHistogram = reduced.audioJitterDelayHistogram;
        if (audioJitterDelayHistogram.getSamples() > 0) {
          let prop1 = reduced.audioJitterDelayHistogram;
        } else {
          prop1 = null;
          if (null != reduced.audioJitterDelay) {
            prop1 = reduced.audioJitterDelay;
          }
        }
      }
    } else {
      const audioJitterTargetHistogram = reduced.audioJitterTargetHistogram;
      if (audioJitterTargetHistogram.getSamples() > 0) {
        let prop2 = reduced.audioJitterTargetHistogram;
      } else {
        prop2 = null;
        if (null != reduced.audioJitterTarget) {
          prop2 = reduced.audioJitterTarget;
        }
      }
    }
  } else {
    let audioJitterBufferHistogram = reduced.audioJitterBufferHistogram;
    if (audioJitterBufferHistogram.getSamples() > 0) {
      let prop3 = reduced.audioJitterBufferHistogram;
    } else {
      prop3 = null;
      if (null != reduced.audioJitterBuffer) {
        prop3 = reduced.audioJitterBuffer;
      }
    }
  }
};
prototype["getFrameOpStats"] = function getFrameOpStats() {
  const reduced = _modDef12.reduce(
    this.inboundStats,
    (silent, frameOpStats) => {
      if (null != frameOpStats.frameOpStats.silent) {
        silent.silent = silent.silent + frameOpStats.frameOpStats.silent;
      }
      if (null != frameOpStats.frameOpStats.normal) {
        silent.normal = silent.normal + frameOpStats.frameOpStats.normal;
      }
      if (null != frameOpStats.frameOpStats.merged) {
        silent.merged = silent.merged + frameOpStats.frameOpStats.merged;
      }
      if (null != frameOpStats.frameOpStats.expanded) {
        silent.expanded = silent.expanded + frameOpStats.frameOpStats.expanded;
      }
      if (null != frameOpStats.frameOpStats.accelerated) {
        silent.accelerated = silent.accelerated + frameOpStats.frameOpStats.accelerated;
      }
      if (null != frameOpStats.frameOpStats.preemptiveExpanded) {
        silent.preemptiveExpanded = silent.preemptiveExpanded + frameOpStats.frameOpStats.preemptiveExpanded;
      }
      if (null != frameOpStats.frameOpStats.cng) {
        silent.cng = silent.cng + frameOpStats.frameOpStats.cng;
      }
      return silent;
    },
    { silent: 0, normal: 0, merged: 0, expanded: 0, accelerated: 0, preemptiveExpanded: 0, cng: 0 },
  );
  return {
    frame_op_silent: reduced.silent,
    frame_op_normal: reduced.normal,
    frame_op_merged: reduced.merged,
    frame_op_expanded: reduced.expanded,
    frame_op_accelerated: reduced.accelerated,
    frame_op_preemptive_expanded: reduced.preemptiveExpanded,
    frame_op_cng: reduced.cng,
  };
};
prototype["getTransportStats"] = function getTransportStats() {
  return { decryption_failures: this.decryptionFailures, routing_failures: this.routingFailures };
};
prototype["getE2EEStats"] = function getE2EEStats() {
  const reduced = _modDef12.reduce(
    this.inboundStats,
    (passthroughCount, passthroughCount2) => {
      let num = passthroughCount2.passthroughCount;
      if (num == null) {
        num = 0;
      }
      passthroughCount.passthroughCount = passthroughCount.passthroughCount + num;
      let num2 = passthroughCount2.decryptSuccessCount;
      if (num2 == null) {
        num2 = 0;
      }
      passthroughCount.decryptSuccessCount = passthroughCount.decryptSuccessCount + num2;
      let num3 = passthroughCount2.decryptFailureCount;
      if (num3 == null) {
        num3 = 0;
      }
      passthroughCount.decryptFailureCount = passthroughCount.decryptFailureCount + num3;
      let num4 = passthroughCount2.decryptDuration;
      if (num4 == null) {
        num4 = 0;
      }
      passthroughCount.decryptDuration = passthroughCount.decryptDuration + num4;
      let num5 = passthroughCount2.decryptAttempts;
      if (num5 == null) {
        num5 = 0;
      }
      passthroughCount.decryptAttempts = passthroughCount.decryptAttempts + num5;
      let num6 = passthroughCount2.decryptMissingKeyCount;
      if (num6 == null) {
        num6 = 0;
      }
      passthroughCount.decryptMissingKeyCount = passthroughCount.decryptMissingKeyCount + num6;
      let num7 = passthroughCount2.decryptInvalidNonceCount;
      if (num7 == null) {
        num7 = 0;
      }
      passthroughCount.decryptInvalidNonceCount = passthroughCount.decryptInvalidNonceCount + num7;
      let num8 = passthroughCount2.decryptFailureCount;
      if (num8 == null) {
        num8 = 0;
      }
      let num9 = passthroughCount2.decryptFailureBeforeSuccessCount;
      if (num9 == null) {
        num9 = 0;
      }
      passthroughCount.decryptFailureAfterSuccessCount =
        passthroughCount.decryptFailureAfterSuccessCount + (num8 - num9);
      return passthroughCount;
    },
    {
      passthroughCount: 0,
      decryptSuccessCount: 0,
      decryptFailureCount: 0,
      decryptDuration: 0,
      decryptAttempts: 0,
      decryptMissingKeyCount: 0,
      decryptInvalidNonceCount: 0,
      decryptFailureAfterSuccessCount: 0,
    },
  );
  return {
    decrypt_passthrough_count: reduced.passthroughCount,
    decrypt_success_count: reduced.decryptSuccessCount,
    decrypt_failure_count: reduced.decryptFailureCount,
    decrypt_duration: reduced.decryptDuration,
    decrypt_attempts: reduced.decryptAttempts,
    decrypt_missing_key_count: reduced.decryptMissingKeyCount,
    decrypt_invalid_nonce_count: reduced.decryptInvalidNonceCount,
    decrypt_failure_after_success_count: reduced.decryptFailureAfterSuccessCount,
    encrypt_passthrough_count: this.outboundStats.passthroughCount,
    encrypt_success_count: this.outboundStats.encryptSuccessCount,
    encrypt_failure_count: this.outboundStats.encryptFailureCount,
    encrypt_duration: this.outboundStats.encryptDuration,
    encrypt_attempts: this.outboundStats.encryptAttempts,
    encrypt_max_attempts: this.outboundStats.encryptMaxAttempts,
    encrypt_missing_key_count: this.outboundStats.encryptMissingKeyCount,
  };
};
prototype["getAudioDeviceStats"] = function getAudioDeviceStats() {
  const self = this;
  const restartCount = this.inputDeviceStats.restartCount;
  let accumulated;
  if (restartCount != null) {
    accumulated = restartCount.accumulated;
  }
  obj = {
    input_device_restart_count: accumulated,
    output_device_restart_count: null,
    input_device_time_to_first_audio: null,
    output_device_time_to_first_audio: null,
    input_device_buffer_overfull_count: null,
    output_device_buffer_underrun_count: null,
    input_device_session_sample_rate: null,
    output_device_session_sample_rate: null,
    input_device_time_from_connect_to_first_audio_ms: null,
    output_device_time_from_connect_to_first_audio_ms: null,
  };
  const restartCount2 = self.outputDeviceStats.restartCount;
  let accumulated1;
  if (restartCount2 != null) {
    accumulated1 = restartCount2.accumulated;
  }
  obj.output_device_restart_count = accumulated1;
  obj.input_device_time_to_first_audio = self.inputDeviceStats.timeToFirstCallbackMs;
  obj.output_device_time_to_first_audio = self.outputDeviceStats.timeToFirstCallbackMs;
  const bufferViolations = self.inputDeviceStats.bufferViolations;
  let accumulated2;
  if (bufferViolations != null) {
    accumulated2 = bufferViolations.accumulated;
  }
  obj.input_device_buffer_overfull_count = accumulated2;
  const bufferViolations2 = self.outputDeviceStats.bufferViolations;
  let accumulated3;
  if (bufferViolations2 != null) {
    accumulated3 = bufferViolations2.accumulated;
  }
  obj.output_device_buffer_underrun_count = accumulated3;
  obj.input_device_session_sample_rate = self.inputDeviceStats.sessionSampleRate;
  obj.output_device_session_sample_rate = self.outputDeviceStats.sessionSampleRate;
  obj.input_device_time_from_connect_to_first_audio_ms = self.inputDeviceStats.timeFromConnectToFirstCallbackMs;
  obj.output_device_time_from_connect_to_first_audio_ms = self.outputDeviceStats.timeFromConnectToFirstCallbackMs;
  return obj;
};
prototype["getAudioLevelStats"] = function getAudioLevelStats() {
  const speakingAudioLevel = this.outboundStats.speakingAudioLevel;
  const report = speakingAudioLevel.getReport([1, 5, 10, 25, 50, 75, 90, 95, 99]);
  return {
    outbound_audio_level_db_p1: report.percentiles[1],
    outbound_audio_level_db_p5: report.percentiles[5],
    outbound_audio_level_db_p10: report.percentiles[10],
    outbound_audio_level_db_p25: report.percentiles[25],
    outbound_audio_level_db_p50: report.percentiles[50],
    outbound_audio_level_db_p75: report.percentiles[75],
    outbound_audio_level_db_p90: report.percentiles[90],
    outbound_audio_level_db_p95: report.percentiles[95],
    outbound_audio_level_db_p99: report.percentiles[99],
    outbound_audio_level_db_max: report.max,
    outbound_audio_level_db_mean: report.mean,
  };
};
prototype["getPeriodicStats"] = function getPeriodicStats() {
  const self = this;
  const items = [];
  const entries = Object.entries(this.periodicInboundStats);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    ({ previous, current, currentTimestampMs, previousTimestampMs } = tmp7);
    let numRateSamples = tmp7.numRateSamples;
    if (undefined !== previousTimestampMs) {
      if (currentTimestampMs > previousTimestampMs) {
        let diff = currentTimestampMs - previousTimestampMs;
        obj = {
          userId: tmp6,
          silent: null,
          normal: null,
          merged: null,
          expanded: null,
          accelerated: null,
          preemptiveExpanded: null,
          cng: null,
          accelerateRate: null,
          expandRate: null,
          preemptiveExpandRate: null,
          speechExpandRate: null,
          durationMs: null,
        };
        let silent = current.silent;
        if (silent == null) {
          let num = previous.silent;
          if (num == null) {
            num = 0;
          }
          silent = 0 - num;
        }
        obj.silent = silent;
        let normal = current.normal;
        if (normal == null) {
          let num2 = previous.normal;
          if (num2 == null) {
            num2 = 0;
          }
          normal = 0 - num2;
        }
        obj.normal = normal;
        let merged = current.merged;
        if (merged == null) {
          let num3 = previous.merged;
          if (num3 == null) {
            num3 = 0;
          }
          merged = 0 - num3;
        }
        obj.merged = merged;
        let expanded = current.expanded;
        if (expanded == null) {
          let num4 = previous.expanded;
          if (num4 == null) {
            num4 = 0;
          }
          expanded = 0 - num4;
        }
        obj.expanded = expanded;
        let accelerated = current.accelerated;
        if (accelerated == null) {
          let num5 = previous.accelerated;
          if (num5 == null) {
            num5 = 0;
          }
          accelerated = 0 - num5;
        }
        obj.accelerated = accelerated;
        let preemptiveExpanded = current.preemptiveExpanded;
        if (preemptiveExpanded == null) {
          let num6 = previous.preemptiveExpanded;
          if (num6 == null) {
            num6 = 0;
          }
          preemptiveExpanded = 0 - num6;
        }
        obj.preemptiveExpanded = preemptiveExpanded;
        let cng = current.cng;
        if (cng == null) {
          let num7 = previous.cng;
          if (num7 == null) {
            num7 = 0;
          }
          cng = 0 - num7;
        }
        obj.cng = cng;
        obj.accelerateRate = tmp7.accelerateRateSum / numRateSamples;
        obj.expandRate = tmp7.expandRateSum / numRateSamples;
        obj.preemptiveExpandRate = tmp7.preemptiveExpandRateSum / numRateSamples;
        obj.speechExpandRate = tmp7.speechExpandRateSum / numRateSamples;
        obj.durationMs = diff;
        if (obj.normal + obj.merged + obj.expanded + obj.accelerated + obj.preemptiveExpanded > 0) {
          let arr = items.push(tmp26);
        }
      }
    }
    self.periodicInboundStats[tmp6].accelerateRateSum = 0;
    self.periodicInboundStats[tmp6].expandRateSum = 0;
    self.periodicInboundStats[tmp6].preemptiveExpandRateSum = 0;
    self.periodicInboundStats[tmp6].speechExpandRateSum = 0;
    self.periodicInboundStats[tmp6].numRateSamples = 0;
    self.periodicInboundStats[tmp6].previous = current;
    self.periodicInboundStats[tmp6].previousTimestampMs = currentTimestampMs;
    continue;
  }
  return items;
};
prototype["destroyUser"] = function destroyUser(arg0) {
  delete tmp3[tmp2];
  delete tmp[tmp2];
};
prototype["getInboundParticipants"] = function getInboundParticipants() {
  return SnowflakeUtilsDefault.keys(this.inboundStats);
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/VoiceQuality.tsx");

export default VoiceQuality;
export { VoiceQualityEvent };
