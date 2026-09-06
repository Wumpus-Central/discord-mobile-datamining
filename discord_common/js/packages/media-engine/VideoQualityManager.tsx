// === Module 4628: WantsVideoQuality ===

// Module 4628 (WantsVideoQuality)
import set from "set" /* 2 */;
import getMaxSinkValue from "getMaxSinkValue" /* 4629 */;
import DesktopSources from "DesktopSources" /* 4585 */;

({ defaultVideoQualityOptions: obj1, MediaEngineContextTypes: c3, VideoQualityMode, VIDEO_QUALITY_FRAMERATE: c4, BIT_FLOOR_PER_PIXEL: c5 } = DesktopSources);
class WantsVideoQuality {
  constructor(arg0) {
    if (null == global.capture) {
      if (null == global.encode) {
        tmp10 = globalThis;
        _Error = Error;
        tmp11 = new.target;
        str = "Invalid arguments.";
        tmp12 = new.target;
        error = new Error("Invalid arguments.");
        tmp14 = error;
        throw error;
      }
    }
    tmp = undefined;
    if (null != global.capture) {
      capture = global.capture;
      tmp3 = new.target;
      tmp2 = closure_7;
      if (typeof closure_7 !== "function") {
        str2 = "Trying to call a non-function";
        throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      obj = Object.create(tmp2.prototype);
      ({ width: tmp4.width, height: tmp4.height, framerate: tmp4.framerate } = capture);
      obj.pixelCount = capture.width * capture.height;
      tmp = obj;
    }
    obj1 = Object.create(new.target.prototype);
    obj1.capture = tmp;
    tmp6 = undefined;
    if (null != global.encode) {
      encode = global.encode;
      tmp8 = new.target;
      tmp7 = closure_7;
      if (typeof closure_7 !== "function") {
        str3 = "Trying to call a non-function";
        throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
      }
      obj2 = Object.create(tmp7.prototype);
      ({ width: tmp9.width, height: tmp9.height, framerate: tmp9.framerate } = encode);
      obj2.pixelCount = encode.width * encode.height;
      tmp6 = obj2;
    }
    obj1.encode = tmp6;
    ({ bitrateMin: tmp5.bitrateMin, bitrateMax: tmp5.bitrateMax, bitrateTarget: tmp5.bitrateTarget, localWant: tmp5.localWant } = global);
    return obj1;
  }
}
const prototype = function VideoQuality(width) {
  const obj = Object.create(new.target.prototype);
  ({ width: tmp.width, height: tmp.height, framerate: tmp.framerate } = width);
  obj.pixelCount = width.width * width.height;
  return obj;
}.prototype;
prototype["equals"] = function equals(width, width2) {
  let tmp = null == width && null == width2;
  if (!tmp) {
    let tmp2 = null != width && null != width2;
    if (tmp2) {
      tmp2 = width.width === width2.width && width.height === width2.height && width.framerate === width2.framerate;
      const tmp3 = width.width === width2.width && width.height === width2.height && width.framerate === width2.framerate;
    }
    tmp = tmp2;
  }
  return tmp;
};
prototype["extend"] = function extend(width, width2) {
  if (null == width) {
    return width2;
  } else if (null == width2) {
    return width;
  } else {
    let num;
    if (width2 != null) {
      num = width2.width;
    }
    if (num == null) {
      width = undefined;
      if (width != null) {
        width = width.width;
      }
      num = width;
    }
    if (num == null) {
      num = 0;
    }
    let num2;
    if (width2 != null) {
      num2 = width2.height;
    }
    if (num2 == null) {
      let height;
      if (width != null) {
        height = width.height;
      }
      num2 = height;
    }
    if (num2 == null) {
      num2 = 0;
    }
    const obj = { width: null, height: null, framerate: null, pixelCount: null };
    obj[0] = num;
    obj[1] = num2;
    let framerate;
    if (width2 != null) {
      framerate = width2.framerate;
    }
    if (framerate == null) {
      let framerate1;
      if (width != null) {
        framerate1 = width.framerate;
      }
      framerate = framerate1;
    }
    obj[2] = framerate;
    obj[3] = num * num2;
    return obj;
  }
};
const frozen = Object.freeze({ [VideoQualityMode.AUTO]: {}, [VideoQualityMode.FULL]: { encode: { width: 1280, height: 720 } } });
let result = set.fileFinishedImporting("../discord_common/js/packages/media-engine/VideoQualityManager.tsx");
class VideoQualityManager {
  constructor(arg0, arg1) {
    tmp = importDefault;
    if (importDefault === undefined) {
      tmp = closure_2;
    }
    obj = Object.create(new.target.prototype);
    obj.contextType = global;
    obj.connection = require;
    obj.options = tmp;
    obj.isStreamContext = obj.contextType === MediaEngineContextTypes.STREAM;
    mediaSinkWantsLadder = new require("getMaxSinkValue").MediaSinkWantsLadder(tmp);
    obj.ladder = mediaSinkWantsLadder;
    obj.goliveMaxQuality = obj.getDefaultGoliveQuality();
    obj.lastGoLivePixelCount = {};
    return obj;
  }
}
const prototype2 = VideoQualityManager.prototype;
prototype2["getQuality"] = function getQuality(arg0) {
  const self = this;
  const connection = this.connection;
  const localWant = connection.getLocalWant(arg0);
  let num = 0;
  if (null != arg0) {
    const connection2 = self.connection;
    const remoteVideoSinkPixelCount = connection2.getRemoteVideoSinkPixelCount(arg0);
    let tmp3 = remoteVideoSinkPixelCount;
    if (null != self.lastGoLivePixelCount[arg0]) {
      tmp3 = remoteVideoSinkPixelCount;
      if (self.lastGoLivePixelCount[arg0] > 0) {
        const result = remoteVideoSinkPixelCount / self.lastGoLivePixelCount[arg0];
        let tmp5 = remoteVideoSinkPixelCount;
        if (result <= 1.05) {
          tmp5 = remoteVideoSinkPixelCount;
          if (result >= 0.95) {
            tmp5 = self.lastGoLivePixelCount[arg0];
          }
        }
        tmp3 = tmp5;
      }
    }
    self.lastGoLivePixelCount[arg0] = tmp3;
    num = tmp3;
  }
  if (self.isStreamContext) {
    let goliveQuality = self.getGoliveQuality(localWant, num);
  } else {
    goliveQuality = self.getVideoQuality(localWant);
  }
  let tmp10 = goliveQuality;
  if (null != self.qualityOverwrite) {
    const obj = { encode: null, capture: null, bitrateMin: null, bitrateMax: null, bitrateTarget: null, localWant: null };
    tmp10 = WantsVideoQuality;
    obj[0] = prototype.extend(goliveQuality.encode, self.qualityOverwrite.encode);
    obj[1] = prototype.extend(goliveQuality.capture, self.qualityOverwrite.capture);
    let bitrateMin = self.qualityOverwrite.bitrateMin;
    if (bitrateMin == null) {
      bitrateMin = goliveQuality.bitrateMin;
    }
    obj[2] = bitrateMin;
    let bitrateMax = self.qualityOverwrite.bitrateMax;
    if (bitrateMax == null) {
      bitrateMax = goliveQuality.bitrateMax;
    }
    obj[3] = bitrateMax;
    let bitrateTarget = self.qualityOverwrite.bitrateTarget;
    if (bitrateTarget == null) {
      bitrateTarget = goliveQuality.bitrateTarget;
    }
    obj[4] = bitrateTarget;
    obj[5] = goliveQuality.localWant;
    tmp10 = new tmp10(obj);
  }
  return tmp10;
};
prototype2["applyQualityConstraints"] = function applyQualityConstraints(constraints) {
  const quality = this.getQuality(arg1);
  if (null != quality.capture) {
    constraints.encodingVideoWidth = quality.capture.width;
    constraints.encodingVideoHeight = quality.capture.height;
    constraints.encodingVideoFrameRate = quality.capture.framerate;
    constraints.captureVideoFrameRate = quality.capture.framerate;
  }
  if (null != quality.encode) {
    constraints.remoteSinkWantsMaxFramerate = quality.encode.framerate;
    constraints.remoteSinkWantsPixelCount = quality.encode.pixelCount;
  }
  if (null != quality.bitrateTarget) {
    constraints.encodingVideoBitRate = quality.bitrateTarget;
  } else {
    constraints.encodingVideoBitRate = quality.bitrateMax;
  }
  ({ bitrateMin: constraints.encodingVideoMinBitRate, bitrateMax: constraints.encodingVideoMaxBitRate } = quality);
  if (tmp2) {
    const _Math = Math;
    constraints.encodingVideoBitRate = Math.min(constraints.encodingVideoBitRate, constraints.encodingVideoMaxBitRate);
  }
  return { quality, constraints };
};
prototype2["setQualityOverwrite"] = function setQualityOverwrite(qualityOverwrite) {
  this.qualityOverwrite = qualityOverwrite;
};
prototype2["setGoliveQuality"] = function setGoliveQuality(capture) {
  const self = this;
  const obj = { capture: prototype.extend(this.goliveMaxQuality.capture, capture.capture), encode: prototype.extend(this.goliveMaxQuality.encode, capture.encode), bitrateMin: null, bitrateMax: null, bitrateTarget: null, localWant: null };
  let bitrateMin = capture.bitrateMin;
  if (bitrateMin == null) {
    bitrateMin = self.goliveMaxQuality.bitrateMin;
  }
  obj[2] = bitrateMin;
  let bitrateMax = capture.bitrateMax;
  if (bitrateMax == null) {
    bitrateMax = self.goliveMaxQuality.bitrateMax;
  }
  obj[3] = bitrateMax;
  let bitrateTarget = capture.bitrateTarget;
  if (bitrateTarget == null) {
    bitrateTarget = self.goliveMaxQuality.bitrateTarget;
  }
  obj[4] = bitrateTarget;
  obj[5] = self.goliveMaxQuality.localWant;
  self.goliveMaxQuality = new WantsVideoQuality(obj);
};
prototype2["getVideoQuality"] = function getVideoQuality(arg0) {
  const self = this;
  const ladder = this.ladder;
  const resolution = ladder.getResolution(arg0);
  let obj = { encode: null, capture: null, bitrateMin: null, bitrateMax: null, localWant: null };
  obj = {};
  const result = this.options.videoBitrate.min * resolution.budgetPortion;
  const result1 = this.options.videoBitrate.max * resolution.budgetPortion;
  const merged = Object.assign(resolution);
  obj.framerate = this.isMuted ? resolution.mutedFramerate : resolution.framerate;
  obj[0] = obj;
  obj[1] = { width: self.options.videoCapture.width, height: self.options.videoCapture.height, framerate: self.options.videoCapture.framerate };
  obj[2] = Math.max(result, self.options.videoBitrateFloor);
  obj[3] = Math.max(result1, self.options.videoBitrateFloor);
  obj[4] = arg0;
  return new WantsVideoQuality(obj);
};
prototype2["scaleLinearly"] = function scaleLinearly(arg0, pixelCount, bitrateMax) {
  let num = 0;
  if (0 !== pixelCount) {
    num = arg0 * bitrateMax / pixelCount;
  }
  return num;
};
prototype2["getGoliveQuality"] = function getGoliveQuality(localWant, arg1) {
  const self = this;
  const encode = this.goliveMaxQuality.encode;
  let pixelCount;
  if (encode != null) {
    pixelCount = encode.pixelCount;
  }
  if (undefined !== pixelCount) {
    if (arg1 < self.goliveMaxQuality.encode.pixelCount) {
      if (arg1 > 0) {
        const _Math7 = Math;
        const bound = Math.min(closure_5 * self.goliveMaxQuality.encode.pixelCount * self.goliveMaxQuality.encode.framerate, self.goliveMaxQuality.bitrateMax);
        let scaleLinearlyResult2;
        const scaleLinearlyResult = self.scaleLinearly(arg1, self.goliveMaxQuality.encode.pixelCount, self.goliveMaxQuality.bitrateMin);
        if (null != self.goliveMaxQuality.bitrateTarget) {
          scaleLinearlyResult2 = self.scaleLinearly(arg1, self.goliveMaxQuality.encode.pixelCount, self.goliveMaxQuality.bitrateTarget);
        }
        const obj = { encode: null, capture: null, bitrateMin: null, bitrateMax: null, bitrateTarget: null, localWant: null };
        obj[0] = self.goliveMaxQuality.encode;
        obj[1] = self.goliveMaxQuality.capture;
        const _Math = Math;
        const _Math2 = Math;
        obj[2] = Math.max(Math.ceil(scaleLinearlyResult), self.options.videoBitrateFloor);
        const _Math3 = Math;
        const _Math4 = Math;
        obj[3] = Math.max(Math.ceil(self.scaleLinearly(arg1, self.goliveMaxQuality.encode.pixelCount, self.goliveMaxQuality.bitrateMax)), bound);
        let bound1;
        if (null != scaleLinearlyResult2) {
          const _Math5 = Math;
          const _Math6 = Math;
          bound1 = Math.max(Math.ceil(scaleLinearlyResult2), self.options.videoBitrateFloor);
        }
        obj[4] = bound1;
        obj[5] = localWant;
        return new WantsVideoQuality(obj);
      }
    }
  }
  return self.goliveMaxQuality;
};
prototype2["getDefaultGoliveQuality"] = function getDefaultGoliveQuality() {
  obj = { capture: obj, encode: obj, bitrateMin: this.options.desktopBitrate.min, bitrateMax: this.options.desktopBitrate.max, bitrateTarget: this.options.desktopBitrate.target };
  obj = { width: 1280, height: 720, framerate: closure_4 };
  obj = { width: 1280, height: 720, framerate: closure_4, pixelCount: 921600 };
  return new WantsVideoQuality(obj);
};

export const VIDEO_QUALITY_MODES_TO_OVERWRITES = frozen;
export { WantsVideoQuality };
export const VideoQuality = prototype;
export { VideoQualityManager };