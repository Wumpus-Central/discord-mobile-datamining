// discord_app/modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getJoinFromSupportedPlatformsIconKeys(isGameLaunchable) {
  ({ platforms, currentPlatform } = isGameLaunchable);
  const set = new Set(platforms);
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
        tmp8 = set.has(ActivityGamePlatforms.PS4) || set.has(ActivityGamePlatforms.PS5);
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
const ActivityGamePlatforms = fn(1085).ActivityGamePlatforms;
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx");

export { IconKey };
export const ACTIVITY_GAME_PLATFORM_TO_ICON_KEY = {
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
export { getJoinFromSupportedPlatformsIconKeys };
export const useJoinFromSupportedPlatformsIconKeys = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(4);
      ({ platforms, currentPlatform, isGameLaunchable } = arg0);
      if (cResult[0] === currentPlatform) {
        if (cResult[1] === isGameLaunchable) {
          if (cResult[2] === platforms) {
            let tmp2 = cResult[3];
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
      return isGameLaunchable.useMemo(
        () => getJoinFromSupportedPlatformsIconKeys({ platforms, currentPlatform, isGameLaunchable }),
        items,
      );
    };
