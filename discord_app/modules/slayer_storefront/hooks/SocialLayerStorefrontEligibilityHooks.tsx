// === Module 9588: SocialLayerStorefrontEligibilityHooks ===

// Module 9588 (SocialLayerStorefrontEligibilityHooks)
import initialize from "initialize" /* 504 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 9004 */;
import noop from "module_19" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 9589 */;
import RunningGameStore from "RunningGameStore" /* 2137 */;
import UserProfileStore from "UserProfileStore" /* 7871 */;
import GuildStore from "GuildStore" /* 5041 */;
import PresenceStore from "PresenceStore" /* 5917 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7493 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx");

export function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
  userIds = userIds.userIds;
  items = [ContentInventoryOutboxStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  return userIds(504).useStateFromStoresArray(items, () => {
    items = [];
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
}
export function useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(memo) {
  _require = memo;
  items = [UserProfileStore, SocialLayerStorefrontStore];
  const items1 = [memo];
  return require("initialize").useStateFromStoresArray(items, () => {
    items = [];
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
}
export function useUsersPlayingStorefrontEnabledGamesApplicationIds(userIds) {
  userIds = userIds.userIds;
  let stateFromStoresArray;
  items = [PresenceStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  stateFromStoresArray = userIds(stateFromStoresArray[7]).useStateFromStoresArray(items, () => {
    items = [];
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
      items = [];
      items[HermesBuiltin.arraySpread(stateFromStoresArray, 0)] = tmp;
      let tmp2 = items;
    } else {
      tmp2 = stateFromStoresArray;
    }
    return tmp2;
  }, items2);
}
export function useAreUsersPlayingStorefrontEnabledGames(userIds) {
  userIds = userIds.userIds;
  let stateFromStoresArray;
  items = [PresenceStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  stateFromStoresArray = userIds(stateFromStoresArray[7]).useStateFromStoresArray(items, () => {
    items = [];
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
      items = [];
      items[HermesBuiltin.arraySpread(stateFromStoresArray, 0)] = tmp;
      let tmp2 = items;
    } else {
      tmp2 = stateFromStoresArray;
    }
    return tmp2;
  }, items2).length > 0;
}
export function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
  items = [RunningGameStore, SocialLayerStorefrontStore];
  return initialize.useStateFromStoresArray(items, () => {
    items = [];
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
}
export function useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds() {
  items = [RunningGameStore, SocialLayerStorefrontStore];
  return initialize.useStateFromStoresArray(items, () => {
    items = [];
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
}
export function useIsCurrentUserPlayingSocialLayerStorefrontGames() {
  items = [RunningGameStore, SocialLayerStorefrontStore];
  return initialize.useStateFromStoresArray(items, () => {
    items = [];
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
}
export function useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds() {
  items = [GuildStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => guildIds.getGuildIds());
  const obj = stateFromStores(504);
  const items1 = [SocialLayerStorefrontStore];
  const items2 = [stateFromStores];
  return stateFromStores(504).useStateFromStoresArray(items1, () => {
    items = [];
    while (tmp2 !== undefined) {
      let applicationIdFromGuildId = SocialLayerStorefrontStore.getApplicationIdFromGuildId(tmp3);
      if (null != applicationIdFromGuildId) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }, items2);
}