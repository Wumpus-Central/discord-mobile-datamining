// === Module 9553: useGameProfilePlatforms ===

// Module 9553 (useGameProfilePlatforms)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import PlatformType from "PlatformType" /* 8870 */;
import noop from "module_19" /* 19 */;

require = fn;
let items = [fn(8870).PlatformType.DESKTOP, "mobile", fn(8870).PlatformType.XBOX, fn(8870).PlatformType.PLAYSTATION, fn(8870).PlatformType.NINTENDO, fn(8870).PlatformType.ROBLOX];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfilePlatforms.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfilePlatforms(platforms) {
  const cResult = c.c(5);
  if (cResult[0] !== platforms.platforms) {
    const _Set = Set;
    let set = new Set(platforms.platforms);
    let hasItem = set.has(PlatformType.PlatformType.MACOS);
    if (!hasItem) {
      hasItem = set.has(PlatformType.PlatformType.LINUX);
    }
    if (hasItem) {
      set.add(PlatformType.PlatformType.DESKTOP);
    }
    cResult[0] = platforms.platforms;
    cResult[1] = set;
  } else {
    set = cResult[1];
  }
  let hasItem1 = obj2.has(PlatformType.PlatformType.IOS);
  if (!hasItem1) {
    hasItem1 = obj2.has(PlatformType.PlatformType.ANDROID);
  }
  if (cResult[2] === obj2) {
    if (cResult[3] === hasItem1) {
      let tmp11 = cResult[4];
    }
    return tmp11;
  }
  const found = items.filter((item) => {
    if ("mobile" === item) {
      let hasItem = hasItem1;
    } else {
      hasItem = set.has(item);
    }
    return hasItem;
  });
  cResult[2] = obj2;
  cResult[3] = hasItem1;
  cResult[4] = found;
  tmp11 = found;
}) : (function useGameProfilePlatforms(platforms) {
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
});
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