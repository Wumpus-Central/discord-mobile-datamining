// discord_app/modules/game_profile/hooks/useGameProfileStoreWebsites.tsx
import ThirdPartyGameApplicationWebsiteCategory from "../../../../discord_common/js/shared/shared-constants/ThirdPartyGameApplicationWebsiteCategory.tsx";
import SteamReleaseStatus from "../../../../discord_common/js/shared/shared-constants/SteamReleaseStatus.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let id, importDefault;

const set = new Set(["1402418703554842694", "356877880938070016"]);
let items = [
  ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES,
  ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM,
  ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX,
  ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BATTLENET,
  ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.RIOT,
  ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.MINECRAFT,
];
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let id1;
      let steamReleaseStatus;
      const obj = id1(576);
      const cResult = obj.c(8);
      id = undefined;
      const useSteamWebsiteUrl = id1(8334).useSteamWebsiteUrl;
      id1(8334);
      if (id != null) {
        id = id.id;
      }
      const steamWebsiteUrl = useSteamWebsiteUrl(id);
      const tmp7 = steamReleaseStatus(8336)(id);
      id1 = undefined;
      if (id != null) {
        id1 = id.id;
      }
      let websites;
      if (id != null) {
        websites = id.websites;
      }
      steamReleaseStatus = undefined;
      if (id != null) {
        steamReleaseStatus = id.steamReleaseStatus;
      }
      if (null != websites) {
        let tmp11;
        if (null != id1) {
          if (cResult[1] === id1) {
            if (cResult[2] === steamReleaseStatus) {
              if (cResult[3] === steamWebsiteUrl) {
                if (cResult[4] === websites) {
                  if (cResult[5] === tmp7) {
                    tmp11 = cResult[6];
                  }
                }
              }
            }
          }
          let found;
          if (websites != null) {
            found = websites.filter((category) => {
              let tmp6 = !(
                category.category ===
                  ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES &&
                !set.has(id1)
              );
              const tmp3 =
                category.category ===
                  ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES &&
                !set.has(id1);
              if (tmp6) {
                const hasItem =
                  (category.category !==
                    ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM ||
                    steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED) &&
                  items.includes(category.category);
                tmp6 = hasItem;
              }
              return tmp6;
            });
          }
          if (found == null) {
            found = [];
          }
          const tmp12 =
            null == steamWebsiteUrl ||
            steamReleaseStatus === id1(8335).SteamReleaseStatus.RETIRED_ABANDONED ||
            found.some(
              (category) => category.category === id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM,
            );
          if (!tmp12) {
            const push = found.push;
            const obj2 = { category: id1(8333).ThirdPartyGameApplicationWebsiteCategory.STEAM, url: steamWebsiteUrl };
            push(obj2);
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor(category, category2) {
                let num = -1;
                if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                  let num2 = 0;
                  if (category2.category === id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                    num2 = 1;
                  }
                  num = num2;
                }
                return num;
              }
            }
            let num = 7;
            cResult[7] = E;
          } else {
            class E {
              constructor(category, category2) {
                let num = -1;
                if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                  let num2 = 0;
                  if (category2.category === id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                    num2 = 1;
                  }
                  num = num2;
                }
                return num;
              }
            }
          }
          const sorted = found.sort(E);
          if (null != tmp7) {
            class E {
              constructor(category, category2) {
                let num = -1;
                if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                  let num2 = 0;
                  if (category2.category === id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                    num2 = 1;
                  }
                  num = num2;
                }
                return num;
              }
            }
            tmp16[1] = tmp7;
            sorted.unshift(tmp16);
          }
          let num2 = 1;
          cResult[1] = id1;
          cResult[2] = steamReleaseStatus;
          cResult[3] = steamWebsiteUrl;
          cResult[4] = websites;
          cResult[5] = tmp7;
          cResult[6] = sorted;
          tmp11 = sorted;
        }
        return tmp11;
      } else {
        class E {
          constructor(category, category2) {
            let num = -1;
            if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              let num2 = 0;
              if (category2.category === id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                num2 = 1;
              }
              num = num2;
            }
            return num;
          }
        }
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(category, category2) {
            let num = -1;
            if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              let num2 = 0;
              if (category2.category === id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                num2 = 1;
              }
              num = num2;
            }
            return num;
          }
        }
        cResult[0] = tmp19;
      } else {
        class E {
          constructor(category, category2) {
            let num = -1;
            if (category.category !== id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              let num2 = 0;
              if (category2.category === id1(dependencyMap[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                num2 = 1;
              }
              num = num2;
            }
            return num;
          }
        }
      }
      tmp11 = tmp19;
    }
  : (id) => {
      let closure_1;
      let id1;
      let steamWebsiteUrl;
      id = undefined;
      const useSteamWebsiteUrl = steamWebsiteUrl(id1[4]).useSteamWebsiteUrl;
      steamWebsiteUrl(id1[4]);
      const tmp = id1;
      if (id != null) {
        id = id.id;
      }
      steamWebsiteUrl = useSteamWebsiteUrl(id);
      const tmp5 = require("useXboxGamePassStoreUrl")(id);
      importDefault = tmp5;
      id1 = undefined;
      if (id != null) {
        id1 = id.id;
      }
      let websites;
      if (id != null) {
        websites = id.websites;
      }
      let steamReleaseStatus;
      if (id != null) {
        steamReleaseStatus = id.steamReleaseStatus;
      }
      items = [steamWebsiteUrl, websites, id1, steamReleaseStatus, tmp5];
      return websites.useMemo(() => {
        if (null != websites) {
          if (null != id1) {
            let found;
            if (websites != null) {
              found = websites.filter((category) => {
                let tmp6 = !(
                  category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES &&
                  !steamReleaseStatus.has(closure_1_2)
                );
                const tmp3 =
                  category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES &&
                  !steamReleaseStatus.has(closure_1_2);
                if (tmp6) {
                  const hasItem =
                    (category.category !== steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM ||
                      closure_1_4 !== steamWebsiteUrl(id1[6]).SteamReleaseStatus.RETIRED_ABANDONED) &&
                    items.includes(category.category);
                  tmp6 = hasItem;
                }
                return tmp6;
              });
            }
            if (found == null) {
              found = [];
            }
            const someResult =
              null == steamWebsiteUrl ||
              steamReleaseStatus === SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED ||
              found.some(
                (category) =>
                  category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM,
              );
            if (!someResult) {
              const push = found.push;
              const obj = {
                category: ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM,
                url: steamWebsiteUrl,
              };
              push(obj);
            }
            const sorted = found.sort((category, category2) => {
              let num = -1;
              if (category.category !== steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                let num2 = 0;
                if (category2.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
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
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileStoreWebsites.tsx");

export const useGameProfileStoreWebsites = tmp3;
