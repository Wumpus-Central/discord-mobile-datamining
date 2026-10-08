// discord_app/modules/badges/useBadgeDirectoryBadgeIndicators.tsx
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators.tsx";
import BadgeUtils from "BadgeUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import BadgeDirectorySeenStore from "BadgeDirectorySeenStore.tsx";

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useBadgeDirectoryBadgeIndicators(badges) {
      const cResult = stateFromStores(576).c(11);
      badges = badges.badges;
      let tmp4 = globalThis;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [BadgeDirectorySeenStore];
        const fn = function o() {
          return seenBadgeIndicators.getSeenBadgeIndicators();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
      if (badges.enabled) {
        if (cResult[6] !== stateFromStores) {
          const fn2 = function b(badge_id) {
            badge_id = badge_id.badge_id;
            const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
            let hasItem = BETA_BADGE_IDS.has(badge_id);
            if (hasItem) {
              hasItem = !stateFromStores.has(badge_id);
            }
            return hasItem;
          };
          cResult[6] = stateFromStores;
          cResult[7] = fn2;
          let tmp14 = fn2;
        } else {
          tmp14 = cResult[7];
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const fn3 = function _(badge_id) {
            return badge_id.badge_id;
          };
          cResult[8] = fn3;
          let tmp15 = fn3;
        } else {
          tmp15 = cResult[8];
        }
        const found = badges.filter(tmp14);
        tmp14 = new.target;
        const set = new tmp4.Set(found.map(tmp15));
        tmp4 = set;
        cResult[3] = badges;
        cResult[4] = stateFromStores;
        cResult[5] = set;
      } else {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const _Set = Set;
          const set1 = new Set();
          cResult[2] = set1;
          let tmp9 = set1;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[9] !== tmp9) {
          const obj2 = { badgeIndicatorIds: tmp9 };
          cResult[9] = tmp9;
          cResult[10] = obj2;
          let tmp20 = obj2;
        } else {
          tmp20 = cResult[10];
        }
        return tmp20;
      }
      const tmpResult = stateFromStores(504);
    }
  : function useBadgeDirectoryBadgeIndicators(badges) {
      badges = badges.badges;
      const enabled = badges.enabled;
      const items = [BadgeDirectorySeenStore];
      const stateFromStores = badges(enabled[6]).useStateFromStores(items, () =>
        seenBadgeIndicators.getSeenBadgeIndicators(),
      );
      const obj2 = { badgeIndicatorIds: null };
      const items1 = [badges, enabled, stateFromStores];
      obj2.badgeIndicatorIds = stateFromStores.useMemo(() => {
        const _Set = Set;
        if (enabled) {
          const found = badges.filter((badge_id) => {
            badge_id = badge_id.badge_id;
            const BETA_BADGE_IDS = badges(enabled[2]).BETA_BADGE_IDS;
            let hasItem = BETA_BADGE_IDS.has(badge_id);
            if (hasItem) {
              hasItem = !set.has(badge_id);
            }
            return hasItem;
          });
          let _Set1 = new _Set(found.map((badge_id) => badge_id.badge_id));
        } else {
          _Set1 = new _Set();
        }
        return _Set1;
      }, items1);
      return obj2;
    };
function isNewIndicatorBadgeId(arg0) {
  const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
  return BETA_BADGE_IDS.has(arg0);
}
function dismissBadgeDirectoryBadgeIndicator(badgeId) {
  const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
  if (BETA_BADGE_IDS.has(badgeId)) {
    const result = BadgeDirectoryActionCreators.markBadgeDirectoryBadgeIndicatorSeen(badgeId);
    const tmpResult = BadgeDirectoryActionCreators;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/badges/useBadgeDirectoryBadgeIndicators.tsx");

export const NEW_INDICATOR_BADGE_IDS = fn(10553).BETA_BADGE_IDS;
export { isNewIndicatorBadgeId };
export { dismissBadgeDirectoryBadgeIndicator };
export const useBadgeDirectoryBadgeIndicators = tmp2;
export const useDismissBadgeDirectoryBadgeIndicator = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDismissBadgeDirectoryBadgeIndicator(badgeId) {
      const cResult = badgeId(enabled[5]).c(4);
      badgeId = badgeId.badgeId;
      enabled = badgeId.enabled;
      if (cResult[0] === badgeId) {
        if (cResult[1] === enabled) {
          let tmp2 = cResult[2];
          let tmp3 = cResult[3];
        }
        const effect = noop.useEffect(tmp2, tmp3);
      }
      const fn = function n() {
        if (tmp2) {
          const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
          if (BETA_BADGE_IDS.has(badgeId)) {
            const result = BadgeDirectoryActionCreators.markBadgeDirectoryBadgeIndicatorSeen(badgeId);
            const tmp3Result = BadgeDirectoryActionCreators;
          }
        }
        tmp2 = null != badgeId && enabled;
      };
      const items = [badgeId, enabled];
      cResult[0] = badgeId;
      cResult[1] = enabled;
      cResult[2] = fn;
      cResult[3] = items;
      tmp3 = items;
      tmp2 = fn;
      const obj = badgeId(enabled[5]);
    }
  : function useDismissBadgeDirectoryBadgeIndicator(badgeId) {
      badgeId = badgeId.badgeId;
      const enabled = badgeId.enabled;
      const items = [badgeId, enabled];
      const effect = noop.useEffect(() => {
        if (tmp2) {
          const BETA_BADGE_IDS = BadgeUtils.BETA_BADGE_IDS;
          if (BETA_BADGE_IDS.has(badgeId)) {
            const result = BadgeDirectoryActionCreators.markBadgeDirectoryBadgeIndicatorSeen(badgeId);
            const tmp3Result = BadgeDirectoryActionCreators;
          }
        }
        tmp2 = null != badgeId && enabled;
      }, items);
    };
