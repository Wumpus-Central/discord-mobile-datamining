// discord_common/js/packages/media-engine/BaseConnection.tsx
import BaseConnectionEvent from "BaseConnectionEvent";
import DesktopSources from "DesktopSources";
import "on";
import { cloneDeep } from "../../../../_runtime/04416_cloneDeep.js";
import { flatRest } from "../../../../_runtime/04445_flatRest.js";
import { BaseConnectionEvent } from "BaseConnectionEvent.tsx";
import { WantsVideoQuality } from "VideoQualityManager.tsx";

let c10;
let c4;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ ConnectionStates: c4, DEFAULT_VOICE_BITRATE: c5, MediaTypes: closure_6, ResolutionTypes: error, MediaEngineContextTypes: metroImportAll, VIDEO_QUALITY_FRAMERATE: c9, SIMULCAST_HQ_QUALITY: c10 } = DesktopSources);
let c11 = 0;
class BaseConnection extends tmp3 {
  constructor(arg0, arg1) {
    tmp4 = new BaseConnection(tmp3, tmp2, global, tmp);
    // ThrowIfThisInitialized (0x7c)
    tmp5 = +c11;
    c11 = tmp5 + 1;
    tmp4.mediaEngineConnectionId = `WebRTC-${tmp5}`;
    tmp4.destroyed = false;
    tmp4.audioSSRC = 0;
    tmp4.videoSSRC = 0;
    tmp4.selfDeaf = false;
    tmp4.selfMute = false;
    tmp4.localMutes = {};
    tmp4.disabledLocalVideos = {};
    tmp4.localVolumes = {};
    tmp4.isActiveOutputSinksEnabled = false;
    map = new Map();
    tmp4.activeOutputSinks = map;
    tmp4.videoSupported = false;
    tmp4.useElectronVideo = false;
    tmp4.spatialAudioEnabled = false;
    tmp4.voiceBitrate = DEFAULT_VOICE_BITRATE;
    tmp4.remoteSinkWantsMaxFramerate = VIDEO_QUALITY_FRAMERATE;
    set = new Set();
    tmp4.wantsPriority = set;
    tmp4.localSpeakingFlags = {};
    tmp4.videoReady = false;
    tmp4.videoStreamParameters = [];
    tmp4.remoteVideoSinkWants = { any: 100 };
    tmp4.localVideoSinkWants = { any: 100 };
    tmp4.connectionState = ConnectionStates.CONNECTING;
    tmp4.onDesktopEncodingOptionsSet = function onDesktopEncodingOptionsSet(arg0, arg1, arg2) {

    };
    set1 = new Set();
    tmp4.experimentFlags = set1;
    tmp4.calcMaxBitrateFunc = function calcMaxBitrateFunc(arg0) {
      return null;
    };
    tmp4.context = global;
    tmp4.userId = arg1;
    videoQualityManager = new require("WantsVideoQuality").VideoQualityManager(global, tmp4);
    tmp4.videoQualityManager = videoQualityManager;
    _default = new require("logger").default(tmp4, tmp4.videoQualityManager);
    tmp4.framerateReducer = _default;
    return tmp4;
  }
}
const prototype = BaseConnection.prototype;
prototype["destroy"] = function destroy() {
  this.destroyed = true;
  const framerateReducer = this.framerateReducer;
  framerateReducer.destroy();
  this.setConnectionState(constants.DISCONNECTED);
  this.emit(BaseConnectionEvent.BaseConnectionEvent.Destroy, this);
  this.removeAllListeners();
};
prototype["getLocalMute"] = function getLocalMute(hasItem) {
  return this.localMutes[hasItem] || false;
};
prototype["getLocalVideoDisabled"] = function getLocalVideoDisabled(arg0) {
  let flag = this.disabledLocalVideos[arg0];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["setLocalVideoDisabled"] = function setLocalVideoDisabled(arg0, arg1) {
  this.disabledLocalVideos[arg0] = arg1;
  this.emit(BaseConnectionEvent.BaseConnectionEvent.LocalVideoDisabled, arg0, arg1);
};
prototype["getHasActiveVideoOutputSink"] = function getHasActiveVideoOutputSink(arg0) {
  const activeOutputSinks = this.activeOutputSinks;
  let hasItem = activeOutputSinks.has(arg0);
  if (hasItem) {
    const activeOutputSinks2 = this.activeOutputSinks;
    hasItem = activeOutputSinks2.get(arg0).size > 0;
  }
  return hasItem;
};
prototype["setHasActiveVideoOutputSink"] = function setHasActiveVideoOutputSink(arg0, arg1, arg2) {
  const self = this;
  const activeOutputSinks = this.activeOutputSinks;
  const hasActiveVideoOutputSink = this.getHasActiveVideoOutputSink(arg0);
  let set = activeOutputSinks.get(arg0);
  if (set == null) {
    const _Set = Set;
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
    self.emit(BaseConnectionEvent.BaseConnectionEvent.ActiveSinksChange, arg0, hasActiveVideoOutputSink1);
  }
};
prototype["getActiveOutputSinkTrackingEnabled"] = function getActiveOutputSinkTrackingEnabled() {
  return this.isActiveOutputSinksEnabled;
};
prototype["setUseElectronVideo"] = function setUseElectronVideo(mediaEngine) {
  this.useElectronVideo = mediaEngine;
};
prototype["setClipRecordUser"] = function setClipRecordUser(arg0, arg1, arg2) {

};
prototype["setViewerSideClip"] = function setViewerSideClip(arg0) {

};
prototype["setRemoteAudioHistory"] = function setRemoteAudioHistory(arg0) {

};
prototype["setClipsKeyFrameInterval"] = function setClipsKeyFrameInterval(arg0) {

};
prototype["setQualityDecoupling"] = function setQualityDecoupling(arg0) {

};
prototype["presentDesktopSourcePicker"] = function presentDesktopSourcePicker(arg0) {

};
prototype["getStreamParameters"] = function getStreamParameters() {
  return cloneDeep(this.videoStreamParameters);
};
prototype["setExperimentFlag"] = function setExperimentFlag(arg0, arg1) {
  const experimentFlags = this.experimentFlags;
  if (arg1) {
    experimentFlags.add(arg0);
  } else {
    experimentFlags.delete(arg0);
  }
};
prototype["setConnectionState"] = function setConnectionState(DISCONNECTED) {
  const logger = this.logger;
  logger.info("Connection state change: " + this.connectionState + " => " + DISCONNECTED);
  this.connectionState = DISCONNECTED;
  this.emit(BaseConnectionEvent.BaseConnectionEvent.ConnectionStateChange, this.connectionState);
};
prototype["updateVideoQuality"] = function updateVideoQuality(closure_8) {
  let bitrateTarget;
  let bitrateTarget2;
  let constraints;
  let constraints2;
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
  const tmp2 = cloneDeep(self.videoStreamParameters);
  if (null != quality) {
    ({ bitrateMax: tmp2[num].maxBitrate, bitrateMin: tmp2[num].minBitrate, bitrateTarget } = quality);
    if (bitrateTarget == null) {
      bitrateTarget = 0;
    }
    tmp2[num].targetBitrate = bitrateTarget;
    if (null != quality.encode) {
      tmp2[num].maxPixelCount = quality.encode.pixelCount;
      tmp2[num].maxFrameRate = quality.encode.framerate;
    }
  }
  self.videoStreamParameters = tmp2;
  let num2 = 0;
  let tmp3 = constraints;
  let tmp4 = quality;
  let tmp5 = constraints;
  let tmp6 = quality;
  if (0 < self.videoStreamParameters.length) {
    do {
      let tmp7 = num2;
      let tmp8 = tmp3;
      let tmp9 = tmp4;
      let tmp10 = tmp3;
      let tmp11 = tmp4;
      if (num2 !== num) {
        let result1 = self.applyQualityConstraints({}, self.videoStreamParameters[num2].ssrc);
        ({ quality: quality2, constraints: constraints2 } = result1);
        if (null != quality2) {
          ({ bitrateMax: self.videoStreamParameters[num2].maxBitrate, bitrateMin: self.videoStreamParameters[num2].minBitrate, bitrateTarget: bitrateTarget2 } = quality2);
          if (bitrateTarget2 == null) {
            bitrateTarget2 = 0;
          }
          self.videoStreamParameters[num2].targetBitrate = bitrateTarget2;
          if (null != quality2.encode) {
            self.videoStreamParameters[num2].maxPixelCount = quality2.encode.pixelCount;
            self.videoStreamParameters[num2].maxFrameRate = quality2.encode.framerate;
          }
        }
        tmp10 = tmp3;
        tmp11 = tmp4;
        if (100 === self.videoStreamParameters[num2].quality) {
          tmp10 = constraints2;
          tmp11 = quality2;
        }
      }
      num2 = num2 + 1;
      tmp3 = tmp10;
      tmp4 = tmp11;
      tmp5 = tmp10;
      tmp6 = tmp11;
    } while (num2 < self.videoStreamParameters.length);
  }
  tmp5.streamParameters = cloneDeep(self.videoStreamParameters);
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
  tmp5.remoteSinkWantsPixelCount = Math.max.apply(items);
  if (null != closure_8) {
    let obj = flatRest(tmp5, closure_8);
  } else {
    obj = {};
    const merged = Object.assign(tmp5);
  }
  const logger = self.logger;
  logger.verbose("updateVideoQuality: " + JSON.stringify(obj));
  const result2 = self.updateVideoQualityCore(obj, tmp6);
};
prototype["applyVideoQualityMode"] = function applyVideoQualityMode(mode) {
  const self = this;
  if (this.context === constants2.DEFAULT) {
    const videoQualityManager = self.videoQualityManager;
    videoQualityManager.setQualityOverwrite(WantsVideoQuality.VIDEO_QUALITY_MODES_TO_OVERWRITES[mode]);
    self.updateVideoQuality();
  }
};
prototype["overwriteQualityForTesting"] = function overwriteQualityForTesting(qualityOverwrite) {
  const videoQualityManager = this.videoQualityManager;
  videoQualityManager.setQualityOverwrite(qualityOverwrite);
  this.updateVideoQuality();
};
prototype["applyQualityConstraints"] = function applyQualityConstraints() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const videoQualityManager = this.videoQualityManager;
  return videoQualityManager.applyQualityConstraints(obj, arg1);
};
prototype["initializeStreamParameters"] = function initializeStreamParameters(items) {
  const self = this;
  const found = items.filter((type) => (type.type === constants.VIDEO || type.type === tmp.SCREEN) && typeof type.rid === "string");
  this.videoStreamParameters = found.map((ssrc) => {
    const videoQualityManager = self.videoQualityManager;
    const quality = videoQualityManager.getQuality(ssrc.ssrc);
    let obj = { type: ssrc.type, active: ssrc.active, rid: ssrc.rid, ssrc: ssrc.ssrc, rtxSsrc: ssrc.rtxSsrc, quality: ssrc.quality, maxBitrate: null, maxFrameRate: null, maxResolution: null };
    let num = ssrc.quality;
    if (num == null) {
      num = 100;
    }
    if (num < 100) {
      let bitrateMax = quality.bitrateMax / 4;
    } else {
      bitrateMax = quality.bitrateMax;
    }
    obj[6] = bitrateMax;
    const capture = quality.capture;
    let framerate;
    if (capture != null) {
      framerate = capture.framerate;
    }
    obj[7] = framerate;
    obj = { type: outer1_7.FIXED, width: null, height: null };
    const capture2 = quality.capture;
    let width;
    if (capture2 != null) {
      width = capture2.width;
    }
    obj[1] = width;
    const capture3 = quality.capture;
    let height;
    if (capture3 != null) {
      height = capture3.height;
    }
    obj[2] = height;
    obj[8] = obj;
    return obj;
  });
};
prototype["getLocalWant"] = function getLocalWant(arg0) {
  const self = this;
  let num = arg0;
  let closure_0 = arg0;
  const videoStreamParameters = this.videoStreamParameters;
  let someResult = videoStreamParameters.some((ssrc) => {
    let tmp = ssrc.ssrc === closure_0;
    if (tmp) {
      tmp = ssrc.quality === outer1_10;
    }
    return tmp;
  });
  if (!someResult) {
    someResult = undefined === num;
  }
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
  if (null != self.remoteVideoSinkWants[num]) {
    if (tmp5 > 0) {
      return tmp5;
    }
  }
  let any = self.remoteVideoSinkWants.any;
  if (null != any) {
    return any;
  }
  let num4 = 0;
  if (self.context === constants2.DEFAULT || someResult) {
    num4 = 100;
  }
  any = num4;
};
prototype["getRemoteVideoSinkWants"] = function getRemoteVideoSinkWants(any) {
  return this.remoteVideoSinkWants[any];
};
prototype["getRemoteVideoSinkPixelCount"] = function getRemoteVideoSinkPixelCount(arg0) {
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
};
prototype["emitStats"] = function emitStats() {
  const self = this;
  return callback(function*() {
    let closure_1 = tmp5;
    let closure_0 = tmp2;
    closure_0 = yield outer1_0.getStats();
    if (null != closure_0) {
      closure_0.emit(outer1_0(table[5]).BaseConnectionEvent.Stats, closure_0);
    }
    return closure_0;
  })();
};
prototype["getSpatialAudioEnabled"] = function getSpatialAudioEnabled() {
  return this.spatialAudioEnabled;
};
prototype["setSpatialAudioEnabled"] = function setSpatialAudioEnabled(arg0) {
  const self = this;
  let tmp = arg0;
  if (arg0) {
    tmp = self.context === constants2.DEFAULT;
  }
  self.spatialAudioEnabled = tmp;
};
prototype["setCalcMaxBitrateFunc"] = function setCalcMaxBitrateFunc(calcMaxBitrateFunc) {
  this.calcMaxBitrateFunc = calcMaxBitrateFunc;
};
let result = require("on").fileFinishedImporting("../discord_common/js/packages/media-engine/BaseConnection.tsx");

export default BaseConnection;
export const BaseConnectionEvent = require("BaseConnectionEvent").BaseConnectionEvent;