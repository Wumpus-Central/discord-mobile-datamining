// === Module 9105: buildSteamStoreUrl ===

// Module 9105 (buildSteamStoreUrl)
import handleLoadMessages from "handleLoadMessages" /* 4505 */;
import { Distributors } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_profile/hooks/useSteamWebsiteUrl.tsx");

export const buildSteamStoreUrl = function buildSteamStoreUrl(arg0) {
  return "https://store.steampowered.com/app/" + encodeURIComponent(arg0);
};
export const useSteamWebsiteUrl = function useSteamWebsiteUrl(id) {
  const _require = id;
  const items = [closure_2];
  const items1 = [id];
  return _require(589).useStateFromStores(items, () => {
    if (null == id) {
      return null;
    } else {
      const game = closure_1_2.getGame(tmp);
      if (null == game) {
        return null;
      } else if (game.steamReleaseStatus === id(dependencyMap[3]).SteamReleaseStatus.RETIRED_ABANDONED) {
        return null;
      } else {
        const websites = game.websites;
        const found = websites.find((item, index) => item.category === callback(9104).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        if (found != null) {
          const url = found.url;
        }
        const thirdPartySkus = game.thirdPartySkus;
        const found1 = thirdPartySkus.filter((item, index) => {
          let tmp = item.distributor === constants.STEAM;
          if (tmp) {
            tmp = !callback(1903).isNullOrEmpty(item.id);
            const obj = callback(1903);
          }
          return tmp;
        });
        const first = found1[0];
        id = undefined;
        if (first != null) {
          id = first.id;
        }
        let combined = null;
        if (!tmp11Result.isNullOrEmpty(id)) {
          const _encodeURIComponent = encodeURIComponent;
          const _HermesInternal = HermesInternal;
          combined = "https://store.steampowered.com/app/" + encodeURIComponent(id);
        }
        if (found1.length <= 1) {
          if (null == combined) {
            let tmp8 = null;
            if (null != url) {
              tmp8 = url;
            }
            combined = tmp8;
          }
          let tmp7 = combined;
        } else {
          tmp7 = url;
        }
        return tmp7;
      }
    }
  }, items1);
};