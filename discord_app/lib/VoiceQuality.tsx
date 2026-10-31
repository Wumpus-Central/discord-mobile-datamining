// discord_app/lib/VoiceQuality.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import BaseConnectionEvent from "../../discord_common/js/packages/media-engine/index.tsx";
import Histogram from "Histogram.tsx";
import NetworkQualityDefault from "NetworkQuality.tsx";
import SystemResourcesDefault from "SystemResources.tsx";
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
      let mean = null;
      let text5 = `${key10012}_mean`;
      if (null != obj2) {
        mean = obj2.mean;
      }
      obj[text5] = mean;
      let p75 = null;
      let text6 = `${key10012}_p75`;
      if (null != obj2) {
        p75 = obj2.p75;
      }
      obj[text6] = p75;
      let p95 = null;
      let text7 = `${key10012}_p95`;
      if (null != obj2) {
        p95 = obj2.p95;
      }
      obj[text7] = p95;
      let p99 = null;
      let text8 = `${key10012}_p99`;
      if (null != obj2) {
        p99 = obj2.p99;
      }
      obj[text8] = p99;
      let max = null;
      let text9 = `${key10012}_max`;
      if (null != obj2) {
        max = obj2.max;
      }
      obj[text9] = max;
      continue;
    }
    continue;
  }
  return obj;
}
function zeroCounters(arr) {
  return Object.fromEntries(
    arr.map((item) => {
      const items = [item, 0];
      return items;
    }),
  );
}
function fragmentTotals(arr, arr, outboundBaseline, lastRaw) {
  if (arr.some((item) => lastRaw[item] < outboundBaseline.lastRaw[item])) {
    outboundBaseline.baseline = zeroCounters(arr);
  }
  outboundBaseline.lastRaw = lastRaw;
  obj = {};
  const iter = arr[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj[nextResult] = lastRaw[nextResult] - outboundBaseline.baseline[nextResult];
    continue;
  }
  return obj;
}
function counterTotal(lastRaw, lastRaw2) {
  if (lastRaw2 < lastRaw.lastRaw) {
    lastRaw.baseline = 0;
  }
  lastRaw.lastRaw = lastRaw2;
  return lastRaw2 - lastRaw.baseline;
}
function carriedFragmentTotals(arg0, outboundLatencyBaseline, type, outboundStats) {
  obj = {};
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = type[nextResult];
    if (null == tmp3) {
      let tmp9;
      if (outboundStats != null) {
        tmp9 = outboundStats[tmp2];
      }
      let tmp8 = tmp9;
    } else {
      tmp8 = counterTotal(outboundLatencyBaseline[tmp2], tmp4);
    }
    obj[nextResult] = tmp8;
    continue;
  }
  return obj;
}
const hasOwnProperty = [
  "packetsSent",
  "bytesSent",
  "packetsLost",
  "passthroughCount",
  "encryptSuccessCount",
  "encryptFailureCount",
  "encryptDuration",
  "encryptAttempts",
  "encryptMissingKeyCount",
];
let closure_6 = ["packetsSent", "bytesSent"];
let closure_7 = [
  "packetsReceived",
  "bytesReceived",
  "packetsLost",
  "nackCount",
  "fecPacketsReceived",
  "fecPacketsDiscarded",
  "opSilence",
  "opNormal",
  "opMerge",
  "opExpand",
  "opAccelerate",
  "opPreemptiveExpand",
  "opCNG",
  "passthroughCount",
  "decryptSuccessCount",
  "decryptFailureCount",
  "decryptDuration",
  "decryptAttempts",
  "decryptMissingKeyCount",
  "decryptInvalidNonceCount",
];
let closure_8 = ["packetsReceived", "bytesReceived"];
const React7 = [
  "captureProcessingDelayMs",
  "captureProcessingFrameCount",
  "apmProcessTimeMs",
  "apmFrameCount",
  "sendDelayMs",
  "sendPacketCount",
  "totalPacketSendDelayMs",
  "noiseCancellerProcessTime",
  "noiseCancellerFrames",
];
let closure_10 = ["audioReceiverDelayMs", "audioReceiverPacketCount"];
let closure_11 = ["transportDelayMs", "transportPacketCount"];
let closure_12 = ["opSilence", "opNormal", "opMerge", "opExpand", "opAccelerate", "opPreemptiveExpand", "opCNG"];
const VoiceQualityEvent = { InputDeviceSampleRateChanged: "input-device-sample-rate-changed" };
class VoiceQuality extends tmp2 {
  constructor(arg0) {
    tmp5 = new VoiceQuality(tmp4, tmp3, tmp2, tmp);
    closure_0 = tmp5;
    tmp5.sampleAudioDevice = function sampleAudioDevice(input, inputDeviceStats) {
      if (undefined !== input) {
        if (undefined === input.restartCount) {
          if (undefined === input.bufferViolations) {
            let num = input.bufferSize;
            if (num == null) {
              num = 0;
            }
            if (0 !== num) {
              inputDeviceStats.bufferSize = input.bufferSize;
            }
            let num3 = input.bufferOccupiedSizeMean;
            if (num3 == null) {
              num3 = 0;
            }
            if (0 !== num3) {
              inputDeviceStats.bufferOccupiedSizeMean = input.bufferOccupiedSizeMean;
            }
            let num4 = input.timeToFirstCallbackMs;
            if (num4 == null) {
              num4 = 0;
            }
            if (tmp6) {
              inputDeviceStats.timeToFirstCallbackMs = input.timeToFirstCallbackMs;
            }
            let num5 = input.sessionSampleRate;
            if (num5 == null) {
              num5 = 0;
            }
            if (0 !== num5) {
              if (inputDeviceStats.sessionSampleRate !== input.sessionSampleRate) {
                let num6 = input.sessionSampleRate;
                if (num6 == null) {
                  num6 = 0;
                }
                closure_0.emit(obj.InputDeviceSampleRateChanged, num6);
              }
              inputDeviceStats.sessionSampleRate = input.sessionSampleRate;
            }
            if (tmp10) {
              inputDeviceStats.timeFromConnectToFirstCallbackMs = input.timeFromConnectToFirstCallbackMs;
            }
            if (undefined !== input.delayMs) {
              inputDeviceStats.delayMs = input.delayMs;
            }
            if (undefined !== input.totalDelayMs) {
              inputDeviceStats.totalDelayMs = input.totalDelayMs;
            }
            tmp10 =
              undefined !== input.timeFromConnectToFirstCallbackMs &&
              undefined === inputDeviceStats.timeFromConnectToFirstCallbackMs;
            tmp6 = 0 !== num4 && undefined === inputDeviceStats.timeToFirstCallbackMs;
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
    tmp5.appendTargetRates = function appendTargetRates(previousTimestampMs) {
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
    tmp5.sampleStats = function sampleStats(rtp) {
      if (null != rtp) {
        const networkQuality = num.networkQuality;
        const result = networkQuality.incrementNetworkStats(num(5772).now());
        const systemResources = num.systemResources;
        systemResources.takeSample();
        num = 0;
        let obj3 = num(5772);
        let item = _modDef12.forEach(rtp.rtp.outbound, (type) => {
          if ("audio" === type.type) {
            num = type.bitrateTarget;
            if (num == null) {
              num = 0;
            }
            obj = {
              packetsSent: null,
              bytesSent: null,
              packetsLost: null,
              passthroughCount: null,
              encryptSuccessCount: null,
              encryptFailureCount: null,
              encryptDuration: null,
              encryptAttempts: null,
              encryptMissingKeyCount: null,
            };
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
            let num7 = type.encryptMissingKeyCount;
            if (num7 == null) {
              num7 = 0;
            }
            obj.encryptMissingKeyCount = num7;
            const obj2 = {};
            const merged = Object.assign(num.outboundStats);
            const merged1 = Object.assign(fragmentTotals(closure_5, closure_6, num.outboundBaseline, obj));
            const merged2 = Object.assign(
              carriedFragmentTotals(closure_9, num.outboundLatencyBaseline, type, num.outboundStats),
            );
            let num10 = type.encryptMaxAttempts;
            if (num10 == null) {
              num10 = 0;
            }
            obj2.encryptMaxAttempts = num10;
            num.outboundStats = obj2;
            const _Boolean = Boolean;
            if (tmp16) {
              const speakingAudioLevel = tmp.outboundStats.speakingAudioLevel;
              const _Math = Math;
              speakingAudioLevel.addSample(20 * Math.log(type.audioLevel));
            }
            tmp16 = true === Boolean(type.audioDetected) && null != type.audioLevel;
          }
        });
        const decryptionFailures = num.transportBaseline.decryptionFailures;
        const decryptionFailures2 = rtp.transport.decryptionFailures;
        if (null == decryptionFailures2) {
          decryptionFailures.baseline = 0;
          decryptionFailures.lastRaw = 0;
          let diff = decryptionFailures2;
        } else {
          if (decryptionFailures2 < decryptionFailures.lastRaw) {
            decryptionFailures.baseline = 0;
          }
          decryptionFailures.lastRaw = decryptionFailures2;
          diff = decryptionFailures2 - decryptionFailures.baseline;
        }
        const transportStats = { decryptionFailures: diff, routingFailures: null };
        const routingFailures = obj2.transportBaseline.routingFailures;
        const routingFailures2 = rtp.transport.routingFailures;
        if (null == routingFailures2) {
          routingFailures.baseline = 0;
          routingFailures.lastRaw = 0;
          let diff1 = routingFailures2;
        } else {
          if (routingFailures2 < routingFailures.lastRaw) {
            routingFailures.baseline = 0;
          }
          routingFailures.lastRaw = routingFailures2;
          diff1 = routingFailures2 - routingFailures.baseline;
        }
        transportStats.routingFailures = diff1;
        num = 0;
        let merged = Object.assign(
          carriedFragmentTotals(closure_1_11, obj2.transportBaseline, rtp.transport, obj2.transportStats),
        );
        num.transportStats = transportStats;
        num.appendTargetRates(num.outboundStats, rtp.transport.availableOutgoingBitrate, num);
        const item1 = _modDef12.forEach(rtp.rtp.inbound, (arg0, arg1) => {
          closure_0 = arg1;
          const item = closure_1_1(dependencyMap[5]).forEach(arg0, (type) => {
            if ("audio" === type.type) {
              const inboundBaselines = num.inboundBaselines;
              let tmp3 = inboundBaselines[closure_0];
              if (tmp3 == null) {
                obj = { baseline: null, lastRaw: null };
                const _Object = Object;
                obj.baseline = Object.fromEntries(
                  closure_3_7.map((item) => {
                    const items = [item, 0];
                    return items;
                  }),
                );
                const _Object2 = Object;
                obj.lastRaw = Object.fromEntries(
                  closure_3_7.map((item) => {
                    const items = [item, 0];
                    return items;
                  }),
                );
                inboundBaselines[closure_0] = obj;
                tmp3 = obj;
              }
              const inboundLatencyBaselines = tmp64.inboundLatencyBaselines;
              let tmp4 = inboundLatencyBaselines[closure_0];
              if (tmp4 == null) {
                const _Object3 = Object;
                const fromEntriesResult = Object.fromEntries(
                  closure_3_10.map((item) => {
                    const items = [item, { baseline: 0, lastRaw: 0 }];
                    return items;
                  }),
                );
                inboundLatencyBaselines[closure_0] = fromEntriesResult;
                tmp4 = fromEntriesResult;
              }
              const obj3 = {
                packetsReceived: null,
                bytesReceived: null,
                packetsLost: null,
                nackCount: null,
                fecPacketsReceived: null,
                fecPacketsDiscarded: null,
                opSilence: null,
                opNormal: null,
                opMerge: null,
                opExpand: null,
                opAccelerate: null,
                opPreemptiveExpand: null,
                opCNG: null,
                passthroughCount: null,
                decryptSuccessCount: null,
                decryptFailureCount: null,
                decryptDuration: null,
                decryptAttempts: null,
                decryptMissingKeyCount: null,
                decryptInvalidNonceCount: null,
              };
              ({
                packetsReceived: obj2.packetsReceived,
                bytesReceived: obj2.bytesReceived,
                packetsLost: obj2.packetsLost,
                nackCount,
              } = type);
              if (nackCount == null) {
                nackCount = 0;
              }
              obj3.nackCount = nackCount;
              num = type.fecPacketsReceived;
              if (num == null) {
                num = 0;
              }
              obj3.fecPacketsReceived = num;
              let num2 = type.fecPacketsDiscarded;
              if (num2 == null) {
                num2 = 0;
              }
              obj3.fecPacketsDiscarded = num2;
              let num3 = type.opSilence;
              if (num3 == null) {
                num3 = 0;
              }
              obj3.opSilence = num3;
              let num4 = type.opNormal;
              if (num4 == null) {
                num4 = 0;
              }
              obj3.opNormal = num4;
              let num5 = type.opMerge;
              if (num5 == null) {
                num5 = 0;
              }
              obj3.opMerge = num5;
              let num6 = type.opExpand;
              if (num6 == null) {
                num6 = 0;
              }
              obj3.opExpand = num6;
              let num7 = type.opAccelerate;
              if (num7 == null) {
                num7 = 0;
              }
              obj3.opAccelerate = num7;
              let num8 = type.opPreemptiveExpand;
              if (num8 == null) {
                num8 = 0;
              }
              obj3.opPreemptiveExpand = num8;
              let num9 = type.opCNG;
              if (num9 == null) {
                num9 = 0;
              }
              obj3.opCNG = num9;
              let num10 = type.passthroughCount;
              if (num10 == null) {
                num10 = 0;
              }
              obj3.passthroughCount = num10;
              let num11 = type.decryptSuccessCount;
              if (num11 == null) {
                num11 = 0;
              }
              obj3.decryptSuccessCount = num11;
              let num12 = type.decryptFailureCount;
              if (num12 == null) {
                num12 = 0;
              }
              obj3.decryptFailureCount = num12;
              let num13 = type.decryptDuration;
              if (num13 == null) {
                num13 = 0;
              }
              obj3.decryptDuration = num13;
              let num14 = type.decryptAttempts;
              if (num14 == null) {
                num14 = 0;
              }
              obj3.decryptAttempts = num14;
              let num15 = type.decryptMissingKeyCount;
              if (num15 == null) {
                num15 = 0;
              }
              obj3.decryptMissingKeyCount = num15;
              let num16 = type.decryptInvalidNonceCount;
              if (num16 == null) {
                num16 = 0;
              }
              obj3.decryptInvalidNonceCount = num16;
              const tmp13 = fragmentTotals(closure_3_7, closure_3_8, tmp3, obj3);
              let opSilence;
              if (null != type.opSilence) {
                opSilence = tmp13.opSilence;
              }
              const obj5 = {
                silent: opSilence,
                normal: null,
                merged: null,
                expanded: null,
                accelerated: null,
                preemptiveExpanded: null,
                cng: null,
              };
              let opNormal;
              if (null != type.opNormal) {
                opNormal = tmp13.opNormal;
              }
              obj5.normal = opNormal;
              let opMerge;
              if (null != type.opMerge) {
                opMerge = tmp13.opMerge;
              }
              obj5.merged = opMerge;
              let opExpand;
              if (null != type.opExpand) {
                opExpand = tmp13.opExpand;
              }
              obj5.expanded = opExpand;
              let opAccelerate;
              if (null != type.opAccelerate) {
                opAccelerate = tmp13.opAccelerate;
              }
              obj5.accelerated = opAccelerate;
              let opPreemptiveExpand;
              if (null != type.opPreemptiveExpand) {
                opPreemptiveExpand = tmp13.opPreemptiveExpand;
              }
              obj5.preemptiveExpanded = opPreemptiveExpand;
              let opCNG;
              if (null != type.opCNG) {
                opCNG = tmp13.opCNG;
              }
              obj5.cng = opCNG;
              const tmp26 = carriedFragmentTotals(closure_3_10, tmp4, type, num.inboundStats[closure_0]);
              const obj7 = {
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
                prop = tmp66.bufferStats.audioJitterBufferHistogram;
              }
              if (prop == null) {
                prop = new closure_0(5894).Histogram();
              }
              obj7.audioJitterBufferHistogram = prop;
              obj7.audioJitterTarget = type.audioJitterTarget;
              let prop1;
              if (num.inboundStats[closure_0] != null) {
                prop1 = tmp66.bufferStats.audioJitterTargetHistogram;
              }
              if (prop1 == null) {
                prop1 = new closure_0(5894).Histogram();
              }
              obj7.audioJitterTargetHistogram = prop1;
              obj7.audioJitterDelay = type.audioJitterDelay;
              let prop2;
              if (num.inboundStats[closure_0] != null) {
                prop2 = tmp66.bufferStats.audioJitterDelayHistogram;
              }
              if (prop2 == null) {
                prop2 = new closure_0(5894).Histogram();
              }
              obj7.audioJitterDelayHistogram = prop2;
              ({
                relativeReceptionDelay: obj4.relativeReceptionDelay,
                relativePlayoutDelay: obj4.relativePlayoutDelay,
              } = type);
              const audioJitterBufferHistogram = obj7.audioJitterBufferHistogram;
              let prop3 = type.audioJitterBufferSamples;
              if (prop3 == null) {
                prop3 = [];
              }
              audioJitterBufferHistogram.addSamples(prop3);
              const audioJitterDelayHistogram = obj7.audioJitterDelayHistogram;
              let prop4 = type.audioJitterDelaySamples;
              if (prop4 == null) {
                prop4 = [];
              }
              audioJitterDelayHistogram.addSamples(prop4);
              const audioJitterTargetHistogram = obj7.audioJitterTargetHistogram;
              let prop5 = type.audioJitterTargetSamples;
              if (prop5 == null) {
                prop5 = [];
              }
              audioJitterTargetHistogram.addSamples(prop5);
              const obj12 = {};
              const merged = Object.assign(_modDef12.omit(tmp13, closure_3_12));
              const merged1 = Object.assign(tmp26);
              if (null != num.inboundStats[closure_0]) {
                if (!tmp45) {
                  let connectedAtMs = tmp66.connectedAtMs;
                }
                obj12.connectedAtMs = connectedAtMs;
                let tmp55;
                if (!tmp45) {
                  let disconnectedAtMs;
                  if (tmp66 != null) {
                    disconnectedAtMs = tmp66.disconnectedAtMs;
                  }
                  tmp55 = disconnectedAtMs;
                }
                obj12.disconnectedAtMs = tmp55;
                obj12.bufferStats = obj7;
                obj12.frameOpStats = obj5;
                let tmp57;
                if (null != tmp66) {
                  if (!tmp45) {
                    let decryptFailureBeforeSuccessCount = tmp66.decryptFailureBeforeSuccessCount;
                    if (decryptFailureBeforeSuccessCount == null) {
                      let decryptFailureCount;
                      if (tmp13.decryptSuccessCount > 0) {
                        decryptFailureCount = tmp13.decryptFailureCount;
                      }
                      decryptFailureBeforeSuccessCount = decryptFailureCount;
                    }
                    tmp57 = decryptFailureBeforeSuccessCount;
                  }
                }
                obj12.decryptFailureBeforeSuccessCount = tmp57;
                tmp64.inboundStats[closure_0] = obj12;
                let previousTimestampMs;
                if (tmp64.periodicInboundStats[closure_0] != null) {
                  previousTimestampMs = tmp59.previousTimestampMs;
                }
                if (previousTimestampMs == null) {
                  const _performance2 = performance;
                  previousTimestampMs = performance.now();
                }
                const obj13 = {
                  previousTimestampMs,
                  previous: null,
                  currentTimestampMs: null,
                  current: null,
                  accelerateRateSum: null,
                  expandRateSum: null,
                  preemptiveExpandRateSum: null,
                  speechExpandRateSum: null,
                  numRateSamples: null,
                };
                let previous;
                if (tmp64.periodicInboundStats[closure_0] != null) {
                  previous = tmp59.previous;
                }
                if (previous == null) {
                  previous = obj5;
                }
                obj13.previous = previous;
                const _performance3 = performance;
                obj13.currentTimestampMs = performance.now();
                obj13.current = obj5;
                let num20;
                if (tmp64.periodicInboundStats[closure_0] != null) {
                  num20 = tmp59.accelerateRateSum;
                }
                if (num20 == null) {
                  num20 = 0;
                }
                let num21 = type.accelerateRate;
                if (num21 == null) {
                  num21 = 0;
                }
                obj13.accelerateRateSum = num20 + num21;
                let num22;
                if (tmp64.periodicInboundStats[closure_0] != null) {
                  num22 = tmp59.expandRateSum;
                }
                if (num22 == null) {
                  num22 = 0;
                }
                let num23 = type.expandRate;
                if (num23 == null) {
                  num23 = 0;
                }
                obj13.expandRateSum = num22 + num23;
                let num24;
                if (tmp64.periodicInboundStats[closure_0] != null) {
                  num24 = tmp59.preemptiveExpandRateSum;
                }
                if (num24 == null) {
                  num24 = 0;
                }
                let num25 = type.preemptiveExpandRate;
                if (num25 == null) {
                  num25 = 0;
                }
                obj13.preemptiveExpandRateSum = num24 + num25;
                let num26;
                if (tmp64.periodicInboundStats[closure_0] != null) {
                  num26 = tmp59.speechExpandRateSum;
                }
                if (num26 == null) {
                  num26 = 0;
                }
                let num27 = type.speechExpandRate;
                if (num27 == null) {
                  num27 = 0;
                }
                obj13.speechExpandRateSum = num26 + num27;
                let num28;
                if (tmp64.periodicInboundStats[closure_0] != null) {
                  num28 = tmp59.numRateSamples;
                }
                if (num28 == null) {
                  num28 = 0;
                }
                obj13.numRateSamples = num28 + 1;
                tmp64.periodicInboundStats[closure_0] = obj13;
              }
              const _performance = performance;
              connectedAtMs = performance.now();
            }
          });
        });
        if (undefined !== rtp.audioDevice) {
          obj2.sampleAudioDevice(rtp.audioDevice.input, obj2.inputDeviceStats);
          obj2.sampleAudioDevice(rtp.audioDevice.output, obj2.outputDeviceStats);
        }
        const tmp16Result = _modDef12;
      }
    };
    tmp5.connection = global;
    tmp6 = new closure_1(closure_2[3])();
    tmp5.networkQuality = tmp6;
    tmp7 = new closure_1(closure_2[4])();
    tmp5.systemResources = tmp7;
    tmp5.inboundStats = {};
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
    tmp5.outboundStats = obj;
    tmp5.transportStats = {};
    tmp5.periodicInboundStats = {};
    tmp5.inputDeviceStats = {};
    tmp5.outputDeviceStats = {};
    obj1 = {
      baseline: Object.fromEntries(
        closure_5.map((item) => {
          const items = [item, 0];
          return items;
        }),
      ),
      lastRaw: Object.fromEntries(
        closure_5.map((item) => {
          const items = [item, 0];
          return items;
        }),
      ),
    };
    tmp5.outboundBaseline = obj1;
    tmp5.outboundLatencyBaseline = Object.fromEntries(
      closure_9.map((item) => {
        const items = [item, { baseline: 0, lastRaw: 0 }];
        return items;
      }),
    );
    items = ["decryptionFailures", "routingFailures"];
    arraySpreadResult = HermesBuiltin.arraySpread(closure_11, 2);
    tmp5.transportBaseline = Object.fromEntries(
      items.map((item) => {
        const items = [item, { baseline: 0, lastRaw: 0 }];
        return items;
      }),
    );
    tmp5.inboundBaselines = {};
    tmp5.inboundLatencyBaselines = {};
    return tmp5;
  }
}
const prototype = VoiceQuality.prototype;
prototype["seedFrom"] = function seedFrom(outboundBaseline) {
  const self = this;
  outboundBaseline = outboundBaseline.outboundBaseline;
  this.outboundBaseline = { baseline: outboundBaseline.lastRaw, lastRaw: outboundBaseline.lastRaw };
  this.outboundLatencyBaseline = _modDef12.mapValues(outboundBaseline.outboundLatencyBaseline, (baseline) => ({
    baseline: baseline.lastRaw,
    lastRaw: baseline.lastRaw,
  }));
  this.transportBaseline = _modDef12.mapValues(outboundBaseline.transportBaseline, (baseline) => ({
    baseline: baseline.lastRaw,
    lastRaw: baseline.lastRaw,
  }));
  this.inboundBaselines = _modDef12.mapValues(outboundBaseline.inboundBaselines, (baseline) => ({
    baseline: baseline.lastRaw,
    lastRaw: baseline.lastRaw,
  }));
  this.inboundLatencyBaselines = _modDef12.mapValues(outboundBaseline.inboundLatencyBaselines, (arg0) =>
    _modDef12.mapValues(arg0, (baseline) => ({ baseline: baseline.lastRaw, lastRaw: baseline.lastRaw })),
  );
  const inputDeviceStats = outboundBaseline.inputDeviceStats;
  let tmp;
  if (null != inputDeviceStats.restartCount) {
    const obj5 = { accumulated: 0, lastValue: inputDeviceStats.restartCount.lastValue };
    tmp = obj5;
  }
  const obj6 = { restartCount: tmp, bufferViolations: null, sessionSampleRate: null };
  let tmp2;
  if (null != inputDeviceStats.bufferViolations) {
    const obj7 = { accumulated: 0, lastValue: inputDeviceStats.bufferViolations.lastValue };
    tmp2 = obj7;
  }
  obj6.bufferViolations = tmp2;
  obj6.sessionSampleRate = inputDeviceStats.sessionSampleRate;
  self.inputDeviceStats = obj6;
  const outputDeviceStats = outboundBaseline.outputDeviceStats;
  let tmp3;
  if (null != outputDeviceStats.restartCount) {
    const obj8 = { accumulated: 0, lastValue: outputDeviceStats.restartCount.lastValue };
    tmp3 = obj8;
  }
  const obj9 = { restartCount: tmp3, bufferViolations: null, sessionSampleRate: null };
  let tmp4;
  if (null != outputDeviceStats.bufferViolations) {
    const obj10 = { accumulated: 0, lastValue: outputDeviceStats.bufferViolations.lastValue };
    tmp4 = obj10;
  }
  obj9.bufferViolations = tmp4;
  obj9.sessionSampleRate = outputDeviceStats.sessionSampleRate;
  self.outputDeviceStats = obj9;
};
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
prototype["getOutboundLatencyStats"] = function getOutboundLatencyStats() {
  return {
    capture_processing_delay_ms: this.outboundStats.captureProcessingDelayMs,
    capture_processing_frame_count: this.outboundStats.captureProcessingFrameCount,
    apm_process_time_ms: this.outboundStats.apmProcessTimeMs,
    apm_frame_count: this.outboundStats.apmFrameCount,
    send_delay_ms: this.outboundStats.sendDelayMs,
    send_packet_count: this.outboundStats.sendPacketCount,
    total_packet_send_delay_ms: this.outboundStats.totalPacketSendDelayMs,
    noise_canceller_process_time_ms: this.outboundStats.noiseCancellerProcessTime,
    noise_canceller_frame_count: this.outboundStats.noiseCancellerFrames,
  };
};
prototype["getInboundDurationStats"] = function getInboundDurationStats(sender_user_id) {
  if (null == this.inboundStats[sender_user_id]) {
    obj = {};
  } else {
    let disconnectedAtMs = tmp.disconnectedAtMs;
    if (disconnectedAtMs == null) {
      const _performance = performance;
      disconnectedAtMs = performance.now();
    }
    obj = { duration_connected_ms: Math.round(disconnectedAtMs - tmp.connectedAtMs) };
  }
  return obj;
};
prototype["getInboundLatencyStats"] = function getInboundLatencyStats(sender_user_id) {
  if (null == this.inboundStats[sender_user_id]) {
    obj = {};
  } else {
    obj = { audio_receiver_delay_ms: null, audio_receiver_packet_count: null };
    ({ audioReceiverDelayMs: obj.audio_receiver_delay_ms, audioReceiverPacketCount: obj.audio_receiver_packet_count } =
      tmp);
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
  return {
    decryption_failures: this.transportStats.decryptionFailures,
    routing_failures: this.transportStats.routingFailures,
    transport_delay_ms: this.transportStats.transportDelayMs,
    transport_packet_count: this.transportStats.transportPacketCount,
  };
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
    input_device_buffer_size: null,
    input_device_buffer_occupied_size_mean: null,
    input_device_session_sample_rate: null,
    output_device_session_sample_rate: null,
    input_device_time_from_connect_to_first_audio_ms: null,
    output_device_time_from_connect_to_first_audio_ms: null,
    audio_device_delay_ms: null,
    audio_device_total_delay_ms: null,
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
  obj.input_device_buffer_size = self.inputDeviceStats.bufferSize;
  obj.input_device_buffer_occupied_size_mean = self.inputDeviceStats.bufferOccupiedSizeMean;
  obj.input_device_session_sample_rate = self.inputDeviceStats.sessionSampleRate;
  obj.output_device_session_sample_rate = self.outputDeviceStats.sessionSampleRate;
  obj.input_device_time_from_connect_to_first_audio_ms = self.inputDeviceStats.timeFromConnectToFirstCallbackMs;
  obj.output_device_time_from_connect_to_first_audio_ms = self.outputDeviceStats.timeFromConnectToFirstCallbackMs;
  obj.audio_device_delay_ms = self.outputDeviceStats.delayMs;
  obj.audio_device_total_delay_ms = self.inputDeviceStats.totalDelayMs;
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
prototype["markUserDisconnected"] = function markUserDisconnected(sender_user_id) {
  if (null != this.inboundStats[sender_user_id]) {
    const _performance = performance;
    tmp.disconnectedAtMs = performance.now();
  }
};
prototype["getInboundParticipants"] = function getInboundParticipants() {
  return SnowflakeUtilsDefault.keys(this.inboundStats);
};
const size = fn(2);
let result = size.fileFinishedImporting("lib/VoiceQuality.tsx");

export default VoiceQuality;
export { VoiceQualityEvent };
