// === Module 13753: usePremiumGroupFeaturesTableCardText ===

// Module 13753 (usePremiumGroupFeaturesTableCardText)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import user from "user" /* 1398 */;
import _modDef3280 from "module_3280" /* 3280 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 8078 */;
import usePremiumGroupPrimaryNameDefault from "usePremiumGroupPrimaryName" /* 13754 */;
import SubscriptionStore from "SubscriptionStore" /* 4775 */;

require = fn;
const PremiumGroupConstants = fn(4783);
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: hasOwnProperty } = PremiumGroupConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumGroupFeaturesTableCardText(arg0, arg1) {
  const cResult = c.c(14);
  const tmp4 = arg0 === user.PremiumSubscriptionGroupRole.MEMBER;
  if (cResult[0] !== tmp4) {
    const obj2 = { useCachedData: true, fetch: tmp4 };
    cResult[0] = tmp4;
    cResult[1] = obj2;
    let tmp5 = obj2;
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
    let tmp9 = S;
    let tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const stateFromStores = initialize.useStateFromStores(tmp8, tmp9);
  if (arg0 === user.PremiumSubscriptionGroupRole.UNSPECIFIED) {
    return null;
  } else {
    if (cResult[4] === tmp7) {
      if (cResult[5] === arg0) {
        if (cResult[6] === stateFromStores) {
          let tmp12 = cResult[7];
        }
        if (cResult[8] === arg0) {
          if (cResult[9] === arg1) {
            if (cResult[11] === cResult[10]) {
              if (cResult[12] === tmp12) {
                let tmp21 = cResult[13];
              }
              return tmp21;
            }
            const obj3 = { subheaderString: null, bodyString: null };
            class S {
              constructor() {
                return closure_1_3.getPremiumGroupSubscription();
              }
            }
            obj3.bodyString = cResult[10];
            cResult[11] = cResult[10];
            cResult[12] = tmp12;
            cResult[13] = obj3;
            tmp21 = obj3;
          }
        }
        class S {
          constructor() {
            return closure_1_3.getPremiumGroupSubscription();
          }
        }
        cResult[8] = arg0;
        cResult[9] = arg1;
        cResult[10] = tmp19;
      }
    }
    if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
      let priceString = PremiumGroupUtils.getPriceString(stateFromStores, { withIntervals: true });
      const tmpResult2 = PremiumGroupUtils;
    } else {
      priceString = null;
      if (null != tmp7) {
        const intl = util.intl;
        const obj4 = { primaryName: null, premiumGroupProductName: null };
        class S {
          constructor() {
            return closure_1_3.getPremiumGroupSubscription();
          }
        }
        obj4.premiumGroupProductName = React4();
        priceString = intl.format(_modDef3280.Nu9LNm, obj4);
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
  const tmpResult = initialize;
}) : (function usePremiumGroupFeaturesTableCardText(arg0, arg1) {
  let intl = require;
  let obj = dependencyMap;
  let prop = importDefault;
  const tmp2 = usePremiumGroupPrimaryNameDefault({ useCachedData: true, fetch: arg0 === user.PremiumSubscriptionGroupRole.MEMBER });
  const obj2 = { useCachedData: true, fetch: arg0 === user.PremiumSubscriptionGroupRole.MEMBER };
  const items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumGroupSubscription.getPremiumGroupSubscription());
  if (arg0 === user.PremiumSubscriptionGroupRole.UNSPECIFIED) {
    return null;
  } else {
    if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
      let priceString = PremiumGroupUtils.getPriceString(stateFromStores, { withIntervals: true });
      const intlResult = PremiumGroupUtils;
    } else {
      priceString = null;
      if (null != tmp2) {
        const intl2 = util.intl;
        const obj4 = { primaryName: tmp2, premiumGroupProductName: React4() };
        priceString = intl2.format(_modDef3280.Nu9LNm, obj4);
      }
    }
    let str = "...";
    if (null != priceString) {
      str = priceString;
    }
    const obj5 = { subheaderString: str, bodyString: null };
    if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
      intl = util.intl;
      prop = _modDef3280["+R/K74"];
      obj = { helpCenterLink, premiumGroupProductName: React4() };
      let formatResult = intl.format(prop, obj);
    } else {
      const intl3 = util.intl;
      const propResult = _modDef3280;
      const obj6 = { helpCenterLink };
      formatResult = intl3.format(arg1 ? propResult["xF+upx"] : propResult.qqfnOm, obj6);
    }
    obj5.bodyString = formatResult;
  }
});