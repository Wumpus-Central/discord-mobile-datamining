// === Module 11411: openForLaterLimitUpsell ===

// Module 11411 (openForLaterLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7466 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7469 */;
import PremiumUpsellSubfeatureNames2 from "PremiumUpsellSubfeatureNames" /* 7470 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, items) {
  const PremiumUpsellSubfeatureNames = PremiumUpsellSubfeatureNames2.PremiumUpsellSubfeatureNames;
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, items);
};