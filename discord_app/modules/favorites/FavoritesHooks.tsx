// discord_app/modules/favorites/FavoritesHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import PremiumTypeUtilsDefault from "../../utils/PremiumTypeUtils.tsx";
import FavoritesUtils from "FavoritesUtils.tsx";
import FavoritesGuildExperiment from "FavoritesGuildExperiment.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import FavoriteStore from "FavoriteStore.tsx";

const FavoritesLimits = tmp(10225);
require = fn;
function useFavoritesAccess(FavoritesGuildActionSheet) {
  let str = FavoritesGuildActionSheet;
  if (FavoritesGuildActionSheet === undefined) {
    str = "useFavoritesAccess";
  }
  let obj = FavoritesGuildExperiment;
  const favoritesGuildConfig = obj.useFavoritesGuildConfig({ location: str });
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
    obj = { hasAccess: tmp6, isExperimentEnabled: enabled, isFreemium, favoriteLimit: 0, canUpsellFavoriteLimit: null };
    if (enabled) {
      enabled = isFreemium;
    }
    if (enabled) {
      enabled = !isPremiumExactlyResult;
    }
    obj.canUpsellFavoriteLimit = enabled;
    return obj;
  } else if (isPremiumExactlyResult) {
  }
}
const MAX_FAVORITE_CHANNELS = fn(1970).MAX_FAVORITE_CHANNELS;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export { useFavoritesAccess };
export const getFavoritesAccess = function getFavoritesAccess() {
  let obj = FavoritesGuildExperiment;
  const favoritesGuildConfig = obj.getFavoritesGuildConfig({ location: "getFavoritesAccess" });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  const isPremiumExactlyResult = PremiumTypeUtilsDefault.isPremiumExactly(
    UserStore.getCurrentUser(),
    PremiumTypes.TIER_2,
  );
  let tmp5 = enabled;
  if (enabled) {
    let tmp6 = isPremiumExactlyResult;
    if (!isPremiumExactlyResult) {
      tmp6 = isFreemium;
    }
    tmp5 = tmp6;
  }
  if (!tmp5) {
    obj = { hasAccess: tmp5, isExperimentEnabled: enabled, isFreemium, favoriteLimit: 0, canUpsellFavoriteLimit: null };
    if (enabled) {
      enabled = isFreemium;
    }
    if (enabled) {
      enabled = !isPremiumExactlyResult;
    }
    obj.canUpsellFavoriteLimit = enabled;
    return obj;
  } else if (isPremiumExactlyResult) {
  }
};
export const useFavoritesLimitUpsell = function useFavoritesLimitUpsell() {
  ({ canUpsellFavoriteLimit, favoriteLimit } = useFavoritesAccess("useFavoritesLimitUpsell"));
  let obj = initialize;
  const items = [FavoriteStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    favoritesCountAgainstLimit.getFavoritesCountAgainstLimit(),
  );
  if (canUpsellFavoriteLimit) {
    canUpsellFavoriteLimit = true;
  }
  obj = {
    shouldShowUpsell: canUpsellFavoriteLimit,
    favoriteCount: stateFromStores,
    favoriteLimit,
    isAtLimit: favoriteLimit > 0 && stateFromStores >= favoriteLimit,
  };
  return obj;
};
export const useFavorites = function useFavorites() {
  const items = [FavoriteStore];
  return initialize.useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
};
export const useFavorite = function useFavorite(arg0) {
  _require = arg0;
  const items = [FavoriteStore];
  return require("initialize").useStateFromStores(items, () => FavoriteStore.getFavorite(closure_0));
};
export const useFavoritedChannelIds = function useFavoritedChannelIds() {
  const items = [FavoriteStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () =>
    favoriteChannels.getFavoriteChannels(),
  );
  return SnowflakeUtilsDefault.keys(stateFromStoresObject);
};
export const getFavoritesCategories = function getFavoritesCategories(favoriteChannels) {
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
export const useIsFavoritesGuildSelected = function useIsFavoritesGuildSelected() {
  const items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  return FavoritesUtils.isFavoritesGuildId(stateFromStores);
};
export const useFavoritesAwareChannel = function useFavoritesAwareChannel(arg0, FavoritesGuildActionSheet) {
  let tmp = arg0;
  _require = arg0;
  const items = [SelectedGuildStore];
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
