// discord_app/modules/game_profile/hooks/useGameProfileStoreWebsites.tsx
import ThirdPartyGameApplicationWebsiteCategory from "../../../../discord_common/js/shared/shared-constants/ThirdPartyGameApplicationWebsiteCategory.tsx";
import SteamReleaseStatus from "../../../../discord_common/js/shared/shared-constants/SteamReleaseStatus.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const set = new Set(["1402418703554842694", "356877880938070016"]);
let items = [
  fn(8873).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES,
  fn(8873).ThirdPartyGameApplicationWebsiteCategory.STEAM,
  fn(8873).ThirdPartyGameApplicationWebsiteCategory.ROBLOX,
  fn(8873).ThirdPartyGameApplicationWebsiteCategory.BATTLENET,
  fn(8873).ThirdPartyGameApplicationWebsiteCategory.RIOT,
  fn(8873).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT,
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileStoreWebsites.tsx");

export const useGameProfileStoreWebsites = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGameProfileStoreWebsites(id) {
      const cResult = id1(576).c(8);
      const obj = id1(576);
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      const steamWebsiteUrl = id1(8874).useSteamWebsiteUrl(id);
      let tmp6 = steamReleaseStatus(8876)(id);
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
        if (null != id1) {
          if (cResult[1] === id1) {
            if (cResult[2] === steamReleaseStatus) {
              if (cResult[3] === steamWebsiteUrl) {
                if (cResult[4] === websites) {
                  if (cResult[5] === tmp6) {
                    let tmp10 = cResult[6];
                  }
                  return tmp10;
                }
              }
            }
          }
          let found;
          if (websites != null) {
            found = websites.filter((category) => {
              let tmp3 =
                category.category ===
                ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES;
              if (tmp3) {
                tmp3 = !set.has(id1);
              }
              let tmp6 = !tmp3;
              if (!tmp3) {
                let hasItem =
                  category.category !==
                  ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM;
                if (!hasItem) {
                  hasItem = steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED;
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
          if (!tmp11) {
            const obj3 = { category: tmp(8873).ThirdPartyGameApplicationWebsiteCategory.STEAM, url: steamWebsiteUrl };
            found.push(obj3);
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor(arg0, arg1) {
                tmp = id;
                tmp2 = closure_1_2;
                num = -1;
                if (id.category !== id(closure_1_2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                  tmp3 = arg1;
                  num2 = 0;
                  if (arg1.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                    num2 = 1;
                  }
                  num = num2;
                }
                return num;
              }
            }
            cResult[7] = S;
          } else {
            class S {
              constructor(arg0, arg1) {
                tmp = id;
                tmp2 = closure_1_2;
                num = -1;
                if (id.category !== id(closure_1_2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                  tmp3 = arg1;
                  num2 = 0;
                  if (arg1.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                    num2 = 1;
                  }
                  num = num2;
                }
                return num;
              }
            }
          }
          const sorted = found.sort(S);
          if (null != tmp6) {
            class S {
              constructor(arg0, arg1) {
                tmp = id;
                tmp2 = closure_1_2;
                num = -1;
                if (id.category !== id(closure_1_2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                  tmp3 = arg1;
                  num2 = 0;
                  if (arg1.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                    num2 = 1;
                  }
                  num = num2;
                }
                return num;
              }
            }
            tmp15[1] = tmp6;
            sorted.unshift(tmp15);
          }
          cResult[1] = id1;
          cResult[2] = steamReleaseStatus;
          cResult[3] = steamWebsiteUrl;
          cResult[4] = websites;
          cResult[5] = tmp6;
          cResult[6] = sorted;
          tmp10 = sorted;
          tmp11 =
            null == steamWebsiteUrl ||
            steamReleaseStatus === tmp(8875).SteamReleaseStatus.RETIRED_ABANDONED ||
            found.some((category) => category.category === id1(8873).ThirdPartyGameApplicationWebsiteCategory.STEAM);
        }
      } else {
        class S {
          constructor(arg0, arg1) {
            tmp = id;
            tmp2 = closure_1_2;
            num = -1;
            if (id.category !== id(closure_1_2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              tmp3 = arg1;
              num2 = 0;
              if (arg1.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                num2 = 1;
              }
              num = num2;
            }
            return num;
          }
        }
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0, arg1) {
            tmp = id;
            tmp2 = closure_1_2;
            num = -1;
            if (id.category !== id(closure_1_2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              tmp3 = arg1;
              num2 = 0;
              if (arg1.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                num2 = 1;
              }
              num = num2;
            }
            return num;
          }
        }
        cResult[0] = tmp18;
      } else {
        class S {
          constructor(arg0, arg1) {
            tmp = id;
            tmp2 = closure_1_2;
            num = -1;
            if (id.category !== id(closure_1_2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
              tmp3 = arg1;
              num2 = 0;
              if (arg1.category === tmp(tmp2[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                num2 = 1;
              }
              num = num2;
            }
            return num;
          }
        }
      }
      const obj2 = id1(8874);
    }
  : function useGameProfileStoreWebsites(id) {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      steamWebsiteUrl = steamWebsiteUrl(id1[4]).useSteamWebsiteUrl(id);
      const tmp4 = require("useXboxGamePassStoreUrl")(id);
      importDefault = tmp4;
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
      items = [steamWebsiteUrl, websites, id1, steamReleaseStatus, tmp4];
      return websites.useMemo(() => {
        if (null != websites) {
          if (null != id1) {
            let found;
            if (websites != null) {
              found = websites.filter((category) => {
                let tmp3 =
                  category.category === steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES;
                if (tmp3) {
                  tmp3 = !steamReleaseStatus.has(dependencyMap);
                }
                let tmp6 = !tmp3;
                if (!tmp3) {
                  let hasItem =
                    category.category !== steamWebsiteUrl(id1[1]).ThirdPartyGameApplicationWebsiteCategory.STEAM;
                  if (!hasItem) {
                    hasItem = closure_1_4 !== steamWebsiteUrl(id1[6]).SteamReleaseStatus.RETIRED_ABANDONED;
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
              someResult = found.some(
                (category) =>
                  category.category === steamWebsiteUrl(8873).ThirdPartyGameApplicationWebsiteCategory.STEAM,
              );
            }
            if (!someResult) {
              const obj = {
                category: ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM,
                url: steamWebsiteUrl,
              };
              found.push(obj);
            }
            const sorted = found.sort((category, category2) => {
              let num = -1;
              if (category.category !== steamWebsiteUrl(8873).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
                let num2 = 0;
                if (category2.category === steamWebsiteUrl(8873).ThirdPartyGameApplicationWebsiteCategory.STEAM) {
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
