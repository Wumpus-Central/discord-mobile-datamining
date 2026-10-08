// === Module 12866: openScheduledMessagesLimitUpsell ===

// Module 12866 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9216 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9219 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(items) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, items);
};