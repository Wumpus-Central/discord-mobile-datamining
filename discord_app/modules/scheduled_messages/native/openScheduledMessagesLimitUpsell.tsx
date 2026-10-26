// === Module 14043: openScheduledMessagesLimitUpsell ===

// Module 14043 (openScheduledMessagesLimitUpsell)
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 5030 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9680 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(items) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, items);
};