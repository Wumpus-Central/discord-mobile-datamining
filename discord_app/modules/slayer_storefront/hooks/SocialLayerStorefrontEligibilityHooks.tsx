// === Module 8790: SocialLayerStorefrontEligibilityHooks ===

// Module 8790 (SocialLayerStorefrontEligibilityHooks)
import initialize from "initialize" /* 504 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8341 */;
import noop from "module_19" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8791 */;
import RunningGameStore from "RunningGameStore" /* 1915 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;
import GuildStore from "GuildStore" /* 1979 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7228 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx");

export const useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
  userIds = userIds.userIds;
  let items = [ContentInventoryOutboxStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  return userIds(504).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let userOutbox = ContentInventoryOutboxStore.getUserOutbox(tmp3);
      let entries;
      if (userOutbox != null) {
        entries = userOutbox.entries;
      }
      if (entries == null) {
        entries = [];
      }
      for (const item10019 of entries) {
        if (null != item10019) {
          let obj = ContentInventoryTypes;
          if (obj.isGamingLikeEntry(item10019)) {
            let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(item10019.extra.application_id);
            if (null != applicationIdFromDetectableId) {
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
  _require = memo;
  let items = [UserProfileStore, SocialLayerStorefrontStore];
  const items1 = [memo];
  return require("initialize").useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let mutualGuilds = UserProfileStore.getMutualGuilds(tmp3);
      if (null != mutualGuilds) {
        for (const item10020 of mutualGuilds) {
          let storefrontGuildIds = SocialLayerStorefrontStore.getStorefrontGuildIds();
          if (storefrontGuildIds.has(item10020.guild.id)) {
            let applicationIdFromGuildId = SocialLayerStorefrontStore.getApplicationIdFromGuildId(item10020.guild.id);
            if (null != applicationIdFromGuildId) {
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
  const items = [PresenceStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  stateFromStoresArray = userIds(stateFromStoresArray[7]).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let activities = PresenceStore.getActivities(tmp3);
      for (const item10017 of activities) {
        if (null != item10017.application_id) {
          let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(tmp8.application_id);
          if (null != applicationIdFromDetectableId) {
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
  const slayerStorefrontDevApplicationIdOverride = userIds(stateFromStoresArray[9]).useSlayerStorefrontDevApplicationIdOverride();
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
  let items = [PresenceStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  stateFromStoresArray = userIds(stateFromStoresArray[7]).useStateFromStoresArray(items, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let activities = PresenceStore.getActivities(tmp3);
      for (const item10017 of activities) {
        if (null != item10017.application_id) {
          let applicationIdFromDetectableId = SocialLayerStorefrontStore.getApplicationIdFromDetectableId(tmp8.application_id);
          if (null != applicationIdFromDetectableId) {
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
  const slayerStorefrontDevApplicationIdOverride = userIds(stateFromStoresArray[9]).useSlayerStorefrontDevApplicationIdOverride();
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
  let items = [RunningGameStore, SocialLayerStorefrontStore];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [];
    gamesSeen = gamesSeen.getGamesSeen(false, false);
    const iter = gamesSeen[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.id) {
        applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(tmp3.id);
        if (null != applicationIdFromDetectableId) {
          let arr = items.push(tmp7);
        }
      }
      continue;
    }
    return items;
  });
};
export const useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds = function useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds() {
  const items = [RunningGameStore, SocialLayerStorefrontStore];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [];
    const runningGames = RunningGameStore.getRunningGames();
    const iter = runningGames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.id) {
        if (RunningGameStore.isDetectionEnabled(tmp3)) {
          applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(tmp3.id);
          if (null != applicationIdFromDetectableId) {
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
  let items = [RunningGameStore, SocialLayerStorefrontStore];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [];
    const runningGames = RunningGameStore.getRunningGames();
    const iter = runningGames[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (null != nextResult.id) {
        if (RunningGameStore.isDetectionEnabled(tmp3)) {
          applicationIdFromDetectableId = applicationIdFromDetectableId.getApplicationIdFromDetectableId(tmp3.id);
          if (null != applicationIdFromDetectableId) {
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
  let items = [GuildStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => guildIds.getGuildIds());
  const obj = stateFromStores(504);
  const items1 = [SocialLayerStorefrontStore];
  const items2 = [stateFromStores];
  return stateFromStores(504).useStateFromStoresArray(items1, () => {
    const items = [];
    while (tmp2 !== undefined) {
      let applicationIdFromGuildId = SocialLayerStorefrontStore.getApplicationIdFromGuildId(tmp3);
      if (null != applicationIdFromGuildId) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }, items2);
};