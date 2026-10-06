// === Module 4965: VideoQualityManager ===

// Module 4965 (VideoQualityManager)
import MediaSinkWantsLadder from "MediaSinkWantsLadder" /* 4966 */;
import Constants from "Constants" /* 4921 */;
import size_mod from "module_2" /* 2 */;

let framerate;

let VideoQualityMode;
let c2;
let c3;
let closure_4;
let hasOwnProperty;
({ defaultVideoQualityOptions: c2, MediaEngineContextTypes: c3, VideoQualityMode, VIDEO_QUALITY_FRAMERATE: closure_4, BIT_FLOOR_PER_PIXEL: hasOwnProperty } = Constants);
class WantsVideoQuality {
  constructor(capture) {
    const prototype = new.target.prototype;
    if (null == capture.capture) {
      if (null == capture.encode) {
        const _Error = Error;
        const self3 = this;
        const self4 = this;
        const error = new Error("Invalid arguments.");
        throw error;
      }
    }
    let tmp;
    if (null != capture.capture) {
      capture = capture.capture;
      const self = this;
      if (typeof VideoQuality === "function") {
        const obj = Object.create(VideoQuality.prototype);
        ({ width: tmp2.width, height: tmp2.height, framerate: tmp2.framerate } = capture);
        obj.pixelCount = capture.width * capture.height;
        tmp = obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    const obj3 = Object.create(prototype);
    obj3.capture = tmp;
    let tmp4;
    if (null != capture.encode) {
      const encode = capture.encode;
      const self2 = this;
      if (typeof VideoQuality === "function") {
        const obj4 = Object.create(VideoQuality.prototype);
        ({ width: tmp5.width, height: tmp5.height, framerate: tmp5.framerate } = encode);
        obj4.pixelCount = encode.width * encode.height;
        tmp4 = obj4;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    obj3.encode = tmp4;
    ({ bitrateMin: tmp3.bitrateMin, bitrateMax: tmp3.bitrateMax, bitrateTarget: tmp3.bitrateTarget, localWant: tmp3.localWant } = capture);
    return obj3;
  }
}
class VideoQuality {
  constructor(width) {
    const obj = Object.create(new.target.prototype);
    ({ width: tmp.width, height: tmp.height, framerate: tmp.framerate } = width);
    obj.pixelCount = width.width * width.height;
    return obj;
  }
  static equals(width, width2) {
    let tmp = null == width && null == width2;
    if (!tmp) {
      let tmp2 = null != width && null != width2;
      if (tmp2) {
        tmp2 = width.width === width2.width && width.height === width2.height && width.framerate === width2.framerate;
      }
      tmp = tmp2;
    }
    return tmp;
  }
  static extend(width, width2) {
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
      size = { width: num, height: num2, framerate, pixelCount: num * num2 };
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
      return size;
    }
  }
}
const frozen = Object.freeze({ [VideoQualityMode.AUTO]: {}, [VideoQualityMode.FULL]: { encode: { width: 1280, height: 720 } } });
let size = size_mod;
let result = size.fileFinishedImporting("../discord_common/js/packages/media-engine/VideoQualityManager.tsx");
class VideoQualityManager {
  constructor(contextType, connection) {
    let tmp = arg2;
    if (arg2 === undefined) {
      tmp = React2;
    }
    const merged = Object.assign({ isMuted: false, fakeGoLiveEncodePixelCount: null });
    merged.contextType = contextType;
    merged.connection = connection;
    merged.options = tmp;
    merged.isStreamContext = merged.contextType === constants.STREAM;
    const mediaSinkWantsLadder = new MediaSinkWantsLadder.MediaSinkWantsLadder(tmp);
    merged.ladder = mediaSinkWantsLadder;
    merged.goliveMaxQuality = merged.getDefaultGoliveQuality();
    merged.lastGoLivePixelCount = {};
    return merged;
  }
  getQuality(arg0) {
    let bitrateMax;
    let bitrateMin;
    let bitrateTarget;
    let goliveQuality;
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
      goliveQuality = self.getGoliveQuality(localWant, num);
    } else {
      goliveQuality = self.getVideoQuality(localWant);
    }
    let tmp92 = goliveQuality;
    if (null != self.qualityOverwrite) {
      const obj = { encode: VideoQuality.extend(goliveQuality.encode, self.qualityOverwrite.encode), capture: VideoQuality.extend(goliveQuality.capture, self.qualityOverwrite.capture), bitrateMin, bitrateMax, bitrateTarget, localWant: goliveQuality.localWant };
      bitrateMin = self.qualityOverwrite.bitrateMin;
      if (bitrateMin == null) {
        bitrateMin = goliveQuality.bitrateMin;
      }
      bitrateMax = self.qualityOverwrite.bitrateMax;
      if (bitrateMax == null) {
        bitrateMax = goliveQuality.bitrateMax;
      }
      bitrateTarget = self.qualityOverwrite.bitrateTarget;
      if (bitrateTarget == null) {
        bitrateTarget = goliveQuality.bitrateTarget;
      }
      const self2 = this;
      tmp92 = new WantsVideoQuality(obj);
    }
    return tmp92;
  }
  applyQualityConstraints(constraints, arg1) {
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
    const tmp2 = null != constraints.encodingVideoBitRate && null != constraints.encodingVideoMaxBitRate;
    if (tmp2) {
      const _Math = Math;
      constraints.encodingVideoBitRate = Math.min(constraints.encodingVideoBitRate, constraints.encodingVideoMaxBitRate);
    }
    return { quality, constraints };
  }
  setQualityOverwrite(qualityOverwrite) {
    this.qualityOverwrite = qualityOverwrite;
  }
  setGoliveQuality(capture) {
    let bitrateMax;
    let bitrateMin;
    let bitrateTarget;
    const self = this;
    const obj = { capture: VideoQuality.extend(this.goliveMaxQuality.capture, capture.capture), encode: VideoQuality.extend(this.goliveMaxQuality.encode, capture.encode), bitrateMin, bitrateMax, bitrateTarget, localWant: self.goliveMaxQuality.localWant };
    bitrateMin = capture.bitrateMin;
    if (bitrateMin == null) {
      bitrateMin = self.goliveMaxQuality.bitrateMin;
    }
    bitrateMax = capture.bitrateMax;
    if (bitrateMax == null) {
      bitrateMax = self.goliveMaxQuality.bitrateMax;
    }
    bitrateTarget = capture.bitrateTarget;
    if (bitrateTarget == null) {
      bitrateTarget = self.goliveMaxQuality.bitrateTarget;
    }
    self.goliveMaxQuality = new WantsVideoQuality(obj);
  }
  getVideoQuality(localWant) {
    let obj2;
    let result;
    let result1;
    let tmp4;
    const self = this;
    const ladder = this.ladder;
    const resolution = ladder.getResolution(localWant);
    const obj = { encode: obj2, capture: { width: self.options.videoCapture.width, height: self.options.videoCapture.height, framerate: self.options.videoCapture.framerate }, bitrateMin: Math.max(result, self.options.videoBitrateFloor), bitrateMax: Math.max(result1, self.options.videoBitrateFloor), localWant };
    result = this.options.videoBitrate.min * resolution.budgetPortion;
    result1 = this.options.videoBitrate.max * resolution.budgetPortion;
    obj2 = { framerate: tmp4 };
    tmp4 = this.isMuted ? resolution.mutedFramerate : resolution.framerate;
    const merged = Object.assign(resolution);
    return new WantsVideoQuality(obj);
  }
  setFakeGoLiveEncodePixelCount(fakeGoLiveEncodePixelCount) {
    this.fakeGoLiveEncodePixelCount = fakeGoLiveEncodePixelCount;
  }
  scaleLinearly(arg0, pixelCount, bitrateMax) {
    let num = 0;
    if (0 !== pixelCount) {
      num = arg0 * bitrateMax / pixelCount;
    }
    return num;
  }
  getGoliveQuality(localWant, arg1) {
    let bound1;
    const self = this;
    const encode = this.goliveMaxQuality.encode;
    let pixelCount1;
    if (encode != null) {
      pixelCount1 = encode.pixelCount;
    }
    if (undefined !== pixelCount1) {
      if (arg1 > 0) {
        let pixelCount;
        if (null !== self.fakeGoLiveEncodePixelCount) {
          const _Math = Math;
          pixelCount = Math.min(self.fakeGoLiveEncodePixelCount, self.goliveMaxQuality.encode.pixelCount);
        } else {
          pixelCount = self.goliveMaxQuality.encode.pixelCount;
        }
        if (arg1 >= pixelCount) {
          return self.goliveMaxQuality;
        } else {
          const _Math8 = Math;
          const bound = Math.min(hasOwnProperty * self.goliveMaxQuality.encode.pixelCount * self.goliveMaxQuality.encode.framerate, self.goliveMaxQuality.bitrateMax);
          let scaleLinearlyResult2;
          const scaleLinearlyResult = self.scaleLinearly(arg1, pixelCount, self.goliveMaxQuality.bitrateMin);
          const scaleLinearlyResult1 = self.scaleLinearly(arg1, pixelCount, self.goliveMaxQuality.bitrateMax);
          if (null != self.goliveMaxQuality.bitrateTarget) {
            scaleLinearlyResult2 = self.scaleLinearly(arg1, pixelCount, self.goliveMaxQuality.bitrateTarget);
          }
          const _Math2 = Math;
          const _Math3 = Math;
          const _Math4 = Math;
          const _Math5 = Math;
          const obj = { encode: self.goliveMaxQuality.encode, capture: self.goliveMaxQuality.capture, bitrateMin: Math.max(Math.ceil(scaleLinearlyResult), self.options.videoBitrateFloor), bitrateMax: Math.max(Math.ceil(scaleLinearlyResult1), bound), bitrateTarget: bound1, localWant };
          bound1 = undefined;
          if (null != scaleLinearlyResult2) {
            const _Math6 = Math;
            const _Math7 = Math;
            bound1 = Math.max(Math.ceil(scaleLinearlyResult2), self.options.videoBitrateFloor);
          }
          const self2 = this;
          return new WantsVideoQuality(obj);
        }
      }
    }
    return self.goliveMaxQuality;
  }
  getDefaultGoliveQuality() {
    const obj = { capture: size, encode: { width: 1280, height: 720, framerate, pixelCount: 921600 }, bitrateMin: this.options.desktopBitrate.min, bitrateMax: this.options.desktopBitrate.max, bitrateTarget: this.options.desktopBitrate.target };
    size = { width: 1280, height: 720, framerate };
    return new WantsVideoQuality(obj);
  }
}
let prototype = VideoQualityManager.prototype;

export const VIDEO_QUALITY_MODES_TO_OVERWRITES = frozen;
export { WantsVideoQuality };
export { VideoQuality };
export { VideoQualityManager };