// === Module 17389: PremiumTabBadgeCopy ===

// Module 17389 (PremiumTabBadgeCopy)
import util from "util" /* 1113 */;
import MarketingStringFormat from "MarketingStringFormat" /* 9609 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/promotions/PremiumTabBadgeCopy.tsx");

export function getPremiumTabBadgeCopy(promotionMarketingSurface) {
  if ("premiumTab" !== promotionMarketingSurface.properties.properties.oneofKind) {
    return null;
  } else {
    const premiumTab = promotionMarketingSurface.properties.properties.premiumTab;
    const formatVariableValues = promotionMarketingSurface.getFormatVariableValues(util.intl.currentLocale);
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
}