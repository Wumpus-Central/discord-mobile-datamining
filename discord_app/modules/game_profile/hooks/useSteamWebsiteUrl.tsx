// discord_app/modules/game_profile/hooks/useSteamWebsiteUrl.tsx
import handleLoadMessages from "handleLoadMessages";
import { Distributors } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/game_profile/hooks/useSteamWebsiteUrl.tsx");

export const buildSteamStoreUrl = function buildSteamStoreUrl(arg0) {
  return "https://store.steampowered.com/app/" + encodeURIComponent(arg0);
};
export const useSteamWebsiteUrl = function useSteamWebsiteUrl(id) {
  const _require = id;
  const items = [handleLoadMessages];
  const items1 = [id];
  return _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null == id) {
      return null;
    } else {
      const game = outer1_2.getGame(tmp);
      if (null == game) {
        return null;
      } else {
        if (game.steamReleaseStatus === id(outer1_1[3]).SteamReleaseStatus.RETIRED_ABANDONED) {
          return null;
        } else {
          const websites = game.websites;
          const found = websites.find((category) => category.category === callback(9204).ThirdPartyGameApplicationWebsiteCategory.STEAM);
          if (found != null) {
            const url = found.url;
          }
          const thirdPartySkus = game.thirdPartySkus;
          const found1 = thirdPartySkus.filter((distributor) => {
            let tmp = distributor.distributor === constants.STEAM;
            if (tmp) {
              tmp = !callback(1856).isNullOrEmpty(distributor.id);
              const obj = callback(1856);
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
        const tmp12 = outer1_1;
      }
    }
  }, items1);
};