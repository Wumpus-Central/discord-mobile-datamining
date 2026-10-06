// === Module 4964: BaseConnection ===

// Module 4964 (BaseConnection)
import VideoQualityManager from "VideoQualityManager" /* 4965 */;
import ConnectionEventFramerateReducer from "ConnectionEventFramerateReducer" /* 4967 */;
import discord_common_BaseConnectionEvent from "discord_common/BaseConnectionEvent" /* 4968 */;
import cloneDeepDefault from "cloneDeep" /* 4969 */;
import flatRestDefault from "flatRest" /* 4998 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 4921 */;
import TypedEventEmitter from "TypedEventEmitter" /* 4954 */;
import size_mod from "module_2" /* 2 */;

let set;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ ConnectionStates: closure_4, DEFAULT_VOICE_BITRATE: hasOwnProperty, MediaTypes: metroRequire, ResolutionTypes: metroImportDefault, MediaEngineContextTypes: metroImportAll, VIDEO_QUALITY_FRAMERATE: c9, SIMULCAST_HQ_QUALITY: c10 } = Constants);
let closure_11 = 0;
class BaseConnection extends TypedEventEmitter {
  constructor(context, userId) {
    const tmp4 = new BaseConnection(tmp3, tmp2, context, tmp);
    closure_11 = tmp5 + 1;
    tmp4.mediaEngineConnectionId = `WebRTC-${+closure_11}`;
    tmp4.destroyed = false;
    tmp4.audioSSRC = 0;
    tmp4.videoSSRC = 0;
    tmp4.selfDeaf = false;
    tmp4.selfMute = false;
    tmp4.localMutes = {};
    tmp4.disabledLocalVideos = {};
    tmp4.localVolumes = {};
    tmp4.isActiveOutputSinksEnabled = false;
    tmp4.activeOutputSinks = new Map();
    tmp4.videoSupported = false;
    tmp4.useElectronVideo = false;
    tmp4.spatialAudioEnabled = false;
    tmp4.voiceBitrate = hasOwnProperty;
    tmp4.remoteSinkWantsMaxFramerate = remoteSinkWantsMaxFramerate;
    new Map();
    tmp4.wantsPriority = new Set();
    tmp4.localSpeakingFlags = {};
    tmp4.videoReady = false;
    tmp4.videoStreamParameters = [];
    tmp4.remoteVideoSinkWants = { any: 100 };
    tmp4.localVideoSinkWants = { any: 100 };
    tmp4.connectionState = constants.CONNECTING;
    tmp4.onDesktopEncodingOptionsSet = function onDesktopEncodingOptionsSet(arg0, arg1, arg2) {

    };
    new Set();
    tmp4.experimentFlags = new Set();
    tmp4.calcMaxBitrateFunc = function calcMaxBitrateFunc(size1) {
      return null;
    };
    tmp4.context = context;
    tmp4.userId = userId;
    new Set();
    const videoQualityManager = new VideoQualityManager.VideoQualityManager(context, tmp4);
    tmp4.videoQualityManager = videoQualityManager;
    tmp4.framerateReducer = new ConnectionEventFramerateReducer.default(tmp4, tmp4.videoQualityManager);
    new ConnectionEventFramerateReducer.default(tmp4, tmp4.videoQualityManager);
    return tmp4;
  }
  destroy() {
    this.destroyed = true;
    const framerateReducer = this.framerateReducer;
    framerateReducer.destroy();
    this.setConnectionState(constants.DISCONNECTED);
    this.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.Destroy, this);
    this.removeAllListeners();
  }
  getLocalMute(id) {
    return this.localMutes[id] || false;
  }
  getLocalVideoDisabled(arg0) {
    let flag = this.disabledLocalVideos[arg0];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  setLocalVideoDisabled(arg0, arg1) {
    this.disabledLocalVideos[arg0] = arg1;
    this.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.LocalVideoDisabled, arg0, arg1);
  }
  getHasActiveVideoOutputSink(arg0) {
    const activeOutputSinks = this.activeOutputSinks;
    let hasItem = activeOutputSinks.has(arg0);
    if (hasItem) {
      const activeOutputSinks2 = this.activeOutputSinks;
      hasItem = activeOutputSinks2.get(arg0).size > 0;
    }
    return hasItem;
  }
  setHasActiveVideoOutputSink(arg0, arg1, arg2) {
    const self = this;
    const activeOutputSinks = this.activeOutputSinks;
    const hasActiveVideoOutputSink = this.getHasActiveVideoOutputSink(arg0);
    set = activeOutputSinks.get(arg0);
    if (set == null) {
      const _Set = Set;
      const self2 = this;
      const self3 = this;
      set = new Set();
    }
    if (arg1) {
      set.add(arg2);
    } else {
      set.delete(arg2);
    }
    const activeOutputSinks2 = self.activeOutputSinks;
    const result = activeOutputSinks2.set(arg0, set);
    const hasActiveVideoOutputSink1 = self.getHasActiveVideoOutputSink(arg0);
    self.isActiveOutputSinksEnabled = true;
    if (hasActiveVideoOutputSink !== hasActiveVideoOutputSink1) {
      self.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.ActiveSinksChange, arg0, hasActiveVideoOutputSink1);
    }
  }
  getActiveOutputSinkTrackingEnabled() {
    return this.isActiveOutputSinksEnabled;
  }
  setUseElectronVideo(mediaEngine) {
    this.useElectronVideo = mediaEngine;
  }
  setClipRecordUser(arg0, arg1, arg2) {

  }
  setRemoteAudioHistory(arg0) {

  }
  setQualityDecoupling(arg0) {

  }
  presentDesktopSourcePicker(arg0) {

  }
  getStreamParameters() {
    return cloneDeepDefault(this.videoStreamParameters);
  }
  setExperimentFlag(arg0, arg1) {
    const experimentFlags = this.experimentFlags;
    const tmp = arg1;
    if (tmp) {
      experimentFlags.add(arg0);
    } else {
      experimentFlags.delete(arg0);
    }
  }
  setConnectionState(DISCONNECTED) {
    const logger = this.logger;
    logger.info("Connection state change: " + this.connectionState + " => " + DISCONNECTED);
    this.connectionState = DISCONNECTED;
    this.emit(discord_common_BaseConnectionEvent.BaseConnectionEvent.ConnectionStateChange, this.connectionState);
  }
  updateVideoQuality(metroImportAll) {
    let bitrateTarget;
    let bitrateTarget2;
    let constraints;
    let constraints2;
    let obj;
    let quality;
    let quality2;
    const self = this;
    const videoStreamParameters = this.videoStreamParameters;
    let num = videoStreamParameters.findIndex((quality) => 100 === quality.quality);
    if (-1 === num) {
      num = 0;
    }
    const result = self.applyQualityConstraints({}, self.videoStreamParameters[num].ssrc);
    ({ quality, constraints } = result);
    const tmp2 = cloneDeepDefault(self.videoStreamParameters);
    if (null != quality) {
      ({ bitrateMax: tmp2[num].maxBitrate, bitrateMin: tmp2[num].minBitrate, bitrateTarget } = quality);
      const tmp3 = tmp2[num];
      if (bitrateTarget == null) {
        bitrateTarget = 0;
      }
      tmp3.targetBitrate = bitrateTarget;
      if (null != quality.encode) {
        tmp2[num].maxPixelCount = quality.encode.pixelCount;
        tmp2[num].maxFrameRate = quality.encode.framerate;
      }
    }
    self.videoStreamParameters = tmp2;
    let num2 = 0;
    let tmp4 = constraints;
    let tmp5 = quality;
    let tmp6 = constraints;
    let tmp7 = quality;
    if (0 < self.videoStreamParameters.length) {
      do {
        let tmp11 = tmp4;
        let tmp12 = tmp5;
        if (num2 !== num) {
          let result1 = self.applyQualityConstraints({}, self.videoStreamParameters[num2].ssrc);
          ({ quality: quality2, constraints: constraints2 } = result1);
          if (null != quality2) {
            ({ bitrateMax: self.videoStreamParameters[num2].maxBitrate, bitrateMin: self.videoStreamParameters[num2].minBitrate, bitrateTarget: bitrateTarget2 } = quality2);
            let tmp21 = self.videoStreamParameters[num2];
            if (bitrateTarget2 == null) {
              bitrateTarget2 = 0;
            }
            tmp21.targetBitrate = bitrateTarget2;
            if (null != quality2.encode) {
              self.videoStreamParameters[num2].maxPixelCount = quality2.encode.pixelCount;
              self.videoStreamParameters[num2].maxFrameRate = quality2.encode.framerate;
            }
          }
          tmp11 = tmp4;
          tmp12 = tmp5;
          if (100 === self.videoStreamParameters[num2].quality) {
            tmp11 = constraints2;
            tmp12 = quality2;
          }
        }
        num2 = num2 + 1;
        tmp4 = tmp11;
        tmp5 = tmp12;
        tmp6 = tmp11;
        tmp7 = tmp12;
      } while (num2 < self.videoStreamParameters.length);
    }
    tmp6.streamParameters = cloneDeepDefault(self.videoStreamParameters);
    const prop = self.videoStreamParameters;
    const items = [
      ...prop.map((maxPixelCount) => {
        let num = maxPixelCount.maxPixelCount;
        if (num == null) {
          num = 0;
        }
        return num;
      })
    ];
    tmp6.remoteSinkWantsPixelCount = Math.max.apply(items);
    if (null != metroImportAll) {
      obj = flatRestDefault(tmp6, metroImportAll);
    } else {
      obj = {};
      const merged = Object.assign(tmp6);
    }
    const logger = self.logger;
    logger.verbose("updateVideoQuality: " + JSON.stringify(obj));
    const result2 = self.updateVideoQualityCore(obj, tmp7);
  }
  applyVideoQualityMode(mode) {
    const self = this;
    if (this.context === metroImportAll.DEFAULT) {
      const videoQualityManager = self.videoQualityManager;
      videoQualityManager.setQualityOverwrite(VideoQualityManager.VIDEO_QUALITY_MODES_TO_OVERWRITES[mode]);
      self.updateVideoQuality();
    }
  }
  overwriteQualityForTesting(qualityOverwrite) {
    const videoQualityManager = this.videoQualityManager;
    videoQualityManager.setQualityOverwrite(qualityOverwrite);
    this.updateVideoQuality();
  }
  applyQualityConstraints() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    const videoQualityManager = this.videoQualityManager;
    return videoQualityManager.applyQualityConstraints(obj, arg1);
  }
  initializeStreamParameters(items) {
    const self = this;
    const found = items.filter((type) => (type.type === constants.VIDEO || type.type === tmp.SCREEN) && typeof type.rid === "string");
    this.videoStreamParameters = found.map((ssrc) => {
      let bitrateMax;
      let framerate;
      let height;
      let width;
      const videoQualityManager = self.videoQualityManager;
      const quality = videoQualityManager.getQuality(ssrc.ssrc);
      let num = ssrc.quality;
      const obj = { type: ssrc.type, active: ssrc.active, rid: ssrc.rid, ssrc: ssrc.ssrc, rtxSsrc: ssrc.rtxSsrc, quality: ssrc.quality, maxBitrate: bitrateMax, maxFrameRate: framerate, maxResolution: size };
      if (num == null) {
        num = 100;
      }
      if (num < 100) {
        bitrateMax = quality.bitrateMax / 4;
      } else {
        bitrateMax = quality.bitrateMax;
      }
      const capture = quality.capture;
      framerate = undefined;
      if (capture != null) {
        framerate = capture.framerate;
      }
      size = { type: metroImportDefault.FIXED, width, height };
      const capture2 = quality.capture;
      width = undefined;
      if (capture2 != null) {
        width = capture2.width;
      }
      const capture3 = quality.capture;
      height = undefined;
      if (capture3 != null) {
        height = capture3.height;
      }
      return obj;
    });
  }
  getLocalWant(arg0) {
    const self = this;
    let num = arg0;
    let closure_0 = arg0;
    const videoStreamParameters = this.videoStreamParameters;
    const remoteVideoSinkWants = self.remoteVideoSinkWants;
    const someResult = videoStreamParameters.some((ssrc) => ssrc.ssrc === closure_0 && ssrc.quality === authStore) || undefined === num;
    if (num == null) {
      const first = self.videoStreamParameters[0];
      let ssrc;
      if (first != null) {
        ssrc = first.ssrc;
      }
      num = ssrc;
    }
    if (num == null) {
      num = 0;
    }
    if (null != remoteVideoSinkWants[num]) {
      if (remoteVideoSinkWants[num] > 0) {
        return remoteVideoSinkWants[num];
      }
    }
    let any = self.remoteVideoSinkWants.any;
    if (null != any) {
      return any;
    }
    let num4 = 0;
    if (self.context === constants3.DEFAULT || someResult) {
      num4 = 100;
    }
    any = num4;
  }
  getRemoteVideoSinkWants(any) {
    return this.remoteVideoSinkWants[any];
  }
  getRemoteVideoSinkPixelCount(arg0) {
    let num = 0;
    if (undefined !== arg0) {
      const self = this;
      const pixelCounts = this.remoteVideoSinkWants.pixelCounts;
      let num2;
      if (pixelCounts != null) {
        num2 = pixelCounts[arg0];
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    return num;
  }
  emitStats() {
    const self = this;
    return (async () => {
      let c3;
      let closure_1;
      const value = tmp;
      await self.getStats();
      if (null != value) {
        closure_129_0.emit(value(c2[5]).BaseConnectionEvent.Stats, value);
      }
      return value;
    })();
  }
  getSpatialAudioEnabled() {
    return this.spatialAudioEnabled;
  }
  setSpatialAudioEnabled(arg0) {
    const self = this;
    const tmp = arg0 && self.context === metroImportAll.DEFAULT;
    self.spatialAudioEnabled = tmp;
  }
  setCalcMaxBitrateFunc(calcMaxBitrateFunc) {
    this.calcMaxBitrateFunc = calcMaxBitrateFunc;
  }
  setFakeGoLiveEncodePixelCount(arg0) {
    const videoQualityManager = this.videoQualityManager;
    const result = videoQualityManager.setFakeGoLiveEncodePixelCount(arg0);
  }
}
const prototype = BaseConnection.prototype;
let size = size_mod;
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/BaseConnection.tsx");

export default BaseConnection;
export const BaseConnectionEvent = discord_common_BaseConnectionEvent.BaseConnectionEvent;