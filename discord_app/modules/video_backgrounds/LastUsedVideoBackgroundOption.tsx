// === Module 9817: getLastUsedVideoBackgroundOption ===

// Module 9817 (getLastUsedVideoBackgroundOption)
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4139 */;
import isAnimatedBackgroundOption from "isAnimatedBackgroundOption" /* 9814 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleConnectionClosedOrResumed" /* 1339 */;
import closure_5 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

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
      const tmp2Result = isAnimatedBackgroundOption;
    }
    let tmp6 = tmp7;
  } else {
    tmp6 = null;
    const obj3 = getPremiumPlanItemDefault;
  }
  return tmp6;
};
export const useLastUsedVideoBackgroundOption = function useLastUsedVideoBackgroundOption() {
  const items = [closure_4];
  const stateFromStores = stateFromStores1(586).useStateFromStores(items, () => settings.settings);
  let obj = stateFromStores1(586);
  const items1 = [closure_5];
  stateFromStores1 = stateFromStores1(586).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const voiceAndVideo = stateFromStores.voiceAndVideo;
  let prop;
  if (voiceAndVideo != null) {
    prop = voiceAndVideo.videoBackgroundFilterDesktop;
  }
  const items2 = [prop, stateFromStores1];
  return React.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores1) {
      const videoBackgroundOptionFromProto = stateFromStores1(closure_1_2[3]).getVideoBackgroundOptionFromProto(prop, tmp.id);
      const obj = stateFromStores1(closure_1_2[3]);
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
      obj2 = stateFromStores1(closure_1_2[3]);
    }
    return tmp2;
  }, items2);
};