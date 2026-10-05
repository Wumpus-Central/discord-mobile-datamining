// discord_app/modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let set;

function getJoinFromSupportedPlatformsIconKeys(isGameLaunchable) {
  let currentPlatform;
  let platforms;
  let tmp15;
  ({ platforms, currentPlatform } = isGameLaunchable);
  isGameLaunchable = isGameLaunchable.isGameLaunchable;
  set = new Set(platforms);
  if (null != platforms) {
    if (0 !== platforms.length) {
      if (null != currentPlatform) {
        if (set.has(currentPlatform)) {
          return tmp15;
        }
      }
      const items = [];
      if (set.has(ActivityGamePlatforms.ANDROID)) {
        if (set.has(ActivityGamePlatforms.IOS)) {
          items.push(obj.MOBILE);
        }
        const tmp8 = set.has(ActivityGamePlatforms.PS4) || set.has(ActivityGamePlatforms.PS5);
        if (tmp8) {
          items.push(obj.PLAYSTATION);
        }
        if (set.has(ActivityGamePlatforms.XBOX)) {
          items.push(obj.XBOX);
        }
        if (set.has(ActivityGamePlatforms.DESKTOP)) {
          items.push(obj.DESKTOP);
        }
        tmp15 = items;
        if (set.has(ActivityGamePlatforms.META_QUEST)) {
          items.push(obj.VR);
          tmp15 = items;
        }
      }
      if (set.has(ActivityGamePlatforms.ANDROID)) {
        items.push(obj.ANDROID);
      } else if (set.has(ActivityGamePlatforms.IOS)) {
        items.push(obj.IOS);
      }
    }
  }
  tmp15 = closure_5;
}
const ActivityGamePlatforms = Constants.ActivityGamePlatforms;
const IconKey = {
  DESKTOP: "desktop",
  MOBILE: "mobile",
  ANDROID: "android",
  IOS: "ios",
  PLAYSTATION: "playstation",
  XBOX: "xbox",
  VR: "vr",
};
let closure_5 = [];
const obj2 = {
  [ActivityGamePlatforms.DESKTOP]: IconKey.DESKTOP,
  [ActivityGamePlatforms.ANDROID]: IconKey.ANDROID,
  [ActivityGamePlatforms.IOS]: IconKey.IOS,
  [ActivityGamePlatforms.XBOX]: IconKey.XBOX,
  [ActivityGamePlatforms.PS4]: IconKey.PLAYSTATION,
  [ActivityGamePlatforms.PS5]: IconKey.PLAYSTATION,
  [ActivityGamePlatforms.SAMSUNG]: null,
  [ActivityGamePlatforms.EMBEDDED]: null,
  [ActivityGamePlatforms.META_QUEST]: IconKey.VR,
};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let currentPlatform;
      let isGameLaunchable;
      let platforms;
      const obj = react2;
      const cResult = obj.c(4);
      ({ platforms, currentPlatform, isGameLaunchable } = arg0);
      if (cResult[0] === currentPlatform) {
        if (cResult[1] === isGameLaunchable) {
          let tmp2;
          if (cResult[2] === platforms) {
            tmp2 = cResult[3];
          }
          return tmp2;
        }
      }
      const tmp3 = getJoinFromSupportedPlatformsIconKeys({ platforms, currentPlatform, isGameLaunchable });
      cResult[0] = currentPlatform;
      cResult[1] = isGameLaunchable;
      cResult[2] = platforms;
      cResult[3] = tmp3;
      tmp2 = tmp3;
    }
  : (platforms) => {
      platforms = platforms.platforms;
      const currentPlatform = platforms.currentPlatform;
      const isGameLaunchable = platforms.isGameLaunchable;
      const items = [currentPlatform, platforms, isGameLaunchable];
      return isGameLaunchable.useMemo(() => {
        const obj = { platforms, currentPlatform, isGameLaunchable };
        return getJoinFromSupportedPlatformsIconKeys(obj);
      }, items);
    };
const result = size.fileFinishedImporting("modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx");

export { IconKey };
export const ACTIVITY_GAME_PLATFORM_TO_ICON_KEY = obj2;
export { getJoinFromSupportedPlatformsIconKeys };
export const useJoinFromSupportedPlatformsIconKeys = tmp2;
