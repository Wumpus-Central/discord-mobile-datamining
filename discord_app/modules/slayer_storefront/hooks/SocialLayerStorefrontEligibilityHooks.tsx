import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx
import map from "map";
import initialize from "initialize";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import sortActivity from "sortActivity";
import handleUserSettingsStoreUpdate from "handleUserSettingsStoreUpdate";

const require = arg1;
const result = require("createUserWidgetFromServer").fileFinishedImporting("modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx");

export const useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
  userIds = userIds.userIds;
  let items = [map, handleUserSettingsStoreUpdate];
  const items1 = [userIds];
  return userIds(589).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = outer1_2;
      let userOutbox = outer1_2.getUserOutbox(tmp3);
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
          let tmp10 = outer1_1;
          let obj = userIds(outer1_1[7]);
          let tmp11 = item10019;
          if (obj.isGamingLikeEntry(tmp8)) {
            let tmp12 = outer1_7;
            let tmp13 = item10019;
            let applicationIdFromDetectableId = outer1_7.getApplicationIdFromDetectableId(tmp8.extra.application_id);
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
  let items = [createUserWidgetFromServer, handleUserSettingsStoreUpdate];
  const items1 = [memo];
  return _initialize.useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = outer1_4;
      let mutualGuilds = outer1_4.getMutualGuilds(tmp3);
      if (null != mutualGuilds) {
        let tmp7 = tmp6;
        let tmp8 = mutualGuilds;
        for (const item10020 of mutualGuilds) {
          let obj = outer1_7;
          let tmp9 = item10020;
          let storefrontGuildIds = outer1_7.getStorefrontGuildIds();
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
  const items = [sortActivity, handleUserSettingsStoreUpdate];
  const items1 = [userIds];
  const stateFromStoresArray = userIds(589).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = outer1_6;
      let activities = outer1_6.getActivities(tmp3);
      let tmp6 = activities;
      let tmp7 = activities;
      for (const item10017 of activities) {
        if (null != item10017.application_id) {
          let tmp9 = outer1_7;
          let tmp10 = item10017;
          let applicationIdFromDetectableId = outer1_7.getApplicationIdFromDetectableId(tmp8.application_id);
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
  const slayerStorefrontDevApplicationIdOverride = userIds(9289).useSlayerStorefrontDevApplicationIdOverride();
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
  let items = [sortActivity, handleUserSettingsStoreUpdate];
  const items1 = [userIds];
  const stateFromStoresArray = userIds(589).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = outer1_6;
      let activities = outer1_6.getActivities(tmp3);
      let tmp6 = activities;
      let tmp7 = activities;
      for (const item10017 of activities) {
        if (null != item10017.application_id) {
          let tmp9 = outer1_7;
          let tmp10 = item10017;
          let applicationIdFromDetectableId = outer1_7.getApplicationIdFromDetectableId(tmp8.application_id);
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
  const slayerStorefrontDevApplicationIdOverride = userIds(9289).useSlayerStorefrontDevApplicationIdOverride();
  let arr3 = stateFromStoresArray;
  if (null != slayerStorefrontDevApplicationIdOverride) {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(stateFromStoresArray, 0)] = slayerStorefrontDevApplicationIdOverride;
    arr3 = items2;
  }
  return arr3.length > 0;
};
export const useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds = function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
  let items = [initialize, handleUserSettingsStoreUpdate];
  return initialize /* initialize */.useStateFromStoresArray(items, () => {
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
  const items = [initialize, handleUserSettingsStoreUpdate];
  return initialize /* initialize */.useStateFromStoresArray(items, () => {
    const items = [];
    const runningGames = initialize.getRunningGames();
    const iter = runningGames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.id) {
        let tmp4 = initialize;
        let tmp5 = nextResult;
        if (initialize.isDetectionEnabled(tmp3)) {
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
  let items = [initialize, handleUserSettingsStoreUpdate];
  return initialize /* initialize */.useStateFromStoresArray(items, () => {
    const items = [];
    const runningGames = initialize.getRunningGames();
    const iter = runningGames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.id) {
        let tmp4 = initialize;
        let tmp5 = nextResult;
        if (initialize.isDetectionEnabled(tmp3)) {
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
  let items = [createGuildRecordFromRust];
  stateFromStores = stateFromStores(589).useStateFromStores(items, () => guildIds.getGuildIds());
  const obj = stateFromStores(589);
  const items1 = [handleUserSettingsStoreUpdate];
  const items2 = [stateFromStores];
  return stateFromStores(589).useStateFromStoresArray(items1, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let tmp4 = outer1_7;
      let applicationIdFromGuildId = outer1_7.getApplicationIdFromGuildId(tmp3);
      if (null != applicationIdFromGuildId) {
        let tmp7 = applicationIdFromGuildId;
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }, items2);
};