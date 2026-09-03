// === Module 10333: useFavoritesAccess ===

// Module 10333 (useFavoritesAccess)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import initialize from "initialize" /* 586 */;
import getFavoritesAwareGuildName from "getFavoritesAwareGuildName" /* 1911 */;
import isPremiumAtLeastDefault from "isPremiumAtLeast" /* 1945 */;
import FREE_FAVORITE_LIMIT from "FREE_FAVORITE_LIMIT" /* 10334 */;
import useFavoritesGuildConfig from "useFavoritesGuildConfig" /* 10335 */;
import closure_3 from "handleConnectionOpen" /* 4299 */;
import closure_4 from "mergeGuildAvatar" /* 1921 */;
import closure_5 from "initializeFromUserSettings" /* 1389 */;
import { MAX_FAVORITE_CHANNELS } from "date" /* 1424 */;
import { PremiumTypes } from "GuildFeatures" /* 1923 */;

require = arg1;
function useFavoritesAccess(FavoritesGuildActionSheet) {
  let str = FavoritesGuildActionSheet;
  if (FavoritesGuildActionSheet === undefined) {
    str = "useFavoritesAccess";
  }
  let obj = useFavoritesGuildConfig;
  const favoritesGuildConfig = obj.useFavoritesGuildConfig({ location: str });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = initialize;
  const tmp = require;
  const isPremiumExactlyResult = isPremiumAtLeastDefault.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  let tmp6 = enabled;
  if (enabled) {
    let tmp7 = isPremiumExactlyResult;
    if (!isPremiumExactlyResult) {
      tmp7 = isFreemium;
    }
    tmp6 = tmp7;
  }
  if (!tmp6) {
    obj = { hasAccess: null, isExperimentEnabled: null, isFreemium: null, favoriteLimit: null, canUpsellFavoriteLimit: null };
    obj[0] = tmp6;
    obj[1] = enabled;
    obj[2] = isFreemium;
    obj[3] = 0;
    if (enabled) {
      enabled = isFreemium;
    }
    if (enabled) {
      enabled = !isPremiumExactlyResult;
    }
    obj[4] = enabled;
    return obj;
  } else if (isPremiumExactlyResult) {
    let num = MAX_FAVORITE_CHANNELS;
  } else {
    num = 0;
    if (isFreemium) {
      num = FREE_FAVORITE_LIMIT.FREE_FAVORITE_LIMIT;
    }
  }
}
let result = require("set").fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export { useFavoritesAccess };
export const getFavoritesAccess = function getFavoritesAccess() {
  let obj = useFavoritesGuildConfig;
  const favoritesGuildConfig = obj.getFavoritesGuildConfig({ location: "getFavoritesAccess" });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  const isPremiumExactlyResult = isPremiumAtLeastDefault.isPremiumExactly(currentUser.getCurrentUser(), PremiumTypes.TIER_2);
  let tmp5 = enabled;
  if (enabled) {
    let tmp6 = isPremiumExactlyResult;
    if (!isPremiumExactlyResult) {
      tmp6 = isFreemium;
    }
    tmp5 = tmp6;
  }
  if (!tmp5) {
    obj = { hasAccess: null, isExperimentEnabled: null, isFreemium: null, favoriteLimit: null, canUpsellFavoriteLimit: null };
    obj[0] = tmp5;
    obj[1] = enabled;
    obj[2] = isFreemium;
    obj[3] = 0;
    if (enabled) {
      enabled = isFreemium;
    }
    if (enabled) {
      enabled = !isPremiumExactlyResult;
    }
    obj[4] = enabled;
    return obj;
  } else if (isPremiumExactlyResult) {
    let num = MAX_FAVORITE_CHANNELS;
  } else {
    num = 0;
    if (isFreemium) {
      num = FREE_FAVORITE_LIMIT.FREE_FAVORITE_LIMIT;
    }
  }
};
export const useFavoritesLimitUpsell = function useFavoritesLimitUpsell() {
  ({ canUpsellFavoriteLimit, favoriteLimit } = useFavoritesAccess("useFavoritesLimitUpsell"));
  const tmp = useFavoritesAccess("useFavoritesLimitUpsell");
  const items = [closure_5];
  const favoriteCount = initialize.useStateFromStores(items, () => favoritesCountAgainstLimit.getFavoritesCountAgainstLimit());
  if (shouldShowUpsell) {
    shouldShowUpsell = true;
  }
  const isAtLimit = favoriteLimit > 0 && favoriteCount >= favoriteLimit;
  return { shouldShowUpsell, favoriteCount, favoriteLimit, isAtLimit };
};
export const useFavorites = function useFavorites() {
  const items = [closure_5];
  return initialize.useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
};
export const useFavorite = function useFavorite(arg0) {
  const _require = arg0;
  const items = [closure_5];
  return _require(586).useStateFromStores(items, () => closure_1_5.getFavorite(closure_0));
};
export const useFavoritedChannelIds = function useFavoritedChannelIds() {
  const items = [closure_5];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
  const obj = initialize;
  return DISCORD_EPOCHDefault.keys(stateFromStoresObject);
};
export const getFavoritesCategories = function getFavoritesCategories(favoriteChannels) {
  if (favoriteChannels === undefined) {
    favoriteChannels = favoriteChannels.getFavoriteChannels();
  }
  const items = [{ id: null, name: "" }];
  for (const key10010 in favoriteChannels) {
    let tmp5 = key10010;
    let tmp6 = favoriteChannels[key10010];
    let tmp7 = favoriteChannels;
    let tmp8 = dependencyMap;
    if (tmp6.type !== favoriteChannels(1305).FavoriteChannelType.CATEGORY) {
      continue;
    } else {
      let obj = { id: null, name: null };
      ({ id: obj[0], nickname } = tmp6);
      if (nickname == null) {
        nickname = "";
      }
      obj[1] = nickname;
      let arr = items.push(obj);
      continue;
    }
    continue;
  }
  const sorted = items.sort((arg0, arg1) => {
    let num;
    if (favoriteChannels[arg0.id] != null) {
      num = tmp2.order;
    }
    if (num == null) {
      num = 0;
    }
    let num2;
    if (favoriteChannels[arg1.id] != null) {
      num2 = tmp3.order;
    }
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  });
  return items;
};
export const useIsFavoritesGuildSelected = function useIsFavoritesGuildSelected() {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  const obj = initialize;
  return getFavoritesAwareGuildName.isFavoritesGuildId(stateFromStores);
};
export const useFavoritesAwareChannel = function useFavoritesAwareChannel(arg0, FavoritesGuildActionSheet) {
  let tmp = arg0;
  const _require = arg0;
  const items = [closure_3];
  const stateFromStores = _require(586).useStateFromStores(items, () => guildId.getGuildId());
  const obj = _require(586);
  const obj2 = _require(1911);
  _require(586);
  [][0] = arg0;
  if (!isFavoritesGuildIdResult) {
    if (tmp == null) {
      tmp = null;
    }
    let tmp7 = tmp;
  } else {
    tmp7 = null;
    if (useFavoritesAccess(FavoritesGuildActionSheet).hasAccess) {
      tmp7 = null;
      if (tmp5) {
        let isCategoryResult;
        if (tmp != null) {
          isCategoryResult = tmp.isCategory();
        }
        tmp7 = null;
      }
    }
  }
  return tmp7;
};