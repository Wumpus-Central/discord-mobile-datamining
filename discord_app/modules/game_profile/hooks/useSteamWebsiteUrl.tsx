// discord_app/modules/game_profile/hooks/useSteamWebsiteUrl.tsx
import SteamReleaseStatus from "../../../../discord_common/js/shared/shared-constants/SteamReleaseStatus.tsx";
import GameStore from "../../games/GameStore.tsx";

const require = globalThis.__r;

require = fn;
const Distributors = fn(1085).Distributors;
const ReactCompilerGating = fn(558);
function buildSteamStoreUrl(arg0) {
  return "https://store.steampowered.com/app/" + encodeURIComponent(arg0);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSteamWebsiteUrl.tsx");

export { buildSteamStoreUrl };
export const useSteamWebsiteUrl = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSteamWebsiteUrl(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
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
              const found = websites.find(
                (category) => category.category === closure_1_0(8864).ThirdPartyGameApplicationWebsiteCategory.STEAM,
              );
              if (found != null) {
                const url = found.url;
              }
              const thirdPartySkus = game.thirdPartySkus;
              const found1 = thirdPartySkus.filter((distributor) => {
                let tmp = distributor.distributor === constants.STEAM;
                if (tmp) {
                  tmp = !closure_1_0(2030).isNullOrEmpty(distributor.id);
                  const obj = closure_1_0(2030);
                }
                return tmp;
              });
              const first = found1[0];
              let id;
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
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6, tmp7);
    }
  : function useSteamWebsiteUrl(arg0) {
      _require = arg0;
      const items = [GameStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => {
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
              const found = websites.find(
                (category) => category.category === closure_1_0(8864).ThirdPartyGameApplicationWebsiteCategory.STEAM,
              );
              if (found != null) {
                const url = found.url;
              }
              const thirdPartySkus = game.thirdPartySkus;
              const found1 = thirdPartySkus.filter((distributor) => {
                let tmp = distributor.distributor === constants.STEAM;
                if (tmp) {
                  tmp = !closure_1_0(2030).isNullOrEmpty(distributor.id);
                  const obj = closure_1_0(2030);
                }
                return tmp;
              });
              const first = found1[0];
              let id;
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
        },
        items1,
      );
    };
