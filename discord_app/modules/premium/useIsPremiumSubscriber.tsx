// discord_app/modules/premium/useIsPremiumSubscriber.tsx
import PremiumTypeUtils from "../../utils/PremiumTypeUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1391).PremiumTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsPremiumSubscriber(arg0) {
      let TIER_2 = arg0;
      const cResult = TIER_2(576).c(3);
      if (undefined === arg0) {
        TIER_2 = PremiumTypes.TIER_2;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== TIER_2) {
        const fn = function c() {
          const currentUser = UserStore.getCurrentUser();
          return PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2);
        };
        cResult[1] = TIER_2;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = TIER_2(576);
      return TIER_2(504).useStateFromStores(first, tmp7);
    }
  : function useIsPremiumSubscriber() {
      let TIER_2 = arg0;
      if (arg0 === undefined) {
        TIER_2 = PremiumTypes.TIER_2;
      }
      const items = [UserStore];
      return TIER_2(504).useStateFromStores(items, () => {
        const currentUser = UserStore.getCurrentUser();
        return PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2);
      });
    };
