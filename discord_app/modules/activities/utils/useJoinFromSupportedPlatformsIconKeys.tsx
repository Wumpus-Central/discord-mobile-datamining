// discord_app/modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx
import ActivityGamePlatforms from "../../../../discord_common/js/shared/shared-constants/ActivityGamePlatforms.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getJoinFromSupportedPlatformsIconKeys(isGameLaunchable) {
  ({ platforms, currentPlatform } = isGameLaunchable);
  const set = new Set(platforms);
  if (null != platforms) {
    if (0 !== platforms.length) {
      if (null != currentPlatform) {
        if (set.has(currentPlatform)) {
          return tmp16;
        }
      }
      const items = [];
      if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.ANDROID)) {
        if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.IOS)) {
          items.push(obj.MOBILE);
        }
        let hasItem = set.has(ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_4);
        if (!hasItem) {
          hasItem = set.has(ActivityGamePlatforms.ActivityGamePlatforms.PLAYSTATION_5);
        }
        if (hasItem) {
          items.push(obj.PLAYSTATION);
        }
        if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.XBOX)) {
          items.push(obj.XBOX);
        }
        if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.DESKTOP)) {
          items.push(obj.DESKTOP);
        }
        tmp16 = items;
        if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST)) {
          items.push(obj.VR);
          tmp16 = items;
        }
      }
      if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.ANDROID)) {
        items.push(obj.ANDROID);
      } else if (set.has(ActivityGamePlatforms.ActivityGamePlatforms.IOS)) {
        items.push(obj.IOS);
      }
    }
  }
  tmp16 = closure_4;
}
const IconKey = {
  DESKTOP: "desktop",
  MOBILE: "mobile",
  ANDROID: "android",
  IOS: "ios",
  PLAYSTATION: "playstation",
  XBOX: "xbox",
  VR: "vr",
};
let closure_4 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx");

export { IconKey };
export const ACTIVITY_GAME_PLATFORM_TO_ICON_KEY = {
  [fn(9738).ActivityGamePlatforms.DESKTOP]: IconKey.DESKTOP,
  [fn(9738).ActivityGamePlatforms.ANDROID]: IconKey.ANDROID,
  [fn(9738).ActivityGamePlatforms.IOS]: IconKey.IOS,
  [fn(9738).ActivityGamePlatforms.XBOX]: IconKey.XBOX,
  [fn(9738).ActivityGamePlatforms.PLAYSTATION_4]: IconKey.PLAYSTATION,
  [fn(9738).ActivityGamePlatforms.PLAYSTATION_5]: IconKey.PLAYSTATION,
  [fn(9738).ActivityGamePlatforms.SAMSUNG]: null,
  [fn(9738).ActivityGamePlatforms.EMBEDDED]: null,
  [fn(9738).ActivityGamePlatforms.META_QUEST]: IconKey.VR,
};
export { getJoinFromSupportedPlatformsIconKeys };
export function useJoinFromSupportedPlatformsIconKeys(platforms) {
  platforms = platforms.platforms;
  const currentPlatform = platforms.currentPlatform;
  const isGameLaunchable = platforms.isGameLaunchable;
  const items = [currentPlatform, platforms, isGameLaunchable];
  return isGameLaunchable.useMemo(
    () => getJoinFromSupportedPlatformsIconKeys({ platforms, currentPlatform, isGameLaunchable }),
    items,
  );
}
