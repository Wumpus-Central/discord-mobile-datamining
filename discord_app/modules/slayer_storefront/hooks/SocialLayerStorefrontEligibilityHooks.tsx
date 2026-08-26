// === Module 9584: useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds ===

// Module 9584 (useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds)
import initialize from "initialize" /* 589 */;
import closure_2 from "map" /* 9585 */;
import closure_3 from "initialize" /* 4467 */;
import closure_4 from "createUserWidgetFromServer" /* 7293 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "sortActivity" /* 4533 */;
import closure_7 from "handleUserSettingsStoreUpdate" /* 6022 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx");

export const useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
  userIds = userIds.userIds;
  let items = [closure_2, closure_7];
  const items1 = [userIds];
  return userIds(589).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = closure_1_2;
      let userOutbox = closure_1_2.getUserOutbox(tmp3);
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
          let obj = userIds(closure_1_1[7]);
          let tmp11 = item10019;
          if (obj.isGamingLikeEntry(tmp8)) {
            let tmp12 = closure_1_7;
            let tmp13 = item10019;
            let applicationIdFromDetectableId = closure_1_7.getApplicationIdFromDetectableId(tmp8.extra.application_id);
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
  let items = [closure_4, closure_7];
  const items1 = [memo];
  return _require(589).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = closure_1_4;
      let mutualGuilds = closure_1_4.getMutualGuilds(tmp3);
      if (null != mutualGuilds) {
        let tmp7 = tmp6;
        let tmp8 = mutualGuilds;
        for (const item10020 of mutualGuilds) {
          let obj = closure_1_7;
          let tmp9 = item10020;
          let storefrontGuildIds = closure_1_7.getStorefrontGuildIds();
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
  const items = [closure_6, closure_7];
  const items1 = [userIds];
  const stateFromStoresArray = userIds(589).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = closure_1_6;
      let activities = closure_1_6.getActivities(tmp3);
      let tmp6 = activities;
      let tmp7 = activities;
      for (const item10017 of activities) {
        if (null != item10017.application_id) {
          let tmp9 = closure_1_7;
          let tmp10 = item10017;
          let applicationIdFromDetectableId = closure_1_7.getApplicationIdFromDetectableId(tmp8.application_id);
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
  const obj = userIds(589);
  const slayerStorefrontDevApplicationIdOverride = userIds(9586).useSlayerStorefrontDevApplicationIdOverride();
  let tmp3 = stateFromStoresArray;
  if (null != slayerStorefrontDevApplicationIdOverride) {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(stateFromStoresArray, 0)] = slayerStorefrontDevApplicationIdOverride;
    tmp3 = items2;
  }
  return tmp3;
};
export const useAreUsersPlayingStorefrontEnabledGames = function useAreUsersPlayingStorefrontEnabledGames(userIds) {
  userIds = userIds.userIds;
  let items = [closure_6, closure_7];
  const items1 = [userIds];
  const stateFromStoresArray = userIds(589).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = closure_1_6;
      let activities = closure_1_6.getActivities(tmp3);
      let tmp6 = activities;
      let tmp7 = activities;
      for (const item10017 of activities) {
        if (null != item10017.application_id) {
          let tmp9 = closure_1_7;
          let tmp10 = item10017;
          let applicationIdFromDetectableId = closure_1_7.getApplicationIdFromDetectableId(tmp8.application_id);
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
  const obj = userIds(589);
  const slayerStorefrontDevApplicationIdOverride = userIds(9586).useSlayerStorefrontDevApplicationIdOverride();
  let arr3 = stateFromStoresArray;
  if (null != slayerStorefrontDevApplicationIdOverride) {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(stateFromStoresArray, 0)] = slayerStorefrontDevApplicationIdOverride;
    arr3 = items2;
  }
  return arr3.length > 0;
};
export const useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds = function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
  let items = [closure_3, closure_7];
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
  const items = [closure_3, closure_7];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [];
    const runningGames = closure_3.getRunningGames();
    const iter = runningGames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.id) {
        let tmp4 = closure_3;
        let tmp5 = nextResult;
        if (closure_3.isDetectionEnabled(tmp3)) {
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
  let items = [closure_3, closure_7];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [];
    const runningGames = closure_3.getRunningGames();
    const iter = runningGames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.id) {
        let tmp4 = closure_3;
        let tmp5 = nextResult;
        if (closure_3.isDetectionEnabled(tmp3)) {
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
  let items = [closure_5];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => guildIds.getGuildIds());
  const obj = stateFromStores(589);
  const items1 = [closure_7];
  const items2 = [stateFromStores];
  return stateFromStores(589).useStateFromStoresArray(items1, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = closure_1_7;
      let applicationIdFromGuildId = closure_1_7.getApplicationIdFromGuildId(tmp3);
      if (null != applicationIdFromGuildId) {
        let tmp7 = applicationIdFromGuildId;
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }, items2);
};