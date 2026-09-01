// discord_app/modules/saved_messages/native/openForLaterLimitUpsell.tsx
import set from "../../../../_runtime/00002_set.js";
import openPremiumUpsellActionSheetDefault from "../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import PremiumUpsellSubfeatureNames2 from "../../premium/roadblocks/native/utils/PremiumUpsellSubfeatureNames.tsx";

const result = set.fileFinishedImporting("modules/saved_messages/native/openForLaterLimitUpsell.tsx");

export default function openForLaterLimitUpsell(arg0, arg1) {
  const PremiumUpsellSubfeatureNames = PremiumUpsellSubfeatureNames2.PremiumUpsellSubfeatureNames;
  openPremiumUpsellActionSheetDefault(
    EntitlementFeatureNames.EntitlementFeatureNames.SAVED_MESSAGES,
    arg0
      ? PremiumUpsellSubfeatureNames.SAVED_MESSAGES_REMINDER_LIMIT
      : PremiumUpsellSubfeatureNames.SAVED_MESSAGES_BOOKMARK_LIMIT,
    arg1,
  );
}
