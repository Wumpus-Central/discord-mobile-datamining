// discord_app/modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx
import openPremiumUpsellActionSheetDefault from "../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(
    EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES,
    undefined,
    arg0,
  );
}
