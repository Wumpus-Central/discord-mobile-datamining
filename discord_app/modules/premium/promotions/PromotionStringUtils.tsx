// discord_app/modules/premium/promotions/PromotionStringUtils.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import combinedDefault from "../../../utils/HelpdeskUtils.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import formatSingleCurrencyPrice from "../../../utils/PriceUtils.tsx";
import addSubscriptionPlan from "../../../stores/billing/SubscriptionPlanStore.tsx";
import GuildFeatures from "../PremiumConstants.tsx";

require = fn;
({ PremiumSubscriptionSKUs: c4, SubscriptionPlans: c5 } = GuildFeatures);
const result = require("obj132").fileFinishedImporting("modules/premium/promotions/PromotionStringUtils.tsx");

export const useFormatStringWithCommonPremiumParams = function useFormatStringWithCommonPremiumParams(body) {
  let str = "...";
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => loadedForSKU.isLoadedForSKU(TIER_2.TIER_2));
  if (-1 !== body.indexOf("{price}")) {
    if (stateFromStores) {
      try {
        const defaultPrice = getPremiumPlanItemDefault.getDefaultPrice(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
        str = formatSingleCurrencyPrice.formatPrice(defaultPrice.amount, defaultPrice.currency);
        const tmpResult = formatSingleCurrencyPrice;
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
      obj[0] = combinedDefault.getArticleURL(id);
      obj[1] = linkText;
      return obj;
    }
    const intl = getSystemLocale.intl;
    linkText = intl.string(getSystemLocale.t["sBp+u0"]);
  }
};