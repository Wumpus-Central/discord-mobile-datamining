// discord_app/modules/saved_messages/native/openForLaterLimitUpsell.tsx
const result = require("PremiumUpsellSubfeatureNames").fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0) {
  const PremiumUpsellSubfeatureNames = require("../../premium/roadblocks/native/utils/PremiumUpsellSubfeatureNames.tsx") /* PremiumUpsellSubfeatureNames */.PremiumUpsellSubfeatureNames;
  require("../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx")(require("../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx") /* EntitlementFeatureNames */.EntitlementFeatureNames.SAVED_MESSAGES, arg0 ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT);
};