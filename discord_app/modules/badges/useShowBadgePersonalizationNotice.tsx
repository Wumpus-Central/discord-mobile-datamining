// === Module 10909: useShowBadgePersonalizationNotice ===

// Module 10909 (useShowBadgePersonalizationNotice)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import BadgeUtils from "BadgeUtils" /* 10902 */;
import ConsentStore from "ConsentStore" /* 6091 */;

require = fn;
const Consents = fn(1085).Consents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/useShowBadgePersonalizationNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ badge, isViewingOtherUser } = arg0);
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
  if (cResult[2] === badge.badge_id) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === isViewingOtherUser) {
        let tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const tmpResult = initialize;
  const tmp9 = BadgeUtils.isPersonalizationGatedBadge(badge.badge_id) && !isViewingOtherUser && !stateFromStores;
  cResult[2] = badge.badge_id;
  cResult[3] = stateFromStores;
  cResult[4] = isViewingOtherUser;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  const tmpResult2 = BadgeUtils;
}) : ((arg0) => {
  ({ badge, isViewingOtherUser } = arg0);
  const items = [ConsentStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  return BadgeUtils.isPersonalizationGatedBadge(badge.badge_id) && !isViewingOtherUser && !stateFromStores;
});