// discord_app/modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx
import noop from "../../../../_runtime/metro/00019__.js";

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
  tmp15 = closure_3;
}
const ActivityGamePlatforms = fn(1074).ActivityGamePlatforms;
let ACTIVITY_GAME_PLATFORM_TO_ICON_KEY = {
  DESKTOP: "desktop",
  MOBILE: "mobile",
  ANDROID: "android",
  IOS: "ios",
  PLAYSTATION: "playstation",
  XBOX: "xbox",
  VR: "vr",
};
ACTIVITY_GAME_PLATFORM_TO_ICON_KEY = {
  [ActivityGamePlatforms.DESKTOP]: ACTIVITY_GAME_PLATFORM_TO_ICON_KEY.DESKTOP,
  [ActivityGamePlatforms.ANDROID]: ACTIVITY_GAME_PLATFORM_TO_ICON_KEY.ANDROID,
  [ActivityGamePlatforms.IOS]: ACTIVITY_GAME_PLATFORM_TO_ICON_KEY.IOS,
  [ActivityGamePlatforms.XBOX]: ACTIVITY_GAME_PLATFORM_TO_ICON_KEY.XBOX,
  [ActivityGamePlatforms.PS4]: ACTIVITY_GAME_PLATFORM_TO_ICON_KEY.PLAYSTATION,
  [ActivityGamePlatforms.PS5]: ACTIVITY_GAME_PLATFORM_TO_ICON_KEY.PLAYSTATION,
  [ActivityGamePlatforms.SAMSUNG]: null,
  [ActivityGamePlatforms.EMBEDDED]: null,
  [ActivityGamePlatforms.META_QUEST]: ACTIVITY_GAME_PLATFORM_TO_ICON_KEY.VR,
};
let closure_3 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx");

export const IconKey = ACTIVITY_GAME_PLATFORM_TO_ICON_KEY;
export { ACTIVITY_GAME_PLATFORM_TO_ICON_KEY };
export { getJoinFromSupportedPlatformsIconKeys };
export const useJoinFromSupportedPlatformsIconKeys = function useJoinFromSupportedPlatformsIconKeys(platforms) {
  platforms = platforms.platforms;
  const currentPlatform = platforms.currentPlatform;
  const isGameLaunchable = platforms.isGameLaunchable;
  const items = [currentPlatform, platforms, isGameLaunchable];
  return platforms.useMemo(
    () => getJoinFromSupportedPlatformsIconKeys({ platforms, currentPlatform, isGameLaunchable }),
    items,
  );
};
