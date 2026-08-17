// discord_app/modules/media_engine/VideoGuardBannerStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

let closure_0 = { hasShownBanner: false };
const PersistedStore = initializeDefault.PersistedStore;
class VideoGuardBannerStore extends PersistedStore {
}
const prototype = VideoGuardBannerStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_0 = arg0;
  }
};
prototype["hasShownBanner"] = function hasShownBanner() {
  return hasShownBanner.hasShownBanner;
};
prototype["getState"] = function getState() {
  return closure_0;
};
VideoGuardBannerStore.displayName = "VideoGuardBannerStore";
VideoGuardBannerStore.persistKey = "VideoGuardBanner";
const videoGuardBannerStore = new VideoGuardBannerStore(dispatcherDefault, {
  VIDEO_GUARD_BANNER_SHOWN: function handleBannerShown() {
    const obj = {};
    const merged = Object.assign(obj);
    obj.hasShownBanner = true;
  }
});
const result = require("set").fileFinishedImporting("modules/media_engine/VideoGuardBannerStore.tsx");

export default videoGuardBannerStore;