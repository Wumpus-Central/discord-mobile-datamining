// discord_app/modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx
import c from "../../../_runtime/00576_c.js";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UnsyncedUserSettingsStore from "../user_settings/UnsyncedUserSettingsStore.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const initialize = obj(504);
const VideoBackgroundUtils = obj(9317);
require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/video_backgrounds/LastUsedVideoBackgroundOption.tsx");

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
export const useLastUsedVideoBackgroundOption = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let obj = require;
      let result = dependencyMap;
      const cResult = c.c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UnsyncedUserSettingsStore];
        const fn = function u() {
          return videoBackground.videoBackground;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp3 = items;
        tmp4 = fn;
      } else {
        [tmp3, tmp4] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserSettingsProtoStore];
        const fn2 = function v() {
          return settings.settings;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp8 = fn2;
        let tmp7 = items1;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const objResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [UserStore];
        const fn3 = function k() {
          return currentUser.getCurrentUser();
        };
        cResult[4] = items2;
        cResult[5] = fn3;
        let tmp12 = fn3;
        let tmp11 = items2;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const objResult4 = initialize;
      const stateFromStores2 = initialize.useStateFromStores(tmp11, tmp12);
      if (null == stateFromStores2) {
        return null;
      } else {
        if (cResult[6] === stateFromStores) {
        }
        if (!objResult6.isCustomBackgroundOption(stateFromStores)) {
          if (typeof stateFromStores !== "number") {
            let tmp18 = stateFromStores;
          } else {
            obj = VideoBackgroundUtils;
            result = obj.isDefaultBackgroundOption(stateFromStores);
            tmp18 = null;
          }
          let tmp17 = tmp18;
        } else {
          PremiumUtilsDefault;
          tmp17 = null;
        }
        cResult[6] = stateFromStores;
        cResult[7] = stateFromStores2;
        cResult[8] = tmp17;
        objResult6 = VideoBackgroundUtils;
      }
      const objResult5 = initialize;
    }
  : () => {
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
