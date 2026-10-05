// discord_app/modules/video_backgrounds/VideoBackgroundStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import UnsyncedUserSettingsStore from "../user_settings/UnsyncedUserSettingsStore.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleSyncedStoresUpdate() {
  let voiceChannelId;
  if (voiceChannelId !== SelectedChannelStore.getVoiceChannelId()) {
    c9 = false;
    c12 = false;
    c13 = false;
  }
  let flag2 = false;
  if (null != UserStore.getCurrentUser()) {
    const videoBackground = UnsyncedUserSettingsStore.videoBackground;
    flag2 =
      null != SelectedChannelStore.getVoiceChannelId() && MediaEngineStore.isVideoEnabled() && null != videoBackground;
    const isVideoEnabledResult =
      null != SelectedChannelStore.getVoiceChannelId() && MediaEngineStore.isVideoEnabled() && null != videoBackground;
  }
  if (flag2) {
    c9 = true;
  }
  voiceChannelId = SelectedChannelStore.getVoiceChannelId();
}
let c7 = false;
let c8 = null;
let c9 = false;
let c10 = false;
let closure_11 = {};
let c12 = false;
let c13 = false;
const Store = get_initializedDefault.Store;
class VideoBackgroundStore extends Store {
  initialize() {
    this.waitFor(MediaEngineStore, SelectedChannelStore, UnsyncedUserSettingsStore, UserSettingsProtoStore, UserStore);
    const items = [SelectedChannelStore, MediaEngineStore];
    this.syncWith(items, handleSyncedStoresUpdate);
  }
}
const prototype = VideoBackgroundStore.prototype;
Object.defineProperty(prototype, "videoFilterAssets", {
  get: function videoFilterAssets() {
    return closure_11;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasBeenApplied", {
  get: function hasBeenApplied() {
    return c7;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasUsedBackgroundInCall", {
  get: function hasUsedBackgroundInCall() {
    return c9;
  },
  set: undefined,
});
Object.defineProperty(prototype, "liveBackgroundEnabled", {
  get: function liveBackgroundEnabled() {
    return c10;
  },
  set: undefined,
});
Object.defineProperty(prototype, "videoBackgroundUnavailable", {
  get: function videoBackgroundUnavailable() {
    return c12;
  },
  set: undefined,
});
Object.defineProperty(prototype, "videoBackgroundPreviewUnavailable", {
  get: function videoBackgroundPreviewUnavailable() {
    return c13;
  },
  set: undefined,
});
VideoBackgroundStore.displayName = "VideoBackgroundStore";
let obj = {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function handleVideoFilterAssetFetchSuccess(assets) {
    assets = assets.assets;
    const obj = {};
    const item = assets.forEach((id) => {
      obj[id.id] = id;
      return id;
    });
    closure_11 = obj;
  },
  VIDEO_FILTER_ASSET_UPLOAD_SUCCESS: function handleAddBackground(videoFilterAsset) {
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const obj = {};
    const merged = Object.assign(closure_11);
    obj[videoFilterAsset.id] = videoFilterAsset;
    closure_11 = obj;
  },
  VIDEO_FILTER_ASSET_DELETE_SUCCESS: function handleRemoveBackground(videoFilterAsset) {
    const obj = {};
    videoFilterAsset = videoFilterAsset.videoFilterAsset;
    const merged = Object.assign(closure_11);
    closure_11 = obj;
    delete obj[videoFilterAsset.id];
  },
  VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION: function handleSaveLastUsedBackgroundOption(backgroundOption) {
    let videoBackground = backgroundOption.backgroundOption;
    let flag = false;
    if (null != UserStore.getCurrentUser()) {
      if (null == videoBackground) {
        videoBackground = UnsyncedUserSettingsStore.videoBackground;
      }
      flag =
        null != SelectedChannelStore.getVoiceChannelId() &&
        MediaEngineStore.isVideoEnabled() &&
        null != videoBackground;
      const isVideoEnabledResult =
        null != SelectedChannelStore.getVoiceChannelId() &&
        MediaEngineStore.isVideoEnabled() &&
        null != videoBackground;
    }
    if (flag) {
      c9 = true;
    }
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function handleApplyMediaFilterSettings(settings) {
    settings = settings.settings;
    if (BaseConnectionEvent.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in settings) {
      c7 = true;
      c12 = false;
      const tmp3 = settings[BaseConnectionEvent.FilterSettingsKey.CAMERA_BACKGROUND_LIVE];
      let graph;
      if (tmp3 != null) {
        graph = tmp3.graph;
      }
      c10 = graph !== BaseConnectionEvent.FilterSettingsGraph.NONE;
    }
    if (BaseConnectionEvent.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW in settings) {
      c13 = false;
    }
  },
  MEDIA_ENGINE_VIDEO_FILTER_ERROR: function handleVideoFilterError(target) {
    if ("live" === target.target) {
      c12 = true;
      c10 = false;
    } else {
      c13 = true;
    }
  },
  LOGOUT: function handleLogout() {
    c7 = false;
    c9 = false;
    c8 = null;
    closure_11 = {};
    c12 = false;
    c13 = false;
    c10 = false;
  },
};
const videoBackgroundStore = new VideoBackgroundStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/video_backgrounds/VideoBackgroundStore.tsx");

export default videoBackgroundStore;
