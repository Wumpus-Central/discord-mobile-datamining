// === Module 19333: MobileBottomSheetCopy ===

// Module 19333 (MobileBottomSheetCopy)
import util from "util" /* 1113 */;
import PromotionStringUtils from "PromotionStringUtils" /* 15543 */;
import MarketingStringFormat from "MarketingStringFormat" /* 17133 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/premium/promotions/MobileBottomSheetCopy.tsx");

export function getMobileBottomSheetCopy(promotionMarketingComponent) {
  if ("mobileBottomSheet" !== promotionMarketingComponent.properties.properties.oneofKind) {
    return null;
  } else {
    const mobileBottomSheet = promotionMarketingComponent.properties.properties.mobileBottomSheet;
    const formatVariableValues = promotionMarketingComponent.getFormatVariableValues(util.intl.currentLocale);
    const result = MarketingStringFormat.formatMarketingPlainString(mobileBottomSheet.header, formatVariableValues);
    if (result.ok) {
      const result1 = MarketingStringFormat.formatMarketingPlainString(mobileBottomSheet.body, formatVariableValues);
      if (result1.ok) {
        let content = null;
        if (null != mobileBottomSheet.button) {
          const result2 = MarketingStringFormat.formatMarketingPlainString(mobileBottomSheet.button.copy, formatVariableValues);
          if (result2.ok) {
            content = result2.content;
          } else {
            return null;
          }
          const tmp7Result3 = MarketingStringFormat;
        }
        const obj = { header: result.content, body: result1.content, buttonCopy: content, helpArticleLink: PromotionStringUtils.getHelpArticleLinkProps(mobileBottomSheet.helpArticle, mobileBottomSheet.helpArticleId) };
        return obj;
      } else {
        return null;
      }
      const tmp7Result = MarketingStringFormat;
    } else {
      return null;
    }
  }
}