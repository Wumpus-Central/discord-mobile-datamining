// discord_app/modules/game_profile/hooks/useGameProfileStoreWebsites.tsx
import closure_3 from "noop" /* 19 */;
import set from "set" /* 2 */;

const require = arg1;
let set = new Set(["1402418703554842694", "356877880938070016"]);
let items = [require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.EPICGAMES, require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.STEAM, require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.ROBLOX, require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.BATTLENET, require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.RIOT, require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.MINECRAFT];
const result = set.fileFinishedImporting("modules/game_profile/hooks/useGameProfileStoreWebsites.tsx");

export const useGameProfileStoreWebsites = function useGameProfileStoreWebsites(data) {
  let id;
  if (data != null) {
    id = data.id;
  }
  steamWebsiteUrl = steamWebsiteUrl(id1[2]).useSteamWebsiteUrl(id);
  const tmp4 = importDefault(id1[3])(data);
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
            let tmp3 = category.category === closure_1_0(closure_1_2[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES;
            if (tmp3) {
              tmp3 = !closure_1_4.has(closure_2);
            }
            let tmp6 = !tmp3;
            if (!tmp3) {
              let hasItem = category.category !== tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM;
              if (!hasItem) {
                hasItem = closure_4 !== tmp(tmp2[4]).SteamReleaseStatus.RETIRED_ABANDONED;
              }
              if (hasItem) {
                hasItem = closure_1_5.includes(category.category);
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
          someResult = steamReleaseStatus === steamWebsiteUrl(id1[4]).SteamReleaseStatus.RETIRED_ABANDONED;
        }
        if (!someResult) {
          someResult = found.some((category) => category.category === callback(9104).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        }
        if (!someResult) {
          let obj = { category: null, url: null };
          obj[0] = steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM;
          obj[1] = steamWebsiteUrl;
          arr = found.push(obj);
        }
        const sorted = found.sort((category, category2) => {
          let num = -1;
          if (category.category !== callback(9104).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
            let num2 = 0;
            if (category2.category === callback(9104).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              num2 = 1;
            }
            num = num2;
          }
          return num;
        });
        if (null != closure_1) {
          obj = { category: "XBOX_GAME_PASS", url: null };
          obj[1] = tmp11;
          arr = sorted.unshift(obj);
        }
        return sorted;
      }
    }
    return [];
  }, items);
};