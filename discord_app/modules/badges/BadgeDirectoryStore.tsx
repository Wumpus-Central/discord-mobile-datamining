// discord_app/modules/badges/BadgeDirectoryStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import privDefault from "../../../_runtime/01437_priv.js";
import BadgeIdResolution from "BadgeIdResolution.tsx";
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const HOUR = DurationsDefault.Millis.HOUR;
let closure_5 = new privDefault({ max: 50 });
const Store = initializeDefault.Store;
class BadgeDirectoryStore extends Store {}
const prototype = BadgeDirectoryStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(UserStore);
};
prototype["getBadges"] = function getBadges(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  if (null == tmp) {
    return [];
  } else {
    value = closure_5.get(tmp);
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
  const peekResult = closure_5.peek(id);
  let flag;
  if (peekResult != null) {
    flag = peekResult.catalogFetched;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isCatalogStaleFor"] = function isCatalogStaleFor(id) {
  const peekResult = closure_5.peek(id);
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
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  let tmp5 = null != tmp;
  if (tmp5) {
    const peekResult = closure_5.peek(tmp);
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
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  let tmp5;
  if (null != tmp) {
    closure_5.get(tmp);
    value = undefined;
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
const badgeDirectoryStore = new BadgeDirectoryStore(DispatcherDefault, {
  BADGE_DIRECTORY_FETCH_START: function handleFetchStart(userId) {
    value = closure_5.get(userId.userId);
    if (null != value) {
      value.fetchError = false;
    }
  },
  BADGE_DIRECTORY_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ userId, badges } = arg0);
    let obj = closure_5;
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      obj = {
        badges: null,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
      };
      const _Map = Map;
      const map = new Map();
      obj.badges = map;
      peekResult = obj;
    }
    peekResult.badges = new Map(
      badges.map((badge_id) => {
        const items = [badge_id.badge_id, badge_id];
        return items;
      }),
    );
    peekResult.catalogFetched = true;
    peekResult.fetchError = false;
    peekResult.fetchedAt = Date.now();
    const result = obj.set(userId, peekResult);
  },
  BADGE_DIRECTORY_FETCH_FAILURE: function handleFetchFailure(userId) {
    userId = userId.userId;
    let obj = closure_5;
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      obj = {
        badges: null,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
      };
      const _Map = Map;
      const map = new Map();
      obj.badges = map;
      peekResult = obj;
    }
    peekResult.fetchError = true;
    const result = obj.set(userId, peekResult);
  },
  BADGE_FETCH_SUCCESS: function handleBadgeFetchSuccess(arg0) {
    ({ userId, badge } = arg0);
    let obj = closure_5;
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      obj = {
        badges: null,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
      };
      const _Map = Map;
      const map = new Map();
      obj.badges = map;
      peekResult = obj;
    }
    const badges = peekResult.badges;
    const result = badges.set(badge.badge_id, badge);
    const result1 = obj.set(userId, peekResult);
  },
  USER_PROFILE_FETCH_SUCCESS: function handleUserProfileFetchSuccess(userProfile) {
    userProfile = userProfile.userProfile;
    const id = userProfile.user.id;
    value = closure_5.get(id);
    if (null != value) {
      if (value.catalogFetched) {
        let badges = userProfile.badges;
        if (badges == null) {
          badges = [];
        }
        const _Array = Array;
        badges = value.badges;
        if (
          badges.filter((id) => null != BadgeIdResolution.resolveProfileBadgeId(id.id)).length !==
          arr.filter((owned) => owned.owned).length
        ) {
          let num = value.driftFetchGateUntil;
          if (num == null) {
            num = 0;
          }
          const _Date = Date;
          if (Date.now() >= num) {
            let driftBackoff2 = value.driftBackoff;
            if (driftBackoff2 == null) {
              driftBackoff2 = new BackoffDefault(DurationsDefault.Millis.MINUTE, HOUR, true);
            }
            value.driftBackoff = driftBackoff2;
            const _Date2 = Date;
            const timestamp = Date.now();
            value.driftFetchGateUntil = timestamp + driftBackoff2.fail();
            const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(id);
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
    closure_5.reset();
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/BadgeDirectoryStore.tsx");

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
