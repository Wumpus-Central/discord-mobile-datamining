// discord_app/modules/saved_messages/hasForLaterPremiumType.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import PremiumTypeUtils from "../../utils/PremiumTypeUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      let TIER_2;
      let currentUser;
      let obj = get_initialized;
      const items = [UserStore];
      return obj.useStateFromStores(items, () => {
        const obj = PremiumTypeUtils;
        return obj.isPremium(currentUser.getCurrentUser(), TIER_2.TIER_2);
      });
    };
const result = size.fileFinishedImporting("modules/saved_messages/hasForLaterPremiumType.tsx");

export default function hasForLaterPremiumType() {
  const currentUser = UserStore.getCurrentUser();
  const obj = PremiumTypeUtils;
  return obj.isPremium(currentUser, PremiumTypes.TIER_2);
}
export const useHasForLaterPremiumType = tmp2;
