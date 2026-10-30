// === Module 13300: CtaButtonUtils ===

// Module 13300 (CtaButtonUtils)
import initialize from "initialize" /* 504 */;
import useShouldRenderReportFalsePositiveButton from "useShouldRenderReportFalsePositiveButton" /* 13301 */;
import AgeVerificationSystemNotificationUtils from "AgeVerificationSystemNotificationUtils" /* 13302 */;
import FamilyCenterPendingConnectionStore from "FamilyCenterPendingConnectionStore" /* 11330 */;

require = fn;
const CtaButtonType = { MARK_AS_FALSE_POSITIVE: "mark_as_false_positive", AGE_VERIFICATION_RETRY: "age_verification_retry", CONNECT_TO_TEEN: "connect_to_teen", AGE_VERIFICATION_MANUAL_REVIEW: "age_verification_manual_review" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/CtaButtonUtils.tsx");

export { CtaButtonType };
export function getCtaButtonType(id, channel_id) {
  const obj = useShouldRenderReportFalsePositiveButton;
  if (obj.shouldRenderReportFalsePositiveButton(id)) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else {
    if (tmpResult.isAgeVerificationMessageWithRetryCta(channel_id, id)) {
      CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
    } else {
      if (tmpResult2.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id)) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
      tmpResult2 = AgeVerificationSystemNotificationUtils;
    }
    tmpResult = AgeVerificationSystemNotificationUtils;
  }
  return CONNECT_TO_TEEN;
}
export function useCtaButtonType(id, channel_id) {
  const obj = useShouldRenderReportFalsePositiveButton;
  const shouldRenderReportFalsePositiveButton = obj.useShouldRenderReportFalsePositiveButton(id);
  const result = AgeVerificationSystemNotificationUtils.isAgeVerificationMessageWithRetryCta(channel_id, id);
  const items = [FamilyCenterPendingConnectionStore];
  let result1 = null != initialize.useStateFromStores(items, () => pendingConnection.getPendingConnection());
  if (result1) {
    result1 = AgeVerificationSystemNotificationUtils.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
    const tmpResult = AgeVerificationSystemNotificationUtils;
  }
  if (shouldRenderReportFalsePositiveButton) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else if (result) {
    CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
  } else if (result1) {
    CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
  }
  return CONNECT_TO_TEEN;
}