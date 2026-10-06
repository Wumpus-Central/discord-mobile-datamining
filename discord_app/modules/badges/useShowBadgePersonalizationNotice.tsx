// === Module 10909: useShowBadgePersonalizationNotice ===

// Module 10909 (useShowBadgePersonalizationNotice)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import BadgeUtils from "BadgeUtils" /* 10902 */;
import ConsentStore from "ConsentStore" /* 6091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const Consents = Constants.Consents;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let badge;
  let isViewingOtherUser;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(6);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === badge.badge_id) {
    if (cResult[3] === stateFromStores) {
      let tmp8;
      if (cResult[4] === isViewingOtherUser) {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  }
  const tmpResult2 = BadgeUtils;
  const tmp9 = tmpResult2.isPersonalizationGatedBadge(badge.badge_id) && !isViewingOtherUser && !stateFromStores;
  cResult[2] = badge.badge_id;
  cResult[3] = stateFromStores;
  cResult[4] = isViewingOtherUser;
  cResult[5] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let badge;
  let isViewingOtherUser;
  ({ badge, isViewingOtherUser } = arg0);
  const items = [ConsentStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  const obj2 = BadgeUtils;
  const tmp2 = obj2.isPersonalizationGatedBadge(badge.badge_id) && !isViewingOtherUser && !stateFromStores;
  return tmp2;
});
const result = size.fileFinishedImporting("modules/badges/useShowBadgePersonalizationNotice.tsx");

export default tmp2;