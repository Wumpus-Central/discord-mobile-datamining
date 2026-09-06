// discord_app/modules/messages/CtaButtonUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import AgeVerificationUtils from "../age_assurance/AgeVerificationUtils.tsx";
import useShouldRenderReportFalsePositiveButton from "../explicit_media_redaction/hooks/useShouldRenderReportFalsePositiveButton.tsx";
import FamilyCenterPendingConnectionStore from "../parent_tools/FamilyCenterPendingConnectionStore.tsx";

require = fn;
const CtaButtonType = {
  MARK_AS_FALSE_POSITIVE: "mark_as_false_positive",
  AGE_VERIFICATION_RETRY: "age_verification_retry",
  CONNECT_TO_TEEN: "connect_to_teen",
  AGE_VERIFICATION_MANUAL_REVIEW: "age_verification_manual_review",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/CtaButtonUtils.tsx");

export { CtaButtonType };
export const getCtaButtonType = function getCtaButtonType(id, channel_id) {
  const obj = useShouldRenderReportFalsePositiveButton;
  if (obj.shouldRenderReportFalsePositiveButton(id)) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else {
    let tmpResult = AgeVerificationUtils;
    if (tmpResult.isAgeVerificationMessageWithRetryCta(channel_id, id)) {
      CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
    } else {
      tmpResult = AgeVerificationUtils;
      if (tmpResult.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id)) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
    }
  }
  return CONNECT_TO_TEEN;
};
export const useCtaButtonType = function useCtaButtonType(id, channel_id) {
  const obj = useShouldRenderReportFalsePositiveButton;
  const shouldRenderReportFalsePositiveButton = obj.useShouldRenderReportFalsePositiveButton(id);
  const result = AgeVerificationUtils.isAgeVerificationMessageWithRetryCta(channel_id, id);
  const items = [FamilyCenterPendingConnectionStore];
  let result1 = null != initialize.useStateFromStores(items, () => pendingConnection.getPendingConnection());
  if (result1) {
    result1 = AgeVerificationUtils.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
    const tmpResult = AgeVerificationUtils;
  }
  if (shouldRenderReportFalsePositiveButton) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else if (result) {
    CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
  } else if (result1) {
    CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
  }
  return CONNECT_TO_TEEN;
};
