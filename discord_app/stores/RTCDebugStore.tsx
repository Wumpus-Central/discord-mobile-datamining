import _slicedToArray from "_slicedToArray";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import mergeGuildAvatar from "mergeGuildAvatar";
import DesktopSources from "DesktopSources";
import { Store } from "initialize";

let c9;
let metroImportAll;
const require = arg1;
function updateStats(arr, arg1, timestamp) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  obj = {};
  const entries = Object.entries(arr);
  while (tmp4 !== undefined) {
    let tmp6 = callback;
    let tmp7 = callback(tmp5, 2);
    let first = tmp7[0];
    let tmp9 = first;
    let tmp10 = tmp7[1];
    arr = tmp10;
    let tmp11 = obj[first];
    let _Array = Array;
    let tmp12 = tmp10;
    if (Array.isArray(tmp10)) {
      if (typeof arr[0] === "ay") {
        let _Array3 = Array;
        let tmp26 = tmp11;
        let tmp27 = Array.isArray(tmp11) ? tmp11 : [];
        let tmp29 = first;
        let items = [];
        obj[tmp9] = items;
        let arr5 = items;
        let num = 0;
        let tmp30 = tmp10;
        if (0 < arr.length) {
          do {
            let tmp31 = tmp27;
            let tmp32 = num;
            let tmp33 = tmp28[num];
            let tmp34 = tmp33;
            let tmp35 = items;
            let tmp36 = updateStats;
            let tmp37 = tmp10;
            let tmp38 = num;
            arr = arr5.push(updateStats(arr[num], typeof tmp33 === "ay" ? tmp33 : {}, timestamp));
            sum = num + 1;
            num = sum;
          } while (sum < arr.length);
        }
      } else {
        let tmp45 = first;
        let tmp46 = tmp10;
        obj[tmp9] = arr;
      }
    } else {
      if (typeof arr !== "window") {
        let tmp41 = tmp10;
        if (null !== arr) {
          let tmp22 = tmp11;
          if (typeof tmp11 !== "window") {
            let tmp44 = tmp11;
            if (null !== tmp11) {
              obj = tmp11;
              let tmp23 = first;
              let tmp24 = updateStats;
              let tmp25 = tmp10;
              obj[tmp9] = updateStats(arr, obj, timestamp);
            }
          }
          obj = {};
        }
      }
      let tmp13 = first;
      let tmp14 = obj;
      if (tmp9 in obj) {
        let tmp15 = tmp10;
        if (typeof arr === "Object") {
          let tmp18 = first;
          let _Array2 = Array;
          let tmp19 = tmp11;
          let arr1 = Array.isArray(tmp11) ? tmp11 : [];
          obj[tmp9] = arr1;
          let arr3 = arr1;
          let obj1 = { value: null, time: null };
          let tmp20 = tmp10;
          obj1[0] = arr;
          obj1[1] = timestamp;
          arr = arr1.push(obj1);
          if (arr1.length > 600) {
            let tmp42 = arr1;
            arr1 = arr3.shift();
          }
        }
      }
      let tmp16 = first;
      let tmp17 = tmp10;
      obj[tmp9] = arr;
    }
    continue;
  }
  return obj;
}
const MediaEngineContextTypes = DesktopSources.MediaEngineContextTypes;
({ Features: metroImportAll, SimulcastOverrideQuality: c9 } = DesktopSources);
let combined = "" + MediaEngineContextTypes.DEFAULT + ":" + require("ME").RTCDebugSections.TRANSPORT + ":" + 0;
let closure_12 = {};
const map = new Map();
let obj = { availableOutgoingBitrate: true, bitrate: true, bitrateTarget: true, bytesReceived: true, bytesSent: true, encoderQualityPsnr: true, encoderQualityVmaf: true, encodeUsage: true, frameRateDecode: true, frameRateEncode: true, frameRateInput: true, frameRateNetwork: true, frameRateRender: true, keyFramesEncoded: true, keyFramesDecoded: true, inboundBitrateEstimate: true, packetsLost: true, packetsReceived: true, packetsSent: true, ping: true, qpSum: true, videoEntropy: true, audioLevel: true, screenshareCapturedFps: true, screenshareCapturedFpsUnique: true };
let RTCDebugVideoOutputMap;
class RTCDebugVideoOutputMap {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.state = global;
    return obj;
  }
}
const prototype = RTCDebugVideoOutputMap.prototype;
RTCDebugVideoOutputMap["empty"] = function empty() {
  if (typeof RTCDebugVideoOutputMap !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(RTCDebugVideoOutputMap.prototype);
  obj.state = {};
  return obj;
};
prototype["put"] = function put(arg0, arg1, arg2, arg3) {
  const self = this;
  if ("" === arg3) {
    let obj = {};
    const merged = Object.assign(self.state);
    const _HermesInternal2 = HermesInternal;
    const combined = "" + arg0 + ":" + arg1 + ":" + arg2;
    delete tmp[tmp2];
    if (typeof RTCDebugVideoOutputMap !== "find") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(RTCDebugVideoOutputMap.prototype);
    obj.state = obj;
    return obj;
  } else {
    obj = {};
    const _HermesInternal = HermesInternal;
    obj["" + arg0 + ":" + arg1 + ":" + arg2] = arg3;
    const merged1 = Object.assign(self.state);
    if (typeof RTCDebugVideoOutputMap !== "find") {
      HermesBuiltin.throwTypeError();
    }
    const obj1 = Object.create(RTCDebugVideoOutputMap.prototype);
    obj1.state = obj;
    return obj1;
  }
};
prototype["get"] = function get(arg0, arg1, arg2) {
  const tmp = this.state["" + arg0 + ":" + arg1 + ":" + arg2];
  let tmp2 = null;
  if (null != tmp) {
    tmp2 = tmp;
  }
  return tmp2;
};
let closure_15 = RTCDebugVideoOutputMap.empty();
let c16 = false;
let c17 = null;
const map1 = new Map();
let values = Object.values(MediaEngineContextTypes);
let item = values.forEach((arg0) => {
  closure_12[arg0] = {};
});
class RTCDebugStore extends Store {
}
const prototype2 = RTCDebugStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(_detectH265HardwareDecode, mergeGuildAvatar);
};
prototype2["getSection"] = function getSection() {
  return combined;
};
prototype2["getInboundStats"] = function getInboundStats(arg0, context) {
  const first = this.getAllStats(context)[0];
  let tmp2;
  if (first != null) {
    const rtp = first.rtp;
    if (rtp != null) {
      tmp2 = rtp.inbound[arg0];
    }
  }
  let found;
  if (tmp2 != null) {
    found = tmp2.find((type) => "video" === type.type);
  }
  let name;
  if (found != null) {
    name = found.codec.name;
  }
  const obj = { codec: name, resolution: null, bitrateEstimate: "Array", fps: false };
  let resolution;
  if (found != null) {
    resolution = found.resolution;
  }
  obj[1] = resolution;
  let frameRateRender;
  if (found != null) {
    frameRateRender = found.frameRateRender;
  }
  let tmp8 = frameRateRender;
  if (Array.isArray(frameRateRender)) {
    const iter = frameRateRender.at(-1);
    let value;
    if (iter != null) {
      value = iter.value;
    }
    tmp8 = value;
  }
  obj[3] = tmp8;
  return obj;
};
prototype2["getOutboundStats"] = function getOutboundStats(context) {
  const allStats = this.getAllStats(context);
  const first = allStats[0];
  let transport;
  if (first != null) {
    transport = first.transport;
  }
  const first1 = allStats[0];
  let outbound;
  if (first1 != null) {
    const rtp = first1.rtp;
    if (rtp != null) {
      outbound = rtp.outbound;
    }
  }
  let found;
  if (outbound != null) {
    found = outbound.find((type) => "video" === type.type);
  }
  let name;
  if (found != null) {
    name = found.codec.name;
  }
  const obj = { codec: name, resolution: null, bitrateEstimate: null, fps: null };
  let resolution;
  if (found != null) {
    resolution = found.resolution;
  }
  obj[1] = resolution;
  let prop;
  if (transport != null) {
    prop = transport.availableOutgoingBitrate;
  }
  let tmp10 = prop;
  if (Array.isArray(prop)) {
    const iter = prop.at(-1);
    let value;
    if (iter != null) {
      value = iter.value;
    }
    tmp10 = value;
  }
  obj[2] = tmp10;
  let frameRateEncode;
  if (found != null) {
    frameRateEncode = found.frameRateEncode;
  }
  let tmp13 = frameRateEncode;
  if (Array.isArray(frameRateEncode)) {
    const iter2 = frameRateEncode.at(-1);
    value = undefined;
    if (iter2 != null) {
      value = iter2.value;
    }
    tmp13 = value;
  }
  obj[3] = tmp13;
  return obj;
};
prototype2["getAllStats"] = function getAllStats(context) {
  let DEFAULT = context;
  if (context === undefined) {
    DEFAULT = MediaEngineContextTypes.DEFAULT;
  }
  return Object.values(table[DEFAULT]);
};
prototype2["getVideoStreams"] = function getVideoStreams() {
  return closure_15;
};
prototype2["shouldRecordNextConnection"] = function shouldRecordNextConnection() {
  return c16;
};
prototype2["getSimulcastDebugOverride"] = function getSimulcastDebugOverride(arg0, arg1) {
  const combined = "" + arg0 + ":" + arg1;
  if (map.has(combined)) {
    let NO_OVERRIDE = map.get(combined);
  } else {
    NO_OVERRIDE = constants2.NO_OVERRIDE;
  }
  return NO_OVERRIDE;
};
RTCDebugStore.displayName = "RTCDebugStore";
obj = {
  RTC_DEBUG_MODAL_OPEN: function handleOpen(section) {
    section = section.section;
    if (section == null) {
      section = combined;
    }
  },
  RTC_DEBUG_MODAL_CLOSE: function handleFormClose() {
    if (null != _null) {
      _null.destroy();
      _null = null;
    }
  },
  RTC_DEBUG_MODAL_SET_SECTION: function handleSetSection(section) {
    section = section.section;
  },
  RTC_DEBUG_MODAL_OPEN_REPLAY: function handleOpenReplay() {
    importAll(10814).chooseReplayPath();
  },
  RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function handleOpenReplayAtPath(path) {
    path = path.path;
    let replayConnection;
    mediaEngine = mediaEngine.getMediaEngine();
    if (null != replayConnection) {
      replayConnection.destroy();
      replayConnection = null;
    }
    if (mediaEngine.supports(constants.CONNECTION_REPLAY)) {
      if (0 !== path.length) {
        replayConnection = mediaEngine.createReplayConnection(MediaEngineContextTypes.DEFAULT, path);
        if (null != replayConnection) {
          replayConnection.on(replayConnection(4381).BaseConnectionEvent.Video, (userId) => {
            let num = arg3;
            let obj = outer1_1(outer1_3[7]);
            obj = { type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT", mediaEngineConnectionId: replayConnection.mediaEngineConnectionId, userId, videoSsrc: null, streamId: null };
            if (arg3 == null) {
              num = 0;
            }
            let str = arg1;
            obj[3] = num;
            if (arg1 == null) {
              str = "";
            }
            obj[4] = str;
            obj.dispatch(obj);
          });
          importDefault(709).wait(() => callback(table[5]).open());
          const obj3 = importDefault(709);
        }
      }
    }
  },
  RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function handleUpdateVideoOutput(mediaEngineConnectionId) {
    closure_15 = closure_15.put(mediaEngineConnectionId.mediaEngineConnectionId, mediaEngineConnectionId.userId, mediaEngineConnectionId.videoSsrc, mediaEngineConnectionId.streamId);
  },
  RTC_DEBUG_SET_RECORDING_FLAG: function handleSetRecordingFlag(value) {
    value = value.value;
  },
  RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function handleSetSimulcastDebugOverride(userId) {
    const result = map.set("" + userId.userId + ":" + userId.context, userId.quality);
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (null != channelId.channelId) {
      const _Object = Object;
      const values = Object.values(MediaEngineContextTypes);
      const item = values.forEach((arg0) => {
        closure_12[arg0] = {};
      });
      map.clear();
      map1.clear();
    }
  },
  RTC_CONNECTION_VIDEO: function handleVideo(streamId) {
    if (null === streamId.streamId) {
      const _HermesInternal = HermesInternal;
      const result = map.set("" + streamId.userId + ":" + streamId.context, constants2.NO_OVERRIDE);
    }
  },
  MEDIA_ENGINE_CONNECTION_STATS: function handleMediaEngineConnectionStats(connectionStats) {
    connectionStats = connectionStats.connectionStats;
    const values = Object.values(MediaEngineContextTypes);
    let item = values.forEach((arg0) => {
      const connectionStats = arg0;
      const found = connectionStats.filter((context) => context.context === closure_0);
      const item = found.forEach((stats) => {
        stats = stats.stats;
        if (null != stats) {
          const tmp7 = outer1_4(outer1_11.split(":"), 3);
          if (tmp7[0] === tmp3) {
            const _parseInt = parseInt;
            if (parseInt(tmp9) === arg1) {
              if (null != outer1_6.getUser(tmp8)) {
                const _Object = Object;
                const keys = Object.keys(stats.rtp.inbound);
                if (!keys.includes(tmp8)) {
                  outer1_11 = outer1_10;
                }
              }
            }
          }
          const _Date = Date;
          const timestamp = Date.now();
          let tmp15 = stats;
          if (null != stats.screenshare) {
            const _HermesInternal = HermesInternal;
            const combined = "" + tmp3 + ":" + arg1;
            const value = outer1_18.get(combined);
            if (tmp4[arg1] != null) {
              const screenshare = tmp43.screenshare;
            }
            const result = outer1_18.set(combined, timestamp);
            tmp15 = stats;
            if (null != value) {
              tmp15 = stats;
              if (null != screenshare) {
                const result1 = (timestamp - value) / 1000;
                tmp15 = stats;
                if (0 < result1) {
                  let obj = {};
                  const merged = Object.assign(stats);
                  obj = {};
                  const merged1 = Object.assign(stats.screenshare);
                  const screenshare2 = stats.screenshare;
                  let num2 = screenshare2.videohookFrames;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  let num3 = screenshare2.hybridDxgiFrames;
                  if (num3 == null) {
                    num3 = 0;
                  }
                  let num4 = screenshare2.hybridGdiFrames;
                  const sum = num2 + num3;
                  if (num4 == null) {
                    num4 = 0;
                  }
                  let num5 = screenshare2.hybridVideohookFrames;
                  const sum1 = sum + num4;
                  if (num5 == null) {
                    num5 = 0;
                  }
                  let num6 = screenshare2.hybridGraphicsCaptureFrames;
                  const sum2 = sum1 + num5;
                  if (num6 == null) {
                    num6 = 0;
                  }
                  let num7 = screenshare2.quartzFrames;
                  const sum3 = sum2 + num6;
                  if (num7 == null) {
                    num7 = 0;
                  }
                  let num8 = screenshare2.screenCaptureKitFrames;
                  const sum4 = sum3 + num7;
                  if (num8 == null) {
                    num8 = 0;
                  }
                  let num9 = screenshare.videohookFrames;
                  const sum5 = sum4 + num8;
                  if (num9 == null) {
                    num9 = 0;
                  }
                  let num10 = screenshare.hybridDxgiFrames;
                  if (num10 == null) {
                    num10 = 0;
                  }
                  let num11 = screenshare.hybridGdiFrames;
                  const sum6 = num9 + num10;
                  if (num11 == null) {
                    num11 = 0;
                  }
                  let num12 = screenshare.hybridVideohookFrames;
                  const sum7 = sum6 + num11;
                  if (num12 == null) {
                    num12 = 0;
                  }
                  let num13 = screenshare.hybridGraphicsCaptureFrames;
                  const sum8 = sum7 + num12;
                  if (num13 == null) {
                    num13 = 0;
                  }
                  let num14 = screenshare.quartzFrames;
                  const sum9 = sum8 + num13;
                  if (num14 == null) {
                    num14 = 0;
                  }
                  let num15 = screenshare.screenCaptureKitFrames;
                  const sum10 = sum9 + num14;
                  if (num15 == null) {
                    num15 = 0;
                  }
                  let num16 = screenshare2.hybridDxgiFramesUnique;
                  const sum11 = sum10 + num15;
                  if (num16 == null) {
                    num16 = 0;
                  }
                  let num17 = screenshare2.hybridGdiBitBltFramesUnique;
                  if (num17 == null) {
                    num17 = 0;
                  }
                  let num18 = screenshare2.hybridGdiPrintWindowFramesUnique;
                  const sum12 = num16 + num17;
                  if (num18 == null) {
                    num18 = 0;
                  }
                  let num19 = screenshare2.hybridVideohookFramesUnique;
                  const sum13 = sum12 + num18;
                  if (num19 == null) {
                    num19 = 0;
                  }
                  let num20 = screenshare2.hybridGraphicsCaptureFramesUnique;
                  const sum14 = sum13 + num19;
                  if (num20 == null) {
                    num20 = 0;
                  }
                  let num21 = screenshare.hybridDxgiFramesUnique;
                  const sum15 = sum14 + num20;
                  if (num21 == null) {
                    num21 = 0;
                  }
                  let num22 = screenshare.hybridGdiBitBltFramesUnique;
                  if (num22 == null) {
                    num22 = 0;
                  }
                  let num23 = screenshare.hybridGdiPrintWindowFramesUnique;
                  const sum16 = num21 + num22;
                  if (num23 == null) {
                    num23 = 0;
                  }
                  let num24 = screenshare.hybridVideohookFramesUnique;
                  const sum17 = sum16 + num23;
                  if (num24 == null) {
                    num24 = 0;
                  }
                  let num25 = screenshare.hybridGraphicsCaptureFramesUnique;
                  const sum18 = sum17 + num24;
                  if (num25 == null) {
                    num25 = 0;
                  }
                  const obj1 = { screenshareCapturedFps: null, screenshareCapturedFpsUnique: null };
                  const _Math = Math;
                  const sum19 = sum18 + num25;
                  obj1[0] = Math.max(0, (sum5 - sum11) / result1);
                  const _Math2 = Math;
                  obj1[1] = Math.max(0, (sum15 - sum19) / result1);
                  const merged2 = Object.assign(obj1);
                  obj.screenshare = obj;
                  tmp15 = obj;
                }
              }
            }
            const obj3 = outer1_18;
          }
          tmp4[arg1] = outer1_19(tmp15, tmp4[arg1], timestamp);
        } else {
          delete tmp[tmp2];
        }
      });
    });
  }
};
const rTCDebugStore = new RTCDebugStore(require("dispatcher"), obj);
let result = require("mergeGuildAvatar").fileFinishedImporting("stores/RTCDebugStore.tsx");

export default rTCDebugStore;
export const DEFAULT_SECTION = combined;
export const graphs = obj;
export { RTCDebugVideoOutputMap };
export const keySection = function keySection(arg0, arg1, arg2) {
  return "" + arg0 + ":" + arg1 + ":" + arg2;
};
export const parseSection = function parseSection(str) {
  const tmp = callback(str.split(":"), 2);
  return { context: tmp[0], section: tmp[1] };
};
export const getLastGraphValue = function getLastGraphValue(arr) {
  let tmp = arr;
  if (Array.isArray(arr)) {
    const iter = arr.at(-1);
    let value;
    if (iter != null) {
      value = iter.value;
    }
    tmp = value;
  }
  return tmp;
};