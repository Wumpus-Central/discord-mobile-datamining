// discord_app/modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const PremiumTypes = fn(1379).PremiumTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/hooks/useMaybeFetchTieredTenureBadgeData.tsx",
);

export const useMaybeFetchTieredTenureBadgeData = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores(576).c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = stateFromStores(576);
      stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
      const tmpResult = stateFromStores(504);
      const isPremiumSubscriber = stateFromStores(10847).useIsPremiumSubscriber(PremiumTypes.TIER_2);
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === isPremiumSubscriber) {
          let tmp9 = cResult[4];
        }
        isPremiumSubscriber(5590)(tmp9);
      }
      const fn2 = function c() {
        let id;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        if (tmp3) {
          maybeFetchUserProfileDefault(stateFromStores.id);
        }
        tmp3 = null != id && isPremiumSubscriber;
      };
      cResult[2] = stateFromStores;
      cResult[3] = isPremiumSubscriber;
      cResult[4] = fn2;
      tmp9 = fn2;
      const tmpResult2 = stateFromStores(10847);
    }
  : () => {
      const items = [UserStore];
      _require = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj = require("initialize");
      importDefault = require("useIsPremiumSubscriber").useIsPremiumSubscriber(PremiumTypes.TIER_2);
      useMountEffectDefault(() => {
        let id;
        if (user != null) {
          id = user.id;
        }
        if (tmp3) {
          maybeFetchUserProfileDefault(user.id);
        }
        tmp3 = null != id && closure_1;
      });
    };
