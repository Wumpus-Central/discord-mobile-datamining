// === Module 9098: VideoBackgroundActionCreators ===

// Module 9098 (VideoBackgroundActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 1940 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let closure_7 = async function _fetchVideoFilterAssets() {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: constants.VIDEO_FILTER_ASSETS, rejectWithError: false };
          c4 = 2;
          c5 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = closure_2;
        let obj4 = closure_129_1(closure_129_2[5]);
        const obj3 = { type: "VIDEO_FILTER_ASSETS_FETCH_FAILURE", error: closure_128_1 };
        obj4.dispatch(obj3);
        throw closure_128_1;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        obj4 = { value, done: true };
        return obj4;
      } else {
        closure_128_0 = value;
        obj = closure_129_1(closure_129_2[5]);
        const obj5 = { type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS", assets: closure_128_0.body };
        obj.dispatch(obj5);
        c3 = 0;
        c5 = 3;
        const obj6 = { value: closure_128_0, done: true };
        return obj6;
      }
    } catch (tmp26) {
      closure_2 = tmp26;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp26;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_8 = async function _uploadVideoFilterAsset() {
  closure_2 = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = undefined;
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.VIDEO_FILTER_ASSETS, body: null, rejectWithError: false };
            const obj1 = { type, asset, last_used: null };
            let toISOStringResult;
            if (closure_2 != null) {
              toISOStringResult = closure_2.toISOString();
            }
            obj1.last_used = toISOStringResult;
            request.body = obj1;
            c7 = 2;
            c8 = 1;
            const obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_1 = closure_5;
          const tmp24 = new closure_132_1(closure_132_2[6])(closure_131_1);
          throw tmp24;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_131_0 = value;
          obj = closure_132_1(closure_132_2[5]);
          const obj4 = { type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS", videoFilterAsset: closure_131_0.body };
          obj.dispatch(obj4);
          c6 = 0;
          c8 = 3;
          const obj5 = { value: closure_131_0.body, done: true };
          return obj5;
        }
      } catch (tmp27) {
        closure_5 = tmp27;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp27;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_9 = async function _deleteVideoFilterAsset(arg0) {
  let id = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp2;
            closure_1 = tmp5;
            closure_129_0 = id;
            let lastUsedVideoBackgroundOption;
            const HTTP = HTTPUtils.HTTP;
            const obj1 = { url: Endpoints.VIDEO_FILTER_ASSET(id.id), rejectWithError: false };
            c3 = 1;
            c4 = 1;
            const obj2 = { value: HTTP.del(obj1), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          lastUsedVideoBackgroundOption = closure_130_0(closure_130_2[7]).getLastUsedVideoBackgroundOption(closure_130_5.getCurrentUser());
          const obj7 = closure_130_0(closure_130_2[7]);
          let result = closure_130_0(closure_130_2[8]).isCustomBackgroundOption(lastUsedVideoBackgroundOption);
          if (result) {
            result = lastUsedVideoBackgroundOption.id === closure_129_0.id;
          }
          if (result) {
            closure_130_10(null);
          }
          obj = closure_130_1(closure_130_2[5]);
          const obj4 = { type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS", videoFilterAsset: closure_129_0 };
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
};
function saveLastUsedBackgroundOption() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _saveLastUsedBackgroundOption(arg0) {
  closure_2 = tmp2;
  closure_129_0 = closure_0;
  const PreloadedUserSettingsActionCreators = UserSettingsProtoActionCreators.PreloadedUserSettingsActionCreators;
  await PreloadedUserSettingsActionCreators.updateAsync("voiceAndVideo", async (arg0) => {
    arg0.videoBackgroundFilterDesktop = closure_0(closure_2[8]).getVideoBackgroundProtoFromOption(closure_1_0);
  }, UserSettingsProtoActionCreators.UserSettingsDelay.FREQUENT_USER_ACTION);
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      if (obj12.isCustomBackgroundOption(closure_129_0)) {
        const HTTP = closure_130_0(closure_130_2[4]).HTTP;
        let obj3 = { url: closure_130_6.VIDEO_FILTER_ASSET_LAST_USED(closure_129_0.id), rejectWithError: false };
        c3 = 2;
        c4 = 1;
        return { value: HTTP.post(obj3), done: false };
      } else {
        obj3 = closure_130_1(closure_130_2[5]);
        obj3.dispatch({ type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: closure_129_0 });
        c4 = 3;
      }
      obj12 = closure_130_0(closure_130_2[8]);
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_129_1 = value;
    closure_130_1(closure_130_2[5]).dispatch({ type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: closure_129_1.body });
    closure_130_1(closure_130_2[5]);
  }
  return value;
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_backgrounds/VideoBackgroundActionCreators.tsx");

export const fetchVideoFilterAssets = function fetchVideoFilterAssets() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uploadVideoFilterAsset = function uploadVideoFilterAsset() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteVideoFilterAsset = function deleteVideoFilterAsset() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { saveLastUsedBackgroundOption };
export const applyMediaFilterSettings = function applyMediaFilterSettings(settings) {
  if (MediaEngineStore.isSupported()) {
    const obj = { type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS", settings };
    obj.dispatch(obj);
  }
};
export const startApplyMediaFilterSettings = function startApplyMediaFilterSettings() {
  if (MediaEngineStore.isSupported()) {
    DispatcherDefault.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START" });
  }
};
export const errorApplyingMediaFilterSettings = function errorApplyingMediaFilterSettings() {
  DispatcherDefault.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR" });
};