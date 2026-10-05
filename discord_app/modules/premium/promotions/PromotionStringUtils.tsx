// discord_app/modules/premium/promotions/PromotionStringUtils.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import PriceUtils from "../../../utils/PriceUtils.tsx";
import SubscriptionPlanStore from "../../../stores/billing/SubscriptionPlanStore.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
({ PremiumSubscriptionSKUs: closure_4, SubscriptionPlans: hasOwnProperty } = PremiumConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      let TIER_2;
      let loadedForSKU;
      let tmp11;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(3);
      let str = "...";
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SubscriptionPlanStore];
        const fn = function u() {
          return loadedForSKU.isLoadedForSKU(TIER_2.TIER_2);
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
      if (-1 !== arr.indexOf("{price}")) {
        if (stateFromStores) {
          try {
            const obj3 = PremiumUtilsDefault;
            const defaultPrice = obj3.getDefaultPrice(hasOwnProperty.PREMIUM_MONTH_TIER_2);
            const tmpResult2 = PriceUtils;
            str = tmpResult2.formatPrice(defaultPrice.amount, defaultPrice.currency);
          } catch (err) {}
        }
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = /\{price\}/g;
        cResult[2] = tmp12;
        tmp11 = tmp12;
      } else {
        tmp11 = cResult[2];
      }
      return arr.replace(tmp11, str);
    }
  : (arr) => {
      let TIER_2;
      let loadedForSKU;
      let str = "...";
      const items = [SubscriptionPlanStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => loadedForSKU.isLoadedForSKU(TIER_2.TIER_2));
      if (-1 !== arr.indexOf("{price}")) {
        if (stateFromStores) {
          try {
            const obj2 = PremiumUtilsDefault;
            const defaultPrice = obj2.getDefaultPrice(hasOwnProperty.PREMIUM_MONTH_TIER_2);
            const tmpResult = PriceUtils;
            str = tmpResult.formatPrice(defaultPrice.amount, defaultPrice.currency);
          } catch (err) {}
        }
      }
      return arr.replace(/\{price\}/g, str);
    };
const result = size.fileFinishedImporting("modules/premium/promotions/PromotionStringUtils.tsx");

export const useFormatStringWithCommonPremiumParams = tmp3;
export const getHelpArticleLinkProps = function getHelpArticleLinkProps(helpArticle, helpArticleId) {
  let obj2;
  let id1;
  if (helpArticle != null) {
    id1 = helpArticle.id;
  }
  let id = helpArticleId;
  if (null != id1) {
    id = helpArticleId;
    if ("" !== helpArticle.id) {
      id = helpArticle.id;
    }
  }
  if ("" === id) {
    return null;
  } else {
    let linkText1;
    if (helpArticle != null) {
      linkText1 = helpArticle.linkText;
    }
    if (null != linkText1) {
      let linkText;
      if ("" !== helpArticle.linkText) {
        linkText = helpArticle.linkText;
      }
      const obj = { url: obj2.getArticleURL(id), linkText };
      obj2 = HelpdeskUtilsDefault;
      return obj;
    }
    const intl = intl2.intl;
    linkText = intl.string(intl2.t["sBp+u0"]);
  }
};
