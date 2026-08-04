// discord_app/modules/premium/promotions/PromotionStringUtils.tsx
import addSubscriptionPlan from "addSubscriptionPlan";
import GuildFeatures from "GuildFeatures";

let c4;
let c5;
const require = arg1;
({ PremiumSubscriptionSKUs: c4, SubscriptionPlans: c5 } = GuildFeatures);
const result = require("initialize").fileFinishedImporting("modules/premium/promotions/PromotionStringUtils.tsx");

export const useFormatStringWithCommonPremiumParams = function useFormatStringWithCommonPremiumParams(body) {
  let str = "...";
  const items = [addSubscriptionPlan];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => loadedForSKU.isLoadedForSKU(TIER_2.TIER_2));
  if (-1 !== body.indexOf("{price}")) {
    if (stateFromStores) {
      try {
        const defaultPrice = importDefault(3839).getDefaultPrice(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
        const obj2 = importDefault(3839);
        str = require(5673) /* formatSingleCurrencyPrice */.formatPrice(defaultPrice.amount, defaultPrice.currency);
        const tmpResult = require(5673) /* formatSingleCurrencyPrice */;
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
      const obj = { url: null, linkText: null };
      obj[0] = importDefault(1945).getArticleURL(id);
      obj[1] = linkText;
      return obj;
    }
    const intl = require(1236) /* getSystemLocale */.intl;
    linkText = intl.string(require(1236) /* getSystemLocale */.t["sBp+u0"]);
  }
};