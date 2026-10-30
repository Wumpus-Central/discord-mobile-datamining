// === Module 9324: useSteamWebsiteUrl ===

// Module 9324 (useSteamWebsiteUrl)
import SteamReleaseStatus from "SteamReleaseStatus" /* 9325 */;
import GameStore from "GameStore" /* 2015 */;

const require = globalThis.__r;

require = fn;
const Distributors = fn(1072).Distributors;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSteamWebsiteUrl.tsx");

export function buildSteamStoreUrl(arg0) {
  return "https://store.steampowered.com/app/" + encodeURIComponent(arg0);
}
export function useSteamWebsiteUrl(id) {
  _require = id;
  const items = [GameStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      return null;
    } else {
      const game = GameStore.getGame(tmp);
      if (null == game) {
        return null;
      } else if (game.steamReleaseStatus === SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED) {
        return null;
      } else {
        const websites = game.websites;
        const found = websites.find((category) => category.category === id(9323).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        if (found != null) {
          const url = found.url;
        }
        const thirdPartySkus = game.thirdPartySkus;
        const found1 = thirdPartySkus.filter((distributor) => {
          let tmp = distributor.distributor === constants.STEAM;
          if (tmp) {
            tmp = !id(2028).isNullOrEmpty(distributor.id);
            const obj = id(2028);
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
}