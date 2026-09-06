// === Module 8688: useGameProfileStoreWebsites ===

// Module 8688 (useGameProfileStoreWebsites)
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8689 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 8691 */;
import noop from "module_19" /* 19 */;

require = fn;
const set = new Set(["1402418703554842694", "356877880938070016"]);
let items = [fn(8689).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES, fn(8689).ThirdPartyGameApplicationWebsiteCategory.STEAM, fn(8689).ThirdPartyGameApplicationWebsiteCategory.ROBLOX, fn(8689).ThirdPartyGameApplicationWebsiteCategory.BATTLENET, fn(8689).ThirdPartyGameApplicationWebsiteCategory.RIOT, fn(8689).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT];
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
    let arr = websites;
    if (null != websites) {
      if (null != id1) {
        let found;
        if (arr != null) {
          found = arr.filter((category) => {
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
          someResult = found.some((category) => category.category === steamWebsiteUrl(8689).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        }
        if (!someResult) {
          let obj = { category: ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM, url: steamWebsiteUrl };
          arr = found.push(obj);
        }
        const sorted = found.sort((category, category2) => {
          let num = -1;
          if (category.category !== steamWebsiteUrl(8689).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
            let num2 = 0;
            if (category2.category === steamWebsiteUrl(8689).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        if (null != closure_1) {
          obj = { category: "XBOX_GAME_PASS", url: tmp11 };
          arr = sorted.unshift(obj);
        }
        return sorted;
      }
    }
    return [];
  }, items);
};