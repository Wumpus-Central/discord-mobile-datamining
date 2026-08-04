// discord_app/modules/video_backgrounds/VideoBackgroundStore.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Store } from "initialize";

const require = arg1;
function handleSyncedStoresUpdate() {
  if (voiceChannelId !== store.getVoiceChannelId()) {
    let c8 = false;
    let c10 = false;
    let c11 = false;
  }
  const currentUser = authStore.getCurrentUser();
  let flag2 = false;
  if (null != currentUser) {
    const voiceAndVideo = handleConnectionClosedOrResumed.settings.voiceAndVideo;
    let prop;
    if (voiceAndVideo != null) {
      prop = voiceAndVideo.videoBackgroundFilterDesktop;
    }
    const videoBackgroundOptionFromProto = require(8854) /* isAnimatedBackgroundOption */.getVideoBackgroundOptionFromProto(prop, currentUser.id);
    let isVideoEnabledResult = null != obj.getVoiceChannelId();
    if (isVideoEnabledResult) {
      isVideoEnabledResult = _detectH265HardwareDecode.isVideoEnabled();
    }
    if (isVideoEnabledResult) {
      isVideoEnabledResult = null != videoBackgroundOptionFromProto;
    }
    flag2 = isVideoEnabledResult;
    const obj2 = require(8854) /* isAnimatedBackgroundOption */;
  }
  if (flag2) {
    c8 = true;
  }
  voiceChannelId = obj.getVoiceChannelId();
}
let c6 = false;
let c7 = null;
let c8 = false;
let closure_9 = {};
let c10 = false;
let c11 = false;
class VideoBackgroundStore extends Store {
}
const prototype = VideoBackgroundStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(_detectH265HardwareDecode, handleConnectionOpen, handleConnectionClosedOrResumed, mergeGuildAvatar);
  const items = [handleConnectionOpen, _detectH265HardwareDecode];
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
const videoBackgroundStore = new VideoBackgroundStore(require("dispatcher"), {
  VIDEO_FILTER_ASSETS_FETCH_SUCCESS: function handleVideoFilterAssetFetchSuccess(assets) {
    assets = assets.assets;
    const obj = {};
    const item = assets.forEach((id) => {
      obj[id.id] = id;
      return id;
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
        const voiceAndVideo = handleConnectionClosedOrResumed.settings.voiceAndVideo;
        let prop;
        if (voiceAndVideo != null) {
          prop = voiceAndVideo.videoBackgroundFilterDesktop;
        }
        backgroundOption = require(8854) /* isAnimatedBackgroundOption */.getVideoBackgroundOptionFromProto(prop, currentUser.id);
        const obj = require(8854) /* isAnimatedBackgroundOption */;
      }
      let isVideoEnabledResult = null != store.getVoiceChannelId();
      if (isVideoEnabledResult) {
        isVideoEnabledResult = _detectH265HardwareDecode.isVideoEnabled();
      }
      if (isVideoEnabledResult) {
        isVideoEnabledResult = null != backgroundOption;
      }
      flag = isVideoEnabledResult;
    }
    if (flag) {
      let c8 = true;
    }
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function handleApplyMediaFilterSettings(settings) {
    settings = settings.settings;
    if (require(4290) /* BaseConnectionEvent */.FilterSettingsKey.CAMERA_BACKGROUND_LIVE in settings) {
      let c6 = true;
      let c10 = false;
    }
    if (require(4290) /* BaseConnectionEvent */.FilterSettingsKey.CAMERA_BACKGROUND_PREVIEW in settings) {
      let c11 = false;
    }
  },
  MEDIA_ENGINE_VIDEO_FILTER_ERROR: function handleVideoFilterError(target) {
    if ("live" === target.target) {
      let c10 = true;
    } else {
      let c11 = true;
    }
  },
  LOGOUT: function handleLogout() {
    let c6 = false;
    let c8 = false;
    let c7 = null;
    let closure_9 = {};
    let c10 = false;
    let c11 = false;
  }
});
const result = require("handleConnectionOpen").fileFinishedImporting("modules/video_backgrounds/VideoBackgroundStore.tsx");

export default videoBackgroundStore;