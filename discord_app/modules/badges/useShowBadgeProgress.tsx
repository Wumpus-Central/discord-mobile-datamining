// === Module 10895: useShowBadgeProgress ===

// Module 10895 (useShowBadgeProgress)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import BadgeUtils from "BadgeUtils" /* 10889 */;
import ConsentStore from "ConsentStore" /* 6084 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Consents = Constants.Consents;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let badge;
  let isViewingOtherUser;
  let tmp4;
  let tmp5;
  let viewerBadge;
  const obj = react;
  const cResult = obj.c(7);
  ({ badge, viewerBadge, isViewingOtherUser } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConsentStore];
    const fn = function l() {
      return ConsentStore.hasConsented(constants.PERSONALIZATION);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (viewerBadge == null) {
    viewerBadge = badge;
  }
  if (cResult[2] !== viewerBadge) {
    const tmpResult3 = BadgeUtils;
    cResult[2] = viewerBadge;
    cResult[3] = tmpResult3.findTier(viewerBadge, viewerBadge.next_tier);
    const findTierResult = tmpResult3.findTier(viewerBadge, viewerBadge.next_tier);
  }
  if (cResult[4] === badge.badge_id) {
    let tmp11;
    if (cResult[5] === stateFromStores) {
      tmp11 = cResult[6];
    }
    return !isViewingOtherUser && viewerBadge.owned && tmp10 && !tmp11;
  }
  const tmpResult4 = BadgeUtils;
  const tmp12 = tmpResult4.isPersonalizationGatedBadge(badge.badge_id) && !stateFromStores;
  cResult[4] = badge.badge_id;
  cResult[5] = stateFromStores;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let badge;
  let isViewingOtherUser;
  let viewerBadge;
  ({ badge, viewerBadge, isViewingOtherUser } = arg0);
  const items = [ConsentStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  if (viewerBadge == null) {
    viewerBadge = badge;
  }
  const tmpResult = BadgeUtils;
  const tmp4 = null != tmpResult.findTier(viewerBadge, viewerBadge.next_tier);
  const tmpResult2 = BadgeUtils;
  const tmp6 = !isViewingOtherUser && viewerBadge.owned && tmp4 && !(tmpResult2.isPersonalizationGatedBadge(badge.badge_id) && !stateFromStores);
  return tmp6;
});
const result = size.fileFinishedImporting("modules/badges/useShowBadgeProgress.tsx");

export default tmp2;