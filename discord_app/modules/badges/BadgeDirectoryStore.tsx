// discord_app/modules/badges/BadgeDirectoryStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import LRUCacheDefault from "../../../_runtime/01444_LRUCache.js";
import BadgeIdResolution from "BadgeIdResolution.tsx";
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let map, set;

const HOUR = DurationsDefault.Millis.HOUR;
let tmp2 = new LRUCacheDefault({ max: 50 });
const hasOwnProperty = tmp2;
const Store = get_initializedDefault.Store;
class BadgeDirectoryStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  getBadges(arg0) {
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
      let items;
      const value = closure_5.get(tmp);
      if (null != value) {
        const _Array = Array;
        const badges = value.badges;
        items = Array.from(badges.values());
      } else {
        items = [];
      }
      return items;
    }
  }
  hasCatalogFor(stateFromStores) {
    const peekResult = closure_5.peek(stateFromStores);
    let flag;
    if (peekResult != null) {
      flag = peekResult.catalogFetched;
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isCatalogStaleFor(id) {
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
  }
  hasCatalogFetchErrorFor(targetUserId) {
    let tmp = targetUserId;
    if (targetUserId == null) {
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
  }
  getBadgeById(GIFTING, displayedUserId) {
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
      const value = closure_5.get(tmp);
      let value2;
      if (value != null) {
        const badges = value.badges;
        value2 = badges.get(GIFTING);
      }
      tmp5 = value2;
    }
    return tmp5;
  }
  getSingleRequirementProgress(GIFTING, id) {
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
  }
  getCurrentTier(GIFTING, displayedUserId) {
    const badgeById = this.getBadgeById(GIFTING, displayedUserId);
    let current_tier;
    if (badgeById != null) {
      current_tier = badgeById.current_tier;
    }
    if (null != current_tier) {
      const tiers = badgeById.tiers;
      return tiers.find((key) => key.key === badgeById.current_tier);
    }
  }
  getObtainedAt(GIFTING, displayedUserId) {
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
  }
  getNextTier(GIFTING, displayedUserId) {
    const badgeById = this.getBadgeById(GIFTING, displayedUserId);
    let next_tier;
    if (badgeById != null) {
      next_tier = badgeById.next_tier;
    }
    if (null != next_tier) {
      const tiers = badgeById.tiers;
      return tiers.find((key) => key.key === badgeById.next_tier);
    }
  }
  getRemainingToNextTier(GIFTING, id) {
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
  }
}
const prototype = BadgeDirectoryStore.prototype;
BadgeDirectoryStore.displayName = "BadgeDirectoryStore";
let obj = {
  BADGE_DIRECTORY_FETCH_START: function handleFetchStart(userId) {
    const value = closure_5.get(userId.userId);
    if (null != value) {
      value.fetchError = false;
    }
  },
  BADGE_DIRECTORY_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let badges;
    let userId;
    const f95889 = (badge_id) => {
      const items = [badge_id.badge_id, badge_id];
      return items;
    };
    ({ userId, badges } = arg0);
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj2 = {
        badges: map,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
      };
      peekResult = obj2;
      map = new Map();
    }
    peekResult.badges = new Map(badges.map(f95889));
    peekResult.catalogFetched = true;
    peekResult.fetchError = false;
    new Map(badges.map(f95889));
    peekResult.fetchedAt = Date.now();
    const result = closure_5.set(userId, peekResult);
  },
  BADGE_DIRECTORY_FETCH_FAILURE: function handleFetchFailure(userId) {
    userId = userId.userId;
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj2 = {
        badges: map,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
      };
      peekResult = obj2;
      map = new Map();
    }
    peekResult.fetchError = true;
    const result = closure_5.set(userId, peekResult);
  },
  BADGE_FETCH_SUCCESS: function handleBadgeFetchSuccess(arg0) {
    let badge;
    let userId;
    ({ userId, badge } = arg0);
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj2 = {
        badges: map,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
      };
      peekResult = obj2;
      map = new Map();
    }
    const badges = peekResult.badges;
    const result = badges.set(badge.badge_id, badge);
    const result1 = closure_5.set(userId, peekResult);
  },
  BADGE_SUMMARY_FETCH_SUCCESS: function handleBadgeSummaryFetchSuccess(arg0) {
    let badge;
    let info_label;
    let progress;
    let userId;
    ({ userId, badge } = arg0);
    let peekResult = closure_5.peek(userId);
    if (peekResult == null) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      const obj2 = {
        badges: map,
        catalogFetched: false,
        fetchError: false,
        fetchedAt: null,
        driftBackoff: null,
        driftFetchGateUntil: null,
      };
      peekResult = obj2;
      map = new Map();
    }
    const badges = peekResult.badges;
    const value = badges.get(badge.badge_id);
    const badges2 = peekResult.badges;
    const badge_id = badge.badge_id;
    const obj3 = { progress, info_label };
    set = badges2.set;
    const merged = Object.assign(badge);
    progress = badge.progress;
    if (progress == null) {
      let progress1;
      if (value != null) {
        progress1 = value.progress;
      }
      progress = progress1;
    }
    info_label = badge.info_label;
    if (info_label == null) {
      let info_label1;
      if (value != null) {
        info_label1 = value.info_label;
      }
      info_label = info_label1;
    }
    const result = set(badge_id, obj3);
    const result1 = closure_5.set(userId, peekResult);
  },
  USER_PROFILE_FETCH_SUCCESS: function handleUserProfileFetchSuccess(userProfile) {
    userProfile = userProfile.userProfile;
    const id = userProfile.user.id;
    const value = closure_5.get(id);
    if (null != value) {
      if (value.catalogFetched) {
        let badges1 = userProfile.badges;
        if (badges1 == null) {
          badges1 = [];
        }
        const _Array = Array;
        const badges = value.badges;
        const length = badges1.filter((id) => {
          const obj = BadgeIdResolution;
          return null != obj.resolveProfileBadgeId(id.id);
        }).length;
        const arr = Array.from(badges.values());
        if (length !== arr.filter((owned) => owned.owned).length) {
          let num = value.driftFetchGateUntil;
          if (num == null) {
            num = 0;
          }
          const _Date = Date;
          if (Date.now() >= num) {
            let driftBackoff2 = value.driftBackoff;
            if (driftBackoff2 == null) {
              const self = this;
              const self2 = this;
              const tmp6 = BackoffDefault;
              driftBackoff2 = new tmp6(DurationsDefault.Millis.MINUTE, HOUR, true);
            }
            value.driftBackoff = driftBackoff2;
            const _Date2 = Date;
            const timestamp = Date.now();
            value.driftFetchGateUntil = timestamp + driftBackoff2.fail();
            let obj = BadgeDirectoryActionCreators;
            const badgeDirectory = obj.fetchBadgeDirectory(id);
          }
        } else {
          const driftBackoff = value.driftBackoff;
          if (driftBackoff != null) {
            driftBackoff.succeed();
          }
          value.driftFetchGateUntil = null;
        }
      }
    }
    return false;
  },
  LOGOUT: function handleReset() {
    closure_5.reset();
  },
};
const badgeDirectoryStore = new BadgeDirectoryStore(DispatcherDefault, obj);
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
