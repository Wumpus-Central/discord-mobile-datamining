// === Module 10049: FavoritesHooks ===

// Module 10049 (FavoritesHooks)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumTypeUtilsDefault from "PremiumTypeUtils" /* 1976 */;
import FavoritesConstants from "FavoritesConstants" /* 2065 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import FavoritesLimits from "FavoritesLimits" /* 10050 */;
import FavoritesGuildExperiment from "FavoritesGuildExperiment" /* 10051 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import UserStore from "UserStore" /* 1377 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const MAX_FAVORITE_CHANNELS = FavoritesConstants.MAX_FAVORITE_CHANNELS;
const PremiumTypes = PremiumConstants.PremiumTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let currentUser;
  let enabled;
  let isFreemium;
  let tmp4;
  let tmp6;
  let tmp7;
  const obj = react;
  const cResult = obj.c(8);
  let str = "useFavoritesAccess";
  if (undefined !== arg0) {
    str = arg0;
  }
  if (cResult[0] !== str) {
    const obj2 = { location: str };
    cResult[0] = str;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = FavoritesGuildExperiment;
  const favoritesGuildConfig = tmpResult.useFavoritesGuildConfig(tmp4);
  ({ enabled, isFreemium } = favoritesGuildConfig);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function l() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items;
    cResult[3] = fn;
    tmp7 = fn;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores = tmpResult2.useStateFromStores(tmp6, tmp7);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === enabled) {
      let tmp10;
      if (cResult[6] === isFreemium) {
        tmp10 = cResult[7];
      }
      return tmp10;
    }
  }
  const obj5 = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj5.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  let tmp12 = enabled;
  if (tmp12) {
    tmp12 = isPremiumExactlyResult || isFreemium;
  }
  let num5 = 0;
  if (tmp12) {
    let num6;
    if (isPremiumExactlyResult) {
      num6 = MAX_FAVORITE_CHANNELS;
    } else {
      num6 = 0;
      if (isFreemium) {
        num6 = FavoritesLimits.FREE_FAVORITE_LIMIT;
      }
    }
    num5 = num6;
  }
  const obj3 = { hasAccess: tmp12, isExperimentEnabled: enabled, isFreemium, favoriteLimit: num5, canUpsellFavoriteLimit: enabled && isFreemium && !isPremiumExactlyResult };
  cResult[4] = stateFromStores;
  cResult[5] = enabled;
  cResult[6] = isFreemium;
  cResult[7] = obj3;
  tmp10 = obj3;
}) : (() => {
  let currentUser;
  let enabled;
  let isFreemium;
  let str = arg0;
  if (arg0 === undefined) {
    str = "useFavoritesAccess";
  }
  const obj = FavoritesGuildExperiment;
  const favoritesGuildConfig = obj.useFavoritesGuildConfig({ location: str });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  const items = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj3.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  let tmp6 = enabled;
  if (tmp6) {
    tmp6 = isPremiumExactlyResult || isFreemium;
  }
  let num = 0;
  if (tmp6) {
    let num2;
    if (isPremiumExactlyResult) {
      num2 = MAX_FAVORITE_CHANNELS;
    } else {
      num2 = 0;
      if (isFreemium) {
        num2 = FavoritesLimits.FREE_FAVORITE_LIMIT;
      }
    }
    num = num2;
  }
  const obj4 = { hasAccess: tmp6, isExperimentEnabled: enabled, isFreemium, favoriteLimit: num, canUpsellFavoriteLimit: enabled };
  if (enabled) {
    enabled = isFreemium;
  }
  if (enabled) {
    enabled = !isPremiumExactlyResult;
  }
  return obj4;
});
let closure_8 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let canUpsellFavoriteLimit;
  let favoriteLimit;
  let favoritesCountAgainstLimit;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(7);
  ({ canUpsellFavoriteLimit, favoriteLimit } = closure_8("useFavoritesLimitUpsell"));
  closure_8("useFavoritesLimitUpsell");
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (canUpsellFavoriteLimit) {
    canUpsellFavoriteLimit = true;
  }
  if (cResult[2] === stateFromStores) {
    if (cResult[3] === favoriteLimit) {
      if (cResult[4] === canUpsellFavoriteLimit) {
        let tmp10;
        if (cResult[5] === (favoriteLimit > 0 && stateFromStores >= favoriteLimit)) {
          tmp10 = cResult[6];
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
}) : (() => {
  let canUpsellFavoriteLimit;
  let favoriteLimit;
  let favoritesCountAgainstLimit;
  ({ canUpsellFavoriteLimit, favoriteLimit } = closure_8("useFavoritesLimitUpsell"));
  closure_8("useFavoritesLimitUpsell");
  const items = [FavoriteStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => favoritesCountAgainstLimit.getFavoritesCountAgainstLimit());
  if (canUpsellFavoriteLimit) {
    canUpsellFavoriteLimit = true;
  }
  return { shouldShowUpsell: canUpsellFavoriteLimit, favoriteCount: stateFromStores, favoriteLimit, isAtLimit: favoriteLimit > 0 && stateFromStores >= favoriteLimit };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let favoriteChannels;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
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
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresObject(tmp4, tmp5);
}) : (() => {
  let favoriteChannels;
  const items = [FavoriteStore];
  const obj = get_initialized;
  return obj.useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
});
let closure_9 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return FavoriteStore.getFavorite(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [FavoriteStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => FavoriteStore.getFavorite(closure_0));
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(2);
  const tmp3 = closure_9();
  if (cResult[0] !== tmp3) {
    const obj2 = SnowflakeUtilsDefault;
    const keys = obj2.keys(tmp3);
    cResult[0] = tmp3;
    cResult[1] = keys;
    tmp4 = keys;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  const tmp = closure_9();
  const obj = SnowflakeUtilsDefault;
  return obj.keys(tmp);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let guildId;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(4);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const tmpResult2 = FavoritesUtils;
    const isFavoritesGuildIdResult = tmpResult2.isFavoritesGuildId(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isFavoritesGuildIdResult;
    tmp8 = isFavoritesGuildIdResult;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  let guildId;
  const items = [SelectedGuildStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  const obj2 = FavoritesUtils;
  return obj2.isFavoritesGuildId(stateFromStores);
});
let closure_10 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let tmp13;
  let tmp = arg0;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp5 = closure_10();
  const hasAccess = closure_8(arg1).hasAccess;
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
      const result = null != closure_0 && FavoriteStore.isChannelOrParentFavorited(tmp);
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
    tmp13 = tmp;
  } else {
    tmp13 = null;
    if (hasAccess) {
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
}) : ((arg0, arg1) => {
  let closure_0;
  let tmp6;
  let tmp = arg0;
  _require = arg0;
  const tmp2 = closure_10();
  const hasAccess = closure_8(arg1).hasAccess;
  require("get initialized");
  [][0] = arg0;
  if (!tmp2) {
    if (tmp == null) {
      tmp = null;
    }
    tmp6 = tmp;
  } else {
    tmp6 = null;
    if (hasAccess) {
      tmp6 = null;
      if (tmp4) {
        if (tmp != null) {
          tmp.isCategory();
        }
        tmp6 = null;
      }
    }
  }
  return tmp6;
});
let result = size.fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export const useFavoritesAccess = tmp2;
export const getFavoritesAccess = function getFavoritesAccess() {
  let enabled;
  let isFreemium;
  const obj = FavoritesGuildExperiment;
  const favoritesGuildConfig = obj.getFavoritesGuildConfig({ location: "getFavoritesAccess" });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  const obj2 = PremiumTypeUtilsDefault;
  const isPremiumExactlyResult = obj2.isPremiumExactly(UserStore.getCurrentUser(), PremiumTypes.TIER_2);
  let tmp5 = enabled;
  if (tmp5) {
    tmp5 = isPremiumExactlyResult || isFreemium;
  }
  let num = 0;
  if (tmp5) {
    let num2;
    if (isPremiumExactlyResult) {
      num2 = MAX_FAVORITE_CHANNELS;
    } else {
      num2 = 0;
      if (isFreemium) {
        num2 = FavoritesLimits.FREE_FAVORITE_LIMIT;
      }
    }
    num = num2;
  }
  const obj3 = { hasAccess: tmp5, isExperimentEnabled: enabled, isFreemium, favoriteLimit: num, canUpsellFavoriteLimit: enabled };
  if (enabled) {
    enabled = isFreemium;
  }
  if (enabled) {
    enabled = !isPremiumExactlyResult;
  }
  return obj3;
};
export const useFavoritesLimitUpsell = tmp3;
export const useFavorites = tmp4;
export const useFavorite = tmp5;
export const useFavoritedChannelIds = tmp6;
export const getFavoritesCategories = function getFavoritesCategories() {
  let favoriteChannels;
  let nickname;
  if (favoriteChannels === undefined) {
    favoriteChannels = FavoriteStore.getFavoriteChannels();
  }
  const items = [{ id: null, name: "" }];
  for (const key10010 in favoriteChannels) {
    let tmp6 = favoriteChannels[key10010];
    if (tmp6.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
      continue;
    } else {
      let obj = { id: null, name: nickname };
      ({ id: obj.id, nickname } = tmp6);
      let push = items.push;
      if (nickname == null) {
        nickname = "";
      }
      let arr = push(obj);
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
export const useFavoritesAwareChannel = tmp8;