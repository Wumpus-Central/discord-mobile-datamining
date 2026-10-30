// === Module 9572: useGameProfilePlatforms ===

// Module 9572 (useGameProfilePlatforms)
import util from "util" /* 1114 */;
import PlatformType from "PlatformType" /* 8904 */;
import noop from "module_19" /* 19 */;

require = fn;
let items = [fn(8904).PlatformType.DESKTOP, "mobile", fn(8904).PlatformType.XBOX, fn(8904).PlatformType.PLAYSTATION, fn(8904).PlatformType.NINTENDO, fn(8904).PlatformType.ROBLOX];
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfilePlatforms.tsx");

export default function useGameProfilePlatforms(platforms) {
  items = [platforms.platforms];
  return noop.useMemo(() => {
    const set = new Set(platforms.platforms);
    let hasItem = set.has(PlatformType.PlatformType.MACOS);
    if (!hasItem) {
      hasItem = set.has(PlatformType.PlatformType.LINUX);
    }
    if (hasItem) {
      set.add(PlatformType.PlatformType.DESKTOP);
    }
    let hasItem1 = set.has(PlatformType.PlatformType.IOS);
    if (!hasItem1) {
      hasItem1 = set.has(PlatformType.PlatformType.ANDROID);
    }
    return items.filter((item) => {
      if ("mobile" === item) {
        let hasItem = hasItem1;
      } else {
        hasItem = set.has(item);
      }
      return hasItem;
    });
  }, items);
};
export function getGameProfilePlatformText(item) {
  if (PlatformType.PlatformType.DESKTOP === item) {
    const intl6 = util.intl;
    return intl6.string(util.t.KT6uCJ);
  } else if ("mobile" === item) {
    const intl5 = util.intl;
    return intl5.string(util.t["0DvssQ"]);
  } else if (PlatformType.PlatformType.XBOX === item) {
    const intl4 = util.intl;
    return intl4.string(util.t.DDWUJp);
  } else if (PlatformType.PlatformType.PLAYSTATION === item) {
    const intl3 = util.intl;
    return intl3.string(util.t.fzMz2s);
  } else if (PlatformType.PlatformType.NINTENDO === item) {
    const intl2 = util.intl;
    return intl2.string(util.t.AMW8je);
  } else if (PlatformType.PlatformType.ROBLOX === item) {
    const intl = util.intl;
    return intl.string(util.t.MPURhG);
  }
}