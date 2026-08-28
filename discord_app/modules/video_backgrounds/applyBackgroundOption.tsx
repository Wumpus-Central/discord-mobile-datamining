// discord_app/modules/video_backgrounds/applyBackgroundOption.tsx
import _fetchVideoFilterAssets from "VideoBackgroundActionCreators.tsx";
import getLastUsedVideoBackgroundOption from "LastUsedVideoBackgroundOption.tsx";
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/UserStore.tsx";
import closure_5 from "VideoBackgroundStore.tsx";
import VideoFilterType from "VideoBackgroundConstants.tsx";
import { NOOP } from "../../Constants.tsx";

require = arg1;
function _getFilterBlob() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
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
  closure_9 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c8 = 0;
    c9 = 0;
    c7 = 0;
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
          return { value: "HermesInternal", done: null };
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
              c5 = tmp3;
              c4 = tmp32;
              let source;
              c4 = undefined;
              c5 = undefined;
              closure_3 = false;
              if (null == source) {
                closure_1_10(tmp59, tmp60, callback(4545).FilterSettingsGraph.NONE);
                c9 = 3;
                return { value: "HermesInternal", done: null };
              } else if (tmp61 === c7) {
                closure_1_10(tmp59, tmp60, callback(4545).FilterSettingsGraph.BACKGROUND_BLUR);
                c9 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                if (typeof tmp61 !== "string") {
                  if (typeof tmp61 !== "number") {
                    const asset = tmp61.asset;
                    let isAnimatedIconHashResult = callback(1435).isAnimatedIconHash(asset);
                    if (!isAnimatedIconHashResult) {
                      let obj3 = callback(1435);
                      isAnimatedIconHashResult = obj3.isVideoAssetHash(asset);
                    }
                    closure_3 = isAnimatedIconHashResult;
                    let obj4 = callback(1435);
                    obj1 = { userId: null, assetId: null, assetHash: null, size: null };
                    ({ user_id: obj6[0], id: obj6[1] } = tmp61);
                    obj1[2] = asset;
                    obj1[3] = closure_1_6.width;
                    let videoFilterAssetURL = obj4.getVideoFilterAssetURL(obj1);
                    source = videoFilterAssetURL;
                    const obj11 = callback(1435);
                  }
                  if (null != videoFilterAssetURL) {
                    c7 = 1;
                    if (isAnimatedIconHashResult) {
                      c4 = tmp9;
                      if (closure_3) {
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
                        callback3(callback, callback2, callback(source[6]).FilterSettingsGraph.BACKGROUND_REPLACEMENT, c4, c5);
                        c7 = 0;
                        tmp32 = callback3;
                      }
                    } else {
                      c8 = 2;
                      c9 = 1;
                      obj3 = { value: null, done: false };
                      obj3[0] = callback2(9736)(videoFilterAssetURL);
                      return obj3;
                    }
                  }
                }
                const tmp24 = callback2(9731)()[tmp61];
                const isVideo = tmp24.isVideo;
                closure_3 = isVideo;
                if (isVideo == null) {
                  closure_3 = false;
                }
                source = tmp24.source;
                isAnimatedIconHashResult = closure_3;
                videoFilterAssetURL = source;
              }
            }
          } else if (1 === tmp7) {
            c7 = 0;
            obj2 = callback(source[5]);
            const result = obj2.errorApplyingMediaFilterSettings();
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
    })();
  });
  closure_12 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
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
          return { value: "HermesInternal", done: null };
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
              closure_3 = tmp5;
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
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const obj2 = { type: null };
              obj2[0] = callback(location[6]).FilterTargetType.INPUT_DEVICE;
              c4 = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback2(callback(location[6]).FilterSettingsKey.CAMERA_BACKGROUND_LIVE, obj2, callback);
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
            return { value: "HermesInternal", done: null };
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
  closure_14 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
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
          return { value: "HermesInternal", done: null };
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
              closure_4 = tmp5;
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
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const result = callback(flag[5]).startApplyMediaFilterSettings();
              const obj2 = { type: null, streamId: null };
              obj2[0] = callback(flag[6]).FilterTargetType.STREAM;
              obj2[1] = closure_1;
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = callback2(callback(flag[6]).FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW, obj2, callback);
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
            return { value: "HermesInternal", done: null };
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
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ BACKGROUND_REPLACEMENT_SIZE: closure_6, BLUR_BACKGROUND_OPTION: error } = VideoFilterType);
let result = require("set").fileFinishedImporting("modules/video_backgrounds/applyBackgroundOption.tsx");

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
    let tmp6 = isVideoBackgroundSupportedDefault();
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