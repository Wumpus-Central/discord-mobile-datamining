// === Module 10875: openForLaterLimitUpsell ===

// Module 10875 (openForLaterLimitUpsell)
import obj132 from "obj132" /* 2 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8479 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8482 */;
import PremiumUpsellSubfeatureNames2 from "PremiumUpsellSubfeatureNames" /* 8483 */;

const result = obj132.fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const PremiumUpsellSubfeatureNames = PremiumUpsellSubfeatureNames2.PremiumUpsellSubfeatureNames;
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT, arg1);
};