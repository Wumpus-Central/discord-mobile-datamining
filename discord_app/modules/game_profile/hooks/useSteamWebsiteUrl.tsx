// === Module 8816: buildSteamStoreUrl ===

// Module 8816 (buildSteamStoreUrl)
import closure_2 from "handleLoadMessages" /* 4502 */;
import { Distributors } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_profile/hooks/useSteamWebsiteUrl.tsx");

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
      } else {
        if (game.steamReleaseStatus === id(closure_1_1[3]).SteamReleaseStatus.RETIRED_ABANDONED) {
          return null;
        } else {
          const websites = game.websites;
          const found = websites.find((category) => category.category === callback(8815).ThirdPartyGameApplicationWebsiteCategory.STEAM);
          if (found != null) {
            const url = found.url;
          }
          const thirdPartySkus = game.thirdPartySkus;
          const found1 = thirdPartySkus.filter((distributor) => {
            let tmp = distributor.distributor === constants.STEAM;
            if (tmp) {
              tmp = !callback(1902).isNullOrEmpty(distributor.id);
              const obj = callback(1902);
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
        const tmp11 = id;
        const tmp12 = closure_1_1;
      }
    }
  }, items1);
};