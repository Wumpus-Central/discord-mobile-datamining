// discord_app/modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx
import set from "../../../../_runtime/00002_set.js";
import openPremiumUpsellActionSheetDefault from "../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";

const result = set.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(
    EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES,
    undefined,
    arg0,
  );
}
