// === Module 8087: VideoBackgroundActionCreators ===

// Module 8087 (VideoBackgroundActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import VideoBackgroundUtils from "VideoBackgroundUtils" /* 8090 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 8091 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let asset, c5, closure_1, closure_3, closure_4, closure_5, id, videoBackground;

let obj = function _fetchVideoFilterAssets() {
  obj = _asyncToGenerator(async () => {
    let value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let error;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            error = tmp;
            value = undefined;
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: constants.VIDEO_FILTER_ASSETS, rejectWithError: false };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: HTTP.get(obj4), done: false };
            return obj6;
          }
        } else if (1 === c4) {
          c3 = 0;
          error = closure_2;
          const obj7 = { type: "VIDEO_FILTER_ASSETS_FETCH_FAILURE", error };
          const obj5 = closure_129_1(closure_129_2[5]);
          obj5.dispatch(obj7);
          throw error;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          const obj9 = { type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS", assets: value.body };
          obj = closure_129_1(closure_129_2[5]);
          obj.dispatch(obj9);
          c3 = 0;
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
      } catch (tmp23) {
        closure_2 = tmp23;
        if (0 === c3) {
          c5 = 3;
          throw tmp23;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _uploadVideoFilterAsset() {
  obj = _asyncToGenerator(async (asset, type, arg2) => {
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      let obj4;
      let toISOStringResult;
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              asset = undefined;
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.VIDEO_FILTER_ASSETS, body: obj4, rejectWithError: false };
              obj4 = { type, asset, last_used: toISOStringResult };
              toISOStringResult = undefined;
              const post = HTTP.post;
              if (closure_2 != null) {
                toISOStringResult = closure_2.toISOString();
              }
              c7 = 2;
              c8 = 1;
              const obj5 = { value: post(request), done: false };
              return obj5;
            }
          } else if (1 === c7) {
            c6 = 0;
            type = closure_5;
            const self = this;
            const self2 = this;
            const tmp19 = new closure_132_1(closure_132_2[6])(type);
            throw tmp19;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            asset = value;
            const obj7 = { type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS", videoFilterAsset: asset.body };
            obj = closure_132_1(closure_132_2[5]);
            obj.dispatch(obj7);
            c6 = 0;
            c8 = 3;
            return { value: asset.body, done: true };
          }
        } catch (tmp22) {
          closure_5 = tmp22;
          if (0 === c6) {
            c8 = 3;
            throw tmp22;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _deleteVideoFilterAsset() {
  obj = _asyncToGenerator(async (videoFilterAsset) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              id = undefined;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c3 = 1;
              c4 = 1;
              const obj4 = { url: Endpoints.VIDEO_FILTER_ASSET(videoFilterAsset.id), rejectWithError: false };
              const obj5 = { value: del(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            const obj7 = closure_130_0(closure_130_2[7]);
            id = obj7.getLastUsedVideoBackgroundOption(closure_130_5.getCurrentUser());
            const obj8 = closure_130_0(closure_130_2[8]);
            const result = obj8.isCustomBackgroundOption(id) && id.id === videoFilterAsset.id;
            if (result) {
              closure_130_10(null);
            }
            const obj9 = { type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS", videoFilterAsset };
            obj = closure_130_1(closure_130_2[5]);
            obj.dispatch(obj9);
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          c4 = 3;
          throw tmp19;
        }
      }
    })();
  });
  return obj(...arguments);
};
function saveLastUsedBackgroundOption() {
  return obj(...arguments);
}
obj = function _saveLastUsedBackgroundOption() {
  obj = _asyncToGenerator(async (videoBackground) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              videoBackground = undefined;
              const obj5 = { videoBackground };
              const obj10 = UserSettingsActionCreatorsDefault;
              const result = obj10.updatedUnsyncedSettings(obj5);
              const obj12 = VideoBackgroundUtils;
              if (obj12.isCustomBackgroundOption(videoBackground)) {
                const HTTP = HTTPUtils.HTTP;
                const post = HTTP.post;
                c3 = 1;
                c4 = 1;
                const obj6 = { url: Endpoints.VIDEO_FILTER_ASSET_LAST_USED(videoBackground.id), rejectWithError: false };
                const obj7 = { value: post(obj6), done: false };
                return obj7;
              } else {
                const obj8 = { type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: videoBackground };
                const obj4 = DispatcherDefault;
                obj4.dispatch(obj8);
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            videoBackground = value;
            const obj11 = { type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: videoBackground.body };
            obj = closure_130_1(closure_130_2[5]);
            obj.dispatch(obj11);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp16) {
          c4 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/video_backgrounds/VideoBackgroundActionCreators.tsx");

export const fetchVideoFilterAssets = function fetchVideoFilterAssets() {
  return obj(...arguments);
};
export const uploadVideoFilterAsset = function uploadVideoFilterAsset() {
  return obj(...arguments);
};
export const deleteVideoFilterAsset = function deleteVideoFilterAsset() {
  return obj(...arguments);
};
export { saveLastUsedBackgroundOption };
export const applyMediaFilterSettings = function applyMediaFilterSettings(settings) {
  if (MediaEngineStore.isSupported()) {
    const obj2 = { type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS", settings };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
export const startApplyMediaFilterSettings = function startApplyMediaFilterSettings() {
  if (MediaEngineStore.isSupported()) {
    obj = DispatcherDefault;
    obj.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START" });
  }
};
export const errorApplyingMediaFilterSettings = function errorApplyingMediaFilterSettings() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR" });
};