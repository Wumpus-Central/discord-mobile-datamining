// discord_common/js/packages/media-engine/VideoQualityManager.tsx
import MediaSinkWantsLadder from "MediaSinkWantsLadder.tsx";
import Constants from "Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({
  defaultVideoQualityOptions: c2,
  MediaEngineContextTypes: c3,
  VideoQualityMode,
  VIDEO_QUALITY_FRAMERATE: closure_4,
  BIT_FLOOR_PER_PIXEL: hasOwnProperty,
} = Constants);
class WantsVideoQuality {
  constructor(arg0) {
    if (null == global.capture) {
      if (null == global.encode) {
        tmp8 = globalThis;
        _Error = Error;
        tmp9 = new.target;
        str = "Invalid arguments.";
        tmp10 = new.target;
        error = new Error("Invalid arguments.");
        tmp12 = error;
        throw error;
      }
    }
    tmp = undefined;
    if (null != global.capture) {
      capture = global.capture;
      tmp2 = new.target;
      if (typeof closure_7 === "function") {
        obj = Object.create(closure_7.prototype);
        ({ width: tmp3.width, height: tmp3.height, framerate: tmp3.framerate } = capture);
        obj.pixelCount = capture.width * capture.height;
        tmp = obj;
      } else {
        str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    obj1 = Object.create(new.target.prototype);
    obj1.capture = tmp;
    tmp5 = undefined;
    if (null != global.encode) {
      encode = global.encode;
      tmp6 = new.target;
      if (typeof closure_7 === "function") {
        obj2 = Object.create(closure_7.prototype);
        ({ width: tmp7.width, height: tmp7.height, framerate: tmp7.framerate } = encode);
        obj2.pixelCount = encode.width * encode.height;
        tmp5 = obj2;
      } else {
        str3 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
    obj1.encode = tmp5;
    ({
      bitrateMin: tmp4.bitrateMin,
      bitrateMax: tmp4.bitrateMax,
      bitrateTarget: tmp4.bitrateTarget,
      localWant: tmp4.localWant,
    } = global);
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
      const tmp3 =
        width.width === width2.width && width.height === width2.height && width.framerate === width2.framerate;
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
    const size = { width: num, height: num2, framerate: null, pixelCount: null };
    framerate = undefined;
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
    size.framerate = framerate;
    size.pixelCount = num * num2;
    return size;
  }
};
const frozen = Object.freeze({
  [VideoQualityMode.AUTO]: {},
  [VideoQualityMode.FULL]: { encode: { width: 1280, height: 720 } },
});
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/VideoQualityManager.tsx");
class VideoQualityManager {
  constructor(arg0, arg1) {
    tmp = importDefault;
    if (importDefault === undefined) {
      tmp = closure_2;
    }
    merged = Object.assign({ isMuted: false });
    merged.contextType = global;
    merged.connection = require;
    merged.options = tmp;
    merged.isStreamContext = merged.contextType === MediaEngineContextTypes.STREAM;
    mediaSinkWantsLadder = new closure_0(closure_1[1]).MediaSinkWantsLadder(tmp);
    merged.ladder = mediaSinkWantsLadder;
    merged.goliveMaxQuality = merged.getDefaultGoliveQuality();
    merged.lastGoLivePixelCount = {};
    return merged;
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
    const obj = {
      encode: null,
      capture: null,
      bitrateMin: null,
      bitrateMax: null,
      bitrateTarget: null,
      localWant: null,
    };
    tmp10 = WantsVideoQuality;
    obj.encode = prototype.extend(goliveQuality.encode, self.qualityOverwrite.encode);
    obj.capture = prototype.extend(goliveQuality.capture, self.qualityOverwrite.capture);
    let bitrateMin = self.qualityOverwrite.bitrateMin;
    if (bitrateMin == null) {
      bitrateMin = goliveQuality.bitrateMin;
    }
    obj.bitrateMin = bitrateMin;
    let bitrateMax = self.qualityOverwrite.bitrateMax;
    if (bitrateMax == null) {
      bitrateMax = goliveQuality.bitrateMax;
    }
    obj.bitrateMax = bitrateMax;
    let bitrateTarget = self.qualityOverwrite.bitrateTarget;
    if (bitrateTarget == null) {
      bitrateTarget = goliveQuality.bitrateTarget;
    }
    obj.bitrateTarget = bitrateTarget;
    obj.localWant = goliveQuality.localWant;
    tmp10 = new tmp10(obj);
  }
  return tmp10;
};
prototype2["applyQualityConstraints"] = function applyQualityConstraints(constraints, arg1) {
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
  const obj = {
    capture: prototype.extend(this.goliveMaxQuality.capture, capture.capture),
    encode: prototype.extend(this.goliveMaxQuality.encode, capture.encode),
    bitrateMin: null,
    bitrateMax: null,
    bitrateTarget: null,
    localWant: null,
  };
  let bitrateMin = capture.bitrateMin;
  if (bitrateMin == null) {
    bitrateMin = self.goliveMaxQuality.bitrateMin;
  }
  obj.bitrateMin = bitrateMin;
  let bitrateMax = capture.bitrateMax;
  if (bitrateMax == null) {
    bitrateMax = self.goliveMaxQuality.bitrateMax;
  }
  obj.bitrateMax = bitrateMax;
  let bitrateTarget = capture.bitrateTarget;
  if (bitrateTarget == null) {
    bitrateTarget = self.goliveMaxQuality.bitrateTarget;
  }
  obj.bitrateTarget = bitrateTarget;
  obj.localWant = self.goliveMaxQuality.localWant;
  self.goliveMaxQuality = new WantsVideoQuality(obj);
};
prototype2["getVideoQuality"] = function getVideoQuality(localWant) {
  const self = this;
  const ladder = this.ladder;
  const resolution = ladder.getResolution(localWant);
  let obj = { encode: null, capture: null, bitrateMin: null, bitrateMax: null, localWant: null };
  obj = {};
  const result = this.options.videoBitrate.min * resolution.budgetPortion;
  const result1 = this.options.videoBitrate.max * resolution.budgetPortion;
  const merged = Object.assign(resolution);
  obj.framerate = this.isMuted ? resolution.mutedFramerate : resolution.framerate;
  obj.encode = obj;
  obj.capture = {
    width: self.options.videoCapture.width,
    height: self.options.videoCapture.height,
    framerate: self.options.videoCapture.framerate,
  };
  obj.bitrateMin = Math.max(result, self.options.videoBitrateFloor);
  obj.bitrateMax = Math.max(result1, self.options.videoBitrateFloor);
  obj.localWant = localWant;
  return new WantsVideoQuality(obj);
};
prototype2["scaleLinearly"] = function scaleLinearly(arg0, pixelCount, bitrateMax) {
  let num = 0;
  if (0 !== pixelCount) {
    num = (arg0 * bitrateMax) / pixelCount;
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
        const bound = Math.min(
          hasOwnProperty * self.goliveMaxQuality.encode.pixelCount * self.goliveMaxQuality.encode.framerate,
          self.goliveMaxQuality.bitrateMax,
        );
        let scaleLinearlyResult2;
        const scaleLinearlyResult = self.scaleLinearly(
          arg1,
          self.goliveMaxQuality.encode.pixelCount,
          self.goliveMaxQuality.bitrateMin,
        );
        if (null != self.goliveMaxQuality.bitrateTarget) {
          scaleLinearlyResult2 = self.scaleLinearly(
            arg1,
            self.goliveMaxQuality.encode.pixelCount,
            self.goliveMaxQuality.bitrateTarget,
          );
        }
        const obj = {
          encode: self.goliveMaxQuality.encode,
          capture: self.goliveMaxQuality.capture,
          bitrateMin: null,
          bitrateMax: null,
          bitrateTarget: null,
          localWant: null,
        };
        const _Math = Math;
        const _Math2 = Math;
        obj.bitrateMin = Math.max(Math.ceil(scaleLinearlyResult), self.options.videoBitrateFloor);
        const _Math3 = Math;
        const _Math4 = Math;
        obj.bitrateMax = Math.max(
          Math.ceil(
            self.scaleLinearly(arg1, self.goliveMaxQuality.encode.pixelCount, self.goliveMaxQuality.bitrateMax),
          ),
          bound,
        );
        let bound1;
        if (null != scaleLinearlyResult2) {
          const _Math5 = Math;
          const _Math6 = Math;
          bound1 = Math.max(Math.ceil(scaleLinearlyResult2), self.options.videoBitrateFloor);
        }
        obj.bitrateTarget = bound1;
        obj.localWant = localWant;
        return new WantsVideoQuality(obj);
      }
    }
  }
  return self.goliveMaxQuality;
};
prototype2["getDefaultGoliveQuality"] = function getDefaultGoliveQuality() {
  const obj = {
    capture: null,
    encode: { width: 1280, height: 720, framerate, pixelCount: 921600 },
    bitrateMin: this.options.desktopBitrate.min,
    bitrateMax: this.options.desktopBitrate.max,
    bitrateTarget: this.options.desktopBitrate.target,
  };
  const size = { width: 1280, height: 720, framerate };
  obj.capture = size;
  return new WantsVideoQuality(obj);
};

export const VIDEO_QUALITY_MODES_TO_OVERWRITES = frozen;
export { WantsVideoQuality };
export const VideoQuality = prototype;
export { VideoQualityManager };
