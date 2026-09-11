// === Module 7921: openScheduledMessagesLimitUpsell ===

// Module 7921 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7922 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7925 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(items) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, items);
};