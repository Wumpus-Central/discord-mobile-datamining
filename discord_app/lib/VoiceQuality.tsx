// === Module 13695: start ===

// Module 13695 (start)
import applyDefault from "apply" /* 12 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4579 */;
import onDefault from "on" /* 4582 */;
import getSamples from "getSamples" /* 7497 */;
import getStatsDefault from "getStats" /* 7503 */;
import _initStatsDefault from "_initStats" /* 13696 */;
import closure_3 from "_slicedToArray" /* 32 */;

require = arg1;
let obj = { InputDeviceSampleRateChanged: "input-device-sample-rate-changed" };
onDefault;
class VoiceQuality extends tmp2 {
  constructor(arg0) {
    tmp3 = new VoiceQuality(tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
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
                lib.emit(closure_1_4.InputDeviceSampleRateChanged, num4);
              }
              inputDeviceStats.sessionSampleRate = input.sessionSampleRate;
            }
            if (tmp10) {
              inputDeviceStats.timeFromConnectToFirstCallbackMs = input.timeFromConnectToFirstCallbackMs;
            }
            tmp10 = undefined !== input.timeFromConnectToFirstCallbackMs && undefined === inputDeviceStats.timeFromConnectToFirstCallbackMs;
            tmp6 = 0 !== num && undefined === inputDeviceStats.timeToFirstCallbackMs;
          } else {
            let bufferViolations = input.bufferViolations;
            bufferViolations = inputDeviceStats.bufferViolations;
            if (bufferViolations == null) {
              bufferViolations = { accumulated: 0, lastValue: 0 };
            }
            ({ accumulated: accumulated2, lastValue: lastValue2 } = bufferViolations);
            if (lastValue2 > bufferViolations) {
              let sum = accumulated2 + bufferViolations;
            } else {
              sum = accumulated2 + (bufferViolations - lastValue2);
            }
            accumulated2 = { accumulated: null, lastValue: null };
            accumulated2[0] = sum;
            accumulated2[1] = bufferViolations;
            inputDeviceStats.bufferViolations = accumulated2;
          }
        } else {
          let restartCount = input.restartCount;
          restartCount = inputDeviceStats.restartCount;
          if (restartCount == null) {
            restartCount = { accumulated: 0, lastValue: 0 };
          }
          ({ accumulated, lastValue } = restartCount);
          if (lastValue > restartCount) {
            let sum1 = accumulated + restartCount;
          } else {
            sum1 = accumulated + (restartCount - lastValue);
          }
          accumulated = { accumulated: null, lastValue: null };
          accumulated[0] = sum1;
          accumulated[1] = restartCount;
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
        previousTimestampMs.aggregationDurationMs = previousTimestampMs.aggregationDurationMs + (nowResult - previousTimestampMs.previousTimestampMs);
        const result = (nowResult - previousTimestampMs.previousTimestampMs) / 1000;
        previousTimestampMs.bytesAvailable = previousTimestampMs.bytesAvailable + num / 8 * result;
        previousTimestampMs.bytesTarget = previousTimestampMs.bytesTarget + num2 / 8 * result;
        previousTimestampMs.previousTimestampMs = nowResult;
      } else {
        const _performance = performance;
        previousTimestampMs.previousTimestampMs = performance.now();
      }
    };
    tmp3.sampleStats = function sampleStats(rtp) {
      const lib = rtp;
      if (null != rtp) {
        const networkQuality = lib.networkQuality;
        const result = networkQuality.incrementNetworkStats(lib(closure_1_2[7]).now());
        const systemResources = lib.systemResources;
        systemResources.takeSample();
        const duration4 = lib.duration;
        duration4.connected = duration4.connected + 1;
        let obj2 = lib(closure_1_2[7]);
        const tmp4 = closure_1_2;
        const tmp7 = closure_1_1;
        c1 = 0;
        const reduced = closure_1_1(closure_1_2[6]).reduce(lib.inboundStats, (packetsReceived, packetsReceived2) => {
          packetsReceived.packetsReceived = packetsReceived.packetsReceived + packetsReceived2.packetsReceived;
          return packetsReceived;
        }, { packetsReceived: 0 });
        const arr2 = closure_1_1(closure_1_2[6]);
        let item = closure_1_1(closure_1_2[6]).forEach(rtp.rtp.outbound, (type) => {
          if ("audio" === type.type) {
            let num = type.bitrateTarget;
            if (num == null) {
              num = 0;
            }
            obj = {};
            const merged = Object.assign(outboundStats.outboundStats);
            ({ packetsSent: obj.packetsSent, bytesSent: obj.bytesSent, packetsLost } = type);
            if (packetsLost == null) {
              packetsLost = 0;
            }
            obj.packetsLost = packetsLost;
            let num2 = type.passthroughCount;
            if (num2 == null) {
              num2 = 0;
            }
            obj.passthroughCount = num2;
            let num3 = type.encryptSuccessCount;
            if (num3 == null) {
              num3 = 0;
            }
            obj.encryptSuccessCount = num3;
            let num4 = type.encryptFailureCount;
            if (num4 == null) {
              num4 = 0;
            }
            obj.encryptFailureCount = num4;
            let num5 = type.encryptDuration;
            if (num5 == null) {
              num5 = 0;
            }
            obj.encryptDuration = num5;
            let num6 = type.encryptAttempts;
            if (num6 == null) {
              num6 = 0;
            }
            obj.encryptAttempts = num6;
            let num7 = type.encryptMaxAttempts;
            if (num7 == null) {
              num7 = 0;
            }
            obj.encryptMaxAttempts = num7;
            let num8 = type.encryptMissingKeyCount;
            if (num8 == null) {
              num8 = 0;
            }
            obj.encryptMissingKeyCount = num8;
            outboundStats.outboundStats = obj;
            const _Boolean = Boolean;
            if (tmp5) {
              const speakingAudioLevel = tmp.outboundStats.speakingAudioLevel;
              const _Math = Math;
              speakingAudioLevel.addSample(20 * Math.log(type.audioLevel));
            }
            tmp5 = true === Boolean(type.audioDetected) && null != type.audioLevel;
          }
        });
        lib.decryptionFailures = rtp.transport.decryptionFailures;
        lib.routingFailures = rtp.transport.routingFailures;
        lib.appendTargetRates(lib.outboundStats, rtp.transport.availableOutgoingBitrate, c1);
        const arr3 = closure_1_1(closure_1_2[6]);
        const item1 = closure_1_1(closure_1_2[6]).forEach(rtp.rtp.inbound, (arg0, arg1) => {
          closure_0 = arg1;
          const item = closure_2_1(closure_2_2[6]).forEach(arg0, (type) => {
            if ("audio" === type.type) {
              let num = lib.transport.ping;
              if (num == null) {
                num = 0;
              }
              ({ packetsReceived, packetsLost, bytesReceived, nackCount, fecPacketsReceived } = type);
              if (fecPacketsReceived == null) {
                fecPacketsReceived = 0;
              }
              let num2 = type.fecPacketsDiscarded;
              if (num2 == null) {
                num2 = 0;
              }
              let num3 = type.jitterBuffer;
              if (num3 == null) {
                num3 = 0;
              }
              obj = { audioJitterBuffer: null, audioJitterBufferHistogram: null, audioJitterTarget: null, audioJitterTargetHistogram: null, audioJitterDelay: null, audioJitterDelayHistogram: null, relativeReceptionDelay: null, relativePlayoutDelay: null };
              obj[0] = type.audioJitterBuffer;
              let prop;
              if (lib.inboundStats[lib] != null) {
                prop = tmp38.bufferStats.audioJitterBufferHistogram;
              }
              if (prop == null) {
                prop = new lib(closure_3_2[1]).Histogram();
              }
              obj[1] = prop;
              obj[2] = type.audioJitterTarget;
              let prop1;
              if (lib.inboundStats[lib] != null) {
                prop1 = tmp38.bufferStats.audioJitterTargetHistogram;
              }
              if (prop1 == null) {
                prop1 = new lib(closure_3_2[1]).Histogram();
              }
              obj[3] = prop1;
              obj[4] = type.audioJitterDelay;
              let prop2;
              if (lib.inboundStats[lib] != null) {
                prop2 = tmp38.bufferStats.audioJitterDelayHistogram;
              }
              if (prop2 == null) {
                prop2 = new lib(closure_3_2[1]).Histogram();
              }
              obj[5] = prop2;
              ({ relativeReceptionDelay: obj[6], relativePlayoutDelay: obj[7] } = type);
              const audioJitterBufferHistogram = obj.audioJitterBufferHistogram;
              let prop3 = type.audioJitterBufferSamples;
              if (prop3 == null) {
                prop3 = [];
              }
              audioJitterBufferHistogram.addSamples(prop3);
              const audioJitterDelayHistogram = obj.audioJitterDelayHistogram;
              let prop4 = type.audioJitterDelaySamples;
              if (prop4 == null) {
                prop4 = [];
              }
              audioJitterDelayHistogram.addSamples(prop4);
              const audioJitterTargetHistogram = obj.audioJitterTargetHistogram;
              let prop5 = type.audioJitterTargetSamples;
              if (prop5 == null) {
                prop5 = [];
              }
              audioJitterTargetHistogram.addSamples(prop5);
              obj = { silent: null, normal: null, merged: null, expanded: null, accelerated: null, preemptiveExpanded: null, cng: null };
              ({ opSilence: obj2[0], opNormal: obj2[1], opMerge: obj2[2], opExpand: obj2[3], opAccelerate: obj2[4], opPreemptiveExpand: obj2[5], opCNG: obj2[6], passthroughCount } = type);
              if (passthroughCount == null) {
                passthroughCount = 0;
              }
              obj = { passthroughCount: null, decryptSuccessCount: null, decryptFailureCount: null, decryptDuration: null, decryptAttempts: null, decryptMissingKeyCount: null, decryptInvalidNonceCount: null };
              obj[0] = passthroughCount;
              let num4 = type.decryptSuccessCount;
              if (num4 == null) {
                num4 = 0;
              }
              obj[1] = num4;
              let num5 = type.decryptFailureCount;
              if (num5 == null) {
                num5 = 0;
              }
              obj[2] = num5;
              let num6 = type.decryptDuration;
              if (num6 == null) {
                num6 = 0;
              }
              obj[3] = num6;
              let num7 = type.decryptAttempts;
              if (num7 == null) {
                num7 = 0;
              }
              obj[4] = num7;
              let num8 = type.decryptMissingKeyCount;
              if (num8 == null) {
                num8 = 0;
              }
              obj[5] = num8;
              let num9 = type.decryptInvalidNonceCount;
              if (num9 == null) {
                num9 = 0;
              }
              obj[6] = num9;
              if (null != lib.inboundStats[lib]) {
                const diff = packetsReceived - tmp38.packetsReceived;
                const diff1 = packetsLost - tmp38.packetsLost;
                ({ mosBuckets, decryptFailureBeforeSuccessCount } = tmp38);
                if (decryptFailureBeforeSuccessCount == null) {
                  let decryptFailureCount;
                  if (obj.decryptSuccessCount > 0) {
                    decryptFailureCount = obj.decryptFailureCount;
                  }
                  decryptFailureBeforeSuccessCount = decryptFailureCount;
                }
                let num17 = 0;
                if (tmp26) {
                  const sum = num + num3;
                  let obj4 = closure_3_1(closure_3_2[6]);
                  const calculateMosResult = obj8.calculateMos(sum, obj4.clamp(diff1 / (diff + diff1), 0, 1));
                  const _Math = Math;
                  const rounded = Math.floor(calculateMosResult);
                  mosBuckets[rounded] = mosBuckets[rounded] + 1;
                  num17 = calculateMosResult;
                }
                obj1 = { packetsReceived: null, bytesReceived: null, packetsLost: null, nackCount: null, fecPacketsReceived: null, fecPacketsDiscarded: null, mos: null, mosSum: null, mosCount: null, mosBuckets: null, bufferStats: null, frameOpStats: null, decryptFailureBeforeSuccessCount: null };
                obj1[0] = packetsReceived;
                obj1[1] = bytesReceived;
                obj1[2] = packetsLost;
                if (nackCount == null) {
                  nackCount = 0;
                }
                obj1[3] = nackCount;
                obj1[4] = fecPacketsReceived;
                obj1[5] = num2;
                obj1[6] = num17;
                obj1[7] = tmp38.mosSum + num17;
                let num19 = 0;
                if (num17 > 0) {
                  num19 = 1;
                }
                obj1[8] = tmp38.mosCount + num19;
                obj1[9] = mosBuckets;
                obj1[10] = obj;
                obj1[11] = obj;
                obj1[12] = decryptFailureBeforeSuccessCount;
                const merged = Object.assign(obj);
                obj8.inboundStats[tmp37] = obj1;
                const obj2 = { previousTimestampMs: null, previous: null, currentTimestampMs: null, current: null, accelerateRateSum: null, expandRateSum: null, preemptiveExpandRateSum: null, speechExpandRateSum: null, numRateSamples: null };
                obj2[0] = obj8.periodicInboundStats[tmp37].previousTimestampMs;
                obj2[1] = obj8.periodicInboundStats[tmp37].previous;
                const _performance3 = performance;
                obj2[2] = performance.now();
                obj2[3] = obj;
                let num20 = type.accelerateRate;
                if (num20 == null) {
                  num20 = 0;
                }
                obj2[4] = obj8.periodicInboundStats[tmp37].accelerateRateSum + num20;
                let num21 = type.expandRate;
                if (num21 == null) {
                  num21 = 0;
                }
                obj2[5] = obj8.periodicInboundStats[tmp37].expandRateSum + num21;
                let num22 = type.preemptiveExpandRate;
                if (num22 == null) {
                  num22 = 0;
                }
                obj2[6] = obj8.periodicInboundStats[tmp37].preemptiveExpandRateSum + num22;
                let num23 = type.speechExpandRate;
                if (num23 == null) {
                  num23 = 0;
                }
                obj2[7] = obj8.periodicInboundStats[tmp37].speechExpandRateSum + num23;
                obj2[8] = obj8.periodicInboundStats[tmp37].numRateSamples + 1;
                obj8.periodicInboundStats[tmp37] = obj2;
                tmp26 = diff > 0 && diff1 >= 0;
              } else {
                const obj3 = { packetsReceived: null, bytesReceived: null, packetsLost: null, nackCount: null, fecPacketsReceived: null, fecPacketsDiscarded: null, mos: 0, mosSum: 0, mosCount: 0, mosBuckets: null, bufferStats: null, frameOpStats: null };
                obj3[0] = packetsReceived;
                obj3[1] = bytesReceived;
                obj3[2] = packetsLost;
                let num10 = nackCount;
                if (nackCount == null) {
                  num10 = 0;
                }
                obj3[3] = num10;
                obj3[4] = fecPacketsReceived;
                obj3[5] = num2;
                obj3[9] = [0, 0, 0, 0, 0];
                obj3[10] = obj;
                obj3[11] = obj;
                const merged1 = Object.assign(obj);
                obj8.inboundStats[tmp37] = obj3;
                obj4 = { previousTimestampMs: null, previous: null, currentTimestampMs: null, current: null, accelerateRateSum: null, expandRateSum: null, preemptiveExpandRateSum: null, speechExpandRateSum: null, numRateSamples: 1 };
                const _performance = performance;
                obj4[0] = performance.now();
                obj4[1] = obj;
                const _performance2 = performance;
                obj4[2] = performance.now();
                obj4[3] = obj;
                let num11 = type.accelerateRate;
                if (num11 == null) {
                  num11 = 0;
                }
                obj4[4] = num11;
                let num12 = type.expandRate;
                if (num12 == null) {
                  num12 = 0;
                }
                obj4[5] = num12;
                let num13 = type.preemptiveExpandRate;
                if (num13 == null) {
                  num13 = 0;
                }
                obj4[6] = num13;
                let num14 = type.speechExpandRate;
                if (num14 == null) {
                  num14 = 0;
                }
                obj4[7] = num14;
                obj8.periodicInboundStats[tmp37] = obj4;
              }
            }
          });
        });
        if (undefined !== rtp.audioDevice) {
          obj.sampleAudioDevice(rtp.audioDevice.input, obj.inputDeviceStats);
          obj.sampleAudioDevice(rtp.audioDevice.output, obj.outputDeviceStats);
        }
        let flag = false;
        if (lib.outboundStats.packetsSent > lib.outboundStats.packetsSent) {
          const duration = obj.duration;
          duration.speaking = duration.speaking + 1;
          flag = true;
        }
        const arr4 = closure_1_1(closure_1_2[6]);
        let flag2 = false;
        if (tmp7Result.reduce(lib.inboundStats, (packetsReceived, packetsReceived2) => {
          packetsReceived.packetsReceived = packetsReceived.packetsReceived + packetsReceived2.packetsReceived;
          return packetsReceived;
        }, { packetsReceived: 0 }).packetsReceived > reduced.packetsReceived) {
          const duration2 = obj.duration;
          duration2.listening = duration2.listening + 1;
          flag2 = true;
        }
        if (!flag) {
          flag = flag2;
        }
        if (flag) {
          const duration3 = obj.duration;
          duration3.participation = duration3.participation + 1;
        }
        tmp7Result = tmp7(tmp4[6]);
      }
    };
    tmp3.connection = global;
    tmp4 = new require("_initStats")();
    tmp3.networkQuality = tmp4;
    tmp5 = new require("getStats")();
    tmp3.systemResources = tmp5;
    tmp3.inboundStats = {};
    obj = { packetsSent: 0, bytesSent: 0, packetsLost: 0, passthroughCount: 0, encryptSuccessCount: 0, encryptFailureCount: 0, encryptDuration: 0, encryptAttempts: 0, encryptMaxAttempts: 0, encryptMissingKeyCount: 0, bytesAvailable: 0, bytesTarget: 0, previousTimestampMs: 0, aggregationDurationMs: 0, speakingAudioLevel: null };
    histogram = new require("getSamples").Histogram();
    obj[14] = histogram;
    tmp3.outboundStats = obj;
    tmp3.duration = { listening: 0, speaking: 0, participation: 0, connected: 0 };
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
prototype["getMosStats"] = function getMosStats() {
  const reduced = applyDefault.reduce(this.inboundStats, (mosSum, mosSum2) => {
    mosSum.mosSum = mosSum.mosSum + mosSum2.mosSum;
    mosSum.mosCount = mosSum.mosCount + mosSum2.mosCount;
    let num = 0;
    do {
      let mosBuckets = mosSum.mosBuckets;
      mosBuckets[num] = mosBuckets[num] + mosSum2.mosBuckets[num];
      num = num + 1;
    } while (num < 5);
    return mosSum;
  }, { mosSum: 0, mosCount: 0, mosBuckets: [0, 0, 0, 0, 0] });
  let num = 0;
  if (reduced.mosCount > 0) {
    num = reduced.mosSum / reduced.mosCount;
  }
  return { mos_mean: num, mos_1: reduced.mosBuckets[1], mos_2: reduced.mosBuckets[2], mos_3: reduced.mosBuckets[3], mos_4: reduced.mosBuckets[4] };
};
prototype["getPacketStats"] = function getPacketStats() {
  const reduced = applyDefault.reduce(this.inboundStats, (packetsReceived, packetsReceived2) => {
    packetsReceived.packetsReceived = packetsReceived.packetsReceived + packetsReceived2.packetsReceived;
    packetsReceived.packetsReceivedLost = packetsReceived.packetsReceivedLost + packetsReceived2.packetsLost;
    packetsReceived.nackCount = packetsReceived.nackCount + packetsReceived2.nackCount;
    packetsReceived.fecPacketsReceived = packetsReceived.fecPacketsReceived + packetsReceived2.fecPacketsReceived;
    packetsReceived.fecPacketsDiscarded = packetsReceived.fecPacketsDiscarded + packetsReceived2.fecPacketsDiscarded;
    return packetsReceived;
  }, { packetsReceived: 0, packetsReceivedLost: 0, nackCount: 0, fecPacketsReceived: 0, fecPacketsDiscarded: 0 });
  return { packets_sent: this.outboundStats.packetsSent, packets_sent_lost: this.outboundStats.packetsLost, packets_received: reduced.packetsReceived, packets_received_lost: reduced.packetsReceivedLost, num_nacks_sent: reduced.nackCount, fec_packets_received: reduced.fecPacketsReceived, fec_packets_discarded: reduced.fecPacketsDiscarded };
};
prototype["getBytesStats"] = function getBytesStats() {
  const self = this;
  const result = this.outboundStats.aggregationDurationMs / 1000;
  obj = { bytes_sent: this.outboundStats.bytesSent, bytes_received: applyDefault.reduce(this.inboundStats, (arg0, bytesReceived) => arg0 + bytesReceived.bytesReceived, 0), outbound_bandwidth_estimate: null, audio_target_bitrate: null };
  let num = 0;
  if (0 < result) {
    const _Math = Math;
    num = Math.round(8 * self.outboundStats.bytesAvailable / result);
  }
  obj[2] = num;
  let num3 = 0;
  if (0 < result) {
    const _Math2 = Math;
    num3 = Math.round(8 * self.outboundStats.bytesTarget / result);
  }
  obj[3] = num3;
  return obj;
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
  const reduced = applyDefault.reduce(this.inboundStats, (arg0, bufferStats) => {
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
  }, null);
  if (null == reduced) {
    if (null == reduced) {
      if (null == reduced) {
        obj = { audio_jitter_buffer: null, audio_jitter_target: null, audio_jitter_delay: null, relative_reception_delay: null, relative_playout_delay: null };
        obj[0] = null;
        obj[1] = null;
        obj[2] = null;
        let prop;
        if (reduced != null) {
          prop = reduced.relativeReceptionDelay;
        }
        if (prop == null) {
          prop = null;
        }
        obj[3] = prop;
        let relativePlayoutDelay;
        if (reduced != null) {
          relativePlayoutDelay = reduced.relativePlayoutDelay;
        }
        if (relativePlayoutDelay == null) {
          relativePlayoutDelay = null;
        }
        obj[4] = relativePlayoutDelay;
        obj = {};
        for (const key10055 in obj) {
          let tmp28 = key10055;
          let obj4 = obj[key10055];
          let tmp29 = require;
          let tmp30 = dependencyMap;
          if (obj4 instanceof getSamples.Histogram) {
            let report = obj4.getReport([75, 95, 99]);
            let _Math = Math;
            let text = `${key10055}_mean`;
            obj[`${key10055}_mean`] = Math.round(report.mean);
            let _Math2 = Math;
            let text1 = `${key10055}_p75`;
            obj[`${key10055}_p75`] = Math.round(report.percentiles[75]);
            let _Math3 = Math;
            let text2 = `${key10055}_p95`;
            obj[`${key10055}_p95`] = Math.round(report.percentiles[95]);
            let _Math4 = Math;
            let text3 = `${key10055}_p99`;
            obj[`${key10055}_p99`] = Math.round(report.percentiles[99]);
            let _Math5 = Math;
            let text4 = `${key10055}_max`;
            obj[`${key10055}_max`] = Math.round(report.max);
            continue;
          } else {
            let num4 = 0;
            let text5 = `${key10055}_mean`;
            if (null != obj4) {
              num4 = obj4.mean;
            }
            obj[text5] = num4;
            let num5 = 0;
            let text6 = `${key10055}_p75`;
            if (null != obj4) {
              num5 = obj4.p75;
            }
            obj[text6] = num5;
            let num6 = 0;
            let text7 = `${key10055}_p95`;
            if (null != obj4) {
              num6 = obj4.p95;
            }
            obj[text7] = num6;
            let num7 = 0;
            let text8 = `${key10055}_p99`;
            if (null != obj4) {
              num7 = obj4.p99;
            }
            obj[text8] = num7;
            let num8 = 0;
            let text9 = `${key10055}_max`;
            if (null != obj4) {
              num8 = obj4.max;
            }
            obj[text9] = num8;
            continue;
          }
          continue;
        }
        obj = {};
        const merged = Object.assign(obj);
        return obj;
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
  const reduced = applyDefault.reduce(this.inboundStats, (silent, frameOpStats) => {
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
  }, { silent: 0, normal: 0, merged: 0, expanded: 0, accelerated: 0, preemptiveExpanded: 0, cng: 0 });
  return { frame_op_silent: reduced.silent, frame_op_normal: reduced.normal, frame_op_merged: reduced.merged, frame_op_expanded: reduced.expanded, frame_op_accelerated: reduced.accelerated, frame_op_preemptive_expanded: reduced.preemptiveExpanded, frame_op_cng: reduced.cng };
};
prototype["getDurationStats"] = function getDurationStats() {
  return { duration_listening: this.duration.listening, duration_speaking: this.duration.speaking, duration_participation: this.duration.participation, duration_connected: this.duration.connected };
};
prototype["getTransportStats"] = function getTransportStats() {
  return { decryption_failures: this.decryptionFailures, routing_failures: this.routingFailures };
};
prototype["getE2EEStats"] = function getE2EEStats() {
  const reduced = applyDefault.reduce(this.inboundStats, (passthroughCount, passthroughCount2) => {
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
    passthroughCount.decryptFailureAfterSuccessCount = passthroughCount.decryptFailureAfterSuccessCount + (num8 - num9);
    return passthroughCount;
  }, { passthroughCount: 0, decryptSuccessCount: 0, decryptFailureCount: 0, decryptDuration: 0, decryptAttempts: 0, decryptMissingKeyCount: 0, decryptInvalidNonceCount: 0, decryptFailureAfterSuccessCount: 0 });
  return { decrypt_passthrough_count: reduced.passthroughCount, decrypt_success_count: reduced.decryptSuccessCount, decrypt_failure_count: reduced.decryptFailureCount, decrypt_duration: reduced.decryptDuration, decrypt_attempts: reduced.decryptAttempts, decrypt_missing_key_count: reduced.decryptMissingKeyCount, decrypt_invalid_nonce_count: reduced.decryptInvalidNonceCount, decrypt_failure_after_success_count: reduced.decryptFailureAfterSuccessCount, encrypt_passthrough_count: this.outboundStats.passthroughCount, encrypt_success_count: this.outboundStats.encryptSuccessCount, encrypt_failure_count: this.outboundStats.encryptFailureCount, encrypt_duration: this.outboundStats.encryptDuration, encrypt_attempts: this.outboundStats.encryptAttempts, encrypt_max_attempts: this.outboundStats.encryptMaxAttempts, encrypt_missing_key_count: this.outboundStats.encryptMissingKeyCount };
};
prototype["getAudioDeviceStats"] = function getAudioDeviceStats() {
  const self = this;
  const restartCount = this.inputDeviceStats.restartCount;
  let accumulated;
  if (restartCount != null) {
    accumulated = restartCount.accumulated;
  }
  obj = { input_device_restart_count: accumulated, output_device_restart_count: null, input_device_time_to_first_audio: null, output_device_time_to_first_audio: null, input_device_buffer_overfull_count: null, output_device_buffer_underrun_count: null, input_device_session_sample_rate: null, output_device_session_sample_rate: null, input_device_time_from_connect_to_first_audio_ms: null, output_device_time_from_connect_to_first_audio_ms: null };
  const restartCount2 = self.outputDeviceStats.restartCount;
  let accumulated1;
  if (restartCount2 != null) {
    accumulated1 = restartCount2.accumulated;
  }
  obj[1] = accumulated1;
  obj[2] = self.inputDeviceStats.timeToFirstCallbackMs;
  obj[3] = self.outputDeviceStats.timeToFirstCallbackMs;
  const bufferViolations = self.inputDeviceStats.bufferViolations;
  let accumulated2;
  if (bufferViolations != null) {
    accumulated2 = bufferViolations.accumulated;
  }
  obj[4] = accumulated2;
  const bufferViolations2 = self.outputDeviceStats.bufferViolations;
  let accumulated3;
  if (bufferViolations2 != null) {
    accumulated3 = bufferViolations2.accumulated;
  }
  obj[5] = accumulated3;
  obj[6] = self.inputDeviceStats.sessionSampleRate;
  obj[7] = self.outputDeviceStats.sessionSampleRate;
  obj[8] = self.inputDeviceStats.timeFromConnectToFirstCallbackMs;
  obj[9] = self.outputDeviceStats.timeFromConnectToFirstCallbackMs;
  return obj;
};
prototype["getAudioLevelStats"] = function getAudioLevelStats() {
  const speakingAudioLevel = this.outboundStats.speakingAudioLevel;
  const report = speakingAudioLevel.getReport([1, 5, 10, 25, 50, 75, 90, 95, 99]);
  return { outbound_audio_level_db_p1: report.percentiles[1], outbound_audio_level_db_p5: report.percentiles[5], outbound_audio_level_db_p10: report.percentiles[10], outbound_audio_level_db_p25: report.percentiles[25], outbound_audio_level_db_p50: report.percentiles[50], outbound_audio_level_db_p75: report.percentiles[75], outbound_audio_level_db_p90: report.percentiles[90], outbound_audio_level_db_p95: report.percentiles[95], outbound_audio_level_db_p99: report.percentiles[99], outbound_audio_level_db_max: report.max, outbound_audio_level_db_mean: report.mean };
};
prototype["getPeriodicStats"] = function getPeriodicStats() {
  const self = this;
  const items = [];
  const entries = Object.entries(this.periodicInboundStats);
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    ({ previous, current, currentTimestampMs, previousTimestampMs } = tmp7);
    let tmp9 = previousTimestampMs;
    let numRateSamples = tmp7.numRateSamples;
    if (undefined !== previousTimestampMs) {
      let tmp32 = currentTimestampMs;
      let tmp33 = previousTimestampMs;
      if (currentTimestampMs > tmp9) {
        let tmp34 = currentTimestampMs;
        let tmp35 = previousTimestampMs;
        let diff = currentTimestampMs - tmp9;
        obj = { userId: null, silent: null, normal: null, merged: null, expanded: null, accelerated: null, preemptiveExpanded: null, cng: null, accelerateRate: null, expandRate: null, preemptiveExpandRate: null, speechExpandRate: null, durationMs: null };
        let tmp37 = tmp6;
        obj[0] = tmp6;
        let tmp38 = current;
        let silent = current.silent;
        if (silent == null) {
          let tmp10 = previous;
          let num = previous.silent;
          if (num == null) {
            num = 0;
          }
          silent = 0 - num;
        }
        obj[1] = silent;
        let tmp11 = current;
        let normal = current.normal;
        if (normal == null) {
          let tmp12 = previous;
          let num2 = previous.normal;
          if (num2 == null) {
            num2 = 0;
          }
          normal = 0 - num2;
        }
        obj[2] = normal;
        let tmp13 = current;
        let merged = current.merged;
        if (merged == null) {
          let tmp14 = previous;
          let num3 = previous.merged;
          if (num3 == null) {
            num3 = 0;
          }
          merged = 0 - num3;
        }
        obj[3] = merged;
        let tmp15 = current;
        let expanded = current.expanded;
        if (expanded == null) {
          let tmp16 = previous;
          let num4 = previous.expanded;
          if (num4 == null) {
            num4 = 0;
          }
          expanded = 0 - num4;
        }
        obj[4] = expanded;
        let tmp17 = current;
        let accelerated = current.accelerated;
        if (accelerated == null) {
          let tmp18 = previous;
          let num5 = previous.accelerated;
          if (num5 == null) {
            num5 = 0;
          }
          accelerated = 0 - num5;
        }
        obj[5] = accelerated;
        let tmp19 = current;
        let preemptiveExpanded = current.preemptiveExpanded;
        if (preemptiveExpanded == null) {
          let tmp20 = previous;
          let num6 = previous.preemptiveExpanded;
          if (num6 == null) {
            num6 = 0;
          }
          preemptiveExpanded = 0 - num6;
        }
        obj[6] = preemptiveExpanded;
        let tmp21 = current;
        let cng = current.cng;
        if (cng == null) {
          let tmp22 = previous;
          let num7 = previous.cng;
          if (num7 == null) {
            num7 = 0;
          }
          cng = 0 - num7;
        }
        obj[7] = cng;
        let tmp23 = tmp7;
        let tmp24 = numRateSamples;
        obj[8] = tmp8.accelerateRateSum / numRateSamples;
        obj[9] = tmp8.expandRateSum / numRateSamples;
        obj[10] = tmp8.preemptiveExpandRateSum / numRateSamples;
        obj[11] = tmp8.speechExpandRateSum / numRateSamples;
        let tmp25 = diff;
        obj[12] = diff;
        if (obj.normal + obj.merged + obj.expanded + obj.accelerated + obj.preemptiveExpanded > 0) {
          let tmp27 = obj;
          let arr = items.push(tmp26);
        }
      }
    }
    let tmp29 = tmp6;
    self.periodicInboundStats[tmp6].accelerateRateSum = 0;
    self.periodicInboundStats[tmp6].expandRateSum = 0;
    self.periodicInboundStats[tmp6].preemptiveExpandRateSum = 0;
    self.periodicInboundStats[tmp6].speechExpandRateSum = 0;
    self.periodicInboundStats[tmp6].numRateSamples = 0;
    let tmp30 = current;
    self.periodicInboundStats[tmp6].previous = current;
    let tmp31 = currentTimestampMs;
    self.periodicInboundStats[tmp6].previousTimestampMs = currentTimestampMs;
    continue;
  }
  return items;
};
prototype["calculateMos"] = function calculateMos(sum, arg1) {
  const calculateRResult = this.calculateR(sum, arg1);
  let num = 1;
  if (calculateRResult >= 0) {
    let num3 = 4.5;
    if (calculateRResult <= 100) {
      num3 = 1 + 0.035 * calculateRResult + 0.0000071 * calculateRResult * (calculateRResult - 60) * (100 - calculateRResult);
    }
    num = num3;
  }
  return num;
};
prototype["calculateR"] = function calculateR(sum, arg1) {
  let num = 0;
  const result = 0.024 * sum;
  if (sum > 177.3) {
    num = 0.11 * (sum - 177.3);
  }
  return 93.4 - (result + num) - (10 + 122 * arg1 / (arg1 + 10));
};
let result = require("set").fileFinishedImporting("lib/VoiceQuality.tsx");

export default VoiceQuality;
export const VoiceQualityEvent = obj;