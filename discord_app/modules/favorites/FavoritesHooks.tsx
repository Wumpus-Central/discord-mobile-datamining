// === Module 10793: FavoritesHooks ===

// Module 10793 (FavoritesHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1211 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1991 */;
import FavoritesUtils from "FavoritesUtils" /* 4846 */;
import FavoritesLimits from "FavoritesLimits" /* 10794 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4992 */;
import UserStore from "UserStore" /* 1392 */;
import FavoriteStore from "FavoriteStore" /* 4824 */;

const require = globalThis.__r;

require = fn;
const MAX_FAVORITE_CHANNELS = fn(4834).MAX_FAVORITE_CHANNELS;
const PremiumTypes = fn(1394).PremiumTypes;
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesLimits() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function o() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
    if (isPremiumExactlyResult) {
      let FREE_FAVORITE_LIMIT = MAX_FAVORITE_CHANNELS;
    } else {
      FREE_FAVORITE_LIMIT = FavoritesLimits.FREE_FAVORITE_LIMIT;
    }
    const obj2 = { favoriteLimit: FREE_FAVORITE_LIMIT, canUpsellFavoriteLimit: !isPremiumExactlyResult };
    cResult[2] = stateFromStores;
    cResult[3] = obj2;
  } else {
    return cResult[3];
  }
  const tmpResult = initialize;
}) : (function useFavoritesLimits() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    let FREE_FAVORITE_LIMIT = MAX_FAVORITE_CHANNELS;
  } else {
    FREE_FAVORITE_LIMIT = FavoritesLimits.FREE_FAVORITE_LIMIT;
  }
  return { favoriteLimit: FREE_FAVORITE_LIMIT, canUpsellFavoriteLimit: !isPremiumExactlyResult };
});
fn(558);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavorites() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function a() {
      return favoriteChannels.getFavoriteChannels();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStoresObject(tmp4, tmp5);
}) : (function useFavorites() {
  const items = [FavoriteStore];
  return initialize.useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
});
let closure_9 = tmp3;
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesLimitUpsell() {
  const cResult = c.c(7);
  ({ canUpsellFavoriteLimit, favoriteLimit } = closure_8());
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function a() {
      return favoritesCountAgainstLimit.getFavoritesCountAgainstLimit();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp4 = closure_8();
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (canUpsellFavoriteLimit) {
    canUpsellFavoriteLimit = true;
  }
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === favoriteLimit) {
      if (cResult[4] === canUpsellFavoriteLimit) {
        if (cResult[5] === tmp9) {
          let tmp10 = cResult[6];
        }
        return tmp10;
      }
    }
  }
  const obj2 = { shouldShowUpsell: canUpsellFavoriteLimit, favoriteCount: stateFromStores, favoriteLimit, isAtLimit: stateFromStores >= favoriteLimit };
  cResult[2] = stateFromStores;
  cResult[3] = favoriteLimit;
  cResult[4] = canUpsellFavoriteLimit;
  cResult[5] = stateFromStores >= favoriteLimit;
  cResult[6] = obj2;
  tmp10 = obj2;
  const tmpResult = initialize;
}) : (function useFavoritesLimitUpsell() {
  ({ canUpsellFavoriteLimit, favoriteLimit } = closure_8());
  const tmp = closure_8();
  const items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(items, () => favoritesCountAgainstLimit.getFavoritesCountAgainstLimit());
  if (canUpsellFavoriteLimit) {
    canUpsellFavoriteLimit = true;
  }
  return { shouldShowUpsell: canUpsellFavoriteLimit, favoriteCount: stateFromStores, favoriteLimit, isAtLimit: stateFromStores >= favoriteLimit };
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavorite(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return FavoriteStore.getFavorite(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useFavorite(arg0) {
  _require = arg0;
  const items = [FavoriteStore];
  return require("initialize").useStateFromStores(items, () => FavoriteStore.getFavorite(closure_0));
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFavoritesGuildSelected() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function o() {
      return guildId.getGuildId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const isFavoritesGuildIdResult = FavoritesUtils.isFavoritesGuildId(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isFavoritesGuildIdResult;
    let tmp8 = isFavoritesGuildIdResult;
    const tmpResult2 = FavoritesUtils;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function useIsFavoritesGuildSelected() {
  const items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  return FavoritesUtils.isFavoritesGuildId(stateFromStores);
});
let closure_10 = tmp6;
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritedChannelIds() {
  const cResult = c.c(2);
  const tmp3 = closure_9();
  if (cResult[0] !== tmp3) {
    const keys = SnowflakeUtilsDefault.keys(tmp3);
    cResult[0] = tmp3;
    cResult[1] = keys;
    let tmp4 = keys;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useFavoritedChannelIds() {
  const tmp = closure_9();
  return SnowflakeUtilsDefault.keys(tmp);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export const getFavoritesLimits = function getFavoritesLimits() {
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  if (isPremiumExactlyResult) {
    let FREE_FAVORITE_LIMIT = MAX_FAVORITE_CHANNELS;
  } else {
    FREE_FAVORITE_LIMIT = FavoritesLimits.FREE_FAVORITE_LIMIT;
  }
  return { favoriteLimit: FREE_FAVORITE_LIMIT, canUpsellFavoriteLimit: !isPremiumExactlyResult };
};
export const useFavoritesLimitUpsell = tmp2;
export const useFavorites = tmp3;
export const useFavorite = tmp4;
export const useFavoritedChannelIds = tmp5;
export const getFavoritesCategories = function getFavoritesCategories() {
  if (favoriteChannels === undefined) {
    favoriteChannels = FavoriteStore.getFavoriteChannels();
  }
  const items = [{ id: null, name: "" }];
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
};
export const useIsFavoritesGuildSelected = tmp6;
export const useFavoritesAwareChannel = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesAwareChannel(arg0) {
  let tmp = arg0;
  _require = arg0;
  const cResult = require("c").c(4);
  const obj = require("c");
  const tmp2 = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp) {
    const fn = function s() {
      let result = null != closure_0;
      if (result) {
        result = FavoriteStore.isChannelOrParentFavorited(tmp);
      }
      return result;
    };
    const items1 = [tmp];
    cResult[1] = tmp;
    cResult[2] = fn;
    cResult[3] = items1;
  }
  tmp2(504);
  if (!tmp5) {
    if (tmp == null) {
      tmp = null;
    }
    let tmp13 = tmp;
  } else {
    tmp13 = null;
    if (tmp11) {
      if (tmp != null) {
        tmp.isCategory();
      }
      tmp13 = null;
    }
  }
  return tmp13;
}) : (function useFavoritesAwareChannel(arg0) {
  let tmp = arg0;
  _require = arg0;
  require("initialize");
  [][0] = arg0;
  if (!tmp2) {
    if (tmp == null) {
      tmp = null;
    }
    let tmp6 = tmp;
  } else {
    tmp6 = null;
    if (tmp4) {
      let isCategoryResult;
      if (tmp != null) {
        isCategoryResult = tmp.isCategory();
      }
      tmp6 = null;
    }
  }
  return tmp6;
});