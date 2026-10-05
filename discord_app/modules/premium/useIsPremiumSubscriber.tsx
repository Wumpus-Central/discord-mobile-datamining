// === Module 10847: useIsPremiumSubscriber ===

// Module 10847 (useIsPremiumSubscriber)
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1976 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp7;
  let TIER_2 = arg0;
  let obj = TIER_2(576);
  const cResult = obj.c(3);
  const tmp = TIER_2;
  if (undefined === arg0) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== TIER_2) {
    const fn = function o() {
      const currentUser = UserStore.getCurrentUser();
      const obj = PremiumTypeUtils;
      return obj.isPremiumExactly(currentUser, TIER_2);
    };
    cResult[1] = TIER_2;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : (() => {
  let TIER_2 = arg0;
  if (arg0 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  let obj = TIER_2(504);
  const items = [UserStore];
  return obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    const obj = PremiumTypeUtils;
    return obj.isPremiumExactly(currentUser, TIER_2);
  });
});
const result = size.fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = tmp2;