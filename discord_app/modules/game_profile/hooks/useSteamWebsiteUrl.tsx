// === Module 8334: useSteamWebsiteUrl ===

// Module 8334 (useSteamWebsiteUrl)
import Constants from "Constants" /* 1085 */;
import StringUtils from "StringUtils" /* 2018 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 8335 */;
import GameStore from "GameStore" /* 2007 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Distributors = Constants.Distributors;
function buildSteamStoreUrl(arg0) {
  return "https://store.steampowered.com/app/" + encodeURIComponent(arg0);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let tmp;
      if (null == closure_0) {
        return null;
      } else {
        const game = GameStore.getGame(tmp);
        if (null == game) {
          return null;
        } else if (game.steamReleaseStatus === SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED) {
          return null;
        } else {
          let url;
          let tmp7;
          const websites = game.websites;
          const found = websites.find((category) => category.category === closure_1_0(closure_1_1[5]).ThirdPartyGameApplicationWebsiteCategory.STEAM);
          if (found != null) {
            url = found.url;
          }
          const thirdPartySkus = game.thirdPartySkus;
          const found1 = thirdPartySkus.filter((distributor) => {
            let tmp = distributor.distributor === constants.STEAM;
            if (tmp) {
              const obj = closure_1_0(closure_1_1[6]);
              tmp = !obj.isNullOrEmpty(distributor.id);
            }
            return tmp;
          });
          const first = found1[0];
          let id;
          if (first != null) {
            id = first.id;
          }
          let combined = null;
          const tmp11Result = StringUtils;
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
            tmp7 = combined;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GameStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    let tmp;
    if (null == closure_0) {
      return null;
    } else {
      const game = GameStore.getGame(tmp);
      if (null == game) {
        return null;
      } else if (game.steamReleaseStatus === SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED) {
        return null;
      } else {
        let url;
        let tmp7;
        const websites = game.websites;
        const found = websites.find((category) => category.category === closure_1_0(closure_1_1[5]).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        if (found != null) {
          url = found.url;
        }
        const thirdPartySkus = game.thirdPartySkus;
        const found1 = thirdPartySkus.filter((distributor) => {
          let tmp = distributor.distributor === constants.STEAM;
          if (tmp) {
            const obj = closure_1_0(closure_1_1[6]);
            tmp = !obj.isNullOrEmpty(distributor.id);
          }
          return tmp;
        });
        const first = found1[0];
        let id;
        if (first != null) {
          id = first.id;
        }
        let combined = null;
        const tmp11Result = StringUtils;
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
          tmp7 = combined;
        } else {
          tmp7 = url;
        }
        return tmp7;
      }
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/game_profile/hooks/useSteamWebsiteUrl.tsx");

export { buildSteamStoreUrl };
export const useSteamWebsiteUrl = tmp2;