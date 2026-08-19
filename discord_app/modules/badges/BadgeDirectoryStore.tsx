// discord_app/modules/badges/BadgeDirectoryStore.tsx
import failsDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import obj132Default from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import privDefault from "../../../_runtime/01405_priv.js";
import urlUserId from "BadgeDirectoryActionCreators.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

require = fn;
const HOUR = obj132Default.Millis.HOUR;
let closure_5 = new privDefault({ max: 50 });
const Store = initializeDefault.Store;
class BadgeDirectoryStore extends Store {
}
const prototype = BadgeDirectoryStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
};
prototype["getBadges"] = function getBadges(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  if (null == tmp) {
    return [];
  } else {
    const value = store.get(tmp);
    if (null != value) {
      const _Array = Array;
      const badges = value.badges;
      let items = Array.from(badges.values());
    } else {
      items = [];
    }
    return items;
  }
};
prototype["hasCatalogFor"] = function hasCatalogFor(id) {
  const peekResult = store.peek(id);
  let flag;
  if (peekResult != null) {
    flag = peekResult.catalogFetched;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isCatalogStaleFor"] = function isCatalogStaleFor(stateFromStores) {
  const peekResult = store.peek(stateFromStores);
  let fetchedAt;
  if (peekResult != null) {
    fetchedAt = peekResult.fetchedAt;
  }
  let tmp3 = null == fetchedAt;
  if (!tmp3) {
    const _Date = Date;
    tmp3 = Date.now() - fetchedAt >= HOUR;
  }
  return tmp3;
};
prototype["hasCatalogFetchErrorFor"] = function hasCatalogFetchErrorFor(stateFromStores) {
  let tmp = stateFromStores;
  if (stateFromStores == null) {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  let tmp5 = null != tmp;
  if (tmp5) {
    const peekResult = store.peek(tmp);
    let flag;
    if (peekResult != null) {
      flag = peekResult.fetchError;
    }
    if (flag == null) {
      flag = false;
    }
    tmp5 = flag;
  }
  return tmp5;
};
prototype["getBadgeById"] = function getBadgeById(GIFTING, userId) {
  let tmp = userId;
  if (userId == null) {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  let tmp5;
  if (null != tmp) {
    store.get(tmp);
    let value;
    if (value != null) {
      const badges = value.badges;
      value = badges.get(GIFTING);
    }
    tmp5 = value;
  }
  return tmp5;
};
prototype["getSingleRequirementProgress"] = function getSingleRequirementProgress(GIFTING, userId) {
  const badgeById = this.getBadgeById(GIFTING, userId);
  let progress;
  if (badgeById != null) {
    progress = badgeById.progress;
  }
  if (null != progress) {
    if (0 !== progress.length) {
      return progress[0];
    }
  }
};
prototype["getCurrentTier"] = function getCurrentTier(GIFTING, userId) {
  const badgeById = this.getBadgeById(GIFTING, userId);
  let current_tier;
  if (badgeById != null) {
    current_tier = badgeById.current_tier;
  }
  if (null != current_tier) {
    const tiers = badgeById.tiers;
    return tiers.find((item, index) => item.key === badgeById.current_tier);
  }
};
prototype["getObtainedAt"] = function getObtainedAt(GIFTING, userId) {
  const badgeById = this.getBadgeById(GIFTING, userId);
  let tmp2;
  if (null != badgeById) {
    let obtained_at;
    if (null != badgeById.current_tier) {
      const tier_obtained_at = badgeById.tier_obtained_at;
      let tmp4;
      if (tier_obtained_at != null) {
        tmp4 = tier_obtained_at[badgeById.current_tier];
      }
      obtained_at = tmp4;
    }
    if (obtained_at == null) {
      obtained_at = badgeById.obtained_at;
    }
    tmp2 = obtained_at;
  }
  return tmp2;
};
prototype["getNextTier"] = function getNextTier(GIFTING, userId) {
  const badgeById = this.getBadgeById(GIFTING, userId);
  let next_tier;
  if (badgeById != null) {
    next_tier = badgeById.next_tier;
  }
  if (null != next_tier) {
    const tiers = badgeById.tiers;
    return tiers.find((item, index) => item.key === badgeById.next_tier);
  }
};
prototype["getRemainingToNextTier"] = function getRemainingToNextTier(GIFTING, userId) {
  const singleRequirementProgress = this.getSingleRequirementProgress(GIFTING, userId);
  let threshold;
  if (singleRequirementProgress != null) {
    threshold = singleRequirementProgress.threshold;
  }
  let num = 0;
  if (null != threshold) {
    const _Math = Math;
    num = Math.max(0, singleRequirementProgress.threshold - singleRequirementProgress.current);
  }
  return num;
};
BadgeDirectoryStore.displayName = "BadgeDirectoryStore";
const badgeDirectoryStore = new BadgeDirectoryStore(dispatcherDefault, {
  BADGE_DIRECTORY_FETCH_START: function handleFetchStart(userId) {
    const value = store.get(userId.userId);
    if (null != value) {
      value.fetchError = false;
    }
  },
  BADGE_DIRECTORY_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ userId, badges } = arg0);
    let obj = store;
    let peekResult = store.peek(userId);
    if (peekResult == null) {
      obj = { badges: null, catalogFetched: false, fetchError: false, fetchedAt: null, driftBackoff: null, driftFetchGateUntil: null };
      const _Map = Map;
      const map = new Map();
      obj[0] = map;
      peekResult = obj;
    }
    peekResult.badges = new Map(badges.map((item, index) => {
      const items = [item.badge_id, item];
      return items;
    }));
    peekResult.catalogFetched = true;
    peekResult.fetchError = false;
    peekResult.fetchedAt = Date.now();
    const result = obj.set(userId, peekResult);
  },
  BADGE_DIRECTORY_FETCH_FAILURE: function handleFetchFailure(userId) {
    userId = userId.userId;
    let obj = store;
    let peekResult = store.peek(userId);
    if (peekResult == null) {
      obj = { badges: null, catalogFetched: false, fetchError: false, fetchedAt: null, driftBackoff: null, driftFetchGateUntil: null };
      const _Map = Map;
      const map = new Map();
      obj[0] = map;
      peekResult = obj;
    }
    peekResult.fetchError = true;
    const result = obj.set(userId, peekResult);
  },
  BADGE_FETCH_SUCCESS: function handleBadgeFetchSuccess(arg0) {
    ({ userId, badge } = arg0);
    let obj = store;
    let peekResult = store.peek(userId);
    if (peekResult == null) {
      obj = { badges: null, catalogFetched: false, fetchError: false, fetchedAt: null, driftBackoff: null, driftFetchGateUntil: null };
      const _Map = Map;
      const map = new Map();
      obj[0] = map;
      peekResult = obj;
    }
    const badges = peekResult.badges;
    const result = badges.set(badge.badge_id, badge);
    const result1 = obj.set(userId, peekResult);
  },
  USER_PROFILE_FETCH_SUCCESS: function handleUserProfileFetchSuccess(userProfile) {
    userProfile = userProfile.userProfile;
    const id = userProfile.user.id;
    const value = store.get(id);
    if (null != value) {
      if (value.catalogFetched) {
        let badges = userProfile.badges;
        if (badges == null) {
          badges = [];
        }
        const _Array = Array;
        badges = value.badges;
        if (badges.filter((item, index) => null != callback(table[3]).resolveProfileBadgeId(item.id)).length !== arr.filter((item, index) => item.owned).length) {
          let num = value.driftFetchGateUntil;
          if (num == null) {
            num = 0;
          }
          const _Date = Date;
          if (Date.now() >= num) {
            let driftBackoff2 = value.driftBackoff;
            if (driftBackoff2 == null) {
              driftBackoff2 = new failsDefault(obj132Default.Millis.MINUTE, HOUR, true);
            }
            value.driftBackoff = driftBackoff2;
            const _Date2 = Date;
            const timestamp = Date.now();
            value.driftFetchGateUntil = timestamp + driftBackoff2.fail();
            const badgeDirectory = urlUserId.fetchBadgeDirectory(id);
          }
        } else {
          const driftBackoff = value.driftBackoff;
          if (driftBackoff != null) {
            driftBackoff.succeed();
          }
          value.driftFetchGateUntil = null;
        }
        arr = Array.from(badges.values());
      }
    }
    return false;
  },
  LOGOUT: function handleReset() {
    store.reset();
  }
});
let tmp2 = new privDefault({ max: 50 });
let result = require("obj132").fileFinishedImporting("modules/badges/BadgeDirectoryStore.tsx");

export default badgeDirectoryStore;
export const getSingleRequirementThreshold = function getSingleRequirementThreshold(arg0) {
  let num;
  if (arg0 != null) {
    const first = arg0.requirements[0];
    if (first != null) {
      num = first.threshold;
    }
  }
  if (num == null) {
    num = 0;
  }
  return num;
};
export const getObtainedAtFromBadge = function getObtainedAtFromBadge(current_tier) {
  if (null != current_tier) {
    let obtained_at;
    if (null != current_tier.current_tier) {
      const tier_obtained_at = current_tier.tier_obtained_at;
      let tmp2;
      if (tier_obtained_at != null) {
        tmp2 = tier_obtained_at[current_tier.current_tier];
      }
      obtained_at = tmp2;
    }
    if (obtained_at == null) {
      obtained_at = current_tier.obtained_at;
    }
    return obtained_at;
  }
};