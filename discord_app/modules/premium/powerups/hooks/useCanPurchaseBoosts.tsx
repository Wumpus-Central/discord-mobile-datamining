// discord_app/modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import PremiumConstants from "../../PremiumConstants.tsx";
import useFractionalPremiumInfoDefault from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let currentUser;

const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      const fractionalState = useFractionalPremiumInfoDefault().fractionalState;
      const items = [UserStore];
      const obj = get_initialized;
      const tmp =
        fractionalState === FractionalPremiumStates.NONE &&
        !obj.useStateFromStores(items, () => {
          currentUser = currentUser.getCurrentUser();
          let isPremiumGroupMemberResult;
          if (currentUser != null) {
            isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
          }
          return true === isPremiumGroupMemberResult;
        });
      return tmp;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default tmp2;
