// === Module 9312: applyBackgroundOption ===

// Module 9312 (applyBackgroundOption)
import Constants from "Constants" /* 1085 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4945 */;
import VideoBackgroundActionCreators from "VideoBackgroundActionCreators" /* 9314 */;
import LastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption" /* 9316 */;
import getDefaultBackgroundDataDefault from "getDefaultBackgroundData" /* 9318 */;
import getFilterImageDefault from "getFilterImage" /* 9323 */;
import isVideoBackgroundEnabledDefault from "isVideoBackgroundEnabled" /* 9324 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import VideoBackgroundStore from "VideoBackgroundStore" /* 9313 */;
import VideoBackgroundConstants from "VideoBackgroundConstants" /* 6484 */;
import size from "module_2" /* 2 */;

let closure_5, closure_6;

let metroImportDefault;
let metroRequire;
let obj = function _getFilterBlob() {
  obj = _asyncToGenerator(async function(arg0) {
    let c3;
    let c4;
    let closure_2;
    let closure_0 = arg0;
    const _fetch = fetch;
    await fetch(closure_0);
    closure_0 = value;
    await closure_0.blob();
    const _Uint8ClampedArray = Uint8ClampedArray;
    await _Uint8ClampedArray.arrayBuffer();
    const self = this;
    const self2 = this;
    const tmp6 = new Uint8ClampedArray(value);
    return tmp6;
  });
  return obj(...arguments);
};
function applyBackgroundMediaFilterSettings(arg0, target, graph, image, blob) {
  obj = VideoBackgroundActionCreators;
  const obj2 = { graph, target, image, blob };
  const result = obj.applyMediaFilterSettings({ [arg0]: obj2 });
}
function applyBackgroundOption() {
  return obj(...arguments);
}
obj = function _applyBackgroundOption() {
  let styles;
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let asset = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2) => {
      let tmp5;
      let tmp6;
      function getFilterBlob() {
        return closure_1_9(...arguments);
      }
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = closure_133_10;
              let source;
              let c4;
              let c5;
              let closure_3 = false;
              if (null == asset) {
                applyBackgroundMediaFilterSettings(closure_0, closure_1, BaseConnectionEvent.FilterSettingsGraph.NONE);
                c9 = 3;
                return { value: "IconComponent", done: null };
              } else if (asset === closure_2_7) {
                applyBackgroundMediaFilterSettings(closure_0, closure_1, BaseConnectionEvent.FilterSettingsGraph.BACKGROUND_BLUR);
                c9 = 3;
                return { value: "IconComponent", done: null };
              } else {
                if (typeof asset !== "string") {
                  let isAnimatedIconHashResult;
                  let videoFilterAssetURL;
                  if (typeof asset !== "number") {
                    asset = asset.asset;
                    const obj11 = AvatarUtils;
                    isAnimatedIconHashResult = obj11.isAnimatedIconHash(asset);
                    if (!isAnimatedIconHashResult) {
                      const obj4 = AvatarUtils;
                      isAnimatedIconHashResult = obj4.isVideoAssetHash(asset);
                    }
                    closure_3 = isAnimatedIconHashResult;
                    const obj8 = { userId: null, assetId: null, assetHash: asset, size: styles.width };
                    ({ user_id: obj6.userId, id: obj6.assetId } = asset);
                    const obj5 = AvatarUtils;
                    videoFilterAssetURL = obj5.getVideoFilterAssetURL(obj8);
                    source = videoFilterAssetURL;
                  }
                  if (null != videoFilterAssetURL) {
                    c7 = 1;
                    if (isAnimatedIconHashResult) {
                      c4 = tmp6;
                      if (closure_3) {
                        c8 = 3;
                        c9 = 1;
                        const obj9 = { value: getFilterBlob(source), done: false };
                        return obj9;
                      } else {
                        c5 = tmp5;
                        closure_133_10(closure_0, closure_1, closure_133_0(closure_133_2[6]).FilterSettingsGraph.BACKGROUND_REPLACEMENT, c4, c5);
                        c7 = 0;
                      }
                    } else {
                      c8 = 2;
                      c9 = 1;
                      const obj10 = { value: getFilterImageDefault(videoFilterAssetURL), done: false };
                      return obj10;
                    }
                  }
                }
                const tmp21 = getDefaultBackgroundDataDefault()[asset];
                const isVideo = tmp21.isVideo;
                c3 = isVideo;
                if (isVideo == null) {
                  c3 = false;
                }
                closure_3 = c3;
                source = tmp21.source;
                isAnimatedIconHashResult = c3;
                videoFilterAssetURL = source;
              }
            }
          } else if (1 === c8) {
            c7 = 0;
            const obj3 = closure_133_0(closure_133_2[5]);
            const result = obj3.errorApplyingMediaFilterSettings();
          } else if (2 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else {
              tmp6 = value;
              if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                return { value, done: true };
              }
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else {
            tmp5 = value;
            if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            }
          }
          c9 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp47) {
          closure_6 = tmp47;
          if (0 === c7) {
            c9 = 3;
            throw tmp47;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function applyBackgroundOptionLive() {
  return obj(...arguments);
}
obj = function _applyBackgroundOptionLive() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    const track = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let location;
      const obj5 = { type: closure_131_0(closure_131_2[6]).FilterTargetType.INPUT_DEVICE };
      const CAMERA_BACKGROUND_LIVE = closure_131_0(closure_131_2[6]).FilterSettingsKey.CAMERA_BACKGROUND_LIVE;
      await closure_131_11(CAMERA_BACKGROUND_LIVE, obj5, closure_0);
      const tmp6 = flag;
      if (tmp6) {
        obj = closure_131_0(closure_131_2[10]);
        const result = obj.trackBackgroundOptionUpdated(closure_0, location, "Enabled");
      }
      await "IconComponent";
      location = track.location;
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _applyBackgroundOptionPreview() {
  obj = _asyncToGenerator(async (arg0, streamId, arg2) => {
    let closure_3;
    let closure_4;
    let closure_0 = arg0;
    const track = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (async (arg0, value, arg2) => {
      let location;
      const obj7 = closure_132_0(closure_132_2[5]);
      const result = obj7.startApplyMediaFilterSettings();
      const obj5 = { type: closure_132_0(closure_132_2[6]).FilterTargetType.STREAM, streamId };
      const CAMERA_BACKGROUND_PREVIEW = closure_132_0(closure_132_2[6]).FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW;
      await closure_132_11(CAMERA_BACKGROUND_PREVIEW, obj5, closure_0);
      const tmp6 = flag;
      if (tmp6) {
        obj = closure_132_0(closure_132_2[10]);
        const result1 = obj.trackBackgroundOptionUpdated(closure_0, location, "Preview");
      }
      await "IconComponent";
      location = track.location;
      return "Set";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ BACKGROUND_REPLACEMENT_SIZE: metroRequire, BLUR_BACKGROUND_OPTION: metroImportDefault } = VideoBackgroundConstants);
const NOOP = Constants.NOOP;
let result = size.fileFinishedImporting("modules/video_backgrounds/applyBackgroundOption.tsx");

export { applyBackgroundOptionLive };
export const applyBackgroundOptionPreview = function applyBackgroundOptionPreview() {
  return obj(...arguments);
};
export const applyInitialVideoBackgroundOption = function applyInitialVideoBackgroundOption() {
  const currentUser = UserStore.getCurrentUser();
  if (null != currentUser) {
    obj = LastUsedVideoBackgroundOption;
    const lastUsedVideoBackgroundOption = obj.getLastUsedVideoBackgroundOption(currentUser);
    const tmp6 = isVideoBackgroundEnabledDefault("applyBackgroundOption") && !VideoBackgroundStore.hasBeenApplied && null != lastUsedVideoBackgroundOption;
    if (tmp6) {
      const promise = applyBackgroundOptionLive(lastUsedVideoBackgroundOption, { track: false });
      promise.catch(NOOP);
    }
  }
};