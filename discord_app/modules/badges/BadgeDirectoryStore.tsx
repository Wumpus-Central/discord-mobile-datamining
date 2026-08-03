import mergeGuildAvatar from "mergeGuildAvatar";
import { Store } from "initialize";
import set from "set";

const require = arg1;
const HOUR = require("set").Millis.HOUR;
let map = new Map();
let set = new Set();
let set1 = new Set();
let map1 = new Map();
const map2 = new Map();
const map3 = new Map();
class BadgeDirectoryStore extends Store {
}
const prototype = BadgeDirectoryStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(mergeGuildAvatar);
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
    const value = map.get(tmp);
    if (null != value) {
      const _Array = Array;
      let items = Array.from(value.values());
    } else {
      items = [];
    }
    return items;
  }
};
prototype["hasCatalogFor"] = function hasCatalogFor(arg0) {
  return set.has(arg0);
};
prototype["isCatalogStaleFor"] = function isCatalogStaleFor(arg0) {
  const value = map1.get(arg0);
  let tmp2 = null == value;
  if (!tmp2) {
    const _Date = Date;
    tmp2 = Date.now() - value >= HOUR;
  }
  return tmp2;
};
prototype["hasCatalogFetchErrorFor"] = function hasCatalogFetchErrorFor(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  let hasItem = null != tmp;
  if (hasItem) {
    hasItem = set1.has(tmp);
  }
  return hasItem;
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
    let value = map.get(tmp);
    value = undefined;
    if (value != null) {
      value = value.get(GIFTING);
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
    return tiers.find((key) => key.key === badgeById.current_tier);
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
    return tiers.find((key) => key.key === badgeById.next_tier);
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
const badgeDirectoryStore = new BadgeDirectoryStore(require("dispatcher"), {
  BADGE_DIRECTORY_FETCH_START: function handleFetchStart(userId) {
    set = new Set(set);
    set.delete(userId.userId);
  },
  BADGE_DIRECTORY_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let badges;
    let userId;
    ({ userId, badges } = arg0);
    map = new Map(map);
    const result = map.set(userId, new Map(badges.map((badge_id) => {
      const items = [badge_id.badge_id, badge_id];
      return items;
    })));
    const map1 = new Map(badges.map((badge_id) => {
      const items = [badge_id.badge_id, badge_id];
      return items;
    }));
    closure_6 = new Set(closure_6).add(userId);
    set1 = new Set(set1);
    set1.delete(userId);
    const set = new Set(closure_6);
    closure_8 = new Map(closure_8).set(userId, Date.now());
  },
  BADGE_DIRECTORY_FETCH_FAILURE: function handleFetchFailure(userId) {
    closure_7 = new Set(closure_7).add(userId.userId);
  },
  BADGE_FETCH_SUCCESS: function handleBadgeFetchSuccess(arg0) {
    let badge;
    let userId;
    ({ userId, badge } = arg0);
    map = new Map(map);
    map = map.get(userId);
    if (map == null) {
      const _Map = Map;
      map = new Map();
    }
    const map1 = new Map(map);
    const result = map1.set(badge.badge_id, badge);
    const result1 = map.set(userId, map1);
  },
  USER_PROFILE_FETCH_SUCCESS: function handleUserProfileFetchSuccess(userProfile) {
    userProfile = userProfile.userProfile;
    const id = userProfile.user.id;
    if (set.has(id)) {
      let badges = userProfile.badges;
      if (badges == null) {
        badges = [];
      }
      let num = 0;
      let value = map.get(id);
      let items;
      if (value != null) {
        items = value.values();
      }
      if (items == null) {
        items = [];
      }
      for (const item10025 of items) {
        if (item10025.owned) {
          let tmp5 = num;
          num = num + 1;
        }
        continue;
      }
      if (badges.filter((id) => null != callback(table[2]).resolveProfileBadgeId(id.id)).length !== num) {
        let num2 = map3.get(id);
        if (num2 == null) {
          num2 = 0;
        }
        const _Date = Date;
        if (Date.now() >= num2) {
          value = map2.get(id);
          if (value == null) {
            value = new importDefault(584)(importDefault(687).Millis.MINUTE, HOUR, true);
            const tmp13 = importDefault(584);
          }
          const result = map2.set(id, value);
          const _Date2 = Date;
          const timestamp = Date.now();
          const result1 = obj3.set(id, timestamp + value.fail());
          const badgeDirectory = require(8116) /* urlUserId */.fetchBadgeDirectory(id);
          const obj5 = require(8116) /* urlUserId */;
          const obj6 = map2;
        }
        obj3 = map3;
      } else {
        const value1 = map2.get(id);
        if (value1 != null) {
          value1.succeed();
        }
        map3.delete(id);
      }
    }
    return false;
  },
  LOGOUT: function handleReset() {
    const map = new Map();
    const set = new Set();
    const set1 = new Set();
    const map1 = new Map();
    map2.clear();
    map3.clear();
  }
});
let result = set.fileFinishedImporting("modules/badges/BadgeDirectoryStore.tsx");

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