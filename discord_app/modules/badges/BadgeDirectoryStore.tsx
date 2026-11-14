// discord_app/modules/badges/BadgeDirectoryStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import privDefault from "../../../_runtime/01456_priv.js";
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
      items = Array.from(badges.values());
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
prototype["hasCatalogFetchErrorFor"] = function hasCatalogFetchErrorFor(c1) {
  let tmp = c1;
  if (c1 == null) {
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
prototype["getUnreadBadges"] = function getUnreadBadges(id) {
  const badges = this.getBadges(id);
  return badges.filter((has_updates) => true === has_updates.has_updates);
};
prototype["getUnreadBadgeCount"] = function getUnreadBadgeCount(id) {
  let tmp = id;
  if (id == null) {
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  let num = 0;
  if (null != tmp) {
    const self = this;
    num = 0;
    if (this.hasCatalogFor(tmp)) {
      num = self.getUnreadBadges(tmp).length;
    }
  }
  return num;
};
prototype["getBadgeById"] = function getBadgeById(GIFTING, displayedUserId) {
  let tmp = displayedUserId;
  if (displayedUserId == null) {
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  let tmp5;
  if (null != tmp) {
    value = closure_5.get(tmp);
    let value2;
    if (value != null) {
      const badges = value.badges;
      value2 = badges.get(GIFTING);
    }
    tmp5 = value2;
  }
  return tmp5;
};
prototype["getSingleRequirementProgress"] = function getSingleRequirementProgress(GIFTING, id) {
  const badgeById = this.getBadgeById(GIFTING, id);
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
prototype["getCurrentTier"] = function getCurrentTier(GIFTING, displayedUserId) {
  const badgeById = this.getBadgeById(GIFTING, displayedUserId);
  let current_tier;
  if (badgeById != null) {
    current_tier = badgeById.current_tier;
  }
  if (null != current_tier) {
    const tiers = badgeById.tiers;
    return tiers.find((key) => key.key === badgeById.current_tier);
  }
};
prototype["getObtainedAt"] = function getObtainedAt(GIFTING, displayedUserId) {
  const badgeById = this.getBadgeById(GIFTING, displayedUserId);
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
prototype["getNextTier"] = function getNextTier(GIFTING, displayedUserId) {
  const badgeById = this.getBadgeById(GIFTING, displayedUserId);
  let next_tier;
  if (badgeById != null) {
    next_tier = badgeById.next_tier;
  }
  if (null != next_tier) {
    const tiers = badgeById.tiers;
    return tiers.find((key) => key.key === badgeById.next_tier);
  }
};
prototype["getRemainingToNextTier"] = function getRemainingToNextTier(GIFTING, id) {
  const singleRequirementProgress = this.getSingleRequirementProgress(GIFTING, id);
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
    ({ userId, badges, requestedAt: require } = arg0);
    c1 = undefined;
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      const obj2 = {
        badges: null,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
        acks: null,
      };
      const _Map = Map;
      const map = new Map();
      obj2.badges = map;
      const _Map2 = Map;
      const map1 = new Map();
      obj2.acks = map1;
      peekResult = obj2;
    }
    c1 = peekResult;
    peekResult.badges = new Map(
      badges.map((badge_id) => {
        const acks = _undefined.acks;
        value = acks.get(badge_id.badge_id);
        let value2 = null;
        if (tmp4) {
          const badges = _undefined.badges;
          value2 = badges.get(badge_id.badge_id);
        }
        items = [badge_id.badge_id];
        if (value2 == null) {
          value2 = badge_id;
        }
        items[1] = value2;
        return items;
      }),
    );
    peekResult.catalogFetched = true;
    peekResult.fetchError = false;
    peekResult.fetchedAt = Date.now();
    const result = closure_5.set(userId, peekResult);
    const map2 = new Map(
      badges.map((badge_id) => {
        const acks = _undefined.acks;
        value = acks.get(badge_id.badge_id);
        let value2 = null;
        if (tmp4) {
          const badges = _undefined.badges;
          value2 = badges.get(badge_id.badge_id);
        }
        items = [badge_id.badge_id];
        if (value2 == null) {
          value2 = badge_id;
        }
        items[1] = value2;
        return items;
      }),
    );
  },
  BADGE_DIRECTORY_FETCH_FAILURE: function handleFetchFailure(userId) {
    userId = userId.userId;
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      const obj2 = {
        badges: null,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
        acks: null,
      };
      const _Map = Map;
      const map = new Map();
      obj2.badges = map;
      const _Map2 = Map;
      const map1 = new Map();
      obj2.acks = map1;
      peekResult = obj2;
    }
    peekResult.fetchError = true;
    const result = closure_5.set(userId, peekResult);
  },
  BADGE_FETCH_SUCCESS: function handleBadgeFetchSuccess(requestedAt) {
    ({ userId, badge } = requestedAt);
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      const obj2 = {
        badges: null,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
        acks: null,
      };
      const _Map = Map;
      const map = new Map();
      obj2.badges = map;
      const _Map2 = Map;
      const map1 = new Map();
      obj2.acks = map1;
      peekResult = obj2;
    }
    const acks = peekResult.acks;
    value = acks.get(badge.badge_id);
    if (tmp12) {
      return false;
    } else {
      const badges = peekResult.badges;
      const result = badges.set(badge.badge_id, badge);
      const result1 = closure_5.set(userId, peekResult);
    }
    tmp12 = null != value && requestedAt.requestedAt < value;
  },
  BADGE_SUMMARY_FETCH_SUCCESS: function handleBadgeSummaryFetchSuccess(requestedAt) {
    ({ userId, badge } = requestedAt);
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      const obj2 = {
        badges: null,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
        acks: null,
      };
      const _Map = Map;
      const map = new Map();
      obj2.badges = map;
      const _Map2 = Map;
      const map1 = new Map();
      obj2.acks = map1;
      peekResult = obj2;
    }
    const acks = peekResult.acks;
    value = acks.get(badge.badge_id);
    if (tmp12) {
      return false;
    } else {
      const badges = peekResult.badges;
      const value2 = badges.get(badge.badge_id);
      const badges2 = peekResult.badges;
      const obj3 = {};
      const merged = Object.assign(badge);
      let progress = badge.progress;
      if (progress == null) {
        let progress1;
        if (value2 != null) {
          progress1 = value2.progress;
        }
        progress = progress1;
      }
      obj3.progress = progress;
      let info_label = badge.info_label;
      if (info_label == null) {
        let info_label1;
        if (value2 != null) {
          info_label1 = value2.info_label;
        }
        info_label = info_label1;
      }
      obj3.info_label = info_label;
      let stats = badge.stats;
      if (stats == null) {
        let stats1;
        if (value2 != null) {
          stats1 = value2.stats;
        }
        stats = stats1;
      }
      obj3.stats = stats;
      const result = badges2.set(badge.badge_id, obj3);
      const result1 = closure_5.set(userId, peekResult);
    }
    tmp12 = null != value && requestedAt.requestedAt < value;
  },
  BADGE_ACK_SUCCESS: function handleBadgeAckSuccess(badgeId) {
    badgeId = badgeId.badgeId;
    const peekResult = closure_5.peek(badgeId.userId);
    if (null == peekResult) {
      return false;
    } else {
      const acks = peekResult.acks;
      const _Date = Date;
      const result = acks.set(badgeId, Date.now());
      const badges2 = peekResult.badges;
      value = badges2.get(badgeId);
      let has_updates;
      if (value != null) {
        has_updates = value.has_updates;
      }
      if (true !== has_updates) {
        return false;
      } else {
        const badges = peekResult.badges;
        const obj = {};
        const merged = Object.assign(value);
        obj.has_updates = false;
        obj.previous_acked_tier = null;
        const result1 = badges.set(badgeId, obj);
      }
    }
  },
  USER_PROFILE_FETCH_SUCCESS: function handleUserProfileFetchSuccess(userProfile) {
    userProfile = userProfile.userProfile;
    const id = userProfile.user.id;
    value = closure_5.get(id);
    if (null != value) {
      if (value.catalogFetched) {
        let badges1 = userProfile.badges;
        if (badges1 == null) {
          badges1 = [];
        }
        const _Array = Array;
        const badges = value.badges;
        if (
          badges1.filter((id) => null != BadgeIdResolution.resolveProfileBadgeId(id.id)).length !==
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
export function getSingleRequirementThreshold(arg0) {
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
}
export function getObtainedAtFromBadge(current_tier) {
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
}
