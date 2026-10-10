// === Module 10584: useShowBadgeProgress ===

// Module 10584 (useShowBadgeProgress)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import BadgeUtils from "BadgeUtils" /* 10578 */;
import ConsentStore from "ConsentStore" /* 5932 */;

require = fn;
const Consents = fn(1085).Consents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useShowBadgeProgress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useShowBadgeProgress(arg0) {
  const cResult = c.c(7);
  ({ badge, viewerBadge, isViewingOtherUser } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConsentStore];
    const fn = function u() {
      return ConsentStore.hasConsented(constants.PERSONALIZATION);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (viewerBadge == null) {
    viewerBadge = badge;
  }
  if (cResult[2] !== viewerBadge) {
    const findTierResult = BadgeUtils.findTier(viewerBadge, viewerBadge.next_tier);
    cResult[2] = viewerBadge;
    cResult[3] = findTierResult;
    const tmpResult3 = BadgeUtils;
  }
  if (cResult[4] === badge.badge_id) {
    if (cResult[5] === stateFromStores) {
      let tmp11 = cResult[6];
    }
    let owned = !isViewingOtherUser;
    if (!isViewingOtherUser) {
      owned = viewerBadge.owned;
    }
    if (owned) {
      owned = tmp10;
    }
    if (owned) {
      owned = !tmp11;
    }
    return owned;
  }
  const tmpResult = initialize;
  const tmp12 = BadgeUtils.isPersonalizationGatedBadge(badge.badge_id) && !stateFromStores;
  cResult[4] = badge.badge_id;
  cResult[5] = stateFromStores;
  cResult[6] = tmp12;
  tmp11 = tmp12;
  const tmpResult4 = BadgeUtils;
}) : (function useShowBadgeProgress(arg0) {
  ({ badge, viewerBadge, isViewingOtherUser } = arg0);
  const items = [ConsentStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  if (viewerBadge == null) {
    viewerBadge = badge;
  }
  const tmpResult = BadgeUtils;
  const tmp4 = null != BadgeUtils.findTier(viewerBadge, viewerBadge.next_tier);
  const tmpResult2 = BadgeUtils;
  let owned = !isViewingOtherUser;
  if (!isViewingOtherUser) {
    owned = viewerBadge.owned;
  }
  if (owned) {
    owned = tmp4;
  }
  if (owned) {
    owned = !tmp5;
  }
  return owned;
});