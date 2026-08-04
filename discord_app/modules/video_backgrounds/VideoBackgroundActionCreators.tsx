import dispatcher from "dispatcher";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Endpoints } from "ME";

const require = arg1;
function _fetchVideoFilterAssets() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
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
            let callback = tmp3;
            let body = tmp7;
            body = undefined;
            let c3 = 1;
            const HTTP = outer1_0(outer1_2[4]).HTTP;
            const obj1 = { url: null, rejectWithError: false };
            obj1[0] = outer1_6.VIDEO_FILTER_ASSETS;
            c4 = 2;
            c5 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback = dependencyMap;
          let obj4 = callback(709);
          const obj3 = { type: "VIDEO_FILTER_ASSETS_FETCH_FAILURE", error: null };
          obj3[1] = callback;
          obj4.dispatch(obj3);
          throw callback;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          body = arg1;
          obj = callback(709);
          const obj5 = { type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS", assets: null };
          obj5[1] = body.body;
          obj.dispatch(obj5);
          c3 = 0;
          c5 = 3;
          const obj6 = { value: null, done: true };
          obj6[0] = body;
          return obj6;
        }
      } catch (tmp26) {
        dependencyMap = tmp26;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp26;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const _fetchVideoFilterAssets = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _uploadVideoFilterAsset() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let _detectH265HardwareDecode = tmp3;
              let dispatcher = tmp7;
              let lib;
              let constants = 1;
              const HTTP = lib(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = constants.VIDEO_FILTER_ASSETS;
              const obj2 = { type: null, asset: null, last_used: null };
              obj2[0] = callback;
              obj2[1] = lib;
              let toISOStringResult;
              if (dependencyMap != null) {
                toISOStringResult = dependencyMap.toISOString();
              }
              obj2[2] = toISOStringResult;
              obj1[1] = obj2;
              c7 = 2;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            constants = 0;
            callback = mergeGuildAvatar;
            const tmp24 = new callback(9086)(callback);
            throw tmp24;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            c8 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            lib = arg1;
            obj = callback(709);
            const obj5 = { type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS", videoFilterAsset: null };
            obj5[1] = lib.body;
            obj.dispatch(obj5);
            constants = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = lib.body;
            return obj6;
          }
        } catch (tmp27) {
          mergeGuildAvatar = tmp27;
          if (tmp4 === constants) {
            c8 = tmp2;
            throw tmp27;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  const _uploadVideoFilterAsset = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _deleteVideoFilterAsset() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp2;
              let lib2 = tmp5;
              lib2 = undefined;
              const HTTP = lib(outer1_2[4]).HTTP;
              const obj1 = { url: null, rejectWithError: false };
              obj1[0] = outer1_6.VIDEO_FILTER_ASSET(lib.id);
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib2 = lib(9087).getLastUsedVideoBackgroundOption(currentUser.getCurrentUser());
            const obj7 = lib(9087);
            let result = lib(9084).isCustomBackgroundOption(lib2);
            if (result) {
              result = lib2.id === lib.id;
            }
            if (result) {
              callback(null);
            }
            obj = lib2(709);
            const obj4 = { type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS", videoFilterAsset: null };
            obj4[1] = lib;
            obj.dispatch(obj4);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp20) {
          c4 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  const _deleteVideoFilterAsset = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function saveLastUsedBackgroundOption() {
  const self = this;
  const apply = _saveLastUsedBackgroundOption.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _saveLastUsedBackgroundOption() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp2;
              let lib2 = tmp5;
              lib2 = undefined;
              const PreloadedUserSettingsActionCreators = lib(outer1_2[9]).PreloadedUserSettingsActionCreators;
              c3 = 1;
              c4 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = PreloadedUserSettingsActionCreators.updateAsync("voiceAndVideo", (arg0) => {
                arg0.videoBackgroundFilterDesktop = callback(tmp2[8]).getVideoBackgroundProtoFromOption(callback);
              }, lib(outer1_2[9]).UserSettingsDelay.FREQUENT_USER_ACTION);
              return obj1;
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                if (obj12.isCustomBackgroundOption(lib)) {
                  const HTTP = lib(530).HTTP;
                  let obj3 = { url: null, rejectWithError: false };
                  obj3[0] = closure_6.VIDEO_FILTER_ASSET_LAST_USED(lib.id);
                  c3 = 2;
                  c4 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = HTTP.post(obj3);
                  return obj4;
                } else {
                  obj3 = lib2(709);
                  const obj5 = { type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: null };
                  obj5[1] = lib;
                  obj3.dispatch(obj5);
                  c4 = 3;
                }
                obj12 = lib(9084);
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib2 = arg1;
              obj = lib2(709);
              const obj6 = { type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: null };
              obj6[1] = lib2.body;
              obj.dispatch(obj6);
            }
            c4 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          }
        } catch (tmp20) {
          c4 = tmp;
          throw tmp20;
        }
      }
    })();
  });
  const _saveLastUsedBackgroundOption = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/video_backgrounds/VideoBackgroundActionCreators.tsx");

export const fetchVideoFilterAssets = function fetchVideoFilterAssets() {
  const self = this;
  const apply = _fetchVideoFilterAssets.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uploadVideoFilterAsset = function uploadVideoFilterAsset() {
  const self = this;
  const apply = _uploadVideoFilterAsset.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteVideoFilterAsset = function deleteVideoFilterAsset() {
  const self = this;
  const apply = _deleteVideoFilterAsset.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { saveLastUsedBackgroundOption };
export const applyMediaFilterSettings = function applyMediaFilterSettings(arg0) {
  if (_detectH265HardwareDecode.isSupported()) {
    let obj = importDefault(709);
    obj = { type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS", settings: null };
    obj[1] = arg0;
    obj.dispatch(obj);
  }
};
export const startApplyMediaFilterSettings = function startApplyMediaFilterSettings() {
  if (_detectH265HardwareDecode.isSupported()) {
    importDefault(709).dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START" });
    const obj = importDefault(709);
  }
};
export const errorApplyingMediaFilterSettings = function errorApplyingMediaFilterSettings() {
  importDefault(709).dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR" });
};