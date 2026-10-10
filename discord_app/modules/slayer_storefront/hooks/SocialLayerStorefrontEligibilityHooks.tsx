// === Module 8995: SocialLayerStorefrontEligibilityHooks ===

// Module 8995 (SocialLayerStorefrontEligibilityHooks)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ContentInventoryTypes from "ContentInventoryTypes" /* 8459 */;
import noop from "module_19" /* 19 */;
import ContentInventoryOutboxStore from "ContentInventoryOutboxStore" /* 8996 */;
import RunningGameStore from "RunningGameStore" /* 2019 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;
import GuildStore from "GuildStore" /* 2087 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6932 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
  const cResult = userIds(576).c(4);
  userIds = userIds.userIds;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ContentInventoryOutboxStore, SocialLayerStorefrontStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userIds) {
    const fn = function s() {
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
    };
    const items1 = [userIds];
    cResult[1] = userIds;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = userIds(576);
  return userIds(504).useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds(userIds) {
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
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUsersPlayingStorefrontEnabledGamesApplicationIds(userIds) {
  const cResult = userIds(576).c(7);
  userIds = userIds.userIds;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [PresenceStore, SocialLayerStorefrontStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userIds) {
    const fn = function n() {
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
    };
    const items1 = [userIds];
    cResult[1] = userIds;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = userIds(576);
  const stateFromStoresArray = userIds(504).useStateFromStoresArray(first, tmp7, tmp8);
  const tmpResult = userIds(504);
  const slayerStorefrontDevApplicationIdOverride = userIds(8997).useSlayerStorefrontDevApplicationIdOverride();
  if (null == slayerStorefrontDevApplicationIdOverride) {
    return stateFromStoresArray;
  } else {
    if (cResult[4] === stateFromStoresArray) {
    }
    const items2 = [];
    items2[HermesBuiltin.arraySpread(stateFromStoresArray, 0)] = slayerStorefrontDevApplicationIdOverride;
    cResult[4] = stateFromStoresArray;
    cResult[5] = slayerStorefrontDevApplicationIdOverride;
    cResult[6] = items2;
  }
  const tmpResult2 = userIds(8997);
}) : (function useUsersPlayingStorefrontEnabledGamesApplicationIds(userIds) {
  userIds = userIds.userIds;
  let stateFromStoresArray;
  let items = [PresenceStore, SocialLayerStorefrontStore];
  const items1 = [userIds];
  stateFromStoresArray = userIds(stateFromStoresArray[10]).useStateFromStoresArray(items, () => {
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
  const obj = userIds(stateFromStoresArray[10]);
  const slayerStorefrontDevApplicationIdOverride = userIds(stateFromStoresArray[11]).useSlayerStorefrontDevApplicationIdOverride();
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
});
let closure_9 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserProfileStore, SocialLayerStorefrontStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds(arg0) {
  _require = arg0;
  let items = [UserProfileStore, SocialLayerStorefrontStore];
  const items1 = [arg0];
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
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAreUsersPlayingStorefrontEnabledGames(userIds) {
  const cResult = c.c(2);
  userIds = userIds.userIds;
  if (cResult[0] !== userIds) {
    const obj2 = { userIds };
    cResult[0] = userIds;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return closure_9(tmp2).length > 0;
}) : (function useAreUsersPlayingStorefrontEnabledGames(userIds) {
  return closure_9({ userIds: userIds.userIds }).length > 0;
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RunningGameStore, SocialLayerStorefrontStore];
    const fn = function o() {
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
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  return initialize.useStateFromStoresArray(tmp4, tmp5, tmp6);
}) : (function useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds() {
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
  }, []);
});
let closure_10 = tmp7;
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RunningGameStore, SocialLayerStorefrontStore];
    const fn = function o() {
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
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStoresArray(tmp4, tmp5);
}) : (function useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds() {
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
});
function useIsCurrentUserPlayingSocialLayerStorefrontGames() {
  return closure_10().length > 0;
}
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/slayer_storefront/hooks/SocialLayerStorefrontEligibilityHooks.tsx");

export const useUsersPlayedSocialLayerStorefrontGamesInOutboxApplicationIds = tmp2;
export const useAreUsersInSocialLayerStorefrontMutualGuildsApplicationIds = tmp3;
export const useUsersPlayingStorefrontEnabledGamesApplicationIds = tmp4;
export const useAreUsersPlayingStorefrontEnabledGames = tmp5;
export const useCurrentUserPlayedSocialLayerStorefrontGamesApplicationIds = tmp6;
export const useCurrentUserPlayingSocialLayerStorefrontGamesApplicationIds = tmp7;
export { useIsCurrentUserPlayingSocialLayerStorefrontGames };
export const useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds() {
  const cResult = stateFromStores(576).c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    const fn = function o() {
      return guildIds.getGuildIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SocialLayerStorefrontStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== stateFromStores) {
    const fn2 = function u() {
      const items = [];
      while (tmp2 !== undefined) {
        let applicationIdFromGuildId = SocialLayerStorefrontStore.getApplicationIdFromGuildId(tmp3);
        if (null != applicationIdFromGuildId) {
          let arr = items.push(tmp6);
        }
        continue;
      }
      return items;
    };
    const items2 = [stateFromStores];
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    cResult[5] = items2;
    let tmp11 = items2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult = stateFromStores(504);
  return stateFromStores(504).useStateFromStoresArray(tmp8, tmp10, tmp11);
}) : (function useIsCurrentUserInSocialLayerStorefrontGuildsApplicationIds() {
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
});