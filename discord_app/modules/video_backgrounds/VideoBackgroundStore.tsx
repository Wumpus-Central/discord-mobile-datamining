// discord_app/modules/video_backgrounds/VideoBackgroundStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import isAnimatedBackgroundOption from "VideoBackgroundUtils.tsx";
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import _detectH265HardwareDecode from "../../stores/MediaEngineStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

require = fn;
function handleSyncedStoresUpdate() {
  if (voiceChannelId !== store.getVoiceChannelId()) {
    c8 = false;
    c10 = false;
    c11 = false;
  }
  const currentUser = authStore.getCurrentUser();
  let flag2 = false;
  if (null != currentUser) {
    const voiceAndVideo = closure_2.settings.voiceAndVideo;
    let prop;
    if (voiceAndVideo != null) {
      prop = voiceAndVideo.videoBackgroundFilterDesktop;
    }
    const videoBackgroundOptionFromProto = isAnimatedBackgroundOption.getVideoBackgroundOptionFromProto(prop, currentUser.id);
    let isVideoEnabledResult = null != store.getVoiceChannelId();
    if (isVideoEnabledResult) {
      isVideoEnabledResult = closure_3.isVideoEnabled();
    }
    if (isVideoEnabledResult) {
      isVideoEnabledResult = null != videoBackgroundOptionFromProto;
    }
    flag2 = isVideoEnabledResult;
  }
  if (flag2) {
    c8 = true;
  }
  voiceChannelId = store.getVoiceChannelId();
}
let c6 = false;
let c7 = null;
let c8 = false;
let closure_9 = {};
let c10 = false;
let c11 = false;
const Store = initializeDefault.Store;
class VideoBackgroundStore extends Store {
}
const prototype = VideoBackgroundStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4, closure_2, closure_5);
  const items = [closure_4, closure_3];
  this.syncWith(items, handleSyncedStoresUpdate);
};
Object.defineProperty(prototype, "videoFilterAssets", {
  get: function videoFilterAssets() {
    return closure_9;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasBeenApplied", {
  get: function hasBeenApplied() {
    return c6;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasUsedBackgroundInCall", {
  get: function hasUsedBackgroundInCall() {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoBackgroundUnavailable", {
  get: function videoBackgroundUnavailable() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "videoBackgroundPreviewUnavailable", {
  get: function videoBackgroundPreviewUnavailable() {
    return c11;
  },
  set: undefined
});
VideoBackgroundStore.displayName = "VideoBackgroundStore";
const videoBackgroundStore = new VideoBackgroundStore(dispatcherDefault, {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function handleVideoFilterAssetFetchSuccess(assets) {
    assets = assets.assets;
    const item = assets.forEach((item, index) => {
      obj[item.id] = item;
      return item;
    });
  },
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function handleAddBackground(videoFilterAsset) {
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const obj = {};
    const merged = Object.assign(obj);
    obj[videoFilterAsset.id] = videoFilterAsset;
  },
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: function handleRemoveBackground(videoFilterAsset) {
    const obj = {};
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const merged = Object.assign(obj);
    delete tmp2[tmp];
  },
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function handleSaveLastUsedBackgroundOption(backgroundOption) {
    backgroundOption = backgroundOption.backgroundOption;
    const currentUser = authStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (backgroundOption == null) {
        const voiceAndVideo = closure_2.settings.voiceAndVideo;
        let prop;
        if (voiceAndVideo != null) {
          prop = voiceAndVideo.videoBackgroundFilterDesktop;
        }
        backgroundOption = isAnimatedBackgroundOption.getVideoBackgroundOptionFromProto(prop, currentUser.id);
      }
      let isVideoEnabledResult = null != store.getVoiceChannelId();
      if (isVideoEnabledResult) {
        isVideoEnabledResult = closure_3.isVideoEnabled();
      }
      if (isVideoEnabledResult) {
        isVideoEnabledResult = null != backgroundOption;
      }
      flag = isVideoEnabledResult;
    }
    if (flag) {
      c8 = true;
    }
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function handleApplyMediaFilterSettings(settings) {
    settings = settings.settings;
    if (BaseConnectionEvent.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in settings) {
      c6 = true;
      c10 = false;
    }
    if (BaseConnectionEvent.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW in settings) {
      c11 = false;
    }
  },
  MEDIA_ENGINE_VIDEO_FILTER_ERROR: function handleVideoFilterError(target) {
    if ("live" === target.target) {
      c10 = true;
    } else {
      c11 = true;
    }
  },
  LOGOUT: function handleLogout() {
    c6 = false;
    c8 = false;
    c7 = null;
    closure_9 = {};
    c10 = false;
    c11 = false;
  }
});
const result = require("obj132").fileFinishedImporting("modules/video_backgrounds/VideoBackgroundStore.tsx");

export default videoBackgroundStore;