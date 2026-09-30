// === Module 7465: openScheduledMessagesLimitUpsell ===

// Module 7465 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7466 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7469 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(items) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, items);
};