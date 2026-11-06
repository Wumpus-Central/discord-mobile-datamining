// === Module 10968: FavoritesHooks ===

// Module 10968 (FavoritesHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 2107 */;
import FavoritesUtils from "FavoritesUtils" /* 5044 */;
import FavoritesLimits from "FavoritesLimits" /* 10969 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5201 */;
import UserStore from "UserStore" /* 1385 */;
import FavoriteStore from "FavoriteStore" /* 5022 */;

const require = globalThis.__r;

require = fn;
const MAX_FAVORITE_CHANNELS = fn(5032).MAX_FAVORITE_CHANNELS;
const PremiumTypes = fn(1387).PremiumTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export function getFavoritesLimits() {
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    let FREE_FAVORITE_LIMIT = MAX_FAVORITE_CHANNELS;
  } else {
    FREE_FAVORITE_LIMIT = FavoritesLimits.FREE_FAVORITE_LIMIT;
  }
  return { favoriteLimit: FREE_FAVORITE_LIMIT, canUpsellFavoriteLimit: !isPremiumExactlyResult };
}
export function useFavoritesLimitUpsell() {
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    let FREE_FAVORITE_LIMIT = MAX_FAVORITE_CHANNELS;
  } else {
    FREE_FAVORITE_LIMIT = FavoritesLimits.FREE_FAVORITE_LIMIT;
  }
  let flag = !isPremiumExactlyResult;
  const items1 = [FavoriteStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => favoritesCountAgainstLimit.getFavoritesCountAgainstLimit());
  if (!isPremiumExactlyResult) {
    flag = true;
  }
  return { shouldShowUpsell: flag, favoriteCount: stateFromStores1, favoriteLimit: FREE_FAVORITE_LIMIT, isAtLimit: stateFromStores1 >= FREE_FAVORITE_LIMIT };
}
export function useFavorites() {
  items = [FavoriteStore];
  return initialize.useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
}
export function useFavorite(arg0) {
  _require = arg0;
  items = [FavoriteStore];
  return require("initialize").useStateFromStores(items, () => FavoriteStore.getFavorite(closure_0));
}
export function useFavoritedChannelIds() {
  items = [FavoriteStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
  return SnowflakeUtilsDefault.keys(stateFromStoresObject);
}
export function getFavoritesCategories() {
  if (favoriteChannels === undefined) {
    favoriteChannels = FavoriteStore.getFavoriteChannels();
  }
  items = [{ id: null, name: "" }];
  for (const key10010 in favoriteChannels) {
    let tmp6 = favoriteChannels[key10010];
    if (tmp6.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
      continue;
    } else {
      let obj = { id: null, name: null };
      ({ id: obj.id, nickname } = tmp6);
      if (nickname == null) {
        nickname = "";
      }
      obj.name = nickname;
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
}
export function useIsFavoritesGuildSelected() {
  items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  return FavoritesUtils.isFavoritesGuildId(stateFromStores);
}
export function useFavoritesAwareChannel(arg0) {
  let tmp = arg0;
  _require = arg0;
  items = [SelectedGuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => guildId.getGuildId());
  const obj = require("initialize");
  const obj2 = require("FavoritesUtils");
  require("initialize");
  [][0] = arg0;
  if (!isFavoritesGuildIdResult) {
    if (tmp == null) {
      tmp = null;
    }
    let tmp7 = tmp;
  } else {
    tmp7 = null;
    if (tmp5) {
      let isCategoryResult;
      if (tmp != null) {
        isCategoryResult = tmp.isCategory();
      }
      tmp7 = null;
    }
  }
  return tmp7;
}