// discord_app/modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import user from "../../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import _modDef3233 from "../PremiumGroup.messages.js";
import PremiumGroupUtils from "../PremiumGroupUtils.native.tsx";
import usePremiumGroupPrimaryNameDefault from "usePremiumGroupPrimaryName.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import PremiumGroupConstants from "../PremiumGroupConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: hasOwnProperty } = PremiumGroupConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let premiumGroupSubscription;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = react;
      const cResult = obj.c(14);
      const tmp4 = arg0 === user.PremiumSubscriptionGroupRole.MEMBER;
      if (cResult[0] !== tmp4) {
        const obj2 = { useCachedData: true, fetch: tmp4 };
        cResult[0] = tmp4;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const tmp7 = usePremiumGroupPrimaryNameDefault(tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SubscriptionStore];
        class S {
          constructor() {
            return closure_1_3.getPremiumGroupSubscription();
          }
        }
        cResult[2] = items;
        cResult[3] = S;
        tmp9 = S;
        tmp8 = items;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
      if (arg0 === user.PremiumSubscriptionGroupRole.UNSPECIFIED) {
        return null;
      } else {
        if (cResult[4] === tmp7) {
          if (cResult[5] === arg0) {
            let tmp12;
            if (cResult[6] === stateFromStores) {
              tmp12 = cResult[7];
            }
            if (cResult[8] === arg0) {
              let tmp18;
              if (cResult[9] === arg1) {
                tmp18 = cResult[10];
              }
              if (cResult[11] === tmp18) {
                let tmp20;
                if (cResult[12] === tmp12) {
                  tmp20 = cResult[13];
                }
                return tmp20;
              }
              const obj3 = { subheaderString: null, bodyString: tmp18 };
              class S {
                constructor() {
                  return closure_1_3.getPremiumGroupSubscription();
                }
              }
              cResult[11] = tmp18;
              cResult[12] = tmp12;
              cResult[13] = obj3;
              tmp20 = obj3;
            }
            class S {
              constructor() {
                return closure_1_3.getPremiumGroupSubscription();
              }
            }
            cResult[8] = arg0;
            cResult[9] = arg1;
            cResult[10] = tmp19;
            tmp18 = tmp19;
          }
        }
        if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
          const tmpResult2 = PremiumGroupUtils;
          let priceString = tmpResult2.getPriceString(stateFromStores, { withIntervals: true });
        } else {
          priceString = null;
          if (null != tmp7) {
            const intl = intl4.intl;
            const format = intl.format;
            const obj4 = { primaryName: null, premiumGroupProductName: React3() };
            class S {
              constructor() {
                return closure_1_3.getPremiumGroupSubscription();
              }
            }
            const Nu9LNm = _modDef3233.Nu9LNm;
            priceString = format(Nu9LNm, obj4);
          }
        }
        class S {
          constructor() {
            return closure_1_3.getPremiumGroupSubscription();
          }
        }
        cResult[4] = tmp7;
        cResult[5] = arg0;
        cResult[6] = stateFromStores;
        cResult[7] = tmp16;
        tmp12 = tmp16;
      }
    }
  : (arg0, arg1) => {
      let format3Result;
      let premiumGroupSubscription;
      const obj = { useCachedData: true, fetch: arg0 === user.PremiumSubscriptionGroupRole.MEMBER };
      const tmp4 = usePremiumGroupPrimaryNameDefault(obj);
      const items = [SubscriptionStore];
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () =>
        premiumGroupSubscription.getPremiumGroupSubscription(),
      );
      let tmp6 = null;
      if (arg0 !== user.PremiumSubscriptionGroupRole.UNSPECIFIED) {
        let priceString;
        if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
          const tmpResult = PremiumGroupUtils;
          priceString = tmpResult.getPriceString(stateFromStores, { withIntervals: true });
        } else {
          priceString = null;
          if (null != tmp4) {
            const intl = intl4.intl;
            const format = intl.format;
            const obj3 = { primaryName: tmp4, premiumGroupProductName: React3() };
            const Nu9LNm = _modDef3233.Nu9LNm;
            priceString = format(Nu9LNm, obj3);
          }
        }
        let str = "...";
        if (null != priceString) {
          str = priceString;
        }
        const obj4 = { subheaderString: str, bodyString: format3Result };
        if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
          const intl3 = intl4.intl;
          const format3 = intl3.format;
          const obj5 = { helpCenterLink: hasOwnProperty, premiumGroupProductName: React3() };
          const prop = _modDef3233["+R/K74"];
          format3Result = format3(prop, obj5);
        } else {
          const intl2 = intl4.intl;
          const format2 = intl2.format;
          const tmp3Result = _modDef3233;
          const obj6 = { helpCenterLink: hasOwnProperty };
          format3Result = format2(arg1 ? tmp3Result["xF+upx"] : tmp3Result.qqfnOm, obj6);
        }
        tmp6 = obj4;
      }
      return tmp6;
    };
const result = size.fileFinishedImporting(
  "modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx",
);

export default tmp3;
