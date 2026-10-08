// === Module 13554: PromotionStringUtils ===

// Module 13554 (PromotionStringUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4726 */;
import PriceUtils from "PriceUtils" /* 6926 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4731 */;

require = fn;
const PremiumConstants = fn(1391);
({ PremiumSubscriptionSKUs: closure_4, SubscriptionPlans: hasOwnProperty } = PremiumConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/PromotionStringUtils.tsx");

export const useFormatStringWithCommonPremiumParams = ReactCompilerGating.isReactCompilerEnabled() ? (function useFormatStringWithCommonPremiumParams(arr) {
  const cResult = c.c(3);
  let str = "...";
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionPlanStore];
    const fn = function l() {
      return loadedForSKU.isLoadedForSKU(TIER_2.TIER_2);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (-1 !== arr.indexOf("{price}")) {
    if (stateFromStores) {
      try {
        const defaultPrice = PremiumUtilsDefault.getDefaultPrice(hasOwnProperty.PREMIUM_MONTH_TIER_2);
        str = PriceUtils.formatPrice(defaultPrice.amount, defaultPrice.currency);
        const tmpResult2 = PriceUtils;
      } catch (err) {
      }
    }
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = /\{price\}/g;
    cResult[2] = tmp12;
    let tmp11 = tmp12;
  } else {
    tmp11 = cResult[2];
  }
  return arr.replace(tmp11, str);
}) : (function useFormatStringWithCommonPremiumParams(arr) {
  let str = "...";
  const items = [SubscriptionPlanStore];
  const stateFromStores = initialize.useStateFromStores(items, () => loadedForSKU.isLoadedForSKU(TIER_2.TIER_2));
  if (-1 !== arr.indexOf("{price}")) {
    if (stateFromStores) {
      try {
        const defaultPrice = PremiumUtilsDefault.getDefaultPrice(hasOwnProperty.PREMIUM_MONTH_TIER_2);
        str = PriceUtils.formatPrice(defaultPrice.amount, defaultPrice.currency);
        const tmpResult = PriceUtils;
      } catch (err) {
      }
    }
  }
  return arr.replace(/\{price\}/g, str);
});
export const getHelpArticleLinkProps = function getHelpArticleLinkProps(helpArticle, helpArticleId) {
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
      if ("" !== helpArticle.linkText) {
        let linkText = helpArticle.linkText;
      }
      const obj = { url: HelpdeskUtilsDefault.getArticleURL(id), linkText };
      return obj;
    }
    const intl = util.intl;
    linkText = intl.string(util.t["sBp+u0"]);
  }
};