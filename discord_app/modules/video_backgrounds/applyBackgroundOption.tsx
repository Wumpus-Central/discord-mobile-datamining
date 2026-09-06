// === Module 9095: applyBackgroundOption ===

// Module 9095 (applyBackgroundOption)
import AvatarUtils from "AvatarUtils" /* 1396 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4615 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 9098 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 9100 */;
import getDefaultBackgroundDataDefault from "getDefaultBackgroundData" /* 9101 */;
import getFilterImageDefault from "getFilterImage" /* 9106 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 9107 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1371 */;
import VideoBackgroundStore from "VideoBackgroundStore" /* 9096 */;

require = fn;
let closure_9 = async function _getFilterBlob() {
  const _fetch = fetch;
  closure_130_0 = await fetch(closure_0);
  closure_130_1 = await closure_130_0.blob();
  const _Uint8ClampedArray = Uint8ClampedArray;
  await closure_130_1.arrayBuffer();
  return new Uint8ClampedArray(arg1);
};
function applyBackgroundMediaFilterSettings(arg0, target, graph, image, blob) {
  const obj = { graph, target, image, blob };
  const result = obj.applyMediaFilterSettings({ [arg0]: obj });
}
function applyBackgroundOption() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _applyBackgroundOption(arg0, value) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp32;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          closure_132_3 = false;
          if (null == closure_2) {
            applyBackgroundMediaFilterSettings(tmp58, tmp59, BaseConnectionEvent.FilterSettingsGraph.NONE);
            c9 = 3;
            return { value: "HermesInternal", done: null };
          } else if (tmp60 === React5) {
            applyBackgroundMediaFilterSettings(tmp58, tmp59, BaseConnectionEvent.FilterSettingsGraph.BACKGROUND_BLUR);
            c9 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            if (typeof tmp60 !== "string") {
              if (typeof tmp60 !== "number") {
                const asset = tmp60.asset;
                let isAnimatedIconHashResult = AvatarUtils.isAnimatedIconHash(asset);
                if (!isAnimatedIconHashResult) {
                  let obj3 = AvatarUtils;
                  isAnimatedIconHashResult = obj3.isVideoAssetHash(asset);
                }
                closure_132_3 = isAnimatedIconHashResult;
                let obj4 = AvatarUtils;
                const obj1 = { userId: null, assetId: null, assetHash: null, size: null };
                ({ user_id: obj6.userId, id: obj6.assetId } = tmp60);
                obj1.assetHash = asset;
                obj1.size = styles.width;
                let videoFilterAssetURL = obj4.getVideoFilterAssetURL(obj1);
                closure_132_2 = videoFilterAssetURL;
              }
              if (null != videoFilterAssetURL) {
                c7 = 1;
                if (isAnimatedIconHashResult) {
                  closure_132_4 = tmp9;
                  if (closure_132_3) {
                    c8 = 3;
                    c9 = 1;
                    let obj2 = {
                      value: (function getFilterBlob() {
                                          const self = this;
                                          const apply = closure_1_9.apply;
                                          if (typeof apply === "unknown") {
                                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                          } else {
                                            applyArgumentsResult = apply(self, arguments);
                                          }
                                          return applyArgumentsResult;
                                        })(closure_132_2),
                      done: false
                    };
                    return obj2;
                  } else {
                    closure_132_5 = tmp8;
                    closure_133_10(closure_132_0, closure_132_1, closure_133_0(closure_133_2[6]).FilterSettingsGraph.BACKGROUND_REPLACEMENT, closure_132_4, closure_132_5);
                    c7 = 0;
                    tmp32 = closure_133_10;
                  }
                } else {
                  c8 = 2;
                  c9 = 1;
                  obj3 = { value: getFilterImageDefault(videoFilterAssetURL), done: false };
                  return obj3;
                }
              }
            }
            const tmp24 = getDefaultBackgroundDataDefault()[tmp60];
            const isVideo = tmp24.isVideo;
            c3 = isVideo;
            if (isVideo == null) {
              c3 = false;
            }
            closure_132_3 = c3;
            const source = tmp24.source;
            closure_132_2 = source;
            isAnimatedIconHashResult = c3;
            videoFilterAssetURL = source;
          }
        }
      } else if (1 === tmp7) {
        c7 = 0;
        obj2 = closure_133_0(closure_133_2[5]);
        const result = obj2.errorApplyingMediaFilterSettings();
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else {
          if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            obj4 = { value, done: true };
            return obj4;
          }
          tmp9 = value;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else {
        if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          obj = { value, done: true };
          return obj;
        }
        tmp8 = value;
      }
      c9 = 3;
    } catch (tmp50) {
      closure_6 = tmp50;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp50;
      } else {
        c8 = tmp;
      }
    }
  }
};
function applyBackgroundOptionLive() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _applyBackgroundOptionLive(arg0, arg1) {
  closure_0 = arg0;
  let track = arg1;
  c4 = 0;
  c5 = 0;
  let iter = (async (arg0, value) => {
    await closure_131_11(closure_131_0(closure_131_2[6]).FilterSettingsKey.CAMERA_BACKGROUND_LIVE, { type: closure_131_0(closure_131_2[6]).FilterTargetType.INPUT_DEVICE }, closure_130_0);
    if (closure_130_1) {
      const result = closure_131_0(closure_131_2[10]).trackBackgroundOptionUpdated(closure_130_0, _location, "Enabled");
      closure_131_0(closure_131_2[10]);
    }
    await "HermesInternal";
    closure_2 = tmp2;
    closure_130_0 = closure_0;
    let flag = track.track;
    if (flag === undefined) {
      flag = true;
    }
    closure_130_1 = flag;
    _location = track.location;
    return "PX_16";
  })();
  iter.next();
  return iter;
};
let closure_15 = async function _applyBackgroundOptionPreview(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let track = arg2;
  c5 = 0;
  c6 = 0;
  let iter = (async (arg0, value, arg2) => {
    const result = closure_132_0(closure_132_2[5]).startApplyMediaFilterSettings();
    await closure_132_11(closure_132_0(closure_132_2[6]).FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, { type: closure_132_0(closure_132_2[6]).FilterTargetType.STREAM, streamId: closure_131_1 }, closure_131_0);
    if (closure_131_2) {
      const result1 = closure_132_0(closure_132_2[10]).trackBackgroundOptionUpdated(closure_131_0, _location, "Preview");
      closure_132_0(closure_132_2[10]);
    }
    await "HermesInternal";
    closure_3 = tmp2;
    closure_131_0 = closure_0;
    closure_131_1 = closure_1;
    let flag = track.track;
    if (flag === undefined) {
      flag = true;
    }
    closure_131_2 = flag;
    _location = track.location;
    return "PX_16";
  })();
  iter.next();
  return iter;
};
const VideoBackgroundConstants = fn(6987);
({ BACKGROUND_REPLACEMENT_SIZE: metroRequire, BLUR_BACKGROUND_OPTION: closure_7 } = VideoBackgroundConstants);
const NOOP = fn(1074).NOOP;
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_backgrounds/applyBackgroundOption.tsx");

export { applyBackgroundOptionLive };
export const applyBackgroundOptionPreview = function applyBackgroundOptionPreview() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const applyInitialVideoBackgroundOption = function applyInitialVideoBackgroundOption() {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    const lastUsedVideoBackgroundOption = LastUsedVideoBackgroundOption.getLastUsedVideoBackgroundOption(currentUser);
    let tmp6 = isVideoBackgroundSupportedDefault();
    if (tmp6) {
      tmp6 = !VideoBackgroundStore.hasBeenApplied;
    }
    if (tmp6) {
      tmp6 = null != lastUsedVideoBackgroundOption;
    }
    if (tmp6) {
      applyBackgroundOptionLive(lastUsedVideoBackgroundOption, { track: false }).catch(NOOP);
      const promise = applyBackgroundOptionLive(lastUsedVideoBackgroundOption, { track: false });
    }
  }
};