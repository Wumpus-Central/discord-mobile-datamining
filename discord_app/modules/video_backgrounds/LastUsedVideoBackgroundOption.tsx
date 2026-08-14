// discord_app/modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx
import noop from "noop";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import mergeGuildAvatar from "mergeGuildAvatar";
import { getPremiumPlanItem } from "../../utils/PremiumUtils.tsx";
import { isAnimatedBackgroundOption } from "VideoBackgroundUtils.tsx";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

export const getLastUsedVideoBackgroundOption = function getLastUsedVideoBackgroundOption(currentUser) {
  const voiceAndVideo = settings.settings.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const videoBackgroundOptionFromProto = isAnimatedBackgroundOption.getVideoBackgroundOptionFromProto(prop, currentUser.id);
  const obj = isAnimatedBackgroundOption;
  const tmp2 = require;
  if (!obj2.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
    if (typeof videoBackgroundOptionFromProto !== "number") {
      let tmp7 = videoBackgroundOptionFromProto;
    } else {
      tmp7 = null;
      const tmp2Result = tmp2(9226);
    }
    let tmp6 = tmp7;
  } else {
    tmp6 = null;
    const obj3 = getPremiumPlanItem;
  }
  return tmp6;
};
export const useLastUsedVideoBackgroundOption = function useLastUsedVideoBackgroundOption() {
  const items = [handleConnectionClosedOrResumed];
  const stateFromStores = stateFromStores1(589).useStateFromStores(items, () => settings.settings);
  let obj = stateFromStores1(589);
  const items1 = [mergeGuildAvatar];
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
      const videoBackgroundOptionFromProto = stateFromStores1(outer1_2[3]).getVideoBackgroundOptionFromProto(prop, tmp.id);
      const obj = stateFromStores1(outer1_2[3]);
      const tmp4 = stateFromStores1;
      if (!obj2.isCustomBackgroundOption(videoBackgroundOptionFromProto)) {
        if (typeof videoBackgroundOptionFromProto !== "number") {
          let tmp9 = videoBackgroundOptionFromProto;
        } else {
          tmp9 = null;
          const tmp4Result = tmp4(tmp5[3]);
        }
        let tmp8 = tmp9;
      } else {
        tmp8 = null;
        const obj3 = prop(tmp5[4]);
      }
      tmp2 = tmp8;
      obj2 = stateFromStores1(outer1_2[3]);
    }
    return tmp2;
  }, items2);
};