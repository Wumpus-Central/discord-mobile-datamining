// === Module 12164: useCanPurchaseBoosts ===

// Module 12164 (useCanPurchaseBoosts)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 6898 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let currentUser;

const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const fractionalState = useFractionalPremiumInfoDefault().fractionalState;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      currentUser = currentUser.getCurrentUser();
      let isPremiumGroupMemberResult;
      if (currentUser != null) {
        isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
      }
      return true === isPremiumGroupMemberResult;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const tmp7 = fractionalState === FractionalPremiumStates.NONE && !tmpResult.useStateFromStores(tmp4, tmp5);
  return tmp7;
}) : (() => {
  const fractionalState = useFractionalPremiumInfoDefault().fractionalState;
  const items = [UserStore];
  const obj = get_initialized;
  const tmp = fractionalState === FractionalPremiumStates.NONE && !obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
  return tmp;
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default tmp2;