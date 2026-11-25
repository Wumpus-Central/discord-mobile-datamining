// === Module 9600: openScheduledMessagesLimitUpsell ===

// Module 9600 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9552 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9555 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(items) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, items);
};