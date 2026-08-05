import { EntitlementFeatureNames } from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import { openPremiumUpsellActionSheet } from "../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx";
import { PremiumUpsellSubfeatureNames } from "../../premium/roadblocks/native/utils/PremiumUpsellSubfeatureNames.tsx";
// discord_app/modules/saved_messages/native/openForLaterLimitUpsell.tsx
const result = require("PremiumUpsellSubfeatureNames").fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0) {
  const PremiumUpsellSubfeatureNames = PremiumUpsellSubfeatureNames /* PremiumUpsellSubfeatureNames */.PremiumUpsellSubfeatureNames;
  openPremiumUpsellActionSheet(EntitlementFeatureNames /* EntitlementFeatureNames */.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT);
};