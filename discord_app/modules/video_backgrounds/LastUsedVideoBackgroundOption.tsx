// === Module 9114: LastUsedVideoBackgroundOption ===

// Module 9114 (LastUsedVideoBackgroundOption)
import PremiumUtilsDefault from "PremiumUtils" /* 4488 */;
import VideoBackgroundUtils from "VideoBackgroundUtils" /* 9115 */;
import noop from "module_19" /* 19 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1184 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

export const getLastUsedVideoBackgroundOption = function getLastUsedVideoBackgroundOption(currentUser) {
  const videoBackground = UnsyncedUserSettingsStore.videoBackground;
  if (!obj.isCustomBackgroundOption(videoBackground)) {
    if (typeof videoBackground !== "number") {
      let tmp6 = videoBackground;
    } else {
      VideoBackgroundUtils;
      tmp6 = null;
    }
    let tmp5 = tmp6;
  } else {
    PremiumUtilsDefault;
    tmp5 = null;
  }
  return tmp5;
};
export const useLastUsedVideoBackgroundOption = function useLastUsedVideoBackgroundOption() {
  const items = [UnsyncedUserSettingsStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => videoBackground.videoBackground);
  let obj = stateFromStores(504);
  const items1 = [UserSettingsProtoStore];
  const stateFromStores1 = stateFromStores(504).useStateFromStores(items1, () => settings.settings);
  const obj2 = stateFromStores(504);
  const items2 = [UserStore];
  const stateFromStores2 = stateFromStores(504).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const voiceAndVideo = stateFromStores1.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const items3 = [prop, stateFromStores2, stateFromStores];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores2) {
      if (!obj.isCustomBackgroundOption(stateFromStores)) {
        if (typeof stateFromStores !== "number") {
          let tmp8 = stateFromStores;
        } else {
          VideoBackgroundUtils;
          tmp8 = null;
        }
        let tmp7 = tmp8;
      } else {
        PremiumUtilsDefault;
        tmp7 = null;
      }
      tmp2 = tmp7;
      obj = VideoBackgroundUtils;
    }
    return tmp2;
  }, items3);
};