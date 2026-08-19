// discord_app/modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx
import getPremiumPlanItemDefault from "../../utils/PremiumUtils.tsx";
import isAnimatedBackgroundOption from "VideoBackgroundUtils.tsx";
import noop from "../../../_runtime/00019_noop.js";
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

export const getLastUsedVideoBackgroundOption = function getLastUsedVideoBackgroundOption(currentUser) {
  const voiceAndVideo = settings.settings.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const videoBackgroundOptionFromProto = isAnimatedBackgroundOption.getVideoBackgroundOptionFromProto(prop, currentUser.id);
  if (!obj2.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
    if (typeof videoBackgroundOptionFromProto !== "number") {
      let tmp7 = videoBackgroundOptionFromProto;
    } else {
      isAnimatedBackgroundOption;
      tmp7 = null;
    }
    let tmp6 = tmp7;
  } else {
    getPremiumPlanItemDefault;
    tmp6 = null;
  }
  return tmp6;
};
export const useLastUsedVideoBackgroundOption = function useLastUsedVideoBackgroundOption() {
  const items = [closure_4];
  const stateFromStores = stateFromStores1(589).useStateFromStores(items, () => settings.settings);
  let obj = stateFromStores1(589);
  const items1 = [closure_5];
  stateFromStores1 = stateFromStores1(589).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const voiceAndVideo = stateFromStores.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const items2 = [prop, stateFromStores1];
  return React.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      const videoBackgroundOptionFromProto = stateFromStores1(dependencyMap[3]).getVideoBackgroundOptionFromProto(prop, stateFromStores1.id);
      const obj = stateFromStores1(dependencyMap[3]);
      if (!obj2.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
        if (typeof videoBackgroundOptionFromProto !== "number") {
          let tmp9 = videoBackgroundOptionFromProto;
        } else {
          stateFromStores1(dependencyMap[3]);
          tmp9 = null;
        }
        let tmp8 = tmp9;
      } else {
        prop(dependencyMap[4]);
        tmp8 = null;
      }
      tmp2 = tmp8;
      obj2 = stateFromStores1(dependencyMap[3]);
    }
    return tmp2;
  }, items2);
};