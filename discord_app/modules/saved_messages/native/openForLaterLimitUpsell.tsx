// === Module 11957: openForLaterLimitUpsell ===

// Module 11957 (openForLaterLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8091 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8094 */;
import PremiumUpsellSubfeatureNames2 from "PremiumUpsellSubfeatureNames" /* 8095 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, items) {
  const PremiumUpsellSubfeatureNames = PremiumUpsellSubfeatureNames2.PremiumUpsellSubfeatureNames;
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, items);
};