// === Module 7486: hasForLaterPremiumType ===

// Module 7486 (hasForLaterPremiumType)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let TIER_2;
  let currentUser;
  let tmp4;
  let tmp5;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      const obj = PremiumTypeUtils;
      return obj.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let TIER_2;
  let currentUser;
  let obj = get_initialized;
  const items = [UserStore];
  return obj.useStateFromStores(items, () => {
    const obj = PremiumTypeUtils;
    return obj.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
  });
});
const result = size.fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  const currentUser = UserStore.getCurrentUser();
  const obj = PremiumTypeUtils;
  return obj.isPremium(currentUser, PremiumTypes.TIER_2);
};
export const useHasForLaterPremiumType = tmp2;