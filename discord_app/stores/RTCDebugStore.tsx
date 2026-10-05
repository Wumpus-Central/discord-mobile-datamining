// discord_app/stores/RTCDebugStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants2 from "../Constants.tsx";
import RTCDebugActionCreatorsAll from "../actions/RTCDebugActionCreators.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import MediaEngineStore from "MediaEngineStore.tsx";
import UserStore from "UserStore.tsx";
import Constants from "../../discord_common/js/packages/media-engine/Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let _null, closure_11, obj, stats;

let c9;
let metroImportAll;
function updateStats(arr, arg1) {
  let first;
  let sum;
  let timestamp;
  let tmp10;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  const obj2 = {};
  const entries = Object.entries(arr);
  const tmp4 = entries[Symbol.iterator]();
  while (tmp4 !== undefined) {
    [first, tmp10] = tmp5;
    let tmp9 = first;
    arr = tmp10;
    let tmp11 = obj[first];
    let _Array = Array;
    if (Array.isArray(tmp10)) {
      if (typeof arr[0] === "object") {
        let _Array3 = Array;
        let tmp27 = Array.isArray(tmp11) ? tmp11 : [];
        let items = [];
        obj2[tmp9] = items;
        let arr5 = items;
        let num = 0;
        if (0 < arr.length) {
          do {
            let tmp33 = tmp28[num];
            let arr4 = arr5.push(updateStats(arr[num], typeof tmp33 === "object" ? tmp33 : {}, timestamp));
            sum = num + 1;
            num = sum;
          } while (sum < arr.length);
        }
      } else {
        obj2[tmp9] = arr;
      }
    } else {
      if (typeof arr === "object") {
        if (null !== arr) {
          if (typeof tmp11 === "object") {
            if (null !== tmp11) {
              let obj3 = tmp11;
              obj2[tmp9] = updateStats(arr, obj3, timestamp);
            }
          }
          obj3 = {};
        }
      }
      if (tmp9 in obj) {
        if (typeof arr === "number") {
          let _Array2 = Array;
          let arr2 = Array.isArray(tmp11) ? tmp11 : [];
          obj2[tmp9] = arr2;
          let arr3 = arr2;
          let obj4 = { value: arr, time: timestamp };
          let arr8 = arr2.push(obj4);
          if (arr2.length > 600) {
            let arr9 = arr3.shift();
          }
        }
      }
      obj2[tmp9] = arr;
    }
    continue;
  }
  return obj2;
}
const RTCDebugSections = Constants2.RTCDebugSections;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
({ Features: metroImportAll, SimulcastOverrideQuality: c9 } = Constants);
let combined = "" + MediaEngineContextTypes.DEFAULT + ":" + RTCDebugSections.TRANSPORT + ":" + 0;
let section = combined;
let closure_12 = {};
const map = new Map();
const graphs = {
  availableOutgoingBitrate: true,
  bitrate: true,
  bitrateTarget: true,
  bytesReceived: true,
  bytesSent: true,
  encoderQualityPsnr: true,
  encoderQualityVmaf: true,
  encodeUsage: true,
  frameRateDecode: true,
  frameRateEncode: true,
  frameRateInput: true,
  frameRateNetwork: true,
  frameRateRender: true,
  keyFramesEncoded: true,
  keyFramesDecoded: true,
  inboundBitrateEstimate: true,
  packetsLost: true,
  packetsReceived: true,
  packetsSent: true,
  ping: true,
  qpSum: true,
  videoEntropy: true,
  audioLevel: true,
  screenshareCapturedFps: true,
  screenshareCapturedFpsUnique: true,
};
class RTCDebugVideoOutputMap {
  constructor(state) {
    obj = Object.create(new.target.prototype);
    obj.state = state;
    return obj;
  }
  static empty() {
    if (typeof RTCDebugVideoOutputMap === "function") {
      const state = {};
      const obj2 = Object.create(tmp.prototype);
      obj2.state = state;
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  put(arg0, arg1, arg2, arg3) {
    const self = this;
    if ("" === arg3) {
      const obj5 = {};
      const merged = Object.assign(self.state);
      const _HermesInternal2 = HermesInternal;
      delete obj2["" + arg0 + ":" + arg1 + ":" + arg2];
      const self3 = this;
      if (typeof RTCDebugVideoOutputMap === "function") {
        const obj6 = Object.create(RTCDebugVideoOutputMap.prototype);
        obj6.state = obj5;
        return obj6;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const state = {};
      const _HermesInternal = HermesInternal;
      state["" + arg0 + ":" + arg1 + ":" + arg2] = arg3;
      const merged1 = Object.assign(self.state);
      const self2 = this;
      if (typeof RTCDebugVideoOutputMap === "function") {
        const obj7 = Object.create(RTCDebugVideoOutputMap.prototype);
        obj7.state = state;
        return obj7;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  get(arg0, arg1, arg2) {
    const tmp = this.state["" + arg0 + ":" + arg1 + ":" + arg2];
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = tmp;
    }
    return tmp2;
  }
}
const prototype = RTCDebugVideoOutputMap.prototype;
let closure_15 = RTCDebugVideoOutputMap.empty();
let c16 = false;
let c17 = null;
const map1 = new Map();
let values = Object.values(MediaEngineContextTypes);
let item = values.forEach((item) => {
  closure_1_12[item] = {};
});
const Store = get_initializedDefault.Store;
class RTCDebugStore extends Store {
  initialize() {
    this.waitFor(MediaEngineStore, UserStore);
  }
  getSection() {
    return section;
  }
  getInboundStats(arg0, context) {
    let resolution;
    let tmp8;
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
    obj = { codec: name, resolution, bitrateEstimate: "Array", fps: tmp8 };
    resolution = undefined;
    if (found != null) {
      resolution = found.resolution;
    }
    let frameRateRender;
    if (found != null) {
      frameRateRender = found.frameRateRender;
    }
    tmp8 = frameRateRender;
    if (Array.isArray(frameRateRender)) {
      const iter = frameRateRender.at(-1);
      let value;
      if (iter != null) {
        value = iter.value;
      }
      tmp8 = value;
    }
    return obj;
  }
  getOutboundStats(context) {
    let resolution;
    let tmp10;
    let tmp13;
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
    obj = { codec: name, resolution, bitrateEstimate: tmp10, fps: tmp13 };
    resolution = undefined;
    if (found != null) {
      resolution = found.resolution;
    }
    let prop;
    if (transport != null) {
      prop = transport.availableOutgoingBitrate;
    }
    tmp10 = prop;
    if (Array.isArray(prop)) {
      const iter = prop.at(-1);
      let value;
      if (iter != null) {
        value = iter.value;
      }
      tmp10 = value;
    }
    let frameRateEncode;
    if (found != null) {
      frameRateEncode = found.frameRateEncode;
    }
    tmp13 = frameRateEncode;
    if (Array.isArray(frameRateEncode)) {
      const iter2 = frameRateEncode.at(-1);
      let value2;
      if (iter2 != null) {
        value2 = iter2.value;
      }
      tmp13 = value2;
    }
    return obj;
  }
  getAllStats() {
    let DEFAULT = context;
    if (context === undefined) {
      DEFAULT = MediaEngineContextTypes.DEFAULT;
    }
    return Object.values(closure_12[DEFAULT]);
  }
  getVideoStreams() {
    return closure_15;
  }
  shouldRecordNextConnection() {
    return c16;
  }
  getSimulcastDebugOverride(arg0, arg1) {
    let NO_OVERRIDE;
    combined = "" + arg0 + ":" + arg1;
    if (map.has(combined)) {
      NO_OVERRIDE = map.get(combined);
    } else {
      NO_OVERRIDE = constants2.NO_OVERRIDE;
    }
    return NO_OVERRIDE;
  }
}
const prototype2 = RTCDebugStore.prototype;
RTCDebugStore.displayName = "RTCDebugStore";
let obj2 = {
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
    obj = RTCDebugActionCreatorsAll;
    obj.chooseReplayPath();
  },
  RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function handleOpenReplayAtPath(path) {
    path = path.path;
    let replayConnection;
    const mediaEngine = MediaEngineStore.getMediaEngine();
    if (null != replayConnection) {
      replayConnection.destroy();
      replayConnection = null;
    }
    if (mediaEngine.supports(constants.CONNECTION_REPLAY)) {
      let num = 0;
      if (0 !== path.length) {
        replayConnection = mediaEngine.createReplayConnection(MediaEngineContextTypes.DEFAULT, path);
        if (null != replayConnection) {
          replayConnection.on(replayConnection(4945).BaseConnectionEvent.Video, (userId, arg1, arg2, arg3) => {
            let str;
            let num = arg3;
            obj = {
              type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
              mediaEngineConnectionId: replayConnection.mediaEngineConnectionId,
              userId,
              videoSsrc: num,
              streamId: str,
            };
            const dispatch = DispatcherDefault.dispatch;
            DispatcherDefault;
            if (arg3 == null) {
              num = 0;
            }
            str = arg1;
            if (arg1 == null) {
              str = "";
            }
            dispatch(obj);
          });
          const obj3 = DispatcherDefault;
          obj3.wait(() => {
            obj = RTCDebugActionCreatorsAll;
            return obj.open();
          });
        }
      }
    }
  },
  RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function handleUpdateVideoOutput(mediaEngineConnectionId) {
    closure_15 = closure_15.put(
      mediaEngineConnectionId.mediaEngineConnectionId,
      mediaEngineConnectionId.userId,
      mediaEngineConnectionId.videoSsrc,
      mediaEngineConnectionId.streamId,
    );
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
      const item = values.forEach((item) => {
        closure_1_12[item] = {};
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
    let item = values.forEach((item) => {
      let user;
      let closure_0 = item;
      const found = connectionStats.filter((context) => context.context === closure_0);
      item = found.forEach((stats, index) => {
        let obj2;
        let sum19;
        stats = stats.stats;
        if (null != stats) {
          const tmp6 = closure_2_4(closure_11.split(":"), 3);
          if (tmp6[0] === closure_0) {
            const _parseInt = parseInt;
            if (parseInt(tmp8) === index) {
              if (null != user.getUser(tmp6[1])) {
                const _Object = Object;
                const keys = Object.keys(stats.rtp.inbound);
                if (!keys.includes(tmp6[1])) {
                  closure_11 = closure_2_10;
                }
              }
            }
          }
          const _Date = Date;
          const timestamp = Date.now();
          let tmp14 = stats;
          if (null != stats.screenshare) {
            let screenshare;
            const _HermesInternal = HermesInternal;
            combined = "" + closure_0 + ":" + index;
            const value = closure_2_18.get(combined);
            if (closure_2_12[closure_0][index] != null) {
              screenshare = tmp42.screenshare;
            }
            const result = closure_2_18.set(combined, timestamp);
            tmp14 = stats;
            if (null != value) {
              tmp14 = stats;
              if (null != screenshare) {
                const result1 = (timestamp - value) / 1000;
                tmp14 = stats;
                if (0 < result1) {
                  obj = { screenshare: obj2 };
                  const merged = Object.assign(stats);
                  obj2 = {};
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
                  const _Math = Math;
                  const obj4 = {
                    screenshareCapturedFps: Math.max(0, (sum5 - sum11) / result1),
                    screenshareCapturedFpsUnique: Math.max(0, (sum15 - sum19) / result1),
                  };
                  sum19 = sum18 + num25;
                  const _Math2 = Math;
                  const merged2 = Object.assign(obj4);
                  tmp14 = obj;
                }
              }
            }
          }
          closure_2_12[closure_0][index] = closure_2_19(tmp14, closure_2_12[closure_0][index], timestamp);
        } else {
          delete closure_2_12[closure_0][tmp];
        }
      });
    });
  },
};
const rTCDebugStore = new RTCDebugStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("stores/RTCDebugStore.tsx");

export default rTCDebugStore;
export const DEFAULT_SECTION = combined;
export { graphs };
export { RTCDebugVideoOutputMap };
export const keySection = function keySection(arg0, arg1, arg2) {
  return "" + arg0 + ":" + arg1 + ":" + arg2;
};
export const parseSection = function parseSection(str) {
  const tmp = _slicedToArray(str.split(":"), 2);
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
