// === Module 9039: useGameProfileStoreWebsites ===

// Module 9039 (useGameProfileStoreWebsites)
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 9040 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 9042 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const set = new Set(["1402418703554842694", "356877880938070016"]);
let items = [fn(9040).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES, fn(9040).ThirdPartyGameApplicationWebsiteCategory.STEAM, fn(9040).ThirdPartyGameApplicationWebsiteCategory.ROBLOX, fn(9040).ThirdPartyGameApplicationWebsiteCategory.BATTLENET, fn(9040).ThirdPartyGameApplicationWebsiteCategory.RIOT, fn(9040).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT];
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileStoreWebsites.tsx");

export const useGameProfileStoreWebsites = function useGameProfileStoreWebsites(data) {
  let id;
  if (data != null) {
    id = data.id;
  }
  steamWebsiteUrl = steamWebsiteUrl(id1[2]).useSteamWebsiteUrl(id);
  const tmp4 = require("useXboxGamePassStoreUrl")(data);
  importDefault = tmp4;
  id1 = undefined;
  if (data != null) {
    id1 = data.id;
  }
  let websites;
  if (data != null) {
    websites = data.websites;
  }
  let steamReleaseStatus;
  if (data != null) {
    steamReleaseStatus = data.steamReleaseStatus;
  }
  items = [steamWebsiteUrl, websites, id1, steamReleaseStatus, tmp4];
  return websites.useMemo(() => {
    if (null != websites) {
      if (null != id1) {
        let found;
        if (websites != null) {
          found = websites.filter((category) => {
            let tmp3 = category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES;
            if (tmp3) {
              tmp3 = !steamReleaseStatus.has(dependencyMap);
            }
            let tmp6 = !tmp3;
            if (!tmp3) {
              let hasItem = category.category !== steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM;
              if (!hasItem) {
                hasItem = closure_1_4 !== steamWebsiteUrl(id1[4]).SteamReleaseStatus.RETIRED_ABANDONED;
              }
              if (hasItem) {
                hasItem = items.includes(category.category);
              }
              tmp6 = hasItem;
            }
            return tmp6;
          });
        }
        if (found == null) {
          found = [];
        }
        let someResult = null == steamWebsiteUrl;
        if (!someResult) {
          someResult = steamReleaseStatus === SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED;
        }
        if (!someResult) {
          someResult = found.some((category) => category.category === steamWebsiteUrl(9040).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        }
        if (!someResult) {
          const obj = { category: ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM, url: steamWebsiteUrl };
          found.push(obj);
        }
        const sorted = found.sort((category, category2) => {
          let num = -1;
          if (category.category !== steamWebsiteUrl(9040).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
            let num2 = 0;
            if (category2.category === steamWebsiteUrl(9040).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        if (null != closure_1) {
          const obj2 = { category: "XBOX_GAME_PASS", url: tmp11 };
          sorted.unshift(obj2);
        }
        return sorted;
      }
    }
    return [];
  }, items);
};