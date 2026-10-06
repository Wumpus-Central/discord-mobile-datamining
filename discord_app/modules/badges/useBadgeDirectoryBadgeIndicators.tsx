// === Module 10903: useBadgeDirectoryBadgeIndicators ===

// Module 10903 (useBadgeDirectoryBadgeIndicators)
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 7879 */;
import BadgeUtils from "BadgeUtils" /* 10902 */;
import react from "react" /* 19 */;
import BadgeDirectorySeenStore from "BadgeDirectorySeenStore" /* 10904 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let set;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(badges) {
  let seenBadgeIndicators;
  let stateFromStores;
  let tmp16;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = stateFromStores(576);
  const cResult = obj.c(11);
  badges = badges.badges;
  const enabled = badges.enabled;
  const tmp = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [BadgeDirectorySeenStore];
    const fn = function o() {
      return seenBadgeIndicators.getSeenBadgeIndicators();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (enabled) {
    let tmp12;
    let tmp13;
    if (cResult[3] === badges) {
      let tmp11;
      if (cResult[4] === stateFromStores) {
        tmp11 = cResult[5];
      }
      tmp8 = tmp11;
    }
    if (cResult[6] !== stateFromStores) {
      const fn2 = function _(badge_id) {
        badge_id = badge_id.badge_id;
        const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
        const hasItem = BETA_BADGE_IDS.has(badge_id) && !stateFromStores.has(badge_id);
        return hasItem;
      };
      cResult[6] = stateFromStores;
      cResult[7] = fn2;
      tmp12 = fn2;
    } else {
      tmp12 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function f(badge_id) {
        return badge_id.badge_id;
      };
      cResult[8] = fn3;
      tmp13 = fn3;
    } else {
      tmp13 = cResult[8];
    }
    const _Set2 = Set;
    const found = badges.filter(tmp12);
    const self3 = this;
    const self4 = this;
    set = new Set(found.map(tmp13));
    cResult[3] = badges;
    cResult[4] = stateFromStores;
    cResult[5] = set;
    tmp11 = set;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const set1 = new Set();
      cResult[2] = set1;
      tmp8 = set1;
    } else {
      tmp8 = cResult[2];
    }
  }
  if (cResult[9] !== tmp8) {
    const obj2 = { badgeIndicatorIds: tmp8 };
    cResult[9] = tmp8;
    cResult[10] = obj2;
    tmp16 = obj2;
  } else {
    tmp16 = cResult[10];
  }
  return tmp16;
}) : ((badges) => {
  let items1;
  let seenBadgeIndicators;
  badges = badges.badges;
  const enabled = badges.enabled;
  const items = [BadgeDirectorySeenStore];
  const obj = badges(enabled[6]);
  const stateFromStores = obj.useStateFromStores(items, () => seenBadgeIndicators.getSeenBadgeIndicators());
  const obj2 = {
    badgeIndicatorIds: stateFromStores.useMemo(function() {
      let _Set1;
      const _Set = Set;
      if (enabled) {
        const found = badges.filter((badge_id) => {
          badge_id = badge_id.badge_id;
          const BETA_BADGE_IDS = badges(enabled[2]).BETA_BADGE_IDS;
          const hasItem = BETA_BADGE_IDS.has(badge_id) && !set.has(badge_id);
          return hasItem;
        });
        const self3 = this;
        const self4 = this;
        _Set1 = new _Set(found.map((badge_id) => badge_id.badge_id));
      } else {
        const self = this;
        const self2 = this;
        _Set1 = new _Set();
      }
      return _Set1;
    }, items1)
  };
  items1 = [badges, enabled, stateFromStores];
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((badgeId) => {
  let enabled;
  const obj = badgeId(enabled[5]);
  const cResult = obj.c(4);
  badgeId = badgeId.badgeId;
  enabled = badgeId.enabled;
  if (cResult[0] === badgeId) {
    let tmp2;
    let tmp3;
    if (cResult[1] === enabled) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = react.useEffect(tmp2, tmp3);
  }
  const fn = function s() {
    const tmp2 = null != badgeId && enabled;
    if (tmp2) {
      const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
      if (BETA_BADGE_IDS.has(badgeId)) {
        const tmp3Result = BadgeDirectoryActionCreators;
        const result = tmp3Result.markBadgeDirectoryBadgeIndicatorSeen(badgeId);
      }
    }
  };
  const items = [badgeId, enabled];
  cResult[0] = badgeId;
  cResult[1] = enabled;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((badgeId) => {
  badgeId = badgeId.badgeId;
  const enabled = badgeId.enabled;
  const items = [badgeId, enabled];
  const effect = react.useEffect(() => {
    const tmp2 = null != badgeId && enabled;
    if (tmp2) {
      const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
      if (BETA_BADGE_IDS.has(badgeId)) {
        const tmp3Result = BadgeDirectoryActionCreators;
        const result = tmp3Result.markBadgeDirectoryBadgeIndicatorSeen(badgeId);
      }
    }
  }, items);
});
function isNewIndicatorBadgeId(arg0) {
  const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
  return BETA_BADGE_IDS.has(arg0);
}
function dismissBadgeDirectoryBadgeIndicator(badgeId) {
  const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
  if (BETA_BADGE_IDS.has(badgeId)) {
    const tmpResult = BadgeDirectoryActionCreators;
    const result = tmpResult.markBadgeDirectoryBadgeIndicatorSeen(badgeId);
  }
}
let result = size.fileFinishedImporting("modules/badges/useBadgeDirectoryBadgeIndicators.tsx");

export const NEW_INDICATOR_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
export { isNewIndicatorBadgeId };
export { dismissBadgeDirectoryBadgeIndicator };
export const useBadgeDirectoryBadgeIndicators = tmp2;
export const useDismissBadgeDirectoryBadgeIndicator = tmp3;