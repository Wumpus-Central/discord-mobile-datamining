// discord_app/modules/video_backgrounds/VideoBackgroundStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import VideoBackgroundUtils from "VideoBackgroundUtils.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function handleSyncedStoresUpdate() {
  if (voiceChannelId !== SelectedChannelStore.getVoiceChannelId()) {
    c8 = false;
    c10 = false;
    c11 = false;
  }
  const currentUser = UserStore.getCurrentUser();
  let flag2 = false;
  if (null != currentUser) {
    const voiceAndVideo = UserSettingsProtoStore.settings.voiceAndVideo;
    let prop;
    if (voiceAndVideo != null) {
      prop = voiceAndVideo.videoBackgroundFilterDesktop;
    }
    const videoBackgroundOptionFromProto = VideoBackgroundUtils.getVideoBackgroundOptionFromProto(prop, currentUser.id);
    let isVideoEnabledResult = null != SelectedChannelStore.getVoiceChannelId();
    if (isVideoEnabledResult) {
      isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
    }
    if (isVideoEnabledResult) {
      isVideoEnabledResult = null != videoBackgroundOptionFromProto;
    }
    flag2 = isVideoEnabledResult;
  }
  if (flag2) {
    c8 = true;
  }
  voiceChannelId = SelectedChannelStore.getVoiceChannelId();
}
let c6 = false;
let c7 = null;
let c8 = false;
let closure_9 = {};
let c10 = false;
let c11 = false;
const Store = initializeDefault.Store;
class VideoBackgroundStore extends Store {}
const prototype = VideoBackgroundStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(MediaEngineStore, SelectedChannelStore, UserSettingsProtoStore, UserStore);
  const items = [SelectedChannelStore, MediaEngineStore];
  this.syncWith(items, handleSyncedStoresUpdate);
};
Object.defineProperty(prototype, "videoFilterAssets", {
  get: function videoFilterAssets() {
    return closure_9;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasBeenApplied", {
  get: function hasBeenApplied() {
    return c6;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasUsedBackgroundInCall", {
  get: function hasUsedBackgroundInCall() {
    return c8;
  },
  set: undefined,
});
Object.defineProperty(prototype, "videoBackgroundUnavailable", {
  get: function videoBackgroundUnavailable() {
    return c10;
  },
  set: undefined,
});
Object.defineProperty(prototype, "videoBackgroundPreviewUnavailable", {
  get: function videoBackgroundPreviewUnavailable() {
    return c11;
  },
  set: undefined,
});
VideoBackgroundStore.displayName = "VideoBackgroundStore";
const videoBackgroundStore = new VideoBackgroundStore(DispatcherDefault, {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function handleVideoFilterAssetFetchSuccess(assets) {
    assets = assets.assets;
    const obj = {};
    const item = assets.forEach((id) => {
      obj[id.id] = id;
      return id;
    });
    closure_9 = obj;
  },
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function handleAddBackground(videoFilterAsset) {
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const obj = {};
    const merged = Object.assign(closure_9);
    obj[videoFilterAsset.id] = videoFilterAsset;
    closure_9 = obj;
  },
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: function handleRemoveBackground(videoFilterAsset) {
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const merged = Object.assign(closure_9);
    closure_9 = {};
    delete tmp2[tmp];
  },
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function handleSaveLastUsedBackgroundOption(backgroundOption) {
    backgroundOption = backgroundOption.backgroundOption;
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (backgroundOption == null) {
        const voiceAndVideo = UserSettingsProtoStore.settings.voiceAndVideo;
        let prop;
        if (voiceAndVideo != null) {
          prop = voiceAndVideo.videoBackgroundFilterDesktop;
        }
        backgroundOption = VideoBackgroundUtils.getVideoBackgroundOptionFromProto(prop, currentUser.id);
      }
      let isVideoEnabledResult = null != SelectedChannelStore.getVoiceChannelId();
      if (isVideoEnabledResult) {
        isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/VideoBackgroundStore.tsx");

export default videoBackgroundStore;
