// discord_app/modules/favorites/FavoritesHooks.tsx
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import initializeFromUserSettings from "initializeFromUserSettings";
import { useFavoritesNotificationStore as closure_6 } from "useFavoritesNotificationStore";
import { MAX_FAVORITE_CHANNELS } from "date";
import { PremiumTypes } from "GuildFeatures";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { FREE_FAVORITE_LIMIT } from "../../../discord_common/js/shared/shared-constants/FavoritesLimits.tsx";
import { isPremiumAtLeast } from "../../utils/PremiumTypeUtils.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
import { useFavoritesGuildConfig } from "FavoritesGuildExperiment.tsx";
import { getFavoritesAwareGuildName } from "FavoritesUtils.tsx";

const require = arg1;
function useFavoritesAccess(FavoritesGuildChannelList) {
  let enabled;
  let isFreemium;
  let str = FavoritesGuildChannelList;
  if (FavoritesGuildChannelList === undefined) {
    str = "useFavoritesAccess";
  }
  let obj = useFavoritesGuildConfig;
  const favoritesGuildConfig = obj.useFavoritesGuildConfig({ location: str });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  let tmp4 = undefined !== isFreemium;
  if (tmp4) {
    tmp4 = isFreemium;
  }
  const items = [mergeGuildAvatar];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmpResult = initialize;
  const isPremiumExactlyResult = isPremiumAtLeast.isPremiumExactly(stateFromStores, PremiumTypes.TIER_2);
  let tmp7 = enabled;
  if (enabled) {
    let tmp8 = isPremiumExactlyResult;
    if (!isPremiumExactlyResult) {
      tmp8 = tmp4;
    }
    tmp7 = tmp8;
  }
  if (!tmp7) {
    obj = { hasAccess: null, isExperimentEnabled: null, isFreemium: null, hasHigherPrivileges: null, favoriteLimit: null };
    obj[0] = tmp7;
    obj[1] = enabled;
    obj[2] = tmp4;
    obj[3] = favoritesGuildConfig.hasHigherPrivileges;
    obj[4] = 0;
    return obj;
  } else if (isPremiumExactlyResult) {
    let num = MAX_FAVORITE_CHANNELS;
  } else {
    num = 0;
    if (tmp4) {
      num = tmp(9631).FREE_FAVORITE_LIMIT;
    }
  }
}
const result = require("initializeFromUserSettings").fileFinishedImporting("modules/favorites/FavoritesHooks.tsx");

export { useFavoritesAccess };
export const getFavoritesAccess = function getFavoritesAccess() {
  let enabled;
  let isFreemium;
  let obj = useFavoritesGuildConfig;
  const favoritesGuildConfig = obj.getFavoritesGuildConfig({ location: "getFavoritesAccess" });
  ({ enabled, isFreemium } = favoritesGuildConfig);
  let tmp4 = undefined !== isFreemium;
  if (tmp4) {
    tmp4 = isFreemium;
  }
  const isPremiumExactlyResult = isPremiumAtLeast.isPremiumExactly(currentUser.getCurrentUser(), PremiumTypes.TIER_2);
  let tmp6 = enabled;
  if (enabled) {
    let tmp7 = isPremiumExactlyResult;
    if (!isPremiumExactlyResult) {
      tmp7 = tmp4;
    }
    tmp6 = tmp7;
  }
  if (!tmp6) {
    obj = { hasAccess: null, isExperimentEnabled: null, isFreemium: null, hasHigherPrivileges: null, favoriteLimit: null };
    obj[0] = tmp6;
    obj[1] = enabled;
    obj[2] = tmp4;
    obj[3] = favoritesGuildConfig.hasHigherPrivileges;
    obj[4] = 0;
    return obj;
  } else if (isPremiumExactlyResult) {
    let num = MAX_FAVORITE_CHANNELS;
  } else {
    num = 0;
    if (tmp4) {
      num = FREE_FAVORITE_LIMIT.FREE_FAVORITE_LIMIT;
    }
  }
};
export const useFavorites = function useFavorites() {
  const items = [initializeFromUserSettings];
  return initialize.useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
};
export const useFavorite = function useFavorite(arg0) {
  const _require = arg0;
  const items = [initializeFromUserSettings];
  return _initialize.useStateFromStores(items, () => outer1_5.getFavorite(closure_0));
};
export const useFavoritedChannelIds = function useFavoritedChannelIds() {
  const items = [initializeFromUserSettings];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => favoriteChannels.getFavoriteChannels());
  const obj = initialize;
  return DISCORD_EPOCH.keys(stateFromStoresObject);
};
export const getFavoritesCategories = function getFavoritesCategories(favoriteChannels) {
  let nickname;
  if (favoriteChannels === undefined) {
    favoriteChannels = favoriteChannels.getFavoriteChannels();
  }
  const items = [{ id: null, name: "" }];
  for (const key10010 in favoriteChannels) {
    let tmp5 = key10010;
    let tmp6 = favoriteChannels[key10010];
    let tmp7 = favoriteChannels;
    let tmp8 = dependencyMap;
    if (tmp6.type !== favoriteChannels(1306).FavoriteChannelType.CATEGORY) {
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
export const useFavoritesCategories = function useFavoritesCategories() {
  let items = [initializeFromUserSettings];
  return initialize.useStateFromStores(items, () => {
    let nickname;
    let obj = favoriteChannels;
    favoriteChannels = favoriteChannels.getFavoriteChannels();
    favoriteChannels = undefined;
    if (favoriteChannels === undefined) {
      favoriteChannels = obj.getFavoriteChannels();
    }
    const items = [{ id: null, name: "" }];
    for (const key10011 in favoriteChannels) {
      let tmp4 = key10011;
      let tmp5 = favoriteChannels[key10011];
      let tmp6 = favoriteChannels;
      let tmp7 = table;
      if (tmp5.type !== favoriteChannels(table[11]).FavoriteChannelType.CATEGORY) {
        continue;
      } else {
        obj = { id: null, name: null };
        ({ id: obj2[0], nickname } = tmp5);
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
  });
};
export const useIsFavoritesGuildSelected = function useIsFavoritesGuildSelected() {
  const items = [handleConnectionOpen];
  const stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  const obj = initialize;
  return getFavoritesAwareGuildName.isFavoritesGuildId(stateFromStores);
};
export const useFavoritesAwareChannel = function useFavoritesAwareChannel(arg0, FavoritesGuildChannelList) {
  let tmp = arg0;
  const _require = arg0;
  const items = [handleConnectionOpen];
  const stateFromStores = _initialize.useStateFromStores(items, () => guildId.getGuildId());
  const obj = _initialize;
  let obj2 = _getFavoritesAwareGuildName;
  _initialize;
  [][0] = arg0;
  if (!isFavoritesGuildIdResult) {
    if (tmp == null) {
      tmp = null;
    }
    let tmp7 = tmp;
  } else {
    tmp7 = null;
    if (useFavoritesAccess(FavoritesGuildChannelList).hasAccess) {
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
export const useFavoriteAdded = function useFavoriteAdded() {
  return { favoriteAdded: callback((favoriteAdded) => favoriteAdded.favoriteAdded), notifyFavoriteAdded: callback((notifyFavoriteAdded) => notifyFavoriteAdded.notifyFavoriteAdded), clearFavoriteAdded: callback((clearFavoriteAdded) => clearFavoriteAdded.clearFavoriteAdded) };
};