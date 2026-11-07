// === Module 14834: openScheduledMessagesLimitUpsell ===

// Module 14834 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9883 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9886 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(items) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, items);
};