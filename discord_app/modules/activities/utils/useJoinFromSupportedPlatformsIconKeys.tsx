// discord_app/modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx
import noop from "noop";
import { ActivityGamePlatforms } from "ME";

function getJoinFromSupportedPlatformsIconKeys(isGameLaunchable) {
  let currentPlatform;
  let platforms;
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
        if (set.has(tmp.IOS)) {
          items.push(obj.MOBILE);
        }
        if (tmp8) {
          items.push(obj.PLAYSTATION);
        }
        if (set.has(tmp.XBOX)) {
          items.push(obj.XBOX);
        }
        if (set.has(tmp.DESKTOP)) {
          items.push(obj.DESKTOP);
        }
        tmp15 = items;
        if (set.has(tmp.META_QUEST)) {
          items.push(obj.VR);
          tmp15 = items;
        }
        tmp8 = set.has(tmp.PS4) || set.has(tmp.PS5);
      }
      if (set.has(ActivityGamePlatforms.ANDROID)) {
        items.push(obj.ANDROID);
      } else if (set.has(tmp.IOS)) {
        items.push(obj.IOS);
      }
    }
  }
  tmp15 = closure_3;
}
let obj = { DESKTOP: "desktop", MOBILE: "mobile", ANDROID: "android", IOS: "ios", PLAYSTATION: "playstation", XBOX: "xbox", VR: "vr" };
obj = { [ActivityGamePlatforms.DESKTOP]: obj.DESKTOP, [ActivityGamePlatforms.ANDROID]: obj.ANDROID, [ActivityGamePlatforms.IOS]: obj.IOS, [ActivityGamePlatforms.XBOX]: obj.XBOX, [ActivityGamePlatforms.PS4]: obj.PLAYSTATION, [ActivityGamePlatforms.PS5]: obj.PLAYSTATION, [ActivityGamePlatforms.SAMSUNG]: null, [ActivityGamePlatforms.EMBEDDED]: null, [ActivityGamePlatforms.META_QUEST]: obj.VR };
let closure_3 = [];
const result = require("set").fileFinishedImporting("modules/activities/utils/useJoinFromSupportedPlatformsIconKeys.tsx");

export const IconKey = obj;
export const ACTIVITY_GAME_PLATFORM_TO_ICON_KEY = obj;
export { getJoinFromSupportedPlatformsIconKeys };
export const useJoinFromSupportedPlatformsIconKeys = function useJoinFromSupportedPlatformsIconKeys(platforms) {
  platforms = platforms.platforms;
  const currentPlatform = platforms.currentPlatform;
  const isGameLaunchable = platforms.isGameLaunchable;
  const items = [currentPlatform, platforms, isGameLaunchable];
  return platforms.useMemo(() => outer1_4({ platforms, currentPlatform, isGameLaunchable }), items);
};