// discord_app/modules/video_backgrounds/applyBackgroundOption.tsx
import 00038__ from "../../../_runtime/metro/00038__.js";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleSyncedStoresUpdate from "handleSyncedStoresUpdate";
import VideoFilterType from "VideoFilterType";
import { NOOP } from "ME";
import { isVideoBackgroundSupported } from "isVideoBackgroundSupported.tsx";
import { getLastUsedVideoBackgroundOption } from "LastUsedVideoBackgroundOption.tsx";
import { _fetchVideoFilterAssets } from "VideoBackgroundActionCreators.tsx";

let closure_6;
let error;
const require = arg1;
function _getFilterBlob() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const _fetch = fetch;
      closure_0 = yield fetch(closure_0);
      const Uint8ClampedArray = yield closure_0.blob();
      const _Uint8ClampedArray = Uint8ClampedArray;
      yield Uint8ClampedArray.arrayBuffer();
      const tmp9 = new Uint8ClampedArray(arg1);
      return tmp9;
    })();
  });
  const _getFilterBlob = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function applyBackgroundMediaFilterSettings(arg0, target, graph, image, blob) {
  let obj = _fetchVideoFilterAssets;
  obj = { graph, target, image, blob };
  const result = obj.applyMediaFilterSettings({ [arg0]: obj });
}
function applyBackgroundOption() {
  const self = this;
  const apply = _applyBackgroundOption.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _applyBackgroundOption() {
  let self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c5 = tmp3;
              let c4 = tmp30;
              let source;
              c4 = undefined;
              c5 = undefined;
              let module_38 = false;
              if (null == source) {
                outer1_10(tmp57, tmp58, callback(4398).FilterSettingsGraph.NONE);
                c9 = 3;
                return { value: "T", done: null };
              } else if (tmp59 === c7) {
                outer1_10(tmp57, tmp58, callback(4398).FilterSettingsGraph.BACKGROUND_BLUR);
                c9 = 3;
                return { value: "T", done: null };
              } else {
                if (typeof tmp59 !== "string") {
                  if (typeof tmp59 !== "number") {
                    const asset = tmp59.asset;
                    let isAnimatedIconHashResult = callback(1416).isAnimatedIconHash(asset);
                    if (!isAnimatedIconHashResult) {
                      let obj3 = callback(1416);
                      isAnimatedIconHashResult = obj3.isVideoAssetHash(asset);
                    }
                    module_38 = isAnimatedIconHashResult;
                    let obj4 = callback(1416);
                    const obj1 = { userId: null, assetId: null, assetHash: null, size: null };
                    ({ user_id: obj6[0], id: obj6[1] } = tmp59);
                    obj1[2] = asset;
                    obj1[3] = outer1_6.width;
                    let videoFilterAssetURL = obj4.getVideoFilterAssetURL(obj1);
                    source = videoFilterAssetURL;
                    const obj11 = callback(1416);
                  }
                  if (null != videoFilterAssetURL) {
                    c7 = 1;
                    if (isAnimatedIconHashResult) {
                      c4 = tmp9;
                      if (module_38) {
                        c8 = 3;
                        c9 = 1;
                        let obj2 = { value: null, done: false };
                        obj2[0] = (function getFilterBlob(source) {
                          const self = this;
                          const apply = c9.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(source);
                        return obj2;
                      } else {
                        c5 = tmp8;
                        callback3(callback, callback2, callback(source[7]).FilterSettingsGraph.BACKGROUND_REPLACEMENT, c4, c5);
                        c7 = 0;
                        tmp30 = callback3;
                      }
                    } else {
                      c8 = 2;
                      c9 = 1;
                      obj3 = { value: null, done: false };
                      obj3[0] = (function getFilterImage(videoFilterAssetURL) {
                        let closure_0 = videoFilterAssetURL;
                        return new Promise((arg0, arg1) => {
                          let closure_0 = arg0;
                          let closure_1 = arg1;
                          const image = new globalThis.Image();
                          image.crossOrigin = "anonymous";
                          image.onload = function onload() { ... };
                          image.onerror = function onerror() { ... };
                          image.src = closure_0;
                        });
                      })(videoFilterAssetURL);
                      return obj3;
                    }
                  }
                }
                const tmp24 = callback2(9106)()[tmp59];
                const isVideo = tmp24.isVideo;
                module_38 = isVideo;
                if (isVideo == null) {
                  module_38 = false;
                }
                source = tmp24.source;
                isAnimatedIconHashResult = module_38;
                videoFilterAssetURL = source;
              }
            }
          } else if (1 === tmp7) {
            c7 = 0;
            obj2 = callback(source[6]);
            let result = obj2.errorApplyingMediaFilterSettings();
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else {
              if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              }
              tmp9 = arg1;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else {
            if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            tmp8 = arg1;
          }
          c9 = 3;
        } catch (tmp48) {
          let closure_6 = tmp48;
          if (tmp4 === c7) {
            c9 = tmp2;
            throw tmp48;
          } else {
            c8 = tmp;
          }
        }
      }
    })();
  });
  const _applyBackgroundOption = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function applyBackgroundOptionLive(lastUsedVideoBackgroundOption, arg1) {
  const self = this;
  const apply = _applyBackgroundOptionLive.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _applyBackgroundOptionLive() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let module_38 = tmp5;
              let location = tmp2;
              let flag;
              location = undefined;
              flag = flag.track;
              if (flag === undefined) {
                flag = true;
              }
              location = flag.location;
              c4 = 1;
              c5 = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { type: null };
              obj2[0] = callback(location[7]).FilterTargetType.INPUT_DEVICE;
              c4 = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback2(callback(location[7]).FilterSettingsKey.CAMERA_BACKGROUND_LIVE, obj2, callback);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            if (flag) {
              obj = callback(location[10]);
              const result = obj.trackBackgroundOptionUpdated(callback, location, "Enabled");
            }
            c5 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp16) {
          c5 = tmp;
          throw tmp16;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _applyBackgroundOptionLive = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _applyBackgroundOptionPreview() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let mergeGuildAvatar = tmp5;
              let location = tmp2;
              let flag;
              location = undefined;
              flag = flag.track;
              if (flag === undefined) {
                flag = true;
              }
              location = flag.location;
              c5 = 1;
              c6 = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const result = callback(flag[6]).startApplyMediaFilterSettings();
              const obj2 = { type: null, streamId: null };
              obj2[0] = callback(flag[7]).FilterTargetType.STREAM;
              obj2[1] = closure_1;
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback2(callback(flag[7]).FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, obj2, callback);
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            if (flag) {
              obj = callback(flag[10]);
              const result1 = obj.trackBackgroundOptionUpdated(callback, location, "Preview");
            }
            c6 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _applyBackgroundOptionPreview = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ BACKGROUND_REPLACEMENT_SIZE: closure_6, BLUR_BACKGROUND_OPTION: error } = VideoFilterType);
let result = require("handleSyncedStoresUpdate").fileFinishedImporting("modules/video_backgrounds/applyBackgroundOption.tsx");

export { applyBackgroundOptionLive };
export const applyBackgroundOptionPreview = function applyBackgroundOptionPreview() {
  const self = this;
  const apply = _applyBackgroundOptionPreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const applyInitialVideoBackgroundOption = function applyInitialVideoBackgroundOption() {
  currentUser = currentUser.getCurrentUser();
  if (null != currentUser) {
    const lastUsedVideoBackgroundOption = getLastUsedVideoBackgroundOption.getLastUsedVideoBackgroundOption(currentUser);
    let tmp6 = isVideoBackgroundSupported();
    if (tmp6) {
      tmp6 = !hasBeenApplied.hasBeenApplied;
    }
    if (tmp6) {
      tmp6 = null != lastUsedVideoBackgroundOption;
    }
    if (tmp6) {
      applyBackgroundOptionLive(lastUsedVideoBackgroundOption, { track: false }).catch(NOOP);
      const promise = applyBackgroundOptionLive(lastUsedVideoBackgroundOption, { track: false });
    }
    const obj = getLastUsedVideoBackgroundOption;
  }
};