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
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => loadedForSKU.isLoadedForSKU(TIER_2.TIER_2));
  if (-1 !== body.indexOf("{price}")) {
    if (stateFromStores) {
      try {
        const defaultPrice = require("../../../utils/PremiumUtils.tsx").getDefaultPrice(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
        const obj2 = require("../../../utils/PremiumUtils.tsx");
        str = require("../../../utils/PriceUtils.tsx") /* formatSingleCurrencyPrice */.formatPrice(defaultPrice.amount, defaultPrice.currency);
        const tmpResult = require("../../../utils/PriceUtils.tsx") /* formatSingleCurrencyPrice */;
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
      obj[0] = require("../../../utils/HelpdeskUtils.tsx").getArticleURL(id);
      obj[1] = linkText;
      return obj;
    }
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    linkText = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["sBp+u0"]);
  }
};