// === Module 9100: LastUsedVideoBackgroundOption ===

// Module 9100 (LastUsedVideoBackgroundOption)
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import VideoBackgroundUtils from "VideoBackgroundUtils" /* 9097 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

export const getLastUsedVideoBackgroundOption = function getLastUsedVideoBackgroundOption(currentUser) {
  const voiceAndVideo = UserSettingsProtoStore.settings.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const videoBackgroundOptionFromProto = VideoBackgroundUtils.getVideoBackgroundOptionFromProto(prop, currentUser.id);
  if (!obj2.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
    if (typeof videoBackgroundOptionFromProto !== "number") {
      let tmp7 = videoBackgroundOptionFromProto;
    } else {
      tmp7 = null;
      const tmp2Result = VideoBackgroundUtils;
    }
    let tmp6 = tmp7;
  } else {
    tmp6 = null;
  }
  return tmp6;
};
export const useLastUsedVideoBackgroundOption = function useLastUsedVideoBackgroundOption() {
  const items = [UserSettingsProtoStore];
  const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => settings.settings);
  let obj = stateFromStores1(504);
  const items1 = [UserStore];
  stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const voiceAndVideo = stateFromStores.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const items2 = [prop, stateFromStores1];
  return noop.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      const videoBackgroundOptionFromProto = VideoBackgroundUtils.getVideoBackgroundOptionFromProto(prop, tmp.id);
      const tmp4 = require;
      if (!obj2.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
        if (typeof videoBackgroundOptionFromProto !== "number") {
          let tmp9 = videoBackgroundOptionFromProto;
        } else {
          tmp9 = null;
          const tmp4Result = tmp4(9097);
        }
        let tmp8 = tmp9;
      } else {
        tmp8 = null;
      }
      tmp2 = tmp8;
      obj2 = VideoBackgroundUtils;
    }
    return tmp2;
  }, items2);
};