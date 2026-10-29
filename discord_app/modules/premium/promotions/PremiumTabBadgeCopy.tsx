// discord_app/modules/premium/promotions/PremiumTabBadgeCopy.tsx
import util from "../../../intl/index.native.tsx";
import MarketingStringFormat from "MarketingStringFormat.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/premium/promotions/PremiumTabBadgeCopy.tsx");

export function getPremiumTabBadgeCopy(promotionMarketingComponent) {
  if ("premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind) {
    return null;
  } else {
    const premiumTab = promotionMarketingComponent.properties.properties.premiumTab;
    const formatVariableValues = promotionMarketingComponent.getFormatVariableValues(util.intl.currentLocale);
    const result = MarketingStringFormat.formatMarketingPlainString(premiumTab.badgeLabel, formatVariableValues);
    if (result.ok) {
      const result1 = MarketingStringFormat.formatMarketingPlainString(
        premiumTab.acknowledgedBadgeLabel,
        formatVariableValues,
      );
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
