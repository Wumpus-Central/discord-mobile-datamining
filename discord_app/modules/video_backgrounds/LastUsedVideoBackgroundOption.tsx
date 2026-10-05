// discord_app/modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import VideoBackgroundUtils from "VideoBackgroundUtils.tsx";
import react from "../../../_runtime/00019_react.js";
import UnsyncedUserSettingsStore from "../user_settings/UnsyncedUserSettingsStore.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let settings;
      let tmp12;
      let tmp13;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let videoBackground;
      const obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UnsyncedUserSettingsStore];
        const fn = function u() {
          return videoBackground.videoBackground;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserSettingsProtoStore];
        const fn2 = function v() {
          return settings.settings;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult5 = get_initialized;
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [UserStore];
        const fn3 = function k() {
          return currentUser.getCurrentUser();
        };
        cResult[4] = items2;
        cResult[5] = fn3;
        tmp13 = fn3;
        tmp12 = items2;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      const tmpResult6 = get_initialized;
      const stateFromStores2 = tmpResult6.useStateFromStores(tmp12, tmp13);
      let tmp16 = null;
      if (null != stateFromStores2) {
        let tmp19;
        if (cResult[6] === stateFromStores) {
          let tmp17;
          if (cResult[7] === stateFromStores2) {
            tmp17 = cResult[8];
          }
          tmp16 = tmp17;
        }
        const tmpResult7 = VideoBackgroundUtils;
        if (!tmpResult7.isCustomBackgroundOption(stateFromStores)) {
          let tmp20;
          if (typeof stateFromStores !== "number") {
            tmp20 = stateFromStores;
          } else {
            VideoBackgroundUtils;
            tmp20 = null;
          }
          tmp19 = tmp20;
        } else {
          PremiumUtilsDefault;
          tmp19 = null;
        }
        cResult[6] = stateFromStores;
        cResult[7] = stateFromStores2;
        cResult[8] = tmp19;
        tmp17 = tmp19;
      }
      return tmp16;
    }
  : () => {
      let currentUser;
      let settings;
      let stateFromStores;
      let videoBackground;
      let obj = stateFromStores(504);
      const items = [UnsyncedUserSettingsStore];
      stateFromStores = obj.useStateFromStores(items, () => videoBackground.videoBackground);
      const items1 = [UserSettingsProtoStore];
      const obj2 = stateFromStores(504);
      const stateFromStores1 = obj2.useStateFromStores(items1, () => settings.settings);
      const items2 = [UserStore];
      const obj3 = stateFromStores(504);
      const stateFromStores2 = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser());
      const voiceAndVideo = stateFromStores1.voiceAndVideo;
      let prop;
      if (voiceAndVideo != null) {
        prop = voiceAndVideo.videoBackgroundFilterDesktop;
      }
      const items3 = [prop, stateFromStores2, stateFromStores];
      return react.useMemo(() => {
        let tmp2 = null;
        if (null != stateFromStores2) {
          let tmp7;
          const obj = VideoBackgroundUtils;
          if (!obj.isCustomBackgroundOption(stateFromStores)) {
            let tmp8;
            if (typeof stateFromStores !== "number") {
              tmp8 = stateFromStores;
            } else {
              VideoBackgroundUtils;
              tmp8 = null;
            }
            tmp7 = tmp8;
          } else {
            PremiumUtilsDefault;
            tmp7 = null;
          }
          tmp2 = tmp7;
        }
        return tmp2;
      }, items3);
    };
const result = size.fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

export const getLastUsedVideoBackgroundOption = function getLastUsedVideoBackgroundOption(currentUser) {
  let tmp5;
  const videoBackground = UnsyncedUserSettingsStore.videoBackground;
  const obj = VideoBackgroundUtils;
  if (!obj.isCustomBackgroundOption(videoBackground)) {
    let tmp6;
    if (typeof videoBackground !== "number") {
      tmp6 = videoBackground;
    } else {
      VideoBackgroundUtils;
      tmp6 = null;
    }
    tmp5 = tmp6;
  } else {
    PremiumUtilsDefault;
    tmp5 = null;
  }
  return tmp5;
};
export const useLastUsedVideoBackgroundOption = tmp2;
