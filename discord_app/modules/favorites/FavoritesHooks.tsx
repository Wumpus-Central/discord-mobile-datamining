// === Module 10312: FavoritesHooks ===

// Module 10312 (FavoritesHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1989 */;
import FavoritesUtils from "FavoritesUtils" /* 2090 */;
import FavoritesLimits from "FavoritesLimits" /* 10313 */;
import FavoritesGuildExperiment from "FavoritesGuildExperiment" /* 10314 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import UserStore from "UserStore" /* 1390 */;
import FavoriteStore from "FavoriteStore" /* 2068 */;

const require = globalThis.__r;

require = fn;
const MAX_FAVORITE_CHANNELS = fn(2078).MAX_FAVORITE_CHANNELS;
const PremiumTypes = fn(1392).PremiumTypes;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesAccess(arg0) {
  const cResult = c.c(8);
  let str = "useFavoritesAccess";
  if (undefined !== arg0) {
    str = arg0;
  }
  if (cResult[0] !== str) {
    const obj2 = { location: str };
    cResult[0] = str;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const favoritesGuildConfig = FavoritesGuildExperiment.useFavoritesGuildConfig(tmp4);
  ({ enabled, isFreemium } = favoritesGuildConfig);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp7 = fn;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = FavoritesGuildExperiment;
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === enabled) {
      if (cResult[6] === isFreemium) {
        let tmp10 = cResult[7];
      }
      return tmp10;
    }
  }
  const tmpResult2 = initialize;
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  let tmp12 = enabled;
  if (enabled) {
    let tmp13 = isPremiumExactlyResult;
    if (!isPremiumExactlyResult) {
      tmp13 = isFreemium;
    }
    tmp12 = tmp13;
  }
  if (!tmp12) {
    const obj3 = { hasAccess: tmp12, isExperimentEnabled: enabled, isFreemium, favoriteLimit: 0, canUpsellFavoriteLimit: null };
    let tmp15 = enabled;
    if (enabled) {
      tmp15 = isFreemium;
    }
    if (tmp15) {
      tmp15 = !isPremiumExactlyResult;
    }
    obj3.canUpsellFavoriteLimit = tmp15;
    cResult[4] = stateFromStores;
    cResult[5] = enabled;
    cResult[6] = isFreemium;
    cResult[7] = obj3;
    tmp10 = obj3;
  } else if (isPremiumExactlyResult) {
  }
}) : (function useFavoritesAccess() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "useFavoritesAccess";
  }
  const favoritesGuildConfig = FavoritesGuildExperiment.useFavoritesGuildConfig({ location: str });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  let tmp6 = enabled;
  if (enabled) {
    let tmp7 = isPremiumExactlyResult;
    if (!isPremiumExactlyResult) {
      tmp7 = isFreemium;
    }
    tmp6 = tmp7;
  }
  if (!tmp6) {
    const obj4 = { hasAccess: tmp6, isExperimentEnabled: enabled, isFreemium, favoriteLimit: 0, canUpsellFavoriteLimit: null };
    if (enabled) {
      enabled = isFreemium;
    }
    if (enabled) {
      enabled = !isPremiumExactlyResult;
    }
    obj4.canUpsellFavoriteLimit = enabled;
    return obj4;
  } else if (isPremiumExactlyResult) {
  }
});
let closure_8 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavorites() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function s() {
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
let closure_9 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesLimitUpsell() {
  const cResult = c.c(7);
  ({ canUpsellFavoriteLimit, favoriteLimit } = closure_8("useFavoritesLimitUpsell"));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    const fn = function s() {
      return favoritesCountAgainstLimit.getFavoritesCountAgainstLimit();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp4 = closure_8("useFavoritesLimitUpsell");
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
  const obj2 = { shouldShowUpsell: canUpsellFavoriteLimit, favoriteCount: stateFromStores, favoriteLimit, isAtLimit: favoriteLimit > 0 && stateFromStores >= favoriteLimit };
  cResult[2] = stateFromStores;
  cResult[3] = favoriteLimit;
  cResult[4] = canUpsellFavoriteLimit;
  cResult[5] = favoriteLimit > 0 && stateFromStores >= favoriteLimit;
  cResult[6] = obj2;
  tmp10 = obj2;
  const tmpResult = initialize;
}) : (function useFavoritesLimitUpsell() {
  ({ canUpsellFavoriteLimit, favoriteLimit } = closure_8("useFavoritesLimitUpsell"));
  const tmp = closure_8("useFavoritesLimitUpsell");
  const items = [FavoriteStore];
  const stateFromStores = initialize.useStateFromStores(items, () => favoritesCountAgainstLimit.getFavoritesCountAgainstLimit());
  if (canUpsellFavoriteLimit) {
    canUpsellFavoriteLimit = true;
  }
  return { shouldShowUpsell: canUpsellFavoriteLimit, favoriteCount: stateFromStores, favoriteLimit, isAtLimit: favoriteLimit > 0 && stateFromStores >= favoriteLimit };
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavorite(arg0) {
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
    const fn = function o() {
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
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsFavoritesGuildSelected() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function a() {
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
let closure_10 = tmp7;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritedChannelIds() {
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

export const useFavoritesAccess = tmp2;
export const getFavoritesAccess = function getFavoritesAccess() {
  const favoritesGuildConfig = FavoritesGuildExperiment.getFavoritesGuildConfig({ location: "getFavoritesAccess" });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  let tmp5 = enabled;
  if (enabled) {
    let tmp6 = isPremiumExactlyResult;
    if (!isPremiumExactlyResult) {
      tmp6 = isFreemium;
    }
    tmp5 = tmp6;
  }
  if (!tmp5) {
    const obj3 = { hasAccess: tmp5, isExperimentEnabled: enabled, isFreemium, favoriteLimit: 0, canUpsellFavoriteLimit: null };
    if (enabled) {
      enabled = isFreemium;
    }
    if (enabled) {
      enabled = !isPremiumExactlyResult;
    }
    obj3.canUpsellFavoriteLimit = enabled;
    return obj3;
  } else if (isPremiumExactlyResult) {
  }
};
export const useFavoritesLimitUpsell = tmp3;
export const useFavorites = tmp4;
export const useFavorite = tmp5;
export const useFavoritedChannelIds = tmp6;
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
export const useIsFavoritesGuildSelected = tmp7;
export const useFavoritesAwareChannel = ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesAwareChannel(arg0, arg1) {
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
    const fn = function n() {
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
    if (closure_8(arg1).hasAccess) {
      tmp13 = null;
      if (tmp11) {
        if (tmp != null) {
          tmp.isCategory();
        }
        tmp13 = null;
      }
    }
  }
  return tmp13;
}) : (function useFavoritesAwareChannel(arg0, arg1) {
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
    if (closure_8(arg1).hasAccess) {
      tmp6 = null;
      if (tmp4) {
        let isCategoryResult;
        if (tmp != null) {
          isCategoryResult = tmp.isCategory();
        }
        tmp6 = null;
      }
    }
  }
  return tmp6;
});