// === Module 16215: PremiumTabBadgeCopy ===

// Module 16215 (PremiumTabBadgeCopy)
import util from "util" /* 1128 */;
import MarketingStringFormat from "MarketingStringFormat" /* 16216 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/promotions/PremiumTabBadgeCopy.tsx");

export const getPremiumTabBadgeCopy = function getPremiumTabBadgeCopy(promotionMarketingComponent) {
  if ("premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind) {
    return null;
  } else {
    const premiumTab = promotionMarketingComponent.properties.properties.premiumTab;
    const formatVariableValues = promotionMarketingComponent.getFormatVariableValues(util.intl.currentLocale);
    const result = MarketingStringFormat.formatMarketingPlainString(premiumTab.badgeLabel, formatVariableValues);
    if (result.ok) {
      const result1 = MarketingStringFormat.formatMarketingPlainString(premiumTab.acknowledgedBadgeLabel, formatVariableValues);
      let tmp3 = null;
      if (result1.ok) {
        const obj = { badgeCopy: result.content, acknowledgedBadgeCopy: result1.content };
        tmp3 = obj;
      }
      return tmp3;
    } else {
      return null;
    }
  }
};