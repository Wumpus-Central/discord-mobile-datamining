// === Module 8790: useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds ===

// Module 8790 (useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds)
import initialize from "initialize" /* 504 */;
import closure_2 from "noop" /* 19 */;
import closure_3 from "map" /* 8791 */;
import closure_4 from "initialize" /* 1915 */;
import closure_5 from "createUserWidgetFromServer" /* 7621 */;
import closure_6 from "createGuildRecordFromRust" /* 1979 */;
import closure_7 from "sortActivity" /* 4600 */;
import closure_8 from "handleUserSettingsStoreUpdate" /* 7228 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx");

export const useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
  userIds = userIds.userIds;
  let items = [closure_3, closure_8];
  const items1 = [userIds];
  return userIds(504).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = closure_1_3;
      let userOutbox = closure_1_3.getUserOutbox(tmp3);
      let entries;
      if (userOutbox != null) {
        entries = userOutbox.entries;
      }
      if (entries == null) {
        entries = [];
      }
      let tmp6 = entries;
      let tmp7 = entries;
      for (const item10019 of entries) {
        let tmp8 = item10019;
        if (null != item10019) {
          let tmp9 = userIds;
          let tmp10 = closure_1_1;
          let obj = userIds(closure_1_1[8]);
          let tmp11 = item10019;
          if (obj.isGamingLikeEntry(tmp8)) {
            let tmp12 = closure_1_8;
            let tmp13 = item10019;
            let applicationIdFromDetectableId = closure_1_8.getApplicationIdFromDetectableId(tmp8.extra.application_id);
            if (null != applicationIdFromDetectableId) {
              let tmp16 = applicationIdFromDetectableId;
              let arr = items.push(tmp15);
            }
          }
        }
        continue;
      }
      continue;
    }
    return items;
  }, items1);
};
export const useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds = function useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo) {
  const _require = memo;
  let items = [closure_5, closure_8];
  const items1 = [memo];
  return _require(504).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = closure_1_5;
      let mutualGuilds = closure_1_5.getMutualGuilds(tmp3);
      if (null != mutualGuilds) {
        let tmp7 = tmp6;
        let tmp8 = mutualGuilds;
        for (const item10020 of mutualGuilds) {
          let obj = closure_1_8;
          let tmp9 = item10020;
          let storefrontGuildIds = closure_1_8.getStorefrontGuildIds();
          if (storefrontGuildIds.has(item10020.guild.id)) {
            let tmp10 = item10020;
            let applicationIdFromGuildId = obj.getApplicationIdFromGuildId(tmp9.guild.id);
            if (null != applicationIdFromGuildId) {
              let tmp13 = applicationIdFromGuildId;
              let arr = items.push(tmp12);
            }
          }
          continue;
        }
      }
      continue;
    }
    return items;
  }, items1);
};
export const useUsersPlayingStorefrontEnabledGamesApplicationIds = function useUsersPlayingStorefrontEnabledGamesApplicationIds(userIds) {
  userIds = userIds.userIds;
  let stateFromStoresArray;
  let slayerStorefrontDevApplicationIdOverride;
  const items = [closure_7, closure_8];
  const items1 = [userIds];
  stateFromStoresArray = userIds(stateFromStoresArray[7]).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = closure_1_7;
      let activities = closure_1_7.getActivities(tmp3);
      let tmp6 = activities;
      let tmp7 = activities;
      for (const item10017 of activities) {
        if (null != item10017.application_id) {
          let tmp9 = closure_1_8;
          let tmp10 = item10017;
          let applicationIdFromDetectableId = closure_1_8.getApplicationIdFromDetectableId(tmp8.application_id);
          if (null != applicationIdFromDetectableId) {
            let tmp13 = applicationIdFromDetectableId;
            let arr = items.push(tmp12);
          }
        }
        continue;
      }
      continue;
    }
    return items;
  }, items1);
  const obj = userIds(stateFromStoresArray[7]);
  slayerStorefrontDevApplicationIdOverride = userIds(stateFromStoresArray[9]).useSlayerStorefrontDevApplicationIdOverride();
  const items2 = [stateFromStoresArray, slayerStorefrontDevApplicationIdOverride];
  return slayerStorefrontDevApplicationIdOverride.useMemo(() => {
    if (null != slayerStorefrontDevApplicationIdOverride) {
      const items = [];
      items[HermesBuiltin.arraySpread(stateFromStoresArray, 0)] = tmp;
      let tmp2 = items;
    } else {
      tmp2 = stateFromStoresArray;
    }
    return tmp2;
  }, items2);
};
export const useAreUsersPlayingStorefrontEnabledGames = function useAreUsersPlayingStorefrontEnabledGames(userIds) {
  userIds = userIds.userIds;
  let stateFromStoresArray;
  let slayerStorefrontDevApplicationIdOverride;
  let items = [closure_7, closure_8];
  const items1 = [userIds];
  stateFromStoresArray = userIds(stateFromStoresArray[7]).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = closure_1_7;
      let activities = closure_1_7.getActivities(tmp3);
      let tmp6 = activities;
      let tmp7 = activities;
      for (const item10017 of activities) {
        if (null != item10017.application_id) {
          let tmp9 = closure_1_8;
          let tmp10 = item10017;
          let applicationIdFromDetectableId = closure_1_8.getApplicationIdFromDetectableId(tmp8.application_id);
          if (null != applicationIdFromDetectableId) {
            let tmp13 = applicationIdFromDetectableId;
            let arr = items.push(tmp12);
          }
        }
        continue;
      }
      continue;
    }
    return items;
  }, items1);
  const obj = userIds(stateFromStoresArray[7]);
  slayerStorefrontDevApplicationIdOverride = userIds(stateFromStoresArray[9]).useSlayerStorefrontDevApplicationIdOverride();
  const items2 = [stateFromStoresArray, slayerStorefrontDevApplicationIdOverride];
  return slayerStorefrontDevApplicationIdOverride.useMemo(() => {
    if (null != slayerStorefrontDevApplicationIdOverride) {
      const items = [];
      items[HermesBuiltin.arraySpread(stateFromStoresArray, 0)] = tmp;
      let tmp2 = items;
    } else {
      tmp2 = stateFromStoresArray;
    }
    return tmp2;
  }, items2).length > 0;
};
export const useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds = function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
  let items = [closure_4, closure_8];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [];
    gamesSeen = gamesSeen.getGamesSeen(false, false);
    const iter = gamesSeen[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.id) {
        let tmp4 = applicationIdFromDetectableId;
        let tmp5 = nextResult;
        applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(tmp3.id);
        if (null != applicationIdFromDetectableId) {
          let tmp8 = applicationIdFromDetectableId;
          let arr = items.push(tmp7);
        }
      }
      continue;
    }
    return items;
  });
};
export const useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds = function useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds() {
  const items = [closure_4, closure_8];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [];
    const runningGames = closure_4.getRunningGames();
    const iter = runningGames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.id) {
        let tmp4 = closure_4;
        let tmp5 = nextResult;
        if (closure_4.isDetectionEnabled(tmp3)) {
          let tmp6 = applicationIdFromDetectableId;
          let tmp7 = nextResult;
          applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(tmp3.id);
          if (null != applicationIdFromDetectableId) {
            let tmp10 = applicationIdFromDetectableId;
            let arr = items.push(tmp9);
          }
        }
      }
      continue;
    }
    return items;
  }, []);
};
export const useIsCurrentUserPlayingSocialLayerStorefrontGames = function useIsCurrentUserPlayingSocialLayerStorefrontGames() {
  let items = [closure_4, closure_8];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [];
    const runningGames = closure_4.getRunningGames();
    const iter = runningGames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.id) {
        let tmp4 = closure_4;
        let tmp5 = nextResult;
        if (closure_4.isDetectionEnabled(tmp3)) {
          let tmp6 = applicationIdFromDetectableId;
          let tmp7 = nextResult;
          applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(tmp3.id);
          if (null != applicationIdFromDetectableId) {
            let tmp10 = applicationIdFromDetectableId;
            let arr = items.push(tmp9);
          }
        }
      }
      continue;
    }
    return items;
  }, []).length > 0;
};
export const useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds = function useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds() {
  let items = [closure_6];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => guildIds.getGuildIds());
  const obj = stateFromStores(504);
  const items1 = [closure_8];
  const items2 = [stateFromStores];
  return stateFromStores(504).useStateFromStoresArray(items1, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = closure_1_8;
      let applicationIdFromGuildId = closure_1_8.getApplicationIdFromGuildId(tmp3);
      if (null != applicationIdFromGuildId) {
        let tmp7 = applicationIdFromGuildId;
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }, items2);
};