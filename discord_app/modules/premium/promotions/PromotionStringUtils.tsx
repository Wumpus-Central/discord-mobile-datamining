// === Module 13402: PromotionStringUtils ===

// Module 13402 (PromotionStringUtils)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import PriceUtils from "PriceUtils" /* 7234 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;

require = fn;
const PremiumConstants = fn(1373);
({ PremiumSubscriptionSKUs: closure_4, SubscriptionPlans: hasOwnProperty } = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/promotions/PromotionStringUtils.tsx");

export const useFormatStringWithCommonPremiumParams = function useFormatStringWithCommonPremiumParams(body) {
  let str = "...";
  const items = [SubscriptionPlanStore];
  const stateFromStores = initialize.useStateFromStores(items, () => loadedForSKU.isLoadedForSKU(TIER_2.TIER_2));
  if (-1 !== body.indexOf("{price}")) {
    if (stateFromStores) {
      try {
        const defaultPrice = PremiumUtilsDefault.getDefaultPrice(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
        str = PriceUtils.formatPrice(defaultPrice.amount, defaultPrice.currency);
        const tmpResult = PriceUtils;
      } catch (err) {
      }
    }
  }
  return body.replace(/\{price\}/g, str);
};
export const getHelpArticleLinkProps = function getHelpArticleLinkProps(helpArticle, helpArticleId) {
  let id;
  if (helpArticle != null) {
    id = helpArticle.id;
  }
  id = helpArticleId;
  if (null != id) {
    id = helpArticleId;
    if ("" !== helpArticle.id) {
      id = helpArticle.id;
    }
  }
  if ("" === id) {
    return null;
  } else {
    let linkText;
    if (helpArticle != null) {
      linkText = helpArticle.linkText;
    }
    if (null != linkText) {
      if ("" !== helpArticle.linkText) {
        linkText = helpArticle.linkText;
      }
      const obj = { url: HelpdeskUtilsDefault.getArticleURL(id), linkText };
      return obj;
    }
    const intl = util.intl;
    linkText = intl.string(util.t["sBp+u0"]);
  }
};